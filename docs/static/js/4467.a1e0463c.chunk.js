"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[4467],{4467:function(e,r,a){a.r(r);var n=a(2556);function t(e){const r=Object.assign({h1:"h1",p:"p",code:"code",blockquote:"blockquote",strong:"strong",h2:"h2",del:"del"},e.components),{Module:a,WaterpipeExample:t}=r;return a||o("Module",!0),t||o("WaterpipeExample",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{name:"waterpipe"}),"\n",(0,n.jsx)(r.h1,{children:"Accessing data"}),"\n",(0,n.jsxs)(r.p,{children:["An object path is basically Javascript's dot notation (",(0,n.jsx)(r.code,{children:"."}),") except that array indices are also accepted."]}),"\n",(0,n.jsx)(r.p,{children:"The following object path will be interpolated as:"}),"\n",(0,n.jsx)(t,{data:{number:0,string:"foo",array:[1,2,3,4]},examples:["number","string","array","array.0","array.length"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note"}),": All function property are not retrievable."]}),"\n"]}),"\n",(0,n.jsx)(t,{data:{number:0,string:"foo",array:[1,2,3,4]},examples:["number.toFixed","string.toUpperCase","array.concat"]}),"\n",(0,n.jsx)(r.h2,{children:"Higher order object path"}),"\n",(0,n.jsxs)(r.p,{children:["Any parts of the object path can be itself evaluated by a preceding dollar sign (",(0,n.jsx)(r.code,{children:"$"}),")."]}),"\n",(0,n.jsx)(t,{data:{zero:0,array:[1,2,3,4]},examples:["array.$zero","array.$(array.0)"]}),"\n",(0,n.jsxs)(r.h2,{children:["Reverse array indexing ",(0,n.jsx)(r.del,{children:"2.4"})]}),"\n",(0,n.jsx)(t,{data:{array:[1,2,3,4]},examples:["array.^0","array.^1","array.^5"]}),"\n",(0,n.jsx)(r.h2,{children:"Nonexistent path"}),"\n",(0,n.jsxs)(r.p,{children:["When interpolating, it is short-circuited if at any step it evaluates to ",(0,n.jsx)(r.code,{children:"undefined"})," or ",(0,n.jsx)(r.code,{children:"null"}),".\r\nIt is commonly equivalent to the ",(0,n.jsx)(r.code,{children:"?."})," operator by other languages or template engines:"]}),"\n",(0,n.jsx)(t,{data:{array:[1,2,3,4]},examples:["blah","array.foo.bar"]})]})}function o(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}r.default=function(e={}){const{wrapper:r}=e.components||{};return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(t,e)})):t(e)}}}]);