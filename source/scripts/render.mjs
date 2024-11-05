import ReactDOMServer from "react-dom/server";
import { evaluate } from "@mdx-js/mdx";
import { readFile, writeFile } from 'node:fs/promises';
import JavascriptParser from 'webpack/lib/javascript/JavascriptParser.js';

import jsx from "react/jsx-runtime";
import React from "react";

import apiIndex from "../src/data/api.json" with { type: 'json' };

function generateAnchor(v) {
    return v.toLowerCase().replace(/\W+/g, '-').replace(/^-|-$/g, '');
}

const apiLocation = Object.fromEntries(Object.entries(apiIndex).flatMap(([i, v]) => v.map(v => {
    const [name, hash] = Array.isArray(v) ? v : [v];
    return [name, '/docs' + i + (hash || '#s-' + generateAnchor(name))];
})));

const customComponents = {
    a: MDXAnchorElement,
    Badge: {
        TS: function () { return null },
        ReadOnly: function () { return null },
        Optional: function () { return null },
        Required: function () { return null },
        Version: function () { return null },
        Deprecated: function () { return null },
        Experimental: function () { return null },
    },
    Color: function () { return null },
    Inline: function () { return null },
    Snippets: function () { return null },
    MemberList: function () { return null },
    Module: function () { return null },
    DemoWithSource: function () { return null },
    MemberList: function () { return null },
    CodeBlock: function () { return null },
    ImportHint: function () { return null },
    VersionTimeline: function () { return null },
    WaterpipeExample: function () { return null },
};

function fixImport(content) {
    const arr = content.split('\n');
    const tmp = [];
    for (let v of arr) {
        if (!/import\s*(\{[^}]*\}|\w+)\s*from\s*['"]([^'"]+)['"]/.test(v)) {
            break;
        }
        let resultString = '';
        let parser = new JavascriptParser('module');
        parser.hooks.importSpecifier.tap('import', (statement, source, exportName, identifierName) => {
            if (source.startsWith('src/data')) {
                resultString += `export const ${identifierName} = {};`;
            } else if (source.startsWith('!raw-loader!')) {
                resultString += `export const ${identifierName} = '';`;
            } else if (/^[A-Z]/.test(identifierName) && !customComponents[identifierName]) {
                resultString += `export const ${identifierName} = function () { return null; };`
            }
        });
        parser.parse(v);
        tmp.push(resultString);
    }
    arr.splice(0, tmp.length, ...tmp);
    return arr.join('\n');
}

const content = fixImport(await readFile(process.argv[2], 'utf8'));
const module = await evaluate(content, {
    ...jsx,
    useDynamicImport: true,
    useMDXComponents() {
        return customComponents;
    }
});

function MDXAnchorElement({ href, children }) {
    if (href[0] === ':') {
        const codeContent = href.slice(1) || (Array.isArray(children) ? children : [children]).map(v => v.props ? v.props.children : v).join('');
        href = apiLocation[codeContent] || apiLocation[codeContent + '()'];
        if (!href) {
            return children;
        }
    }
    const external = href[0] !== '/' && href[0] !== '#';
    return (
        React.createElement('a', { href, target: external ? '_blank' : '_self', children })
    );
}



const Module = module.default();


await writeFile('./tmp.html', ReactDOMServer.renderToString(Module), 'utf8')
