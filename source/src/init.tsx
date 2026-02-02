import "./util/polyfill";
import $ from "jquery";
import brew from "brew-js-react";
import router from "brew-js/extension/router";
import scrollable from "brew-js/extension/scrollable";
import dom from "zeta-dom/dom";
import { bind, scrollIntoView, setClass } from "zeta-dom/domUtil";
import { extend } from "zeta-dom/util";
import type { PrismThemeNames } from "src/util/prism";
import redirections from "src/data/redirect.json";

const DARK_MODE = 'zeta-doc.dark-mode';
const darkModeMQ = matchMedia('(prefers-color-scheme: dark)');

const appContext = {
    darkMode: localStorage.getItem(DARK_MODE) ?? 'default',
    textSearchEnabled: false,
    get effectiveDarkMode() {
        return ({
            true: true,
            false: false
        })[this.darkMode] ?? darkModeMQ.matches;
    },
    get codeTheme(): PrismThemeNames {
        return this.effectiveDarkMode ? 'vsDark' : 'github';
    }
};

export const app = brew.with(router, scrollable, appContext)((app) => {
    function setDarkMode() {
        setClass(dom.root, 'dark-mode', app.effectiveDarkMode);
        document.querySelector('meta[name="theme-color"]')!.setAttribute('content', app.effectiveDarkMode ? 'green' : 'white');
    }

    app.useRouter({
        routes: [
            "/{view:docs}/*",
            "/{view}/*",
            "/*"
        ],
        baseUrl: "/"
    });
    app.useScrollable({
        scrollbarClass: 'app-scrollbar',
        scrollingClass: 'scrolling'
    });
    app.watch('darkMode', value => {
        setDarkMode();
        localStorage[DARK_MODE] = value;
    }, true);
    bind(darkModeMQ, 'change', () => {
        setDarkMode();
    });
    setClass(dom.root, 'is-touch', 'ontouchstart' in window);

    app.on('navigate', e => {
        if (e.pathname in redirections) {
            app.navigate((redirections as any)[e.pathname], true);
        }
    });
});

extend(window, { app, dom, $, scrollIntoView });
