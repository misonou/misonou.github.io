"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[6480],{6480:function(e,n,r){r.r(n);var s=r(2556);function i(e){const n=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",blockquote:"blockquote",pre:"pre",h4:"h4",strong:"strong",ul:"ul",li:"li"},e.components),{Module:r,MemberList:i,VersionTimeline:d,Badge:t}=n;return t||c("Badge",!1),t.Optional||c("Badge.Optional",!0),t.ReadOnly||c("Badge.ReadOnly",!0),t.Version||c("Badge.Version",!0),i||c("MemberList",!0),r||c("Module",!0),d||c("VersionTimeline",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{name:"brew-js-react"}),"\n",(0,s.jsx)(n.h1,{children:"ViewContext class"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ViewContext"})," class exposes information on the rendered view."]}),"\n",(0,s.jsxs)(n.p,{children:["It is not intended to be instantiated manually. Instead, it is available to view component\r\nby ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"ViewProps.viewContext"})})," property or by ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"useViewContext"})})," hook."]}),"\n",(0,s.jsx)(i,{i:"ViewContext",ip:["parent","container","view","active","page"],im:["getChildren()","setErrorView()","on()"],sp:["root"],ev:["error","pagechange"]}),"\n",(0,s.jsx)(n.h2,{children:"Instance properties"}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"ViewContext.active"})," ",(0,s.jsx)(t.ReadOnly,{})]}),"\n",(0,s.jsx)(n.p,{children:"Gets whether the rendered view is still active."}),"\n",(0,s.jsxs)(n.p,{children:["All rendered view is initially active, until navigation has occured that causes the rendered view to be unmounted.\r\nWhen the view is inactive, hooks such as ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"useRouteParam"})})," and ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"useRouteState"})})," will also be ineffective."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Note that rendered view might turn inactive for a brief time and later become active again, if redirection occurs such\r\nthat the current view matches again."}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"ViewContext.container"})," ",(0,s.jsx)(t.ReadOnly,{})]}),"\n",(0,s.jsx)(n.p,{children:"Gets the DOM element that contains the rendered view."}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"ViewContext.page"})," ",(0,s.jsx)(t.ReadOnly,{})]}),"\n",(0,s.jsxs)(n.p,{children:["Gets information of current page that rendered the view.\r\nUnlike ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"app.page"})}),", it will not change when user has navigated away and the current view is going to unmount."]}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"ViewContext.parent"})," ",(0,s.jsx)(t.ReadOnly,{})," ",(0,s.jsx)(t.Version,{})]}),"\n",(0,s.jsxs)(n.p,{children:["Gets the parent view context, or ",(0,s.jsx)(n.code,{children:"null"})," if there is no parent context."]}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"ViewContext.view"})," ",(0,s.jsx)(t.ReadOnly,{})]}),"\n",(0,s.jsx)(n.p,{children:"Gets the view component rendered."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Note that it returns registered view component returned by ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"registerView"})}),", rather than the\r\nactual view component."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"Instance methods"}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"ViewContext.getChildren()"})," ",(0,s.jsx)(t.Version,{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"getChildren()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Gets view contexts rendered under this view container."}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"ViewContext.on()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"on(event, handler)\r\non(handlers)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Register event handlers."}),"\n",(0,s.jsx)(n.h4,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"event"})}),(0,s.jsx)(n.p,{children:"Event name."}),(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"handler"})}),(0,s.jsx)(n.p,{children:"Callback to be invoked on such event."}),(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"handlers"})}),(0,s.jsx)(n.p,{children:"A dictionary where each entry represents the event name and callback to be invoked on such event."})]}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"ViewContext.setErrorView()"})," ",(0,s.jsx)(t.Version,{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"setErrorView(errorView, error)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Replaces rendered content with error information."}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"errorView"})}),(0,s.jsx)(n.p,{children:"A React component."}),(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"error"})}),(0,s.jsxs)(n.p,{children:["Value, typically an ",(0,s.jsx)(n.code,{children:"Error"})," object, to be passed to error view as ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"ErrorViewProps.error"})}),"."]})]}),"\n",(0,s.jsx)(n.h3,{children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.code,{children:"true"})," when error view is triggered; or ",(0,s.jsx)(n.code,{children:"undefined"})," when called on root context."]}),"\n",(0,s.jsx)(n.h2,{children:"Static properties"}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"ViewContext.root"})," ",(0,s.jsx)(t.ReadOnly,{})," ",(0,s.jsx)(t.Version,{})]}),"\n",(0,s.jsx)(n.p,{children:"Gets the root context."}),"\n",(0,s.jsx)(n.h2,{children:"Events"}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"error"})," event"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"error"})," event is fired when error is dispatched to child elements by ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"reportError"})}),", ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"ErrorHandler.emit"})})," or\r\n",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"notifyAsync"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Event handlers registered are fired ",(0,s.jsx)(n.strong,{children:"after"})," ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"ViewComponentRootProps.onError"})}),"."]}),"\n",(0,s.jsx)(n.h4,{children:"Event properties"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"error"})," ",(0,s.jsx)(t.ReadOnly,{})]}),(0,s.jsx)(n.p,{children:"Gets the dispatched error."})]}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"pagechange"})," event"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"pagechange"})," event is fired when the current view remains active after navigation occurs, meaning that\r\n",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"ViewContext.page"})})," returns a new ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"PageInfo"})})," object."]}),"\n",(0,s.jsx)(n.h4,{children:"Event properties"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"navigationType"})," ",(0,s.jsx)(t.ReadOnly,{})]}),(0,s.jsx)(n.p,{children:"Gets how user has triggered navigation."}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"page"})," ",(0,s.jsx)(t.ReadOnly,{})]}),(0,s.jsx)(n.p,{children:"Gets information of the current page."}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"previousPage"})," ",(0,s.jsx)(t.ReadOnly,{})]}),(0,s.jsxs)(n.p,{children:["Gets the ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"PageInfo"})})," object associated with the page before navigation."]})]}),"\n",(0,s.jsx)(n.h4,{children:"Event methods"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"waitFor()"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"waitFor()\r\nwaitFor(args0)\r\nwaitFor(args0, args1)\r\nwaitFor(args0, args1, /* \u2026 ,*/ argsN)\n"})}),(0,s.jsx)(n.p,{children:"Defers completion of navigation."}),(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:"Parameters"}),(0,s.jsxs)("dl",{children:[(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"args0"})," \u2026 ",(0,s.jsx)(n.code,{children:"argsN"})," ",(0,s.jsx)(t.Optional,{})]}),(0,s.jsx)(n.p,{children:"One or more promises."})]}),(0,s.jsx)(n.h4,{children:"Return value"}),(0,s.jsx)(n.p,{children:"Whether the supplied promises will be awaited."})]})]}),"\n",(0,s.jsx)(n.h2,{children:"Version information"}),"\n",(0,s.jsx)(d,{module:"brew-js-react",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"0.4.2"})," Introduced"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"0.5.5"})," ",(0,s.jsx)(n.code,{children:"ViewContext.parent"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"ViewContext.getChildren()"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"0.5.7"})," ",(0,s.jsx)(n.code,{children:"pagechange"})," event: ",(0,s.jsx)(n.code,{children:"page"}),", ",(0,s.jsx)(n.code,{children:"navigationType"})," and ",(0,s.jsx)(n.code,{children:"waitFor()"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"0.6.5"})," ",(0,s.jsx)(n.code,{children:"ViewContext.root"})," static property ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"ViewContext.setErrorView()"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"error"})," event"]}),"\n"]})})]})}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);