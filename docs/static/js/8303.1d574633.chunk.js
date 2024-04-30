"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[8303],{8303:function(e,n,r){r.r(n),r.d(n,{default:function(){return u}});var t=r(2556),o=r(4519),s=r(2192),i=r(3967);function c(){var e=(0,o.useRef)(null);return(0,o.useEffect)((function(){(0,i.dw)(e.current)}),[]),(0,t.jsxs)("div",Object.assign({id:"demo-tabroot",ref:e},{children:[(0,t.jsxs)("p",{children:["Focus one of the text boxes and then press ",(0,t.jsx)("kbd",{children:"Tab"})," or ",(0,t.jsx)("kbd",{children:"Shift"}),"+",(0,t.jsx)("kbd",{children:"Tab"}),"."]}),(0,t.jsx)(s.oi,{placeholder:"Input..."}),(0,t.jsx)(s.oi,{placeholder:"Input..."}),(0,t.jsx)(s.oi,{placeholder:"Input..."})]}))}var l='import { useEffect, useRef } from "react";\r\nimport { TextInput } from "src/components/controls";\r\nimport { setTabRoot } from "zeta-dom/dom";\r\n\r\nexport default function Component() {\r\n    const container = useRef<HTMLDivElement>(null);\r\n\r\n    useEffect(() => {\r\n        setTabRoot(container.current!);\r\n    }, []);\r\n\r\n    return (\r\n        <div id="demo-tabroot" ref={container}>\r\n            <p>\r\n                Focus one of the text boxes and then press <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd>.\r\n            </p>\r\n            <TextInput placeholder="Input..." />\r\n            <TextInput placeholder="Input..." />\r\n            <TextInput placeholder="Input..." />\r\n        </div>\r\n    );\r\n}\r\n',d=r(6670);function a(){return(0,t.jsx)(d.iV,{component:c,source:{tsx:l}})}function h(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",blockquote:"blockquote",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"zeta-dom/dom"}),"\n",(0,t.jsx)(n.h1,{children:"Tab-focus container"}),"\n",(0,t.jsxs)(n.p,{children:["By default, all focusable elements in the document can be focused sequentially by\r\npressing ",(0,t.jsx)("kbd",{children:"Tab"})," or ",(0,t.jsx)("kbd",{children:"Shift"}),"+",(0,t.jsx)("kbd",{children:"Tab"})," keys."]}),"\n",(0,t.jsxs)(n.p,{children:["However it is somtimes desirable to limit such behavior so only focusable elements\r\nwithin a component (e.g. dialog or form) are reachable, which is achievable by ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"setTabRoot"})}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"setTabRoot"})})," will not focus element within container."]}),"\n"]}),"\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(n.h2,{children:"Working with brew-js"}),"\n",(0,t.jsxs)(n.h3,{children:[(0,t.jsx)(n.code,{children:"tab-root"})," attribute"]}),"\n",(0,t.jsxs)(n.p,{children:["When using ",(0,t.jsx)(n.code,{children:"brew-js"}),", any element with ",(0,t.jsx)(n.code,{children:"tab-root"})," attribute is automatically set as a tab-focus container."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<div tab-root></dib>\n"})}),"\n",(0,t.jsx)(n.h3,{children:"Flyouts"}),"\n",(0,t.jsxs)(n.p,{children:["For flyouts, by default it is a tab-focus container unless ",(0,t.jsx)(n.code,{children:"tab-through"})," attribute:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<div is-flyout tab-through></div>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["or the ",(0,t.jsx)(n.code,{children:"tabThrough"})," option is present:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"openFlyout('#flyout', null, { tabThrough: true });\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Working with brew-js-react"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Mixin.tabRoot"})," mixin is introduced in v0.5.3."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"<div {...Mixin.use(Mixin.tabRoot)}></div>\n"})}),"\n",(0,t.jsx)(n.h2,{children:"See also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"setTabRoot"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"unsetTabRoot"})})}),"\n"]})]})}var u=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}}}]);