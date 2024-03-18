"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[5380],{5380:function(e,n,i){i.r(n);var r=i(2556);function s(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",blockquote:"blockquote",a:"a"},e.components),{Module:i,MemberList:s,Badge:o}=n;return o||t("Badge",!1),o.Optional||t("Badge.Optional",!0),s||t("MemberList",!0),i||t("Module",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{name:"brew-js/extensions"}),"\n",(0,r.jsx)(n.h1,{children:"IdleTimeout extension"}),"\n",(0,r.jsx)(n.p,{children:"Allows notifications or other actions when user has been idled for a certain period."}),"\n",(0,r.jsx)(n.h2,{children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"app.useIdleTimeout(options)\n"})}),"\n",(0,r.jsx)(n.h3,{children:"Parameters"}),"\n",(0,r.jsxs)("dl",{children:[(0,r.jsx)(n.h4,{children:(0,r.jsx)(n.code,{children:"options"})}),(0,r.jsxs)("dl",{children:[(0,r.jsx)(n.h4,{children:(0,r.jsx)(n.code,{children:"timeout"})}),(0,r.jsxs)(n.p,{children:["Number of milliseconds of idle period before ",(0,r.jsx)(n.code,{children:"idle"})," event is fired."]}),(0,r.jsxs)(n.h4,{children:[(0,r.jsx)(n.code,{children:"crossFrame"})," ",(0,r.jsx)(o.Optional,{})]}),(0,r.jsx)(n.p,{children:"Whether user interaction is counted across multiple frames."}),(0,r.jsxs)(n.h4,{children:[(0,r.jsx)(n.code,{children:"key"})," ",(0,r.jsx)(o.Optional,{})]}),(0,r.jsxs)(n.p,{children:["Storage key in local storage when ",(0,r.jsx)(n.code,{children:"crossFrame"})," option is enabled.\r\nDefault is ",(0,r.jsx)(n.code,{children:"app.lastInteract"}),"."]})]})]}),"\n",(0,r.jsx)(n.h2,{children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import brew from "brew-js";\r\nimport IdleTimeout from "brew-js/extension/idleTimeout";\r\n\r\nbrew.with(IdleTimeout)(app => {\r\n    app.useIdleTimeout({\r\n        timeout: 600000 /* 10 minutes */\r\n    });\r\n    app.on(\'idle\', e => {\r\n        // returns a promise that is resolved when user close the dialog\r\n        return openAlertDialog({ /* ... */ });\r\n    });\r\n});\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The extension is included in UMD distribution.\r\nThere is no need to explicitly registered it with ",(0,r.jsx)(n.code,{children:"brew.with"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"WithIdleTimeout interface"}),"\n",(0,r.jsxs)(n.p,{children:["Members of the ",(0,r.jsx)(n.code,{children:"WithIdleTimeout"})," interface is injected to app instance by ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"app.useIdleTimeout"})}),"."]}),"\n",(0,r.jsx)(s,{i:"app",noRoot:!0,ev:["idle"]}),"\n",(0,r.jsxs)(n.h3,{children:[(0,r.jsx)(n.code,{children:"idle"})," event"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"idle"})," event will be fired after a specified amount time without any user interaction."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"idle"})," event is handled with a promise, the count down will not be restarted\r\nuntil the promise is resolved. This prevents mulitple triggering of UI notifications."]}),"\n"]})]})}function t(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}}}]);