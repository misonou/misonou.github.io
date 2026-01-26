import React from "react";
import { Mixin, useScrollableMixin } from "brew-js-react";

export function MDXTableElement({ children, ...props }: React.PropsWithChildren<{}>) {
    const scrollable = useScrollableMixin({ direction: 'x-only' });
    return (
        <div {...Mixin.use(scrollable, 'app-docs-table')}>
            <table {...Mixin.use(scrollable.target)} {...props}>{children}</table>
        </div>
    );
}
