"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[2565],{2565:function(e,n,i){i.r(n);var s=i(2556);function r(e){const n=Object.assign({h1:"h1",h2:"h2",h4:"h4",ul:"ul",li:"li",code:"code",a:"a"},e.components),{Module:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{name:"brew-js-react"}),"\n",(0,s.jsx)(n.h1,{children:"Change log"}),"\n",(0,s.jsx)(n.h2,{children:"v0.4.5 (2023/07/24)"}),"\n",(0,s.jsx)(n.h4,{children:"Mixins"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," ",(0,s.jsx)(n.code,{children:"pagedItemSelector"})," option should work without ",(0,s.jsx)(n.code,{children:"paged"})," enabled for ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"ScrollableMixin"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"v0.4.4 (2023/07/14)"}),"\n",(0,s.jsx)(n.h4,{children:"Dialog"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Set ",(0,s.jsx)(n.code,{children:".loading"})," class during onCommit"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," unable to focus dialog content on open"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," return result promise from ",(0,s.jsx)(n.code,{children:"closeDialog"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{children:"Mixins"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"FocusStateMixin.for"})})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"FocusStateMixin"})})," cannot retain ",(0,s.jsx)(n.code,{children:".focus-*"})," class"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"v0.4.3 (2023/06/29)"}),"\n",(0,s.jsx)(n.h4,{children:"Hooks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"useRouteParam"})})," should not cause redirection when container is not active"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"useRouteParam"})})," should return previous value when container is not active"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{children:"Views"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," navigation pending forever when view switched twice"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," unexpected navigation due to nested view container"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," missing properties and methods for context object returned by ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"useViewContext"})})," outside view container"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," update view at next beforepageload if redirection triggered"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," delay navigation completion until view rendered"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{children:"Mixins"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"persistScroll"})," option to ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"ScrollableMixin"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"v0.4.2 (2023/06/19)"}),"\n",(0,s.jsx)(n.h4,{children:"Views"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"viewContext"})," to view component props"]}),"\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"pagechange"})," event to view context"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{children:"Mixins"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"ScrollIntoViewMixin"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"v0.4.1 (2023/06/07)"}),"\n",(0,s.jsx)(n.h4,{children:"Hooks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"useAppReadyState"})}),", deprecating ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"useAppReady"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{children:"Views"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"renderView"})," will now throw if supplied component is not registered"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"v0.4.0 (2023/05/24)"}),"\n",(0,s.jsx)(n.h4,{children:"Views"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"View states are now session storage by router"}),"\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"navigationType"})," to view component props"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"v0.3.4 (2023/05/16)"}),"\n",(0,s.jsx)(n.h4,{children:"Views"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"resolvePath"})," to resolve app path for a given view component"]}),"\n",(0,s.jsxs)(n.li,{children:["Allow passing additional data to view ",(0,s.jsx)(n.a,{href:"/docs/router/react/passing-data",children:"[link]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," ",(0,s.jsx)(n.code,{children:"linkTo"})," should return correct browser path base on ",(0,s.jsx)(n.code,{children:"urlMode"})," option"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," loading of view component may not be awaited by navigation promise"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{children:"Mixins"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("kbd",{children:"fix"})," mixin got pre-disposed in dev strict mode"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"v0.3.3 (2023/04/24)"})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(r,e)})):r(e)}}}]);