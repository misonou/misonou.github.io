import { Form, useFormContext } from "zeta-dom-react";
import { Button, TextInput } from "src/components/controls";
import { FormDataJsonView } from "src/components/docs";

export default function Component() {
    const form = useFormContext();
    return (
        <div className="app-demo-form-col2">
            <Form context={form}>
                <TextInput name="item" readOnly />
                <Button label="Add" onClick={() => form.data.item++} />
            </Form>
            <FormDataJsonView form={form} />
        </div>
    );
}
