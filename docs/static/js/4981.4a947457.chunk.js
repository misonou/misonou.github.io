"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[4981],{4981:function(e,n,r){r.r(n);var s=r(2556);function t(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",del:"del",pre:"pre",code:"code"},e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Other runtime issues"}),"\n",(0,s.jsx)(n.p,{children:"Here listed major known issues over different versions, listing affected versions and possible workaround."}),"\n",(0,s.jsx)(n.h2,{children:"Unable to trigger navigation when overriding route parameters on change"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.del,{children:"zeta-dom <=0.5.9"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.route.watch('view', (value) => {\r\n    if (value === 'some_value') {\r\n        app.route.view = 'another';\r\n    }\r\n});\r\n\r\n// should be cancelled and trigger another navigation\r\napp.route.view = 'some_value';\n"})}),"\n",(0,s.jsx)(n.p,{children:"If upgrade is not plausible, change the update to asynchronous:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.route.watch('view', (value) => {\r\n    if (value === 'some_value') {\r\n        setImmediate(() => {\r\n            app.route.view = 'another';\r\n        });\r\n    }\r\n});\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Animation sequence not working"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.del,{children:"brew-js 0.6.0-0.6.4"})," ",(0,s.jsx)(n.del,{children:"brew-js-react 0.5.0-0.5.5"})]}),"\n",(0,s.jsxs)(n.p,{children:["Animation sequence may not work if ",(0,s.jsx)(n.code,{children:"zeta-dom"})," is installed with version prior to ",(0,s.jsx)(n.code,{children:"0.4.13"})," because of out-dated dependency list."]}),"\n",(0,s.jsxs)(n.p,{children:["To fix the issue, upgrade ",(0,s.jsx)(n.code,{children:"zeta-dom"})," to ",(0,s.jsx)(n.code,{children:"0.4.13"}),"."]}),"\n",(0,s.jsx)(n.h2,{children:"Event listener bound to parent element not working after Chrome updated to version 117"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.del,{children:"zeta-dom <=0.3.14"})," ",(0,s.jsx)(n.del,{children:"zeta-dom <=0.4.6"})]}),"\n",(0,s.jsxs)(n.p,{children:["Chrome 117 introduced experimetal extension to the ",(0,s.jsx)(n.code,{children:"Iterator"})," base type that affects\r\nevent emitting mechanism."]}),"\n",(0,s.jsxs)(n.p,{children:["To fix the issue, upgrade ",(0,s.jsx)(n.code,{children:"zeta-dom"})," to ",(0,s.jsx)(n.code,{children:"0.3.15"})," or ",(0,s.jsx)(n.code,{children:"0.4.7"}),"."]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);