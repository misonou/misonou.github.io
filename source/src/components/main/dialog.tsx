import { createDialog } from "brew-js-react";

export function openAlert(message: string) {
    const dialog = createDialog({
        className: 'app-dialog app-demo-view',
        onRender({ closeDialog }) {
            return (
                <div>
                    <p>{message}</p>
                    <div className="app-dialog-buttons">
                        <button type="button" onClick={closeDialog}>OK</button>
                    </div>
                </div>
            );
        }
    });
    return dialog.open();
}

export function openConfirm(message: string) {
    const dialog = createDialog<boolean>({
        className: 'app-dialog app-demo-view',
        onRender({ closeDialog }) {
            return (
                <div>
                    <p>{message}</p>
                    <div className="app-dialog-buttons">
                        <button type="button" onClick={() => closeDialog(true)}>OK</button>
                        <button type="button" onClick={() => closeDialog(false)}>Cancel</button>
                    </div>
                </div>
            );
        }
    });
    return dialog.open();
}
