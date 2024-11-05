import { domEventRef } from "zeta-dom-react";

export default function Component() {
    return (
        <>
            <input
                ref={domEventRef('metakeychange', e => {
                    e.target.nextElementSibling!.textContent = e.data;
                })}
                placeholder="Try pressing Ctrl/Shift/Alt keys ..." />
            <div></div>
        </>
    );
}
