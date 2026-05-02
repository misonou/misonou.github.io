import { useState, useEffect } from "react";
import { setInterval } from "zeta-dom/util";

export function useCountdown(initialSeconds: number) {
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        if (seconds > 0) {
            return setInterval(() => {
                setSeconds(prev => prev && --prev);
            }, 1000);
        }
    }, [seconds > 0]);
    return seconds;
}
