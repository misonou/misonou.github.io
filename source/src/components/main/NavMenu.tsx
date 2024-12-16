import { useEffect, useRef } from "react";
import { Mixin, linkTo } from "brew-js-react";
import { removeQueryAndHash } from "brew-js/util/path";
import { each, extend, keys, map, matchWord } from "zeta-dom/util";
import { classNames } from "zeta-dom-react";
import { Docs } from "src/views/Docs";
import { app } from "src/init";
import navData from "src/data/docs.yml";
import { scrollIntoView } from "zeta-dom/domUtil";

function recursive(v: any, parent?: any) {
    if (v.pages) {
        v.modules = {};
        each(v.pages, function (i, W) {
            recursive(W, v);
        });
        if (parent) {
            extend(parent.modules, v.modules);
        }
    } else if (parent) {
        parent.modules[v.module] = true;
    }
}

each(navData, function (i, v) {
    v.root = true;
    recursive(v);
});

export function NavMenu() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function setActive(path: string) {
            const cur = $('a[href="' + path + '"]', ref.current!)[0];
            $('.current', ref.current!).removeClass('current');
            if (cur) {
                $(cur).closest('.app-nav-section.root').siblings().addClass('collapsed');
                $(cur).addClass('current').parents('.app-nav-section').removeClass('collapsed');
                scrollIntoView(cur, 'auto center', 0, cur.closest('[scrollable]')!);
            }
        }
        setActive(app.initialPath);
        return app.on('pageenter', e => {
            setActive(removeQueryAndHash(e.pathname));
        });
    }, []);

    return (
        <div {...Mixin.use(ref, Mixin.scrollableTarget)}>
            {map(navData, function recursive(v, i): JSX.Element {
                if (v.pages) {
                    return (
                        <div key={i} className={classNames('app-nav-section', { root: v.root })} data-module={keys(v.modules).join(' ')}>
                            <span onClick={onToggleSection} className={classNames('nav-section-header', v.class)}>{v.title}</span>
                            <div>
                                {map(v.pages, recursive)}
                            </div>
                        </div>
                    );
                }
                return (
                    <a key={i} className={classNames('nav-link', v.class)} data-module={v.module} href={linkTo(Docs, { remainingSegments: v.path })}>
                        {v.title}
                        {matchWord(v.class, 'ext') && <i className="ext"></i>}
                        {matchWord(v.class, 'depre') && <i className="depre"></i>}
                    </a>
                );
            })}
        </div>
    );

    function onToggleSection(e: React.UIEvent) {
        var parent = e.currentTarget.parentElement!;
        $(parent).toggleClass('collapsed');
        if (parent.classList.contains('root')) {
            $(parent).siblings().addClass('collapsed');
        }
        if (!$(parent).hasClass('collapsed')) {
            scrollIntoView(parent, 'auto', 0, parent.closest('[scrollable]')!);
        }
    }
}
