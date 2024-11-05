import { domEventRef } from "zeta-dom-react";

export default function Component() {
    return (
        <>
            <input
                ref={domEventRef('keystroke', e => {
                    e.target.nextElementSibling!.textContent = e.data;
                    e.handled();
                })}
                placeholder="Try pressing keys ..." />
            <div></div>
        </>
    );
}
