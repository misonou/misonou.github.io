"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[8455],{8455:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var i=o(2556),n=o(4519),r=o(758),s=o(7749),l=function(){return l=Object.assign||function(e){for(var t,o=1,i=arguments.length;o<i;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)},d="#F5B041",c="#52BE80",h="#AF7AC5",p=[{mode:0,color:d,pos:"left top"},{mode:0,color:d,pos:"left bottom"},{mode:0,color:d,pos:"right top"},{mode:0,color:d,pos:"right bottom"},{mode:0,color:c,pos:"left top inset-y"},{mode:0,color:c,pos:"left bottom inset-y"},{mode:0,color:c,pos:"right top inset-y"},{mode:0,color:c,pos:"right bottom inset-y"},{mode:0,color:h,pos:"left top inset"},{mode:0,color:h,pos:"left bottom inset"},{mode:0,color:h,pos:"right top inset"},{mode:0,color:h,pos:"right bottom inset"},{mode:0,color:d,pos:"left center"},{mode:0,color:d,pos:"right center"},{mode:0,color:d,pos:"top center"},{mode:0,color:d,pos:"bottom center"},{mode:0,color:h,pos:"left center inset"},{mode:0,color:h,pos:"right center inset"},{mode:0,color:h,pos:"top center inset"},{mode:0,color:h,pos:"bottom center inset"},{mode:0,color:d,pos:"center"},{mode:1,color:d,pos:"left"},{mode:1,color:h,pos:"left inset"},{mode:1,color:d,pos:"right"},{mode:1,color:h,pos:"right inset"},{mode:2,color:d,pos:"top"},{mode:2,color:h,pos:"top inset"},{mode:2,color:d,pos:"bottom"},{mode:2,color:h,pos:"bottom inset"},{mode:1,color:d,pos:"center auto"},{mode:2,color:d,pos:"auto center"}];function a(){var e=(0,n.useState)("0"),t=e[0],o=e[1],d=(0,n.useRef)(null);return(0,n.useEffect)((function(){var e=d.current.querySelector(".wrapper");(0,s.VL)(e.querySelectorAll("div")).forEach((function(t){(0,r.FK)(t,e,t.dataset.pos,d.current)}))}),[]),(0,i.jsxs)("div",l({id:"position-keyword"},{children:[(0,i.jsx)("div",l({id:"position-keyword-options"},{children:["Both axes","X-axis only","Y-axis only"].map((function(e,n){return(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"demo_pos",value:String(n),checked:String(n)===t,onChange:function(e){return e.target.checked&&o(e.target.value)}}),(0,i.jsx)("span",{children:e})]},n)}))})),(0,i.jsx)("div",l({id:"position-keyword-container",ref:d},{children:(0,i.jsx)("div",l({className:"wrapper"},{children:p.map((function(e){return(0,i.jsx)("div",l({className:"element","data-pos":e.pos,style:{background:e.color,opacity:+t!==e.mode?0:1}},{children:e.pos}),e.pos)}))}))}))]}))}function x(e){const t=Object.assign({h1:"h1",p:"p",div:"div",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",blockquote:"blockquote",del:"del",a:"a",ul:"ul",li:"li"},e.components),{Module:o,Snippets:s,Badge:l}=t;return l||f("Badge",!1),l.Deprecated||f("Badge.Deprecated",!0),l.Optional||f("Badge.Optional",!0),o||f("Module",!0),s||f("Snippets",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{name:"@misonou/react-css-utils"}),"\n",(0,i.jsx)(t.h1,{children:"position"}),"\n",(0,i.jsx)(t.p,{children:"Places element in alignment to another element."}),"\n",(0,i.jsx)(s,{title:"Example of alignments",snippets:["left bottom","left bottom inset","left bottom inset-y","left center","left center inset"],render:(e,o,s)=>((0,n.useEffect)((()=>{const e=o.current.querySelector(".wrapper"),t=o.current.querySelector(".element");(0,r.FK)(t,e,s,o.current)}),[e]),(0,i.jsx)(t.div,{className:"wrapper",style:{position:"relative",width:100,height:100,margin:50,background:"lightgray",border:"2px dotted"},children:(0,i.jsx)(t.div,{className:"element",style:{position:"absolute",width:50,height:50,background:"blue"}})}))}),"\n",(0,i.jsx)(t.h2,{children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"position(element, to, dir)\r\nposition(element, to, dir, within)\r\nposition(element, to, dir, within, offset)\r\nposition(element, to, dir, options)\n"})}),"\n",(0,i.jsx)(t.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"element"})}),(0,i.jsxs)(t.p,{children:["Element to be placed. It must be styled with ",(0,i.jsx)(t.code,{children:"position: absolute"})," or ",(0,i.jsx)(t.code,{children:"position: fixed"}),"."]}),(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Prior to ",(0,i.jsx)(t.code,{children:"v1.1.2"}),", only ",(0,i.jsx)(t.code,{children:"position: fixed"})," is supported."]}),"\n"]}),(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"to"})}),(0,i.jsx)(t.p,{children:"Target element where position is calculated against."}),(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"dir"})}),(0,i.jsx)(t.p,{children:"A space-delimited string specifying how element is aligned in x and y direction. Possible keywords are:"}),(0,i.jsxs)("dl",{children:[(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"left"})}),(0,i.jsx)(t.p,{children:"Element is aligned to the left edge of the reference position."}),(0,i.jsxs)(t.p,{children:["It is aligned left-to-left if vertical direction is aligned ",(0,i.jsx)(t.code,{children:"top"}),", ",(0,i.jsx)(t.code,{children:"bottom"}),", or either ",(0,i.jsx)(t.code,{children:"inset"})," and ",(0,i.jsx)(t.code,{children:"inset-x"})," is specified.\r\nOtherwise it is aligned right-to-left."]}),(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"right"})}),(0,i.jsx)(t.p,{children:"Element is aligned to the right edge of the reference position."}),(0,i.jsxs)(t.p,{children:["It is aligned right-to-right if vertical direction is aligned ",(0,i.jsx)(t.code,{children:"top"}),", ",(0,i.jsx)(t.code,{children:"bottom"}),", or either ",(0,i.jsx)(t.code,{children:"inset"})," and ",(0,i.jsx)(t.code,{children:"inset-x"})," is specified.\r\nOtherwise it is aligned left-to-right."]}),(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"top"})}),(0,i.jsx)(t.p,{children:"Element is aligned to the top edge of the reference position."}),(0,i.jsxs)(t.p,{children:["It is aligned bottom-to-top if unless either ",(0,i.jsx)(t.code,{children:"inset"})," and ",(0,i.jsx)(t.code,{children:"inset-y"})," is specified."]}),(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"bottom"})}),(0,i.jsx)(t.p,{children:"Element is aligned to the bottom edge of the reference position."}),(0,i.jsxs)(t.p,{children:["It is aligned top-to-bottom if unless either ",(0,i.jsx)(t.code,{children:"inset"})," and ",(0,i.jsx)(t.code,{children:"inset-y"})," is specified."]}),(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"center"})}),(0,i.jsxs)(t.p,{children:["Element is center-aligned to the reference position. It is the default value for horizontal direction if neither ",(0,i.jsx)(t.code,{children:"left"})," nor ",(0,i.jsx)(t.code,{children:"right"})," is specified;\r\nand for vertical direction if neither ",(0,i.jsx)(t.code,{children:"top"})," nor ",(0,i.jsx)(t.code,{children:"bottom"})," is specified."]}),(0,i.jsxs)(t.h4,{children:[(0,i.jsx)(t.code,{children:"auto"})," ",(0,i.jsx)(t.del,{children:"v1.3.1"})]}),(0,i.jsx)(t.p,{children:"Keeps current position in a particular axis."}),(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"inset"})}),(0,i.jsx)(t.p,{children:"Controls whether element is positioned inside the reference position."}),(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"inset-x"})}),(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.code,{children:"left"})," or ",(0,i.jsx)(t.code,{children:"right"})," keyword."]}),(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"inset-y"})}),(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.code,{children:"top"})," or ",(0,i.jsx)(t.code,{children:"bottom"})," keyword."]})]}),(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"#s-positioning-keywords",children:"Positioning keywords"}),"."]}),(0,i.jsxs)(t.h4,{children:[(0,i.jsx)(t.code,{children:"within"})," ",(0,i.jsx)(l.Optional,{})]}),(0,i.jsx)(t.p,{children:"When specified, element will be positioned inside the bounds of the specified element."}),(0,i.jsx)(t.p,{children:"If there is not enough rooms, the element will be placed in the opposite side, or fit to the bound container."}),(0,i.jsxs)(t.h4,{children:[(0,i.jsx)(t.code,{children:"offset"})," ",(0,i.jsx)(l.Optional,{})]}),(0,i.jsx)(t.p,{children:"Specifies how far the element is positioned away from the reference position in pixels."}),(0,i.jsxs)(t.h4,{children:[(0,i.jsx)(t.code,{children:"options"})," ",(0,i.jsx)(l.Optional,{})," ",(0,i.jsx)(t.del,{children:"v1.2.0"})]}),(0,i.jsxs)("dl",{children:[(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"within"})}),(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.code,{children:"within"})," parameter."]}),(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"offset"})}),(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.code,{children:"offset"})," parameter."]}),(0,i.jsx)(t.h4,{children:(0,i.jsx)(t.code,{children:"scrollToFit"})}),(0,i.jsxs)(t.p,{children:["Whether to scroll the viewport in order to place element in desired position before trying to\r\nplace in the opposite direction (",(0,i.jsx)(t.code,{children:"flip"}),") or fit to viewport's boundaries (",(0,i.jsx)(t.code,{children:"fit"}),")."]}),(0,i.jsxs)(t.h4,{children:[(0,i.jsx)(t.code,{children:"axis"})," ",(0,i.jsx)(l.Deprecated,{})]}),(0,i.jsxs)(t.p,{children:["Aligns element only on a particular axis. Possible keywords are ",(0,i.jsx)(t.code,{children:"x-only"})," and ",(0,i.jsx)(t.code,{children:"y-only"}),"."]}),(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.code,{children:"auto"})," keyword or without keyword in such direction in ",(0,i.jsx)(t.code,{children:"dir"})," parameter, i.e. ",(0,i.jsx)(t.code,{children:"left auto"})," or ",(0,i.jsx)(t.code,{children:"left"})," for ",(0,i.jsx)(t.code,{children:"x-only"}),"."]}),"\n"]})]})]}),"\n",(0,i.jsx)(t.h2,{children:"Positioning keywords"}),"\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(t.h2,{children:"Auto fitting"}),"\n",(0,i.jsxs)(t.p,{children:["When there is not enough room to place the element in the desired position, ",(0,i.jsx)(t.code,{children:"position"})," will try to place it in\r\nthe opposite direction, and eventually fit it to the boundary of document window or the ",(0,i.jsx)(t.code,{children:"within"})," element."]}),"\n",(0,i.jsx)(s,{title:"Example of auto fitting",snippets:["normal","flip","fit"],render:(e,o,s)=>((0,n.useEffect)((()=>{const e=o.current.querySelector(".wrapper"),t=o.current.querySelector(".element");(0,r.FK)(t,e,"left bottom",o.current)}),[e]),(0,i.jsx)(t.div,{className:"wrapper",style:{position:"relative",width:100,height:100,margin:50,marginBottom:40,background:"lightgray",border:"2px dotted"},children:(0,i.jsx)(t.div,{className:"element",style:{position:"absolute",width:50,height:50,border:[0,5,10][e]+"px solid",outlineOffset:-5,outline:e>1?"5px yellow solid":"none",background:"blue"}})}))}),"\n",(0,i.jsx)(t.h2,{children:"Positioning within a container"}),"\n",(0,i.jsx)(s,{title:"Example of within constaint",snippets:['position(..., "left bottom")','position(..., "left bottom", within)'],render:(e,o,s)=>((0,n.useEffect)((()=>{const t=o.current.querySelector(".wrapper"),i=o.current.querySelector(".within"),n=o.current.querySelector(".element");(0,r.FK)(n,t,"left bottom",1===e?i:o.current)}),[e]),(0,i.jsx)(t.div,{className:"within",style:{position:"relative",background:"darkgray",marginBottom:50,border:"2px dotted"},children:(0,i.jsx)(t.div,{className:"wrapper",style:{position:"relative",width:100,height:100,margin:25,background:"lightgray",border:"2px dotted"},children:(0,i.jsx)(t.div,{className:"element",style:{position:"absolute",minWidth:50,minHeight:50,background:"blue"}})})}))}),"\n",(0,i.jsx)(t.h2,{children:"Positioning in scrollable container"}),"\n",(0,i.jsx)(s,{title:"Effects of scrollToFit option",snippets:['position(..., "left bottom")','position(..., "left bottom", \n  { scrollToFit: true })'],render:(e,o,s)=>((0,n.useEffect)((()=>{const t=o.current.querySelector(".wrapper"),i=o.current.querySelector(".within"),n=o.current.querySelector(".element");i.scrollTop=0,(0,r.FK)(n,t,"left bottom",{scrollToFit:1===e,within:o.current})}),[e]),(0,i.jsx)(t.div,{className:"within",style:{position:"relative",height:100,border:"2px dotted",overflow:"auto"},children:(0,i.jsx)(t.div,{className:"wrapper",style:{position:"relative",width:100,height:100,margin:0,marginBottom:100,background:"lightgray",border:"2px dotted"},children:(0,i.jsx)(t.div,{className:"element",style:{position:"absolute",minWidth:50,minHeight:50,background:"blue"}})})}))}),"\n",(0,i.jsx)(t.h2,{children:"Positioning with offset"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"offset"})," option specifies how far the element is positioned away from the reference position in pixels. Negative ",(0,i.jsx)(t.code,{children:"offset"})," is accepted."]}),"\n",(0,i.jsx)(s,{title:"Effects of offset option",snippets:['position(..., "left bottom", \n  { offset: 10 })','position(..., "left bottom", \n  { offset: -10 })','position(..., "left bottom inset", \n  { offset: 10 })','position(..., "left bottom inset", \n  { offset: -10 })'],render:(e,o,s)=>((0,n.useEffect)((()=>{const t=o.current.querySelector(".wrapper"),i=o.current.querySelector(".element");(0,r.FK)(i,t,["left bottom","left bottom inset"][e>>1],{offset:[10,-10][1&e],within:o.current})}),[e]),(0,i.jsx)(t.div,{className:"wrapper",style:{position:"relative",width:100,height:100,margin:50,background:"lightgray",border:"2px dotted"},children:(0,i.jsx)(t.div,{className:"element",style:{position:"absolute",width:50,height:50,background:"blue"}})}))}),"\n",(0,i.jsx)(t.h2,{children:"Positioning element with margin"}),"\n",(0,i.jsx)(t.p,{children:"When the positioned element has margin, the element will be distanced that number of pixels from the boundary of either"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["the ",(0,i.jsx)(t.code,{children:"within"})," element when supplied;"]}),"\n",(0,i.jsx)(t.li,{children:"or the document window."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In the latter case, there will always be a minimum of 10 pixels of margin when the element is fitted to the boundary of document window."}),"\n",(0,i.jsx)(s,{title:"Effects of element's margin",snippets:["left bottom","left bottom inset"],render:(e,o,s)=>((0,n.useEffect)((()=>{const e=o.current.querySelector(".wrapper"),t=o.current.querySelector(".within"),i=o.current.querySelector(".element");(0,r.FK)(i,e,s,t)}),[e]),(0,i.jsx)(t.div,{className:"within",style:{position:"relative",background:"darkgray",border:"2px dotted"},children:(0,i.jsx)(t.div,{className:"wrapper",style:{position:"relative",width:100,height:100,margin:25,background:"lightgray",border:"2px dotted"},children:(0,i.jsx)(t.div,{className:"element",style:{position:"absolute",minWidth:50,minHeight:50,background:"blue",margin:10}})})}))})]})}var m=function(e={}){const{wrapper:t}=e.components||{};return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(x,e)})):x(e)};function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);