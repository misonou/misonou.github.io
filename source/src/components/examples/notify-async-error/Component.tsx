import { useEffect, useRef, useState } from "react";
import { DemoComponentProps } from "src/components/docs";
import dom from "zeta-dom/dom";
import { runAsync, subscribeAsync } from "zeta-dom/domLock";
import { delay } from "zeta-dom/util";

async function doLongOperation() {
    await delay(1000);
    throw new Error('Error occurred');
}

export default function Component({ console }: DemoComponentProps) {
    const container = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        subscribeAsync(container.current!, setLoading);
        // handle error thrown from operations under container element
        return dom.on(container.current!, 'error', e => {
            console.error(e.error);
            e.handled();
        });
    }, []);

    return (
        <div ref={container}>
            <button
                disabled={loading}
                onClick={(e) => {
                    runAsync(e.currentTarget, async () => {
                        await doLongOperation();
                    });
                }}>
                Start
            </button>
        </div>
    );
}
