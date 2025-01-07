import { createDialog, createDialogQueue } from "brew-js-react";
import { useState } from "react";
import { Checkbox } from "src/components/controls";
import { DemoComponentProps } from "src/components/docs";

const controller = createDialogQueue({
    className: 'app-dialog app-demo-view'
});

function openDialog(id: number) {
    const dialog = createDialog({
        controller,
        onRender({ commitDialog, controller }) {
            const [skipNext, setSkipNext] = useState(false);
            return (
                <div>
                    <p>Dialog {id}</p>
                    {!!controller?.pendingCount &&
                        <p>
                            <Checkbox checked={skipNext} onChange={setSkipNext}>
                                Skip next ({controller.pendingCount})
                            </Checkbox>
                        </p>}

                    <button type="button" onClick={onClick}>OK</button>
                </div>
            );
            function onClick() {
                if (controller && skipNext) {
                    controller.dismissPending();
                }
                commitDialog(id);
            }
        }
    });
    return dialog.open();
}

export default function Component({ console }: DemoComponentProps) {
    return (
        <button onClick={async () => {
            console.log(await Promise.all([
                openDialog(1),
                openDialog(2),
                openDialog(3),
            ]));
        }}>
            Open dialog
        </button>
    );
}
