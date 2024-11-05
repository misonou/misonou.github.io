import { Form, FormArray, FormObject, useFormContext, useRefInitCallback } from "zeta-dom-react";
import { Button, TextInput } from "src/components/controls";
import { FormDataJsonView } from "src/components/docs";
import { FaArrowsAlt, FaPlus, FaTrash } from "react-icons/fa";
import { initSortable } from "@misonou/react-css-utils";
import { useRef } from "react";

interface FormData {
    items: { title: string }[];
}

export default function Component() {
    const counter = useRef(0);
    const form = useFormContext<FormData>();

    return (
        <div className="app-demo-form-col2">
            <Form context={form}>
                <div ref={useRefInitCallback(initCardContainer)} className="app-demo-form-field-list">
                    <FormArray name="items">
                        {items => items.map(v => (
                            // important to provide key for each mapped element
                            <FormObject key={FormObject.keyFor(v)} value={v}>
                                <div className="app-demo-form-card">
                                    <FaArrowsAlt className="app-demo-form-card-sort" />
                                    <TextInput name="title" label="Title" />
                                    <Button label="Delete" icon={FaTrash}
                                        onClick={() => items.splice(items.indexOf(v), 1)} />
                                </div>
                            </FormObject>
                        ))}
                    </FormArray>
                </div>
                <Button label="Add" icon={FaPlus} variant="primary"
                    onClick={() => form.data.items?.push({ title: `Item ${++counter.current}` })} />
            </Form>
            <FormDataJsonView form={form} />
        </div>
    );

    function initCardContainer(element: HTMLElement) {
        initSortable(element, {
            itemSelector: '.app-demo-form-card',
            handleSelector: '.app-demo-form-card-sort',
            onOrderChanged(oldIndex, newIndex) {
                const arr = form.data.items!;
                arr.splice(newIndex, 0, ...arr.splice(oldIndex, 1));
            }
        });
    }
}
