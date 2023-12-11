"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[4292],{4292:function(e,n,t){t.r(n);var s=t(2556);function c(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",ul:"ul",li:"li",blockquote:"blockquote"},e.components),{Module:t,Badge:c}=n;return c||r("Badge",!1),c.Optional||r("Badge.Optional",!0),t||r("Module",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{name:"zeta-dom/observe"}),"\n",(0,s.jsx)(n.h1,{children:"watchAttributes"}),"\n",(0,s.jsx)(n.p,{children:"Registers a callback to be fired when specified attributes of descandent elements are changed."}),"\n",(0,s.jsx)(n.h2,{children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"watchAttributes(element, attributes, callback)\r\nwatchAttributes(element, attributes, callback, fireInit)\n"})}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"element"})}),(0,s.jsx)(n.p,{children:"A DOM element to observe."}),(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"attributes"})}),(0,s.jsx)(n.p,{children:"A string or a list of string specifying attributes to observe."}),(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"callback"})}),(0,s.jsx)(n.p,{children:"A callback to be fired when mutation occurs. The callback receives the following arugments:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"addedNodes"}),": an array containing elements that has specified attribute(s) added."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"removedNodes"})," an array containing elements that has specified attribute(s) removed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"changedNodes"})," an array containing elements that has specified attribute(s) changed."]}),"\n"]}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"fireInit"})," ",(0,s.jsx)(c.Optional,{})]}),(0,s.jsx)(n.p,{children:"Optionally fired when DOM content is ready."})]}),"\n",(0,s.jsx)(n.h3,{children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"A callback which collects mutation immediately and fires mutation handler if there is any mutations."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The callback has an additional property ",(0,s.jsx)(n.code,{children:"dispose"})," that will disconnect the mutation observer."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const collectChanges = watchAttributes(element, ['class'], callback);\r\ncollectChanges.dispose();\n"})})]})}function r(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);