import { useAnimatedIndicator } from "@misonou/react-css-utils";
import { useEffect, useState } from "react";
import "./style.css";

const tabs = [
    "Home",
    "Products",
    "Contact us"
];

export default function Component() {
    const [tab, setTab] = useState(0);
    const indicator = useAnimatedIndicator({
        selector: ".tab-item"
    });

    useEffect(() => {
        indicator.setActiveIndex(tab);
    }, [indicator, tab]);

    return (
        <div ref={indicator.ref} className="tabs">
            {tabs.map((v, i) => (
                <div key={i} className="tab-item" onClick={() => setTab(i)}>
                    {v}
                </div>
            ))}
        </div>
    );
}
