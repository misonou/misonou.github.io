import { useEffect, useState } from "react";
import { Mixin, ViewComponent, ViewProps, redirectTo, registerView, renderView, useRouteParam } from "brew-js-react";
import { combineFn, extend, isErrorWithCode, makeArray, single } from "zeta-dom/util";
import { getRect, scrollIntoView } from "zeta-dom/domUtil";
import dom from "zeta-dom/dom";
import { getDirectiveComponent } from "brew-js/directive";
import { parsePath } from "brew-js/util/path";
import { Badge, CodeBlock, CodeBlockWithTab, Color, DemoBlock, DemoWithSource, ImportHint, Inline, MDXCodeElement, MDXTableElement, MemberList, Module, Snippets, SyntaxHighlight, VersionTimeline, WaterpipeExample } from "src/components/docs";
import { PageToolbar, TableOfContentItem, TableOfContents } from "src/components/main";
import { app } from "src/init";
import { useUnloadEffect } from "zeta-dom-react";

type MDXViewComponent = ViewComponent<{}> & {
    getMeta(): MDXMetaData;
};

interface MDXMetaData {
    title: string;
    module: string;
    tableOfContents: TableOfContentItem[];
}

const viewComponents: Zeta.Dictionary<MDXViewComponent> = {};
const mdxComponents = {
    pre: "pre",
    code: MDXCodeElement,
    table: MDXTableElement,
    Badge,
    Color,
    CodeBlock,
    CodeBlockWithTab,
    SyntaxHighlight,
    Inline,
    Module,
    Snippets,
    DemoBlock,
    DemoWithSource,
    ImportHint,
    MemberList,
    VersionTimeline,
    WaterpipeExample
};

async function importMDXOrNotFound(path: string): Promise<any> {
    try {
        return await import('src/docs' + path + '.mdx');
    } catch (e) {
        if (isErrorWithCode(e, 'MODULE_NOT_FOUND')) {
            if (!path.endsWith('/index')) {
                await importMDXOrNotFound(path + '/index');
                return {
                    default: () => {
                        redirectTo(Docs, { remainingSegments: path + '/index' });
                        return <></>;
                    }
                };
            }
            return await import('src/docs/not-found.mdx');
        }
        throw e;
    }
}

function registerMDXContentView(remainingSegments: string) {
    let metaObj: MDXMetaData;
    return extend(registerView(async () => {
        const { default: Content, meta, moduleId } = await importMDXOrNotFound(remainingSegments);
        metaObj = meta;
        return {
            default: function () {
                useUnloadEffect(persisted => {
                    if (!persisted) {
                        (window as any)[process.env.CHUNK_LOADING_GLOBAL!].remove(moduleId);
                    }
                });
                return <Content components={mdxComponents} />;
            }
        };
    }, { view: 'docs', remainingSegments }), {
        getMeta() {
            return metaObj;
        }
    });
}

function scrollToElementWithHash(hash: string) {
    const target = document.getElementById(hash.slice(1));
    if (target) {
        scrollIntoView(target, 'top', 50);
    }
}

function DocsView({ viewContext }: ViewProps<{}>) {
    const [state, setState] = useState<MDXMetaData>({
        module: '',
        title: '',
        tableOfContents: []
    });
    const filePath = useRouteParam('remainingSegments', '/index');
    const Content = viewComponents[filePath] || (viewComponents[filePath] = registerMDXContentView(filePath));

    useEffect(() => {
        const container = viewContext.container;
        const aside = container.querySelector('aside')!;
        const scrollable = getDirectiveComponent(aside).scrollable!;

        return combineFn(
            dom.on('click', 'h1[id],h2[id],h3[id]', e => {
                navigator.clipboard?.writeText(location.origin + location.pathname + '#' + e.target.id);
                app.navigate('#' + e.target.id);
            }),
            dom.on('click', 'a[href^="#"]', e => {
                const link = e.currentTarget as HTMLAnchorElement;
                if (location.hash === link.hash) {
                    scrollToElementWithHash(link.hash);
                }
            }),
            app.on(container, 'pageenter', e => {
                if (e.target === container) {
                    return;
                }
                const meta = (e.view! as MDXViewComponent).getMeta();
                if (!meta) {
                    return;
                }
                setState(meta);
                document.title = meta.title + ' - misonou/docs';

                const hash = parsePath(app.path).hash;
                if (hash) {
                    scrollToElementWithHash(hash);
                }
            }),
            app.on('scrollProgressChange', e => {
                if (e.target.id === 'app' && scrollable.scrollMaxY && getComputedStyle(aside).display !== 'none') {
                    const headers = container.querySelectorAll('h1,h2[id],h3[id]');
                    const target = single(headers, v => getRect(v).top > 50 && aside.querySelector('[href="#' + v.id + '"]'));
                    if (target) {
                        scrollIntoView(target);
                    }
                }
            }),
            app.on('hashchange', e => {
                if (dom.activeElement.id !== e.newHash.slice(1)) {
                    scrollToElementWithHash(e.newHash);
                }
            })
        );
    }, []);

    return (
        <>
            <div id="app-content-header">
                <Module name={state.module} />
                <span>{state.title}</span>
            </div>
            <PageToolbar />
            <div id="app-content" {...Mixin.use(Mixin.scrollableTarget)}>
                {renderView({ className: 'app-docs' }, Content)}
            </div>
            <TableOfContents list={state.tableOfContents} />
        </>
    );
}

export const Docs = registerView(DocsView, { view: 'docs' });
