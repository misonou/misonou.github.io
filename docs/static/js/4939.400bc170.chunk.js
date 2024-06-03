"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[4939],{4939:function(e,n,r){r.r(n);var o=r(2556);r(5747);function t(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{name:"zeta-dom-react"}),"\n",(0,o.jsx)(n.h1,{children:"Forms"}),"\n",(0,o.jsxs)(n.p,{children:["The use of ",(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"useFormContext"})})," and ",(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"useFormField"})})," hooks allows easy implementation of any kind of form controls with high customizability, with validations and field values access."]}),"\n",(0,o.jsxs)(n.p,{children:["Below show a simple case that a ",(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"FormContext"})})," object is created using ",(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"useFormContext"})}),",\r\nand by using ",(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"<Form>"})})," component to give child components the form context."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Form, useFormContext } from "zeta-dom-react";\r\n\r\nfunction Login() {\r\n    const form = useFormContext();\r\n    return (\r\n        <Form context={form}>\r\n            <TextInput name="username" required label="Username" />\r\n            <TextInput name="password" required type="password" label="Password" />\r\n            <Button type="submit" label="Login" onClick={() => login(form.toJSON())} />\r\n        </Form>\r\n    );\r\n}\n'})})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(t,e)})):t(e)}},5747:function(e,n,r){r.d(n,{Z:function(){return m}});var o=r(2556),t=r(9357),s=r(2192);function c(){var e=(0,t.Gc)({name:"John Wig"});return(0,o.jsxs)(t.l0,Object.assign({context:e},{children:[(0,o.jsx)(s.oi,{name:"name",label:"Name"}),(0,o.jsxs)(t.Fm,Object.assign({name:"phone"},{children:[(0,o.jsx)(s.oi,{name:"countryCode",label:"Country code"}),(0,o.jsx)(s.oi,{name:"phoneNumber",label:"Phone number"})]})),(0,o.jsxs)(s.Fm,Object.assign({columns:"1fr 1fr"},{children:[(0,o.jsx)(s.zx,{type:"reset",label:"Reset"}),(0,o.jsx)(s.zx,{type:"button",label:"Clear",onClick:function(){return e.clear()}})]}))]}))}var a='import { Form, FormObject, useFormContext } from "zeta-dom-react";\r\nimport { Button, FieldColumn, TextInput } from "src/components/controls";\r\n\r\nexport default function Component() {\r\n    const form = useFormContext({\r\n        name: \'John Wig\'\r\n    });\r\n    return (\r\n        <Form context={form}>\r\n            <TextInput name="name" label="Name" />\r\n            <FormObject name="phone">\r\n                <TextInput name="countryCode" label="Country code" />\r\n                <TextInput name="phoneNumber" label="Phone number" />\r\n            </FormObject>\r\n            <FieldColumn columns="1fr 1fr">\r\n                <Button type="reset" label="Reset" />\r\n                <Button type="button" label="Clear" onClick={() => form.clear()} />\r\n            </FieldColumn>\r\n        </Form>\r\n    );\r\n}\r\n',l=r(6119);function m(){return(0,o.jsx)(l.iV,{component:c,source:{tsx:a},maxHeight:"none"})}}}]);