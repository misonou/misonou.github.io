import { useMemo } from "react";
import { SyntaxHighlight } from "./SyntaxHighlight";
import { CodeBlockWithTab } from "./CodeBlockWithTab";

interface MDXCodeElementProps {
    className?: string;
    children: string;
}

export function MDXCodeElement({ className, children }: MDXCodeElementProps) {
    const files = useMemo(() => {
        const matches = children && className ? Array.from(children.matchAll(/\/{3}\s?([^\r\n]+)\r?\n/g)) : [];
        return matches.map((v, i) => ({
            name: v[1],
            content: children.slice((v.index || 0) + v[0].length, matches[i + 1]?.index ?? children.length).trim()
        }));
    }, [className, children]);

    if (!className) {
        return (<code>{children}</code>);
    }
    const language = className.match(/language-(\w.*?)\b/)?.[1] || "javascript";
    if (files[0]) {
        return (
            <CodeBlockWithTab language={language} source={files} />
        );
    }
    return (
        <SyntaxHighlight language={language} source={children} />
    );
}
