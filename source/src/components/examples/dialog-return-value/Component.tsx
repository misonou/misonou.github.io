import { createDialog } from "brew-js-react";
import { useState } from "react";

function openDialog() {
    const dialog = createDialog<boolean>({
        className: 'app-dialog app-demo-view',
        onRender({ closeDialog }) {
            return (
                <div>
                    <p>Confirm?</p>
                    <button type="button" onClick={() => closeDialog(true)}>OK</button>
                    <button type="button" onClick={() => closeDialog(false)}>Cancel</button>
                </div>
            );
        }
    });
    return dialog.open();
}

export default function Component() {
    const [value, setValue] = useState<boolean | undefined>();
    return (
        <>
            <p>Confirm? {String(value)}</p>
            <button onClick={async () => setValue(await openDialog())}>
                Open dialog
            </button>
        </>
    );
}
