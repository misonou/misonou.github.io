import { classNames, combineRef, combineValidators, innerTextOrHTML, ToggleField, ToggleFieldProps, useFormField } from "zeta-dom-react";
import { validators } from ".";
import { forwardRef } from "react";

export interface CheckboxProps extends ToggleFieldProps {
    label?: string;
    children?: React.ReactNode;
    description?: string | { __html: string };
    checked?: boolean;
    variant?: 'outlined' | 'switch';
}

export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
    props = {
        ...props,
        onValidate: combineValidators(
            props.required && validators.required(),
            props.onValidate
        )
    };
    const { value, error, setValue, elementRef } = useFormField(ToggleField, props, false);
    return (
        <div ref={combineRef(ref, elementRef)} className={classNames('zui-field zui-checkbox', { variant: props.variant, disabled: props.disabled, checked: value, 'has-error': !!error })}>
            <label className="zui-checkbox-outline">
                <input type="checkbox" value={props.value || ''} checked={value} disabled={props.disabled}
                    onChange={() => setValue(v => !v)} />
                <div className="zui-checkbox-mark"></div>
                <div className="zui-checkbox-text">
                    {(props.children || props.label) &&
                        <div className="zui-checkbox-label">{props.children || props.label}</div>}
                    {props.description &&
                        <div className="zui-checkbox-description" {...innerTextOrHTML(props.description)}></div>}
                    {error && props.showErrorMessage !== false &&
                        <div className="zui-field-error">{error}</div>}
                </div>
            </label>
        </div>
    );
});
