import Component from "./Component";
import tsx from "!raw-loader!./Component";
import css from "!raw-loader!src/styles/dialog.css";
import { DemoWithSource } from "src/components/docs";

export default function Example() {
    return (
        <DemoWithSource component={Component} source={{ tsx, css }} />
    );
}