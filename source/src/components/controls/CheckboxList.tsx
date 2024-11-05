import { ChoiceItem, MultiChoiceField, MultiChoiceFieldProps, classNames, useFormField } from "zeta-dom-react";
import { Checkbox } from ".";

export interface CheckboxItem<T = string> extends ChoiceItem<T> {
    description?: string | { __html: string };
}

export interface CheckboxListProps<T = string> extends MultiChoiceFieldProps<CheckboxItem<T>> {
    orientation?: 'horizontal' | 'vertical';
}

export function CheckboxList<T = string>(props: CheckboxListProps<T>) {
    const { items, value, error, toggleValue, elementRef } = useFormField(MultiChoiceField, props);
    return (
        <div ref={elementRef} className={classNames('zui-field zui-checkbox-list', { orientation: props.orientation || 'horizontal' })}>
            <div className="zui-checkbox-list-label">{props.label}</div>
            {items.map((v, i) => (
                <Checkbox key={i} label={v.label} description={v.description} disabled={v.disabled} checked={value.includes(v.value)}
                    onChange={() => toggleValue(v.value)} />
            ))}
            {error && props.showErrorMessage !== false &&
                <div className="zui-field-error">{error}</div>}
        </div>
    );
}
