import { useState } from "react";
import { useSingleton } from "zeta-dom-react";
import { noop } from "zeta-dom/util";

export function generateAnchor(v: string) {
    return v.toLowerCase().replace(/\W+/g, '-').replace(/^-|-$/g, '');
}

export function useIdleSignal() {
    // @ts-ignore
    if (window.requestIdleCallback) {
        const [state, setState] = useState(() => {
            return {
                value: false,
                callback: function markAsTrue() {
                    setState(v => v.value ? v : {
                        value: true,
                        callback: markAsTrue
                    });
                }
            };
        });
        useSingleton(() => {
            return ({ t: requestIdleCallback(state.callback) });
        }, [], (target) => {
            return cancelIdleCallback(target.t);
        });
        return [state.value, state.callback] as const
    }
    return [true, noop as (() => void)] as const;
}
