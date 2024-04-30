"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[3176],{3176:function(e,r,n){n.r(r),n.d(r,{default:function(){return O}});var o=n(2556),t=n(9357),a=n(2192),s=n(6670);function i(){var e=(0,t.Gc)();return(0,o.jsxs)("div",Object.assign({className:"app-demo-form-col2"},{children:[(0,o.jsxs)(t.l0,Object.assign({context:e},{children:[(0,o.jsx)(a.oi,{name:"name",label:"Name"}),(0,o.jsxs)(t.Fm,Object.assign({name:"phone"},{children:[(0,o.jsx)(a.oi,{name:"countryCode",label:"Country code"}),(0,o.jsx)(a.oi,{name:"phoneNumber",label:"Phone number"})]}))]})),(0,o.jsx)(s.WN,{form:e})]}))}var c='import { Form, FormObject, useFormContext } from "zeta-dom-react";\r\nimport { TextInput } from "src/components/controls";\r\nimport { FormDataJsonView } from "src/components/docs";\r\n\r\ninterface FormData {\r\n    name: string;\r\n    phone: {\r\n        countryCode: string;\r\n        phoneNumber: string;\r\n    };\r\n}\r\n\r\nexport default function Component() {\r\n    const form = useFormContext<FormData>();\r\n    return (\r\n        <div className="app-demo-form-col2">\r\n            <Form context={form}>\r\n                <TextInput name="name" label="Name" />\r\n                <FormObject name="phone">\r\n                    <TextInput name="countryCode" label="Country code" />\r\n                    <TextInput name="phoneNumber" label="Phone number" />\r\n                </FormObject>\r\n            </Form>\r\n            <FormDataJsonView form={form} />\r\n        </div>\r\n    );\r\n}\r\n';function l(){return(0,o.jsx)(s.iV,{component:i,source:{tsx:c}})}function m(){var e=(0,t.Gc)();return(0,o.jsxs)("div",Object.assign({className:"app-demo-form-col2"},{children:[(0,o.jsxs)(t.l0,Object.assign({context:e},{children:[(0,o.jsx)(a.oi,{name:"name",label:"Name",required:!0}),(0,o.jsx)(a.$S,{name:"phone",label:"Phone number",required:!0})]})),(0,o.jsx)(s.WN,{form:e})]}))}var d='import { Form, useFormContext } from "zeta-dom-react";\r\nimport { PhoneField, PhoneValue, TextInput } from "src/components/controls";\r\nimport { FormDataJsonView } from "src/components/docs";\r\n\r\ninterface FormData {\r\n    name: string;\r\n    phone: PhoneValue;\r\n}\r\n\r\nexport default function Component() {\r\n    const form = useFormContext<FormData>();\r\n    return (\r\n        <div className="app-demo-form-col2">\r\n            <Form context={form}>\r\n                <TextInput name="name" label="Name" required />\r\n                <PhoneField name="phone" label="Phone number" required />\r\n            </Form>\r\n            <FormDataJsonView form={form} />\r\n        </div>\r\n    );\r\n}\r\n',p='import { FormFieldProps, FormObject, useFormField } from "zeta-dom-react";\r\nimport { FieldColumn, TextInput } from ".";\r\n\r\nexport interface PhoneValue {\r\n    countryCode: string;\r\n    phoneNumber: string;\r\n}\r\n\r\nexport function PhoneField(props: FormFieldProps<PhoneValue>) {\r\n    props = {\r\n        ...props,\r\n        isEmpty(value) {\r\n            return !value.countryCode || !value.phoneNumber;\r\n        }\r\n    };\r\n    const { value, error } = useFormField(props, {});\r\n\r\n    return (\r\n        <FormObject value={value}>\r\n            <div className="zui-field app-phone-field">\r\n                <label>{props.label}</label>\r\n                <FieldColumn columns="1fr 3fr">\r\n                    <TextInput name="countryCode" placeholder="Country code" allowChar="0-9" adornment="+" />\r\n                    <TextInput name="phoneNumber" placeholder="Phone number" allowChar="0-9" />\r\n                </FieldColumn>\r\n                {error && props.showErrorMessage !== false &&\r\n                    <div className="zui-field-error">{error}</div>}\r\n            </div>\r\n        </FormObject>\r\n    );\r\n}\r\n';function u(){return(0,o.jsx)(s.iV,{component:m,source:{tsx:d,"PhoneField.tsx":p}})}var h=n(2982),x=n(1266),f=n(8023),j=n(758),F=n(4519);function b(){var e=(0,F.useRef)(0),r=(0,t.Gc)();return(0,o.jsxs)("div",Object.assign({className:"app-demo-form-col2"},{children:[(0,o.jsxs)(t.l0,Object.assign({context:r},{children:[(0,o.jsx)("div",Object.assign({ref:(0,x.wp)((function(e){(0,j.TD)(e,{itemSelector:".app-demo-form-card",handleSelector:".app-demo-form-card-sort",onOrderChanged:function(e,n){var o=r.data.items;o.splice.apply(o,[n,0].concat((0,h.Z)(o.splice(e,1))))}})})),className:"app-demo-form-field-list"},{children:(0,o.jsx)(t.Oe,Object.assign({name:"items"},{children:function(e){return e.map((function(r){return(0,o.jsx)(t.Fm,Object.assign({value:r},{children:(0,o.jsxs)("div",Object.assign({className:"app-demo-form-card"},{children:[(0,o.jsx)(f.SPC,{className:"app-demo-form-card-sort"}),(0,o.jsx)(a.oi,{name:"title",label:"Title"}),(0,o.jsx)(a.zx,{label:"Delete",icon:f.Xm5,onClick:function(){return e.splice(e.indexOf(r),1)}})]}))}),t.Fm.keyFor(r))}))}}))})),(0,o.jsx)(a.zx,{label:"Add",icon:f.wEH,variant:"primary",onClick:function(){var n;return null===(n=r.data.items)||void 0===n?void 0:n.push({title:"Item ".concat(++e.current)})}})]})),(0,o.jsx)(s.WN,{form:r})]}))}var v='import { Form, FormArray, FormObject, useFormContext, useRefInitCallback } from "zeta-dom-react";\r\nimport { Button, TextInput } from "src/components/controls";\r\nimport { FormDataJsonView } from "src/components/docs";\r\nimport { FaArrowsAlt, FaPlus, FaTrash } from "react-icons/fa";\r\nimport { initSortable } from "@misonou/react-css-utils";\r\nimport { useRef } from "react";\r\n\r\ninterface FormData {\r\n    items: { title: string }[];\r\n}\r\n\r\nexport default function Component() {\r\n    const counter = useRef(0);\r\n    const form = useFormContext<FormData>();\r\n\r\n    return (\r\n        <div className="app-demo-form-col2">\r\n            <Form context={form}>\r\n                <div ref={useRefInitCallback(initCardContainer)} className="app-demo-form-field-list">\r\n                    <FormArray name="items">\r\n                        {items => items.map(v => (\r\n                            // important to provide key for each mapped element\r\n                            <FormObject key={FormObject.keyFor(v)} value={v}>\r\n                                <div className="app-demo-form-card">\r\n                                    <FaArrowsAlt className="app-demo-form-card-sort" />\r\n                                    <TextInput name="title" label="Title" />\r\n                                    <Button label="Delete" icon={FaTrash}\r\n                                        onClick={() => items.splice(items.indexOf(v), 1)} />\r\n                                </div>\r\n                            </FormObject>\r\n                        ))}\r\n                    </FormArray>\r\n                </div>\r\n                <Button label="Add" icon={FaPlus} variant="primary"\r\n                    onClick={() => form.data.items?.push({ title: `Item ${++counter.current}` })} />\r\n            </Form>\r\n            <FormDataJsonView form={form} />\r\n        </div>\r\n    );\r\n\r\n    function initCardContainer(element: HTMLElement) {\r\n        initSortable(element, {\r\n            itemSelector: \'.app-demo-form-card\',\r\n            handleSelector: \'.app-demo-form-card-sort\',\r\n            onOrderChanged(oldIndex, newIndex) {\r\n                const arr = form.data.items!;\r\n                arr.splice(newIndex, 0, ...arr.splice(oldIndex, 1));\r\n            }\r\n        });\r\n    }\r\n}\r\n';function g(){return(0,o.jsx)(s.iV,{component:b,source:{tsx:v},maxHeight:"none"})}function C(){var e=(0,t.Gc)({items:[""]});return(0,o.jsxs)("div",Object.assign({className:"app-demo-form-col2"},{children:[(0,o.jsxs)(t.l0,Object.assign({context:e},{children:[(0,o.jsx)(a.Fm,Object.assign({columns:"auto min-content",className:"app-demo-form-field-list"},{children:(0,o.jsx)(t.Oe,Object.assign({name:"items"},{children:function(e){return e.map((function(r,n){return(0,o.jsxs)(F.Fragment,{children:[(0,o.jsx)(a.oi,{name:String(n),placeholder:"Enter text"}),(0,o.jsx)(a.zx,{title:"Delete",icon:f.Xm5,variant:"link",onClick:function(){return e.splice(n,1)}})]},n)}))}}))})),(0,o.jsx)(a.zx,{label:"Add",icon:f.wEH,variant:"primary",onClick:function(){var r;return null===(r=e.data.items)||void 0===r?void 0:r.push("")}})]})),(0,o.jsx)(s.WN,{form:e})]}))}var y='import { Form, FormArray, useFormContext } from "zeta-dom-react";\r\nimport { Button, FieldColumn, TextInput } from "src/components/controls";\r\nimport { FormDataJsonView } from "src/components/docs";\r\nimport { FaPlus, FaTrash } from "react-icons/fa";\r\nimport React from "react";\r\n\r\nexport default function Component() {\r\n    const form = useFormContext({ items: [\'\'] });\r\n\r\n    return (\r\n        <div className="app-demo-form-col2">\r\n            <Form context={form}>\r\n                <FieldColumn columns="auto min-content" className="app-demo-form-field-list">\r\n                    <FormArray name="items">\r\n                        {items => items.map((v, i) => (\r\n                            <React.Fragment key={i}>\r\n                                <TextInput name={String(i)} placeholder="Enter text" />\r\n                                <Button title="Delete" icon={FaTrash} variant="link"\r\n                                    onClick={() => items.splice(i, 1)} />\r\n                            </React.Fragment>\r\n                        ))}\r\n                    </FormArray>\r\n                </FieldColumn>\r\n                <Button label="Add" icon={FaPlus} variant="primary"\r\n                    onClick={() => form.data.items?.push(\'\')} />\r\n            </Form>\r\n            <FormDataJsonView form={form} />\r\n        </div>\r\n    );\r\n}\r\n';function N(){return(0,o.jsx)(s.iV,{component:C,source:{tsx:y},maxHeight:"none"})}function w(e){const r=Object.assign({h1:"h1",del:"del",p:"p",a:"a",code:"code",h2:"h2",h3:"h3",blockquote:"blockquote",pre:"pre",strong:"strong"},e.components),{Module:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{name:"zeta-dom-react"}),"\n",(0,o.jsxs)(r.h1,{children:["Data object and array ",(0,o.jsx)(r.del,{children:"0.4.0"})]}),"\n",(0,o.jsxs)(r.p,{children:["Field components can be associated with nested data structure using ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"<FormObject>"})})," and ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"<FormArray>"})})," component."]}),"\n",(0,o.jsx)(r.h2,{children:"Data object"}),"\n",(0,o.jsx)(l,{}),"\n",(0,o.jsx)(r.h2,{children:"Data array"}),"\n",(0,o.jsxs)(r.p,{children:["Here is an example that use ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"<FormArray>"})})," to create a form with dynamic cards."]}),"\n",(0,o.jsx)(g,{}),"\n",(0,o.jsx)(r.h3,{children:"Primitive values as array item"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"<FormArray>"})})," also support primitive values as array items. Here is an example for a editable list of string\r\nwithout building a composite field component."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"For better reusability, it is recommended to build composite field component to deal with complex data structure."}),"\n"]}),"\n",(0,o.jsx)(N,{}),"\n",(0,o.jsx)(r.h2,{children:"Composite control"}),"\n",(0,o.jsx)(r.p,{children:"It is very occasional to build a reusable component for a field that corresponds to a data object."}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"useFormField"})})," hook support objects and arrays as its value type."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Notice that in the ",(0,o.jsx)(r.code,{children:"PhoneField"})," component, child components are wrapped by the ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"<FormObject>"})})," component with ",(0,o.jsx)(r.code,{children:"value"})," being passed."]}),"\n"]}),"\n",(0,o.jsx)(u,{}),"\n",(0,o.jsx)(r.h2,{children:"Dealing with nested data"}),"\n",(0,o.jsx)(r.p,{children:"Events and operation like validations on nested data properties can be achieved like normal data properties with dot-separated data paths."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:'function Form() {\r\n    const form = useFormContext<FormData>();\r\n    useEffect(() => {\r\n        return form.on(\'dataChange\', function (e) {\r\n            console.log(e.data);\r\n        });\r\n    }, [form]);\r\n    return (\r\n        <Form context={form}>\r\n            <TextInput name="name" />\r\n            <FormObject name="phone">\r\n                <TextInput name="countryCode" />\r\n                <TextInput name="phoneNumber" />\r\n            </FormObject>\r\n        </Form>\r\n    );\r\n}\n'})}),"\n",(0,o.jsxs)(r.p,{children:["For instance, the above ",(0,o.jsx)(r.code,{children:"dataChange"})," event handler will log ",(0,o.jsx)(r.code,{children:'["phone.countryCode"]'})," when user fills in the country code."]}),"\n",(0,o.jsx)(r.h3,{children:"Validating nested properties"}),"\n",(0,o.jsx)(r.p,{children:"To validate a particular data property, provide the data path to that property like:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"form.validate('phone.countryCode')\n"})}),"\n",(0,o.jsx)(r.p,{children:"You can also supply the root object data path to validate all child properties:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"form.validate('phone')\n"})}),"\n",(0,o.jsx)(r.p,{children:"which is the same as:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"form.validate('phone.countryCode', 'phone.phoneNumber')\n"})}),"\n",(0,o.jsx)(r.h3,{children:"Accessing nested properties"}),"\n",(0,o.jsxs)(r.p,{children:["Other than accessing like ordinary JavaScript objects, ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"FormContext"})})," provides ",(0,o.jsx)(r.a,{href:":FormContext.getValue",children:(0,o.jsx)(r.code,{children:"getValue"})}),"\r\nand ",(0,o.jsx)(r.a,{href:":FormContext.setValue",children:(0,o.jsx)(r.code,{children:"setValue"})})," method to access values providing a data path."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"const countryCode = form.getValue('phone.countryCode');\r\nform.setValue('phone.countryCode', '1');\n"})}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Important:"})," Note that for data objects and array, ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"FormContext.getValue"})})," will return a deeply-cloned object;\r\nwhile ",(0,o.jsx)(r.a,{href:":",children:(0,o.jsx)(r.code,{children:"FormContext.setValue"})})," will deeply clone the supplied object."]}),"\n"]})]})}var O=function(e={}){const{wrapper:r}=e.components||{};return r?(0,o.jsx)(r,Object.assign({},e,{children:(0,o.jsx)(w,e)})):w(e)}}}]);