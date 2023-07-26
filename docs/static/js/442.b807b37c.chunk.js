"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[442],{442:function(e,n,r){r.r(n);var t=r(2556);function o(e){const n=Object.assign({h1:"h1",del:"del",p:"p",a:"a",code:"code",pre:"pre",h2:"h2",h3:"h3",blockquote:"blockquote",strong:"strong"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"zeta-dom-react"}),"\n",(0,t.jsxs)(n.h1,{children:["Data object and array ",(0,t.jsx)(n.del,{children:"v0.4"})]}),"\n",(0,t.jsx)(n.p,{children:"Nested data objects and arrays are supported since v0.4."}),"\n",(0,t.jsxs)(n.p,{children:["Field components can be associated with nested data properties using ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"<FormObject>"})})," and ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"<FormArray>"})})," component."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'interface FormData {\r\n    name: string;\r\n    phone: {\r\n        countryCode: string;\r\n        phoneNumber: string;\r\n    };\r\n}\r\n\r\nfunction Form() {\r\n    const form = useFormContext<FormData>();\r\n    return (\r\n        <Form context={form}>\r\n            <TextInput name="name" />\r\n            <FormObject name="phone">\r\n                <TextInput name="countryCode" />\r\n                <TextInput name="phoneNumber" />\r\n            </FormObject>\r\n        </Form>\r\n    );\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Field component for data objects"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'interface PhoneData {\r\n    countryCode: string;\r\n    phoneNumber: string;\r\n}\r\n\r\nfunction PhoneField(props: FormFieldProps<PhoneData>) {\r\n    const { value } = useFormField(props, {});\r\n    return (\r\n        <div>\r\n            <FormObject value={value}>\r\n                <TextInput name="countryCode" />\r\n                <TextInput name="phoneNumber" />\r\n            </FormObject>\r\n        </div>\r\n    );\r\n}\r\n\r\nfunction Form() {\r\n    const form = useFormContext<FormData>();\r\n    return (\r\n        <Form context={form}>\r\n            <TextInput name="name" />\r\n            <PhoneField name="phone" />\r\n        </Form>\r\n    );\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Data array"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'interface Item {\r\n    id: string;\r\n    name: string;\r\n}\r\n\r\ninterface FormData {\r\n    items: Item[];\r\n}\r\n\r\nfunction Form() {\r\n    const form = useFormContext<FormData>();\r\n    return (\r\n        <Form context={form}>\r\n            <FormArray name="items">\r\n                {items => item.map(v => (\r\n                    // important to provide key for each mapped element\r\n                    <FormObject key={FormObject.keyFor(v)} value={v}>\r\n                        <div>\r\n                            <TextInput name="id" />\r\n                            <TextInput name="name" />\r\n                        </div>\r\n                    </FormObject>\r\n                ))}\r\n            </FormArray>\r\n        </Form>\r\n    );\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or by having a composite field component simply:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'function Form() {\r\n    const form = useFormContext<FormData>();\r\n    return (\r\n        <Form context={form}>\r\n            <FormArray name="items">\r\n                {items => item.map((v, i) => (\r\n                    <Field key={FormObject.keyFor(v)} name={i} />\r\n                ))}\r\n            </FormArray>\r\n        </Form>\r\n    );\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Data path"}),"\n",(0,t.jsx)(n.p,{children:"Events and operation like validations on nested data properties can be achieved like normal data properties with dot-separated data paths."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'function Form() {\r\n    const form = useFormContext<FormData>();\r\n    useEffect(() => {\r\n        return form.on(\'dataChange\', function (e) {\r\n            console.log(e.data);\r\n        });\r\n    }, [form]);\r\n    return (\r\n        <Form context={form}>\r\n            <TextInput name="name" />\r\n            <FormObject name="phone">\r\n                <TextInput name="countryCode" />\r\n                <TextInput name="phoneNumber" />\r\n            </FormObject>\r\n        </Form>\r\n    );\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For instance, the above ",(0,t.jsx)(n.code,{children:"dataChange"})," event handler will log ",(0,t.jsx)(n.code,{children:'["phone.countryCode"]'})," when user fills in the country code."]}),"\n",(0,t.jsx)(n.h3,{children:"Validate nested properties"}),"\n",(0,t.jsx)(n.p,{children:"To validate a particular data property, provide the data path to that property like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"form.validate('phone.countryCode')\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also supply the root object data path to validate all child properties:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"form.validate('phone')\r\n// same as \r\nform.validate('phone.countryCode', 'phone.phoneNumber')\n"})}),"\n",(0,t.jsx)(n.h3,{children:"Access data with data path"}),"\n",(0,t.jsxs)(n.p,{children:["Other than accessing like ordinary JavaScript objects, ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"FormContext"})})," provides ",(0,t.jsx)(n.a,{href:":FormContext.getValue",children:(0,t.jsx)(n.code,{children:"getValue"})}),"\r\nand ",(0,t.jsx)(n.a,{href:":FormContext.setValue",children:(0,t.jsx)(n.code,{children:"setValue"})})," method to access values providing a data path."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const countryCode = form.getValue('phone.countryCode');\r\nform.setValue('phone.countryCode', '1');\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important:"})," Note that for data objects and array, ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"FormContext.getValue"})})," will return a deeply-cloned object;\r\nwhile ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"FormContext.setValue"})})," will deeply clone the supplied object."]}),"\n"]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);