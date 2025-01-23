
import { Highlight, Prism, themes } from "prism-react-renderer";
import React from "react";

export type PrismTheme = typeof themes['dracula']
export type RenderProps = Parameters<Parameters<typeof Highlight>[0]['children']>[0];
export type Token = RenderProps['tokens'] extends (infer T)[][] ? T : any;

export function renderTokens(theme: PrismTheme, language: string, code: string | Token[][], render: (props: RenderProps) => JSX.Element) {
    if (typeof code === 'string') {
        return React.createElement(Highlight, {
            theme,
            language,
            code,
            children: render
        });
    }

    const themeDictionary = themeToDict(theme, language);
    const styleForToken = ({ types, empty }: Token) => {
        if (themeDictionary == null) return undefined;
        else if (types.length === 1 && types[0] === "plain") {
            return empty != null ? { display: "inline-block" } : undefined;
        } else if (types.length === 1 && empty != null) {
            return themeDictionary[types[0]];
        }
        return Object.assign(
            empty != null ? { display: "inline-block" } : {},
            ...types.map(type => themeDictionary[type])
        );
    };
    return render({
        style: {},
        className: '',
        tokens: code,
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
    });
}

type ThemeDict = {
    root: any
    plain: any
    [type: string]: any
}

function themeToDict(theme: PrismTheme, language: string) {
    const { plain } = theme;
    const themeDict = theme.styles.reduce<any>((acc, themeEntry) => {
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
