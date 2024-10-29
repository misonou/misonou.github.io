"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[6663],{6663:function(e,n,s){s.r(n);var r=s(2556);function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",ul:"ul",li:"li",code:"code",a:"a",blockquote:"blockquote",del:"del"},e.components),{Module:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{name:"zeta-dom/events"}),"\n",(0,r.jsx)(n.h1,{children:"Event types"}),"\n",(0,r.jsx)(n.h2,{children:"Async handleable event"}),"\n",(0,r.jsxs)(n.p,{children:["An event is ",(0,r.jsx)(n.strong,{children:"asynchronously handleable"}),", when either"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"handleable"})," option is unspecified or is ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"asyncResult"})," option is unspecified or is ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Listener can:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["return value or a ",(0,r.jsx)(n.code,{children:"Promise"})," object, or;"]}),"\n",(0,r.jsxs)(n.li,{children:["pass value or a ",(0,r.jsx)(n.code,{children:"Promise"})," object to ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ZetaEvent.handled"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The event will be marked as handled once a listener has return or pass a value, and\r\nsubsequent event handlers for the same target, or event handlers for parent targets if the event bubbles up,\r\nwill not be called."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Returning ",(0,r.jsx)(n.code,{children:"undefined"})," is the same as being not handling the event, use ",(0,r.jsx)(n.code,{children:"e.handled()"})," to return an ",(0,r.jsx)(n.code,{children:"undefined"})," value."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Emitter will receives:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A promise that resolves to the value or fulfilled value from the ",(0,r.jsx)(n.code,{children:"Promise"})," object that listener has returned or passed; or"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"undefined"})," if there is no listener has done so."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Sync handleable event"}),"\n",(0,r.jsxs)(n.p,{children:["An event is ",(0,r.jsx)(n.strong,{children:"synchronously handleable"}),", if"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"handleable"})," option is unspecified or is ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"asyncResult"})," option is ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Listener can return value as required by the emitter."}),"\n",(0,r.jsx)(n.p,{children:"Emitter will receives:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Value, other than ",(0,r.jsx)(n.code,{children:"undefined"}),", returned from listener"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"undefined"})," if there is no listener has done so."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Unhandleable event"}),"\n",(0,r.jsxs)(n.p,{children:["An event is ",(0,r.jsx)(n.strong,{children:"unhandleable"}),", if ",(0,r.jsx)(n.code,{children:"handleable"})," option is ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Any returned value from listener will be discarded, and ",(0,r.jsx)(n.code,{children:"e.handled()"})," will have no effects."]}),"\n",(0,r.jsxs)(n.p,{children:["Emitter will always received ",(0,r.jsx)(n.code,{children:"undefined"})," as the result."]}),"\n",(0,r.jsx)(n.h2,{children:"Deferrable event"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.del,{children:"0.5.6"})}),"\n",(0,r.jsxs)(n.p,{children:["An event is ",(0,r.jsx)(n.strong,{children:"deferrable"}),", if ",(0,r.jsx)(n.code,{children:"deferrable"})," option is ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Listener can defer operation from emitter by passing promise(s) to ",(0,r.jsx)(n.code,{children:"e.waitFor()"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Just like an unhandleable event, any returned value from listener will be discarded, and ",(0,r.jsx)(n.code,{children:"e.handled()"})," will have no effects."]}),"\n",(0,r.jsxs)(n.p,{children:["However, emitter will always receive a ",(0,r.jsx)(n.code,{children:"Promise"})," object that resolves after\r\nall promises passed to ",(0,r.jsx)(n.code,{children:"e.waitFor()"})," has settled."]}),"\n",(0,r.jsx)(n.h2,{children:"See also"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ZetaEventBase"})})}),"\n"]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);