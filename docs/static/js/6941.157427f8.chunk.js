"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[6941],{6941:function(n,e,i){i.r(e),i.d(e,{default:function(){return p}});var r=i(2556),o=i(885),s=i(2527),t=i(8252),l=i(4519),c=i(7749);function d(){var n=(0,s.Y0)(),e=(0,l.useState)(0),i=(0,o.Z)(e,2),d=i[0],h=i[1];return(0,r.jsxs)("div",Object.assign({className:"mixin-scrollintoview"},{children:[(0,r.jsxs)("select",Object.assign({onChange:function(n){return h(n.currentTarget.selectedIndex)}},{children:[(0,r.jsx)("option",{children:"1"}),(0,r.jsx)("option",{children:"2"}),(0,r.jsx)("option",{children:"3"}),(0,r.jsx)("option",{children:"4"}),(0,r.jsx)("option",{children:"5"})]})),(0,r.jsx)("div",{children:(0,c.rx)(" ",5).split("").map((function(e,i){return(0,r.jsx)("div",Object.assign({},t.Z.use(n.when(d===i)),{children:"Item ".concat(i+1)}),i)}))})]}))}var h='import { Mixin, useScrollIntoViewMixin } from "brew-js-react";\r\nimport { useState } from "react";\r\nimport { repeat } from "zeta-dom/util";\r\nimport "./style.css";\r\n\r\nexport default function Component() {\r\n    const scrollIntoView = useScrollIntoViewMixin();\r\n    const [index, setIndex] = useState(0);\r\n\r\n    return (\r\n        <div className="mixin-scrollintoview">\r\n            <select onChange={e => setIndex(e.currentTarget.selectedIndex)}>\r\n                <option>1</option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option>4</option>\r\n                <option>5</option>\r\n            </select>\r\n            <div>\r\n                {repeat(\' \', 5).split(\'\').map((_, i) => (\r\n                    <div key={i} {...Mixin.use(scrollIntoView.when(index === i))}>{`Item ${i + 1}`}</div>\r\n                ))}\r\n            </div>\r\n        </div>\r\n    );\r\n}\r\n',a=".mixin-scrollintoview > div {\r\n    height: 100px;\r\n    overflow-y: scroll;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n.mixin-scrollintoview > div > div {\r\n    height: 100px;\r\n}\r\n\r\n.mixin-scrollintoview > div > div:nth-child(even) {\r\n    background-color: lightgray;\r\n}\r\n",x=i(6119);function j(){return(0,r.jsx)(x.iV,{component:d,source:{tsx:h,css:a},maxHeight:"none"})}function u(n){const e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2",h3:"h3",a:"a",blockquote:"blockquote",h4:"h4",ul:"ul",li:"li",strong:"strong"},n.components),{Module:i,ImportHint:o,MemberList:s,VersionTimeline:t,Badge:l}=e;return l||m("Badge",!1),l.Version||m("Badge.Version",!0),o||m("ImportHint",!0),s||m("MemberList",!0),i||m("Module",!0),t||m("VersionTimeline",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{name:"brew-js-react"}),"\n",(0,r.jsx)(e.h1,{children:"ScrollIntoViewMixin"}),"\n",(0,r.jsx)(e.p,{children:"Scroll the applied element into view on conditions."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"function View() {\r\n    const scrollIntoView = useScrollIntoViewMixin();\r\n    return (\r\n        <div {...Mixin.use(scrollIntoView.when([]))}>\r\n            {/* ... */}\r\n        </div>\r\n    );\r\n}\n"})}),"\n",(0,r.jsx)(e.h2,{children:"Syntax"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"useScrollIntoViewMixin()\n"})}),"\n",(0,r.jsx)(o,{name:"useScrollIntoViewMixin",module:"brew-js-react",require:"useScrollIntoViewMixin",global:"brew.react.useScrollIntoViewMixin"}),"\n",(0,r.jsx)(e.h3,{children:"Return value"}),"\n",(0,r.jsxs)(e.p,{children:["A ",(0,r.jsx)(e.a,{href:":",children:(0,r.jsx)(e.code,{children:"ScrollIntoViewMixin"})})," instance."]}),"\n",(0,r.jsx)(e.h2,{children:"ScrollIntoViewMixin class"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["Mixin should be created using ",(0,r.jsx)(e.a,{href:":",children:(0,r.jsx)(e.code,{children:"useScrollIntoViewMixin"})})," and applied to element by ",(0,r.jsx)(e.a,{href:":",children:(0,r.jsx)(e.code,{children:"Mixin.use"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(s,{i:"ScrollIntoViewMixin",im:["when()"]}),"\n",(0,r.jsx)(e.h3,{children:(0,r.jsx)(e.code,{children:"ScrollIntoViewMixin.when()"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"when(flag)\r\nwhen(deps)\n"})}),"\n",(0,r.jsx)(e.p,{children:"Enables scrolling element into view in conditions."}),"\n",(0,r.jsx)(e.h4,{children:"Parameters"}),"\n",(0,r.jsxs)("dl",{children:[(0,r.jsxs)(e.h4,{children:[(0,r.jsx)(e.code,{children:"flag"})," ",(0,r.jsx)(l.Version,{})]}),(0,r.jsxs)(e.p,{children:["A boolean value that when it changes to ",(0,r.jsx)(e.code,{children:"true"}),", the associated element will be scrolled into view."]}),(0,r.jsx)(e.h4,{children:(0,r.jsx)(e.code,{children:"deps"})}),(0,r.jsx)(e.p,{children:"An array containing values that when one of them changes, the associated element will be scrolled into view."})]}),"\n",(0,r.jsx)(e.h2,{children:"Example: Scroll to target section"}),"\n",(0,r.jsx)(j,{}),"\n",(0,r.jsx)(e.h2,{children:"Version information"}),"\n",(0,r.jsx)(t,{module:"brew-js-react",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"0.4.2"})," Introduced"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"0.5.0"})," ",(0,r.jsx)(e.code,{children:"ScrollIntoViewMixin.when(flag)"})]}),"\n"]})})]})}var p=function(n={}){const{wrapper:e}=n.components||{};return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(u,n)})):u(n)};function m(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);