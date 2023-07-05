"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[3203],{3203:function(e,n,r){r.r(n);var t=r(2556);function s(e){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"brew-js-react"}),"\n",(0,t.jsx)(n.h1,{children:"Translate HTML content"}),"\n",(0,t.jsxs)(n.p,{children:["To render translated HTML content, use ",(0,t.jsx)(n.code,{children:"translate.html"})," or ",(0,t.jsx)(n.code,{children:"t.html"})," from ",(0,t.jsx)(n.code,{children:"useTranslation"})," hook."]}),"\n",(0,t.jsxs)(n.p,{children:["It returns the formatted HTML in the shape that ",(0,t.jsx)(n.code,{children:"dangerouslySetInnerHTML"})," requires."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"/// Component.tsx\r\nimport { useTranslation } from \"./i18n\";\r\n\r\nfunction Component() {\r\n    const { t } = useTranslation('prefix');\r\n    return (\r\n        <div dangerouslySetInnerHTML={t.html('key')}></div>\r\n    );\r\n}\r\n\r\n/// i18n.ts\r\nconst resources = {\r\n    en: {\r\n        prefix: { key: '<b>bold text</b>' }\r\n    }\r\n};\r\n\r\nconst { translate, useTranslation } = makeTranslation(resources, 'en');\n"})}),"\n",(0,t.jsx)(n.p,{children:"would render:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<div><b>bold text</b></div>\n"})})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)}}}]);
//# sourceMappingURL=3203.94deea85.chunk.js.map