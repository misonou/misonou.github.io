/// @ts-check

/// <reference types="@babel/core" />
/// <reference types="@babel/traverse" />
/// <reference types="@babel/types" />

/**
 * @callback Transformer
 * @param {string} component
 * @param {babel.NodePath<babel.types.CallExpression>} path
 * @param {babel.NodePath<babel.types.ObjectProperty>[]} props
 * @param {babel.types} t
 * @param {Record<string, any>} state
 * @param {(component: string, props: babel.types.Node) => babel.types.Node} jsx
 */

const React = require('react');
const ReactDOM = require('react-dom/server');
const { Highlight, Prism } = require('prism-react-renderer');
const { dirname, join, extname } = require('path');
const { readFileSync } = require('fs');

/**
 * @param {babel.NodePath<babel.types.CallExpression>} path
 */
function isJSXComponent(path) {
    const callee = path.node.callee;
    return callee.type === 'Identifier' && (callee.name === '_jsx' || callee.name === '_jsxs' || callee.name == '_jsxDEV');
}

/**
 * @param {babel.NodePath<babel.types.CallExpression>} path
 * @param {typeof babel.types} t
 * @returns {(component: string, props: babel.types.Expression) => babel.types.Expression}
 */
function getJSXFactory(path, t) {
    const jsx = path.node.callee.name;
    return (component, props) => {
        return t.callExpression(t.identifier(jsx), [
            t.memberExpression(t.identifier('_components'), t.identifier(component)),
            props
        ]);
    };
}

/**
 * @param {babel.NodePath<babel.types.CallExpression>} path
 */
function getJSXComponent(path) {
    const [component] = path.node.arguments;
    switch (component.type) {
        case 'StringLiteral':
            return component.value;
        case 'Identifier':
            return component.name;
        case 'MemberExpression':
            if (component.object.name === '_components') {
                return component.property.name;
            }
            if (component.object.name === 'Badge') {
                return component.object.name + '.' + component.property.name;
            }
            break;
    }
    return '';
}

/**
 * @param {babel.NodePath<babel.types.CallExpression>} path 
 * @param {typeof babel.types} t 
 * @param {*} state 
 * @param {Record<string, Transformer>} transform
 */
function transformJSXComponent(path, t, state, transform) {
    const component = getJSXComponent(path);
    if (transform[component]) {
        (0, transform[component])(component, path, path.get('arguments.1.properties'), t, state, getJSXFactory(path, t));
        return true;
    }
}

/**
 * @param {string} language
 * @param {string} code
 */
function getParsedSource(language, code) {
    code = language === 'text' ? code.trim() : code.trim().replace(/\n( {4,})/g, (v, a) => '\n' + a.slice(a.length / 2));
    let result;
    ReactDOM.renderToStaticMarkup(React.createElement(Highlight, {
        language,
        code,
        children({ tokens }) {
            result = tokens;
            return React.createElement(React.Fragment);
        }
    }));
    return {
        tokens: transformTokens(language, result),
        collapsedLines: language === 'tsx' || language === 'ts' ? code.split('\n').findIndex(v => /^(export )?(const|(default )?(async )?function)/.test(v)) - 1 : 0
    };
}

/**
 * @param {string} language
 * @param {{ types: string[]; content: string; empty?: boolean; }[][]} tokens
 */
function transformTokens(language, tokens) {
    const isTSX = language === 'tsx';
    const isNullComment = language === 'html' ? '<!-- ... -->' : '/* ... */';
    const isNullComment2 = '/* \u2026 ,*/';

    tokens.forEach(line => {
        /**
         * @param {(typeof tokens)[number][number]} token
         * @param {string} match
         */
        const checkCommentNeighbor = (token, match) => {
            if (token && token.types.includes('punctuation') && token.content === match) {
                token.types.push('comment', 'comment-hid');
            }
        };
        if (isTSX) {
            // handle JSX comments {/* */}
            let index = line.findIndex(v => v.types.includes('comment'));
            if (index >= 0) {
                checkCommentNeighbor(line[index - 1], '{');
                checkCommentNeighbor(line[index + 1], '}');
            }
        }
        line.forEach(token => {
            if (token.types.includes('comment')) {
                if (token.content === isNullComment || token.content === isNullComment2) {
                    token.types.push('comment-dot');
                    token.content = '\u2026';
                } else if (!token.content.startsWith('/**') && !token.types.includes('comment-hid')) {
                    token.types.push(token.content.startsWith('// ->') ? 'comment-res' : 'comment-msg');
                    token.content = token.content.replace(/^(\/\*|\/+|<!--)\s*(->\s)?|\s*\*\/$|\s*-->$/g, '').replace(/\.{3}(?!\.)/g, '\u2026');
                }
            }
        });
    });
    return tokens;
}

