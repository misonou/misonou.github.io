import { useEffect, useLayoutEffect, useState } from "react";
import { Mixin, useFocusStateMixin, useScrollableMixin } from "brew-js-react";
import { FaAdjust, FaMoon, FaSun } from "react-icons/fa";
import dom from "zeta-dom/dom";
import { setClass } from "zeta-dom/domUtil";
import { matchWord } from "zeta-dom/util";
import { classNames, useObservableProperty } from "zeta-dom-react";
import { app } from "src/init";
import { Dropdown, DropdownItem } from "src/components/controls";
import { NavSearchBox } from "./NavSearchBox";
import { NavMenu } from "./NavMenu";

const themeItems: DropdownItem[] = [
    { value: 'null', label: 'System', icon: FaAdjust },
    { value: 'false', label: 'Light', icon: FaSun },
    { value: 'true', label: 'Dark', icon: FaMoon },
];
const packages = [
    { value: '', label: 'All' },
    'zeta-dom',
    'zeta-dom-react',
    'brew-js',
    'brew-js-react',
    'brew-extension-auth',
    'react-app-utils',
    'react-css-utils',
    'jq-scrollable',
    'waterpipe',
];


export function Nav() {
    const darkMode = useObservableProperty(app, 'darkMode');
    const scrollable = useScrollableMixin();
    const focusStateMixin = useFocusStateMixin();
    const [searchOpen, setSearchOpen] = useState(false);
    const [module, setModule] = useState('');

    useEffect(() => {
        return app.on('navigate', () => {
            dom.blur(focusStateMixin.elements()[0]);
        });
    }, []);

    useLayoutEffect(() => {
        const $all = $('#app-nav-content [data-module]');
        if (module) {
            $all.each(function (i, v) {
                setClass(v, 'hidden', !!v.dataset.module && !matchWord(v.dataset.module!, module));
            });
        } else {
            $all.removeClass('hidden');
        }
    }, [module]);

    return (
        <nav {...Mixin.use(focusStateMixin, classNames({ 'search-open': searchOpen }))}>
            <div id="app-nav-header">
                <span>misonou/docs</span>
                <Dropdown variant="button" icon={FaAdjust} alwaysShowLabel
                    items={themeItems} value={darkMode} onChange={v => app.darkMode = v} />
                <Dropdown variant="button" className="app-nav-dropdown-code"
                    items={packages} value={module} onChange={setModule} />
                <NavSearchBox module={module} onToggle={setSearchOpen} />
            </div>
            <div id="app-nav-content" {...Mixin.use(scrollable)}>
                <NavMenu />
            </div>
        </nav>
    );
}
