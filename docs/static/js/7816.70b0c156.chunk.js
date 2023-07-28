"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[7816],{7816:function(e,t,n){n.r(t);var r=n(2556);function a(e){const t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li"},e.components),{Module:n,Badge:a}=t;return a||s("Badge",!1),a.Optional||s("Badge.Optional",!0),n||s("Module",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{name:"zeta-dom-react"}),"\n",(0,r.jsx)(t.h1,{children:"partial"}),"\n",(0,r.jsx)(t.p,{children:"Returns a callback that set only part of a composite state."}),"\n",(0,r.jsxs)(t.p,{children:["It allows correlated states to use a single ",(0,r.jsx)(t.code,{children:"useState"})," while be able to update individual properties easily."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function Component() {\r\n    const [count, setCount] = useState(0);\r\n    const [current,setCurrent] = useState(0);\r\n    const [state, setState] = useState({ count: 0, current: 0 });\r\n\r\n    function action() {\r\n        // trigger two update\r\n        setCount(1);\r\n        setCurrent(1);\r\n\r\n        // trigger single update\r\n        setState({ count: 1, current: 1});\r\n\r\n        // update one of the properties\r\n        partial(setState)('count', 1);\r\n    }\r\n    /* ... */\r\n}\n"})}),"\n",(0,r.jsx)(t.h2,{children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"partial(setState)\r\npartial(setState, key)\n"})}),"\n",(0,r.jsx)(t.h3,{children:"Parameters"}),"\n",(0,r.jsxs)("dl",{children:[(0,r.jsx)(t.h4,{children:(0,r.jsx)(t.code,{children:"setState"})}),(0,r.jsxs)(t.p,{children:["A state updating callback returned from ",(0,r.jsx)(t.code,{children:"React.useState"}),"."]}),(0,r.jsxs)(t.h4,{children:[(0,r.jsx)(t.code,{children:"key"})," ",(0,r.jsx)(a.Optional,{})]}),(0,r.jsx)(t.p,{children:"Property to update."})]}),"\n",(0,r.jsx)(t.h3,{children:"Return value"}),"\n",(0,r.jsx)(t.p,{children:"A callback that"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["when ",(0,r.jsx)(t.code,{children:"key"})," is given, accept:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"partial(setState, prop)(value);\r\npartial(setState, prop)(oldValue => newValue);\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["when ",(0,r.jsx)(t.code,{children:"key"})," is not given, accept:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"partial(setState)({ prop1: val1, prop2: val2, /* ... */ })\r\npartial(setState)('prop', value);\r\npartial(setState)('prop', (oldValue, oldStates) => newValue);\n"})}),"\n"]}),"\n"]})]})}function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=e.components||{};return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);