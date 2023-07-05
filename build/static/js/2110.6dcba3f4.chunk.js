"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[2110],{2110:function(e,n,t){t.r(n);var c=t(2556);function s(e){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},e.components),{Module:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{name:"zeta-dom-react"}),"\n",(0,c.jsx)(n.h1,{children:"useMemoizedFunction"}),"\n",(0,c.jsx)(n.p,{children:"Creates a memoized callback that invokes the supplied callback when called."}),"\n",(0,c.jsxs)(n.p,{children:["This reduces unnecessary ",(0,c.jsx)(n.code,{children:"useEffect"})," cycles but at the same time the correct callback supplied in the last component cycle, which associates to the latest component state, can be called."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"function Component(props) {\r\n    const cb = useMemoizedFunction(() => {\r\n        console.log(props.value); \r\n    });\r\n    useEffect(() => {\r\n        // prints latest props.value every 1s\r\n        setInterval(cb, 1000);\r\n    }, [cb]);\r\n}\n"})})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(s,e)})):s(e)}}}]);
//# sourceMappingURL=2110.6dcba3f4.chunk.js.map