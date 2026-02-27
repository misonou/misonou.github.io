import Component from "./Component";
import { DemoWithSource } from "src/components/docs";
import "./style.css";

export default function Example() {
    return (
        <DemoWithSource component={Component} console />
    );
}
