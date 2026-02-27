import { useEffect, useState } from "react";
import { createDependency, partial, useAsync, useDependency } from "zeta-dom-react";
import { createDialog } from "brew-js-react";
import waterpipe from "waterpipe";
import { ExpressionEditor } from "@misonou/waterpipe-editor";
import { Button, CodeHighlightTextField, FieldColumn, RadioList } from "src/components/controls";
import { DemoComponentProps } from "src/components/docs";
import { data, choiceItems } from "./data";
import { validateJSON } from "src/util";
import { Parser } from "waterpipe-parser";

const versions = process.env.WATERPIPE_VERSIONS! as unknown as string[];
const { Consumer, Provider } = createDependency({
    version: '',
    parser: Parser.default
});

export const ParserDependencyConsumer = Consumer;

async function loadWaterpipe(version: string) {
    if (version === 'local') {
        return waterpipe;
    }
    return (await import(`runtime/waterpipe/waterpipe-${version}.min.js`)).default as Waterpipe;
}

export default function Component({ console }: DemoComponentProps) {
    const [version, setVersion] = useState(versions[0]);
    const [key, setKey] = useState('dataOne');
    const [state, setState] = useState(data[key as keyof typeof data]);
    const [, waterpipeLoader] = useAsync(() => loadWaterpipe(version), [version]);

    useDependency(Provider, () => ({ version, parser: new Parser(waterpipeLoader.value) }), [waterpipeLoader.value]);

    useEffect(() => {
        display(state.expression);
    }, [state, waterpipeLoader.value]);

    useEffect(() => {
        return waterpipeLoader.on('error', e => {
            console.clear();
            console.error(e.error);
        });
    }, []);

    return (
        <>
            <FieldColumn columns="1fr max-content max-content" alignItems="start">
                <RadioList items={choiceItems} value={key} onChange={setDataSource} />
                <button onClick={setCustomData}>Custom data</button>
                <select value={version} onChange={e => setVersion(e.target.value)}>
                    {versions.map(v => (<option key={v}>{v}</option>))}
                </select>
            </FieldColumn>
            <p></p>
            <div className="app-docs-wtpe-field">
                <ExpressionEditor {...state} waterpipe={waterpipeLoader.value || waterpipe} onChange={display} />
            </div>
        </>
    );

    function display(v: string) {
        const { input, globals } = state;
        state.expression = v;
        console.clear();
        console.log('Expression:', v);
        console.log('Globals:', globals);
        console.log('Input:', input);
        console.log((waterpipeLoader.value || waterpipe).eval(v, input, { globals }));
    }

    function setDataSource(v: string) {
        setKey(v)
        setState({ ...data[v as keyof typeof data] });
    }

    async function setCustomData() {
        const stringify = (value: any) => value === null ? '' : JSON.stringify(value, null, 2);
        const currentValue = {
            input: stringify(state.input),
            globals: stringify(state.globals)
        };
        await createDialog({
            modal: true,
            className: 'app-dialog',
            onCommit: ({ input, globals }: typeof currentValue) => {
                data.custom = {
                    ...data.custom,
                    input: JSON.parse(input || 'null'),
                    globals: JSON.parse(globals || '{}')
                };
                setDataSource('custom');
            },
            onRender: ({ dismissDialog, commitDialog }) => {
                const [value, setValue] = useState(currentValue);
                return (
                    <div id="demo-waterpipe-playground-dialog">
                        <CodeHighlightTextField label="Input" language="json" value={value.input} onChange={partial(setValue, 'input')} onValidate={validateJSON} />
                        <CodeHighlightTextField label="Global" language="json" value={value.globals} onChange={partial(setValue, 'globals')} onValidate={validateJSON} />
                        <div>
                            <Button variant="primary" label="Confirm" onClick={() => commitDialog(value)} />
                            <Button label="Cancel" onClick={() => dismissDialog()} />
                        </div>
                    </div>
                );
            }
        }).open();
    }
}
