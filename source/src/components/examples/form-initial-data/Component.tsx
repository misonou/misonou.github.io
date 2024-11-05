import { Form, FormObject, useFormContext } from "zeta-dom-react";
import { Button, FieldColumn, TextInput } from "src/components/controls";

export default function Component() {
    const form = useFormContext({
        name: 'John Wig'
    });
    return (
        <Form context={form}>
            <TextInput name="name" label="Name" />
            <FormObject name="phone">
                <TextInput name="countryCode" label="Country code" />
                <TextInput name="phoneNumber" label="Phone number" />
            </FormObject>
            <FieldColumn columns="1fr 1fr">
                <Button type="reset" label="Reset" />
                <Button type="button" label="Clear" onClick={() => form.clear()} />
            </FieldColumn>
        </Form>
    );
}
