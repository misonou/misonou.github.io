import { useLayoutEffect, useMemo, useState } from "react";
import { IconType } from "react-icons/lib";
import { ChoiceField, ChoiceFieldProps, classNames, combineValidators, useFormField } from "zeta-dom-react";
import { Mixin, useClassNameToggleMixin, useFlyoutMixin, useScrollableMixin } from "brew-js-react";
import { fuzzyMatch, useMenuKeystrokeMixin } from "@misonou/react-app-utils";
import dom from "zeta-dom/dom";
import { combineFn } from "zeta-dom/util";
import { Button, Icon, TextInput, validators } from ".";
import { startPositioning } from "@misonou/react-css-utils";

export interface DropdownItem<T = string> {
    value: T;
    label: string;
    description?: string;
    icon?: IconType;
}

export interface DropdownProps<T = string> extends ChoiceFieldProps<DropdownItem<T>> {
    className?: string;
    variant?: 'button' | 'textbox';
    unselectedText?: string;
    icon?: IconType;
    allowUnselect?: boolean;
    showLabelInMenu?: boolean;
    showSearchBox?: boolean;
    searchBoxPlaceholder?: string;
    alwaysShowLabel?: boolean;
}

export function Dropdown<T = string>(props: DropdownProps<T>) {
    props = {
        ...props,
        onValidate: combineValidators<T | ''>(
            props.required && validators.required(),
            props.onValidate
        )
    };
    const rootClasses = useClassNameToggleMixin({ active: false, opened: false });
    const flyout = useFlyoutMixin({ initialFocus: '.zui-text-field' });
    const scrollable = useScrollableMixin({ direction: 'y-only' });
    const menuKeystroke = useMenuKeystrokeMixin('.zui-dropdown-flyout-container button', true);
    const [search, setSearch] = useState('');
    const { value, error, setValue, elementRef, items, selectedItem } = useFormField(ChoiceField, props, '');

    const displayItems = useMemo(() => {
        return search ? fuzzyMatch(items.map(v => ({ displayText: v.label, ...v })), search) : items;
    }, [items, search]);

    useLayoutEffect(() => {
        return combineFn(
            flyout.onToggleState(v => rootClasses.set('active', v)),
            flyout.onVisibilityChanged(v => rootClasses.set('opened', v)),
            flyout.onOpen(() => {
                scrollable.scrollToElement('.selected', 'center', 'center');
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

    const label = props.alwaysShowLabel ? props.label || '' : selectedItem?.label || props.label || props.unselectedText || 'Select';
    return (
        <div {...Mixin.use(elementRef, rootClasses, props.className, classNames('zui-field zui-dropdown', { variant: props.variant || 'textbox', disabled: props.disabled, 'has-error': !!error }))}>
            {props.label && selectedItem && !props.alwaysShowLabel &&
                <div className="zui-dropdown-label">{props.label}</div>}
            <Button {...Mixin.use(flyout.toggle)} icon={props.icon} label={label} disabled={props.disabled} />

            <div {...Mixin.use(menuKeystroke, flyout.withEffects('fade-in'), 'zui-dropdown-flyout')}>
                {props.showLabelInMenu && props.label &&
                    <div className="zui-dropdown-flyout-title">
                        <Button icon={props.icon} label={props.label} disabled />
                    </div>}
                {props.showSearchBox &&
                    <TextInput placeholder={props.searchBoxPlaceholder} value={search} onChange={setSearch} />}
                <div {...Mixin.use(scrollable, 'zui-dropdown-flyout-container')}>
                    <div {...Mixin.use(scrollable.target)}>
                        {displayItems.map(v => (
                            <button key={String(v.value)} type="button" className={classNames('zui-button', { selected: v.value === value })} onClick={() => onClick(v.value)}>
                                {v.icon &&
                                    <Icon icon={v.icon} className="zui-button-icon" />}
                                <span>{v.label}</span>
                                {v.description &&
                                    <span className="zui-button-description">{v.description}</span>}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {error && props.showErrorMessage !== false &&
                <div className="zui-field-error">{error}</div>}
        </div>
    );

    function onClick(value: T) {
        setValue(value);
        if (dom.eventSource !== 'keyboard' || dom.pressedKey === 'enter') {
            flyout.close();
        }
    }
}
