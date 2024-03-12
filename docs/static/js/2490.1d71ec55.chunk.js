"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[2490],{2490:function(e,n,r){r.r(n);var t=r(2556);function o(e){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"waterpipe"}),"\n",(0,t.jsx)(n.h1,{children:"Wildcard function"}),"\n",(0,t.jsxs)(n.p,{children:["If generic shorthand for a pipe function is desired, it can be registered through ",(0,t.jsx)(n.code,{children:"waterpipe.pipes.__default__"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"It catches any unresolved pipe function names and returns a pipe function on the fly."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"waterpipe.pipes.__default__ = (function (previous) {\r\n    return function (name) {\r\n        if (name.charAt(0) === ':') {\r\n            return function (value) {\r\n                // do your stuff\r\n            };\r\n        }\r\n        // pass the name to previous wildcard pipe function\r\n        // as we only accept name with a colon at the beginning\r\n        return previous(name);\r\n    };\r\n}(waterpipe.pipes.__default__));\n"})})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);