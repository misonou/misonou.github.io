import { map } from "zeta-dom/util";
import { RefObject, useRef, useState } from "react";
import { useRefInitCallback } from "zeta-dom-react";
import { Mixin, useFocusStateMixin } from "brew-js-react";
import { HTMLConsole, IConsole } from "@misonou/react-app-utils";
import { ReactComponent as RubbishBin } from "src/styles/icons/rubbish-bin.svg";
import { CodeBlockWithTab } from "./CodeBlockWithTab";

export interface DemoComponentProps {
    console: IConsole;
}

export interface DemoWithSourceProps {
    title?: string;
    maxHeight?: number | 'none';
    component: React.FC<DemoComponentProps>;
    source: Zeta.Dictionary<string>;
    console?: boolean;
}

function createConsoleProxy(consoleRef: RefObject<IConsole>): IConsole {
    return {
        log(...args: any[]) {
            consoleRef.current!.log(...args);
        },
        warn(...args: any[]) {
            consoleRef.current!.warn(...args);
        },
        error(...args: any[]) {
            consoleRef.current!.error(...args);
        },
        clear() {
            consoleRef.current!.clear();
        }
    };
}

export function DemoWithSource(props: DemoWithSourceProps) {
    const Component = props.component;
    const focusStateMixin = useFocusStateMixin();
    const consoleRef = useRef<IConsole>(window.console);
    const [console] = useState(createConsoleProxy(consoleRef));
    const consoleInitRef = useRefInitCallback<HTMLElement>((element) => {
        consoleRef.current = new HTMLConsole(element);
    });

    return (
        <div {...Mixin.use(focusStateMixin, 'app-demo app-demo-block')}>
            {props.title &&
                <div className="app-demo-block-title">{props.title}</div>}
            <div className="app-demo-view" style={{ maxHeight: props.maxHeight, overflow: props.maxHeight === 'none' ? 'visible' : 'auto' }}>
                <Component {...{ console }} />
            </div>
            {props.console &&
                <div className="app-demo-source">
                    <div className="app-demo-source-tab">
                        <div className="active">Console</div>
                        <div className="icon delete" onClick={() => console.clear()}>
                            <RubbishBin />
                        </div>
                    </div>
                    <div className="app-demo-source-content">
                        <pre ref={consoleInitRef} className="app-demo-console active"></pre>
                    </div>
                </div>}
            <CodeBlockWithTab source={map(props.source, (v, i) => ({ name: i, content: v }))} expandable />
        </div>
    );
}
