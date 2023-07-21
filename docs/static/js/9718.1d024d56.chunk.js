"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[9718],{9718:function(e,d,n){n.r(d),n.d(d,{default:function(){return a}});var r=n(2556),s=n(6502);function c(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{ref:(0,s.Ht)("metakeychange",(function(e){e.target.nextElementSibling.textContent=e.data})),placeholder:"Try pressing Ctrl/Shift/Alt keys ..."}),(0,r.jsx)("div",{})]})}var t='import { domEventRef } from "zeta-dom-react";\r\n\r\nexport default function Component() {\r\n    return (\r\n        <>\r\n            <input\r\n                ref={domEventRef(\'metakeychange\', e => {\r\n                    e.target.nextElementSibling!.textContent = e.data;\r\n                })}\r\n                placeholder="Try pressing Ctrl/Shift/Alt keys ..." />\r\n            <div></div>\r\n        </>\r\n    );\r\n}\r\n',i=n(5522);function l(){return(0,r.jsx)(i.iV,{component:c,source:{tsx:t}})}function h(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{ref:(0,s.Ht)("keystroke",(function(e){e.target.nextElementSibling.textContent=e.data,e.handled()})),placeholder:"Try pressing keys ..."}),(0,r.jsx)("div",{})]})}var x='import { domEventRef } from "zeta-dom-react";\r\n\r\nexport default function Component() {\r\n    return (\r\n        <>\r\n            <input\r\n                ref={domEventRef(\'keystroke\', e => {\r\n                    e.target.nextElementSibling!.textContent = e.data;\r\n                    e.handled();\r\n                })}\r\n                placeholder="Try pressing keys ..." />\r\n            <div></div>\r\n        </>\r\n    );\r\n}\r\n';function j(){return(0,r.jsx)(i.iV,{component:h,source:{tsx:x}})}function o(e){const d=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},e.components),{Module:n}=d;return n||function(e,d){throw new Error("Expected "+(d?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{name:"zeta-dom"}),"\n",(0,r.jsx)(d.h1,{children:"Keyboard events"}),"\n",(0,r.jsxs)(d.p,{children:["Instead of checking key combination during ",(0,r.jsx)(d.code,{children:"keydown"})," or ",(0,r.jsx)(d.code,{children:"keyup"})," events, Zeta additionally fires two types of keyboard events."]}),"\n",(0,r.jsx)(d.h2,{children:"dom: metakeychange event"}),"\n",(0,r.jsxs)(d.p,{children:["Fired when user starts or stops pressing one of the meta keys, i.e. ",(0,r.jsx)("kbd",{children:"Ctrl"}),", ",(0,r.jsx)("kbd",{children:"Shift"})," and ",(0,r.jsx)("kbd",{children:"Alt"}),"."]}),"\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)(d.h2,{children:"dom: keystroke event"}),"\n",(0,r.jsxs)(d.p,{children:["A ",(0,r.jsx)(d.code,{children:"keystroke"})," event happens when user is pressing a combination of a normal key optinally with meta keys ",(0,r.jsx)("kbd",{children:"Ctrl"}),", ",(0,r.jsx)("kbd",{children:"Shift"})," and ",(0,r.jsx)("kbd",{children:"Alt"}),"."]}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-typescript",children:"dom.on(textarea, 'keystroke', (e) => {\r\n    // printing the key combination, e.g. 'ctrlZ'\r\n    console.log(e.data);\r\n});\n"})}),"\n",(0,r.jsx)(j,{}),"\n",(0,r.jsx)(d.p,{children:"It can also happens when user is pressing a single character key without focusing an input."}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-typescript",children:"dom.on('keystroke', (e) => {\r\n    // e.data may also be a single character, e.g. 'a'\r\n    console.log(e.data);\r\n});\n"})}),"\n",(0,r.jsxs)(d.p,{children:["In addition to ",(0,r.jsx)(d.code,{children:"keystroke"})," event and putting lots of checking what shortcut key user is pressing, all combinations of regconized keys can be listened directly."]}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-typescript",children:"dom.on('ctrlZ', (e) => {\r\n    // undo something\r\n});\n"})}),"\n",(0,r.jsx)(d.h3,{children:"Name of keystroke"}),"\n",(0,r.jsxs)(d.p,{children:["A listenable keystoke event can be one of the non-alphanumeric keys listed below or the combination of one or more modifier keys (",(0,r.jsx)("kbd",{children:"Ctrl"}),", ",(0,r.jsx)("kbd",{children:"Shift"})," and ",(0,r.jsx)("kbd",{children:"Alt"}),") with alphanumeric and non-alphanumeric keys."]}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Event"}),(0,r.jsx)(d.th,{children:"Represented Keystroke"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"upArrow"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)("kbd",{children:"\u2191"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"backspace"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)("kbd",{children:"\u232b"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"ctrlA"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)("kbd",{children:"\u2318"}),"+",(0,r.jsx)("kbd",{children:"A"})," or ",(0,r.jsx)("kbd",{children:"Ctrl"}),"+",(0,r.jsx)("kbd",{children:"A"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"ctrlAltA"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)("kbd",{children:"\u2318"}),"+",(0,r.jsx)("kbd",{children:"\u2325"}),"+",(0,r.jsx)("kbd",{children:"A"})," or ",(0,r.jsx)("kbd",{children:"Ctrl"}),"+",(0,r.jsx)("kbd",{children:"Alt"}),"+",(0,r.jsx)("kbd",{children:"A"})]})]})]})]}),"\n",(0,r.jsx)(d.p,{children:"Below is the list or recognized keys:"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Name"}),(0,r.jsx)(d.th,{children:"ASCII Code"}),(0,r.jsx)(d.th,{children:"Name"}),(0,r.jsx)(d.th,{children:"ASCII Code"}),(0,r.jsx)(d.th,{children:"Name"}),(0,r.jsx)(d.th,{children:"ASCII Code"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"backspace"})}),(0,r.jsx)(d.td,{children:"8"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"numpad1"})}),(0,r.jsx)(d.td,{children:"97"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"f7"})}),(0,r.jsx)(d.td,{children:"118"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"tab"})}),(0,r.jsx)(d.td,{children:"9"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"numpad2"})}),(0,r.jsx)(d.td,{children:"98"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"f8"})}),(0,r.jsx)(d.td,{children:"119"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"enter"})}),(0,r.jsx)(d.td,{children:"13"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"numpad3"})}),(0,r.jsx)(d.td,{children:"99"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"f9"})}),(0,r.jsx)(d.td,{children:"120"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"pause"})}),(0,r.jsx)(d.td,{children:"19"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"numpad4"})}),(0,r.jsx)(d.td,{children:"100"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"f10"})}),(0,r.jsx)(d.td,{children:"121"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"capsLock"})}),(0,r.jsx)(d.td,{children:"20"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"numpad5"})}),(0,r.jsx)(d.td,{children:"101"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"f11"})}),(0,r.jsx)(d.td,{children:"122"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"escape"})}),(0,r.jsx)(d.td,{children:"27"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"numpad6"})}),(0,r.jsx)(d.td,{children:"102"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"f12"})}),(0,r.jsx)(d.td,{children:"123"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"pageUp"})}),(0,r.jsx)(d.td,{children:"33"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"numpad7"})}),(0,r.jsx)(d.td,{children:"103"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"numLock"})}),(0,r.jsx)(d.td,{children:"144"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"pageDown"})}),(0,r.jsx)(d.td,{children:"34"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"numpad8"})}),(0,r.jsx)(d.td,{children:"104"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"scrollLock"})}),(0,r.jsx)(d.td,{children:"145"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"end"})}),(0,r.jsx)(d.td,{children:"35"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"numpad9"})}),(0,r.jsx)(d.td,{children:"105"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"semiColon"})}),(0,r.jsx)(d.td,{children:"186"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"home"})}),(0,r.jsx)(d.td,{children:"36"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"multiply"})}),(0,r.jsx)(d.td,{children:"106"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"equalSign"})}),(0,r.jsx)(d.td,{children:"187"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"leftArrow"})}),(0,r.jsx)(d.td,{children:"37"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"add"})}),(0,r.jsx)(d.td,{children:"107"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"comma"})}),(0,r.jsx)(d.td,{children:"188"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"upArrow"})}),(0,r.jsx)(d.td,{children:"38"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"subtract"})}),(0,r.jsx)(d.td,{children:"109"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"dash"})}),(0,r.jsx)(d.td,{children:"189"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"rightArrow"})}),(0,r.jsx)(d.td,{children:"39"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"decimalPoint"})}),(0,r.jsx)(d.td,{children:"110"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"period"})}),(0,r.jsx)(d.td,{children:"190"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"downArrow"})}),(0,r.jsx)(d.td,{children:"40"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"divide"})}),(0,r.jsx)(d.td,{children:"111"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"forwardSlash"})}),(0,r.jsx)(d.td,{children:"191"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"insert"})}),(0,r.jsx)(d.td,{children:"45"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"f1"})}),(0,r.jsx)(d.td,{children:"112"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"backtick"})}),(0,r.jsx)(d.td,{children:"192"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"delete"})}),(0,r.jsx)(d.td,{children:"46"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"f2"})}),(0,r.jsx)(d.td,{children:"113"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"openBracket"})}),(0,r.jsx)(d.td,{children:"219"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"leftWindow"})}),(0,r.jsx)(d.td,{children:"91"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"f3"})}),(0,r.jsx)(d.td,{children:"114"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"backSlash"})}),(0,r.jsx)(d.td,{children:"220"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"rightWindowKey"})}),(0,r.jsx)(d.td,{children:"92"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"f4"})}),(0,r.jsx)(d.td,{children:"115"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"closeBracket"})}),(0,r.jsx)(d.td,{children:"221"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"select"})}),(0,r.jsx)(d.td,{children:"93"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"f5"})}),(0,r.jsx)(d.td,{children:"116"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"singleQuote"})}),(0,r.jsx)(d.td,{children:"222"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"numpad0"})}),(0,r.jsx)(d.td,{children:"96"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"f6"})}),(0,r.jsx)(d.td,{children:"117"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]})]})]})]})}var a=function(e={}){const{wrapper:d}=e.components||{};return d?(0,r.jsx)(d,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);