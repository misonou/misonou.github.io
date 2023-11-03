"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[7177],{7177:function(e,r,o){o.r(r);var n=o(2556);function t(e){const r=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},e.components),{Module:o}=r;return o||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{name:"zeta-dom-react"}),"\n",(0,n.jsx)(r.h1,{children:"Composite controls"}),"\n",(0,n.jsx)(r.p,{children:"Some type of control requires multiple constituent controls to perform the logic, for example a multiple checkbox list:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:'export function CheckboxList(props: MultiChoiceFieldProps<CheckboxItem>) {\r\n    const { items, value, error, toggleValue, elementRef } = useFormField(MultiChoiceField, props);\r\n    return (\r\n        <div ref={elementRef}>\r\n            <span>{props.label}</span>\r\n            {items.map((v, i) => (\r\n                <label key={i}>\r\n                    <Checkbox checked={value.includes(v.value)} onChange={() => toggleValue(v.value)} />\r\n                    <span>{v.label}</span>\r\n                </label>\r\n            ))}\r\n            {error && props.showErrorMessage !== false &&\r\n                <div className="error">{error}</div>}\r\n        </div>\r\n    );\r\n}\n'})})]})}r.default=function(e={}){const{wrapper:r}=e.components||{};return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(t,e)})):t(e)}}}]);