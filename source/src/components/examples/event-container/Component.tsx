import { DemoComponentProps } from "src/components/docs";
import { useRefInitCallback } from "zeta-dom-react";
import { ZetaEventContainer } from "zeta-dom/events";

export default function Component({ console }: DemoComponentProps) {
    return (
        <div ref={useRefInitCallback(initContainer)}>
            <button>Button</button>
        </div>
    );

    function initContainer(element: HTMLElement) {
        class Component {
            element: HTMLElement;
            constructor(element: HTMLElement) {
                this.element = element;
            }
        }

        const container = new ZetaEventContainer<Component>(element, null, {
            captureDOMEvents: true,
            autoDestroy: true,
        });
        container.tap(e => {
            console.log('tap:', e.type, '- target:', e.target);
            return container.emit(e);
        });

        const component = new Component(element.querySelector('button')!);
        container.add(component, {
            click(e) {
                console.log('event:', e.type, '- context:', e.context);
            }
        });
    }
}
