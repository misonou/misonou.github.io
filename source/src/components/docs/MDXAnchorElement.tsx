import { classNames } from "zeta-dom-react";
import { makeArray, map } from "zeta-dom/util";
import { generateAnchor } from "src/util";
import apiIndex from "src/data/api.json";

const apiLocation = Object.fromEntries(map(apiIndex, (v, i) => v.map(v => {
    const [name, hash] = makeArray(v);
    return [name, '/docs' + i + (hash || '#s-' + generateAnchor(name))];
})));

export function MDXAnchorElement({ href, children }: any) {
    if (href[0] === ':') {
        const codeContent = href.slice(1) || makeArray(children).map(v => v.props ? v.props.children : v).join('');
        href = apiLocation[codeContent] || apiLocation[codeContent + '()'];
        if (!href) {
            return children;
        }
    }
    const external = href[0] !== '/' && href[0] !== '#';
    return (
        <a className={classNames({ external })} href={href} target={external ? '_blank' : '_self'}>{children}</a>
    );
}
