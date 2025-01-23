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

const { readFileSync, statSync } = require('fs');
const { getImportHintSource, getParsedSource, getDataObject, isJSXCall, getJSXComponent, getJSXFactory, getRawContentFromImport } = require('./util/transform-helpers');

const links = Object.create(null);

function getApiIndex() {
    if (!getApiIndex.d) {
        const data = JSON.parse(readFileSync('src/data/api.json', 'utf8'));
        const dict = Object.create(null);
        for (let i in data) {
            data[i].forEach(v => {
                const [name, hash] = Array.isArray(v) ? v : [v];
                dict[name] = [i, hash];
            });
        }
        getApiIndex.d = dict;
    }
    return getApiIndex.d;
}

function generateAnchor(v) {
    return v.toLowerCase().replace(/\W+/g, '-').replace(/^-|-$/g, '');
}

function getHref(text) {
    const apiLocation = getApiIndex();
    let [path, hash] = apiLocation[text] || apiLocation[text + '()'] || [];
    if (!path) {
        return '';
    }
    if (!hash) {
        if (/:(.+ event)$/.test(text)) {
            hash = '#s-' + generateAnchor(RegExp.$1);
        } else if (text.replace(/[^\w.]/g, '') !== path.split('/').pop()) {
            hash = '#s-' + generateAnchor(text);
        }
    }
    return '/docs' + path + (hash || '');
}

/**
 * @param {babel.NodePath<babel.types.Expression>} path
 */
function getTextContent(path) {
    const texts = [];
    const codeContents = [];
    let startWithCodeElement = false;

    /** @type {babel.Visitor} */
    const visitor = {
        CallExpression(path, state) {
            if (isJSXCall(path)) {
                const component = getJSXComponent(path);
                path.skip();
                if (component !== 'del' || !component.startsWith('Badge.')) {
                    state.unshift({ parent: component })
                    path.get('arguments.1').traverse(visitor, state);
                    state.shift();
                }
                state[0].previous = component;
            }
        },
        StringLiteral(path, state) {
            const text = path.node.value;
            if (state[0].parent === 'code') {
                if (!texts.length) {
                    startWithCodeElement = true;
                }
                codeContents.push(/([^.]+)$/.exec(text)[1]);
            } else if (state[0].previous === 'code' && text.startsWith(' event')) {
                codeContents.push(codeContents.pop() + '^');
            }
            texts.push(text);
        }
    };
    path.traverse(visitor, [{}]);

    const tocTitle = codeContents.join(', ');
    return {
        startWithCodeElement,
        textContent: texts.join(''),
        tocTitle: texts.length === 1 && tocTitle === texts[0] ? null : tocTitle
    };
}

/** @type {Transformer} */
function transformLink(component, path, props, t) {
    const pChildren = props.find(v => v.node.key.name === 'children');
    const pHref = props.find(v => v.node.key.name === 'href');

    let href = pHref.node.value.value;
    if (href[0] === ':') {
        const text = href.slice(1) || getTextContent(pChildren).textContent;
        href = links[text] || (links[text] = getHref(text));
        if (!href) {
            path.replaceWith(pChildren.get('value'));
            return;
        }
        pHref.node.value = t.stringLiteral(href);
    }
    if (href[0] !== '/' && href[0] !== '#') {
        pHref.insertBefore(t.objectProperty(t.identifier('className'), t.stringLiteral('external')));
        pHref.insertBefore(t.objectProperty(t.identifier('target'), t.stringLiteral('_blank')));
    }
}

/** @type {Transformer} */
function transformHeader(component, path, props, t, state) {
    const pChildren = props.find(v => v.node.key.name === 'children');
    const { textContent, tocTitle, startWithCodeElement } = getTextContent(pChildren);

    let finalSlug = '', i;
    if (component === 'h2' || component === 'h3') {
        let slug = generateAnchor(textContent);
        finalSlug = slug, i = 1;
        while (state.hashes[finalSlug]) {
            finalSlug = slug + '-' + (++i);
        }
        state.hashes[finalSlug] = true;
        pChildren.insertBefore(t.objectProperty(t.identifier('id'), t.stringLiteral('s-' + finalSlug)));
    }
    if (component === 'h1' || component === 'h2' || startWithCodeElement) {
        state.tocList.push({
            kind: component,
            title: tocTitle || textContent,
            slug: finalSlug
        });
    }
}

/** @type {Transformer} */
function transformMemberList(component, path, props, t) {
    for (let p of props) {
        if (p.node.key.name === 'extends' || p.node.key.name === 'extendsTo') {
            const value = p.node.value;
            switch (value.type) {
                case 'StringLiteral': {
                    const href = getHref(value.value);
                    if (href) {
                        p.get('value').replaceWith(t.arrayExpression([t.arrayExpression([value, t.stringLiteral(href)])]));
                    }
                    break;
                }
                case 'ArrayExpression': {
                    value.elements.forEach((v, i) => {
                        const href = getHref(v.value);
                        if (href) {
                            p.get(`value.elements.${i}`).replaceWith(t.arrayExpression([v, t.stringLiteral(href)]));
                        }
                    });
                    break;
                }
            }
        }
    }
}

