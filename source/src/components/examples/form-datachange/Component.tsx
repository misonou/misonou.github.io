import { Form, useFormContext } from "zeta-dom-react";
import { TextInput } from "src/components/controls";

export default function Component() {
    const form = useFormContext();
    return (
        <Form context={form}>
            <p>Value is {form.data.item || ''}</p>
            <TextInput name="item" />
        </Form>
    );
}
