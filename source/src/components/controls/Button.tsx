import { forwardRef } from "react";
import { IconType } from "react-icons/lib";
import { classNames } from "zeta-dom-react";
import { Mixin, useLoadingStateMixin } from "brew-js-react";
import { handleUserAction } from "@misonou/react-app-utils";
import { Icon } from ".";

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    label?: string;
    icon?: IconType;
    variant?: 'primary' | 'outlined' | 'link';
    disabled?: boolean;
    onClick?: (e: React.UIEvent) => any;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { icon, label, variant, disabled, ..._props } = props;
    const mixin = useLoadingStateMixin();

    _props.type = _props.type || 'button';
    return (
        <button {..._props} {...Mixin.use(ref, mixin, classNames('zui-button', props.className, { variant: variant || 'outlined' }))}
            onClick={handleUserAction(props.onClick)} disabled={disabled}>
            {icon ?
                <><Icon icon={icon} className="zui-button-icon" /><span>{label}</span></> :
                <span>{label}</span>}
        </button>
    );
});
