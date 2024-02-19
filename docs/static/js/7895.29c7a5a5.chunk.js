"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[7895],{7895:function(e,n,r){r.r(n),r.d(n,{default:function(){return V}});var t=r(2556),o=r(5671),i=r(3144),l=r(9340),a=r(2882),c=r(3457),s=r(3967),u=r(7749),p=function(e){(0,l.Z)(r,e);var n=(0,a.Z)(r);function r(){return(0,o.Z)(this,r),n.apply(this,arguments)}return(0,i.Z)(r,[{key:"promptAutofill",value:function(e){return this.autofillChoices=e,this}},{key:"initElement",value:function(e){var n=this;s.ZP.on(e,"requestAutofillPrompt",(function(){var e=n.autofillChoices;return(0,u.mf)(e)?e():e}))}}]),r}(c.Z),f=r(6225),m=r(8252),d=r(9357),h=r(2192),x=r(4165),b=r(9142);function j(e,n,r){return(n=(0,b.Z)(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function v(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function g(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?v(Object(r),!0).forEach((function(n){j(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var w,y,k=r(5861),P=r(758),Z=r(3066),O=r(4246),E=r(8180),F=(0,r(6665).hg)();function D(e,n,r){return _.apply(this,arguments)}function _(){return(_=(0,k.Z)((0,x.Z)().mark((function e(n,r,t){var o,i;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=Object.values(r)[0],(t=t||{}).metaKey&&s.ZP.metaKey!==t.metaKey){e.next=7;break}return i=s.ZP.activeElement||s.ZP.root,e.next=6,F((function(){return new Promise((function(e){w=Z((0,O.Z)('\n                <select style="font-size:24px;z-index:10000;min-height:1.5em;">\n                    <option>Select result for {{label}}</option>\n                    {{foreach choices}}\n                        <option>{{#key}}</option>\n                    {{/foreach}}\n                    {{if options.unknownError}}\n                        <option>Unknown error</option>\n                    {{/if}}\n                </select>',{label:n,choices:r,options:t}))[0],y=function(n){e(Object.values(r).concat(new Error("Unknown error"))[n-1]),(0,E.ZF)(w),w=null,e=null},(0,E.ak)(w,"change",(function(){y(w.selectedIndex)})),(0,s.KW)(i)||(i=s.ZP.activeElement),(0,P.FK)(w,i,"left top"),s.ZP.retainFocus(i,w),s.ZP.focus(w)}))}));case 6:o=e.sent;case 7:if(!(o instanceof Error)){e.next=9;break}throw o;case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,n,r){var t=!1;return(0,u.S6)(n,(function(n,o){var i=r?r+"."+n:n+"";if((0,u.PO)(o)||(0,u.kJ)(o))t=C(e,o,i)||t;else if(e.element(i)){var l=e.getValue(i);l!==o&&(e.setValue(i,o),t=t||e.getValue(i)!==l)}})),t}function T(){return(T=(0,k.Z)((0,x.Z)().mark((function e(n){var r,t;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.emit("requestAutofillPrompt",n.element());case 2:if((r=e.sent)&&r.__esModule&&(r=r.default),e.t0=r,!e.t0){e.next=9;break}return e.next=8,D("autofill",g({"(No autofill)":null},r));case 8:e.t0=e.sent;case 9:if(!(r=e.t0)){e.next=20;break}t=0,console.log("[Autofill]",r);case 13:if(!(C(n,r,"")&&++t<10)){e.next=20;break}return e.next=16,(0,u.DB)();case 16:return e.next=18,(0,u.DB)();case 18:e.next=13;break;case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.ZP.on("escape",(function(e){w&&(y(1),e.handled())})),s.ZP.on("modalchange",(function(){w&&!s.ZP.focusable(w)&&(s.ZP.retainFocus(s.ZP.modalElement,w),s.ZP.focus(w))})),s.ZP.on("ctrlClick",(function(e){var n=e.target.closest("form"),r=n&&d.q3.get(n);return r&&function(e){return T.apply(this,arguments)}(r)}));var M=function(){return M=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},M.apply(this,arguments)};function A(){var e=(0,d.Gc)(),n=(0,f.Pg)(p).promptAutofill((function(){return r.e(5602).then(r.t.bind(r,5602,19))}));return(0,t.jsxs)(d.l0,M({context:e},m.Z.use(n),{children:[(0,t.jsx)("p",{children:"Try Ctrl+click in the form region"}),(0,t.jsx)(h.Lt,{name:"option",label:"Option",allowUnselect:!0,items:[{value:"email",label:"Email address"},{value:"phone",label:"Phone number"}]}),e.data.option&&("email"===e.data.option?(0,t.jsx)(h.oi,{name:"email",placeholder:"Email address"}):(0,t.jsx)(h.$S,{name:"phone"}))]}))}var q='import { FormDevToolMixin } from "@misonou/react-app-utils";\r\nimport { Mixin, useMixin } from "brew-js-react";\r\nimport { Form, useFormContext } from "zeta-dom-react";\r\nimport { Dropdown, PhoneField, TextInput } from "src/components/controls";\r\nimport "@misonou/react-app-utils/formAutofiller";\r\n\r\nexport default function Component() {\r\n    const form = useFormContext();\r\n    const formDevTool = useMixin(FormDevToolMixin)\r\n        .promptAutofill(() => import("./mock_data.json"));\r\n\r\n    return (\r\n        <Form context={form} {...Mixin.use(formDevTool)}>\r\n            <p>Try Ctrl+click in the form region</p>\r\n\r\n            <Dropdown name="option" label="Option" allowUnselect items={[\r\n                { value: \'email\', label: \'Email address\' },\r\n                { value: \'phone\', label: \'Phone number\' },\r\n            ]} />\r\n            {form.data.option && (\r\n                form.data.option === \'email\' ?\r\n                    <TextInput name="email" placeholder="Email address" /> :\r\n                    <PhoneField name="phone" />\r\n            )}\r\n        </Form>\r\n    );\r\n}\r\n',S='{\r\n    "Email": {\r\n        "option": "email",\r\n        "email": "test@test.com"\r\n    },\r\n    "Phone": {\r\n        "option": "phone",\r\n        "phone": {\r\n            "countryCode": "1",\r\n            "phoneNumber": "0000000000"\r\n        }\r\n    }\r\n}\r\n',K=r(8137);function U(){return(0,t.jsx)(K.iV,{component:A,source:{tsx:q,json:S},maxHeight:"none"})}function N(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",a:"a",blockquote:"blockquote",ul:"ul",li:"li"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"@misonou/react-app-utils"}),"\n",(0,t.jsx)(n.h1,{children:"Form autofiller"}),"\n",(0,t.jsxs)(n.p,{children:["Using autofiller, by ",(0,t.jsx)("kbd",{children:"Ctrl"})," clicking form area, a select box will be shown,\r\nallowing selecting a set of form data to be filled."]}),"\n",(0,t.jsx)(n.h2,{children:"Enabling enable autofiller"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'/// dev.ts\r\nimport "@misonou/react-app-utils/formAutofiller";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To make sure the autofiller and mock data are not bundled with production build,\r\napply the ",(0,t.jsx)(n.code,{children:"false"})," alias in webpack configuration for those files:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"/// rewired.config.js\r\nmodule.exports = {\r\n    webpack: function (config, env) {\r\n        return {\r\n            resolve: {\r\n                alias: {\r\n                    ...(env === 'production' ? {\r\n                        // exclude all dev and mock data from build\r\n                        [path.resolve('./__mock_data.json')]: false\r\n                        [path.resolve('./dev.ts')]: false\r\n                    } : undefined),\r\n                }\r\n            }\r\n        }\r\n    }\r\n};\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["To use autofiller in a specific form, use the ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"FormDevToolMixin"})})," mixin:"]}),"\n",(0,t.jsx)(U,{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Only data entry associated to a visible form element will be filled."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{children:"See also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"FormDevToolMixin.promptAutofill"})})}),"\n"]})]})}var V=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(N,e)})):N(e)}}}]);