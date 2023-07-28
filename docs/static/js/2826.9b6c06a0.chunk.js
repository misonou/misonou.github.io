"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[2826],{2826:function(e,n,t){t.r(n);var r=t(2556);function s(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre"},e.components),{Module:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{name:"zeta-dom-react"}),"\n",(0,r.jsx)(n.h1,{children:"Sorting"}),"\n",(0,r.jsxs)(n.p,{children:["Sorting can be done manually or by calling ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"DataView.sort()"})}),"."]}),"\n",(0,r.jsx)(n.h2,{children:"Sort by property"}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"DataView.sort"})})," will sort items by the property named by ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"DataView.sortBy"})}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function Component() {\r\n    const items = [/* ... */];\r\n    const dataView = useDataView({}, 'date', 'desc');\r\n\r\n    const [pagedItmes] = dataView.getView(items, (items, filters) => {\r\n        // items are sorted as per data view settings\r\n        // i.e. by `date` property in descending order\r\n        return dataView.sort(items);\r\n    });\r\n    /* ... */\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"When there is no applicable filters nor custom sorting, the callback can be omitted:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function Component() {\r\n    const items = [/* ... */];\r\n    const dataView = useDataView({}, 'date', 'desc');\r\n\r\n    // without a custom getView callback, the items are sorted\r\n    // as if `dataView.sort(items)` is called\r\n    const [pagedItmes] = dataView.getView(items);\r\n    /* ... */\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Sort by derived value"}),"\n",(0,r.jsx)(n.p,{children:"Sometimes the sorting cannot be directly implied from a property of the data objects.\r\nIn such case, a callback can be supplied to derive a sortable value associated for each item."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function Component() {\r\n    const items = [/* ... */];\r\n    const dataView = useDataView({}, 'custom');\r\n\r\n    const [pagedItmes] = dataView.getView(items, (items, filters, sortBy) => {\r\n        if (sortBy === 'custom') {\r\n            return dataView.sort(items, v => {\r\n                return getCustomSortOrder(v);\r\n            });\r\n        }\r\n        return dataView.sort(items);\r\n    });\r\n    /* ... */\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Multi-dimensional sorting"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"DataView.sort"})})," method supports multi-dimensional comparison in sorting when a custom callback returns an array."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function Component() {\r\n    const items = [/* ... */];\r\n    const dataView = useDataView({}, 'custom');\r\n\r\n    const [pagedItmes] = dataView.getView(items, (items, filters, sortBy) => {\r\n        return dataView.sort(items, v => {\r\n            return [v.date, v.title];\r\n        });\r\n    });\r\n    /* ... */\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Update sorting"}),"\n",(0,r.jsx)(n.p,{children:"To change the sorting, assign a different sort key or sort direction:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function Component() {\r\n    function onClick() {\r\n        dataView.sortBy = 'title';\r\n        dataView.sortOrder = 'asc';\r\n    }\r\n    /* ... */\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Updating sorting will trigger a ",(0,r.jsx)(n.code,{children:"viewChange"})," event."]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}}}]);