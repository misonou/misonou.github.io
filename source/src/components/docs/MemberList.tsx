import { map } from "zeta-dom/util";

interface MemberListProps {
    i: string;
    extends?: string | string[] | string[][];
    sp?: string[];
    sm?: string[];
    ip?: string[];
    im?: string[];
    ev?: string[];
    noRoot?: boolean;
    noRender?: boolean;
}

function getHashDefault(i: string, v: string) {
    return `${i}-${v.toLowerCase().replace('()', '')}`;
}

function SubList(props: { i: string, title: string, list: string[], getHash?: (i: string, v: string) => string }) {
    const i = props.i.toLowerCase();
    return (
        <div>
            <h4>{props.title}</h4>
            <div className="col col-3">
                <ul>
                    {props.list.sort().map(v => (
                        <li key={v}>
                            <a href={`#s-${(props.getHash || getHashDefault)(i, v)}`}><code>{v}</code></a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function MemberList(props: MemberListProps) {
    if (props.noRender) {
        return null;
    }
    return (
        <div className="app-docs-member">
            {props.extends && (
                <div className="app-docs-member-subclass">
                    {map(props.extends, (v, i) => (
                        <div key={i}>
                            {Array.isArray(v) ? <a href={v[1]}>{v[0]}</a> : v}
                        </div>
                    ))}
                    <div>
                        <span>{props.i}</span>
                    </div>
                </div>
            )}
            {(props.ip || props.im || props.sp || props.sm || props.ev) &&
                <div className="app-docs-member-list">
                    {props.ip && <SubList i={props.i} title="Instance properties" list={props.ip} />}
                    {props.im && <SubList i={props.i} title="Instance methods" list={props.im} />}
                    {props.sp && <SubList i={props.i} title="Static properties" list={props.sp} />}
                    {props.sm && <SubList i={props.i} title="Static methods" list={props.sm} />}
                    {props.ev && <SubList i={props.i} title="Events" list={props.ev} getHash={(i, v) => `${v.toLowerCase()}-event`} />}
                </div>}
        </div>
    );
}
