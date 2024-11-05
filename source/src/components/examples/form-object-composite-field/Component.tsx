import { Form, useFormContext } from "zeta-dom-react";
import { PhoneField, PhoneValue, TextInput } from "src/components/controls";
import { FormDataJsonView } from "src/components/docs";

interface FormData {
    name: string;
    phone: PhoneValue;
}

export default function Component() {
    const form = useFormContext<FormData>();
    return (
        <div className="app-demo-form-col2">
            <Form context={form}>
                <TextInput name="name" label="Name" required />
                <PhoneField name="phone" label="Phone number" required />
            </Form>
            <FormDataJsonView form={form} />
        </div>
    );
}
