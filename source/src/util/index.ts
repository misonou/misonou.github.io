import { useEffect, useState } from "react";
import { setTimeout } from "zeta-dom/util";

export function generateAnchor(v: string) {
    if (/:(.+ event)$/.test(v)) {
        v = RegExp.$1;
    }
    return v.toLowerCase().replace(/\W+/g, '-').replace(/^-|-$/g, '');
}

export function validateJSON(value: string) {
    try {
        JSON.parse(value.trim() || 'null');
        return '';
    } catch {
        return 'Invalid JSON';
    }
}

export function useIdleEffect(callback: () => void, deps: React.DependencyList) {
    useEffect(() => {
        if (!window.requestIdleCallback) {
            return setTimeout(callback);
        }
        const t = requestIdleCallback(callback);
        return () => cancelIdleCallback(t);
    }, deps);
}

export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(() => {
        return setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
    }, [value, delay]);
    return debouncedValue;
}
