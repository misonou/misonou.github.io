import { domEventRef } from "zeta-dom-react";
import { beginDrag } from "zeta-dom/dom";
import { containerStyle, squareStyle } from "./style";

export default function Component() {
    return (
        <div style={containerStyle}>
            <div ref={domEventRef({ mousedown })} style={squareStyle}></div>
        </div>
    );

    function mousedown(e: Zeta.ZetaPointerEvent<HTMLDivElement>) {
        const element = e.currentTarget;
        const style = getComputedStyle(element);
        const startX = parseFloat(style.left);
        const startY = parseFloat(style.top);
        beginDrag((x, y, dx, dy) => {
            element.style.left = Math.max(0, Math.min(100, startX + dx)) + 'px';
            element.style.top = Math.max(0, Math.min(100, startY + dy)) + 'px';
        }).catch(() => {
            element.style.left = startX + 'px';
            element.style.top = startY + 'px';
        });
        e.preventDefault();
    }
}
