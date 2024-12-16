/// <reference types="@babel/core" />
/// <reference types="@babel/traverse" />
/// <reference types="@babel/types" />

const { readFileSync, statSync } = require('fs');

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
 * @param {babel.types.Expression} callee
 */
function isJSX(callee) {
    return callee.type === 'Identifier' && (callee.name === '_jsx' || callee.name === '_jsxs' || callee.name == '_jsxDEV');
}

/**
 * @param {babel.NodePath<babel.types.CallExpression>} path
 */
function getJSXComponent(path) {
    const [component] = path.node.arguments;
    switch (component.type) {
        case 'Identifier':
            return component.name;
        case 'MemberExpression':
            if (component.object.name === '_components') {
                return component.property.name;
            }
            if (component.object.name === 'Badge') {
                return component.object.name + '.' + component.property.name;
            }
    }
    return '';
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
            if (isJSX(path.node.callee)) {
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

    let finalSlug = '';
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

/**
 * @callback Transformer
 * @param {string} component
 * @param {babel.NodePath<babel.types.CallExpression>} path
 * @param {babel.NodePath<babel.types.ObjectProperty>[]} props
 * @param {babel.types} t
 */

/** @type {Record<string, Transformer>} */
const transform = {
    h1: transformHeader,
    h2: transformHeader,
    h3: transformHeader,
    a: transformLink,
    MemberList: transformMemberList,
    Module(component, path, props, t, state) {
        const pName = props.find(v => v.node.key.name === 'name');
        state.module = pName.node.value.value;
    }
};

/** @type {(b: babel) => { visitor: babel.Visitor }} */
module.exports = function ({ types: t }) {
    return {
        visitor: {
            FunctionDeclaration(path) {
                if (path.node.id.name === '_createMdxContent') {
                    const ms = statSync('src/data/api.json').mtimeMs;
                    if (getApiIndex.l !== ms) {
                        getApiIndex.d = null;
                        getApiIndex.l = ms;
                        for (let i in links) {
                            delete links[i];
                        }
                    }
                    const state = {
                        tocList: [],
                        hashes: {}
                    };
                    path.traverse({
                        VariableDeclaration(path) {
                            path.skip();
                        },
                        CallExpression(path) {
                            if (isJSX(path.node.callee)) {
                                const component = getJSXComponent(path);
                                if (transform[component]) {
                                    path.skip();
                                    (0, transform[component])(component, path, path.get('arguments.1.properties'), t, state);
                                }
                            }
                        }
                    });
                    path.insertAfter(t.exportNamedDeclaration(
                        t.variableDeclaration('const', [
                            t.variableDeclarator(t.identifier('meta'), t.objectExpression([
                                t.objectProperty(t.identifier('module'), t.stringLiteral(state.module || '')),
                                t.objectProperty(t.identifier('title'), t.stringLiteral(state.tocList[0]?.title || '')),
                                t.objectProperty(t.identifier('tableOfContents'),
                                    t.arrayExpression(state.tocList.map(v => (
                                        t.objectExpression([
                                            t.objectProperty(t.identifier('kind'), t.stringLiteral(v.kind)),
                                            t.objectProperty(t.identifier('title'), t.stringLiteral(v.title)),
                                            t.objectProperty(t.identifier('hash'), t.stringLiteral(v.slug && ('#s-' + v.slug))),
                                        ])
                                    ))))
                            ]))
                        ])));
                }
            }
        }
    };
};
