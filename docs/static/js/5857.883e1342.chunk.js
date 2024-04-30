"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[5857],{5857:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t=r(2556),o=r(4165),c=r(885),i=r(4519),s=r(9239),a=r(7749),l=function(n,e,r,t){return new(r||(r=Promise))((function(o,c){function i(n){try{a(t.next(n))}catch(e){c(e)}}function s(n){try{a(t.throw(n))}catch(e){c(e)}}function a(n){var e;n.done?o(n.value):(e=n.value,e instanceof r?e:new r((function(n){n(e)}))).then(i,s)}a((t=t.apply(n,e||[])).next())}))};function d(){var n=this,e=(0,i.useRef)(null),r=(0,i.useState)(!1),d=(0,c.Z)(r,2),u=d[0],h=d[1];return(0,i.useEffect)((function(){(0,s.wv)(e.current,h)}),[]),(0,t.jsx)("div",Object.assign({ref:e},{children:(0,t.jsx)("button",Object.assign({disabled:u,onClick:function(e){(0,s.eH)(e.currentTarget,(function(){return l(n,void 0,void 0,(0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.gw)(3e3);case 2:case"end":return n.stop()}}),n)})))}))}},{children:u?"Wait 3 seconds":"Start"}))}))}var u='import { useEffect, useRef, useState } from "react";\r\nimport { runAsync, subscribeAsync } from "zeta-dom/domLock";\r\nimport { delay } from "zeta-dom/util";\r\n\r\nfunction doLongOperation() {\r\n    return delay(3000);\r\n}\r\n\r\nexport default function Component() {\r\n    const container = useRef<HTMLDivElement>(null);\r\n    const [loading, setLoading] = useState(false);\r\n\r\n    useEffect(() => {\r\n        // listen operations registered by\r\n        // runAsync or notifyAsync under this element\r\n        subscribeAsync(container.current!, setLoading);\r\n    }, []);\r\n\r\n    return (\r\n        <div ref={container}>\r\n            <button\r\n                disabled={loading}\r\n                onClick={(e) => {\r\n                    runAsync(e.currentTarget, async () => {\r\n                        await doLongOperation();\r\n                    });\r\n                }}>\r\n                {loading ? \'Wait 3 seconds\' : \'Start\'}\r\n            </button>\r\n        </div>\r\n    );\r\n}\r\n',h=r(6670);function f(){return(0,t.jsx)(h.iV,{component:d,source:{tsx:u}})}var p=r(5776),x=r(9551),m=function(n,e,r,t){return new(r||(r=Promise))((function(o,c){function i(n){try{a(t.next(n))}catch(e){c(e)}}function s(n){try{a(t.throw(n))}catch(e){c(e)}}function a(n){var e;n.done?o(n.value):(e=n.value,e instanceof r?e:new r((function(n){n(e)}))).then(i,s)}a((t=t.apply(n,e||[])).next())}))};function j(n){return m(this,void 0,void 0,(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.addEventListener("abort",(function(){(0,x.qR)("Operation cancelled")})),e.next=3,(0,a.gw)(3e3);case 3:n.aborted||(0,x.qR)("Operation completed");case 4:case"end":return e.stop()}}),e)})))}function g(){var n=(0,i.useRef)(null),e=(0,i.useState)(!1),r=(0,c.Z)(e,2),a=r[0],l=r[1];return(0,i.useEffect)((function(){(0,s.wv)(n.current,l)}),[]),(0,t.jsx)("div",Object.assign({ref:n},{children:a?(0,t.jsx)("button",Object.assign({onClick:function(){(0,s.Ei)(n.current)}},{children:"Cancel"})):(0,t.jsx)("button",Object.assign({onClick:function(n){var e=this,r=(0,s.eH)(n.currentTarget,(function(n){var r=n.signal;return m(e,void 0,void 0,(0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j(r);case 2:case"end":return n.stop()}}),n)})))}));(0,s.dR)(n.currentTarget,r,(function(){return m(e,void 0,void 0,(0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,x.BB)("Confirm to cancel operation?");case 2:if(n.sent){n.next=4;break}throw"";case 4:case"end":return n.stop()}}),n)})))}))}},{children:"Start"}))}))}var b="import { useEffect, useRef, useState } from \"react\";\r\nimport { openAlert, openConfirm } from \"src/components/main\";\r\nimport { cancelLock, lock, runAsync, subscribeAsync } from \"zeta-dom/domLock\";\r\nimport { delay } from \"zeta-dom/util\";\r\n\r\nasync function doLongOperation(signal: AbortSignal) {\r\n    signal.addEventListener('abort', () => {\r\n        openAlert('Operation cancelled');\r\n    });\r\n    await delay(3000);\r\n    if (!signal.aborted) {\r\n        openAlert('Operation completed');\r\n    }\r\n}\r\n\r\nexport default function Component() {\r\n    const container = useRef<HTMLDivElement>(null);\r\n    const [loading, setLoading] = useState(false);\r\n\r\n    useEffect(() => {\r\n        subscribeAsync(container.current!, setLoading);\r\n    }, []);\r\n\r\n    return (\r\n        <div ref={container}>\r\n            {loading ?\r\n                <button onClick={cancel}>Cancel</button> :\r\n                <button onClick={start}>Start</button>}\r\n        </div>\r\n    );\r\n\r\n    function start(e: React.UIEvent<HTMLElement>) {\r\n        const promise = runAsync(e.currentTarget, async ({ signal }) => {\r\n            await doLongOperation(signal);\r\n        });\r\n\r\n        // acquire lock so that cancellation request can be handled\r\n        lock(e.currentTarget, promise, async () => {\r\n            // return normally to accept cancellation or\r\n            // throw to reject cancellation\r\n            if (!await openConfirm('Confirm to cancel operation?')) {\r\n                throw '';\r\n            }\r\n        });\r\n    }\r\n\r\n    function cancel() {\r\n        // request cancellation of operations registered by\r\n        // runAsync or notifyAsync under this element\r\n        cancelLock(container.current!);\r\n    }\r\n}\r\n";function y(){return(0,t.jsx)(h.iV,{component:g,source:{tsx:b}})}var v=r(3967),w=function(n,e,r,t){return new(r||(r=Promise))((function(o,c){function i(n){try{a(t.next(n))}catch(e){c(e)}}function s(n){try{a(t.throw(n))}catch(e){c(e)}}function a(n){var e;n.done?o(n.value):(e=n.value,e instanceof r?e:new r((function(n){n(e)}))).then(i,s)}a((t=t.apply(n,e||[])).next())}))};function k(){return w(this,void 0,void 0,(0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.gw)(1e3);case 2:throw new Error("Error occurred");case 3:case"end":return n.stop()}}),n)})))}function A(n){var e=this,r=n.console,a=(0,i.useRef)(null),l=(0,i.useState)(!1),d=(0,c.Z)(l,2),u=d[0],h=d[1];return(0,i.useEffect)((function(){return(0,s.wv)(a.current,h),v.ZP.on(a.current,"error",(function(n){r.error(n.error),n.handled()}))}),[]),(0,t.jsx)("div",Object.assign({ref:a},{children:(0,t.jsx)("button",Object.assign({disabled:u,onClick:function(n){(0,s.eH)(n.currentTarget,(function(){return w(e,void 0,void 0,(0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k();case 2:case"end":return n.stop()}}),n)})))}))}},{children:"Start"}))}))}var L='import { useEffect, useRef, useState } from "react";\r\nimport { DemoComponentProps } from "src/components/docs";\r\nimport dom from "zeta-dom/dom";\r\nimport { runAsync, subscribeAsync } from "zeta-dom/domLock";\r\nimport { delay } from "zeta-dom/util";\r\n\r\nasync function doLongOperation() {\r\n    await delay(1000);\r\n    throw new Error(\'Error occurred\');\r\n}\r\n\r\nexport default function Component({ console }: DemoComponentProps) {\r\n    const container = useRef<HTMLDivElement>(null);\r\n    const [loading, setLoading] = useState(false);\r\n\r\n    useEffect(() => {\r\n        subscribeAsync(container.current!, setLoading);\r\n        // handle error thrown from operations under container element\r\n        return dom.on(container.current!, \'error\', e => {\r\n            console.error(e.error);\r\n            e.handled();\r\n        });\r\n    }, []);\r\n\r\n    return (\r\n        <div ref={container}>\r\n            <button\r\n                disabled={loading}\r\n                onClick={(e) => {\r\n                    runAsync(e.currentTarget, async () => {\r\n                        await doLongOperation();\r\n                    });\r\n                }}>\r\n                Start\r\n            </button>\r\n        </div>\r\n    );\r\n}\r\n';function C(){return(0,t.jsx)(h.iV,{component:A,source:{tsx:L},console:!0})}function O(n){const e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li"},n.components),{Module:r}=e;return r||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"zeta-dom/domLock"}),"\n",(0,t.jsx)(e.h1,{children:"Handling user actions"}),"\n",(0,t.jsxs)(e.p,{children:["Below is an example showing how to register and listen asynchronous operations with the\r\nuse of ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"runAsync"})})," and ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"subscribeAsync"})}),"."]}),"\n",(0,t.jsx)(f,{}),"\n",(0,t.jsxs)(e.p,{children:["For older version where ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"runAsync"})})," is unavailable, use ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"notifyAsync"})}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"const promise = doLongOperation();\r\nnotifyAsync(element, promise);\n"})}),"\n",(0,t.jsx)(e.h2,{children:"Wrapper for event handler"}),"\n",(0,t.jsxs)(e.p,{children:["For common application like clicking button, the ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"handleUserAction"})})," function can be used."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"function Button(props) {\r\n    return (\r\n        <button {...props} onClick={handleUserAction(props.onClick)} />\r\n    );\r\n}\n"})}),"\n",(0,t.jsx)(e.h2,{children:"Background operations"}),"\n",(0,t.jsxs)(e.p,{children:["In the same way background operations can be notified. However when using ",(0,t.jsx)(e.code,{children:"zeta-dom-react"}),", background\r\noperation can be better handled by ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"useAsync"})})," hook."]}),"\n",(0,t.jsx)(e.h2,{children:"Loading effect"}),"\n",(0,t.jsx)(p.Z,{}),"\n",(0,t.jsx)(e.h2,{children:"Cancellation"}),"\n",(0,t.jsxs)(e.p,{children:["Cancellation can be requested by calling ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"cancelLock"})})," is called on target element or any ancestors."]}),"\n",(0,t.jsx)(e.p,{children:"For example, when using Brew's router, cancellation is requested when user is trying to navigate\r\nwithin the single-paged app."}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["By default, operation registered by ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"notifyAsync"})})," or ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"runAsync"})})," is consider cancellable without confirmation."]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"runAsync(currentTarget, ({ signal }) => {\r\n    // pass AbortSignal object to native API such as fetch\r\n    return fetch('...', { signal, /* ... */ });\r\n});\n"})}),"\n",(0,t.jsx)(e.p,{children:"For older version, supply callback as thrid argument as follow."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"const promise = doLongOperation();\r\nnotifyAsync(element, promise, () => {\r\n    // callback will be called when cancellation is accepted\r\n    /* ... */\r\n});\n"})}),"\n",(0,t.jsx)(e.h2,{children:"Preventing cancellation"}),"\n",(0,t.jsxs)(e.p,{children:["To prevent cancellation at all, use ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"lock"})})," without callbacks:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"const promise = doLongOperation();\r\nlock(element, promise); // locked until resolved\n"})}),"\n",(0,t.jsx)(e.p,{children:"or"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"const unlock = lock(element);\r\ndoLongOperation().then(() => {\r\n    unlock();\r\n});\n"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"Note that locks on an element will be forcibly cancelled if the element is detached."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{children:"Asking confirmation for cancellation"}),"\n",(0,t.jsxs)(e.p,{children:["To prompt user for cancellation, supply callback to ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"lock"})}),":"]}),"\n",(0,t.jsx)(y,{}),"\n",(0,t.jsx)(e.h2,{children:"Error handling"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"runAsync"})})," and ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"notifyAsync"})})," will emit ",(0,t.jsx)(e.code,{children:"error"})," event when the promise has rejected."]}),"\n",(0,t.jsx)(C,{}),"\n",(0,t.jsxs)(e.p,{children:["When using ",(0,t.jsx)(e.code,{children:"zeta-dom-react"}),", more sophisticated handling can be done, see ",(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"useErrorHandler"})}),"."]}),"\n",(0,t.jsx)(e.h2,{children:"See also"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/dom/prevent-leave",children:"Preventing from leaving"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"cancelLock"})})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"notifyAsync"})})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"runAsync"})})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"useErrorHandler"})})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:":",children:(0,t.jsx)(e.code,{children:"LoadingStateMixin"})})}),"\n"]})]})}var E=function(n={}){const{wrapper:e}=n.components||{};return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(O,n)})):O(n)}},5776:function(n,e,r){r.d(e,{Z:function(){return p}});var t=r(2556),o=r(2527),c=r(8252),i=r(1266),s=r(9239),a=r(7749);function l(){return(0,a.gw)(3e3)}function d(){var n=(0,o.vS)(),e=(0,i.hy)(n,"loading");return(0,t.jsx)("div",Object.assign({id:"demo-wujq5"},c.Z.use(n),{children:e?(0,t.jsx)("button",Object.assign({onClick:function(n){return(0,s.Ei)(n.currentTarget.parentElement)}},{children:"Cancel"})):(0,t.jsx)("button",Object.assign({onClick:function(n){return(0,s.eH)(n.currentTarget,l)}},{children:"Start"}))}))}var u='import { Mixin, useLoadingStateMixin } from "brew-js-react";\r\nimport { useObservableProperty } from "zeta-dom-react";\r\nimport { cancelLock, runAsync } from "zeta-dom/domLock";\r\nimport { delay } from "zeta-dom/util";\r\n\r\nfunction doLongOperation() {\r\n    return delay(3000);\r\n}\r\n\r\nexport default function Component() {\r\n    const loadingState = useLoadingStateMixin();\r\n    const loading = useObservableProperty(loadingState, \'loading\');\r\n    return (\r\n        <div id="demo-wujq5" {...Mixin.use(loadingState)}>\r\n            {loading ?\r\n                <button onClick={e => cancelLock(e.currentTarget.parentElement!)}>\r\n                    Cancel\r\n                </button> :\r\n                <button onClick={e => runAsync(e.currentTarget, doLongOperation)}>\r\n                    Start\r\n                </button>}\r\n        </div>\r\n    );\r\n}\r\n',h="#demo-wujq5.loading:before {\r\n    position: absolute;\r\n    z-index: 1;\r\n    content: '';\r\n    top: 0;\r\n    left: 0;\r\n    border-bottom: 4px solid var(--color-highlight);\r\n    animation: loading-bar 1000s;\r\n}\r\n\r\n#demo-wujq5.loading-complete:before {\r\n    animation: none;\r\n    transition: right 0.2s, opacity 0.2s ease-out;\r\n    right: 0;\r\n    opacity: 0;\r\n}\r\n",f=r(6670);function p(){return(0,t.jsx)(f.iV,{component:d,source:{tsx:u,css:h},title:"Loading effect using React mixin"})}}}]);