import { createElement, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useSingleton } from "zeta-dom-react";
import { noop } from "zeta-dom/util";

export function generateAnchor(v: string) {
    if (/:(.+ event)$/.test(v)) {
        v = RegExp.$1;
    }
    return v.toLowerCase().replace(/\W+/g, '-').replace(/^-|-$/g, '');
}

export function validateJSON(value: string) {
    try {
        JSON.parse(value.trim() || 'null');
        return '';
    } catch {
        return 'Invalid JSON';
    }
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

export interface DetachedRoot {
    readonly ref: (container: HTMLElement | null) => void;
    readonly render: (content: React.ReactNode) => Promise<void>;
}

export function useDetachedRoot() {
    return useSingleton<DetachedRoot>(() => {
        const self = {
            root: null as ReactDOM.Root | null,
            container: null as HTMLElement | null,
            ref(container: HTMLElement | null) {
                if (container) {
                    if (container === self.container) {
                        return;
                    }
                    self.dispose();
                    self.container = container;
                    self.root = ReactDOM.createRoot(container);
                }
            },
            render(children: React.ReactNode) {
                return new Promise<void>(onComplete => {
                    self.root?.render(createElement(OnCompleteWrapper, { onComplete, children }));
                });
            },
            dispose() {
                if (self.root) {
                    self.root.unmount();
                    self.root = null;
                }
            }
        };
        return self;
    }, []);
}

function OnCompleteWrapper(props: { onComplete: () => void; children: React.ReactNode }) {
    const { onComplete, children } = props;
    useLayoutEffect(() => {
        onComplete();
    });
    return children;
}
