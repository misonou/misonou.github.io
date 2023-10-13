"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[8594],{8594:function(e,n,r){r.r(n);var o=r(2556);function t(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",blockquote:"blockquote",ul:"ul",li:"li",h3:"h3"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{name:"zeta-dom-react"}),"\n",(0,o.jsx)(n.h1,{children:"Form controls"}),"\n",(0,o.jsxs)(n.p,{children:["Although arbitrary properties can be defined manually on ",(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"FormContext.data"})}),",\r\nthose properties only associates to a field control when a component using the ",(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"useFormField"})})," hook\r\nis mounted with the corresponding name."]}),"\n",(0,o.jsx)(n.h2,{children:"Binding to form data"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'function SimpleInput(props) {\r\n    // `useFormField` hook returns necessary properties and methods to deal with form data\r\n    const {\r\n        value,\r\n        setValue,\r\n        error,\r\n        setError,\r\n        form,\r\n        path,\r\n        key,\r\n    } = useFormField(props);\r\n\r\n    return (\r\n        <input value={value} onChange={e => setValue(e.target.value)} />\r\n    );\r\n}\r\n\r\nfunction Component() {\r\n    const form = useFormContext();\r\n    return (\r\n        <Form context={form}>\r\n            {/* this input will associate to the data path "item", i.e. form.data.item */}\r\n            <SimpleInput name="item" />\r\n        </Form>\r\n    );\r\n}\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["For more complex scenario like nested data structure, see ",(0,o.jsx)(n.a,{href:"/docs/react/form/data-object-array",children:"Data object and array"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{children:"Controlling field value by React state"}),"\n",(0,o.jsx)(n.p,{children:"Field value can be explicitly controlled via a form control for that field:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function Component() {\r\n    const form = useFormContext();\r\n    const [value, setValue] = useState('');\r\n    return (\r\n        <Form context={form}>\r\n            <TextInput name=\"item\" value={value} onChange={setValue} />\r\n        </Form>\r\n    );\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Under controlled mode, when user has updated value via rendered control or the associated property exposed\r\non ",(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"FormContext.data"})})," has changed, the ",(0,o.jsx)(n.code,{children:"onChange"})," callback will be invoked."]}),"\n",(0,o.jsxs)(n.p,{children:["Only when the updated ",(0,o.jsx)(n.code,{children:"value"})," was sent to the hook via component (",(0,o.jsx)(n.code,{children:"<TextInput>"})," in this case), the related\r\n",(0,o.jsx)(n.code,{children:"dataChange"})," and ",(0,o.jsx)(n.code,{children:"validate"})," event will be triggered."]}),"\n",(0,o.jsx)(n.h2,{children:"Using control without form context"}),"\n",(0,o.jsxs)(n.p,{children:["Any field, i.e. one using the ",(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"useFormField"})})," hook, can be used as unnamed field."]}),"\n",(0,o.jsx)(n.p,{children:"For an unnamed field:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["value is solely controlled by the ",(0,o.jsx)(n.code,{children:"value"})," prop, i.e. it must be used as a controlled field"]}),"\n",(0,o.jsx)(n.li,{children:"no validation is triggered"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Therefore, any form controls can be used without a form context, or as constituent control of a composite control."}),"\n",(0,o.jsx)(n.h3,{children:"Use without form context"}),"\n",(0,o.jsx)(n.p,{children:"For example a text field can serve as a search box without parent form:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function SearchBox() {\r\n    const [value, setValue] = useState('');\r\n\r\n    useEffect(() => {\r\n        // perform search\r\n    }, [value]);\r\n\r\n    return (\r\n        <TextInput value={value} onChange={setValue} />\r\n    );\r\n}\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"An unnamed field always behaves as if there is no form context."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/react/form/composite-controls",children:"Composite controls"})," for use case of unnamed control."]}),"\n",(0,o.jsx)(n.h2,{children:"See also"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/react/form/building-form-controls",children:"Building form controls"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/react/form/data-object-array",children:"Data object and array"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"FormFieldState"})})}),"\n"]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(t,e)})):t(e)}}}]);