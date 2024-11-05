if (!Object.fromEntries) {
    Object.fromEntries = (iterable: any) => {
        return [...iterable].reduce((obj, [key, val]) => {
            obj[key] = val;
            return obj;
        }, {});
    };
}
if (!Promise.allSettled) {
    Promise.allSettled = (promises: any) => {
        return Promise.all(promises.map((p: any) => {
            return p.then(
                (value: any) => ({ status: 'fulfilled', value }),
                (reason: any) => ({ status: 'rejected', reason }));
        }));
    };
}
if (!String.prototype.matchAll) {
    String.prototype.matchAll = function (rx) {
        if (typeof rx === "string") {
            rx = new RegExp(rx, "g");
        }
        // Clone the regex so we don't update the last index on the regex they pass us
        rx = new RegExp(rx);
        var cap: RegExpMatchArray | null = null;
        var all: RegExpMatchArray[] = [];
        while ((cap = rx.exec(this as string)) !== null) {
            all.push(cap);
        }
        return all.values();
    };
}
export default null;
