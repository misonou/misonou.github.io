"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[1266],{1266:function(e,n,r){r.r(n);var t=r(2556);function a(e){const n=Object.assign({h1:"h1",del:"del",p:"p",code:"code",blockquote:"blockquote",h2:"h2",pre:"pre"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"brew-js-react"}),"\n",(0,t.jsxs)(n.h1,{children:["Passing additional data to view ",(0,t.jsx)(n.del,{children:"v0.3.4"})]}),"\n",(0,t.jsx)(n.p,{children:"Sometimes a view requires data that is too complex to put as route parameters."}),"\n",(0,t.jsxs)(n.p,{children:["Additional data can be passed using ",(0,t.jsx)(n.code,{children:"navigateTo"})," and ",(0,t.jsx)(n.code,{children:"redirectTo"}),", mimicking a form post."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Note that user can always navigate to the page without passing the data, so be sure have fallback handling if the data is not present."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const ResultPage = registerView(\r\n    function ResultPage(props: ViewProps<{ name: string; age: number }>) {\r\n        // data is passed by `viewData` prop\r\n        const { name, age } = props.viewData;\r\n\r\n        // always check if data is passed\r\n        if (!name || !age) {\r\n            redirectTo(InputFormPage);\r\n            return null;\r\n        }\r\n\r\n        // ...\r\n    },\r\n    { view: 'result' }\r\n);\r\n\r\nconst InputFormPage = registerView(\r\n    function InputFormPage() {\r\n        const form = useFormContext<InputData>();\r\n\r\n        return (\r\n            <div>\r\n                {/* ... */}\r\n                <button onClick={submit}>Go</button>\r\n            </div>\r\n        );\r\n\r\n        function submit() {\r\n            // passing data to ResultPage\r\n            navigateTo(ResultPage, null, {\r\n                name: form.data.name,\r\n                age: form.data.age\r\n            });\r\n        }\r\n    },\r\n    { view: 'form' }\r\n);\n"})})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}}}]);
//# sourceMappingURL=1266.4ed2e567.chunk.js.map