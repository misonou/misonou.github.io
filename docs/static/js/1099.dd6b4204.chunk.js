"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[1099],{1099:function(e,r,n){n.r(r);var t=n(2556);function o(e){const r=Object.assign({h1:"h1",p:"p",a:"a",code:"code",blockquote:"blockquote",pre:"pre"},e.components),{Module:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{name:"@misonou/brew-extension-auth"}),"\n",(0,t.jsx)(r.h1,{children:"Exposing user identity"}),"\n",(0,t.jsxs)(r.p,{children:["By casting the extension with specific user object type, ",(0,t.jsx)(r.a,{href:":",children:(0,t.jsx)(r.code,{children:"app.user"})})," will be enforced with the given type."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["If there are multiple identity providers, it may be advantageous to unify the user object by ",(0,t.jsx)(r.code,{children:"resolveUser"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'import brew from "brew-js/app";\r\nimport Router from "brew-js/extension/router";\r\nimport Auth, { AuthExtension } from "@misonou/brew-extension-auth";\r\n\r\ninterface User {\r\n    id: string;\r\n    /* ... */\r\n}\r\n\r\nbrew.with(Router, Auth as AuthExtension<User>)(app => {\r\n    app.useAuth({\r\n        /* ... */\r\n        resolveUser() {\r\n            // require to return an object of type `User`\r\n            return createMyUserObject();\r\n        }\r\n    });\r\n});\n'})})]})}r.default=function(e={}){const{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);