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
        const code = language === 'text' ? props.source.trim() : props.source.trim().replace(/\n( {4,})/g, (v, a) => '\n' + a.slice(a.length / 2));
        const collapsedLines = isTS ? code.split('\n').findIndex(v => /^(export )?(const|(default )?(async )?function)/.test(v)) - 1 : 0;
        return {
            code,
            collapsedLines
        };
    }, [language, props.source]);

    const tokensOrCode = tokens ?? code;
    const theme = themes[app.codeTheme];
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
        const children = tokens.map((line, i) => {
            const lineProps = getLineProps({ line });
            if (line.some(v => v.types.includes('comment') && v.content !== '\u2026') &&
                line.every(v => v.types.includes('comment') || /^\s*$/.test(v.content))) {
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
                        if (token.types.includes('comment') && token.types.at(-1) !== 'comment') {
                            props.style = {};
                        }
                        return (<span key={key} {...props}>{children}</span>);
                    })}
                </div>
            );
        })
        return (<>{children}</>);
    });

    function toggleCollapse(e: React.UIEvent) {
        $(e.currentTarget).parent().parent().find('.token-line').slice(0, collapsedLines).toggleClass('collapsed');
        $(e.currentTarget).toggleClass('open');
    }
});
