import { Mixin, useFocusStateMixin } from "brew-js-react";
import { useEffect, useState } from "react";
import { Toggle } from "src/components/controls";
import dom from "zeta-dom/dom";

export default function Component() {
    const focusState = useFocusStateMixin();
    const [delegateFocus, setDelegateFocus] = useState(true);

    useEffect(() => {
        const [first, second] = focusState.elements();
        if (delegateFocus) {
            dom.retainFocus(first, second);
        } else {
            dom.releaseFocus(second);
        }
    }, [delegateFocus]);

    return (
        <>
            <Toggle
                label="Delegate focus"
                checked={delegateFocus}
                onChange={setDelegateFocus} />
            <div id="demo-rgxdp">
                <div {...Mixin.use(focusState)}></div>
                <div {...Mixin.use(focusState)}></div>
            </div>
        </>
    );
}
