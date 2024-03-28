"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[28],{28:function(e,n,r){r.r(n);var s=r(2556);function t(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",h2:"h2"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{name:"brew-js-react"}),"\n",(0,s.jsx)(n.h1,{children:"Getting translations"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"useTranslation"})})," hook implicitly watches the ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"app.language"})})," property, so that the component is refreshed once ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"app.language"})})," has changed."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"/// Component.tsx\r\nimport { useTranslation } from \"./i18n\";\r\n\r\nfunction Component() {\r\n    const { t } = useTranslation('prefix');\r\n    return (\r\n        <div>{t('key')}</div>\r\n    );\r\n}\r\n\r\n/// i18n.ts\r\nconst resources = {\r\n    // first level are languages\r\n    en: {\r\n        // second level are prefixes\r\n        prefix: { key: 'Translation string' }\r\n    },\r\n    de: {\r\n        prefix: { key: '\xdcbersetzungszeichenfolge' }\r\n    }\r\n};\r\n\r\nconst { translate, useTranslation } = makeTranslation(resources, 'en');\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Outside React component"}),"\n",(0,s.jsxs)(n.p,{children:["For global context, use ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"translate"})})," returned from from ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"makeTranslation()"})})," to get translated string."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { translate } from "./i18n";\r\n\r\ntranslate(\'prefix.key\'); // -> "Translation string"\n'})})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);