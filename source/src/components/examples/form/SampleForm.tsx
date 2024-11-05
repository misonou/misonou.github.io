import { useEffect } from "react";
import { Form, FormArray, FormObject, useFormContext } from "zeta-dom-react";
import { combineFn } from "zeta-dom/util";
import { CheckboxList, PhoneField, TextInput } from "src/components/controls";

interface Data {
    options: any[],
    children: any[],
    phone: { phoneNumber: string, countryCode: string }
}

export default function Foo() {
    const form = useFormContext<Data>({ options: [], phone: { phoneNumber: '123', countryCode: '123' } }, { preventLeave: true });

    useEffect(() => {
        Object.assign(window, { form });
        return combineFn(
            form.on('dataChange', (e) => {
                console.log('dataChange', e.data);
            }),
        );
    }, []);

    return (
        <div>
            <h1>Foo</h1>
            <Form context={form} onSubmit={async () => await form.validate() && console.log(form.toJSON())}>
                <TextInput name="username" label="Username" />
                <PhoneField name="phone" label="Phone"
                    onChange={() => console.log('Phone changed!')}
                    onValidate={(v, i) => (console.log(i, v), 'error')} />
                <CheckboxList name="options" items={['a', 'b', 'c']} label="Options"
                    onChange={() => console.log('Options changed!')}
                    onValidate={(v, i) => (console.log(i, v), 'error')} />
                <FormObject name="test"
                    onChange={() => console.log('Test changed!')}
                    onValidate={(v, i) => (console.log(i, v), 'error')}>
                    <TextInput name="str" value={JSON.stringify(form.data.options)}
                        onValidate={(v, i) => (console.log(i, v), 'error')} />
                    <TextInput name="str2" />
                </FormObject>
                <FormArray name="children">
                    {children => children.map((v, i) => (
                        <FormObject key={FormObject.keyFor(v)} value={v}>
                            <div>
                                <TextInput name="id" label="ID" />
                                <button type="button" onClick={() => children.splice(i, 1)}>Remove</button>
                            </div>
                        </FormObject>
                    ))}
                </FormArray>
                <button type="button" onClick={() => form.data.children?.push({})}>Add</button>
                <button type="button" onClick={() => form.data.children?.sort((a, b) => (a.id || 0) - (b.id || 0))}>Sort</button>
                <button>Submit</button>
                <button type="reset">Reset</button>
            </Form>
        </div>
    );
}
