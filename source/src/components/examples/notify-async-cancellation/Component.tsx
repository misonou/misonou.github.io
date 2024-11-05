import { useEffect, useRef, useState } from "react";
import { openAlert, openConfirm } from "src/components/main";
import { cancelLock, lock, runAsync, subscribeAsync } from "zeta-dom/domLock";
import { delay } from "zeta-dom/util";

async function doLongOperation(signal: AbortSignal) {
    signal.addEventListener('abort', () => {
        openAlert('Operation cancelled');
    });
    await delay(3000);
    if (!signal.aborted) {
        openAlert('Operation completed');
    }
}

export default function Component() {
    const container = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        subscribeAsync(container.current!, setLoading);
    }, []);

    return (
        <div ref={container}>
            {loading ?
                <button onClick={cancel}>Cancel</button> :
                <button onClick={start}>Start</button>}
        </div>
    );

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
