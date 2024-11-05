import { Form, useFormContext } from "zeta-dom-react";
import { Button, TextInput, Toggle } from "src/components/controls";
import dom from "zeta-dom/dom";
import { useEffect } from "react";

export default function Component() {
    const form = useFormContext({}, { preventLeave: true });

    useEffect(() => {
        form.on('beforeLeave', () => {
            if (!form.data.allowLeaving) {
                return Promise.reject();
            }
        });
    }, [form]);

    useEffect(() => {
        setTimeout(() => {
            const formElement = form.element()!;
            formElement.nextElementSibling!.textContent = `Lock is ${dom.locked() ? 'on' : 'off'}`;
        });
    });

    return (
        <div className="app-demo-form-col2">
            <Form context={form}>
                <Toggle name="allowLeaving" label="Allow leaving" />
                <TextInput name="item" />
                <Button type="reset" label="Reset" />
            </Form>
            <div></div>
        </div>
    );
}
