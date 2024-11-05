import { FormFieldProps, FormObject, useFormField } from "zeta-dom-react";
import { FieldColumn, TextInput } from ".";

export interface PhoneValue {
    countryCode: string;
    phoneNumber: string;
}

export function PhoneField(props: FormFieldProps<PhoneValue>) {
    props = {
        ...props,
        isEmpty(value) {
            return !value.countryCode || !value.phoneNumber;
        }
    };
    const { value, error } = useFormField(props, {});

    return (
        <FormObject value={value}>
            <div className="zui-field app-phone-field">
                <label>{props.label}</label>
                <FieldColumn columns="1fr 3fr">
                    <TextInput name="countryCode" placeholder="Country code" allowChar="0-9" adornment="+" />
                    <TextInput name="phoneNumber" placeholder="Phone number" allowChar="0-9" />
                </FieldColumn>
                {error && props.showErrorMessage !== false &&
                    <div className="zui-field-error">{error}</div>}
            </div>
        </FormObject>
    );
}
