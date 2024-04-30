"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[5929],{5929:function(e,n,r){r.r(n);var t=r(2556);function s(e){const n=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong"},e.components),{Module:r,ImportHint:s,MemberList:l,VersionTimeline:o,Badge:d}=n;return d||i("Badge",!1),d.ReadOnly||i("Badge.ReadOnly",!0),s||i("ImportHint",!0),l||i("MemberList",!0),r||i("Module",!0),o||i("VersionTimeline",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"zeta-dom-react"}),"\n",(0,t.jsx)(n.h1,{children:"TextField class"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"TextField"})," class are not supposed to be instantiate manually. Instead it is used to\r\naugment extra functionalities when used with ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"useFormField"})}),"."]}),"\n",(0,t.jsx)(s,{name:"TextField",module:"zeta-dom-react",require:"TextField",global:"zeta.react.TextField",expanded:!0}),"\n",(0,t.jsx)(l,{i:"TextField"}),"\n",(0,t.jsx)(n.h2,{children:"TextFieldProps interface"}),"\n",(0,t.jsx)(l,{i:"TextFieldProps",extends:["FormFieldProps"],ip:["type"]}),"\n",(0,t.jsx)(n.h3,{children:(0,t.jsx)(n.code,{children:"TextFieldProps.type"})}),"\n",(0,t.jsx)(n.p,{children:"Specifies the text input type."}),"\n",(0,t.jsx)(n.h2,{children:"TextFieldState interface"}),"\n",(0,t.jsx)(l,{i:"TextFieldState",extends:["FormFieldState"],ip:["inputProps"]}),"\n",(0,t.jsxs)(n.h3,{children:[(0,t.jsx)(n.code,{children:"TextFieldState.inputProps"})," ",(0,t.jsx)(d.ReadOnly,{})]}),"\n",(0,t.jsx)(n.p,{children:"Returns HTML attributes to be applied to an input element."}),"\n",(0,t.jsx)(n.h2,{children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function Textbox(props: TextFieldProps) {\r\n    const { value, error, setValue, elementRef, inputProps } = useFormField(TextField, props, '');\r\n    return (\r\n        <label ref={elementRef}>\r\n            <div>{props.label}</div>\r\n            <input {...inputProps} name={props.name} value={value} onChange={e => setValue(e.target.value)} />\r\n            {error && props.showErrorMessage !== false &&\r\n                <div className=\"error\">{error}</div>}\r\n        </label>\r\n    );\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Version information"}),"\n",(0,t.jsx)(o,{module:"zeta-dom-react",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"0.3.5"})," Introduced"]}),"\n"]})})]})}function i(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)}}}]);