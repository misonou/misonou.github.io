"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[7807],{7807:function(e,t,a){a.r(t);var n=a(2556);function r(e){const t=Object.assign({h1:"h1",h3:"h3",code:"code",p:"p",h2:"h2",pre:"pre"},e.components),{Module:a,WaterpipeExample:r}=t;return a||l("Module",!0),r||l("WaterpipeExample",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{name:"waterpipe"}),"\n",(0,n.jsx)(t.h1,{children:"Variable functions"}),"\n",(0,n.jsx)(t.h3,{children:(0,n.jsx)(t.code,{children:"as"})}),"\n",(0,n.jsx)(t.p,{children:"Stores the input to global variable with the given name, and outputs the value."}),"\n",(0,n.jsx)(r,{data:{value:"foo"},template:"\n{{value as tmpvar}}\n{{tmpvar}}"}),"\n",(0,n.jsx)(t.h3,{children:(0,n.jsx)(t.code,{children:"let"})}),"\n",(0,n.jsxs)(t.p,{children:["Defines global variable(s) with given names and values.\r\nIn contrast to ",(0,n.jsx)(t.code,{children:"as"}),", ",(0,n.jsx)(t.code,{children:"let"})," does not return values to output."]}),"\n",(0,n.jsx)(r,{data:{value:"foo"},template:"\n{{let tmpvar value}}\n{{tmpvar}}"}),"\n",(0,n.jsx)(r,{data:{value:"foo"},template:"\n{{let tmpvar1 [ value upper ] \n      tmpvar2 [ value length ]}}\n{{tmpvar1}}\n{{tmpvar2}}"}),"\n",(0,n.jsx)(t.h2,{children:"Global variable scope"}),"\n",(0,n.jsx)(t.p,{children:"Global variables, although are readable everywhere even in template inclusion,\r\nare overwritable within the template which they are declared only."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"waterpipe.pipes.innerTemplate = '{{tmpvar + 1 as tmpvar}}';\n"})}),"\n",(0,n.jsx)(r,{pipes:{innerTemplate:"{{tmpvar + 1 as tmpvar}}"},template:"\n{{let tmpvar 1}}\nOutside: {{tmpvar}}\nInside:  {{innerTemplate}}\nOutside: {{tmpvar}}"})]})}function l(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(r,e)})):r(e)}}}]);