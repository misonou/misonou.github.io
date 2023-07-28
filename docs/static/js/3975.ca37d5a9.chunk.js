"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[3975],{3975:function(e,n,r){r.r(n);var i=r(2556);function s(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",ul:"ul",li:"li"},e.components),{Module:r,Badge:s}=n;return s||o("Badge",!1),s.Optional||o("Badge.Optional",!0),r||o("Module",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{name:"@misonou/react-app-utils"}),"\n",(0,i.jsx)(n.h1,{children:"openDeferredLink"}),"\n",(0,i.jsx)(n.p,{children:"Opens a new window with URL that is yet to be resolved asynchronously."}),"\n",(0,i.jsx)(n.h2,{children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"openDeferredLink(promise)\r\nopenDeferredLink(promise, initialUrl)\r\nopenDeferredLink(promise, initialUrl, target)\r\nopenDeferredLink(promise, initialUrl, target, features)\n"})}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"promise"})}),(0,i.jsx)(n.p,{children:"A promise that resolves the target URL."}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"initialUrl"})," ",(0,i.jsx)(s.Optional,{})]}),(0,i.jsxs)(n.p,{children:["URL to show during loading, typically a loading screen. ",(0,i.jsx)(n.code,{children:"about:blank"})," will be used if not specified."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"target"})," ",(0,i.jsx)(s.Optional,{})]}),(0,i.jsx)(n.p,{children:"Name of target window."}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"features"})," ",(0,i.jsx)(s.Optional,{})]}),(0,i.jsxs)(n.p,{children:["A string containing a comma-separated list of window features, same as ",(0,i.jsx)(n.code,{children:"window.open()"}),"."]})]}),"\n",(0,i.jsx)(n.h3,{children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"A promise that"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["resolves to ",(0,i.jsx)(n.code,{children:"true"})," when the resolved URL is being loaded in target window;"]}),"\n",(0,i.jsxs)(n.li,{children:["resolved to ",(0,i.jsx)(n.code,{children:"false"})," if the new window cannot be opened or the opened window is closed before URL is resolved."]}),"\n",(0,i.jsx)(n.li,{children:"forward rejection result if the given promise rejects."}),"\n"]})]})}function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(s,e)})):s(e)}}}]);