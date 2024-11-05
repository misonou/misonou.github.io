import { useRef } from "react";
import { Mixin, useFocusStateMixin } from "brew-js-react";
import { ChoiceItem, MultiChoiceField, MultiChoiceFieldProps, combineValidators, useFormField } from "zeta-dom-react";
import { exclude } from "zeta-dom/util";
import { validators } from ".";
import { Suggestion, SuggestionBaseProps, Suggestions } from "./Suggestions";


export interface MultiPickerProps<T extends Suggestion> extends MultiChoiceFieldProps<ChoiceItem<Suggestion['value']>>, SuggestionBaseProps<T> {
    /**
     * Placeholder to be shown on search box.
     */
    placeholder?: string;
}

export function MultiPicker<T extends Suggestion>(props: MultiPickerProps<T>) {
    props = {
        ...props,
        onValidate: combineValidators<T[]>(
            props.required && validators.required(),
            props.onValidate
        )
    };

    const { elementRef, value, error, toggleValue, } = useFormField(MultiChoiceField, props);
    const { current: labels } = useRef(new Map<T['value'], string>());
    const focusState = useFocusStateMixin();

    return (
        <>
            <div {...Mixin.use(elementRef, focusState, "zui-field zui-multi-picker")}>
                <label className="zui-dropdown-label">{props.label}</label>
                <div className="zui-multi-picker-list">
                    {value.map((v, i) => (
                        <span key={i} className="zui-multi-picker-item">
                            <span>{labels.get(v)}</span>
                            <i onClick={() => toggleValue(v, false)}>&times;</i>
                        </span>
                    ))}
                </div>
                <Suggestions
                    {...exclude(props, ['name', 'label', 'isEmpty', 'onValidate', 'onChange'])}
                    suggestions={props.items}
                    excludes={value}
                    updateInputOnSelect="clear"
                    onSelect={v => {
                        labels.set(v.value, v.displayText);
                        toggleValue(v.value, true);
                    }} />
            </div>
        </>

    );
}
