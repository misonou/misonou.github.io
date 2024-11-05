import ts from "typescript";
import fs from "node:fs";
import { EOL } from "node:os";
import { resolve } from "node:path";

const [, , filePath, name, outname] = process.argv;

const badge = {
    optional: '<Badge.Optional />',
    readonly: '<Badge.ReadOnly />',
};

const output = {
    h1(name) {
        console.log(`# ${name}`);
        console.log('');
    },
    h2(name) {
        console.log(`## ${name}`);
        console.log('');
    },
    h3(name) {
        console.log(`### ${name}`);
        console.log('');
    },
    h4(name) {
        console.log(`#### ${name}`);
        console.log('');
    }
};

const lib = getPackage(filePath).name;
const source = ts.createSourceFile(filePath, fs.readFileSync(filePath, 'utf8'), ts.ScriptTarget.Latest);
const statements = source.getChildAt(0).getChildren().flatMap(v => v.kind === ts.SyntaxKind.ModuleDeclaration ? v.body.statements : v);
const nodes = statements.filter(v => v.name?.escapedText === name);

if (nodes[0]) {
    switch (nodes[0].kind) {
        case ts.SyntaxKind.InterfaceDeclaration:
        case ts.SyntaxKind.ClassDeclaration: {
            processClassOrInterface(nodes[0]);
            break;
        }
        case ts.SyntaxKind.FunctionDeclaration: {
            const info = getFunctionInfo(...nodes);
            outputModule();
            output.h1(name);
            outputDescription(nodes[0]);
            output.h2('Syntax');
            outputSignature(info);
            outputParamsAndReturnValue(info);
            break;
        }
    }
}

function processClassOrInterface(node) {
    const result = { i: name, extends: [], ip: [], im: [], sp: [], sm: [], ev: [] };
    if (node.heritageClauses) {
        for (let v of node.heritageClauses) {
            const name = deflateNameExpression(v.types[0]);
            if (name === 'Zeta.ZetaEventDispatcher') {
                result.ev.push(...getEventsFromType(v.types[0].typeArguments[0]));
            } else if (name === 'Brew.EventDispatcher') {
                result.ev.push(...getEventsFromType(v.types[0].typeArguments[1]));
            } else {
                result.extends.push({ name });
            }
        }
    }
    const members = Object.create(null);
    node.members.forEach(v => {
        const isConstructor = v.kind === ts.SyntaxKind.Constructor;
        const isMethod = v.kind === ts.SyntaxKind.MethodDeclaration || v.kind === ts.SyntaxKind.MethodSignature;
        if (isConstructor || isMethod || v.kind === ts.SyntaxKind.PropertyDeclaration || v.kind == ts.SyntaxKind.PropertySignature || v.kind == ts.SyntaxKind.GetAccessor) {
            const name = isConstructor ? '.ctor' : v.name.escapedText;
            const entry = members[name] || (members[name] = {
                name: name + (isMethod ? '()' : ''),
                optional: !!v.questionToken,
                readonly: !!v.modifiers?.some(v => v.kind === ts.SyntaxKind.ReadonlyKeyword),
                static: !!v.modifiers?.some(v => v.kind === ts.SyntaxKind.StaticKeyword),
                isMethod: isMethod,
                isConstructor: isConstructor,
                jsDoc: v.jsDoc,
                nodes: []
            });
            entry.nodes.push(v);
            if (name === 'on' && v.typeParameters?.[0]) {
                const constraint = v.typeParameters?.[0].constraint;
                result.ev.push(...getEventsFromType(constraint.typeArguments?.[0] || constraint.type));
            }
        }
    });
    for (let i in members) {
        const v = members[i];
        if (v.isMethod || v.isConstructor) {
            Object.assign(v, getFunctionInfo(...v.nodes));
        }
        if (!v.isConstructor) {
            result[v.static ? (v.isMethod ? 'sm' : 'sp') : (v.isMethod ? 'im' : 'ip')].push(v);
        }
    }
    if (result.ev[0] && !members.on) {
        result.im.push({
            name: 'on()',
            jsDoc: [{ comment: 'Register event handlers.' }],
            signature: [
                'on(event, handler)',
                'on(handlers)',
            ],
            parameters: [
                { name: 'event', jsDoc: [{ comment: 'Event name.' }] },
                { name: 'handler', jsDoc: [{ comment: 'Callback to be invoked on such event.' }] },
                { name: 'handlers', jsDoc: [{ comment: 'A dictionary where each entry represents the event name and callback to be invoked on such event.' }] },
            ]
        });
    }

    outputModule();
    output.h1(name + ' ' + (node.kind === ts.SyntaxKind.InterfaceDeclaration ? 'interface' : 'class'));
    outputDescription(node);
    console.log(`<MemberList`);
    console.log(`    i="${outname || name}"`);
    for (let i in result) {
        if (i !== 'i' && result[i][0]) {
            console.log(`    ${i}={[${result[i].map(v => `'${v.name}'`).join(', ')}]}`);
        }
    }
    console.log(`/>`);
    console.log('');

    if (members['.ctor']) {
        output.h2('Constructor');
        outputSignature(members['.ctor']);
        outputParamsAndReturnValue(members['.ctor']);
    }
    outputProperties(result.ip, 'Instance properties');
    outputMethods(result.im, 'Instance methods');
    outputProperties(result.sp, 'Static properties');
    outputMethods(result.sm, 'Static methods');

    if (result.ev[0]) {
        output.h2('Events');
        for (let ev of new Set(result.ev.map(v => v.name))) {
            output.h3(`\`${ev}\` event`);
        }
    }
}

