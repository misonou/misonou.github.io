(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[9334],{9334:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return x}});var t=r(2556),o=r(8252),i=r(7112),a=r(4519),c=r(6502),s=r(9239),u=r(8180),l=r(7749),d=function(){return d=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},d.apply(this,arguments)},f=function(n,e,r,t){return new(r||(r=Promise))((function(o,i){function a(n){try{s(t.next(n))}catch(e){i(e)}}function c(n){try{s(t.throw(n))}catch(e){i(e)}}function s(n){var e;n.done?o(n.value):(e=n.value,e instanceof r?e:new r((function(n){n(e)}))).then(a,c)}s((t=t.apply(n,e||[])).next())}))},p=function(n,e){var r,t,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,t=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(c){i=[6,c],t=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function m(){var n=(0,a.useRef)(null);return(0,a.useEffect)((function(){(0,s.wv)(n.current)}),[]),(0,t.jsxs)("div",d({id:"app-example-notify-async"},o.Z.use((0,c.gz)(n,(0,c.Ht)({asyncStart:e,asyncEnd:e}))),{children:[(0,t.jsx)("button",d({onClick:function(n){var e=this,t=n.currentTarget,o=(0,s.eH)(t,(function(n){var t=n.signal;return f(e,void 0,void 0,(function(){return p(this,(function(n){switch(n.label){case 0:return t.addEventListener("abort",(function(){return r("Aborted")})),[4,(0,l.gw)(3e4)];case 1:return n.sent(),[2]}}))}))}));(0,s.dR)(t,o,(function(){return r("Cancel?")}))}},{children:"Begin"})),(0,t.jsx)("button",d({onClick:function(){(0,s.Ei)(n.current)}},{children:"Cancel"}))]}));function e(e){(0,u.w)(n.current,"loading","asyncStart"===e.eventName)}function r(n){return(0,i.v)({className:"app-dialog app-demo-view",onRender:function(e){var r=e.closeDialog;return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:n}),(0,t.jsx)("button",d({type:"button",onClick:r},{children:"Close"}))]})}}).open()}}var h='import { Mixin, createDialog, useLoadingStateMixin } from "brew-js-react";\r\nimport { useEffect, useRef } from "react";\r\nimport { combineRef, domEventRef } from "zeta-dom-react";\r\nimport { cancelLock, lock, runAsync, subscribeAsync } from "zeta-dom/domLock";\r\nimport { setClass } from "zeta-dom/domUtil";\r\nimport { delay } from "zeta-dom/util";\r\n\r\nexport default function Component() {\r\n    const container = useRef<HTMLDivElement | null>(null);\r\n\r\n    useEffect(() => {\r\n        subscribeAsync(container.current!);\r\n    }, []);\r\n\r\n    return (\r\n        <div id="app-example-notify-async" {...Mixin.use(combineRef(container, domEventRef({ asyncStart: asyncStateChange, asyncEnd: asyncStateChange })))}>\r\n            <button onClick={begin}>Begin</button>\r\n            <button onClick={cancel}>Cancel</button>\r\n        </div>\r\n    );\r\n\r\n    function begin(e: React.UIEvent<HTMLElement>) {\r\n        const currentTarget = e.currentTarget;\r\n        const promise = runAsync(currentTarget, async ({ signal }) => {\r\n            signal.addEventListener(\'abort\', () => openDialog(\'Aborted\'));\r\n            await delay(30000);\r\n        });\r\n        lock(currentTarget, promise, () => openDialog(\'Cancel?\'));\r\n    }\r\n\r\n    function cancel() {\r\n        cancelLock(container.current!);\r\n    }\r\n\r\n    function asyncStateChange(e: Zeta.ZetaEvent) {\r\n        setClass(container.current!, \'loading\', e.eventName === \'asyncStart\');\r\n    }\r\n\r\n    function openDialog(message: string) {\r\n        const dialog = createDialog({\r\n            className: \'app-dialog app-demo-view\',\r\n            onRender({ closeDialog }) {\r\n                return (\r\n                    <div>\r\n                        <p>{message}</p>\r\n                        <button type="button" onClick={closeDialog}>Close</button>\r\n                    </div>\r\n                );\r\n            }\r\n        });\r\n        return dialog.open();\r\n    }\r\n}\r\n',b="#app-example-notify-async {\r\n    position: relative;\r\n}\r\n\r\n#app-example-notify-async.loading:before {\r\n    position: absolute;\r\n    z-index: 1;\r\n    content: '';\r\n    bottom: 0;\r\n    left: 0;\r\n    animation: loading-bar 1000s;\r\n    border-bottom: 4px solid var(--color-highlight);\r\n    border-radius: 0 0 var(--border-radius) var(--border-radius);\r\n    transition: right 0.2s;\r\n}\r\n",v=r(5337);function g(){return(0,t.jsx)(v.iV,{component:m,source:{tsx:h,css:b}})}function y(n){const e=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",code:"code",h2:"h2",ul:"ul",li:"li"},n.components),{Module:r}=e;return r||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"zeta-dom"}),"\n",(0,t.jsx)(e.h1,{children:"Handling user actions"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["Starting from v0.5, it is recommended to use ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"runAsync"})})]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{children:"Reporting async operations in progress"}),"\n",(0,t.jsx)(g,{}),"\n",(0,t.jsx)(e.h2,{children:"Error reporting"}),"\n",(0,t.jsx)(e.h2,{children:"See also"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/dom/prevent-leave",children:"Preventing from leaving"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"useErrorHandler"})})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"useLoadingStateMixin"})})}),"\n"]})]})}var x=function(n={}){const{wrapper:e}=n.components||{};return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(y,n)})):y(n)}},3322:function(n,e,r){var t,o=r(4453);t=o.createRoot?o:{createRoot:function(n,e){return{render:function(e){o.render(e,n)},unmount:function(){o.unmountComponentAtNode(n)}}},hydrateRoot:function(n,e,r){return o.hydrate(e,n),t.createRoot(n,r)}},n.exports=t},2327:function(n,e,r){var t;try{t=r(9402)}catch(o){t=r(3322)}n.exports=t},7112:function(n,e,r){"use strict";r.d(e,{v:function(){return l}});var t=r(4519),o=(r(4453),r(2327)),i=r(7749),a=r(8180),c=r(754),s=r(9239),u=r(8532);function l(n){var e,r=document.createElement("div"),l=o.createRoot(r),d=u.aS.bind(0,r);return c.ZP.on(r,{flyoutshow:function(){(n.onOpen||i.ZT)(r)},flyouthide:function(){e=null,(0,a.ZF)(r),(n.onClose||i.ZT)(r),n.onRender&&l.unmount()},asyncStart:function(){(0,a.w)(r,"loading",!0)},asyncEnd:function(){(0,a.w)(r,"loading",!1)}}),(0,s.wv)(r,!0),{root:r,close:d,open:function(){if(e)return e;if(r.className=n.className||"",document.body.appendChild(r),c.ZP.retainFocus(c.ZP.activeElement,r),n.modal&&r.setAttribute("is-modal",""),n.onRender){var o=(0,i.l7)({},n,{closeDialog:n.onCommit?function(e){return(0,s.eH)(c.ZP.activeElement,n.onCommit.bind(this,e)).then(d)}:d}),a=(0,t.createElement)(n.onRender,o);n.wrapper&&(a=(0,t.createElement)(n.wrapper,o,a)),l.render(a)}return e=(0,i.DB)().then((function(){return(0,u.zQ)(r,null,(0,i.ei)(n,["focus"]))})),n.preventLeave?(0,s.rf)(r,e):n.preventNavigation&&(0,s.dR)(r,e),e}}}}}]);