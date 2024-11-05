import { initSortable } from "@misonou/react-css-utils";
import { useRefInitCallback } from "zeta-dom-react";
import { DemoComponentProps } from "src/components/docs";
import "./style.css";

export default function Component({ console }: DemoComponentProps) {
    function init(container: HTMLElement) {
        initSortable(container, {
            itemSelector: ".sortable-item",
            handleSelector: "i",
            onOrderChanged(oldIndex, newIndex) {
                console.log("onOrderChanged", oldIndex, newIndex);
            }
        });
    }

    return (
        <div className="sortable" ref={useRefInitCallback(init)}>
            {"11111111111111111111".split("").map((v, i) => (
                <div className="sortable-item" key={i}>
                    <i>↕</i>
                    <span>{i + 1}</span>
                </div>
            ))}
        </div>
    );
}
