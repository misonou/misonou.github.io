"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[2709],{2709:function(e,n,r){r.r(n);var s=r(2556);function c(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre",h4:"h4",a:"a"},e.components),{Module:r,MemberList:c,Badge:l}=n;return l||a("Badge",!1),l.Optional||a("Badge.Optional",!0),l.ReadOnly||a("Badge.ReadOnly",!0),c||a("MemberList",!0),r||a("Module",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{name:"brew-js"}),"\n",(0,s.jsx)(n.h1,{children:"App interface"}),"\n",(0,s.jsx)(c,{i:"app",ip:["element","ready","readyState"],im:["define()","detect()","when()","matchElement()","beforeInit()","beforeUpdate()","emit()","isElementActive()"]}),"\n",(0,s.jsx)(n.h2,{children:"Instance properties"}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"app.element"})," ",(0,s.jsx)(l.ReadOnly,{})]}),"\n",(0,s.jsx)(n.p,{children:"Gets the root element associated with the app."}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"app.ready"})," ",(0,s.jsx)(l.ReadOnly,{})]}),"\n",(0,s.jsx)(n.p,{children:"Gets the promise which is resolved when app is ready."}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"app.readyState"})," ",(0,s.jsx)(l.ReadOnly,{})]}),"\n",(0,s.jsx)(n.p,{children:"Gets the ready state of the app instance."}),"\n",(0,s.jsx)(n.h2,{children:"Instance methods"}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"app.define()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.define(props)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Defines properties and methods on the app instance."}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsx)("dl",{children:(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"props"})})}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"app.detect()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.detect(names)\r\napp.detect(names, callback)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Performs feature detections before the app starts."}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"names"})}),(0,s.jsx)(n.p,{children:"Names of feature."}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"callback"})," ",(0,s.jsx)(l.Optional,{})]})]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"app.when()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.when(promise, callback)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Registers a callback that will be fired only when the promise resolves to a truthy value.\r\nApp start is postponed until the promise is fulfilled."}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"promise"})}),(0,s.jsx)(n.p,{children:"A promise-like object."}),(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"callback"})}),(0,s.jsx)(n.p,{children:"A callback to be fired."})]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"app.matchElement()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.matchElement(selector, handler)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Registers handler to be fired when each matched element is being mounted."}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"selector"})}),(0,s.jsx)(n.p,{children:"A valid CSS selector identifying elements."}),(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"handler"})}),(0,s.jsx)(n.p,{children:"A callback function which receives is the matched element."})]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"app.beforeInit()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.beforeInit(promise)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Postpones app start until the promise is fulfilled."}),"\n",(0,s.jsxs)(n.p,{children:["When all operations have completed, ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"app.readyState"})})," will be set to ",(0,s.jsx)(n.code,{children:"ready"}),"\r\nand ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"app.ready"})})," will resolve. When error is thrown in callback or a promise rejects,\r\nthe app will halt and never be started, whereas ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"app.readyState"})})," will be set to ",(0,s.jsx)(n.code,{children:"error"}),"."]}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"promise"})}),(0,s.jsx)(n.p,{children:"A promise-like object or a callback that returns promise-like object when called."})]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"app.beforeUpdate()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.beforeUpdate(callback)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Registers handler to perform asychronous operations when DOM is about to change.\r\nIf the handler returns a promise, DOM changes are delayed until the promise resolves."}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"callback"})}),(0,s.jsx)(n.p,{children:"A callback function which receives a list of updates."})]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"app.emit()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.emit(event)\r\napp.emit(event, data)\r\napp.emit(event, data, options)\r\napp.emit(event, target)\r\napp.emit(event, target, data)\r\napp.emit(event, target, data, options)\n"})}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"event"})}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"data"})," ",(0,s.jsx)(l.Optional,{})]}),(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"target"})}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"options"})," ",(0,s.jsx)(l.Optional,{})]})]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"app.isElementActive()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.isElementActive(element)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Gets whether a given element is part of the active layout of the current path."}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"element"})}),(0,s.jsx)(n.p,{children:"A DOM element."})]})]})}function a(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);