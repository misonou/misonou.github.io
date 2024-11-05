import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import waterpipe from "waterpipe";
import $ from "jquery";
import { closeFlyout, openFlyout } from "brew-js/domAction";
import { useLanguage } from "brew-js-react";
import { classNames, combineRef, combineValidators, DateField, DateFieldProps, partial, useFormField, useMemoizedFunction, useRefInitCallback } from "zeta-dom-react";
import dom from "zeta-dom/dom";
import { matchSelector } from "zeta-dom/domUtil";
import { exclude } from "zeta-dom/util";
import { position } from "@misonou/react-css-utils";
import { FaArrowLeft, FaArrowRight, FaRegCalendarAlt } from "react-icons/fa";
import { Icon, TextInput, validators } from ".";

const flyout: HTMLElement = $('<div class="zui-date-picker">')[0];
const root = ReactDOM.createRoot(flyout);

export interface DatePickerProps extends DateFieldProps {
    placeholder?: string;
    alwaysShowLabel?: boolean;
}

function range<V>(from: number, to: number, callback: (v: number, i: number) => V) {
    return (waterpipe.eval('$0 .. $1', [from, to]) as number[]).map(callback);
}

function DatePickerCalendar(props: { date: string, min: string, max: string, onSelectedDate: (value: string) => void }) {
    interface DatePickerState {
        selected: Date | null;
        mode: 'd' | 'm' | 'y';
        month: Date;
        year: number;
    }

    interface DateItem {
        day: number;
        monthDelta: 1 | 0 | -1;
        className: string;
    }

    const language = useLanguage();
    const [state, setState] = useState<DatePickerState>({ mode: 'd', year: 0, month: new Date(), selected: null });
    const { mode, month } = state;
    const curY = month.getFullYear();
    const curM = month.getMonth();
    const min = DateField.toDateObject(props.min);
    const max = DateField.toDateObject(props.max);

    const getPartialUpdate = useMemoizedFunction((delta: number) => {
        if ((delta > 0 && hasNext) || (delta < 0 && hasPrev)) {
            switch (mode) {
                case 'd':
                    return { month: new Date(curY, curM + delta) };
                case 'y':
                    return { year: state.year - (delta * 16) };
            }
        }
        return {};
    });

    const days = useMemo(() => {
        const today = new Date();
        const firstDay = new Date(curY, curM);
        const dmax = max ? Math.floor((+max - +firstDay) / 86400000) + 1 : 60;
        const dmin = min ? Math.floor((+min - +firstDay) / 86400000) + 1 : -60;
        const d1 = curY === state.selected?.getFullYear() && curM === state.selected?.getMonth() && state.selected.getDate();
        const d2 = curY === today.getFullYear() && curM === today.getMonth() && today.getDate();

        const daysInMonth = new Date(curY, curM + 1, 0).getDate();
        const firstDayInWeek = firstDay.getDay();
        const daysInLastWeek = (firstDayInWeek + daysInMonth) % 7;

        const arr: DateItem[] = [];
        if (firstDayInWeek) {
            const daysInLastMonth = new Date(curY, curM, 0).getDate();
            arr.push(...range(1 - firstDayInWeek, 0, v => {
                return {
                    day: daysInLastMonth + v,
                    monthDelta: -1,
                    className: 'prev' + (v > dmax || v < dmin ? ' disabled' : '')
                } as DateItem;
            }))
        }
        arr.push(...range(1, daysInMonth, v => {
            return {
                day: v,
                monthDelta: 0,
                className: 'cur' + (d1 === v ? ' selected' : '') + (d2 === v ? ' today' : '') + (v > dmax || v < dmin ? ' disabled' : '')
            } as DateItem;
        }));
        if (daysInLastWeek) {
            arr.push(...range(1, 7 - daysInLastWeek, v => {
                return {
                    day: v,
                    monthDelta: 1,
                    className: 'next' + (daysInMonth + v > dmax || daysInMonth + v < dmin ? ' disabled' : '')
                } as DateItem;
            }));
        }
        return arr;
    }, [curY, curM, props.min, props.max, state.selected]);

    useEffect(() => {
        let selected = DateField.toDateObject(props.date);
        let date = selected || new Date();
        setState({
            selected,
            mode: 'd',
            month: new Date(date.getFullYear(), date.getMonth(), 1),
            year: date.getFullYear()
        });
    }, [props]);

    var hasNext = true;
    var hasPrev = true;
    if (mode === 'd') {
        hasPrev = !min || min < month;
        hasNext = !max || max > new Date(curY, curM + 1, 0);
    } else if (mode === 'y') {
        hasPrev = !max || max.getFullYear() > state.year;
        hasNext = !min || min.getFullYear() < state.year - 15;
    }
    return (
        <div ref={useRefInitCallback(initEvent)} className={classNames('zui-date-picker-wrapper', { mode })}>
            <div className="zui-date-picker-header">
                {mode !== 'm' &&
                    <Icon icon={FaArrowLeft} onClick={() => hasPrev && partial(setState)(getPartialUpdate(-1))} />}
                {mode === 'd' &&
                    <span onClick={() => partial(setState)('mode', 'm')}>{new Intl.DateTimeFormat(language, { month: 'long' }).format(month)}</span>}
                {mode !== 'y' &&
                    <span onClick={() => partial(setState)('mode', 'y')}>{new Intl.DateTimeFormat(language, { year: 'numeric' }).format(month)}</span>}
                {mode !== 'm' &&
                    <Icon icon={FaArrowRight} onClick={() => hasNext && partial(setState)(getPartialUpdate(1))} />}
            </div>
            {mode === 'd' ?
                <div className="zui-date-picker-body body-d">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((v, i) => (
                        <span key={i} className="weekday">{v}</span>
                    ))}
                    {days.map((v, i) => (
                        <span key={i} className={v.className} onClick={() => selectDate(v.day, v.monthDelta)}>{v.day}</span>
                    ))}
                </div> :
                mode === 'm' ?
                    <div className="zui-date-picker-body body-m">
                        {range(0, 11, (v, i) => {
                            const disabled =
                                (min && min.getFullYear() === curY && min.getMonth() > v) ||
                                (max && max.getFullYear() === curY && max.getMonth() < v) || false;
                            return (
                                <span key={i} className={classNames({ selected: v === curM, disabled })} onClick={() => partial(setState)({ mode: 'd', month: new Date(curY, v) })}>
                                    {new Intl.DateTimeFormat(language, { month: 'short' }).format(new Date(0, v))}
                                </span>
                            );
                        })}
                    </div> :
                    <div className="zui-date-picker-body body-y">
                        {range(0, -15, (v, i) => {
                            v = v + state.year;
                            return (
                                <span key={i} className={classNames({ selected: v === curY, disabled: (min && min.getFullYear() > v) || (max && max.getFullYear() < v) || false })} onClick={() => partial(setState)({ mode: 'm', month: new Date(v, curM) })}>{v}</span>
                            );
                        })}
                    </div>}
        </div>
    );

    function selectDate(day: number, monthDelta: 1 | 0 | -1) {
        let date = new Date(curY, curM + monthDelta, day);
        partial(setState)({
            selected: date,
            ...getPartialUpdate(monthDelta)
        });
        props.onSelectedDate(DateField.toDateString(date));
    }

    function initEvent(element: HTMLElement) {
        dom.on(element, 'mousewheel', e => {
            partial(setState)(getPartialUpdate(e.data));
            e.preventDefault();
        });
    }
}

