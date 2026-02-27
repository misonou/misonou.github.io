import { classNames, useDependency } from "zeta-dom-react"
import { ParserDependencyConsumer } from "./Component"
import { Supports } from "waterpipe-parser";
import { MDXCodeElement, MDXTableElement } from "src/components/docs";

type Key = Extract<keyof Supports, string>;

function childrenOfType(node: any, type: React.ReactElement['type']) {
    return (node.props.children as React.ReactElement[]).filter(c => c.type === type);
}

export default function SupportTable({ children }: { children: React.ReactElement }) {
    const { parser } = useDependency(ParserDependencyConsumer);
    if (children.type !== 'ul') {
        return null;
    }

    const supports = childrenOfType(children, 'li').map(li => {
        const p = childrenOfType(li, 'p')[0];
        const code = childrenOfType(p, MDXCodeElement)[0];
        return {
            key: code.props.children as Key,
            description: (p.props.children as React.ReactNode[]).slice(1).map((v, i) => !i && typeof v === 'string' ? v.trimStart() : v)
        };
    });

    return (
        <>
            <MDXTableElement>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Flag</th>
                        <th>Supported</th>
                    </tr>
                </thead>
                <tbody>
                    {supports.map(({ key, description }) => (
                        <tr key={key} className={classNames('demo-waterpipe-playground-status', { supported: parser.supports[key] })}>
                            <td>{description}</td>
                            <td><code>{key}</code></td>
                            <td><span>{parser.supports[key] ? 'Yes' : 'No'}</span></td>
                        </tr>
                    ))}
                </tbody>
            </MDXTableElement>
        </>
    );
}
