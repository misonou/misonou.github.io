import Component from "./Component";
import tsx from "!raw-loader!./Component";
import css from "!raw-loader!./style.css";
import { DemoWithSource } from "src/components/docs";
import "./style.css";

export default function Example() {
    return (
        <DemoWithSource component={Component} source={{ tsx, css }} />
    );
}
