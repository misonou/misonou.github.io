import { useEffect, useRef, useState } from "react";
import { FormFieldProps, combineRef, combineValidators, useDispose, useFormField, useRefInitCallback } from "zeta-dom-react";
import { runCSSTransition } from "zeta-dom/cssUtil";
import { makeArray, noop, setTimeout } from "zeta-dom/util";
import dom, { focused } from "zeta-dom/dom";
import { validators } from ".";

export interface OTPFieldProps extends FormFieldProps<string> {
    length: number;
    masked?: boolean;
    onValidateSuccess?: () => void;
}

export function OTPField(props: OTPFieldProps) {
    props = {
        ...props,
        onValidate: combineValidators(
            () => void setError(''),
            validators.required(),
            props.onValidate,
            () => void props.onValidateSuccess?.()
        )
    };
    const { value, error, setValue, setError, elementRef } = useFormField(props, '');
    const [displayValue, setDisplayValue] = useState(value);
    const [maskLength, setMaskLength] = useState(0);
    const onDispose = useDispose();
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (error && value) {
            setValue('');
            runCSSTransition(divRef.current!, 'error-anim', true).then(() => {
                setDisplayValue('');
            });
        }
    }, [value, error]);

    useEffect(() => {
        if (displayValue.length === props.length) {
            setValue(displayValue);
        }
        if (focused(divRef.current!)) {
            setFocus();
        }
    }, [displayValue, props.length]);

    return (
        <div ref={elementRef} className="zui-field zui-otp-field">
            <div className="zui-otp-field-input" ref={combineRef(divRef, useRefInitCallback(initEvent))}>
                {'1'.repeat(props.length).split('').map((_, i) => (
                    <input key={i} type={props.masked && i < maskLength ? 'password' : 'text'} value={displayValue[i] || ''} className="zui-text-field"
                        autoComplete="one-time-code" autoCorrect="off" autoCapitalize="off" inputMode="numeric" onChange={noop} />
                ))}
            </div>
        </div>
    );

    function setFocus() {
        const inputs = makeArray(divRef.current!.querySelectorAll('input'));
        const cur = inputs.find(v => !v.value) || inputs.slice(-1)[0];
        dom.focus(cur);
        cur.setSelectionRange(1, 1);
    }

    function initEvent(element: HTMLElement) {
        dom.on(element, {
            focusin: setFocus,
            focuschange: setFocus,
            textInput(e) {
                setDisplayValue(value => {
                    const newValue = (value + e.data.replace(/\D/g, '')).slice(0, props.length);
                    // mask previous entered number immediately
                    // and show the latest entered number for 1 second
                    setMaskLength(value.length);
                    onDispose.push(setTimeout(() => {
                        setMaskLength(v => Math.max(v, newValue.length));
                    }, 1000));
                    return newValue;
                });
                e.handled();
            },
            backspace(e) {
                setDisplayValue(value => {
                    return value.slice(0, -1);
                });
                e.handled();
            }
        });
    }
}
