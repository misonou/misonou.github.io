import { ChoiceField, ChoiceFieldProps, classNames, combineValidators, useFormField } from "zeta-dom-react";
import { validators } from ".";

export interface RadioListItem<T = string> {
    value: T;
    label: string;
}

export interface RadioListProps<T = string> extends ChoiceFieldProps<RadioListItem<T>> {
    className?: string;
    required?: boolean;
    variant?: 'outlined';
    orientation?: 'horizontal' | 'vertical';
    showErrorMessage?: boolean;
}

export function RadioList<T = string>(props: RadioListProps<T>) {
    props = {
        ...props,
        onValidate: combineValidators<T | ''>(
            props.required && validators.required(),
            props.onValidate
        )
    };
    const { value, error, setValue, elementRef, items } = useFormField(ChoiceField, props);

    return (
        <div ref={elementRef} className={classNames('zui-field zui-radio-list', props.className, { 'has-error': !!error, variant: props.variant, orientation: props.orientation })}>
            {items.map((v, i) => (
                <label key={i} className={classNames({ checked: v.value === value })}>
                    <input name={props.name} type="radio" checked={v.value === value} onChange={() => setValue(v.value)} />
                    <span>{v.label}</span>
                </label>
            ))}
        </div>
    );
}
