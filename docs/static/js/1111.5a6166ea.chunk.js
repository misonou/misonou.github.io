"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[1111],{1111:function(e,r,n){n.r(r);var s=n(2556);function i(e){const r=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",h2:"h2",del:"del"},e.components),{Module:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{name:"brew-js-react"}),"\n",(0,s.jsx)(r.h1,{children:"Registering view components"}),"\n",(0,s.jsxs)(r.p,{children:["View components are associated to different paths using ",(0,s.jsx)(r.a,{href:":",children:(0,s.jsx)(r.code,{children:"registerView"})}),"."]}),"\n",(0,s.jsx)(r.p,{children:"In order to have route parameters recognized, router must be configured with known routes. For example if we defined the following routes:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"app.useRouter({\r\n    routes: [\r\n        '/{view:product}/{id?}'\r\n        '/{view}'\r\n    ]\r\n});\n"})}),"\n",(0,s.jsx)(r.p,{children:"When resolving for views, first route parameters are resolved from current path using configured routes:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Path"}),(0,s.jsx)(r.th,{children:"Route parameters"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/home"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{view:'home'}"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/product"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{view:'product'}"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/product/1"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{view:'product',id:'1'}"})})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["Then route parameters are matched with those passed to ",(0,s.jsx)(r.a,{href:":",children:(0,s.jsx)(r.code,{children:"registerView"})}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export const Home = registerView(() => import(\"./views/Home\"), {\r\n    view: 'home'\r\n});\r\nexport const Product = registerView(() => import(\"./views/Product\"), {\r\n    view: 'product'\r\n});\r\nexport const ProductInfo = registerView(() => import(\"./views/ProductInfo\"), {\r\n    view: 'product',\r\n    id:   /.+/\r\n});\n"})}),"\n",(0,s.jsxs)(r.p,{children:["When combined, the view at ",(0,s.jsx)(r.code,{children:"./views/Home"})," will be matched when visiting ",(0,s.jsx)(r.code,{children:"/home"}),"."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Path"}),(0,s.jsx)(r.th,{children:"Matched views (in precendence)"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/home"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Home"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/product"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Product"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"/product/1"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"ProductInfo"}),", ",(0,s.jsx)(r.code,{children:"Product"})]})]})]})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["When multiple views match, views registered with more parameters takes precedence. See ",(0,s.jsx)(r.a,{href:"/docs/router/react/render-view",children:"Render views"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{children:"Regex and callback"}),"\n",(0,s.jsx)(r.p,{children:"Dynamic data in routes can be matches using regex or callback."}),"\n",(0,s.jsxs)(r.p,{children:["For example, if ",(0,s.jsx)(r.code,{children:"ProductInfo"})," is registered with:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"registerView(() => import(\"./views/ProductInfo\"), {\r\n    view: 'product',\r\n    id:   /^\\d+$/\r\n});\n"})}),"\n",(0,s.jsxs)(r.p,{children:["then it will match ",(0,s.jsx)(r.code,{children:"/product/1"})," but not ",(0,s.jsx)(r.code,{children:"/product/foo"}),"."]}),"\n",(0,s.jsx)(r.h2,{children:"Exclusion by null"}),"\n",(0,s.jsxs)(r.p,{children:["To match a route without a certain parameter, use ",(0,s.jsx)(r.code,{children:"null"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["For example, if ",(0,s.jsx)(r.code,{children:"Product"})," is registered with:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"registerView(() => \"./views/Product\", {\r\n    view: 'product',\r\n    id:   null\r\n});\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Then it will not match ",(0,s.jsx)(r.code,{children:"/product/1"})," since resolved route parameter ",(0,s.jsx)(r.code,{children:"id"})," is not empty."]}),"\n",(0,s.jsxs)(r.h2,{children:["Directly register component without import ",(0,s.jsx)(r.del,{children:"v0.3.1"})]}),"\n",(0,s.jsx)(r.p,{children:"It is possible to register components without async import:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-tsx",children:"function MyViewImpl() {\r\n    return (<div>...</div>);\r\n}\r\n\r\nexport const MyView = registerView(MyViewImpl, { view: 'foo' });\n"})})]})}r.default=function(e={}){const{wrapper:r}=e.components||{};return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);