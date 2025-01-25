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

const { relative } = require('path');
const { getParsedSource, isJSXComponent, getRawContentFromImport, transformJSXComponent } = require('./util/transform-helpers');

/** @type {Transformer} */
function transformDemoWithSource(component, path, props, t, state) {
    const pSource = props.find(v => v.node.key.name === 'source');
    if (pSource && pSource.node.value.type === 'ObjectExpression') {
        pSource.node.value.properties.forEach((v, i) => {
            if ('value' in v && v.value.type === 'Identifier') {
                const source = state.importSources[v.value.name];
                if (!source) {
                    return;
                }
                const name = v.key.name ?? v.key.value;
                const language = name.slice(name.lastIndexOf('.') + 1);
                pSource.get(`value.properties.${i}.value`).replaceWith(t.valueToNode(getParsedSource(language, source)));
            }
        });
    }
}

/** @type {(b: babel) => { visitor: babel.Visitor }} */
module.exports = function ({ types: t }) {
    return {
        visitor: {
            Program(path, s) {
                if (relative(s.opts.include, s.filename).startsWith('..')) {
                    path.skip();
                }
            },
            ImportDeclaration(path, s) {
                if (path.node.source.value.startsWith('!raw-loader!')) {
                    getRawContentFromImport(path, s);
                }
            },
            CallExpression(path, s) {
                if (isJSXComponent(path) && transformJSXComponent(path, t, s, { DemoWithSource: transformDemoWithSource })) {
                    path.skip();
                }
            }
        }
    };
};
