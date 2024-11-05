import Component from "./Component";
import tsx from "!raw-loader!./Component";
import css from "!raw-loader!./style.css";
import { DemoWithSource } from "src/components/docs";

export default function Example() {
    return (
        <DemoWithSource maxHeight={400} component={Component} source={{ tsx, css }} />
    );
}
