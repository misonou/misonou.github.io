"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[7821],{7821:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(2556),i=t(885),a=t(758),s=t(4519),c=["Home","Products","Contact us"];function o(){var e=(0,s.useState)(0),n=(0,i.Z)(e,2),t=n[0],o=n[1],d=(0,a.u6)({selector:".tab-item"});return(0,s.useEffect)((function(){d.setActiveIndex(t)}),[d,t]),(0,r.jsx)("div",Object.assign({ref:d.ref,className:"tabs"},{children:c.map((function(e,n){return(0,r.jsx)("div",Object.assign({className:"tab-item",onClick:function(){return o(n)}},{children:e}),n)}))}))}var d='import { useAnimatedIndicator } from "@misonou/react-css-utils";\r\nimport { useEffect, useState } from "react";\r\nimport "./style.css";\r\n\r\nconst tabs = [\r\n    "Home",\r\n    "Products",\r\n    "Contact us"\r\n];\r\n\r\nexport default function Component() {\r\n    const [tab, setTab] = useState(0);\r\n    const indicator = useAnimatedIndicator({\r\n        selector: ".tab-item"\r\n    });\r\n\r\n    useEffect(() => {\r\n        indicator.setActiveIndex(tab);\r\n    }, [indicator, tab]);\r\n\r\n    return (\r\n        <div ref={indicator.ref} className="tabs">\r\n            {tabs.map((v, i) => (\r\n                <div key={i} className="tab-item" onClick={() => setTab(i)}>\r\n                    {v}\r\n                </div>\r\n            ))}\r\n        </div>\r\n    );\r\n}\r\n',l=".tabs {\r\n    display: flex;\r\n    position: relative;\r\n}\r\n\r\n.tab-item {\r\n    position: relative;\r\n    padding: 0.5em 1em;\r\n    transition: background-color 0.2s;\r\n    cursor: pointer;\r\n}\r\n\r\n.tab-item.active {\r\n    background-color: aquamarine;\r\n}\r\n\r\n.tabs .anim-indicator {\r\n    position: absolute;\r\n    height: 4px;\r\n    bottom: 0;\r\n    background-color: black;\r\n    transition: left 0.2s, right 0.2s;\r\n}\r\n",h=t(6670);function u(){return(0,r.jsx)(h.iV,{component:o,source:{tsx:d,css:l}})}function m(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",a:"a"},e.components),{Module:t,MemberList:i,Badge:a}=n;return a||j("Badge",!1),a.ReadOnly||j("Badge.ReadOnly",!0),i||j("MemberList",!0),t||j("Module",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{name:"@misonou/react-css-utils"}),"\n",(0,r.jsx)(n.h1,{children:"useAnimatedIndicator"}),"\n",(0,r.jsx)(n.p,{children:"Attaches a animateable active state indicator element."}),"\n",(0,r.jsx)(n.h2,{children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"useAnimatedIndicator(options)\n"})}),"\n",(0,r.jsx)(n.h3,{children:"Parameters"}),"\n",(0,r.jsxs)("dl",{children:[(0,r.jsx)(n.h4,{children:(0,r.jsx)(n.code,{children:"options"})}),(0,r.jsxs)("dl",{children:[(0,r.jsx)(n.h4,{children:(0,r.jsx)(n.code,{children:"selector"})}),(0,r.jsx)(n.p,{children:"A CSS selector that selects the elements to which an active state indicator element will be attached to."})]})]}),"\n",(0,r.jsx)(n.h3,{children:"Return value"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"AnimatedIndicator"})})," object."]}),"\n",(0,r.jsx)(n.h2,{children:"Example"}),"\n",(0,r.jsx)(u,{}),"\n",(0,r.jsx)(n.h2,{children:"AnimatedIndicator interface"}),"\n",(0,r.jsx)(i,{i:"AnimatedIndicator",ip:["ref"],im:["setActiveIndex()"]}),"\n",(0,r.jsxs)(n.h3,{children:[(0,r.jsx)(n.code,{children:"AnimatedIndicator.ref"})," ",(0,r.jsx)(a.ReadOnly,{})]}),"\n",(0,r.jsx)(n.p,{children:"A ref callback apply to a React element which contains a collection of elements, usually tabs,\r\nto which an active state indicator element will be attached to."}),"\n",(0,r.jsx)(n.h3,{children:(0,r.jsx)(n.code,{children:"AnimatedIndicator.setActiveIndex()"})}),"\n",(0,r.jsx)(n.p,{children:"Sets and animates the active state indicator element to attach to the n-th matched element, usually indicating the current tab."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"setActiveIndex(index)\n"})}),"\n",(0,r.jsx)(n.h4,{children:"Parameters"}),"\n",(0,r.jsxs)("dl",{children:[(0,r.jsx)(n.h4,{children:(0,r.jsx)(n.code,{children:"index"})}),(0,r.jsx)(n.p,{children:"A zero-based index."})]})]})}var x=function(e={}){const{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)};function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);