import { useEffect, useRef } from "react";
import { TextInput } from "src/components/controls";
import { setTabRoot } from "zeta-dom/dom";

export default function Component() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTabRoot(container.current!);
    }, []);

    return (
        <div id="demo-tabroot" ref={container}>
            <p>
                Focus one of the text boxes and then press <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd>.
            </p>
            <TextInput placeholder="Input..." />
            <TextInput placeholder="Input..." />
            <TextInput placeholder="Input..." />
        </div>
    );
}
