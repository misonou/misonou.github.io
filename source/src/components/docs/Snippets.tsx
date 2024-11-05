import { useRef, useState } from "react";
import { classNames } from "zeta-dom-react";
import { SyntaxHighlight } from "./SyntaxHighlight";
import { Mixin, useFocusStateMixin } from "brew-js-react";

export interface SnippetsProps {
    title?: string;
    snippets: string[];
    render: (index: number, ref: React.RefObject<HTMLElement>, value: string) => React.ReactNode;
}

export function Snippets(props: SnippetsProps) {
    const ref = useRef<HTMLDivElement>(null);
    const focusStateMixin = useFocusStateMixin();
    const [index, setIndex] = useState(0);

    return (
        <div {...Mixin.use(focusStateMixin, 'app-demo-snippets app-demo-block')}>
            {props.title &&
                <div className="app-demo-block-title">{props.title}</div>}
            <div className="app-demo-snippets-option-list">
                {props.snippets.map((v, i) => (
                    <div key={i} className={classNames('app-demo-snippets-option', { active: index === i })} onClick={() => setIndex(i)}>
                        <SyntaxHighlight source={v} language="typescript" />
                    </div>
                ))}
            </div>
            <div ref={ref} className="app-demo-snippets-view app-demo-view">
                {props.render(index, ref, props.snippets[index])}
            </div>
        </div>
    );
}
