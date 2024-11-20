import { Mixin, linkTo, useScrollableMixin } from "brew-js-react";
import { each, makeArray, map } from "zeta-dom/util";
import { Docs } from "src/views/Docs";
import navData from "src/data/docs.yml";
import { useState } from "react";
import dom, { retainFocus } from "zeta-dom/dom";
import { domEventRef, useAsync } from "zeta-dom-react";
import { fuzzyMatch, MatchableItem, useMenuKeystrokeMixin } from "@misonou/react-app-utils";
import { TextInput } from "src/components/controls";
import { generateAnchor } from "src/util";

export interface NavSearchBoxProps {
    module: string;
    onToggle: (v: boolean) => void;
}

interface PageSuggestion extends MatchableItem {
    breadcrumb: string;
}

let searchData: Promise<PageSuggestion[]>;

async function initSearchData() {
    const flattened = map([navData], (function flatten(parent: string[], v: any): PageSuggestion[] {
        return map(v, function (v) {
            return v.pages ? flatten([...parent, v.title], v.pages) : {
                displayText: v.pageTitle || v.title,
                breadcrumb: parent.join(' > '),
                value: v
            };
        });
    }).bind(0, []));

    const docByPath: Zeta.Dictionary = {};
    for (const v of flattened) {
        docByPath[v.value.path] = v;
    }
    each((await import("src/data/api.json")).default, (i, v) => {
        v.forEach(v => {
            const [name, hash] = makeArray(v);
            if (docByPath[i] && name !== docByPath[i].displayText) {
                flattened.push({
                    displayText: name,
                    breadcrumb: docByPath[i].breadcrumb,
                    value: {
                        ...docByPath[i].value,
                        path: docByPath[i].value.path + (hash === undefined ? '#s-' + generateAnchor(name) : hash)
                    }
                });
            }
        });
    });
    return flattened;
}

async function search(value: string, module?: string) {
    if (!value) {
        return [];
    }
    let filtered = await (searchData || (searchData = initSearchData()));
    if (module) {
        filtered = filtered.filter(v => !v.value.module || v.value.module === module);
    }
    return fuzzyMatch(filtered, value, { sortByRelevancy: true })
}

export function NavSearchBox(props: NavSearchBoxProps) {
    const scrollable = useScrollableMixin();
    const [value, setValue] = useState('');
    const [matched] = useAsync(() => search(value, props.module), [value, props.module]);
    const menuKeystroke = useMenuKeystrokeMixin('a');

    return (
        <div id="app-nav-search" {...Mixin.use(menuKeystroke)}>
            <TextInput ref={domEventRef({ focusin, focusout: () => props.onToggle(false) })} value={value} onChange={setValue} placeholder="Search" />
            <div id="app-nav-search-result" {...Mixin.use(scrollable)}>
                <div {...Mixin.use(scrollable.target)}>
                    {matched?.slice(0, 100).map((v, i) => (
                        <a key={i} href={linkTo(Docs, { remainingSegments: v.value.path })}>
                            <span dangerouslySetInnerHTML={{ __html: v.formattedText }}></span>
                            <span>
                                {v.value.module && <span className="module">{v.value.module}</span>}
                                {v.breadcrumb}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

    function focusin(e: Zeta.ZetaFocusEvent) {
        props.onToggle(true);
        retainFocus(dom.activeElement, e.target.nextElementSibling!);
    }
}