function getPackage(filePath) {
    let folder = resolve(filePath, '..');
    while (!fs.existsSync(`${folder}/package.json`)) {
        folder = resolve(folder, '..');
    }
    return JSON.parse(fs.readFileSync(`${folder}/package.json`, 'utf8'));
}

function getFunctionInfo(...nodes) {
    const parameters = [];
    const signature = [];
    const tags = nodes.flatMap(v => v.jsDoc?.[0].tags || []);
    const paramDocs = tags.filter(v => v.tagName.escapedText === 'param') || [];

    for (let node of nodes) {
        const params = node.parameters.map((v, i) => ({
            name: v.name.escapedText,
            index: i,
            optional: !!v.questionToken,
            spread: !!v.dotDotDotToken,
            jsDoc: [paramDocs.find(w => v.name.escapedText === w.name.escapedText)]
        }));
        let firstOptional = params.findIndex(v => v.optional || v.spread);
        if (firstOptional < 0) {
            firstOptional = params.length;
        }
        for (let j = firstOptional; j <= params.length; j++) {
            let t = [];
            t.push(node.kind === ts.SyntaxKind.Constructor ? 'new ' + name : node.name.escapedText, '(');
            for (let i = 0; i < j; i++) {
                if (i > 0) t.push(', ');
                if (params[i].spread) {
                    t.push(params[i].name + '0');
                } else {
                    t.push(params[i].name);
                }
            }
            t.push(')');
            if (!signature.includes(t.join(''))) {
                signature.push(t.join(''));
            }

            const last = params[j - 1];
            if (last?.spread) {
                t.splice(-1, 0, ', ', last.name + '1');
                signature.push(t.join(''));
                t.splice(-1, 0, ', /* … ,*/ ', last.name + 'N');
                signature.push(t.join(''));
            }
        }
        parameters.push(...params.filter(v => !parameters.some(w => v.name === w.name)));
    }
    parameters.sort((a, b) => a.index - b.index);
    return {
        parameters,
        signature,
        returns: tags.find(v => v.tagName.escapedText === 'returns')
    };
}

function getDescription(node) {
    if (!node.jsDoc?.[0]) {
        return '';
    }
    let comment = deflateComment(node.jsDoc[0].comment);
    let desc = node.jsDoc[0].tags?.find(v => v.tagName.escapedText === 'description');
    if (desc) {
        comment += EOL + EOL + deflateComment(desc.comment);
    }
    return comment;
}

function outputModule() {
    console.log(`<Module name="${lib}" />`);
    console.log(``)
}

function outputSignature({ signature }) {
    console.log('```javascript');
    console.log(signature.join(EOL));
    console.log('```');
    console.log(``);
}

function outputDescription(node, indent) {
    const comment = getDescription(node);
    if (comment) {
        if (indent) {
            for (let line of comment.split('\n')) {
                console.log(indent + line);
            }
        } else {
            console.log(comment);
        }
        console.log(``);
    }
}

function outputParamsAndReturnValue({ parameters, returns }) {
    const params = {};
    parameters.forEach(v => {
        params[v.name] = v;
    });
    if (Object.keys(params).length) {
        output.h3(`Parameters`);
        console.log(`<dl>`);
        for (let i in params) {
            if (params[i].spread) {
                console.log(`    #### \`${i}0\` … \`${i}N\` ${badge.optional}`);
            } else {
                console.log(`    #### \`${i}\`` + (params[i].optional ? ' ' + badge.optional : ''));
            }
            outputDescription(params[i], '    ');
        }
        console.log(`</dl>`);
        console.log(``);
    }
    if (returns) {
        output.h3('Return value');
        outputDescription({ jsDoc: [returns] });
    }
}

function outputProperties(arr, title) {
    if (arr[0]) {
        output.h2(title);
        arr.sort((a, b) => a.name.localeCompare(b.name));
        arr.forEach(v => {
            output.h3(`\`${outname || name}.${v.name}\`` + (v.readonly ? ' ' + badge.readonly : '') + (v.optional ? ' ' + badge.optional : ''));
            outputDescription(v);
        });
    }
}

function outputMethods(arr, title) {
    if (arr[0]) {
        output.h2(title);
        arr.sort((a, b) => a.name.localeCompare(b.name));
        arr.forEach(v => {
            output.h3(`\`${outname || name}.${v.name}\``);
            outputSignature(v)
            outputDescription(v)
            outputParamsAndReturnValue(v);
        });
    }
}

function getEventsFromType(type) {
    const eventMapType = type.typeName.escapedText;
    const eventMap = statements.find(v => v.name?.escapedText === eventMapType);
    return eventMap.members.map(v => ({
        name: v.name.escapedText
    }));
}

function deflateComment(comment) {
    if (Array.isArray(comment)) {
        comment = comment.map(v => {
            if (v.text) {
                return v.text;
            }
            if (v.name) {
                if (v.name.escapedText) {
                    return '[`' + v.name.escapedText + '`](:)';
                }
                return '`' + deflateNameExpression(v.name) + '`';
            }
        }).join('');
    }
    return comment;
}

function deflateNameExpression(node) {
    function* yieldName(node) {
        if (node.expression) {
            yield* yieldName(node.expression);
        }
        if (node.left) {
            yield* yieldName(node.left);
        }
        if (node.escapedText) {
            yield node.escapedText;
        }
        if (node.name) {
            yield node.name.escapedText;
        }
        if (node.right) {
            yield node.right.escapedText;
        }
    }
    return [...yieldName(node)].join('.');
}
