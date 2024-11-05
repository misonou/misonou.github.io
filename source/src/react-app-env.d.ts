/// <reference types="react-scripts" />

declare module "*.yml" {
    declare const content: any;
    export default content;
}

declare module "!raw-loader!*" {
    declare const content: string;
    export default content;
}

declare module "!!raw-loader!*" {
    declare const content: string;
    export default content;
}
