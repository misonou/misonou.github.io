"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[2179],{2179:function(e,n,r){r.r(n);var s=r(2556);function i(e){const n=Object.assign({h1:"h1",p:"p",code:"code",a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",h4:"h4",pre:"pre"},e.components),{Module:r,MemberList:i,Badge:d}=n;return d||l("Badge",!1),d.ReadOnly||l("Badge.ReadOnly",!0),i||l("MemberList",!0),r||l("Module",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{name:"@misonou/brew-extension-auth"}),"\n",(0,s.jsx)(n.h1,{children:"AuthClient interface"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"AuthClient"})," inference defines a set of properties and methods to be used to\r\ncreate an authentication provider."]}),"\n",(0,s.jsxs)(n.p,{children:["To create authentication provider from a client, use ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"AuthProvider.from"})}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Client is designed to be stateless. Caching and refresh timing are handled by provider."}),"\n"]}),"\n",(0,s.jsx)(i,{i:"AuthClient",ip:["authType","providerType"],im:["login()","logout()","refresh()","isHandleable()"]}),"\n",(0,s.jsx)(n.h2,{children:"Instance properties"}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"AuthClient.authType"})," ",(0,s.jsx)(d.ReadOnly,{})]}),"\n",(0,s.jsx)(n.p,{children:"Authentication method used by the provider. It can be one of the following value:"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"federated"})}),(0,s.jsx)(n.p,{children:"Federated identity provider, like an OpenID connect provider."}),(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"password"})}),(0,s.jsx)(n.p,{children:"Authentication using password."}),(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"publicKey"})}),(0,s.jsx)(n.p,{children:"Passwordless authentication using key-pairs, commonly known as passkeys."})]}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"AuthClient.providerType"})," ",(0,s.jsx)(d.ReadOnly,{})]}),"\n",(0,s.jsxs)(n.p,{children:["Type of provider, e.g. ",(0,s.jsx)(n.code,{children:"msal"})," for ",(0,s.jsx)(n.code,{children:"MsalAuthProvider"}),"."]}),"\n",(0,s.jsx)(n.h2,{children:"Instance methods"}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"AuthClient.isHandleable()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"isHandleable(loginHint)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns whether the authentication provider can process the request given the login hint."}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"loginHint"})}),(0,s.jsx)(n.p,{children:"Login hint, ususally user email, provided by user."})]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"AuthClient.login()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"login(params)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Performs login."}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"params"})}),(0,s.jsx)(n.p,{children:"An object with the following properties:"}),(0,s.jsxs)("dl",{children:[(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"interaction"})," ",(0,s.jsx)(d.ReadOnly,{})]}),(0,s.jsx)(n.p,{children:"Specifies the preferred way to login. It can be one of the following value:"}),(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"redirect"})}),(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"popup"})})]}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"loginHint"})," ",(0,s.jsx)(d.ReadOnly,{})]}),(0,s.jsx)(n.p,{children:"Login hint, usually user email, to be passed to external authentication provider."}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"password"})," ",(0,s.jsx)(d.ReadOnly,{})]}),(0,s.jsx)(n.p,{children:"Password to be passed to authentication provider."})]})]}),"\n",(0,s.jsx)(n.h3,{children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["When implemented, it is expected to return a promise that fulfills with properties from\r\n",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"AuthProviderResult"})})," interface."]}),"\n",(0,s.jsx)(n.p,{children:"When performing login through redirection, a promise that never resolves can be returned."}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"AuthClient.logout()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"logout(params)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Performs logout."}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"params"})}),(0,s.jsx)(n.p,{children:"An object with the following properties:"}),(0,s.jsxs)("dl",{children:[(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"accountId"})," ",(0,s.jsx)(d.ReadOnly,{})]}),(0,s.jsx)(n.p,{children:"Account to logout."}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"interaction"})," ",(0,s.jsx)(d.ReadOnly,{})]}),(0,s.jsx)(n.p,{children:"Specifies the preferred way to logout. It can be one of the following value:"}),(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"redirect"})}),(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"popup"})})]}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"singleLogout"})," ",(0,s.jsx)(d.ReadOnly,{})]}),(0,s.jsx)(n.p,{children:"Whether user should be logged out completely from other applications for the same single sign-on session."})]})]}),"\n",(0,s.jsx)(n.h3,{children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"When implemented, it is expected to return a promise that fulfills when user is logged out successfully."}),"\n",(0,s.jsx)(n.p,{children:"When performing logout through redirection, a promise that never resolves can be returned."}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"AuthClient.refresh()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"refresh(current)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Refreshes current login session."}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"current"})}),(0,s.jsx)(n.p,{children:"Last authentication result returned by this provider."})]}),"\n",(0,s.jsx)(n.h3,{children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["When implemented, it is expected to return a promise that fulfills with properties from\r\n",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"AuthProviderResult"})})," interface."]}),"\n",(0,s.jsx)(n.h2,{children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Examples are in use ",(0,s.jsx)(n.a,{href:"https://github.com/misonou/brew-extension-auth/tree/master/src/examples",children:(0,s.jsx)(n.code,{children:"src/examples"})})," folder."]})]})}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);