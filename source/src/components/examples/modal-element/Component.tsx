import { useEffect, useRef, useState } from "react";
import { Toggle } from "src/components/controls";
import { DemoComponentProps } from "src/components/docs";
import dom, { releaseModal, setModal } from "zeta-dom/dom";

export default function Component({ console }: DemoComponentProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [enableModal, setEnableModal] = useState(false);

    useEffect(() => {
        return dom.on('modalchange', e => {
            console.log(e.modalElement);
        });
    }, []);

    useEffect(() => {
        const container = ref.current!.closest('.app-demo')!;
        if (enableModal) {
            setModal(container);
        } else {
            releaseModal(container);
        }
    }, [enableModal]);

    return (
        <div ref={ref}>
            <Toggle label="Modal" checked={enableModal} onChange={setEnableModal} />
        </div>
    );
}
