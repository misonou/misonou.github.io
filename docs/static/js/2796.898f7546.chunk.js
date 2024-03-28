"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[2796],{2796:function(e,r,n){n.r(r);var o=n(2556);function t(e){const r=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",blockquote:"blockquote"},e.components),{Module:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{name:"brew-js-react"}),"\n",(0,o.jsx)(r.h1,{children:"Navigating to views"}),"\n",(0,o.jsxs)(r.p,{children:["There are two helper functions for navigating to views programatically: ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"navigateTo"})})," and ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"redirectTo"})}),"."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:'import { redirectTo, navigateTo } from "brew-js-react";\r\nimport { Home, ProductInfo } from "./views";\r\n\r\nfunction Component() {\r\n    return (\r\n        <div>\r\n            <button onClick={() => navigateTo(Home)}>Go to home</button>\r\n            <button onClick={() => redirectTo(ProductInfo, { id: 5 })}>Replace to product info</button>\r\n        </div>\r\n    );\r\n}\n'})}),"\n",(0,o.jsxs)(r.p,{children:["They accepts the same parameters as ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"linkTo"})}),", and are equivalent to calling ",(0,o.jsx)(r.a,{href:":app.navigate",children:(0,o.jsx)(r.code,{children:"app.navigate(linkTo(...), replace)"})}),"."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Note that the view component passed to ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"navigateTo"})})," and ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"redirectTo"})})," should be the one returned by ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"registerView"})}),"."]}),"\n"]})]})}r.default=function(e={}){const{wrapper:r}=e.components||{};return r?(0,o.jsx)(r,Object.assign({},e,{children:(0,o.jsx)(t,e)})):t(e)}}}]);