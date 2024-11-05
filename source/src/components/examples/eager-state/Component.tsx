import { useRef, useState } from "react";
import { useEagerState } from "zeta-dom-react";

function Child(props: { text: string, useStateCallback: typeof useState }) {
    const [, setState] = props.useStateCallback(1);
    const ref = useRef(0);

    return (
        <p>
            Render count ({props.text}): {++ref.current}<br/>
            <button children="Increment" onClick={onClick} />
        </p>
    );

    function onClick() {
        setState(v => ++v);
        Promise.resolve().then(() => {
            // second call cannot be bailed out when using built-in setState
            // causing ref counter incrementing twice
            setState(v => v);
        });
    }
}

export default function Component() {
    return (
        <div>
            <Child useStateCallback={useState} text="useState" />
            <Child useStateCallback={useEagerState} text="useEagerState" />
        </div>
    );
}
