
import { Highlight, Prism, themes } from "prism-react-renderer";
import React from "react";
import { mapGet } from "zeta-dom/util";

export type PrismTheme = typeof themes['dracula']
export type PrismThemeNames = keyof typeof themes;
export type HighlightProps = React.ComponentProps<typeof Highlight>;
export type RenderProps = Parameters<HighlightProps['children']>[0];
export type Token = RenderProps['tokens'] extends (infer T)[][] ? T : any;

const styleCache = new WeakMap<PrismTheme, { dict: ThemeDict, cache: any }>();

export function renderTokens(theme: PrismTheme, language: string, code: string | Token[][], render: (props: RenderProps) => JSX.Element) {
    const { dict, cache } = mapGet(styleCache, theme, () => ({
        dict: themeToDict(theme, language),
        cache: Object.create(null)
    }));
    const styleForToken = ({ types, empty }: Token) => {
        if (types.length === 1 && types[0] === "plain") {
            return empty != null ? { display: "inline-block" } : undefined;
        }
        if (types.length === 1 && empty != null) {
            return dict[types[0]];
        }
        const key = types.join(' ');
        const style = cache[key] || (cache[key] = Object.assign({}, ...types.map(type => dict[type])));
        return empty != null ? Object.assign({ display: "inline-block" }, style) : style;
    };
    const renderProps: RenderProps = {
        style: dict.root,
        className: '',
        tokens: code as Token[][],
        getLineProps() {
            return {
                className: 'token-line'
            };
        },
        getTokenProps(input) {
            return {
                children: input.token.content,
                className: ['token', ...input.token.types, input.className || ''].join(' '),
                style: styleForToken(input.token)
            };
        },
    };
    if (typeof code === 'string') {
        return React.createElement(Highlight, {
            theme,
            language,
            code,
            children({ tokens }) {
                return render({ ...renderProps, tokens })
            }
        });
    }
    return render(renderProps);
}

export function HighlightWrapper(props: Required<Omit<HighlightProps, 'children' | 'prism'>>) {
    return renderTokens(props.theme, props.language, props.code, ({ getLineProps, tokens, getTokenProps }) => {
        return React.createElement('div', null,
            tokens.map((line, i) => (
                React.createElement('div', { key: i, ...getLineProps({ line }) },
                    line.map((v, i) => React.createElement('span', { key: i, ...getTokenProps({ token: v }) }))
                )
            ))
        );
    });
}

type PrismThemeEntry = PrismTheme['plain'];
type ThemeDict = {
    root: PrismThemeEntry
    plain: PrismThemeEntry
    [type: string]: PrismThemeEntry
}

function themeToDict(theme: PrismTheme, language: string) {
    const { plain } = theme;
    const themeDict = theme.styles.reduce<Record<string, PrismThemeEntry>>((acc, themeEntry) => {
        const { languages, style } = themeEntry;
        if (languages && !languages.includes(language)) {
            return acc;
        }
        themeEntry.types.forEach((type) => {
            const accStyle = { ...acc[type], ...style };
            acc[type] = accStyle;
        });
        return acc;
    }, {});

    themeDict.root = plain;
    themeDict.plain = { ...plain, backgroundColor: undefined };
    return themeDict as ThemeDict;
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
