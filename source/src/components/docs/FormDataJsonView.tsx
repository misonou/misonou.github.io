import { FormContext } from "zeta-dom-react";
import { SyntaxHighlight } from "./SyntaxHighlight";
import { useEffect, useState } from "react";

export function FormDataJsonView({ form }: { form: FormContext }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        const setJson = () => {
            setValue(JSON.stringify(form.data, null, 4));
        };
        setJson();
        return form.on('dataChange', setJson);
    }, [form]);

    return (
        <SyntaxHighlight source={value} language="json" />
    );
}
