import { useState } from "react";
import { CodeBlockWithTab } from "./CodeBlockWithTab";
import { Mixin, useFocusStateMixin } from "brew-js-react";
import { ReactComponent as Icon } from "src/styles/icons/hint.svg";
import { Source } from "./SyntaxHighlight";

export interface ImportHintProps {
    name: string;
    module: string;
    import?: "default";
    require?: string;
    requireModule?: string;
    global?: string;
    expanded?: boolean;
    typeOnly?: boolean;
    source?: { name: string, content: Source }[];
    location?: { type: string, url: string }[];
};

export function ImportHint(props: ImportHintProps) {
    const focusStateMixin = useFocusStateMixin();
    const [visible, setVisible] = useState(props.expanded || false);
    return (
        <>
            {!visible &&
                <button className="app-docs-import-hint" onClick={() => setVisible(true)}>
                    Show import
                    <Icon />
                </button>}
            {visible && <>
                <div {...Mixin.use(focusStateMixin, 'app-demo app-demo-block app-docs-import')}>
                    <CodeBlockWithTab language="javascript" source={props.source || []} />
                </div>
                {props.location &&
                    <div className="app-docs-import-location">
                        <h4>Source location</h4>
                        {props.location.map((v, i) => (
                            <a key={i} className={'external ' + v.type} href={v.url} target="_blank" rel="noreferrer">{/([^\/]+)#L(\d+)$/.test(v.url) && RegExp.$1}</a>
                        ))}
                    </div>}
            </>}
        </>
    );
}
