import { Mixin, useScrollableMixin } from "brew-js-react";

export interface TableOfContentItem {
    kind: string;
    title: string;
    hash: string;
}

export function TableOfContents(props: { list: TableOfContentItem[] }) {
    const scrollable = useScrollableMixin({ direction: 'y-only' });

    return (
        <aside {...Mixin.use(scrollable, "app-toc")}>
            <ul {...Mixin.use(scrollable.target)}>
                {props.list.map((v, i) => (
                    <li key={i} className={v.kind} onClick={() => scrollToSection(i)}>
                        <a href={v.hash || '#'}>{v.title}</a>
                    </li>
                ))}
            </ul>
        </aside>
    );

    function scrollToSection(i: number) {
        if (props.list[i].kind === 'h1') {
            $('#app').scrollable('scrollTo', 0, 0, 50);
        }
    }
}
