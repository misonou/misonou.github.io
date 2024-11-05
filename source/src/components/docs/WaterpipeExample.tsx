import waterpipe from "waterpipe";
import { SyntaxHighlight } from "./SyntaxHighlight";
import { useMemo } from "react";
import { each } from "zeta-dom/util";

export interface WaterpipeExampleProps {
    data?: any;
    globals?: any;
    pipes?: any;
    options?: Omit<WaterpipeOptions, 'globals'>;
    template?: string;
    examples?: string[];
}

export function WaterpipeExample(props: WaterpipeExampleProps) {
    const dataJson = useMemo(() => {
        return JSON.stringify(props.data);
    }, []);

    const results = useMemo(() => {
        each(props.pipes, (i, v) => waterpipe.pipes[i] = v);
        return props.examples?.map(v => {
            return waterpipe('{{&' + v + '}}', props.data, { globals: props.globals });
        }) || [waterpipe((props.template || '').replace(/^\s*/, ''), props.data, { ...props.options, globals: props.globals })];
    }, []);

    return (
        <div className="docs-waterpipe-example">
            {dataJson &&
                <SyntaxHighlight className="docs-waterpipe-example-data" source={dataJson} language="json" />}
            {props.examples ?
                <div className="docs-waterpipe-example-l">
                    {props.examples?.map((v, i) => (
                        <div key={i}>
                            <span>
                                <i className="open-brace">{"{{"}</i>
                                <code>{v}</code>
                                <i className="close-brace">{"}}"}</i>
                            </span>
                            <span>
                                <i className="equal-sign">=</i>
                                {results[i] ?
                                    <code>{results[i]}</code> :
                                    <code className="undefined">empty string</code>}
                            </span>
                        </div>
                    ))}
                </div> :
                <div className="docs-waterpipe-example-h">
                    <code>{(props.template || '').replace(/^\s*/, '')}</code>
                    <code>
                        <i className="equal-sign">=</i>
                        {results[0]}
                    </code>
                </div>}
        </div>
    );
}

waterpipe.pipes.printargs = function (value: any, varargs: Waterpipe.PipeEvaluator) {
    var output = [];
    var count = varargs.next();
    for (var i = 0; i < count; i++) {
        if (varargs.hasArgs()) {
            output.push(varargs.next());
        }
    }
    return output.join(' ');
};
(waterpipe.pipes.printargs as any).varargs = true;

waterpipe.pipes.dosomething = function (value: any, varargs: Waterpipe.PipeEvaluator) {
    var fn = varargs.fn();
    return fn && fn(value, undefined);
};
(waterpipe.pipes.dosomething as any).varargs = true;
