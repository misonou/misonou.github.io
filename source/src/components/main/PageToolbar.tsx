import { classNames, useDependency, useObservableProperty } from "zeta-dom-react";
import { Mixin, useFlyoutMixin } from "brew-js-react";
import { Button } from "src/components/controls";
import { FaListUl } from "react-icons/fa";
import { app } from "src/init";
import { TableOfContentDependency } from "./TableOfContents";
import { PageSearch } from "./PageSearch";

export function PageToolbar() {
    const textSearchEnabled = useObservableProperty(app, 'textSearchEnabled');
    const tableOfContents = useDependency(TableOfContentDependency);
    const flyout = useFlyoutMixin();

    return (
        <div id="app-content-header-aux" className={classNames({ active: textSearchEnabled })}>
            <PageSearch />
            {tableOfContents &&
                <>
                    <Button id="app-content-toc-flyout-toggle" variant="link" icon={FaListUl} {...Mixin.use(flyout.toggle)} />
                    <div id="app-content-toc-flyout" {...Mixin.use(flyout.withEffects('fade-in'))}>
                        {tableOfContents}
                    </div>
                </>}
        </div>
    );
}
