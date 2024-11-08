import { classNames } from "zeta-dom-react";
import { makeArray, map } from "zeta-dom/util";
import { generateAnchor } from "src/util";
import apiIndex from "src/data/api.json";

const apiLocation = Object.fromEntries(map(apiIndex, (v, i) => v.map(v => {
    const [name, hash] = makeArray(v);
    return [name, [i, hash]];
})));

const cache = Object.create(null);

function getHref(text: string) {
    let [path, hash] = apiLocation[text] || apiLocation[text + '()'] || [];
    if (!path) {
        return '';
    }
    if (!hash) {
        if (/:(.+ event)$/.test(text)) {
            hash = '#s-' + generateAnchor(RegExp.$1);
        } else if (text.replace(/[^\w.]/g, '') !== path.split('/').pop()) {
            hash = '#s-' + generateAnchor(text);
        }
    }
    return '/docs' + path + (hash || '');
}

export function MDXAnchorElement({ href, children }: any) {
    if (href[0] === ':') {
        const codeContent = href.slice(1) || makeArray(children).map(v => v.props ? v.props.children : v).join('');
        href = cache[codeContent] || (cache[codeContent] = getHref(codeContent));
        if (!href) {
            return children;
        }
    }
    const external = href[0] !== '/' && href[0] !== '#';
    return (
        <a className={classNames({ external })} href={href} target={external ? '_blank' : '_self'}>{children}</a>
    );
}
