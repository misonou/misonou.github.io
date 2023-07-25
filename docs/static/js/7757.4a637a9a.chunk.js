"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[7757],{7757:function(e,r,n){n.r(r);var o=n(2556);function t(e){const r=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",h4:"h4"},e.components),{Module:n,Badge:t}=r;return t||c("Badge",!1),t.Required||c("Badge.Required",!0),n||c("Module",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{name:"zeta-dom-react"}),"\n",(0,o.jsx)(r.h1,{children:"Form component"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"FormContextProvider"})," component is used by ",(0,o.jsx)(r.code,{children:"<Form>"})," by default."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:'import { Form, useFormContext } from "zeta-dom-react";\r\n\r\nfunction Component() {\r\n    const form = useFormContext();\r\n    return (\r\n        <Form context={form} className="my-form">\r\n            {...}\r\n        </Form>\r\n    );\r\n}\n'})}),"\n",(0,o.jsx)(r.h2,{children:"Properties"}),"\n",(0,o.jsxs)("dl",{children:[(0,o.jsxs)(r.h4,{children:[(0,o.jsx)(r.code,{children:"context"})," ",(0,o.jsx)(t.Required,{})]}),(0,o.jsx)(r.h4,{children:(0,o.jsx)(r.code,{children:"enterKeyHint"})}),(0,o.jsx)(r.h4,{children:(0,o.jsx)(r.code,{children:"formatError"})}),(0,o.jsx)(r.h4,{children:(0,o.jsx)(r.code,{children:"preventLeave"})})]}),"\n",(0,o.jsx)(r.h2,{children:"Wrap with common customization"}),"\n",(0,o.jsxs)(r.p,{children:["In scenario where common customization is wanted, the ",(0,o.jsx)(r.code,{children:"Form"})," component can easily by wrapped."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:'import { forwardRef } from "react";\r\nimport { Form as WrappedForm, FormProps } from "zeta-dom-react";\r\n\r\nexport const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {\r\n    return <WrappedForm {...props} ref={ref} />\r\n});\n'})})]})}function c(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}r.default=function(e={}){const{wrapper:r}=e.components||{};return r?(0,o.jsx)(r,Object.assign({},e,{children:(0,o.jsx)(t,e)})):t(e)}}}]);