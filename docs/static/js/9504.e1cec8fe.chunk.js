"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[9504],{9504:function(e,n,t){t.r(n);var s=t(2556);function r(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre"},e.components),{Module:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{name:"zeta-dom-react"}),"\n",(0,s.jsx)(n.h1,{children:"Multiple data views"}),"\n",(0,s.jsx)(n.p,{children:"There are scenarios that multiple data sources are displayed in a single page."}),"\n",(0,s.jsxs)(n.p,{children:["In such cases, assign a unique ID for each data source as the first argument\r\nwhen using ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"useDataView"})}),", such as the ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"DataView"})})," object knows when to\r\npersist and restore the current view."]}),"\n",(0,s.jsx)(n.h2,{children:"Multiple views"}),"\n",(0,s.jsx)(n.p,{children:"Same data source can be splitted into different views:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function Component() {\r\n    const items = [/* ... */];\r\n\r\n    const dv1 = useDataView('dv1', {});\r\n    const [pagedItems1] = dv1.getView(items);\r\n\r\n    const dv2 = useDataView('dv2', {});\r\n    const [pagedItems2] = dv2.getView(items);\r\n\r\n    /* ... */\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Switching data in a single view"}),"\n",(0,s.jsx)(n.p,{children:"By associating a unique ID to each data source, the switching of state associated to each data\r\nsource are automatically handled."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function Component() {\r\n    const items1 = [/* ... */];\r\n    const items2 = [/* ... */];\r\n    const [tab, setTab] = useState(0);\r\n\r\n    const dv = useDataView(`dv${tab}`, {});\r\n    const items = tab === 0 ? items1 : items2;\r\n    const [pagedItems] = dv.getView(items);\r\n\r\n    /* ... */\r\n}\n"})})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(r,e)})):r(e)}}}]);