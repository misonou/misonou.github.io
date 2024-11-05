import Component from "./Component";
import tsx from "!raw-loader!./Component";
import json from "!!raw-loader!./mock_data.json";
import { DemoWithSource } from "src/components/docs";

export default function Example() {
    return (
        <DemoWithSource component={Component} source={{ tsx, json }} maxHeight="none" />
    );
}
