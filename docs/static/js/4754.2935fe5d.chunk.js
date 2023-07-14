"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[4754],{4754:function(e,n,r){r.r(n);var t=r(2556);function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"zeta-dom-react"}),"\n",(0,t.jsx)(n.h1,{children:"useObservableProperty"}),"\n",(0,t.jsx)(n.p,{children:"Listens and gets the value of a property of an object. The component is refreshed when the property has been updated."}),"\n",(0,t.jsx)(n.h2,{children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"useObservableProperty(obj, property)\n"})}),"\n",(0,t.jsx)(n.h3,{children:"Parameters"}),"\n",(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"obj"})}),"\n",(0,t.jsx)(n.p,{children:"An object which its property will be listened."}),"\n",(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"property"})}),"\n",(0,t.jsx)(n.p,{children:"Property name."}),"\n",(0,t.jsx)(n.h3,{children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Current value of the property."}),"\n",(0,t.jsx)(n.h2,{children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const obj = { value: 1 };\r\n\r\nfunction Component() {\r\n    const value = useObservableProperty(obj, 'value');\r\n    return (<div>Value is {value}</div>);\r\n}\r\n\r\n// Component will print \"Value is 2\" when somewhere call update\r\nfunction update() {\r\n    obj.value = 2;\r\n}\n"})})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);