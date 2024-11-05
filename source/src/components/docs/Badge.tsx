import { memo } from "react";

export const Badge = {
    Optional: memo(() => {
        return <code className="app-docs-member-badge">Optional</code>;
    }),
    Required: memo(() => {
        return <code className="app-docs-member-badge">Required</code>;
    }),
    ReadOnly: memo(() => {
        return <code className="app-docs-member-badge">Read-only</code>;
    }),
    Version: memo(() => {
        return <a href="#s-version-information" title="See version information for compabtility"><i className="icon badge-version"></i></a>;
    }),
    Deprecated: memo(() => {
        return <i className="icon depre" title="Deprecated"></i>;
    }),
    Experimental: memo(() => {
        return <i className="icon expr" title="Experimental"></i>;
    }),
    TS: memo(() => {
        return <i className="icon ts" title="TypeScript"></i>;
    })
};
