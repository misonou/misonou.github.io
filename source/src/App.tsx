import { Mixin, registerErrorView, renderView, useAppReadyState, useScrollableMixin } from "brew-js-react";
import { useEffect, useRef } from "react";
import { Nav } from "src/components/main";
import { Docs } from "src/views/Docs";
import { reportError } from "zeta-dom/dom";

export default function App() {
    const { ready } = useAppReadyState();
    const scrollable = useScrollableMixin({ persistScroll: true });
    return (
        <div id="app" {...Mixin.use(scrollable)}>
            {ready && <>
                <Nav />
                <main>
                    {renderView({ className: 'app-content-container' }, Docs)}
                </main>
            </>}
        </div>
    );
}

registerErrorView((props) => {
    const ref = useRef<any>();
    useEffect(() => {
        ref.current = ref.current || reportError(props.error) || true;
    });
    return (
        <div className="app-page-error">
            {props.error.name === 'ChunkLoadError' ?
                'Network disconnected' :
                props.error.toString()}
        </div>
    );
});
