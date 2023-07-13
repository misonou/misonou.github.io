(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[3578],{3578:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Z}});var t=r(2556),o=r(4519),i=(r(4453),r(2327)),a=r(7749),l=r(8180),c=r(754),s=r(9239),u=r(2811);function d(n){var e,r=document.createElement("div"),t=i.createRoot(r),d=u.aS.bind(0,r);return c.ZP.on(r,"flyouthide",(function(){(0,l.ZF)(r),(n.onClose||a.ZT)(r),n.onRender&&t.unmount()})),{root:r,close:d,open:function(){if(e)return e;if(r.className=n.className||"",document.body.appendChild(r),c.ZP.retainFocus(c.ZP.activeElement,r),n.modal&&(r.setAttribute("is-modal",""),c.ZP.setModal(r)),n.onRender){var i=(0,a.l7)({},n,{closeDialog:function(e){var r=(0,a.gj)(n.onCommit||a.Zk)(e);(0,a.ZD)((0,s.dR)(c.ZP.activeElement,r)),r.then(d,a.ZT)}}),l=(0,o.createElement)(n.onRender,i);n.wrapper&&(l=(0,o.createElement)(n.wrapper,i,l)),t.render(l),(0,a.xS)((function(){c.ZP.focus(r)}))}return e=(0,u.zQ)(r),n.preventLeave?(0,s.rf)(r,e):n.preventNavigation&&(0,s.dR)(r,e),(0,a.Bx)(e,(function(){e=null})),(n.onOpen||a.ZT)(r),e}}}var p=function(){return p=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},p.apply(this,arguments)};function h(){d({className:"app-dialog",onRender:function(n){var e=n.closeDialog;return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"This is my content"}),(0,t.jsx)("button",p({type:"button",onClick:function(){return e()}},{children:"Close"}))]})}}).open()}function f(){return(0,t.jsx)("button",p({onClick:h},{children:"Open dialog"}))}var x='import { createDialog } from "brew-js-react";\r\n\r\nfunction openDialog() {\r\n    const dialog = createDialog({\r\n        className: \'app-dialog\',\r\n        onRender({ closeDialog }) {\r\n            return (\r\n                <div>\r\n                    <p>This is my content</p>\r\n                    <button type="button" onClick={() => closeDialog()}>Close</button>\r\n                </div>\r\n            );\r\n        }\r\n    });\r\n    dialog.open();\r\n}\r\n\r\nexport default function Component() {\r\n    return (\r\n        <button onClick={openDialog}>Open dialog</button>\r\n    );\r\n}\r\n',j=".app-dialog {\r\n    position: fixed;\r\n    display: flex;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 1000;\r\n    background-color: #0002;\r\n    align-items: center;\r\n    justify-content: center;\r\n    pointer-events: none;\r\n    opacity: 0;\r\n    transition: opacity 0.2s;\r\n}\r\n\r\n.app-dialog[is-modal] {\r\n    pointer-events: all;\r\n}\r\n\r\n.app-dialog.open {\r\n    opacity: 1;\r\n}\r\n\r\n.app-dialog.open.closing {\r\n    opacity: 0;\r\n}\r\n\r\n.app-dialog > div {\r\n    padding: 1em;\r\n    background-color: var(--color-background);\r\n    border-radius: var(--border-radius);\r\n    box-shadow: var(--overlay-box-shadow);\r\n    pointer-events: all;\r\n}\r\n",g=r(5522);function m(){return(0,t.jsx)(g.iV,{component:f,source:{tsx:x,css:j}})}var v=r(6502),b=function(){return b=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},b.apply(this,arguments)},y=function(n,e,r,t){return new(r||(r=Promise))((function(o,i){function a(n){try{c(t.next(n))}catch(e){i(e)}}function l(n){try{c(t.throw(n))}catch(e){i(e)}}function c(n){var e;n.done?o(n.value):(e=n.value,e instanceof r?e:new r((function(n){n(e)}))).then(a,l)}c((t=t.apply(n,e||[])).next())}))},D=function(n,e){var r,t,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,t=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(l){i=[6,l],t=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};function C(){var n=this,e=(0,o.useState)(""),r=e[0],i=e[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["Entered value: ",r]}),(0,t.jsx)("button",b({onClick:function(){return y(n,void 0,void 0,(function(){var n;return D(this,(function(e){switch(e.label){case 0:return n=i,[4,d({className:"app-dialog",onRender:function(n){var e=n.closeDialog,r=(0,o.useRef)(null);return(0,t.jsxs)("div",b({ref:(0,v.Ht)("enter",(function(){return e(r.current.value)}))},{children:[(0,t.jsx)("p",{children:"Input value:"}),(0,t.jsx)("p",{children:(0,t.jsx)("input",{ref:r,type:"text"})}),(0,t.jsx)("button",b({type:"button",onClick:function(){return e(r.current.value)}},{children:"OK"}))]}))}}).open()];case 1:return n.apply(void 0,[e.sent()||""]),[2]}}))}))}},{children:"Open dialog"}))]})}var w='import { createDialog } from "brew-js-react";\r\nimport { useRef, useState } from "react";\r\nimport { domEventRef } from "zeta-dom-react";\r\n\r\nfunction openDialog() {\r\n    const dialog = createDialog({\r\n        className: \'app-dialog\',\r\n        onRender({ closeDialog }) {\r\n            const ref = useRef<HTMLInputElement>(null);\r\n            return (\r\n                <div ref={domEventRef(\'enter\', () => closeDialog(ref.current!.value))}>\r\n                    <p>Input value:</p>\r\n                    <p><input ref={ref} type="text" /></p>\r\n                    <button type="button" onClick={() => closeDialog(ref.current!.value)}>OK</button>\r\n                </div>\r\n            );\r\n        }\r\n    });\r\n    return dialog.open();\r\n}\r\n\r\nexport default function Component() {\r\n    const [value, setValue] = useState(\'\');\r\n    return (\r\n        <>\r\n            <p>Entered value: {value}</p>\r\n            <button onClick={async () => {\r\n                // return value passed to `closeDialog`\r\n                // if the dialog is forcibly closed, undefined is returned\r\n                setValue(await openDialog() || \'\');\r\n            }}>\r\n                Open dialog\r\n            </button>\r\n        </>\r\n    );\r\n}\r\n';function O(){return(0,t.jsx)(g.iV,{component:C,source:{tsx:w,css:j}})}var k=function(){return k=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},k.apply(this,arguments)};function R(){d({className:"app-dialog",modal:!0,onRender:function(n){var e=n.closeDialog;return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"This is my content"}),(0,t.jsx)("button",k({type:"button",onClick:function(){return e()}},{children:"Close"}))]})}}).open()}function N(){return(0,t.jsx)("button",k({onClick:R},{children:"Open dialog"}))}var S='import { createDialog } from "brew-js-react";\r\n\r\nfunction openDialog() {\r\n    const dialog = createDialog({\r\n        className: \'app-dialog\',\r\n        modal: true,\r\n        onRender({ closeDialog }) {\r\n            return (\r\n                <div>\r\n                    <p>This is my content</p>\r\n                    <button type="button" onClick={() => closeDialog()}>Close</button>\r\n                </div>\r\n            );\r\n        }\r\n    });\r\n    dialog.open();\r\n}\r\n\r\nexport default function Component() {\r\n    return (\r\n        <button onClick={openDialog}>Open dialog</button>\r\n    );\r\n}\r\n';function P(){return(0,t.jsx)(g.iV,{component:N,source:{tsx:S,css:j}})}function E(n){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",p:"p",a:"a"},n.components),{Module:r,MemberList:o,Badge:i}=e;return i||T("Badge",!1),i.Optional||T("Badge.Optional",!0),o||T("MemberList",!0),r||T("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"brew-js-react"}),"\n",(0,t.jsx)(e.h1,{children:"createDialog"}),"\n",(0,t.jsx)(e.h2,{children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"createDialog(options)\n"})}),"\n",(0,t.jsx)(e.h3,{children:"Parameters"}),"\n",(0,t.jsxs)("dl",{children:[(0,t.jsx)(e.h4,{children:(0,t.jsx)(e.code,{children:"options"})}),(0,t.jsxs)("dl",{children:[(0,t.jsxs)(e.h4,{children:[(0,t.jsx)(e.code,{children:"className"})," ",(0,t.jsx)(i.Optional,{})]}),(0,t.jsxs)(e.h4,{children:[(0,t.jsx)(e.code,{children:"modal"})," ",(0,t.jsx)(i.Optional,{})]}),(0,t.jsxs)(e.h4,{children:[(0,t.jsx)(e.code,{children:"onClose"})," ",(0,t.jsx)(i.Optional,{})]}),(0,t.jsxs)(e.h4,{children:[(0,t.jsx)(e.code,{children:"onCommit"})," ",(0,t.jsx)(i.Optional,{})]}),(0,t.jsxs)(e.h4,{children:[(0,t.jsx)(e.code,{children:"onOpen"})," ",(0,t.jsx)(i.Optional,{})]}),(0,t.jsx)(e.h4,{children:(0,t.jsx)(e.code,{children:"onRender"})}),(0,t.jsxs)(e.h4,{children:[(0,t.jsx)(e.code,{children:"preventLeave"})," ",(0,t.jsx)(i.Optional,{})]}),(0,t.jsxs)(e.h4,{children:[(0,t.jsx)(e.code,{children:"preventNavigation"})," ",(0,t.jsx)(i.Optional,{})]}),(0,t.jsxs)(e.h4,{children:[(0,t.jsx)(e.code,{children:"showCloseButton"})," ",(0,t.jsx)(i.Optional,{})]}),(0,t.jsxs)(e.h4,{children:[(0,t.jsx)(e.code,{children:"title"})," ",(0,t.jsx)(i.Optional,{})]}),(0,t.jsxs)(e.h4,{children:[(0,t.jsx)(e.code,{children:"wrapper"})," ",(0,t.jsx)(i.Optional,{})]})]})]}),"\n",(0,t.jsx)(e.h3,{children:"Return value"}),"\n",(0,t.jsxs)(e.p,{children:["A ",(0,t.jsx)(e.a,{href:"#s-dialogstate-interface",children:(0,t.jsx)(e.code,{children:"DialogState"})})," instance."]}),"\n",(0,t.jsx)(e.h2,{children:"Basic example"}),"\n",(0,t.jsx)(m,{}),"\n",(0,t.jsx)(e.h2,{children:"Sending return value"}),"\n",(0,t.jsx)(O,{}),"\n",(0,t.jsx)(e.h2,{children:"Modal dialog"}),"\n",(0,t.jsx)(P,{}),"\n",(0,t.jsx)(e.h2,{children:"Asynchronous action in dialog"}),"\n",(0,t.jsx)(e.p,{children:"It is common that asynchronous action, like request to server, is executed when user confirms in a prompt."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"const dialog = createDialog({\r\n    onCommit(value) {\r\n    }\r\n});\n"})}),"\n",(0,t.jsx)(e.h2,{children:"Snippets"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"export function createAlertDialog(props: AlertDialogProps) {\r\n    return createDialog({\r\n        modal: true,\r\n        preventNavigation: props.preventNavigation,\r\n        showCloseButton: false,\r\n        onCommit: props.onCommit,\r\n        onRender({ closeDialog }) {\r\n            return (\r\n                <DialogPromptContent title={props.title}>\r\n                    <Button label={props.confirmText} onClick={() => closeDialog(true)} />\r\n                </DialogPromptContent>\r\n            );\r\n        }\r\n    });\r\n}\n"})}),"\n",(0,t.jsx)(e.h2,{children:"DialogState interface"}),"\n",(0,t.jsx)(o,{i:"DialogState",ip:["root"],im:["open()","close()"]}),"\n",(0,t.jsx)(e.h3,{children:(0,t.jsx)(e.code,{children:"DialogState.root"})}),"\n",(0,t.jsx)(e.h3,{children:(0,t.jsx)(e.code,{children:"DialogState.open()"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"dialogState.open()\n"})}),"\n",(0,t.jsx)(e.h3,{children:(0,t.jsx)(e.code,{children:"DialogState.close()"})}),"\n",(0,t.jsxs)(e.p,{children:["Close the dialog, optionally sending value to the promise returned by ",(0,t.jsx)(e.code,{children:"DialogState.open()"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"dialogState.close()\r\ndialogState.close(returnValue)\n"})})]})}var Z=function(n={}){const{wrapper:e}=n.components||{};return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(E,n)})):E(n)};function T(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},2327:function(n,e,r){var t,o=r(4453);try{t=r(9402)}catch(i){t={createRoot:function(n,e){return{render:function(e){o.render(e,n)},unmount:function(){o.unmountComponentAtNode(n)}}},hydrateRoot:function(n,e,r){return o.hydrate(e,n),{render:function(e){o.render(e,n)},unmount:function(){o.unmountComponentAtNode(n)}}}}}n.exports=t}}]);