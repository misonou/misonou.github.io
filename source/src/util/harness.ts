import { AppInit } from "brew-js/app";
import { app } from "src/init";
import brew1 from "brew-js/disposable";

export const brew = {
    with(...args: any[]) {
        const initList: any[] = [];
        const init = (callback: any) => {
            return brew1.disposableWith(app, ...initList)(callback);
        };
        init.with = (...args: any[]) => {
            initList.push(...args);
            return init;
        };
        return init.with(...args);
    }
} as AppInit<typeof app extends Brew.AppInstance<infer T> ? T : never>;
