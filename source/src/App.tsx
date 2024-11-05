import { Mixin, registerErrorView, renderView, useAppReadyState, useScrollableMixin } from "brew-js-react";
import { Nav } from "src/components/main";
import { Docs } from "src/views/Docs";

export default function App() {
    const { ready } = useAppReadyState();
    const scrollable = useScrollableMixin({ persistScroll: true });
    if (!ready) {
        return null;
    }

    return (
        <div id="app" {...Mixin.use(scrollable)}>
            <Nav />
            <main>
                {renderView({ className: 'app-content-container' }, Docs)}
            </main>
        </div>
    );
}

registerErrorView((props) => {
    return (
        <div className="app-page-error">
            {props.error.name === 'ChunkLoadError' ?
                'Network disconnected' :
                props.error.toString()}
        </div>
    );
});
