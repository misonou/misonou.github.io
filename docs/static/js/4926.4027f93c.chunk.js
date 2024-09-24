"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[4926],{4926:function(e,n,r){r.r(n);var t=r(2556);function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",a:"a",ul:"ul",li:"li",strong:"strong"},e.components),{Module:r,ImportHint:o,VersionTimeline:s}=n;return o||c("ImportHint",!0),r||c("Module",!0),s||c("VersionTimeline",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"zeta-dom-react"}),"\n",(0,t.jsx)(n.h1,{children:"createAsyncScope"}),"\n",(0,t.jsx)(n.p,{children:"Creates utilities that handles asynchronous operations in descendant components and associated DOM elements."}),"\n",(0,t.jsx)(n.h2,{children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createAsyncScope(element)\n"})}),"\n",(0,t.jsx)(o,{name:"createAsyncScope",module:"zeta-dom-react",require:"createAsyncScope",global:"zeta.react.createAsyncScope"}),"\n",(0,t.jsx)(n.h3,{children:"Parameters"}),"\n",(0,t.jsxs)("dl",{children:[(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"element"})}),(0,t.jsx)(n.p,{children:"A DOM element."})]}),"\n",(0,t.jsx)(n.h3,{children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"The function returns an object containing following properties:"}),"\n",(0,t.jsxs)("dl",{children:[(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"errorHandler"})}),(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"ErrorHandler"})})," object that catches errors emitted from descendant elements."]}),(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"Provider"})}),(0,t.jsxs)(n.p,{children:["A provider component that when rendered, ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"useAsync"})})," in descendant components\r\nwill notify loading state and emit unhandled error to the associated element by default."]})]}),"\n",(0,t.jsx)(n.h2,{children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"createAsyncScope"})," is intended to be used in utility functions that provides\r\ndefault handling for asynchronous operation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function renderWithAsyncScope(element, Component) {\r\n    const { Provider, errorHandler } = createAsyncScope(element);\r\n    const root = ReactDOM.createRoot(element);\r\n    root.render(\r\n        <Provider>\r\n            <Component errorHandler={errorHandler} />\r\n        </Provider>\r\n    );\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Version information"}),"\n",(0,t.jsx)(s,{module:"zeta-dom-react",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"0.5.11"})," Introduced"]}),"\n"]})})]})}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);