import React, { useEffect, useRef } from "react";
import { PositionAlign, Positioner } from "@misonou/react-css-utils";
import { getRect, pointInRect } from "zeta-dom/domUtil";
import { combineFn } from "zeta-dom/util";
import dom from "zeta-dom/dom";
import "./index.css";

export default function Component() {
    const ref = useRef<HTMLDivElement>(null);
    const positioner = useRef<Positioner>();

    useEffect(() => {
        const element = document.getElementById('position-observe-element')!;
        const within = document.getElementById('position-observe-within')!;
        const to = document.getElementById('position-observe-ref')!;

        function initResize(element: HTMLElement) {
            return dom.on(element, 'mousedown', e => {
                if (pointInRect(e.clientX, e.clientY, getRect(element).collapse('right').collapse('bottom').expand(10))) {
                    const rect = getRect(element, 'content-box');
                    return dom.beginDrag((x, y, dx, dy) => {
                        element.style.width = rect.width + dx + 'px';
                        element.style.height = rect.height + dy + 'px';
                    });
                }
            });
        }

        const p = new Positioner(element, to, 'left bottom', { within });
        p.observe();
        positioner.current = p;

        return combineFn(
            initResize(within),
            () => p.disconnect()
        );
    }, []);

    return (
        <div id="position-observe" ref={ref}>
            <p>Try resize the outermost container:</p>
            <div id="position-observe-within">
                <div id="position-observe-ref"></div>
                <div id="position-observe-element"></div>
            </div>
            <dl>
                <dt>Align</dt>
                <dd>
                    <select defaultValue="0" onChange={(e) => updateOption('dir', e)}>
                        <option value="0">left bottom</option>
                        <option value="1">left bottom inset-y</option>
                    </select>
                </dd>
                <dt>Strategy</dt>
                <dd>
                    <select defaultValue="0" onChange={(e) => updateOption('strategy', e)}>
                        <option value="0">flip fit</option>
                        <option value="1">fit</option>
                    </select>
                </dd>
            </dl>
        </div>
    );

    function updateOption(prop: string, e: React.ChangeEvent<HTMLSelectElement>): void {
        const value = e.currentTarget.selectedOptions.item(0)!.text;
        if (prop === 'dir') {
            positioner.current!.setOptions(value as PositionAlign);
        } else {
            positioner.current!.setOptions({ [prop]: value });
        }
    }
}
