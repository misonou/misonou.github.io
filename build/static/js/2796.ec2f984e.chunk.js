"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[2796],{2796:function(e,n,r){r.r(n);var o=r(2556);function t(e){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",blockquote:"blockquote"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{name:"brew-js-react"}),"\n",(0,o.jsx)(n.h1,{children:"Navigate programmatically"}),"\n",(0,o.jsxs)(n.p,{children:["There are two helper functions for navigating to views programatically: ",(0,o.jsx)(n.code,{children:"navigateTo"})," and ",(0,o.jsx)(n.code,{children:"redirectTo"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { redirectTo, navigateTo } from "brew-js-react";\r\nimport { Home, ProductInfo } from "./views";\r\n\r\nfunction Component() {\r\n    return (\r\n        <div>\r\n            <button onClick={() => navigateTo(Home)}>Go to home</button>\r\n            <button onClick={() => redirectTo(ProductInfo, { id: 5 })}>Replace to product info</button>\r\n        </div>\r\n    );\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["They accepts the same parameters as ",(0,o.jsx)(n.code,{children:"linkTo"}),", and are equivalent to calling ",(0,o.jsx)(n.code,{children:"app.navigate(linkTo(...), replace)"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Note that the view component passed to ",(0,o.jsx)(n.code,{children:"navigateTo"})," and ",(0,o.jsx)(n.code,{children:"redirectTo"})," should be the one returned by ",(0,o.jsx)(n.code,{children:"registerView"}),"."]}),"\n"]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(t,e)})):t(e)}}}]);
//# sourceMappingURL=2796.ec2f984e.chunk.js.map