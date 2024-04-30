"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[9958],{9958:function(e,n,r){r.r(n);var a=r(2556);function t(e){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",a:"a"},e.components),{Module:r,WaterpipeExample:t}=n;return r||i("Module",!0),t||i("WaterpipeExample",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{name:"waterpipe"}),"\n",(0,a.jsx)(n.h1,{children:"Inline variables"}),"\n",(0,a.jsxs)(n.p,{children:["Variables can also be declared within the template using ",(0,a.jsx)(n.code,{children:"as"})," or ",(0,a.jsx)(n.code,{children:"let"})," pipe function.\r\nThey are also global in the sense that variables declared in one template\r\nare also visible for the template included."]}),"\n",(0,a.jsxs)(n.p,{children:["For example the template ",(0,a.jsx)(n.code,{children:"innerTemplate"})," included can read the variable ",(0,a.jsx)(n.code,{children:"tmpvar"}),"\r\ndeclared on the calling template."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"waterpipe.pipes.innerTemplate = '{{tmpvar}}';\n"})}),"\n",(0,a.jsx)(t,{pipes:{innerTemplate:"{{tmpvar}}"},template:"\n{{let tmpvar 1}}\nOutside: {{tmpvar}}\nInside:  {{innerTemplate}}"}),"\n",(0,a.jsxs)(n.p,{children:["See more on ",(0,a.jsx)(n.a,{href:"/docs/waterpipe/scope-and-name-visibility",children:"Scope and name visibility"})," for more information."]})]})}function i(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(t,e)})):t(e)}}}]);