function formatImport(name, defaults) {
    return defaults ? name : `{ ${name} }`;
}

function getImportHintSource(props) {
    if (props.typeOnly) {
        return [
            {
                name: 'ts',
                content: `import type ${formatImport(props.name, !!props.import)} from "${props.module}"`
            }
        ];
    }
    const cjs = props.require ? props.require.split('.') : props.global?.split('.');
    return [
        {
            name: 'module',
            content: `import ${formatImport(props.name, !!props.import)} from "${props.module}"`
        },
        {
            name: 'cjs',
            content: cjs ?
                `const ${cjs[0] === 'default' ? cjs[1] || props.name : formatImport(cjs[1] || cjs[0])} = require("${props.requireModule ?? props.module.split('/').slice(0, props.module[0] === '@' ? 2 : 1).join('/')}")` +
                (cjs[2] ? `\r\nconst ${props.name} = ${cjs[1]}.${cjs[2]}` : '') :
                '/* No CommonJS export */'
        },
        {
            name: '<script>',
            content: props.global ? `const ${props.name} = ${props.global}` : '/* No UMD distribution */'
        },
    ]
}

/**
 * @param {babel.NodePath<babel.types.ObjectProperty>} pData
 */
function getDataObject(pData) {
    const stack = [{}];
    const setValue = (value) => {
        stack[0].value = value;
        if (stack[0].array) {
            stack[1].value[stack[0].key++] = value;
        }
    };
    pData.traverse({
        // only these expression type is interested as
        // data should be directly serializable to JSON
        Literal(path) {
            setValue(path.node.value);
        },
        ObjectExpression() {
            setValue({});
        },
        ArrayExpression: {
            enter() {
                setValue([]);
                stack.unshift({ key: 0, array: true })
            },
            exit() {
                stack.shift();
            }
        },
        ObjectProperty: {
            enter(path) {
                stack.unshift({ key: path.node.key.name ?? path.node.key.value });
            },
            exit() {
                const { key, value } = stack.shift();
                stack[0].value[key] = value;
            }
        }
    });
    return stack[0].value;
}

/**
 * @param {babel.NodePath<babel.types.ImportDeclaration>} path
 * @param {*} state
 */
function getRawContentFromImport(path, state) {
    const { source, specifiers } = path.node;
    const dict = state.importSources || (state.importSources = Object.create(null));
    const resource = source.value.replace('!raw-loader!', '');
    try {
        let filename = resource.startsWith('src/') ? join(state.cwd, resource) : resource.startsWith('./') ? join(dirname(state.filename), resource) : resource;
        if (extname(filename) === '') {
            filename += '.tsx';
        }
        dict[specifiers[0].local.name] = readFileSync(filename, 'utf8');
    } catch {
        console.warn(`Unable to resolve '${resource}' from '${state.filename}'`);
    }
}

exports.getRawContentFromImport = getRawContentFromImport;
exports.getJSXComponent = getJSXComponent;
exports.getParsedSource = getParsedSource;
exports.getImportHintSource = getImportHintSource;
exports.getDataObject = getDataObject;
exports.isJSXComponent = isJSXComponent;
exports.transformJSXComponent = transformJSXComponent;

Prism.languages.json = {
    'property': {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: true,
        greedy: true
    },
    'string': {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true
    },
    'comment': {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
    },
    'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    'punctuation': /[{}[\],]/,
    'operator': /:/,
    'boolean': /\b(?:false|true)\b/,
    'null': {
        pattern: /\bnull\b/,
        alias: 'keyword'
    }
};
