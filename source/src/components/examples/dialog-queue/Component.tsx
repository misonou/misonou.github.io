import { createDialog, createDialogQueue } from "brew-js-react";
import { useEffect, useRef, useState } from "react";
import { DemoComponentProps } from "src/components/docs";
import dom from "zeta-dom/dom";
import { useObservableProperty } from "zeta-dom-react";

const controller = createDialogQueue({
    mode: 'multiple',
    className: 'app-dialog app-demo-view app-demo-notifications',
    concurrent: 3
});

function openNotification(id: number) {
    const dialog = createDialog({
        controller,
        onRender({ commitDialog }) {
            useEffect(() => {
                return dom.on(dialog.root, 'click', () => commitDialog(id));
            }, []);
            return (
                <div>Notification {id}</div>
            );
        }
    });
    return dialog.open();
}

export default function Component({ console }: DemoComponentProps) {
    const [count, setCount] = useState(3);
    const index = useRef(0);
    const pendingCount = useObservableProperty(controller, 'pendingCount');
    return (
        <div>
            <p>
                {'Count: '}
                <input type="number" min={1} max={10} step={1} value={count} onChange={e => setCount(e.currentTarget.valueAsNumber)} />
                {` (${pendingCount} pending)`}
            </p>
            <button onClick={async () => {
                new Uint8Array(count).forEach(async () => {
                    console.log(await openNotification(++index.current));
                });
            }}>
                Show notifications
            </button>
        </div>
    );
}
