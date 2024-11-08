import { readFile, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';
import { promisify } from 'node:util';
import { evaluate } from "@mdx-js/mdx";
import glob from "glob";
import React from "react";
import yaml from "yaml";
import jsx from "react/jsx-runtime";
import JavascriptParser from 'webpack/lib/javascript/JavascriptParser.js';

const customComponents = {
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

function* iterateReactNodes(node) {
    yield node;
    if (node.props && node.props.children) {
        for (let o of React.Children.toArray(node.props.children)) {
            yield* iterateReactNodes(o);
        }
    }
}

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

function generateAnchor(v) {
    return v.toLowerCase().replace(/\W+/g, '-').replace(/^-|-$/g, '');
}

async function processFiles(path) {
    let pageTitle;
    let moduleName;
    const tokens = [];
    const basename = basename(path, '.mdx');
    try {
        const content = fixImport(await readFile(path, 'utf8'));
        const module = await evaluate(content, {
            ...jsx,
            useDynamicImport: true,
            useMDXComponents() {
                return customComponents;
            }
        });
        let lastHash = '';
        for (let o of iterateReactNodes(module.default())) {
            switch (o.type) {
                case 'h1': {
                    pageTitle = React.Children.toArray(o.props.children).filter(v => typeof v === 'string')[0].replace(/~~.+~~/, '').trim();
                    break;
                }
                case 'h2': {
                    const text = React.Children.toArray(o.props.children).filter(v => typeof v === 'string')[0];
                    lastHash = '#s-' + generateAnchor(text);
                    if (text.match(/^dom:.+ event$/)) {
                        tokens.push(text);
                    }
                    break;
                }
                case 'code': {
                    if (o.props.className && lastHash === '#s-syntax') {
                        const [name] = o.props.children.match(/^([a-z0-9.]+)(?=\()/i) || [];
                        if (name) {
                            if (name === basename) {
                                tokens.push(name + '()');
                            } else {
                                tokens.push([name + '()', ""]);
                            }
                        }
                        lastHash = '';
                    }
                    break;
                }
                case customComponents.MemberList: {
                    const { i, ip, im, sp, sm, ev } = o.props;
                    if (!o.props.noRoot) {
                        tokens.push(lastHash ? [i, lastHash] : i);
                    }
                    tokens.push(
                        ...ip?.map(v => i + (v[0] !== '[' ? '.' : '') + v) || [],
                        ...im?.map(v => i + (v[0] !== '[' ? '.' : '') + v) || [],
                        ...sp?.map(v => i + (v[0] !== '[' ? '.' : '') + v) || [],
                        ...sm?.map(v => i + (v[0] !== '[' ? '.' : '') + v) || [],
                        ...ev?.map(v => o.props.i + ': ' + v + ' event') || []
                    );
                    break;
                }
                case customComponents.Module: {
                    moduleName = o.props.name;
                    break;
                }
            }
        }
    } catch (e) {
        console.error(`Unable to process ${path}: ${e.message}`);
    }
    return { moduleName, tokens, pageTitle };
}

(async function () {
    const dict = {};
    const files = await promisify(glob)('src/docs/**/*.mdx');
    const results = await Promise.all(files.map(processFiles));
    results.forEach((v, i) => {
        dict[files[i].replace('src/docs', '').replace('.mdx', '')] = v;
    });

    // extract React components from nav
    const nav = yaml.parse(await readFile('src/data/docs.yml', 'utf8'));
    (function process(pages) {
        pages.forEach(v => {
            if (v.pages) {
                return process(v.pages);
            }
            if (dict[v.path]) {
                let { moduleName, tokens, pageTitle } = dict[v.path];
                if (/^<\w+>$/.test(v.title)) {
                    tokens.unshift(v.title);
                }
                if (moduleName) {
                    v.module = moduleName.split('/')[moduleName[0] === '@' ? 1 : 0];
                }
                if (pageTitle === 'Change log' && moduleName) {
                    pageTitle += ': ' + moduleName;
                }
                if (v.title === pageTitle || v.title.replace(/^<|>$|\(\)$/g, '') === pageTitle.replace(/ (class|component|interface|hook)$/, '')) {
                    delete v.pageTitle;
                } else {
                    v.pageTitle = pageTitle;
                }
            }
        });
    })(nav);
    await writeFile('src/data/docs.yml', yaml.stringify(nav), 'utf8');

    const sorted = {};
    for (const key of Object.keys(dict).sort(new Intl.Collator('en').compare)) {
        if (dict[key].tokens.length) {
            sorted[key] = dict[key].tokens;
        }
    }
    await writeFile('src/data/api.json', JSON.stringify(sorted, null, 4), 'utf8');
})();
