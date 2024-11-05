import { Mixin, useScrollableMixin } from "brew-js-react";
import { useLayoutEffect } from "react";
import "./style.css";

export default function Component() {
    const scrollable = useScrollableMixin({ direction: "both" });

    useLayoutEffect(() => {
        scrollable.setStickyPosition("thead", "top", true);
        scrollable.setStickyPosition("th:first-child, td:first-child", "left", true);
    }, []);

    return (
        <>
            <div {...Mixin.use(scrollable, "stickable")}>
                <table {...Mixin.use(Mixin.scrollableTarget)}>
                    <thead>
                        <tr>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                            <th>Column 4</th>
                            <th>Column 5</th>
                            <th>Column 6</th>
                            <th>Column 7</th>
                        </tr>
                    </thead>
                    <tbody>
                        {"11111111111111111111".split("").map((v, i) => (
                            <tr key={i}>
                                <td>Data 1</td>
                                <td>Data 2</td>
                                <td>Data 3</td>
                                <td>Data 4</td>
                                <td>Data 5</td>
                                <td>Data 6</td>
                                <td>Data 7</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
