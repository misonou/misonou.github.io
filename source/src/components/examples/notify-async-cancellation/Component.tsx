import { useEffect, useRef, useState } from "react";
import { DemoComponentProps } from "src/components/docs";
import { openConfirm } from "src/components/main";
import { cancelLock, lock, runAsync, subscribeAsync } from "zeta-dom/domLock";
import { delay } from "zeta-dom/util";

export default function Component({ console }: DemoComponentProps) {
    const container = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        subscribeAsync(container.current!, setLoading);
    }, []);

    return (
        <div ref={container} className="app-demo-buttons">
            <button onClick={start} disabled={loading}>Start</button>
            <button onClick={cancel} disabled={!loading}>Cancel</button>
        </div>
    );

    async function doLongOperation(signal: AbortSignal) {
        signal.addEventListener('abort', () => {
            console.log('Operation cancelled');
        });
        await delay(3000);
        if (!signal.aborted) {
            console.log('Operation completed');
        }
    }

    function start(e: React.UIEvent<HTMLElement>) {
        const promise = runAsync(e.currentTarget, async ({ signal }) => {
            await doLongOperation(signal);
        });

        // acquire lock so that cancellation request can be handled
        lock(e.currentTarget, promise, async () => {
            // return normally to accept cancellation or
            // throw to reject cancellation
            if (!await openConfirm('Confirm to cancel operation?')) {
                throw '';
            }
        });
    }

    function cancel() {
        // request cancellation of operations registered by
        // runAsync or notifyAsync under this element
        cancelLock(container.current!);
    }
}
