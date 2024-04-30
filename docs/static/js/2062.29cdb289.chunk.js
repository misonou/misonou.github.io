"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[2062],{2062:function(e,s,r){r.r(s);var n=r(2556);function d(e){const s=Object.assign({h1:"h1",h2:"h2",h4:"h4",code:"code",del:"del",p:"p",blockquote:"blockquote",a:"a"},e.components),{Module:r,WaterpipeExample:d}=s;return r||c("Module",!0),d||c("WaterpipeExample",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{name:"waterpipe"}),"\n",(0,n.jsx)(s.h1,{children:"Special variables"}),"\n",(0,n.jsx)(s.h2,{children:"Dynamic data"}),"\n",(0,n.jsx)(d,{examples:["@random","@now","@today"]}),"\n",(0,n.jsxs)("dl",{children:[(0,n.jsxs)(s.h4,{children:[(0,n.jsx)(s.code,{children:"@random"})," ",(0,n.jsx)(s.del,{children:"2.4"})]}),(0,n.jsx)(s.p,{children:"A random number between 0 and 1."}),(0,n.jsxs)(s.h4,{children:[(0,n.jsx)(s.code,{children:"@now"})," ",(0,n.jsx)(s.del,{children:"2.4"})]}),(0,n.jsx)(s.p,{children:"Timestamp of current time."}),(0,n.jsxs)(s.h4,{children:[(0,n.jsx)(s.code,{children:"@today"})," ",(0,n.jsx)(s.del,{children:"2.4"})]}),(0,n.jsx)(s.p,{children:"Timestamp of today's date."})]}),"\n",(0,n.jsx)(s.h2,{children:"Scopes"}),"\n",(0,n.jsx)(s.p,{children:"There are several special variables to access outer scopes,\r\nwhich can be used to access variables or properties masked by\r\nproperties from current scope."}),"\n",(0,n.jsxs)("dl",{children:[(0,n.jsx)(s.h4,{children:(0,n.jsx)(s.code,{children:"@global"})}),(0,n.jsx)(s.p,{children:"Global object passed to waterpipe."}),(0,n.jsx)(d,{data:{data:1},globals:{data:2},examples:["data","@global.data"]}),(0,n.jsxs)(s.h4,{children:[(0,n.jsx)(s.code,{children:"@root"})," ",(0,n.jsx)(s.code,{children:"_"})]}),(0,n.jsx)(s.p,{children:"Object or value passed to waterpipe."}),(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["The shorthand ",(0,n.jsx)(s.code,{children:"_"})," must be in evaluated form (",(0,n.jsx)(s.code,{children:"$_"}),") unless at the start of a pipe."]}),"\n"]}),(0,n.jsx)(d,{data:{data:1,values:[{data:2}]},template:"\n{{foreach values}}\n    {{data}}\n    {{_.data}}\n{{/foreach}}\n"}),(0,n.jsxs)(s.h4,{children:[(0,n.jsx)(s.code,{children:"@0"})," ",(0,n.jsx)(s.code,{children:"."})]}),(0,n.jsx)(s.p,{children:"Current object or value."}),(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["The shorthand ",(0,n.jsx)(s.code,{children:"."})," must be in evaluated form (",(0,n.jsx)(s.code,{children:"$."}),") unless at the start of a pipe."]}),"\n"]}),(0,n.jsxs)(s.h4,{children:[(0,n.jsx)(s.code,{children:"@1"}),", ",(0,n.jsx)(s.code,{children:"@2"}),", ..."]}),(0,n.jsx)(s.p,{children:"Object or value in outer scope."}),(0,n.jsx)(d,{data:{data:1,values:[{data:2}]},template:"\n{{foreach values}}\n    @0.data = {{@0.data}}\n    @1.data = {{@1.data}}\n    @2.data = {{@2.data}}\n{{/foreach}}\n"})]}),"\n",(0,n.jsx)(s.h2,{children:"Loops"}),"\n",(0,n.jsxs)(s.p,{children:["See ",(0,n.jsxs)(s.a,{href:"/docs/waterpipe/foreach-statement",children:[(0,n.jsx)(s.code,{children:"foreach"})," statement"]})]}),"\n",(0,n.jsxs)("dl",{children:[(0,n.jsxs)(s.h4,{children:[(0,n.jsx)(s.code,{children:"#key"})," ",(0,n.jsx)(s.code,{children:"#"})]}),(0,n.jsxs)(s.p,{children:["Key of current iteration, it is the same as ",(0,n.jsx)(s.code,{children:"#index"})," for arrays."]}),(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["The shorthand ",(0,n.jsx)(s.code,{children:"#"})," must be in evaluated form (",(0,n.jsx)(s.code,{children:"$#"}),") unless at the start of a pipe."]}),"\n"]}),(0,n.jsxs)(s.h4,{children:[(0,n.jsx)(s.code,{children:"#index"})," ",(0,n.jsx)(s.code,{children:"##"})]}),(0,n.jsx)(s.p,{children:"Zero-based index of current iteration."}),(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["The shorthand ",(0,n.jsx)(s.code,{children:"##"})," must be in evaluated form (",(0,n.jsx)(s.code,{children:"$##"}),") unless at the start of a pipe."]}),"\n"]}),(0,n.jsx)(s.h4,{children:(0,n.jsx)(s.code,{children:"#count"})}),(0,n.jsx)(s.p,{children:"Number of entries."})]})]})}function c(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}}}]);