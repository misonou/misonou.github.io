"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[7911],{7911:function(e,r,n){n.r(r);var s=n(2556);function i(e){const r=Object.assign({h1:"h1",p:"p",code:"code",blockquote:"blockquote",a:"a",h2:"h2",pre:"pre",h3:"h3",h4:"h4"},e.components),{Module:n,ImportHint:i,Badge:o}=r;return o||t("Badge",!1),o.Optional||t("Badge.Optional",!0),o.ReadOnly||t("Badge.ReadOnly",!0),i||t("ImportHint",!0),n||t("Module",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{name:"@misonou/brew-extension-auth"}),"\n",(0,s.jsx)(r.h1,{children:"Auth extension"}),"\n",(0,s.jsxs)(r.p,{children:["This is a preview extension for single sign-on in ",(0,s.jsx)(r.code,{children:"brew.js"})," application."]}),"\n",(0,s.jsx)(i,{name:"Auth",module:"@misonou/brew-extension-auth",import:"default",require:"default",global:"brew.Auth",expanded:!0}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"/docs/app/auth/AuthContext",children:(0,s.jsx)(r.code,{children:"AuthContext"})})," for injected app properties, methods and events."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"app.useAuth(options)\n"})}),"\n",(0,s.jsx)(r.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"options"})}),(0,s.jsx)(r.p,{children:"A dictionary containing options."}),(0,s.jsxs)("dl",{children:[(0,s.jsxs)(r.h4,{children:[(0,s.jsx)(r.code,{children:"interaction"})," ",(0,s.jsx)(o.Optional,{})]}),(0,s.jsx)(r.p,{children:"Specifies the preferred way to login when authenticating through external providers."}),(0,s.jsx)(r.p,{children:"It accepts the following values:"}),(0,s.jsxs)("dl",{children:[(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"redirect"})}),(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"popup"})})]}),(0,s.jsxs)(r.p,{children:["Default is ",(0,s.jsx)(r.code,{children:"redirect"}),"."]}),(0,s.jsxs)(r.h4,{children:[(0,s.jsx)(r.code,{children:"postLoginPath"})," ",(0,s.jsx)(o.Optional,{})]}),(0,s.jsx)(r.p,{children:"Default path to visit after logged in.\r\nIf not specified, user will be redirected to current path."}),(0,s.jsxs)(r.h4,{children:[(0,s.jsx)(r.code,{children:"postLogoutPath"})," ",(0,s.jsx)(o.Optional,{})]}),(0,s.jsx)(r.p,{children:"Default path to visit after logged out.\r\nIf not specified, user will be redirected to current path."}),(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"providers"})}),(0,s.jsx)(r.p,{children:"A list of authentication provider."}),(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"resolveUser"})}),(0,s.jsxs)(r.p,{children:["A callback that gather information about current user which will be exposed as ",(0,s.jsx)(r.a,{href:":",children:(0,s.jsx)(r.code,{children:"app.user"})}),"."]}),(0,s.jsx)(r.p,{children:"The callback will receive an argument with following properties:"}),(0,s.jsxs)("dl",{children:[(0,s.jsxs)(r.h4,{children:[(0,s.jsx)(r.code,{children:"account"})," ",(0,s.jsx)(o.ReadOnly,{})]}),(0,s.jsx)(r.p,{children:"Identity returned from the provider."}),(0,s.jsxs)(r.h4,{children:[(0,s.jsx)(r.code,{children:"provider"})," ",(0,s.jsx)(o.ReadOnly,{})]}),(0,s.jsx)(r.p,{children:"A unique key identifying the provider."}),(0,s.jsxs)(r.h4,{children:[(0,s.jsx)(r.code,{children:"providerType"})," ",(0,s.jsx)(o.ReadOnly,{})]}),(0,s.jsxs)(r.p,{children:["Type of identity returned from provider, e.g. ",(0,s.jsx)(r.code,{children:"msal"})," for ",(0,s.jsx)(r.code,{children:"MsalAuthProvider"}),"."]})]})]})]}),"\n",(0,s.jsx)(r.h2,{children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:'import brew from "brew-js/app";\r\nimport Router from "brew-js/extension/router";\r\nimport Auth from "@misonou/brew-extension-auth";\r\nimport MsalAuthProvider from "@misonou/brew-extension-auth/msal";\r\n\r\nexport const app = brew.with(Router, Auth)(app => {\r\n    app.useRouter({\r\n        /* ... */\r\n    });\r\n    app.useAuth({\r\n        providers: [\r\n            // create provider using factory method\r\n            MsalAuthProvider.create(\'microsoft\', clientId, authority, scopes)\r\n        ],\r\n        resolveUser({ account }) {\r\n            // value will be exposed as `app.user`\r\n            return account;\r\n        }\r\n    });\r\n});\n'})}),"\n",(0,s.jsx)(r.h2,{children:"Using UMD distribution"}),"\n",(0,s.jsx)(r.p,{children:"Here is an example on how to include and access exported members in UMD environment:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-html",children:'\x3c!-- dependencies (not showing all) --\x3e\r\n<script src="https://unkpg.com/brew-js"><\/script>\r\n\x3c!-- main extension --\x3e\r\n<script src="https://unkpg.com/@misonou/brew-extension-auth"><\/script>\r\n\x3c!-- MSAL provider --\x3e\r\n<script src="https://unpkg.com/@misonou/brew-extension-auth/dist/brew-auth-msal.min.js"><\/script>\n'})}),"\n",(0,s.jsx)(r.p,{children:"Access API from global variable:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"brew.with(brew.Auth)(app => {\r\n    // access MSAL provider factory\r\n    const provider = brew.Auth.MsalAuthProvider.create(/* ... */);\r\n\r\n    // configure extension\r\n    app.useAuth({ /* ... */ });\r\n\r\n    // create middleware\r\n    const fetch = brew.Auth.createFetchMiddleware(app);\r\n});\n"})})]})}function t(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}r.default=function(e={}){const{wrapper:r}=e.components||{};return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);