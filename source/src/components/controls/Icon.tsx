import { IconType } from "react-icons/lib";
import { classNames } from "zeta-dom-react";

export interface IconProps extends React.ComponentProps<'div'> {
    icon: IconType;
}

export function Icon({ icon: Icon, ...props }: IconProps) {
    return (
        <span {...props} className={classNames('zui-icon', props.className)}>
            <Icon />
        </span>
    );
}
