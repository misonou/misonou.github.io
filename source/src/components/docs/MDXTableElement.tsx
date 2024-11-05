import React from "react";
import { Mixin, useScrollableMixin } from "brew-js-react";

export function MDXTableElement({ children }: React.PropsWithChildren<{}>) {
    const scrollable = useScrollableMixin({ direction: 'x-only' });
    return (
        <div {...Mixin.use(scrollable, 'app-docs-table')}>
            <table {...Mixin.use(scrollable.target)}>{children}</table>
        </div>
    );
}
