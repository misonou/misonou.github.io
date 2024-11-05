import { Mixin, useFlyoutMixin } from "brew-js-react";

export default function Component() {
    const flyout1 = useFlyoutMixin();
    const flyout2 = useFlyoutMixin({ containment: '#example-flyout-containment' });

    return (
        <div id="example-flyout-containment">
            <div>
                <button {...Mixin.use(flyout1.toggle)}>Normal menu</button>
                <div {...Mixin.use(flyout1)}>
                    Flyout will be closed when it loses focus.
                </div>
            </div>
            <div>
                <button {...Mixin.use(flyout2.toggle)}>Containment menu</button>
                <div {...Mixin.use(flyout2)}>
                    Flyout remains open when focus is moved outside the containment element.
                </div>
            </div>
        </div>
    );
}
