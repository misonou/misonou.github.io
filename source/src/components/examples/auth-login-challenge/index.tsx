import Component from "./Component";
import init_ts from "!raw-loader!./init";
import tsx from "!raw-loader!./Component";
import { DemoWithSource } from "src/components/docs";

export default function Example() {
    return (
        <DemoWithSource console component={Component} source={{ tsx, 'init.ts': init_ts }} />
    );
}
