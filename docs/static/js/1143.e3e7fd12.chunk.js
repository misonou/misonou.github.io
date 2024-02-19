"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[1143],{1143:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(2556),o=t(1266),a=t(6770),c=function(){return c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},c.apply(this,arguments)};function s(e){var n=e.console;return(0,r.jsx)("div",c({ref:(0,o.wp)((function(e){var t=function(e){this.element=e},r=new a.pF(e,null,{captureDOMEvents:!0,autoDestroy:!0});r.tap((function(e){return n.log("tap:",e.type,"- target:",e.target),r.emit(e)}));var o=new t(e.querySelector("button"));r.add(o,{click:function(e){n.log("event:",e.type,"- context:",e.context)}})}))},{children:(0,r.jsx)("button",{children:"Button"})}))}var i="import { DemoComponentProps } from \"src/components/docs\";\r\nimport { useRefInitCallback } from \"zeta-dom-react\";\r\nimport { ZetaEventContainer } from \"zeta-dom/events\";\r\n\r\nexport default function Component({ console }: DemoComponentProps) {\r\n    return (\r\n        <div ref={useRefInitCallback(initContainer)}>\r\n            <button>Button</button>\r\n        </div>\r\n    );\r\n\r\n    function initContainer(element: HTMLElement) {\r\n        class Component {\r\n            element: HTMLElement;\r\n            constructor(element: HTMLElement) {\r\n                this.element = element;\r\n            }\r\n        }\r\n\r\n        const container = new ZetaEventContainer<Component>(element, null, {\r\n            captureDOMEvents: true,\r\n            autoDestroy: true,\r\n        });\r\n        container.tap(e => {\r\n            console.log('tap:', e.type, '- target:', e.target);\r\n            return container.emit(e);\r\n        });\r\n\r\n        const component = new Component(element.querySelector('button')!);\r\n        container.add(component, {\r\n            click(e) {\r\n                console.log('event:', e.type, '- context:', e.context);\r\n            }\r\n        });\r\n    }\r\n}\r\n",l=t(8137);function d(){return(0,r.jsx)(l.iV,{component:s,source:{tsx:i},console:!0})}function p(e){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",blockquote:"blockquote",a:"a",ul:"ul",li:"li"},e.components),{Module:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{name:"zeta-dom/events"}),"\n",(0,r.jsx)(n.h1,{children:"Events"}),"\n",(0,r.jsxs)(n.p,{children:["All related libraries uses event emitting mechanism provided by ",(0,r.jsx)(n.code,{children:"zeta-dom"}),"."]}),"\n",(0,r.jsx)(n.h2,{children:"Using ZetaEventContainer"}),"\n",(0,r.jsx)(n.p,{children:"Below is an example on how to listen and emit events on custom objects."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { ZetaEventContainer } from \"zeta-dom/events\";\r\n\r\n// in general container will be kept private\r\nconst container = new ZetaEventContainer();\r\n\r\nexport class MyObject {\r\n    // expose method for listening event\r\n    on(event, handler) {\r\n        container.add(this, event, handler);\r\n    }\r\n}\r\n\r\n// emit event for some obj of class MyObject\r\ncontainer.emit('myEvent', obj);\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ZetaEventContainer"})})," is exposed as ",(0,r.jsx)(n.code,{children:"zeta.EventContainer"})," in UMD build."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Delegating DOM events to custom target"}),"\n",(0,r.jsxs)(n.p,{children:["By passing ",(0,r.jsx)(n.code,{children:"captureDOMEvents"})," options, any DOM events can be tapped by event container\r\nprior to normal event handlers."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const container = new ZetaEventContainer(element, null, { captureDOMEvents: true });\r\n// add components with event handlers\r\ncontainer.add(/* ... */);\r\n// re-emit DOM events to components added to this container\r\ncontainer.tap(e => container.emit(e));\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If the component has an property ",(0,r.jsx)(n.code,{children:"element"})," which returns an actual DOM element,\r\nany event handlers added to an event container for that component will also be fired\r\nwhen event is raised for that DOM element."]}),"\n",(0,r.jsx)(n.p,{children:"Here is an example on how to delegate DOM events to custom components."}),"\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(n.h2,{children:"See also"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ZetaEventContainer"})})}),"\n"]})]})}var u=function(e={}){const{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}}}]);