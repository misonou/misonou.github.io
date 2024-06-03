"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[4994],{4994:function(e,n,r){r.r(n);var o=r(2556);function t(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",blockquote:"blockquote",a:"a",ul:"ul",li:"li",strong:"strong"},e.components),{Module:r,ImportHint:t,VersionTimeline:s,Badge:c}=n;return c||i("Badge",!1),c.Deprecated||i("Badge.Deprecated",!0),c.Optional||i("Badge.Optional",!0),c.Version||i("Badge.Version",!0),t||i("ImportHint",!0),r||i("Module",!0),s||i("VersionTimeline",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{name:"zeta-dom/domUtil"}),"\n",(0,o.jsx)(n.h1,{children:"getRect"}),"\n",(0,o.jsx)(n.p,{children:"Gets a rect object referring the size of current window or the given element."}),"\n",(0,o.jsx)(n.h2,{children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"getRect()\r\ngetRect(element)\r\ngetRect(element, box)\r\ngetRect(element, includeMargin)\r\ngetRect(element, margin)\n"})}),"\n",(0,o.jsx)(t,{name:"getRect",module:"zeta-dom/domUtil",global:"zeta.util.getRect"}),"\n",(0,o.jsx)(n.h3,{children:"Parameters"}),"\n",(0,o.jsxs)("dl",{children:[(0,o.jsxs)(n.h4,{children:[(0,o.jsx)(n.code,{children:"element"})," ",(0,o.jsx)(c.Optional,{})]}),(0,o.jsx)(n.p,{children:"A DOM element, or other object that is associated to a DOM element."}),(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"#s-special-case",children:"Special case"}),"."]}),"\n"]}),(0,o.jsxs)(n.h4,{children:[(0,o.jsx)(n.code,{children:"box"})," ",(0,o.jsx)(c.Optional,{})," ",(0,o.jsx)(c.Version,{})]}),(0,o.jsx)(n.p,{children:"Type of box according to CSS box model:"}),(0,o.jsxs)("dl",{children:[(0,o.jsx)(n.h4,{children:(0,o.jsx)(n.code,{children:"margin-box"})}),(0,o.jsx)(n.h4,{children:(0,o.jsx)(n.code,{children:"border-box"})}),(0,o.jsx)(n.h4,{children:(0,o.jsx)(n.code,{children:"padding-box"})}),(0,o.jsx)(n.h4,{children:(0,o.jsx)(n.code,{children:"content-box"})})]}),(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#what_is_the_css_box_model",children:"here"})," for explanation of\r\neach keyword. Default is ",(0,o.jsx)(n.code,{children:"border-box"}),"."]}),(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Prior to v0.5.4, the ",(0,o.jsx)(n.code,{children:"box"})," parameter is ignored for root element, i.e. ",(0,o.jsx)(n.code,{children:"document.documentElement"})," or ",(0,o.jsx)(n.code,{children:"<html>"}),"."]}),"\n"]}),(0,o.jsxs)(n.h4,{children:[(0,o.jsx)(n.code,{children:"includeMargin"})," ",(0,o.jsx)(c.Optional,{})," ",(0,o.jsx)(c.Deprecated,{})]}),(0,o.jsx)(n.p,{children:"Whether to extend to outer margin if a side has positive margin."}),(0,o.jsxs)(n.h4,{children:[(0,o.jsx)(n.code,{children:"margin"})," ",(0,o.jsx)(c.Optional,{})]}),(0,o.jsx)(n.p,{children:"Number of pixels extended from the original bounding box, or retracted from when given negative value."})]}),"\n",(0,o.jsx)(n.h3,{children:"Return value"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"Rect"})})," object."]}),"\n",(0,o.jsx)(n.h2,{children:"Special case"}),"\n",(0,o.jsx)(n.p,{children:"Due to compatibility, there are two special case that does not refer to a box of an element:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If no argument or ",(0,o.jsx)(n.code,{children:"window"})," object is supplied, it will return the viewport box,\r\nas reported by ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport",children:(0,o.jsx)(n.code,{children:"visualViewport"})}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"getRect()\r\ngetRect(window)\r\ngetRect(window, 10)\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If root element is supplied with an optional number as second argument,\r\nit will return the box corresponding to a box render by the style ",(0,o.jsx)(n.code,{children:"position: fixed; inset: 0"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"getRect(document.documentElement)\r\ngetRect(document.documentElement, 10)\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{children:"Version information"}),"\n",(0,o.jsx)(s,{module:"zeta-dom",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"0.1.0"})," Introduced"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"0.4.0"})," ",(0,o.jsx)(n.code,{children:"box"})," parameter"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"0.5.4"})," ",(0,o.jsx)(n.code,{children:"box"})," parameter for ",(0,o.jsx)(n.code,{children:"document.documentElement"})]}),"\n"]})})]})}function i(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(t,e)})):t(e)}}}]);