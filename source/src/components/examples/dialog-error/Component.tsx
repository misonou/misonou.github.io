import { createDialog } from "brew-js-react";
import { handleUserAction } from "@misonou/react-app-utils";
import { useEffect, useState } from "react";

function openDialog() {
    const dialog = createDialog({
        className: 'app-dialog app-demo-view',
        onCommit(retryCount: number) {
            throw new Error(`Failed ${retryCount + 1} time(s)`);
        },
        onRender({ commitDialog, errorHandler }) {
            const [failedCount, setFailedCount] = useState(0);
            const [errorMessage, setErrorMessage] = useState('');
            useEffect(() => {
                return errorHandler.catch((e) => {
                    setFailedCount(v => v + 1);
                    setErrorMessage(e.message);
                    return true;
                });
            }, []);
            return (
                <div>
                    {errorMessage && <p>{errorMessage}</p>}
                    <button onClick={handleUserAction(() => commitDialog(failedCount))}>Submit</button>
                </div>
            );
        }
    });
    return dialog.open();
}

export default function Component() {
    return (
        <button onClick={openDialog}>Open dialog</button>
    );
}
