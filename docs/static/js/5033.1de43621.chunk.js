"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[5033],{5033:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var t=r(2556),i=r(4519),o=r(7749),s=r(8180),a=r(1266);var c=function(e){var n={};return(0,o.YP)(n,!0),(0,o.S6)(e,(function(e,r){var t=matchMedia(r),i=(0,o.aU)(n,e,t.matches,!0);(0,s.ak)(t,"change",(function(){i(t.matches)}))})),{breakpoints:Object.freeze(n),useBreakpoint:function(){var e=(0,a.Rk)();return(0,i.useEffect)((function(){return(0,o.YP)(n,e)}),[]),n}}}({isMobile:"(max-width: 700px)",isTablet:"(max-width: 900px)"}),l=(c.breakpoints,c.useBreakpoint);function d(){var e=l(),n=e.isMobile,r=e.isTablet;return(0,t.jsxs)("div",{children:["isMobile: ",String(n),(0,t.jsx)("br",{}),"isTablet: ",String(r)]})}var h="import { createBreakpointContext } from \"zeta-dom-react\";\r\n\r\nconst { breakpoints, useBreakpoint } = createBreakpointContext({\r\n    isMobile: '(max-width: 700px)',\r\n    isTablet: '(max-width: 900px)'\r\n});\r\n\r\nexport default function Component() {\r\n    const { isMobile, isTablet } = useBreakpoint();\r\n\r\n    return (\r\n        <div>\r\n            isMobile: {String(isMobile)}<br/>\r\n            isTablet: {String(isTablet)}\r\n        </div>\r\n    );\r\n}\r\n",p=r(6670);function x(){return(0,t.jsx)(p.iV,{component:d,source:{tsx:h}})}function u(e){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2",h3:"h3",h4:"h4",a:"a",ul:"ul",li:"li",strong:"strong"},e.components),{Module:r,ImportHint:i,MemberList:o,VersionTimeline:s}=n;return i||m("ImportHint",!0),o||m("MemberList",!0),r||m("Module",!0),s||m("VersionTimeline",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"zeta-dom-react"}),"\n",(0,t.jsx)(n.h1,{children:"createBreakpointContext"}),"\n",(0,t.jsx)(n.p,{children:"Creates a state object and corresponding hook for multiple media queries."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const { breakpoints, useBreakpoint } = createBreakpointContext({\r\n  isMobile: '(max-width: 700px)',\r\n  isTablet: '(max-width: 900px)'\r\n});\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createBreakpointContext(breakpoints)\n"})}),"\n",(0,t.jsx)(i,{name:"createBreakpointContext",module:"zeta-dom-react",require:"createBreakpointContext",global:"zeta.react.createBreakpointContext"}),"\n",(0,t.jsx)(n.h3,{children:"Parameters"}),"\n",(0,t.jsxs)("dl",{children:[(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"breakpoints"})}),(0,t.jsx)(n.p,{children:"A dictionary which each key associates a media query."})]}),"\n",(0,t.jsx)(n.h3,{children:"Return value"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"BreakpointContext"})})," object."]}),"\n",(0,t.jsx)(n.h2,{children:"Example"}),"\n",(0,t.jsx)(x,{}),"\n",(0,t.jsx)(n.h2,{children:"BreakpointContext interface"}),"\n",(0,t.jsx)(o,{i:"BreakpointContext",ip:["breakpoints"],im:["useBreakpoint()"]}),"\n",(0,t.jsx)(n.h3,{children:(0,t.jsx)(n.code,{children:"BreakpointContext.breakpoints"})}),"\n",(0,t.jsx)(n.p,{children:"A dictionary which for each key returns whether the correspoding media query matches currently."}),"\n",(0,t.jsx)(n.h3,{children:(0,t.jsx)(n.code,{children:"BreakpointContext.useBreakpoint()"})}),"\n",(0,t.jsx)(n.p,{children:"Triggers component rendering upon changes of conditions."}),"\n",(0,t.jsx)(n.h2,{children:"Version information"}),"\n",(0,t.jsx)(s,{module:"zeta-dom-react",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"0.2.3"})," Introduced"]}),"\n"]})})]})}var j=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)};function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);