export const DatePicker = forwardRef<HTMLLabelElement, DatePickerProps>((props, ref) => {
    props = {
        ...props,
        onValidate: combineValidators(
            props.required && validators.required(),
            props.onValidate
        )
    };
    const language = useLanguage();
    const { displayText, value, error, min, max, setValue, elementRef } = useFormField(DateField, props, '');
    const [displayValue, setDisplayValue] = useState('');
    const focused = useRef(false);

    const updateDisplayValue = useMemoizedFunction(() => {
        setDisplayValue(displayText);
    });
    const updatePicker = useMemoizedFunction(() => {
        root.render(<DatePickerCalendar date={value} min={min} max={max} onSelectedDate={setValue} />);
    });

    useEffect(() => {
        updateDisplayValue();
    }, [language, updateDisplayValue]);

    useEffect(() => {
        if (focused.current) {
            updatePicker();
            if (matchSelector(dom.activeElement, 'input')) {
                // do not update input value when it is focused
                return;
            }
        }
        updateDisplayValue();
    }, [value, min, max, updateDisplayValue, updatePicker]);

    return (
        <TextInput ref={combineRef(ref, elementRef, useRefInitCallback(initEvent))} {...exclude(props, ['name', 'min', 'max'])}
            toggle={FaRegCalendarAlt} error={error} value={displayValue} onChange={onChange} readOnly={true} />
    );

    function onChange(displayValue: string) {
        setValue(displayValue);
        setDisplayValue(displayValue);
    }

    function initEvent(element: HTMLElement) {
        dom.on(element, 'focusin', e => {
            focused.current = true;
            element.querySelector('.zui-text-field-outline')!.appendChild(flyout);
            updatePicker();
            setTimeout(() => {
                if (focused.current) {
                    const input = element.querySelector('input')!;
                    position(flyout, input, 'left bottom', { offset: 10, scrollToFit: true });
                    openFlyout(flyout, input, { closeOnBlur: false });
                }
            });
        });
        dom.on(element, 'focusout', () => {
            focused.current = false;
            closeFlyout(flyout);
            updateDisplayValue();
        });
    }
});
