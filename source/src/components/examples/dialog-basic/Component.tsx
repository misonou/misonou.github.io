import { createDialog } from "brew-js-react";

function openDialog() {
    const dialog = createDialog({
        className: 'app-dialog app-demo-view',
        onRender({ closeDialog }) {
            return (
                <div>
                    <p>This is my content</p>
                    <button type="button" onClick={closeDialog}>Close</button>
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
