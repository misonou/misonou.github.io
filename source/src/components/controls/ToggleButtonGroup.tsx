import { forwardRef } from "react";
import { IconType } from "react-icons/lib";
import { combineFn, exclude } from "zeta-dom/util";
import { ChoiceField, ChoiceFieldProps, classNames, combineValidators, toRefCallback, useFormField } from "zeta-dom-react";
import { Button, validators } from ".";

export interface ToggleButtonGroupItem {
    value: string;
    label: string;
    icon?: IconType;
}

export interface ToggleButtonGroupProps extends Omit<ChoiceFieldProps<ToggleButtonGroupItem>, 'onChange'>, Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
    items: (ToggleButtonGroupItem | string)[];
    orientation?: 'horizontal' | 'vertical';
    allowUnselect?: boolean;
    onChange?: (value: string, index: number) => void;
}

export const ToggleButtonGroup = forwardRef<HTMLDivElement, ToggleButtonGroupProps>((props, ref) => {
    const { value, error, setValue, elementRef, items, selectedIndex } = useFormField(ChoiceField, {
        ...props,
        onChange: (v: string): any => {
            return props.onChange?.(v, selectedIndex);
        },
        onValidate: combineValidators(
            props.required && validators.required(),
            props.onValidate
        )
    });

    const divProps = exclude(props, ['label', 'items', 'onChange', 'required', 'allowUnselect', 'showErrorMessage', 'clearWhenUnmount', 'orientation', 'name']);
    return (
        <div {...divProps} ref={combineFn(elementRef, toRefCallback(ref))} className={classNames(props.className, 'zui-field', { 'has-error': !!error })}>
            <div className={classNames('zui-button-group', { orientation: props.orientation || 'horizontal' })}>
                {items.map(v => (
                    <Button key={v.value} {...v} className={v.value === value ? 'active' : ''} onClick={() => setValue(props.allowUnselect && value === v.value ? '' : v.value)} disabled={props.disabled} />
                ))}
            </div>
            {error && props.showErrorMessage !== false &&
                <div className="zui-field-error">{error}</div>}
        </div>
    );
});
