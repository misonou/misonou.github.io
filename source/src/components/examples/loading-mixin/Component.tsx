import { Mixin, useLoadingStateMixin } from "brew-js-react";
import { useObservableProperty } from "zeta-dom-react";
import { cancelLock, runAsync } from "zeta-dom/domLock";
import { delay } from "zeta-dom/util";

function doLongOperation() {
    return delay(3000);
}

export default function Component() {
    const loadingState = useLoadingStateMixin();
    const loading = useObservableProperty(loadingState, 'loading');
    return (
        <div id="demo-wujq5" {...Mixin.use(loadingState)}>
            {loading ?
                <button onClick={e => cancelLock(e.currentTarget.parentElement!)}>
                    Cancel
                </button> :
                <button onClick={e => runAsync(e.currentTarget, doLongOperation)}>
                    Start
                </button>}
        </div>
    );
}
