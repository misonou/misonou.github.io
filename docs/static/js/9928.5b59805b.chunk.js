"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[9928],{9928:function(r,e,n){n.r(e);var c=n(2556);function s(r){const e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2",h3:"h3",h4:"h4",a:"a",blockquote:"blockquote",del:"del"},r.components),{Module:n,MemberList:s,Badge:t}=e;return t||o("Badge",!1),t.Optional||o("Badge.Optional",!0),t.ReadOnly||o("Badge.ReadOnly",!0),s||o("MemberList",!0),n||o("Module",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{name:"zeta-dom-react"}),"\n",(0,c.jsx)(e.h1,{children:"useErrorHandler"}),"\n",(0,c.jsx)(e.p,{children:"Error handler provides an event-based mechanism to handle errors from async operation and user actions."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"function Component() {\r\n    const [data, state] = useAsync(() => { /* ... */ });\r\n    const errorHandler = useErrorHandler(state);\r\n\r\n    useEffect(() => {\r\n        return errorHandler.catch(err => {\r\n            // return a value indicating the error is handled\r\n            // won't propagate to other callbacks or parent elements\r\n            return true;\r\n        });\r\n    }, [errorHandler]);\r\n\r\n    return (<div ref={errorHandler.ref}>{/* ... */}</div>);\r\n}\n"})}),"\n",(0,c.jsx)(e.h2,{children:"Syntax"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"useErrorHandler()\r\nuseErrorHandler(source0)\r\nuseErrorHandler(source0, source1)\r\nuseErrorHandler(source0, source1, /* \u2026 ,*/ sourceN)\n"})}),"\n",(0,c.jsx)(e.h3,{children:"Parameters"}),"\n",(0,c.jsxs)("dl",{children:[(0,c.jsxs)(e.h4,{children:[(0,c.jsx)(e.code,{children:"source0"})," \u2026 ",(0,c.jsx)(e.code,{children:"sourceN"})," ",(0,c.jsx)(t.Optional,{})]}),(0,c.jsx)(e.p,{children:"One or more error source. By supplying to the method, it is effectively the same as:"}),(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-typescript",children:"useEffect(() => {\r\n    return source.onError((error) => {\r\n        return errorHandler.emit(error);\r\n    });\r\n}, []);\n"})})]}),"\n",(0,c.jsx)(e.h3,{children:"Return value"}),"\n",(0,c.jsxs)(e.p,{children:["It returns an ",(0,c.jsx)(e.a,{href:"#s-errorhandlerwithref-interface",children:(0,c.jsx)(e.code,{children:"ErrorHandlerWithRef"})})," interface object."]}),"\n",(0,c.jsx)(e.h2,{children:"Handling specific errors"}),"\n",(0,c.jsx)(e.p,{children:"Error handler also provides selective registration of handler callbacks, so that different error can be handled differently:"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"Note that an unselective handler callback are always invoked after all selective handler callbacks."}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"function Component() {\r\n    const [data, state] = useAsync(() => { /* ... */ });\r\n    const errorHandler = useErrorHandler(state);\r\n\r\n    useEffect(() => {\r\n        return combineFn(\r\n            // this catches all errors of the type from CustomError\r\n            errorHandler.catch(CustomError, err => {\r\n                /* ... */\r\n            }),\r\n            // this catches all errors with the specified code\r\n            errorHandler.catch('zeta/cancelled', err => {\r\n                /* ... */\r\n            }),\r\n            // as the default case\r\n            errorHandler.catch(err => {\r\n                /* ... */\r\n            })\r\n        );\r\n    }, [errorHandler]);\r\n\r\n    return (<div ref={errorHandler.ref}>{/* ... */}</div>);\r\n}\n"})}),"\n",(0,c.jsxs)(e.h3,{children:["Multiple match ",(0,c.jsx)(e.del,{children:"v0.4.2"})]}),"\n",(0,c.jsxs)(e.p,{children:["It is possible to specify multiple codes or constructors in one ",(0,c.jsx)(e.code,{children:"catch"})," call:"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"useEffect(() => {\r\n    return errorHandler.catch(['zeta/cancelled', CustomError], err => {\r\n        /* ... */\r\n    });\r\n}, [errorHandler]);\n"})}),"\n",(0,c.jsxs)(e.h2,{children:["Emitting errors ",(0,c.jsx)(e.del,{children:"v0.4.4"})]}),"\n",(0,c.jsxs)(e.p,{children:["Asynchronous error can now be dispatched to error handler of the current or parent components using ",(0,c.jsx)(e.code,{children:"errorHandler.emit"}),"."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"function Component() {\r\n    const errorHandler = useErrorHandler(state);\r\n\r\n    useEffect(() => {\r\n        someAsyncAction().catch(err => errorHandler.emit(err));\r\n    }, []);\r\n\r\n    return (\r\n        <div ref={errorHandler.ref}>\r\n            {/* ... */}\r\n        </div>\r\n    );\r\n}\n"})}),"\n",(0,c.jsx)(e.h3,{children:"Prior to v0.4.4"}),"\n",(0,c.jsxs)(e.p,{children:["The error can be emitted directly through ",(0,c.jsx)(e.code,{children:"dom.emit"}),":"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"function Component() {\r\n    const ref = useRef();\r\n\r\n    useEffect(() => {\r\n        someAsyncAction().catch(error => {\r\n            dom.emit('error', ref.current, { error }, true);\r\n        });\r\n    }, []);\r\n\r\n    return (\r\n        <div ref={ref}>\r\n            {/* ... */}\r\n        </div>\r\n    );\r\n}\n"})}),"\n",(0,c.jsx)(e.h2,{children:"Wrapping React events"}),"\n",(0,c.jsxs)(e.p,{children:["A generic ",(0,c.jsx)(e.code,{children:"onClick"})," wrapper would be:"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-typescript",children:"function onClick(e: React.UIEvent) {\r\n    const element = e.currentTarget;\r\n    if (!locked(element)) {\r\n        let promise = props.onClick?.(e);\r\n        if (promise instanceof Promise) {\r\n            catchAsync(lock(element, promise, true));\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,c.jsx)(e.h2,{children:"ErrorHandlerWithRef interface"}),"\n",(0,c.jsx)(s,{i:"ErrorHandlerWithRef",ip:["ref"],im:["catch()","emit()"]}),"\n",(0,c.jsxs)(e.h3,{children:[(0,c.jsx)(e.code,{children:"ErrorHandlerWithRef.ref"})," ",(0,c.jsx)(t.ReadOnly,{})]}),"\n",(0,c.jsx)(e.p,{children:"A React ref callback."}),"\n",(0,c.jsx)(e.h3,{children:(0,c.jsx)(e.code,{children:"ErrorHandlerWithRef.catch()"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"errorHandler.catch(code, handler)\r\nerrorHandler.catch(type, handler)\r\nerrorHandler.catch(codeOrTypeArray, handler)\n"})}),"\n",(0,c.jsx)(e.h3,{children:(0,c.jsx)(e.code,{children:"ErrorHandlerWithRef.emit()"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"errorHandler.emit(error)\n"})})]})}function o(r,e){throw new Error("Expected "+(e?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(r={}){const{wrapper:e}=r.components||{};return e?(0,c.jsx)(e,Object.assign({},r,{children:(0,c.jsx)(s,r)})):s(r)}}}]);