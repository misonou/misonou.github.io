import { Form, FormObject, useFormContext } from "zeta-dom-react";
import { TextInput } from "src/components/controls";
import { FormDataJsonView } from "src/components/docs";

interface FormData {
    name: string;
    phone: {
        countryCode: string;
        phoneNumber: string;
    };
}

export default function Component() {
    const form = useFormContext<FormData>();
    return (
        <div className="app-demo-form-col2">
            <Form context={form}>
                <TextInput name="name" label="Name" />
                <FormObject name="phone">
                    <TextInput name="countryCode" label="Country code" />
                    <TextInput name="phoneNumber" label="Phone number" />
                </FormObject>
            </Form>
            <FormDataJsonView form={form} />
        </div>
    );
}
