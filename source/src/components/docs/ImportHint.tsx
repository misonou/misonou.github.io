import { useState } from "react";
import { CodeBlockWithTab } from "./CodeBlockWithTab";
import { Mixin, useFocusStateMixin } from "brew-js-react";
import { ReactComponent as Icon } from "src/styles/icons/hint.svg";

export interface ImportHintProps {
    name: string;
    module: string;
    import?: "default";
    require?: string;
    requireModule?: string;
    global?: string;
    expanded?: boolean;
};

function formatImport(name: string, defaults?: boolean) {
    return defaults ? name : `{ ${name} }`;
}

export function ImportHint(props: ImportHintProps) {
    const focusStateMixin = useFocusStateMixin();
    const [visible, setVisible] = useState(false);

    const cjs = props.require ? props.require.split('.') : props.global?.split('.');
    return (
        <>
            {!props.expanded &&
                <button className="app-docs-import-hint" onClick={() => setVisible(!visible)}>
                    Show import
                    <Icon />
                </button>}
            {(visible || props.expanded) &&
                <div {...Mixin.use(focusStateMixin, 'app-demo app-demo-block app-docs-import')}>
                    <CodeBlockWithTab
                        language="javascript"
                        source={[
                            {
                                name: 'module',
                                content: `import ${formatImport(props.name, !!props.import)} from "${props.module}"`
                            },
                            {
                                name: 'cjs',
                                content: cjs ?
                                    `const ${cjs[0] === 'default' ? cjs[1] || props.name : formatImport(cjs[1] || cjs[0])} = require("${props.requireModule ?? props.module.split('/').slice(0, props.module[0] === '@' ? 2 : 1).join('/')}")` +
                                        (cjs[2] ? `\r\nconst ${props.name} = ${cjs[1]}.${cjs[2]}` : '') :
                                    '/* No CommonJS export */'
                            },
                            {
                                name: '<script>',
                                content: props.global ? `const ${props.name} = ${props.global}` : '/* No UMD distribution */'
                            },
                        ]}
                    />
                </div>}
        </>
    );
}
