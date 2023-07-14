"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[2173],{2173:function(e,n,t){t.r(n);var r=t(2556);function s(e){const n=Object.assign({h1:"h1",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",code:"code",tbody:"tbody",td:"td",h3:"h3",ol:"ol",li:"li"},e.components),{Module:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{name:"zeta-dom"}),"\n",(0,r.jsx)(n.h1,{children:"Handling user actions"}),"\n",(0,r.jsx)(n.p,{children:"For user action will trigger asynchronous operations, there are commonly a few side effects needed for a rich single-paged application."}),"\n",(0,r.jsx)(n.p,{children:"Zeta DOM relies on associating a promise object to HTML elements to manage such side effects:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Report loading"}),(0,r.jsx)(n.th,{children:"Report errors"}),(0,r.jsx)(n.th,{children:"Prevent leaving"}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.code,{children:"locked"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"lock"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"See Note 1"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"notifyAsync"})}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"preventLeave"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"See Note 2"})]})]})]}),"\n",(0,r.jsx)(n.h3,{children:"Notes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Calling ",(0,r.jsx)(n.code,{children:"lock"})," on an element will cause ",(0,r.jsx)(n.code,{children:"locked"})," to return true.\r\nIt does not trigger browser's confirmation when leaving the page.\r\nFor SPA, custom handling is required when handling in-page navigation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"preventLeave"})," will lock an element if that element is given as the first argument."]}),"\n"]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}}}]);