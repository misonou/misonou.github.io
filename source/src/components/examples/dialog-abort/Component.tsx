import { createDialog } from "brew-js-react";
import { useCountdown } from "./useCountdown";

function openDialog() {
    // automatically close the dialog after 5 seconds
    const signal = AbortSignal.timeout(5000);
    const dialog = createDialog({
        className: 'app-dialog app-demo-view',
        // supply the signal to automatically close the dialog when timeout
        signal: signal,
        onRender({ commitDialog }) {
            const seconds = useCountdown(5);
            return (
                <div>
                    <p>This dialog will automatically close after {seconds} seconds.</p>
                    <button type="button" onClick={commitDialog}>Close</button>
                </div>
            );
        }
    });
    dialog.open();
}

export default function Component() {
    return (
        <button onClick={openDialog}>Open dialog</button>
    );
}
