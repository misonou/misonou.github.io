import { useRef } from "react";
import { initSortable } from "@misonou/react-css-utils";
import { useRefInitCallback } from "zeta-dom-react";
import { Checkbox } from "src/components/controls";
import { DemoComponentProps } from "src/components/docs";
import "./style.css";

export default function Component({ console }: DemoComponentProps) {
    const throwError = useRef(false);

    function init(container: HTMLElement) {
        initSortable(container, {
            itemSelector: ".sortable-item",
            handleSelector: "i",
            onOrderChanged(oldIndex, newIndex) {
                if (throwError.current) {
                    throw new Error('Simulated error in onOrderChanged');
                } else {
                    console.log("onOrderChanged", oldIndex, newIndex);
                }
            }
        });
    }

    return (
        <div className="sortable" ref={useRefInitCallback(init)}>
            <Checkbox label="Throw error in handler" onChange={v => throwError.current = v} />
            {"11111111111111111111".split("").map((v, i) => (
                <div className="sortable-item" key={i}>
                    <i>↕</i>
                    <span>{i + 1}</span>
                </div>
            ))}
        </div>
    );
}
