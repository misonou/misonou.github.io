import { useMemo } from "react";
import { Highlight, Prism, themes } from "prism-react-renderer";
import { useObservableProperty } from "zeta-dom-react";
import { Mixin, useScrollableMixin } from "brew-js-react";
import { app } from "src/init";

interface SyntaxHighlightProps {
    source: string;
    language: string;
    className?: string;
}

export function SyntaxHighlight(props: SyntaxHighlightProps) {
    const scrollable = useScrollableMixin();
    const isTS = props.language === 'tsx' || props.language === 'ts';
    const { code, collapsedLines, toggleCollapse } = useMemo(() => {
        if (!props.source) {
            return { code: '', collapsedLines: 0 };
        }
        const code = props.source.trim().replace(/\n( {4,})/g, (v, a) => '\n' + a.slice(a.length / 2));
        const collapsedLines = isTS ? code.split('\n').findIndex(v => /^(export )?(const|(default )?(async )?function)/.test(v)) - 1 : 0;
        return {
            code,
            collapsedLines,
            toggleCollapse(e: React.UIEvent) {
                $(scrollable.elements()).find('.token-line').slice(0, collapsedLines).toggleClass('collapsed');
                $(e.target).toggleClass('open');
            }
        }
    }, [props.source, props.language]);

    useObservableProperty(app, 'darkMode');

    const isNullComment = props.language === 'html' ? '<!-- ... -->' : '/* ... */';
    return (
        <Highlight code={code} language={props.language} theme={app.effectiveDarkMode ? themes.vsDark : themes.github}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
                <div {...Mixin.use(scrollable, 'app-code-block', props.className)}>
                    <code style={style} {...Mixin.use(scrollable.target)} data-language={props.language}>
                        {tokens.map((line, i) => {
                            const lineProps = getLineProps({ line });
                            const checkCommentNeighbor = (token: Zeta.ArrayMember<typeof line>, match: string) => {
                                if (token && token.types.includes('punctuation') && token.content === match && !token.types.includes('comment-hid')) {
                                    token.types.push('comment-hid');
                                }
                            };
                            if (isTS) {
                                let index = line.findIndex(v => v.types.includes('comment'));
                                if (index >= 0) {
                                    checkCommentNeighbor(line[index - 1], '{');
                                    checkCommentNeighbor(line[index + 1], '}');
                                }
                            }
                            if (line.some(v => v.types.includes('comment') && v.content !== isNullComment) &&
                                line.every(v => v.types.includes('comment') || v.types.includes('comment-hid') || ((/^\s*$/.test(v.content))))) {
                                lineProps.className += ' is-comment';
                            }
                            if (i < collapsedLines) {
                                lineProps.className += ' collapsed';
                            }
                            return (
                                <div key={i} {...lineProps}>
                                    {i === 0 && collapsedLines > 0 &&
                                        <i className="app-code-block-toggle" onClick={toggleCollapse}></i>}
                                    {line.map((token, key) => {
                                        const { children, ...props } = getTokenProps({ token });
                                        return (
                                            <span key={key} {...props}>
                                                {!token.types.includes('comment') || children.startsWith('/**') ?
                                                    children :
                                                    children === isNullComment ?
                                                        <span className="comment-dot">...</span> :
                                                        <span className={children.startsWith('// ->') ? 'comment-res' : 'comment-msg'}>{children.replace(/^\/(\*|\/+)\s*(->\s)?|\s*\*\/$/g, '')}</span>}
                                            </span>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </code>
                </div>
            )}
        </Highlight>
    );
}

Prism.languages.json = {
    'property': {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: true,
        greedy: true
    },
    'string': {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true
    },
    'comment': {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
    },
    'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    'punctuation': /[{}[\],]/,
    'operator': /:/,
    'boolean': /\b(?:false|true)\b/,
    'null': {
        pattern: /\bnull\b/,
        alias: 'keyword'
    }
};
