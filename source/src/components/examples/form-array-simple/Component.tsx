import { Form, FormArray, useFormContext } from "zeta-dom-react";
import { Button, FieldColumn, TextInput } from "src/components/controls";
import { FormDataJsonView } from "src/components/docs";
import { FaPlus, FaTrash } from "react-icons/fa";
import React from "react";

export default function Component() {
    const form = useFormContext({ items: [''] });

    return (
        <div className="app-demo-form-col2">
            <Form context={form}>
                <FieldColumn columns="auto min-content" className="app-demo-form-field-list">
                    <FormArray name="items">
                        {items => items.map((v, i) => (
                            <React.Fragment key={i}>
                                <TextInput name={String(i)} placeholder="Enter text" />
                                <Button title="Delete" icon={FaTrash} variant="link"
                                    onClick={() => items.splice(i, 1)} />
                            </React.Fragment>
                        ))}
                    </FormArray>
                </FieldColumn>
                <Button label="Add" icon={FaPlus} variant="primary"
                    onClick={() => form.data.items?.push('')} />
            </Form>
            <FormDataJsonView form={form} />
        </div>
    );
}
