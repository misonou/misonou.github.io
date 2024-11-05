import { FormDevToolMixin } from "@misonou/react-app-utils";
import { Mixin, useMixin } from "brew-js-react";
import { Form, useFormContext } from "zeta-dom-react";
import { Dropdown, PhoneField, TextInput } from "src/components/controls";
import "@misonou/react-app-utils/formAutofiller";

export default function Component() {
    const form = useFormContext();
    const formDevTool = useMixin(FormDevToolMixin)
        .promptAutofill(() => import("./mock_data.json"));

    return (
        <Form context={form} {...Mixin.use(formDevTool)}>
            <p>Try Ctrl+click in the form region</p>

            <Dropdown name="option" label="Option" allowUnselect items={[
                { value: 'email', label: 'Email address' },
                { value: 'phone', label: 'Phone number' },
            ]} />
            {form.data.option && (
                form.data.option === 'email' ?
                    <TextInput name="email" placeholder="Email address" /> :
                    <PhoneField name="phone" />
            )}
        </Form>
    );
}
