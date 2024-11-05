import { useLayoutEffect, useRef } from "react";
import { NumericField, NumericFieldProps, classNames, combineRef, domEventRef, useFormField } from "zeta-dom-react";
import dom from "zeta-dom/dom";
import { getRect } from "zeta-dom/domUtil";
import { pipe } from "zeta-dom/util";
import { position } from "@misonou/react-css-utils";

export interface SliderFieldProps extends NumericFieldProps {
    min: number;
    max: number;
    step?: number;
    showValue?: boolean;
    format?: (value: number) => string;
}

export function SliderField(props: SliderFieldProps) {
    const { value, setValue, elementRef } = useFormField(NumericField, props, props.min);
    const percent = 100 * (value - props.min) / (props.max - props.min);
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const container = ref.current!;
        const element = container.querySelector('.zui-slider-field-current');
        const button = container.querySelector('.zui-slider-field-button')!;
        if (element) {
            position(element, button, 'center auto', container);
        }
    }, [percent])

    return (
        <div ref={combineRef(ref, elementRef, domEventRef({ mousedown }))} className={classNames('zui-field zui-slider-field', { 'show-value': props.showValue })}>
            <div className="zui-slider-field-line">
                <div className="zui-slider-field-line-fill" style={{ width: percent + '%' }}></div>
                <div className="zui-slider-field-button" style={{ left: percent + '%', transform: 'translateX(' + (50 - percent) + '%)' }}>
                    {props.showValue &&
                        <div className="zui-slider-field-current">{(props.format || pipe)(value)}</div>}
                </div>
            </div>
            <div className="zui-slider-field-text">
                <span>{(props.format || pipe)(props.min)}</span>
                <span>{(props.format || pipe)(props.max)}</span>
            </div>
        </div>
    );

    function mousedown(e: Zeta.ZetaPointerEvent, element: HTMLElement) {
        const rect = getRect(element);
        const offset = getRect(element.querySelector('.zui-slider-field-button')!).width;
        const setValueFromX = (x: number) => {
            const percent = Math.min(1, Math.max(0, (x - rect.left - offset / 2) / (rect.right - rect.left - offset)));
            const step = props.step || 1;
            setValue(props.min + Math.ceil((props.max - props.min) * percent / step) * step);
        };
        setValueFromX(e.clientX);
        return dom.beginDrag(setValueFromX);
    }
}
