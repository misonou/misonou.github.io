import { useLayoutEffect, useMemo, useState } from "react";
import { IconType } from "react-icons/lib";
import { ChoiceItem, MultiChoiceField, MultiChoiceFieldProps, classNames, combineValidators, useFormField } from "zeta-dom-react";
import { Mixin, useClassNameToggleMixin, useFlyoutMixin, useScrollableMixin, useUnmanagedClassNameMixin } from "brew-js-react";
import { startPositioning } from "@misonou/react-css-utils";
import { fuzzyMatch, useMenuKeystrokeMixin } from "@misonou/react-app-utils";
import { combineFn } from "zeta-dom/util";
import { Button, Checkbox, TextInput, validators } from ".";
import { useIdleSignal } from "src/util";

export interface MultiDropdownProps<T = string> extends MultiChoiceFieldProps<ChoiceItem<T>> {
    variant?: 'button' | 'textbox';
    unselectedText?: string;
    icon?: IconType;
    showSelectAll?: boolean;
    showSearchBox?: boolean;
    searchBoxPlaceholder?: string;
    alwaysShowLabel?: boolean;
}

export function MultiDropdown<T = string>(props: MultiDropdownProps<T>) {
    props = {
        ...props,
        onValidate: combineValidators<T[]>(
            props.required && validators.required(),
            props.onValidate
        )
    };
    const rootClasses = useClassNameToggleMixin({ active: false, opened: false });
    const classes = useUnmanagedClassNameMixin();
    const flyout = useFlyoutMixin({ initialFocus: '.zui-text-field' });
    const scrollable = useScrollableMixin({ direction: 'y-only' });
    const menuKeystroke = useMenuKeystrokeMixin('.zui-dropdown-flyout-container .zui-checkbox');
    const [search, setSearch] = useState('');
    const [idled, setIdled] = useIdleSignal();
    const { value, error, setValue, toggleValue, elementRef, items } = useFormField(MultiChoiceField, props);

    const displayItems = useMemo(() => {
        return search ? fuzzyMatch(items.map(v => ({ displayText: v.label, ...v })), search) : items;
    }, [items, search]);

    useLayoutEffect(() => {
        return combineFn(
            flyout.onToggleState(v => rootClasses.set('active', v)),
            flyout.onVisibilityChanged(v => rootClasses.set('opened', v)),
            flyout.onOpen(() => {
                setIdled();
                setTimeout(() => {
                    scrollable.scrollToElement('.checked', 'center', 'center');
                });
            }),
            flyout.whenVisible(() => {
                return startPositioning(flyout.element!, elementRef.current!, 'left inset', {
                    strategy: 'flip',
                    basisHeight: 300,
                    scrollToFit: true
                });
            })
        );
    }, []);

    const label = props.alwaysShowLabel ? props.label || '' : getLabel() || props.label || props.unselectedText || 'Select';
    const selectedAll = value.length === items.length;
    return (
        <div {...Mixin.use(elementRef, rootClasses, classNames('zui-field zui-dropdown', { variant: props.variant || 'textbox', disabled: props.disabled, 'has-error': !!error }))}>
            {props.label && value.length > 0 && !props.alwaysShowLabel &&
                <div className="zui-dropdown-label">{props.label}</div>}
            <Button {...Mixin.use(flyout.toggle)} icon={props.icon} label={label} disabled={props.disabled} />

            <div {...Mixin.use(menuKeystroke, flyout.withEffects('fade-in'), classNames('zui-dropdown-flyout'))}>
                {idled && <>
                    <div className="zui-dropdown-flyout-title">
                        <Button icon={props.icon} label={props.label || ''} disabled />
                        {props.showSelectAll &&
                            <Checkbox checked={selectedAll} onChange={() => setValue(selectedAll ? [] : items.map(v => v.value))} />}
                    </div>
                    {props.showSearchBox &&
                        <TextInput placeholder={props.searchBoxPlaceholder} value={search} onChange={setSearch} />}
                    <div {...Mixin.use(scrollable, classNames('zui-dropdown-flyout-container'))}>
                        <div {...Mixin.use(scrollable.target, classNames('zui-checkbox-list orientation-vertical'))}>
                            {displayItems.map(v => (
                                <Checkbox key={String(v.value)} label={v.label} checked={value.includes(v.value)} {...Mixin.use(classes.memorize('active'))}
                                    onChange={() => toggleValue(v.value)} />
                            ))}
                        </div>
                    </div>
                </>}
            </div>
            {error && props.showErrorMessage !== false &&
                <div className="zui-field-error">{error}</div>}
        </div>
    );

    function getLabel() {
        const selectedItems = value.slice(0, 5);
        return items.filter(v => selectedItems.includes(v.value)).map(v => v.label).join(', ') + (value.length > 5 ? ', ...' : '');
    }
}
