"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[8870],{8870:function(e,n,r){r.r(n);var t=r(2556);function s(e){const n=Object.assign({h1:"h1",del:"del",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",code:"code",tbody:"tbody",td:"td",h2:"h2",pre:"pre"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"brew-js"}),"\n",(0,t.jsxs)(n.h1,{children:["Resuming journey ",(0,t.jsx)(n.del,{children:"v0.5"})]}),"\n",(0,t.jsx)(n.p,{children:"Resuming application states upon new visit or reload in the same tab is now supported."}),"\n",(0,t.jsx)(n.p,{children:"By default, the router initiates with the initial path and empty application state when user visit the page through address bar, hyperlinks, or being redirected from other pages."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"State"}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"urlMode!='none'"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"urlMode='none'"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"App path"}),(0,t.jsxs)(n.td,{children:["Pathname or query, ",(0,t.jsx)("br",{})," fallback to ",(0,t.jsx)(n.code,{children:"initialPath"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"initialPath"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Navigation data"}),(0,t.jsx)(n.td,{children:"Empty"}),(0,t.jsx)(n.td,{children:"Empty"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"History storage"}),(0,t.jsx)(n.td,{children:"Empty"}),(0,t.jsx)(n.td,{children:"Empty"})]})]})]}),"\n",(0,t.jsx)(n.h2,{children:"Resume journey on revisit"}),"\n",(0,t.jsx)(n.p,{children:"In a common scenario when user choose to single sign-on, user will be presented with login screen. After the sign-on process is completed, user will be redirected back to the page with a token."}),"\n",(0,t.jsxs)(n.p,{children:["Since it is a new visit, the states and history storage are not resumed by default. To resume application states, the ",(0,t.jsx)(n.code,{children:"resume"})," option can be set to ",(0,t.jsx)(n.code,{children:"true"}),", or more appropiately:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const token = new URLSearchParams(location.search).get('token');\r\napp.useRouter({\r\n    // resume if \"token\" is in query string an\r\n    // the page is being redirected from other page\r\n    resume: !!token,\r\n    // ...\r\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"In this settings, the router will resume with the path user has left from, with navigation data and history storage restored."}),"\n",(0,t.jsxs)(n.h2,{children:["Resume journey after reload ",(0,t.jsx)(n.del,{children:"v0.5.2"})]}),"\n",(0,t.jsx)(n.p,{children:"Similar to a new visit, a page reload will still reset (part of) the application states by default:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"State"}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"urlMode!='none'"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"urlMode='none'"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"App path"}),(0,t.jsx)(n.td,{children:"Maintained"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"initialPath"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Navigation data"}),(0,t.jsx)(n.td,{children:"Maintained"}),(0,t.jsx)(n.td,{children:"Cleared"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"History storage"}),(0,t.jsx)(n.td,{children:"Cleared"}),(0,t.jsx)(n.td,{children:"Cleared"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"To resume all router states, use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"app.useRouter({\r\n    resumeOnReload: true,\r\n    // ...\r\n})\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Resume journey after switching page"}),"\n",(0,t.jsx)(n.p,{children:"Another common scenario is the app for different language is hosting in different path, which it cannot be controlled by in-app router:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/en/index.html"})," and ",(0,t.jsx)(n.code,{children:"/de/index.html"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In order to resume journey after switching from ",(0,t.jsx)(n.code,{children:"/en/index.html"})," to ",(0,t.jsx)(n.code,{children:"/de/index.html"}),", init the router by:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"app.useRouter({\r\n    resume: '/en/index.html',\r\n    // ...\r\n})\n"})})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)}}}]);
//# sourceMappingURL=8870.d585355f.chunk.js.map