import { useEffect, useRef, useState } from "react";
import { position } from "@misonou/react-css-utils";
import { makeArray } from "zeta-dom/util";
import "./index.css";

const color1 = '#F5B041';
const color2 = '#52BE80';
const color3 = '#AF7AC5';
const items = [
    { mode: 0, color: color1, pos: "left top" },
    { mode: 0, color: color1, pos: "left bottom" },
    { mode: 0, color: color1, pos: "right top" },
    { mode: 0, color: color1, pos: "right bottom" },
    { mode: 0, color: color2, pos: "left top inset-y" },
    { mode: 0, color: color2, pos: "left bottom inset-y" },
    { mode: 0, color: color2, pos: "right top inset-y" },
    { mode: 0, color: color2, pos: "right bottom inset-y" },
    { mode: 0, color: color3, pos: "left top inset" },
    { mode: 0, color: color3, pos: "left bottom inset" },
    { mode: 0, color: color3, pos: "right top inset" },
    { mode: 0, color: color3, pos: "right bottom inset" },
    { mode: 0, color: color1, pos: "left center" },
    { mode: 0, color: color1, pos: "right center" },
    { mode: 0, color: color1, pos: "top center" },
    { mode: 0, color: color1, pos: "bottom center" },
    { mode: 0, color: color3, pos: "left center inset" },
    { mode: 0, color: color3, pos: "right center inset" },
    { mode: 0, color: color3, pos: "top center inset" },
    { mode: 0, color: color3, pos: "bottom center inset" },
    { mode: 0, color: color1, pos: "center" },
    { mode: 1, color: color1, pos: "left" },
    { mode: 1, color: color3, pos: "left inset" },
    { mode: 1, color: color1, pos: "right" },
    { mode: 1, color: color3, pos: "right inset" },
    { mode: 2, color: color1, pos: "top" },
    { mode: 2, color: color3, pos: "top inset" },
    { mode: 2, color: color1, pos: "bottom" },
    { mode: 2, color: color3, pos: "bottom inset" },
    { mode: 1, color: color1, pos: "center auto" },
    { mode: 2, color: color1, pos: "auto center" },
];

export default function Component() {
    const [showAuto, setShowAuto] = useState('0');
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = ref.current!.querySelector('.wrapper')!;
        makeArray(container.querySelectorAll('div')).forEach(v => {
            position(v, container, v.dataset.pos as any, ref.current!);
        });
    }, []);

    return (
        <div id="position-keyword">
            <div id="position-keyword-options">
                {['Both axes', 'X-axis only', 'Y-axis only'].map((v, i) => (
                    <label key={i}>
                        <input type="radio" name="demo_pos" value={String(i)} checked={String(i) === showAuto} onChange={(e) => e.target.checked && setShowAuto(e.target.value)} />
                        <span>{v}</span>
                    </label>
                ))}
            </div>
            <div id="position-keyword-container" ref={ref}>
                <div className="wrapper">
                    {items.map(v => (
                        <div key={v.pos} className="element" data-pos={v.pos} style={{
                            background: v.color,
                            opacity: +showAuto !== v.mode ? 0 : 1
                        }}>{v.pos}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}
