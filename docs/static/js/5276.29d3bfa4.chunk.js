"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[5276],{5276:function(e,r,n){n.r(r);var s=n(2556);function i(e){const r=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",a:"a",h4:"h4",ul:"ul",li:"li",strong:"strong"},e.components),{Module:n,MemberList:i,VersionTimeline:d,Badge:c}=r;return c||o("Badge",!1),c.ReadOnly||o("Badge.ReadOnly",!0),i||o("MemberList",!0),n||o("Module",!0),d||o("VersionTimeline",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{name:"brew-js-react"}),"\n",(0,s.jsx)(r.h1,{children:"ViewProps interface"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"ViewProps"})," interface exposes information to the current view component."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-tsx",children:"const MyView = registerView(MyViewImpl, { /* ... */ });\r\n\r\nfunction MyViewImpl(props: ViewProps) {\r\n    /* ... */\r\n}\n"})}),"\n",(0,s.jsx)(i,{i:"ViewProps",ip:["errorHandler","viewData","viewContext","navigationType"]}),"\n",(0,s.jsx)(r.h2,{children:"Instance properties"}),"\n",(0,s.jsxs)(r.h3,{children:[(0,s.jsx)(r.code,{children:"ViewProps.errorHandler"})," ",(0,s.jsx)(c.ReadOnly,{})]}),"\n",(0,s.jsxs)(r.p,{children:["Gets an ",(0,s.jsx)(r.a,{href:":",children:(0,s.jsx)(r.code,{children:"ErrorHandler"})})," object that catches errors emitted from current view."]}),"\n",(0,s.jsxs)(r.h3,{children:[(0,s.jsx)(r.code,{children:"ViewProps.navigationType"})," ",(0,s.jsx)(c.ReadOnly,{})]}),"\n",(0,s.jsx)(r.p,{children:"Gets how user landed on this view component. It has the following possible values:"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"navigate"})}),(0,s.jsx)(r.p,{children:"Any case besides the following."}),(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"resume"})}),(0,s.jsxs)(r.p,{children:["Indicating that the previous journey has been resumed. See ",(0,s.jsx)(r.a,{href:"/docs/router/resume-journey",children:"Resuming journey"}),"."]}),(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"reload"})}),(0,s.jsx)(r.p,{children:"Indicating that the page is reloaded."}),(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"back_forward"})}),(0,s.jsx)(r.p,{children:"Indicating that user has traversed back or forward through browser's history."})]}),"\n",(0,s.jsxs)(r.h3,{children:[(0,s.jsx)(r.code,{children:"ViewProps.viewContext"})," ",(0,s.jsx)(c.ReadOnly,{})]}),"\n",(0,s.jsxs)(r.p,{children:["Gets information scoped to the rendered view. See the ",(0,s.jsx)(r.a,{href:":",children:(0,s.jsx)(r.code,{children:"ViewContext"})})," interface."]}),"\n",(0,s.jsxs)(r.h3,{children:[(0,s.jsx)(r.code,{children:"ViewProps.viewData"})," ",(0,s.jsx)(c.ReadOnly,{})]}),"\n",(0,s.jsxs)(r.p,{children:["Gets the additional data passed from ",(0,s.jsx)(r.a,{href:":",children:(0,s.jsx)(r.code,{children:"navigateTo"})})," or ",(0,s.jsx)(r.a,{href:":",children:(0,s.jsx)(r.code,{children:"redirectTo"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["The data object is read-only, to use incoming data as mutable view states,\r\npass individual data to ",(0,s.jsx)(r.code,{children:"React.useState"})," or ",(0,s.jsx)(r.a,{href:":",children:(0,s.jsx)(r.code,{children:"useRouteState"})}),"."]}),"\n",(0,s.jsx)(r.h2,{children:"Version information"}),"\n",(0,s.jsx)(d,{module:"brew-js-react",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"0.3.4"})," Introduced"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"0.4.0"})," ",(0,s.jsx)(r.code,{children:"ViewProps.navigationType"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"0.4.2"})," ",(0,s.jsx)(r.code,{children:"ViewProps.viewContext"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"0.6.4"})," ",(0,s.jsx)(r.code,{children:"ViewProps.errorHandler"})]}),"\n"]})})]})}function o(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}r.default=function(e={}){const{wrapper:r}=e.components||{};return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);