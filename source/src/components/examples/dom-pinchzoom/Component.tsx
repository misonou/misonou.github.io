import { domEventRef } from "zeta-dom-react";
import { beginDrag, beginPinchZoom } from "zeta-dom/dom";
import { containerStyle, squareStyle } from "./style";

export default function Component() {
    return (
        <div style={containerStyle}>
            <div ref={domEventRef({ touchstart })} style={squareStyle}></div>
        </div>
    );

    function touchstart(e: Zeta.ZetaTouchEvent<HTMLDivElement>) {
        const element = e.currentTarget;
        const initial = new DOMMatrixReadOnly(getComputedStyle(element).transform);
        if (e.originalEvent.touches.length === 1) {
            beginDrag((x, y, dx, dy) => {
                element.style.transform = new DOMMatrix([1, 0, 0, 1, dx, dy])
                    .multiplySelf(initial)
                    .toString();
            });
        } else {
            beginPinchZoom((deg, scale, tx, ty) => {
                element.style.transform = new DOMMatrix([1, 0, 0, 1, tx, ty])
                    .multiplySelf(initial)
                    .rotateSelf(0, 0, deg)
                    .scaleSelf(scale).toString();
            });
        }
        e.preventDefault();
    }
}
