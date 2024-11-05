import { Mixin, useScrollableMixin } from "brew-js-react";
import { useLayoutEffect } from "react";
import "./style.css";

export default function Component() {
    const scrollable = useScrollableMixin({ direction: "both" });

    useLayoutEffect(() => {
        scrollable.setOptions({
            sticky: ".jq-scrollable-sticky-item",
            stickyHandle: "h4"
        });
    }, []);

    return (
        <div {...Mixin.use(scrollable, "jq-scrollable-sticky")}>
            <div className="jq-scrollable-sticky-header">
                Header
            </div>
            <div {...Mixin.use(Mixin.scrollableTarget)}>
                <div className="jq-scrollable-sticky-item">
                    <h4>Sub-header 1</h4>
                    <div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in
                            dustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in
                            dustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="jq-scrollable-sticky-item">
                    <h4>Sub-header 2</h4>
                    <div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in
                            dustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in
                            dustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
