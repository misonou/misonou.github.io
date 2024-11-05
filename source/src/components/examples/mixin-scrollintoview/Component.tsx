import { Mixin, useScrollIntoViewMixin } from "brew-js-react";
import { useState } from "react";
import { repeat } from "zeta-dom/util";
import "./style.css";

export default function Component() {
    const scrollIntoView = useScrollIntoViewMixin();
    const [index, setIndex] = useState(0);

    return (
        <div className="mixin-scrollintoview">
            <select onChange={e => setIndex(e.currentTarget.selectedIndex)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <div>
                {repeat(' ', 5).split('').map((_, i) => (
                    <div key={i} {...Mixin.use(scrollIntoView.when(index === i))}>{`Item ${i + 1}`}</div>
                ))}
            </div>
        </div>
    );
}
