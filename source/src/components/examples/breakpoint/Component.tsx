import { createBreakpointContext } from "zeta-dom-react";

const { breakpoints, useBreakpoint } = createBreakpointContext({
    isMobile: '(max-width: 700px)',
    isTablet: '(max-width: 900px)'
});

export default function Component() {
    const { isMobile, isTablet } = useBreakpoint();

    return (
        <div>
            isMobile: {String(isMobile)}<br/>
            isTablet: {String(isTablet)}
        </div>
    );
}
