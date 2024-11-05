import { useEffect, useRef, useState } from "react";
import { runAsync, subscribeAsync } from "zeta-dom/domLock";
import { delay } from "zeta-dom/util";

function doLongOperation() {
    return delay(3000);
}

export default function Component() {
    const container = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // listen operations registered by
        // runAsync or notifyAsync under this element
        subscribeAsync(container.current!, setLoading);
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
                {loading ? 'Wait 3 seconds' : 'Start'}
            </button>
        </div>
    );
}
