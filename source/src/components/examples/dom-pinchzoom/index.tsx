import Component from "./Component";
import tsx from "!raw-loader!./Component";
import { DemoWithSource } from "src/components/docs";

export default function Example() {
    return (
        <DemoWithSource component={Component} source={{ tsx }} />
    );
}
