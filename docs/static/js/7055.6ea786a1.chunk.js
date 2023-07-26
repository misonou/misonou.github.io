"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[7055],{7055:function(e,n,r){r.r(n);var s=r(2556);function i(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li"},e.components),{Module:r,Badge:i}=n;return i||t("Badge",!1),i.Optional||t("Badge.Optional",!0),r||t("Module",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{name:"zeta-dom-react"}),"\n",(0,s.jsx)(n.h1,{children:"useFormContext hook"}),"\n",(0,s.jsxs)(n.p,{children:["Creates a singleton ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"FormContext"})})," object which allows access to field values and to validate the fields."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function Component() {\r\n    const form = useFormContext();\r\n    return (\r\n        <Form value={form}>\r\n            {/* ... */}\r\n        </Form>\r\n    );\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"useFormContext()\r\nuseFormContext(initialData)\r\nuseFormContext(initialData, validateOnChange)\r\nuseFormContext(initialData, options)\r\nuseFormContext(persistKey, initialData)\r\nuseFormContext(persistKey, initialData, validateOnChange)\r\nuseFormContext(persistKey, initialData, options)\n"})}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"persistKey"})," ",(0,s.jsx)(i.Optional,{})]}),(0,s.jsx)(n.p,{children:"A unique key for enabling the persisting of form data in view state."}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"initialData"})," ",(0,s.jsx)(i.Optional,{})]}),(0,s.jsx)(n.p,{children:"Initial form data, or a callback that returns initial form data."}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"validateOnChange"})," ",(0,s.jsx)(i.Optional,{})]}),(0,s.jsxs)(n.p,{children:["Same effect as specifying ",(0,s.jsx)(n.code,{children:"validateOnChange"})," in option object. Default is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"options"})," ",(0,s.jsx)(i.Optional,{})]}),(0,s.jsxs)("dl",{children:[(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"autoPersist"})," ",(0,s.jsx)(i.Optional,{})]}),(0,s.jsxs)(n.p,{children:["Whether form data will be persisted in view state when component is unmounted.\r\nDefault is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"enterKeyHint"})," ",(0,s.jsx)(i.Optional,{})]}),(0,s.jsx)(n.p,{children:"Sets the default action label (or icon) to present for the enter key on virtual keyboards."}),(0,s.jsx)(n.p,{children:"Accepts the following values:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"enter"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"done"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"go"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"next"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"previous"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"search"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"send"})}),"\n"]}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"formatError"})," ",(0,s.jsx)(i.Optional,{})]}),(0,s.jsx)(n.p,{children:"Specifies a callback to generate custom error message for fields associated with this form context."}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"preventLeave"})," ",(0,s.jsx)(i.Optional,{})]}),(0,s.jsx)(n.p,{children:"Whether it should prompt user before leaving the page when form data has been entered."}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"validateOnChange"})," ",(0,s.jsx)(i.Optional,{})]}),(0,s.jsxs)(n.p,{children:["Whether validation will be triggered upon changes to form data.\r\nDefault is ",(0,s.jsx)(n.code,{children:"true"}),"."]})]})]}),"\n",(0,s.jsx)(n.h3,{children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"FormContext"})})," object."]}),"\n",(0,s.jsx)(n.h2,{children:"Initial data"}),"\n",(0,s.jsxs)(n.p,{children:["Default form data can be specified through ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"useFormContext"})}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function Component() {\r\n    const form = useFormContext({ name: 'Joe' });\r\n    return (\r\n        <Form value={form}>\r\n            <TextInput name=\"name\" />\r\n        </Form>\r\n    );\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Calling ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"FormContext.reset()"})})," will reset all fields to initial values."]}),"\n",(0,s.jsx)(n.h2,{children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"FormContext"})})}),"\n"]})]})}function t(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);