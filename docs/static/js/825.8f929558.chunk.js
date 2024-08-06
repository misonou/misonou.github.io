"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[825],{825:function(e,n,s){s.r(n);var r=s(2556);function c(e){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",h4:"h4",a:"a",del:"del",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong"},e.components),{Module:s,MemberList:c,VersionTimeline:l,Badge:d}=n;return d||t("Badge",!1),d.Optional||t("Badge.Optional",!0),d.ReadOnly||t("Badge.ReadOnly",!0),d.Version||t("Badge.Version",!0),c||t("MemberList",!0),s||t("Module",!0),l||t("VersionTimeline",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{name:"zeta-dom-react"}),"\n",(0,r.jsx)(n.h1,{children:"useAsync"}),"\n",(0,r.jsx)(n.p,{children:"Gets asynchronous data and refreshes the components once data is ready or error has occurred."}),"\n",(0,r.jsxs)(n.p,{children:["By default, the callback is called immediately when component is mounted,\r\nwhile the ",(0,r.jsx)(n.code,{children:"state"})," object contains ",(0,r.jsx)(n.code,{children:"loading"})," and ",(0,r.jsx)(n.code,{children:"error"})," property for state control:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function Component(props) {\r\n    const [content, state] = useAsync(someAsync);\r\n    return (\r\n        state.loading ?\r\n            <Loading /> :\r\n        state.error ?\r\n            <Error /> :\r\n            <div>{content}</div>\r\n    );\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"useAsync(callback)\r\nuseAsync(callback, autoload)\r\nuseAsync(callback, deps)\r\nuseAsync(callback, deps, debounce)\n"})}),"\n",(0,r.jsx)(n.h3,{children:"Parameters"}),"\n",(0,r.jsxs)("dl",{children:[(0,r.jsx)(n.h4,{children:(0,r.jsx)(n.code,{children:"callback"})}),(0,r.jsx)(n.p,{children:"A callback that returns data asynchronously."}),(0,r.jsxs)(n.h4,{children:[(0,r.jsx)(n.code,{children:"autoload"})," ",(0,r.jsx)(d.Optional,{})]}),(0,r.jsxs)(n.p,{children:["Whether to autoload the data once the component is mounted, defaults to ",(0,r.jsx)(n.code,{children:"true"}),"."]}),(0,r.jsxs)(n.h4,{children:[(0,r.jsx)(n.code,{children:"deps"})," ",(0,r.jsx)(d.Optional,{})]}),(0,r.jsx)(n.p,{children:"Triggers reload if the values in the list change."}),(0,r.jsxs)(n.h4,{children:[(0,r.jsx)(n.code,{children:"debounce"})," ",(0,r.jsx)(d.Optional,{})," ",(0,r.jsx)(d.Version,{})]}),(0,r.jsx)(n.p,{children:"Debounce interval in milliseconds."})]}),"\n",(0,r.jsx)(n.h3,{children:"Return value"}),"\n",(0,r.jsxs)("dl",{children:[(0,r.jsx)(n.h4,{children:(0,r.jsx)(n.code,{children:"[value, state]"})}),(0,r.jsxs)(n.p,{children:["An array containing the data when available, and a state object, see ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"AsyncContentState"})}),"."]})]}),"\n",(0,r.jsx)(n.h2,{children:"Manual start or reload"}),"\n",(0,r.jsxs)(n.p,{children:["To suppress autoload, pass ",(0,r.jsx)(n.code,{children:"false"})," as the second argument and trigger loading by ",(0,r.jsx)(n.code,{children:"state.refresh"})," callback:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function Component(props) {\r\n    const [content, state] = useAsync(someAsync, false);\r\n    return (\r\n        <button onClick={state.refresh}>Load</button>\r\n    );\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Reload upon changes"}),"\n",(0,r.jsx)(n.p,{children:"To auto-refresh upon state change, pass a dependency list as the second argument:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function Component(props) {\r\n    const [value, setValue] = useState(0);\r\n    const [content, state] = useAsync(someAsync, [value]);\r\n    /* ... */\r\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{children:["Debounce ",(0,r.jsx)(n.del,{children:"0.4.0"})]}),"\n",(0,r.jsx)(n.p,{children:"A debounce parameter can be assigned to reduce calls caused by consecutive updates."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function Component(props) {\r\n    // debounce by 500 milliseconds\r\n    const [content, state] = useAsync(someAsync, [value], 500);\r\n    /* ... */\r\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{children:["Abort signal ",(0,r.jsx)(n.del,{children:"0.4.6"})]}),"\n",(0,r.jsxs)(n.p,{children:["Now the callback will receive a ",(0,r.jsx)(n.code,{children:"AbortSignal"})," object and will notify abortion when:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"the component has unmounted"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"state.refresh()"})," is called while the current operation is still in progress"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"state.abort()"})," is called"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function Component(props) {\r\n    const [content, state] = useAsync(async (signal) => {\r\n        const response = await fetch('...', { signal });\r\n        return response.json();\r\n    });\r\n    /* ... */\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{children:"AsyncContentState interface"}),"\n",(0,r.jsx)(c,{i:"AsyncContentState",ip:["value","loading","error","elementRef"],im:["refresh()","onError()","abort()","reset()","on()"],ev:["load","error"]}),"\n",(0,r.jsxs)(n.h3,{children:[(0,r.jsx)(n.code,{children:"AsyncContentState.elementRef"})," ",(0,r.jsx)(d.ReadOnly,{})]}),"\n",(0,r.jsxs)(n.p,{children:["When suppied to the ",(0,r.jsx)(n.code,{children:"ref"})," property of a React element, an ",(0,r.jsx)(n.code,{children:"error"})," event is emitted from the rendered element,\r\nif the error is not handled by handlers registered by ",(0,r.jsx)(n.code,{children:"AsyncContentState.onError"}),"."]}),"\n",(0,r.jsxs)(n.h3,{children:[(0,r.jsx)(n.code,{children:"AsyncContentState.error"})," ",(0,r.jsx)(d.ReadOnly,{})]}),"\n",(0,r.jsx)(n.p,{children:"Gets the error if the init callback has thrown error or returned a rejected promise."}),"\n",(0,r.jsxs)(n.h3,{children:[(0,r.jsx)(n.code,{children:"AsyncContentState.loading"})," ",(0,r.jsx)(d.ReadOnly,{})]}),"\n",(0,r.jsx)(n.p,{children:"Gets whether the promise returned from init callback is still pending."}),"\n",(0,r.jsxs)(n.h3,{children:[(0,r.jsx)(n.code,{children:"AsyncContentState.value"})," ",(0,r.jsx)(d.ReadOnly,{})]}),"\n",(0,r.jsx)(n.p,{children:"Gets the value returned by the init callback."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The value is identical to the first element of the returned array from ",(0,r.jsx)(n.code,{children:"useAsync"}),",\r\nand is ",(0,r.jsx)(n.code,{children:"undefined"})," in initial state or when ",(0,r.jsx)(n.code,{children:"AsyncContentState.error"})," is truthy."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{children:[(0,r.jsx)(n.code,{children:"AsyncContentState.abort()"})," ",(0,r.jsx)(d.Version,{})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"abort()\r\nabort(reason)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Aborts the async operation."}),"\n",(0,r.jsxs)(n.p,{children:["The loading state will be set back to ",(0,r.jsx)(n.code,{children:"false"}),", whereas the ",(0,r.jsx)(n.code,{children:"AsyncContentState.value"})," is unchanged."]}),"\n",(0,r.jsx)(n.h4,{children:"Parameters"}),"\n",(0,r.jsx)("dl",{children:(0,r.jsxs)(n.h4,{children:[(0,r.jsx)(n.code,{children:"reason"})," ",(0,r.jsx)(d.Optional,{})]})}),"\n",(0,r.jsx)(n.h3,{children:(0,r.jsx)(n.code,{children:"AsyncContentState.on()"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"on(event, handler)\r\non(handlers)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Register event handlers."}),"\n",(0,r.jsx)(n.h4,{children:"Parameters"}),"\n",(0,r.jsxs)("dl",{children:[(0,r.jsx)(n.h4,{children:(0,r.jsx)(n.code,{children:"event"})}),(0,r.jsx)(n.p,{children:"Event name."}),(0,r.jsx)(n.h4,{children:(0,r.jsx)(n.code,{children:"handler"})}),(0,r.jsx)(n.p,{children:"Callback to be invoked on such event."}),(0,r.jsx)(n.h4,{children:(0,r.jsx)(n.code,{children:"handlers"})}),(0,r.jsx)(n.p,{children:"A dictionary where each entry represents the event name and callback to be invoked on such event."})]}),"\n",(0,r.jsx)(n.h3,{children:(0,r.jsx)(n.code,{children:"AsyncContentState.onError()"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"onError(handler)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Registers a handler to handle errors thrown from the data init callback."}),"\n",(0,r.jsx)(n.h4,{children:"Parameters"}),"\n",(0,r.jsx)("dl",{children:(0,r.jsx)(n.h4,{children:(0,r.jsx)(n.code,{children:"handler"})})}),"\n",(0,r.jsx)(n.h3,{children:(0,r.jsx)(n.code,{children:"AsyncContentState.refresh()"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"refresh()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Sets loading state to ",(0,r.jsx)(n.code,{children:"true"})," and loads the data again."]}),"\n",(0,r.jsxs)(n.h3,{children:[(0,r.jsx)(n.code,{children:"AsyncContentState.reset()"})," ",(0,r.jsx)(d.Version,{})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"reset()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Resets value, as well as loading and error state to initial state."}),"\n",(0,r.jsxs)(n.h3,{children:[(0,r.jsx)(n.code,{children:"error"})," event"]}),"\n",(0,r.jsx)(n.p,{children:"Fired when an error has occurred from the init callback."}),"\n",(0,r.jsx)(n.h4,{children:"Event properties"}),"\n",(0,r.jsxs)("dl",{children:[(0,r.jsx)(n.h4,{children:(0,r.jsx)(n.code,{children:"error"})}),(0,r.jsx)(n.p,{children:"Gets the error thrown."})]}),"\n",(0,r.jsxs)(n.h3,{children:[(0,r.jsx)(n.code,{children:"load"})," event"]}),"\n",(0,r.jsx)(n.p,{children:"Fired when value is resolved from the init callback."}),"\n",(0,r.jsx)(n.h4,{children:"Event properties"}),"\n",(0,r.jsxs)("dl",{children:[(0,r.jsx)(n.h4,{children:(0,r.jsx)(n.code,{children:"data"})}),(0,r.jsx)(n.p,{children:"Gets the data returned."})]}),"\n",(0,r.jsx)(n.h2,{children:"Version information"}),"\n",(0,r.jsx)(l,{module:"zeta-dom",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"0.1.0"})," Introduced"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"0.4.0"})," ",(0,r.jsx)(n.code,{children:"debounce"})," parameter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"0.4.6"})," Abort signal ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"AsyncContentState.abort()"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"0.5.9"})," ",(0,r.jsx)(n.code,{children:"AsyncContentState.reset()"})]}),"\n"]})})]})}function t(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);