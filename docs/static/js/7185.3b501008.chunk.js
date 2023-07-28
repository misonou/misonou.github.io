"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[7185],{7185:function(r,e,n){n.r(e);var o=n(2556);function t(r){const e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",a:"a"},r.components),{Module:n}=e;return n||function(r,e){throw new Error("Expected "+(e?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{name:"zeta-dom-react"}),"\n",(0,o.jsx)(e.h1,{children:"Forcing error state"}),"\n",(0,o.jsxs)(e.p,{children:["Field can be explicitly set to erroreous state by providing ",(0,o.jsx)(e.code,{children:"error"})," property."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'function Component() {\r\n    const form = useFormContext();\r\n    return (\r\n        <Form context={form}>\r\n            <TextInput name="item" error="Custom error" />\r\n        </Form>\r\n    );\r\n}\n'})}),"\n",(0,o.jsx)(e.h2,{children:"Using setError method"}),"\n",(0,o.jsxs)(e.p,{children:["Another way is to use ",(0,o.jsx)(e.a,{href:":",children:(0,o.jsx)(e.code,{children:"FormContext.setError"})})," method."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"function Component() {\r\n    const form = useFormContext();\r\n    return (\r\n        <Form context={form}>\r\n            <TextInput name=\"item\" />\r\n            <button onClick={setError}>Set error</button>\r\n        </Form>\r\n    );\r\n\r\n    function setError() {\r\n        form.setError('item', 'Custom error');\r\n    }\r\n}\n"})})]})}e.default=function(r={}){const{wrapper:e}=r.components||{};return e?(0,o.jsx)(e,Object.assign({},r,{children:(0,o.jsx)(t,r)})):t(r)}}}]);