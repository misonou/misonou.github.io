import { useRef, useState } from "react";
import { animateIn, animateOut } from "brew-js/anim";
import { repeat } from "zeta-dom/util";
import "./style.css";

export default function Component() {
    const ref = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(1);
    return (
        <div>
            <div ref={ref} animate-on="custom" animate-sequence=".anim-autostart-item" animate-sequence-type="slide-down fade-in">
                {repeat(' ', count).split('').map((v, i) => (
                    <div key={i} className="anim-autostart-item" is-animate-sequence=""></div>
                ))}
            </div>
            <button onClick={() => animateIn(ref.current!, 'custom', '', true)}>Animate</button>{' '}
            <button onClick={() => setCount(v => ++v)}>Add</button>{' '}
            <button onClick={() => (animateOut(ref.current!, 'custom'), setCount(1))}>Reset</button>
        </div>
    );
}
