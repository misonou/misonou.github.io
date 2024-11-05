import { useRef } from "react";
import { animateIn, animateOut } from "brew-js/anim";
import "./typeWriter";
import "./style.css";

export default function Component() {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <div>
            <div ref={ref} animate-on="custom" animate-in="" animate-typewriter="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <button onClick={() => animateIn(ref.current!, 'custom')}>Animate</button>{' '}
            <button onClick={() => animateOut(ref.current!, 'custom')}>Reset</button>
        </div>
    );
}
