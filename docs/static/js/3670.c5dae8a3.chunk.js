"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[3670],{3670:function(e,n,r){r.r(n);var t=r(2556);function o(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",h2:"h2",ul:"ul",li:"li"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"zeta-dom-react"}),"\n",(0,t.jsx)(n.h1,{children:"Accessing form data"}),"\n",(0,t.jsxs)(n.p,{children:["Field data is accessible by ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"FormContext.data"})})," property."]}),"\n",(0,t.jsx)(n.p,{children:"When using TypeScript, it can be benefited by specifying type argument for data shape:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'interface LoginData {\r\n    username: string;\r\n    password: string;\r\n}\r\n\r\nfunction Login() {\r\n    const form = useFormContext<LoginData>();\r\n    const onClick = () => {\r\n        // access field values through `FormContext.data`\r\n        login(\r\n            form.data.username,\r\n            form.data.password);\r\n    };\r\n\r\n    return (\r\n        <Form context={form}>\r\n            <TextInput name="username" required={true} label="Username" />\r\n            <TextInput name="password" required={true} type="password" label="Password" />\r\n            <Button label="Login" onClick={onClick} />\r\n        </Form>\r\n    );\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Effects on field update"}),"\n",(0,t.jsx)(n.p,{children:"Every time field value is updated, either programmatically or by user actions, re-rendering is triggered."}),"\n",(0,t.jsx)(n.p,{children:"In the following example, the paragraph will always show the entered text:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function Component() {\r\n    const form = useFormContext();\r\n    return (\r\n        <Form context={form}>\r\n            {/* print current value */}\r\n            <p>Value is {form.data.item || ''}</p>\r\n            <TextInput name=\"item\" />\r\n        </Form>\r\n    );\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The standard ",(0,t.jsx)(n.code,{children:"useEffect"})," hook will work on form data:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'function Component() {\r\n    const form = useFormContext();\r\n\r\n    useEffect(() => {\r\n        // do stuff when text field updates\r\n    }, [form.data.item]);\r\n\r\n    return (\r\n        <Form context={form}>\r\n            <TextInput name="item" />\r\n        </Form>\r\n    );\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"FormContext"})})," object also provides ",(0,t.jsx)(n.code,{children:"dataChange"})," event if you needs logic depending on which fields were updated:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'function Component() {\r\n    const form = useFormContext();\r\n\r\n    useEffect(() => {\r\n        return form.on(\'dataChange\', e => {\r\n            // print out which fields were changed\r\n            console.log(e.data);\r\n        });\r\n    }, []);\r\n\r\n    return (\r\n        <Form context={form}>\r\n            <TextInput name="item1" />\r\n            <TextInput name="item2" />\r\n            <TextInput name="item3" />\r\n        </Form>\r\n    );\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Updating field value"}),"\n",(0,t.jsxs)(n.p,{children:["Field values can be updated on ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"FormContext.data"})})," and they will be reflected on the rendered control:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'function Component() {\r\n    const form = useFormContext();\r\n    return (\r\n        <Form context={form}>\r\n            <TextInput name="item" />\r\n            {/* clicking the button will fill text field with "foo" */}\r\n            <button onClick={() => form.data.item = \'foo\'} />\r\n        </Form>\r\n    );\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{children:"See also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/react/form/defining-field",children:"Defining field"})}),"\n"]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);