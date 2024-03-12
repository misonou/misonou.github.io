"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[194],{3280:function(r,n,e){e.r(n);var t=e(2556);function a(r){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},r.components),{Module:e}=n;return e||function(r,n){throw new Error("Expected "+(n?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e,{name:"waterpipe"}),"\n",(0,t.jsx)(n.h1,{children:"Dynamic functions"}),"\n",(0,t.jsxs)(n.p,{children:["A variadic pipe function can take any number of arguments from the pipe. It is signatured by setting ",(0,t.jsx)(n.code,{children:"varargs"})," to ",(0,t.jsx)(n.code,{children:"true"})," on a pipe function."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'waterpipe.pipes.printargs = function (value, varargs) {\r\n\tvar output = [];\r\n\tvar count = varargs.next();\r\n\tfor (var i = 0; i < count; i++) {\r\n\t\tif (varargs.hasArgs()) {\r\n\t\t\toutput.push(varargs.next());\r\n\t\t}\r\n\t}\r\n\treturn output.join(\' \');\r\n};\r\nwaterpipe.pipes.printargs.varargs = true;\r\n\r\n{{printargs 3 foo bar baz}} -> "foo bar baz"\r\n{{printargs 3 foo bar baz upper}} -> "FOO BAR BAZ"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["A variadic pipe function can also take a function argument by ",(0,t.jsx)(n.code,{children:"varargs.fn()"}),". If there is no proper set of pipe arguments to form a function argument, it will return ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'waterpipe.pipes.dosomething = function (value, varargs) {\r\n\tvar fn = varargs.fn();\r\n\treturn fn(value);\r\n};\r\nwaterpipe.pipes.dosomething.varargs = true;\r\n\r\nInput:\r\n\t{ value: 1 }\r\n\r\n{{value dosomething [ + 1 ]}} -> "2"\n'})})]})}n.default=function(r={}){const{wrapper:n}=r.components||{};return n?(0,t.jsx)(n,Object.assign({},r,{children:(0,t.jsx)(a,r)})):a(r)}}}]);