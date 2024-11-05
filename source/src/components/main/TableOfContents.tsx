import { Mixin, useScrollableMixin } from "brew-js-react";
import { scrollIntoView, tagName } from "zeta-dom/domUtil";

export function TableOfContents(props: { sections: { title: string, element: Element }[] }) {
    const scrollable = useScrollableMixin({ direction: 'y-only' });

    return (
        <aside {...Mixin.use(scrollable, "app-toc")}>
            <ul {...Mixin.use(scrollable.target)}>
                {props.sections.map((v, i) => (
                    <li key={i} className={tagName(v.element)} onClick={() => scrollToSection(i)}>
                        <a href={'#' + v.element.id}>{v.title}</a>
                    </li>
                ))}
            </ul>
        </aside>
    );

    function scrollToSection(i: number) {
        scrollIntoView(props.sections[i].element, 'top', 50);
    }
}
