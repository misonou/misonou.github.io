import { Mixin, useScrollableMixin } from "brew-js-react";
import { useMemo } from "react";
import { createDependency, useDependency, useMediaQuery } from "zeta-dom-react";

export interface TableOfContentItem {
    kind: string;
    title: string;
    hash: string;
}

const {
    Consumer: TableOfContentDependency,
    Provider: TableOfContentProvider
} = createDependency<React.ReactNode>();

export { TableOfContentDependency };

function TableOfContentsWrapper(props: React.PropsWithChildren<{}>) {
    const scrollable = useScrollableMixin({ direction: 'y-only' });

    return (
        <aside {...Mixin.use(scrollable, "app-toc")}>
            <ul {...Mixin.use(scrollable.target)}>
                {props.children}
            </ul>
        </aside>
    );
}

export function TableOfContents(props: { list: TableOfContentItem[] }) {
    const isTablet = useMediaQuery('(max-width: 1080px)');
    const nodeToRender = useMemo(() => (
        <TableOfContentsWrapper>
            {props.list.map((v, i) => (
                <li key={i} className={v.kind} onClick={() => v.kind === 'h1' && $('#app').scrollable('scrollTo', 0, 0, 50)}>
                    <a href={v.hash || '#'}>{v.title}</a>
                </li>
            ))}
        </TableOfContentsWrapper>
    ), [props.list]);

    useDependency(TableOfContentProvider, isTablet ? nodeToRender : null);
    return nodeToRender;
}
