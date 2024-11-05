import { FormContext, ValidationError } from "zeta-dom-react";

export function required<T = string>() {
    return (value: T) => {
        return value ? '' : new ValidationError('required', 'Required');
    };
}

export function pattern(pattern: string) {
    return (value: string) => {
        return !value || new RegExp(`^${pattern}$`).test(value) ? '' : new ValidationError('pattern', 'Incorrect format', { pattern });
    };
}

export function range(min: number, max: number) {
    return (value: number | undefined) => {
        return value === undefined || (value >= min && value <= max) ? '' : new ValidationError('range', 'Value must be between ' + min + ' and ' + max, { min, max });
    };
}

// FormContext.formatError = (err, name, props) => {
//     switch (err.kind) {
//         case 'required':
//             return props.pattern ? t('common.validation.incorrectFormat', props) : t('common.validation.required', props);
//         case 'pattern':
//             return t('common.validation.incorrectFormat', props);
//     }
// };
