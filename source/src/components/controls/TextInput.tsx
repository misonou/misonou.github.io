import { forwardRef, useState } from "react";
import { IconType } from "react-icons/lib";
import dom from "zeta-dom/dom";
import { combineFn } from "zeta-dom/util";
import { classNames, combineValidators, toRefCallback, TextField, TextFieldProps, useFormField, combineRef, domEventRef } from "zeta-dom-react";
import { Mixin, useFocusStateMixin } from "brew-js-react";
import { useTextInputAutofillFix } from "@misonou/react-app-utils";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Icon, validators } from ".";

export interface TextInputProps extends TextFieldProps {
    label?: string;
    icon?: IconType;
    className?: string;
    adornment?: string;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    pattern?: string;
    multiline?: boolean;
    allowChar?: string;
    toggle?: IconType;
    onToggle?: () => void;
}

export const TextInput = forwardRef<HTMLLabelElement, TextInputProps>((props, ref) => {
    props = {
        ...props,
        onValidate: combineValidators(
            props.required && validators.required(),
            props.pattern && validators.pattern(props.pattern),
            props.onValidate
        )
    };
    const focusState = useFocusStateMixin();
    const isPassword = props.type === 'password';
    const [unmask, setUnmask] = useState(false);
    const { value, error, setValue, elementRef, inputProps, path } = useFormField(TextField, props, '');
    const { inputRef, requireFakeInput } = useTextInputAutofillFix();

    ref = combineFn(elementRef, toRefCallback(ref));

    const inputType = isPassword && unmask ? 'text' : props.type || 'text';
    const alwaysShowLabel = !!props.adornment || !!props.placeholder || !!props.icon;
    return (
        <label {...Mixin.use(
            ref,
            focusState,
            classNames('zui-field zui-text-field', props.className, {
                disabled: props.disabled,
                empty: !value,
                'is-multiline': props.multiline,
                'has-icon': !!props.icon,
                'has-error': !!error,
                'has-label': !!props.label
            }))}>
            {alwaysShowLabel && props.label &&
                <div className="zui-text-field-label-above">{props.label}</div>}
            <div className="zui-text-field-outline">
                {props.icon &&
                    <Icon icon={props.icon} className="zui-text-field-icon" />}
                {props.adornment &&
                    <span className="zui-text-field-adornment">{props.adornment}</span>}
                <div className="zui-text-field-input">
                    {!alwaysShowLabel &&
                        <div className="zui-text-field-label">{props.label}</div>}
                    {props.multiline ?
                        <textarea ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                            name={path} value={value} {...inputProps}
                            onChange={onChange} /> :
                        <input ref={combineRef(inputRef, domEventRef('textInput', onTextInput))}
                            name={path} value={value} {...inputProps} type={inputType}
                            onChange={onChange} />}
                    {requireFakeInput &&
                        <input className="zui-text-field-placeholder" placeholder={props.placeholder} disabled />}
                </div>
                {isPassword &&
                    (unmask ?
                        <Icon icon={FaEye} className="zui-text-field-toggle" onClick={() => setUnmask(false)} /> :
                        <Icon icon={FaEyeSlash} className="zui-text-field-toggle" onClick={() => setUnmask(true)} />)}
                {props.toggle &&
                    <Icon icon={props.toggle} className="zui-text-field-toggle" onClick={props.onToggle} />}
            </div>
            {error && props.showErrorMessage !== false &&
                <div className="zui-field-error">{error}</div>}
        </label>
    );

    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        let text = e.target.value;
        if (props.allowChar) {
            text = text.replace(new RegExp('[^' + props.allowChar + ']', 'g'), '');
        }
        if (props.maxLength) {
            text = text.slice(0, props.maxLength);
        }
        setValue(text);
    }

    function onTextInput(e: Zeta.ZetaTextInputEvent, input: HTMLInputElement) {
        if (input.selectionStart !== null && (props.allowChar || props.maxLength)) {
            let text = e.data;
            if (props.allowChar) {
                text = text.replace(new RegExp('[^' + props.allowChar + ']', 'g'), '');
            }
            if (text) {
                dom.insertText(input, text);
            }
            e.handled();
        }
    }
});
