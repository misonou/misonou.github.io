"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[1007],{1007:function(e,n,i){i.r(n),i.d(n,{default:function(){return q}});var t=i(2556),r=i(4519),s=i(8147);function a(){var e=(0,r.useRef)(null);return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",Object.assign({ref:e},{children:[(0,t.jsx)("div",Object.assign({className:"anim-item","animate-on":"custom","animate-in":"fade-in"},{children:(0,t.jsx)("span",{children:"Built-in effect"})})),(0,t.jsx)("div",Object.assign({className:"anim-item","animate-on":"custom","animate-in":""},{children:(0,t.jsx)("span",{children:"CSS transition"})})),(0,t.jsx)("div",Object.assign({className:"anim-item","animate-on":"custom","animate-in":""},{children:(0,t.jsx)("span",{children:"CSS animation"})}))]})),(0,t.jsx)("button",Object.assign({onClick:function(){return(0,s.l$)(e.current,"custom")}},{children:"Animate"}))," ",(0,t.jsx)("button",Object.assign({onClick:function(){return(0,s.OR)(e.current,"custom")}},{children:"Reset"}))]})}var c='import { useRef } from "react";\r\nimport { animateIn, animateOut } from "brew-js/anim";\r\nimport "./style.css";\r\n\r\nexport default function Component() {\r\n    const ref = useRef<HTMLDivElement>(null);\r\n    return (\r\n        <div>\r\n            <div ref={ref}>\r\n                <div className="anim-item" animate-on="custom" animate-in="fade-in"><span>Built-in effect</span></div>\r\n                <div className="anim-item" animate-on="custom" animate-in=""><span>CSS transition</span></div>\r\n                <div className="anim-item" animate-on="custom" animate-in=""><span>CSS animation</span></div>\r\n            </div>\r\n            <button onClick={() => animateIn(ref.current!, \'custom\')}>Animate</button>{\' \'}\r\n            <button onClick={() => animateOut(ref.current!, \'custom\')}>Reset</button>\r\n        </div>\r\n    );\r\n}\r\n',o=".anim-item {\r\n    display: inline-flex;\r\n    width: 75px;\r\n    height: 75px;\r\n    text-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n    line-height: 1;\r\n}\r\n\r\n.anim-item:nth-child(1) {\r\n    background-color: lightgray;\r\n    opacity: 0;\r\n}\r\n\r\n.anim-item:nth-child(2) {\r\n    background-color: lightgray;\r\n}\r\n\r\n.anim-item:nth-child(2).tweening-in {\r\n    background-color: lightblue;\r\n    transition: background-color 0.2s;\r\n}\r\n\r\n.anim-item:nth-child(3) {\r\n    background-color: bisque;\r\n}\r\n\r\n.anim-item:nth-child(3).tweening-in {\r\n    animation: anim-item 1s linear 1;\r\n}\r\n\r\n@keyframes anim-item {\r\n    0% {\r\n        transform: rotate(0);\r\n    }\r\n    50% {\r\n        transform: rotate(180deg);\r\n    }\r\n    100% {\r\n        transform: rotate(0);\r\n    }\r\n}\r\n",l=i(6670);function d(){return(0,t.jsx)(l.iV,{component:a,source:{tsx:c,css:o}})}var m=i(885);function h(){var e=(0,r.useRef)(null),n=(0,r.useState)(0),i=(0,m.Z)(n,2),a=i[0],c=i[1];return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",Object.assign({ref:e,"animate-on":"custom","animate-out":"","animate-sequence":".anim-sequence-item","animate-sequence-type":"slide-down fade-in","animate-sequence-reverse":[void 0,"","in","out"][a]},{children:[(0,t.jsx)("div",{className:"anim-sequence-item"}),(0,t.jsx)("div",{className:"anim-sequence-item"}),(0,t.jsx)("div",{className:"anim-sequence-item"}),(0,t.jsx)("div",{className:"anim-sequence-item"}),(0,t.jsx)("div",{className:"anim-sequence-item"})]})),(0,t.jsxs)("select",Object.assign({onChange:function(e){return c(e.currentTarget.selectedIndex)}},{children:[(0,t.jsx)("option",{children:"Normal"}),(0,t.jsx)("option",{children:"Reverse in/out"}),(0,t.jsx)("option",{children:"Reverse in"}),(0,t.jsx)("option",{children:"Reverse out"})]}))," ",(0,t.jsx)("button",Object.assign({onClick:function(){return(0,s.l$)(e.current,"custom")}},{children:"Animate"}))," ",(0,t.jsx)("button",Object.assign({onClick:function(){return(0,s.OR)(e.current,"custom")}},{children:"Reset"}))]})}var u='import { useRef, useState } from "react";\r\nimport { animateIn, animateOut } from "brew-js/anim";\r\nimport "./style.css";\r\n\r\nexport default function Component() {\r\n    const ref = useRef<HTMLDivElement>(null);\r\n    const [reverse, setReverse] = useState(0);\r\n\r\n    return (\r\n        <div>\r\n            <div ref={ref} animate-on="custom" animate-out="" animate-sequence=".anim-sequence-item" animate-sequence-type="slide-down fade-in"\r\n                animate-sequence-reverse={[undefined, \'\', \'in\', \'out\'][reverse]}>\r\n                <div className="anim-sequence-item"></div>\r\n                <div className="anim-sequence-item"></div>\r\n                <div className="anim-sequence-item"></div>\r\n                <div className="anim-sequence-item"></div>\r\n                <div className="anim-sequence-item"></div>\r\n            </div>\r\n            <select onChange={(e) => setReverse(e.currentTarget.selectedIndex)}>\r\n                <option>Normal</option>\r\n                <option>Reverse in/out</option>\r\n                <option>Reverse in</option>\r\n                <option>Reverse out</option>\r\n            </select>{\' \'}\r\n            <button onClick={() => animateIn(ref.current!, \'custom\')}>Animate</button>{\' \'}\r\n            <button onClick={() => animateOut(ref.current!, \'custom\')}>Reset</button>\r\n        </div>\r\n    );\r\n}\r\n',x=".anim-sequence-item {\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: lightgray;\r\n    opacity: 0;\r\n}\r\n";function j(){return(0,t.jsx)(l.iV,{component:h,source:{tsx:u,css:x}})}var p=i(7749);function f(){var e=(0,r.useRef)(null),n=(0,r.useState)(1),i=(0,m.Z)(n,2),a=i[0],c=i[1];return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",Object.assign({ref:e,"animate-on":"custom","animate-sequence":".anim-autostart-item","animate-sequence-type":"slide-down fade-in"},{children:(0,p.rx)(" ",a).split("").map((function(e,n){return(0,t.jsx)("div",{className:"anim-autostart-item","is-animate-sequence":""},n)}))})),(0,t.jsx)("button",Object.assign({onClick:function(){return(0,s.l$)(e.current,"custom","",!0)}},{children:"Animate"}))," ",(0,t.jsx)("button",Object.assign({onClick:function(){return c((function(e){return++e}))}},{children:"Add"}))," ",(0,t.jsx)("button",Object.assign({onClick:function(){return(0,s.OR)(e.current,"custom"),c(1)}},{children:"Reset"}))]})}var b='import { useRef, useState } from "react";\r\nimport { animateIn, animateOut } from "brew-js/anim";\r\nimport { repeat } from "zeta-dom/util";\r\nimport "./style.css";\r\n\r\nexport default function Component() {\r\n    const ref = useRef<HTMLDivElement>(null);\r\n    const [count, setCount] = useState(1);\r\n    return (\r\n        <div>\r\n            <div ref={ref} animate-on="custom" animate-sequence=".anim-autostart-item" animate-sequence-type="slide-down fade-in">\r\n                {repeat(\' \', count).split(\'\').map((v, i) => (\r\n                    <div key={i} className="anim-autostart-item" is-animate-sequence=""></div>\r\n                ))}\r\n            </div>\r\n            <button onClick={() => animateIn(ref.current!, \'custom\', \'\', true)}>Animate</button>{\' \'}\r\n            <button onClick={() => setCount(v => ++v)}>Add</button>{\' \'}\r\n            <button onClick={() => (animateOut(ref.current!, \'custom\'), setCount(1))}>Reset</button>\r\n        </div>\r\n    );\r\n}\r\n',v=".anim-autostart-item {\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: lightgray;\r\n    opacity: 0;\r\n}\r\n";function g(){return(0,t.jsx)(l.iV,{component:f,source:{tsx:b,css:v}})}function w(e){const n=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",ul:"ul",li:"li",del:"del",strong:"strong"},e.components),{Module:i,ImportHint:r,VersionTimeline:s,Badge:a}=n;return a||y("Badge",!1),a.Optional||y("Badge.Optional",!0),a.Version||y("Badge.Version",!0),r||y("ImportHint",!0),i||y("Module",!0),s||y("VersionTimeline",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{name:"brew-js/anim"}),"\n",(0,t.jsx)(n.h1,{children:"animateIn"}),"\n",(0,t.jsx)(n.p,{children:"Starts intro animation for contents within the specified element."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Since element states are maintained with CSS classes, it is recommended to use ",(0,t.jsx)(n.a,{href:"/docs/react/mixin/AnimateMixin",children:"mixins"})," in React."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"animateIn(element, trigger)\r\nanimateIn(element, trigger, scope)\r\nanimateIn(element, trigger, scope, autoStart)\r\nanimateIn(element, trigger, scope, filterCallback)\n"})}),"\n",(0,t.jsx)(r,{name:"animateIn",module:"brew-js/anim",global:"brew.animateIn"}),"\n",(0,t.jsx)(n.h3,{children:"Parameters"}),"\n",(0,t.jsxs)("dl",{children:[(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"element"})}),(0,t.jsx)(n.p,{children:"A DOM element."}),(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"trigger"})}),(0,t.jsxs)(n.p,{children:["A string specifying the type of event, which is matched against whitespace-seperated list of values of the ",(0,t.jsx)(n.code,{children:"animate-on"})," attribute."]}),(0,t.jsx)(n.p,{children:"The following two values has special usage:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"show"}),": intro for page, when using ",(0,t.jsx)(n.a,{href:"/docs/router/create-router",children:"router"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"open"}),": intro for flyouts and dialogs, when using with ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"openFlyout"})})]}),"\n"]}),(0,t.jsxs)(n.h4,{children:[(0,t.jsx)(n.code,{children:"scope"})," ",(0,t.jsx)(a.Optional,{})]}),(0,t.jsx)(n.p,{children:"A CSS selector which when specified, any descendant elements which are also descendant of such elements will be excluded from animation."}),(0,t.jsxs)(n.h4,{children:[(0,t.jsx)(n.code,{children:"autoStart"})," ",(0,t.jsx)(a.Optional,{})," ",(0,t.jsx)(a.Version,{})]}),(0,t.jsxs)(n.p,{children:["Whether newly matched elements should be animated automatically without needs for calling ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"animateIn"})})," again."]}),(0,t.jsxs)(n.h4,{children:[(0,t.jsx)(n.code,{children:"filterCallback"})," ",(0,t.jsx)(a.Optional,{})]}),(0,t.jsx)(n.p,{children:"Optional callback to filter out target elements to be animated."})]}),"\n",(0,t.jsx)(n.h3,{children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"A promise that resolves when all animations are completed, or after 1.5 seconds timeout."}),"\n",(0,t.jsx)(n.h2,{children:"DOM directives"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"animateIn"})," works together with a series of attributes defined on elements to be animated:"]}),"\n",(0,t.jsxs)("dl",{children:[(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"animate-in"})}),(0,t.jsx)(n.p,{children:"Defines an element having intro animation."}),(0,t.jsx)(n.p,{children:"It may contains a whitespace-seperated list of keywords that enables a set of default effect:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"fade-in"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"slide-down"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"slide-up"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"slide-left"})," or"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"slide-right"})}),"\n"]}),(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"animate-out"})}),(0,t.jsx)(n.p,{children:"Enables outro animation for an element."}),(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"animate-on"})}),(0,t.jsxs)(n.p,{children:["A whitespace-seperated list of values, for which the element will be animated if one of them\r\nmatches the ",(0,t.jsx)(n.code,{children:"trigger"})," parameter passed to ",(0,t.jsx)(n.code,{children:"animateIn"}),". Default is ",(0,t.jsx)(n.code,{children:"show"}),"."]}),(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"animate-sequence"})}),(0,t.jsx)(n.p,{children:"Defines a selector to match descendant elements, to be animated in sequence."}),(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"animate-sequence-type"})}),(0,t.jsxs)(n.p,{children:["Same as ",(0,t.jsx)(n.code,{children:"animate-in"})," but is applied to elements matched by ",(0,t.jsx)(n.code,{children:"animate-sequence"})," attribute."]}),(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"animate-sequence-reverse"})}),(0,t.jsxs)(n.p,{children:["If the attribute is present, elements matched by ",(0,t.jsx)(n.code,{children:"animate-sequence"})," attribute are animated\r\nin reversed order:"]}),(0,t.jsxs)("dl",{children:[(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"<empty-string>"})}),(0,t.jsx)(n.p,{children:"Both intro and outro sequence are animated in reversed order."}),(0,t.jsxs)(n.h4,{children:[(0,t.jsx)(n.code,{children:"in"})," ",(0,t.jsx)(a.Version,{})]}),(0,t.jsx)(n.p,{children:"Only intro animation is in reversed order."}),(0,t.jsxs)(n.h4,{children:[(0,t.jsx)(n.code,{children:"out"})," ",(0,t.jsx)(a.Version,{})]}),(0,t.jsx)(n.p,{children:"Only outro animation is in reversed order."})]}),(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"is-animate-sequence"})}),(0,t.jsx)(n.p,{children:"Marks an element to be animated in a sequence. The directive is optional when the animation sequence\r\nis to be triggered manually."}),(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"<custom-animate-in>"})}),(0,t.jsxs)(n.p,{children:["Custom animation handler can be registered by ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"addAnimateIn"})})," or ",(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"addAnimateOut"})}),",\r\nwhere it can enabled by specifying a attribute of the same name of the registered animation."]})]}),"\n",(0,t.jsx)(n.h2,{children:"CSS classes"}),"\n",(0,t.jsxs)(n.p,{children:["When animation starts, the animated element is added the ",(0,t.jsx)(n.code,{children:"tweening-in"})," CSS class."]}),"\n",(0,t.jsxs)(n.p,{children:["Any new CSS transitions or animations initiated by the  ",(0,t.jsx)(n.code,{children:"tweening-in"})," CSS class\r\nwill be awaited."]}),"\n",(0,t.jsx)(n.h2,{children:"Events"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"animatein"})," event is fired for the animated element. Promise returned from ",(0,t.jsx)(n.code,{children:"animatein"})," event\r\nwill be awaited."]}),"\n",(0,t.jsx)(n.h2,{children:"Example: Simple example"}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(n.h2,{children:"Example: Animate sequence"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Outro sequence is supported since v0.6.0."}),"\n"]}),"\n",(0,t.jsx)(j,{}),"\n",(0,t.jsxs)(n.h2,{children:["Example: Auto start for new elements ",(0,t.jsx)(n.del,{children:"0.6.0"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["For new elements of a animate sequence to be animated automatically,\r\nnew element should have ",(0,t.jsx)(n.code,{children:"is-animate-sequence"})," attributes present."]}),"\n"]}),"\n",(0,t.jsx)(g,{}),"\n",(0,t.jsx)(n.h2,{children:"Version information"}),"\n",(0,t.jsx)(s,{module:"brew-js",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"0.1.0"})," Introduced"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"0.6.0"})," ",(0,t.jsx)(n.code,{children:"autoStart"})," option ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.code,{children:"in"})," ",(0,t.jsx)(n.code,{children:"out"})," for ",(0,t.jsx)(n.code,{children:"[animate-sequence-reverse]"})," ",(0,t.jsx)("br",{})," outro sequence"]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{children:"See also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"animateOut"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"addAnimateIn"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:":",children:(0,t.jsx)(n.code,{children:"addAnimateOut"})})}),"\n"]})]})}var q=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(w,e)})):w(e)};function y(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);