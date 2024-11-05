import { Mixin, createDialog, useLoadingStateMixin } from "brew-js-react";
import { delay } from "zeta-dom/util";
import { handleUserAction } from "@misonou/react-app-utils";
import { useState } from "react";

function openDialog() {
    const dialog = createDialog({
        className: 'app-dialog app-demo-view',
        // notice that onCommit will not be invoke when
        // dialog is closed by clicking outside or tapping escape key
        async onCommit() {
            await delay(3000);
            return Math.random();
        },
        onRender({ closeDialog }) {
            const loadingState = useLoadingStateMixin();
            return (
                <div>
                    <p>This is my content</p>
                    <button
                        {...Mixin.use(loadingState)}
                        type="button"
                        onClick={handleUserAction(() => closeDialog(), { lock: true })}>Close</button>
                </div>
            );
        }
    });
    return dialog.open();
}

export default function Component() {
    const [result, setResult] = useState<number | undefined>();
    const loadingState = useLoadingStateMixin();
    return (
        <>
            <p>Result: {result}</p>
            <button
                {...Mixin.use(loadingState)}
                type="button"
                onClick={handleUserAction(() => openDialog().then(setResult))}>Open dialog</button>
        </>
    );
}
