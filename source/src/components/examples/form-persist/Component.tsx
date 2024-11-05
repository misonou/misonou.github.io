import { Form, FormObject, useFormContext } from "zeta-dom-react";
import { TextInput } from "src/components/controls";

export default function Component() {
    const form = useFormContext('form_key', {
        name: 'John Wig'
    });
    return (
        <Form context={form}>
            <TextInput name="name" label="Name" />
            <FormObject name="phone">
                <TextInput name="countryCode" label="Country code" />
                <TextInput name="phoneNumber" label="Phone number" />
            </FormObject>
        </Form>
    );
}
