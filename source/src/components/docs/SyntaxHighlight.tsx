import { memo, useMemo } from "react";
import { themes } from "prism-react-renderer";
import { useObservableProperty } from "zeta-dom-react";
import { Mixin, useScrollableMixin } from "brew-js-react";
import { app } from "src/init";
import { PrismTheme, renderTokens, Token } from "src/util/prism";

export type Source = string | {
    tokens: Token[][];
    collapsedLines: number;
}

export interface SyntaxHighlightProps {
    source: Source;
    language: string;
    className?: string;
}

export const SyntaxHighlight = memo((props: SyntaxHighlightProps) => {
    const scrollable = useScrollableMixin();
    const language = props.language;
    useObservableProperty(app, 'darkMode');

    const { code, tokens, collapsedLines } = useMemo(() => {
        if (typeof props.source === 'object') {
            return {
                code: '',
                tokens: props.source.tokens,
                collapsedLines: props.source.collapsedLines
            };
        }
        if (!props.source) {
            return { code: '', collapsedLines: 0 };
        }
        const isTS = language === 'tsx' || language === 'ts';
        const code = props.source.trim().replace(/\n( {4,})/g, (v, a) => '\n' + a.slice(a.length / 2));
        const collapsedLines = isTS ? code.split('\n').findIndex(v => /^(export )?(const|(default )?(async )?function)/.test(v)) - 1 : 0;
        return {
            code,
            collapsedLines
        };
    }, [language, props.source]);

    const tokensOrCode = tokens ?? code;
    const theme = app.effectiveDarkMode ? themes.vsDark : themes.github;
    return (
        <div {...Mixin.use(scrollable, 'app-code-block', props.className)}>
            <code {...Mixin.use(scrollable.target)} data-language={props.language}>
                <Render {...{ theme, language, tokensOrCode, collapsedLines }} />
            </code>
        </div>
    );
});

const Render = memo((props: { theme: PrismTheme, language: string, tokensOrCode: string | Token[][], collapsedLines: number }) => {
    const { theme, language, tokensOrCode, collapsedLines } = props;

    return renderTokens(theme, language, tokensOrCode, ({ tokens, getLineProps, getTokenProps }) => {
        const isTS = language === 'tsx' || language === 'ts';
        const isNullComment = language === 'html' ? '<!-- ... -->' : '/* ... */';
        return (
            <>
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
            </>
        );
    });

    function toggleCollapse(e: React.UIEvent) {
        $(e.currentTarget).parent().parent().find('.token-line').slice(0, collapsedLines).toggleClass('collapsed');
        $(e.currentTarget).toggleClass('open');
    }
});
