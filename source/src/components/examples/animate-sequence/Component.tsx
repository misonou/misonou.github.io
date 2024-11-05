import { useRef, useState } from "react";
import { animateIn, animateOut } from "brew-js/anim";
import "./style.css";

export default function Component() {
    const ref = useRef<HTMLDivElement>(null);
    const [reverse, setReverse] = useState(0);

    return (
        <div>
            <div ref={ref} animate-on="custom" animate-out="" animate-sequence=".anim-sequence-item" animate-sequence-type="slide-down fade-in"
                animate-sequence-reverse={[undefined, '', 'in', 'out'][reverse]}>
                <div className="anim-sequence-item"></div>
                <div className="anim-sequence-item"></div>
                <div className="anim-sequence-item"></div>
                <div className="anim-sequence-item"></div>
                <div className="anim-sequence-item"></div>
            </div>
            <select onChange={(e) => setReverse(e.currentTarget.selectedIndex)}>
                <option>Normal</option>
                <option>Reverse in/out</option>
                <option>Reverse in</option>
                <option>Reverse out</option>
            </select>{' '}
            <button onClick={() => animateIn(ref.current!, 'custom')}>Animate</button>{' '}
            <button onClick={() => animateOut(ref.current!, 'custom')}>Reset</button>
        </div>
    );
}
