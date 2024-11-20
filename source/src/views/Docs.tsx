import { useEffect, useState } from "react";
import { Mixin, ViewComponent, ViewProps, redirectTo, registerView, renderView, useRouteParam } from "brew-js-react";
import { combineFn, extend, isErrorWithCode } from "zeta-dom/util";
import { scrollIntoView } from "zeta-dom/domUtil";
import dom from "zeta-dom/dom";
import { parsePath } from "brew-js/util/path";
import { Badge, CodeBlock, Color, DemoBlock, DemoWithSource, ImportHint, Inline, MDXCodeElement, MDXTableElement, MemberList, Module, Snippets, VersionTimeline, WaterpipeExample } from "src/components/docs";
import { PageSearch, TableOfContentItem, TableOfContents } from "src/components/main";
import { app } from "src/init";

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
    code: MDXCodeElement,
    table: MDXTableElement,
    Badge,
    Color,
    CodeBlock,
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
                return redirectTo(Docs, { remainingSegments: path + '/index' });
            }
            return await import('src/docs/not-found.mdx');
        }
        throw e;
    }
}

function registerMDXContentView(remainingSegments: string) {
    let metaObj: MDXMetaData;
    return extend(registerView(async () => {
        const { default: Content, meta } = await importMDXOrNotFound(remainingSegments);
        metaObj = meta;
        return {
            default: function () {
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
            app.on(viewContext.container, 'pageenter', e => {
                if (e.target === viewContext.container) {
                    return;
                }
                const meta = (e.view! as MDXViewComponent).getMeta();
                setState(meta);
                document.title = meta.title + ' - misonou/docs';

                const hash = parsePath(app.path).hash;
                if (hash) {
                    scrollToElementWithHash(hash);
                }
            }),
            app.on('hashchange', e => {
                if (dom.activeElement.id !== e.newHash.slice(1)) {
                    scrollToElementWithHash(e.newHash);
                }
            })
        );
    }, []);

    if (filePath === '/') {
        return null;
    }

    return (
        <>
            <div id="app-content-header">
                <Module name={state.module} />
                <span>{state.title}</span>
            </div>
            <PageSearch />
            <div id="app-content" {...Mixin.use(Mixin.scrollableTarget)}>
                {renderView({ className: 'app-docs' }, Content)}
            </div>
            <TableOfContents list={state.tableOfContents} />
        </>
    );
}

export const Docs = registerView(DocsView, { view: 'docs' });
