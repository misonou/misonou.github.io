import { useLayoutEffect, useRef, useState } from "react";
import { classNames } from "zeta-dom-react";
import { Source, SyntaxHighlight } from "./SyntaxHighlight";
import { ReactComponent as Arrow } from "src/styles/icons/double-arrow.svg";
import { scrollIntoView } from "zeta-dom/domUtil";

export interface CodeBlockWithTabProps {
    source: {
        name: string;
        content: Source;
        language?: string;
    }[];
    language?: string;
    expandable?: boolean;
}

export function CodeBlockWithTab(props: CodeBlockWithTabProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { source, language, expandable } = props;
    const [index, setIndex] = useState(source[0]?.name || '');
    const [expand, setExpand] = useState(false);

    useLayoutEffect(() => {
        if (expand) {
            scrollIntoView(ref.current!, 'auto', 20);
        }
    }, [expand]);

    return (
        <div ref={ref} className={classNames('app-demo-source', { expand })}>
            <div className="app-demo-source-tab">
                {source.map((v, i) => (
                    <div key={v.name} className={classNames({ active: index === v.name })} onClick={() => setIndex(v.name)}>{v.name}</div>
                ))}
                {expandable &&
                    <div className="icon toggle" onClick={() => setExpand(v => !v)}>
                        <Arrow />
                    </div>}
            </div>
            <div className="app-demo-source-content">
                {source.map((v, i) => (
                    <SyntaxHighlight key={i} source={v.content} language={v.language || language || v.name.slice(v.name.lastIndexOf('.') + 1)} className={classNames({ active: index === v.name })} />
                ))}
            </div>
        </div>
    );
}
