import { useState } from "react";
import { classNames } from "zeta-dom-react";
import { SyntaxHighlight } from "./SyntaxHighlight";
import { ReactComponent as Arrow } from "src/styles/icons/double-arrow.svg";

export interface CodeBlockWithTabProps {
    source: {
        name: string;
        content: string;
        language?: string;
    }[];
    language?: string;
    expandable?: boolean;
}

export function CodeBlockWithTab(props: CodeBlockWithTabProps) {
    const { source, language, expandable } = props;
    const [index, setIndex] = useState(source[0]?.name || '');
    const [expand, setExpand] = useState(false);

    return (
        <div className={classNames('app-demo-source', { expand })}>
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
