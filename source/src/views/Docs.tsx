import { useEffect, useState } from "react";
import { Mixin, ViewComponent, registerView, renderView, useRouteParam } from "brew-js-react";
import { combineFn, each, isErrorWithCode, map } from "zeta-dom/util";
import { removeNode, scrollIntoView } from "zeta-dom/domUtil";
import dom from "zeta-dom/dom";
import { parsePath } from "brew-js/util/path";
import { Badge, CodeBlock, Color, DemoWithSource, ImportHint, Inline, MDXAnchorElement, MDXCodeElement, MDXTableElement, MemberList, Module, Snippets, VersionTimeline, WaterpipeExample } from "src/components/docs";
import { PageSearch, TableOfContents } from "src/components/main";
import { app } from "src/init";
import { generateAnchor } from "src/util";

const viewComponents: Zeta.Dictionary<ViewComponent<{}>> = {};
const mdxComponents = {
    a: MDXAnchorElement,
    code: MDXCodeElement,
    table: MDXTableElement,
    Badge,
    Color,
    CodeBlock,
    Inline,
    Module,
    Snippets,
    DemoWithSource,
    ImportHint,
    MemberList,
    VersionTimeline,
    WaterpipeExample
};

async function importMDXOrNotFound(path: string) {
    try {
        return await import('src/docs' + path + '.mdx');
    } catch (e) {
        if (isErrorWithCode(e, 'MODULE_NOT_FOUND')) {
            return await import('src/docs/not-found.mdx');
        }
        throw e;
    }
}

function registerMDXContentView(remainingSegments: string) {
    return registerView(async () => {
        const { default: Content } = await importMDXOrNotFound(remainingSegments);
        return {
            default: function () {
                return <Content components={mdxComponents} />;
            }
        };
    }, { view: 'docs', remainingSegments });
}

function extractTitle(element: Element | null) {
    if (!element) {
        return '';
    }
    element = element.cloneNode(true) as Element;
    element.querySelectorAll('del,.app-docs-member-badge').forEach(removeNode);
    return element.textContent || '';
}

function scrollToElementWithHash(hash: string) {
    const target = document.getElementById(hash.slice(1));
    if (target) {
        scrollIntoView(target, 'top', 50);
    }
}

function DocsView() {
    const [state, setState] = useState({
        module: '',
        title: '',
        sections: [] as { title: string, element: Element }[]
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
            app.on('pageenter', e => {
                const container = e.target;
                const title = extractTitle(container.querySelector('h1'));
                const module = extractTitle(container.querySelector('.app-module-badge'));
                document.title = title + ' - misonou/docs';
                setState({
                    title,
                    module,
                    sections: [
                        { title, element: container },
                        ...map(container.querySelectorAll('h2'), v => ({ title: extractTitle(v), element: v }))
                    ]
                });
                each(container.querySelectorAll('h2,h3'), function (i, v) {
                    v.id = 's-' + generateAnchor(extractTitle(v));
                });
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
            <TableOfContents sections={state.sections} />
        </>
    );
}

export const Docs = registerView(DocsView, { view: 'docs' });
