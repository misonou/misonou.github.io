import { useRef } from "react";
import { animateIn, animateOut } from "brew-js/anim";
import "./style.css";

export default function Component() {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <div>
            <div ref={ref}>
                <div className="anim-item" animate-on="custom" animate-in="fade-in"><span>Built-in effect</span></div>
                <div className="anim-item" animate-on="custom" animate-in=""><span>CSS transition</span></div>
                <div className="anim-item" animate-on="custom" animate-in=""><span>CSS animation</span></div>
            </div>
            <button onClick={() => animateIn(ref.current!, 'custom')}>Animate</button>{' '}
            <button onClick={() => animateOut(ref.current!, 'custom')}>Reset</button>
        </div>
    );
}
