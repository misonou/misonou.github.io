import { useFocusStateMixin, Mixin } from "brew-js-react";
import { forwardRef } from "react";


export const DemoBlock = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>((props, ref) => {
    const focusStateMixin = useFocusStateMixin();
    return (
        <div {...Mixin.use(focusStateMixin, 'app-demo app-demo-block')}>
            <div {...props} {...Mixin.use(ref, 'app-demo-view', props.className)} />
        </div>
    );
});
