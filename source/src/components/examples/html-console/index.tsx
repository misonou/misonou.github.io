import { HTMLConsole, IConsole } from "@misonou/react-app-utils"
import { useRefInitCallback } from "zeta-dom-react";
import "./style.css";

export default function Component(props: { entries: any[] }) {
    return (
        <div className="app-demo-console-wrapper">
            <pre className="app-demo-console" ref={useRefInitCallback(init)} />
        </div>
    )

    function init(element: HTMLElement) {
        const console = new HTMLConsole(element);
        for (let v of props.entries) {
            if (Array.isArray(v)) {
                console.log(...v);
            } else {
                let k = Object.keys(v)[0] as keyof IConsole;
                console[k](...(v[k] as any[]));
            }
        }
    }
}
