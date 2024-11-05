import Component from "./Component";
import tsx from "!raw-loader!./Component";
import PhoneField from "!raw-loader!src/components/controls/PhoneField";
import { DemoWithSource } from "src/components/docs";

export default function Example() {
    return (
        <DemoWithSource component={Component} source={{ tsx, "PhoneField.tsx": PhoneField }} />
    );
}
