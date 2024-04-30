"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[6438],{6438:function(e,n,r){r.r(n);var t=r(2556);function i(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre",ol:"ol",li:"li"},e.components),{Module:r,WaterpipeExample:i}=n;return r||a("Module",!0),i||a("WaterpipeExample",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"waterpipe"}),"\n",(0,t.jsx)(n.h1,{children:"Scope and name visibility"}),"\n",(0,t.jsx)(n.p,{children:"There is two type of scopes in which object path are resolved against."}),"\n",(0,t.jsx)(n.h2,{children:"Input object scope"}),"\n",(0,t.jsxs)(n.p,{children:["In iteration using ",(0,t.jsx)(n.code,{children:"foreach"})," statement or a function argument is invoked,\r\na new scope for input object is created."]}),"\n",(0,t.jsxs)(n.p,{children:["Each newly created scope is stacked on top of the outer one and each scope in\r\nthe stack can be retrieved through special variable starting with ",(0,t.jsx)(n.code,{children:"@"}),":\r\n",(0,t.jsx)(n.code,{children:"@0"})," the current scope, ",(0,t.jsx)(n.code,{children:"@1"})," one scope out, and way up to ",(0,t.jsx)(n.code,{children:"@n"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition, the ",(0,t.jsx)(n.code,{children:"@root"})," variable can access the input object supplied to the template."]}),"\n",(0,t.jsx)(n.h2,{children:"Global object scope"}),"\n",(0,t.jsx)(n.p,{children:"In template inclusion, there is a new scope for global variables.\r\nThis affects where global variables are written to in template."}),"\n",(0,t.jsx)(n.p,{children:"Global variables are always written in the current global objects.\r\nTherefore in case of name collision, global variables declared outside the current global object scope\r\nwill not be overwritten."}),"\n",(0,t.jsx)(n.h2,{children:"Name visibility"}),"\n",(0,t.jsx)(n.p,{children:"The first segment of an object path are subject to visibility of objects in the stack and global objects.\r\nIt is tested whether the property is defined on the input or global objects."}),"\n",(0,t.jsx)(n.p,{children:"To illustrate considering the following scenario:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"var input = {\r\n    data: {\r\n        items: [1, 2, 3]\r\n    }\r\n};\r\n\r\nwaterpipe.pipes.myTemplate = '{{foreach items}}{{[ myVar | \"=\" | . ] join}}{{/foreach}}';\r\nwaterpipe.globals.myGlobal = 'myGlobal';\r\nwaterpipe.globals.myVar = 'myVar';\r\n\r\nwaterpipe('{{data myTemplate}}', input, {\r\n    globals: {\r\n        myVar: 'myVar redefined'\r\n    }\r\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"When the two object path is evaluated, the following objects are tested in sequence for property existence."}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"data"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Input object of ",(0,t.jsx)(n.code,{children:"waterpipe()"})," (",(0,t.jsx)(n.code,{children:"@0"})," or ",(0,t.jsx)(n.code,{children:"@root"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Global object supplied to ",(0,t.jsx)(n.code,{children:"waterpipe()"})]}),"\n",(0,t.jsxs)(n.li,{children:["Global object ",(0,t.jsx)(n.code,{children:"waterpipe.globals"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"myVal"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Input object scope created by function argument ",(0,t.jsx)(n.code,{children:"[ myVal + 1 ]"})," (",(0,t.jsx)(n.code,{children:"@0"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Input object scope created by ",(0,t.jsx)(n.code,{children:"foreach"})," (",(0,t.jsx)(n.code,{children:"@1"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Input object of ",(0,t.jsx)(n.code,{children:"myTemplate"}),"  (",(0,t.jsx)(n.code,{children:"@2"})," or ",(0,t.jsx)(n.code,{children:"@root"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Global object scope for ",(0,t.jsx)(n.code,{children:"myTemplate"})]}),"\n",(0,t.jsxs)(n.li,{children:["Global object supplied to ",(0,t.jsx)(n.code,{children:"waterpipe()"})]}),"\n",(0,t.jsxs)(n.li,{children:["Global object ",(0,t.jsx)(n.code,{children:"waterpipe.globals"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["And by the time",(0,t.jsx)(n.code,{children:"myVal"})," is evaluated for the first iteration, the following name is visible:"]}),"\n",(0,t.jsx)(i,{data:{data:{items:[1,2,3]}},pipes:{myTemplate:'{{foreach items}}{{[ myVar | "=" | . ] join}}{{/foreach}}'},globals:{myVar:"myVar redefined"},template:"\n{{data myTemplate}}\n"}),"\n",(0,t.jsx)(n.h2,{children:"Read-write scope"}),"\n",(0,t.jsx)(n.p,{children:"Although global variables are readable everywhere even in template inclusion,\r\nthey are only overwritable within the template which they are declared."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"waterpipe.pipes.innerTemplate = '{{tmpvar + 1 as tmpvar}}';\n"})}),"\n",(0,t.jsx)(i,{pipes:{innerTemplate:"{{tmpvar + 1 as tmpvar}}"},template:"\n{{let tmpvar 1}}\nOutside: {{tmpvar}}\nInside:  {{innerTemplate}}\nOutside: {{tmpvar}}"}),"\n",(0,t.jsx)(n.p,{children:"Variables declared in the current global variable scope will mask out\r\nvariable of the same name in outer scope."})]})}function a(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}}}]);