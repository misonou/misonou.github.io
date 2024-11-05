"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[808],{808:function(r,e,n){n.r(e);var o=n(2556);function i(r){const e=Object.assign({h1:"h1",p:"p",code:"code",a:"a",pre:"pre",h2:"h2",h3:"h3",blockquote:"blockquote",del:"del"},r.components),{Module:n}=e;return n||function(r,e){throw new Error("Expected "+(e?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{name:"brew-js-react"}),"\n",(0,o.jsx)(e.h1,{children:"Error handling"}),"\n",(0,o.jsxs)(e.p,{children:["When an ",(0,o.jsx)(e.code,{children:"error"})," event is dispatched to descendant elements rendered by the current view through ",(0,o.jsx)(e.a,{href:":",children:(0,o.jsx)(e.code,{children:"reportError"})}),",\r\n(not to confused with the native ",(0,o.jsx)(e.code,{children:"error"})," event), there are a few places such error can be caught in view-level."]}),"\n",(0,o.jsxs)(e.p,{children:["Within the view it can be handled via ",(0,o.jsx)(e.a,{href:":",children:(0,o.jsx)(e.code,{children:"ErrorHandler"})})," object from ",(0,o.jsx)(e.a,{href:":",children:(0,o.jsx)(e.code,{children:"ViewProps.errorHandler"})}),"."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'import { registerErrorView } from "brew-js-react";\r\n\r\nconst MyView = registerView(({ viewContext, errorHandler }) => {\r\n    useEffect(() => {\r\n        return errorHandler.catch(e => console.log(e));\r\n    }, []);\r\n    /* ... */\r\n});\n'})}),"\n",(0,o.jsx)(e.p,{children:"Outside the view, error can be handled by standard way:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"function App() {\r\n    // listening error event\r\n    const onError = (e: Zeta.ZetaErrorEvent) => {\r\n        console.log(e);\r\n    };\r\n    return (\r\n        <div ref={domEventRef({ error: onError })}>{renderView(MyView)}</div>\r\n    );\r\n\r\n    // or by creating own ErrorHandler\r\n    const errorHandler = useErrorHandler();\r\n    useEffect(() => {\r\n        return errorHandler.catch(e => console.log(e));\r\n    }, []);\r\n    return (\r\n        <div ref={errorHandler.ref}>{renderView(MyView)}</div>\r\n    );\r\n}\n"})}),"\n",(0,o.jsx)(e.h2,{children:"Streaming errors to view container"}),"\n",(0,o.jsx)(e.h3,{children:"Data loading"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:":",children:(0,o.jsx)(e.code,{children:"useAsync"})})," already streams error to view container."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"registerView(({ viewContext, errorHandler }) => {\r\n    const [data] = useAsync(getSomeData, []);\r\n    useEffect(() => {\r\n        return errorHandler.catch(e => { /* ... */ });\r\n    }, []);\r\n    /* ... */\r\n});\n"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["Prior to v0.6.4, error can be handled manually as ",(0,o.jsx)(e.a,{href:"#s-asynchronous-code",children:"Asynchronous code"})," below."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{children:"User interaction"}),"\n",(0,o.jsxs)(e.p,{children:["Wrapper callback by ",(0,o.jsx)(e.a,{href:":",children:(0,o.jsx)(e.code,{children:"handleUserAction"})})," will stream error to the interacted element, which eventually\r\nbubbles up to the view container."]}),"\n",(0,o.jsxs)(e.p,{children:["See ",(0,o.jsx)(e.a,{href:"/docs/dom/handling-user-actions",children:"Handling user actions"}),"."]}),"\n",(0,o.jsx)(e.h3,{children:"Asynchronous code"}),"\n",(0,o.jsxs)(e.p,{children:["In view component, use ",(0,o.jsx)(e.a,{href:":",children:(0,o.jsx)(e.code,{children:"ErrorHandler.emit"})})," if possible."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"registerView(({ errorHandler }) => {\r\n    useEffect(() => {\r\n        setTimeout(() => {\r\n            someAction().catch(e => errorHandler.emit(e));\r\n        });\r\n    }, []);\r\n});\n"})}),"\n",(0,o.jsx)(e.p,{children:"Prior to v0.6.4, or for descendant (reusable) component where error handler is not directly available,\r\nerror handler need to be set up manually created using a ref:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"registerView(() => {\r\n    const errorHandler = useErrorHandler();\r\n    /* ... */\r\n    return (\r\n        <div ref={errorHandler.ref}>\r\n            {/* ... */}\r\n        </div>\r\n    )\r\n});\n"})}),"\n",(0,o.jsxs)(e.p,{children:["If no element is rendered, use ",(0,o.jsx)(e.a,{href:":",children:(0,o.jsx)(e.code,{children:"useViewContext"})})," and dispatcher error to ",(0,o.jsx)(e.a,{href:":",children:(0,o.jsx)(e.code,{children:"ViewContext.container"})})," using ",(0,o.jsx)(e.a,{href:":",children:(0,o.jsx)(e.code,{children:"reportError"})}),"."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"function Component() {\r\n    const viewContext = useViewContext();\r\n    useEffect(() => {\r\n        setTimeout(() => {\r\n            someAction().catch(e => reportError(e, viewContext.container));\r\n        });\r\n    }, []);\r\n}\n"})}),"\n",(0,o.jsx)(e.h2,{children:"Bailing out from rendered view"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.del,{children:"0.6.5"})}),"\n",(0,o.jsxs)(e.p,{children:["It is possible to bail out from original view through ",(0,o.jsx)(e.a,{href:":",children:(0,o.jsx)(e.code,{children:"ViewContext.setErrorView"})}),"."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'import { registerErrorView } from "brew-js-react";\r\n\r\nconst MyView = registerView(({ viewContext, errorHandler }) => {\r\n    // handle error manually\r\n    const onClick = async () => {\r\n        try {\r\n            await someAction();\r\n        } catch (error) {\r\n            viewContext.setErrorView(MyErrorView, error);\r\n        }\r\n    };\r\n\r\n    // or in combination of strategy above:\r\n    useEffect(() => {\r\n        return errorHandler.catch(e => {\r\n            viewContext.setErrorView(MyErrorView, e);\r\n        });\r\n    }, []);\r\n    /* ... */\r\n});\n'})}),"\n",(0,o.jsx)(e.p,{children:"or handle across different view at higher level:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"function App() {\r\n    const ref = useRef<ViewContext>(null);\r\n    useEffect(() => {\r\n        return dom.on('error', e => {\r\n            // check the source, we normally do not want to replace page content\r\n            // if the event is triggered by user interaction\r\n            if (e.source === 'script') {\r\n                const currentView = ref.current;\r\n                if (currentView.container.contains(e.target)) {\r\n                    currentView.setErrorView(MyErrorView, e.error);\r\n                }\r\n            }\r\n        });\r\n    }, []);\r\n    return renderView({ ref }, MyView);\r\n}\r\n\r\nfunction MyErrorView(props: ErrorViewProps) {\r\n    return (\r\n        <p>Oops!</p>\r\n    );\r\n}\n"})}),"\n",(0,o.jsx)(e.h2,{children:"Uncaught error during rendering"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:":",children:(0,o.jsx)(e.code,{children:"registerErrorView"})})," allows a fallback view to be rendered when view component failed to be imported or render."]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"View container itself is an error boundary. That means when view component failed to render, only content in view container is cleared."}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'import { registerErrorView } from "brew-js-react";\r\n\r\nregisterErrorView(({ error, reset }) => {\r\n    return (\r\n        <p>Oops!</p>\r\n    );\r\n});\n'})}),"\n",(0,o.jsx)(e.h2,{children:"Recovering from error view"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"reset"})," callback in ",(0,o.jsx)(e.code,{children:"ErrorViewProps"})," allows rerendering of the original view that causes the error:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"function MyErrorView({ error, reset }: ErrorViewProps) {\r\n    return (\r\n        <div>\r\n            <p>Oops!</p>\r\n            <button onClick={reset}>Reload page</button>\r\n        </div>\r\n    );\r\n}\n"})})]})}e.default=function(r={}){const{wrapper:e}=r.components||{};return e?(0,o.jsx)(e,Object.assign({},r,{children:(0,o.jsx)(i,r)})):i(r)}}}]);