/** @type {Transformer} */
function transformCode(component, path, props, t, state, jsx) {
    const className = props.find(v => v.node.key.name === 'className')?.node.value.value;
    const children = props.find(v => v.node.key.name === 'children')?.node.value.value;
    if (!className) {
        return;
    }
    const language = className.match(/language-(\w.*?)\b/)?.[1] || "javascript";
    const matches = children && className ? Array.from(children.matchAll(/\/{3}\s?([^\r\n]+)\r?\n/g)) : [];
    const files = matches.map((v, i) => {
        const [name, lang] = v[1].split(' ');
        return {
            name,
            language: lang || language || name.slice(name.lastIndexOf('.') + 1),
            content: children.slice((v.index || 0) + v[0].length, matches[i + 1]?.index ?? children.length).trim()
        };
    });
    if (files[0]) {
        const source = files.map(v => {
            v.content = getParsedSource(v.language, v.content);
            return v;
        });
        path.replaceWith(jsx('CodeBlockWithTab', t.valueToNode({ language, source })));
    } else {
        const source = getParsedSource(language, children);
        path.replaceWith(jsx('SyntaxHighlight', t.valueToNode({ language, source })));
    }
}

/** @type {Transformer} */
function transformCodeBlock(component, path, props, t, state, jsx) {
    for (let o of props) {
        if (o.node.key.name === 'children' && o.node.value.type === 'Identifier') {
            const source = state.importSources[o.node.value.name];
            if (!source) {
                return;
            }
            o.get('value').replaceWith(t.stringLiteral(source));
        }
    }
    path.replaceWith(jsx('pre', t.objectExpression([
        t.objectProperty(t.identifier('children'), jsx('code', t.objectExpression(props.map(v => t.cloneNode(v.node)))))
    ])));
    transformCode('code', path.get('arguments.1.properties.0.value'), props, t, state, jsx);
}

/** @type {Transformer} */
function transformWaterpipeExample(component, path, props, t) {
    const pData = props.find(v => v.node.key.name === 'data');
    if (pData) {
        const value = getDataObject(pData);
        const source = getParsedSource('json', JSON.stringify(value));
        pData.insertAfter(t.objectProperty(t.identifier('source'), t.valueToNode(source)));
    }
}

/** @type {Transformer} */
function transformSnippets(component, path, props, t) {
    const pSnippets = props.find(v => v.node.key.name === 'snippets');
    if (pSnippets.node.value.type === 'ArrayExpression') {
        const source = pSnippets.node.value.elements.map(v => {
            return getParsedSource('typescript', v.value);
        });
        pSnippets.insertAfter(t.objectProperty(t.identifier('source'), t.valueToNode(source)));
    }
}

/** @type {Transformer} */
function transformImportHint(component, path, props, t) {
    const source = getImportHintSource(Object.fromEntries(props.map(v => [v.node.key.name, v.node.value.value])));
    source.forEach(v => {
        v.content = getParsedSource('javascript', v.content);
    });
    props.at(-1).insertAfter(t.objectProperty(t.identifier('source'), t.valueToNode(source)));
}

/** @type {Record<string, Transformer>} */
const transform = {
    h1: transformHeader,
    h2: transformHeader,
    h3: transformHeader,
    a: transformLink,
    code: transformCode,
    CodeBlock: transformCodeBlock,
    ImportHint: transformImportHint,
    MemberList: transformMemberList,
    Snippets: transformSnippets,
    WaterpipeExample: transformWaterpipeExample,
    Module(component, path, props, t, state) {
        const pName = props.find(v => v.node.key.name === 'name');
        state.module = pName.node.value.value;
    }
};

/** @type {(b: babel) => { visitor: babel.Visitor }} */
module.exports = function ({ types: t }) {
    return {
        visitor: {
            ImportDeclaration(path, s) {
                if (path.node.source.value.startsWith('!raw-loader!')) {
                    getRawContentFromImport(path, s);
                }
            },
            FunctionDeclaration(path, s) {
                if (path.node.id.name === '_createMdxContent') {
                    const mtimeMs = statSync('src/data/api.json').mtimeMs;
                    if (getApiIndex.l !== mtimeMs) {
                        getApiIndex.d = null;
                        getApiIndex.l = mtimeMs;
                        for (let i in links) {
                            delete links[i];
                        }
                    }
                    const state = {
                        importSources: s.importSources || Object.create(null),
                        tocList: [],
                        hashes: {}
                    };
                    path.traverse({
                        VariableDeclaration(path) {
                            path.skip();
                        },
                        CallExpression(path) {
                            if (isJSXCall(path)) {
                                const component = getJSXComponent(path);
                                if (transform[component]) {
                                    path.skip();
                                    (0, transform[component])(component, path, path.get('arguments.1.properties'), t, state, getJSXFactory(path, t));
                                }
                            }
                        }
                    });
                    const meta = {
                        module: state.module || '',
                        title: state.tocList[0]?.title || '',
                        tableOfContents: state.tocList.map(v => ({
                            kind: v.kind,
                            title: v.title,
                            hash: v.slug && ('#s-' + v.slug)
                        }))
                    };
                    path.insertAfter(t.exportNamedDeclaration(t.variableDeclaration('const', [
                        t.variableDeclarator(t.identifier('meta'), t.valueToNode(meta))
                    ])));
                }
            }
        }
    };
};
