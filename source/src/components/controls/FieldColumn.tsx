import { classNames } from "zeta-dom-react";

export interface FieldColumnProps {
    columns: string;
    className?: string;
};

export function FieldColumn(props: React.PropsWithChildren<FieldColumnProps>) {
    return (
        <div className={classNames('zui-field-column', props.className)} style={{ gridTemplateColumns: props.columns }}>
            {props.children}
        </div>
    );
}
