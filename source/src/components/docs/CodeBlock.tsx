import { MDXCodeElement } from "./MDXCodeElement";

export function CodeBlock(props: { className: string, children: string }) {
    return (
        <pre>
            <MDXCodeElement {...props} />
        </pre>
    );
}
