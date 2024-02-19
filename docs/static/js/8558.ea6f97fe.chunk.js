"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[8558],{8558:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var o=r(2556),l=r(4519),s=r(2192),t=r(3967),c=function(){return c=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++)for(var l in n=arguments[r])Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);return e},c.apply(this,arguments)};function a(e){var n=e.console,r=(0,l.useRef)(null),a=(0,l.useState)(!1),i=a[0],d=a[1];return(0,l.useEffect)((function(){return t.ZP.on("modalchange",(function(e){n.log(e.modalElement)}))}),[]),(0,l.useEffect)((function(){var e=r.current.closest(".app-demo");i?(0,t.cf)(e):(0,t.mG)(e)}),[i]),(0,o.jsx)("div",c({ref:r},{children:(0,o.jsx)(s.ZD,{label:"Modal",checked:i,onChange:d})}))}var i='import { useEffect, useRef, useState } from "react";\r\nimport { Toggle } from "src/components/controls";\r\nimport { DemoComponentProps } from "src/components/docs";\r\nimport dom, { releaseModal, setModal } from "zeta-dom/dom";\r\n\r\nexport default function Component({ console }: DemoComponentProps) {\r\n    const ref = useRef<HTMLDivElement>(null);\r\n    const [enableModal, setEnableModal] = useState(false);\r\n\r\n    useEffect(() => {\r\n        return dom.on(\'modalchange\', e => {\r\n            console.log(e.modalElement);\r\n        });\r\n    }, []);\r\n\r\n    useEffect(() => {\r\n        const container = ref.current!.closest(\'.app-demo\')!;\r\n        if (enableModal) {\r\n            setModal(container);\r\n        } else {\r\n            releaseModal(container);\r\n        }\r\n    }, [enableModal]);\r\n\r\n    return (\r\n        <div ref={ref}>\r\n            <Toggle label="Modal" checked={enableModal} onChange={setEnableModal} />\r\n        </div>\r\n    );\r\n}\r\n',d=r(8137);function h(){return(0,o.jsx)(d.iV,{component:a,source:{tsx:i},console:!0})}function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",a:"a",ul:"ul",li:"li"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{name:"zeta-dom/dom"}),"\n",(0,o.jsx)(n.h1,{children:"Modal elements"}),"\n",(0,o.jsx)(h,{}),"\n",(0,o.jsx)(n.h2,{children:"Working with brew-js"}),"\n",(0,o.jsxs)(n.p,{children:["For flyouts, it will be modal if ",(0,o.jsx)(n.code,{children:"is-modal"})," attribute:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<div is-flyout is-modal></div>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["or the ",(0,o.jsx)(n.code,{children:"modal"})," option is present:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"openFlyout('#flyout', null, { modal: true });\n"})}),"\n",(0,o.jsx)(n.h2,{children:"Working with brew-js-react"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"FlyoutMixin"})})," and ",(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"createDialog"})})," also supports modal mode."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"useFlyoutMixin({\r\n    modal: true,\r\n    /* ... */\r\n});\r\ncreateDialog({\r\n    modal: true,\r\n    /* ... */\r\n});\n"})}),"\n",(0,o.jsx)(n.h2,{children:"See also"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"createDialog"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"openFlyout"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"releaseModal"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"setModal"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"FlyoutMixin"})})}),"\n"]})]})}var f=function(e={}){const{wrapper:n}=e.components||{};return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(u,e)})):u(e)}}}]);