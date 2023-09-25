"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[111],{111:function(n,e,r){r.r(e),r.d(e,{default:function(){return m}});var i=r(2556),t=r(8258),s=function(){return s=Object.assign||function(n){for(var e,r=1,i=arguments.length;r<i;r++)for(var t in e=arguments[r])Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n},s.apply(this,arguments)};function a(){return(0,i.jsxs)("div",s({className:"css-anim"},{children:[(0,i.jsx)("div",{}),(0,i.jsx)("br",{}),(0,i.jsx)("button",s({onClick:function(n){var e=n.currentTarget.parentElement;(0,t.Yr)(e,"anim").then((function(){e.querySelector("span").innerText="Completed"}),(function(){e.querySelector("span").innerText="Cancelled"}))}},{children:"Run Animation"})),(0,i.jsx)("button",s({onClick:function(n){var e=n.currentTarget.parentElement;e.classList.remove("anim"),e.querySelector("span").innerText=""}},{children:"Reset"})),(0,i.jsx)("span",{})]}))}var o="import { runCSSTransition } from \"zeta-dom/cssUtil\";\r\nimport \"./style.css\";\r\n\r\nexport default function Component() {\r\n    return (\r\n        <div className=\"css-anim\">\r\n            <div></div>\r\n            <br />\r\n            <button onClick={(e) => {\r\n                const div = e.currentTarget.parentElement!;\r\n                runCSSTransition(div, 'anim').then(() => {\r\n                    div.querySelector('span')!.innerText = 'Completed';\r\n                }, function () {\r\n                    div.querySelector('span')!.innerText = 'Cancelled';\r\n                });\r\n            }}>\r\n                Run Animation\r\n            </button>\r\n            <button onClick={(e) => {\r\n                const div = e.currentTarget.parentElement!;\r\n                div.classList.remove('anim');\r\n                div.querySelector('span')!.innerText = '';\r\n            }}>\r\n                Reset\r\n            </button>\r\n            <span></span>\r\n        </div>\r\n    );\r\n}\r\n",c=".css-anim:before {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: antiquewhite;\r\n    transition: background-color 1s;\r\n}\r\n\r\n.css-anim.anim:before {\r\n    background-color: aquamarine;\r\n}\r\n\r\n.css-anim > div {\r\n    display: inline-block;\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: lightgray;\r\n}\r\n\r\n.css-anim.anim > div {\r\n    animation: css-anim 2s;\r\n}\r\n\r\n@keyframes css-anim {\r\n    0% {\r\n        transform: none;\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n",l=r(398);function d(){return(0,i.jsx)(l.iV,{component:a,source:{tsx:o,css:c}})}function h(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",ul:"ul",li:"li"},n.components),{Module:r,Badge:t}=e;return t||u("Badge",!1),t.Optional||u("Badge.Optional",!0),r||u("Module",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{name:"zeta-dom"}),"\n",(0,i.jsx)(e.h1,{children:"runCSSAnimation"}),"\n",(0,i.jsx)(e.p,{children:"One can get notifies when CSS transitions or animations finish."}),"\n",(0,i.jsx)(e.h2,{children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"runCSSAnimation(element, className)\r\nrunCSSAnimation(element, className, callback)\r\nrunCSSAnimation(element, className, removeAfterComplete)\n"})}),"\n",(0,i.jsx)(e.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(e.h4,{children:(0,i.jsx)(e.code,{children:"element"})}),(0,i.jsx)(e.p,{children:"A DOM element."}),(0,i.jsx)(e.h4,{children:(0,i.jsx)(e.code,{children:"className"})}),(0,i.jsx)(e.p,{children:"A string specifying the class name which triggers CSS animation or transition."}),(0,i.jsxs)(e.h4,{children:[(0,i.jsx)(e.code,{children:"callback"})," ",(0,i.jsx)(t.Optional,{})]}),(0,i.jsx)(e.p,{children:"A callback that is synchronously called when animation or transition is completed."}),(0,i.jsxs)(e.h4,{children:[(0,i.jsx)(e.code,{children:"removeAfterComplete"})," ",(0,i.jsx)(t.Optional,{})]}),(0,i.jsxs)(e.p,{children:["A ",(0,i.jsx)(e.code,{children:"boolean"})," that if set to ",(0,i.jsx)(e.code,{children:"true"}),", the added CSS classes will be removed once the animation\r\nhas completed."]})]}),"\n",(0,i.jsx)(e.h3,{children:"Return value"}),"\n",(0,i.jsxs)(e.p,{children:["A ",(0,i.jsx)(e.code,{children:"Promise"})," object that is:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"rejected if the class is removed before the animation or transition is completed"}),"\n",(0,i.jsx)(e.li,{children:"rejected if the element already has the given class"}),"\n",(0,i.jsx)(e.li,{children:"fulfilled immediately if there is no animation or transition triggered"}),"\n",(0,i.jsx)(e.li,{children:"fulfilled after animation or transition is completed otherwise."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{children:"Example"}),"\n",(0,i.jsxs)(e.p,{children:["Here CSS transitions or animations is triggered by adding a ",(0,i.jsx)(e.code,{children:"className"})," to an element. Transitions or animations on the element and all its descendants will be listened and be waited for."]}),"\n",(0,i.jsx)(d,{})]})}var m=function(n={}){const{wrapper:e}=n.components||{};return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(h,n)})):h(n)};function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);