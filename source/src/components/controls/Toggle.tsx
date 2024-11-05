import { forwardRef } from "react";
import { ToggleField, ToggleFieldProps, toRefCallback, useFormField } from "zeta-dom-react";
import { combineFn } from "zeta-dom/util";

export const Toggle = forwardRef<HTMLLabelElement, ToggleFieldProps>((props, ref) => {
    const { value, setValue, elementRef } = useFormField(ToggleField, props, false);
    return (
        <label ref={combineFn(elementRef, toRefCallback(ref))} className="zui-field zui-toggle">
            <input type="checkbox" checked={value} onChange={(e) => setValue(e.target.checked)} />
            <span>{props.label}</span>
        </label>
    );
});
