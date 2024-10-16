"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[8809],{8809:function(e,r,n){n.r(r);var s=n(2556);function t(e){const r=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre",h4:"h4",ul:"ul",li:"li",strong:"strong"},e.components),{Module:n,MemberList:t,VersionTimeline:c,Badge:a}=r;return a||i("Badge",!1),a.Deprecated||i("Badge.Deprecated",!0),a.Optional||i("Badge.Optional",!0),a.Version||i("Badge.Version",!0),t||i("MemberList",!0),n||i("Module",!0),c||i("VersionTimeline",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{name:"brew-js/extension/router"}),"\n",(0,s.jsx)(r.h1,{children:"Route interface"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"Route"})," object is returned by ",(0,s.jsx)(r.a,{href:":",children:(0,s.jsx)(r.code,{children:"app.route"})}),"."]}),"\n",(0,s.jsx)(t,{i:"Route",ip:["[key]","remainingSegments"],im:["parse()","set()","replace()","getPath()","toJSON()","toString()"]}),"\n",(0,s.jsx)(r.h2,{children:"Properties"}),"\n",(0,s.jsx)(r.h3,{children:(0,s.jsx)(r.code,{children:"Route[key]"})}),"\n",(0,s.jsx)(r.p,{children:"Gets and sets the route parameter."}),"\n",(0,s.jsx)(r.p,{children:"The available keys depends on the routes given when initializing the router."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"app.useRouter({\r\n    routes: [\r\n        '/{view:user}/{id}'\r\n        '/{view}',\r\n        '/'\r\n    ]\r\n});\r\n\r\nObject.keys(app.routes); // ['view', 'id', 'remainingSegments']\n"})}),"\n",(0,s.jsx)(r.h3,{children:(0,s.jsx)(r.code,{children:"Route.remainingSegments"})}),"\n",(0,s.jsxs)(r.p,{children:["Gets or sets the path matched by the ending wildcard (",(0,s.jsx)(r.code,{children:"*"}),")."]}),"\n",(0,s.jsx)(r.h2,{children:"Instance methods"}),"\n",(0,s.jsx)(r.h3,{children:(0,s.jsx)(r.code,{children:"Route.getPath()"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"route.getPath(params)\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Gets the path represented by specified route parameters.\r\nIf none of the routes matches, the root path ",(0,s.jsx)(r.code,{children:"/"})," is returned."]}),"\n",(0,s.jsx)(r.h4,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"params"})}),(0,s.jsx)(r.p,{children:"A dictionary containing route parameters."})]}),"\n",(0,s.jsx)(r.h3,{children:(0,s.jsx)(r.code,{children:"Route.parse()"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"route.parse(path)\n"})}),"\n",(0,s.jsx)(r.p,{children:"Parses a given string and returns route parameters if any route matches the path."}),"\n",(0,s.jsx)(r.h4,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"path"})}),(0,s.jsx)(r.p,{children:"A string specifying a path."})]}),"\n",(0,s.jsx)(r.h3,{children:(0,s.jsx)(r.code,{children:"Route.replace()"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"replace(key, value)\r\nreplace(key, value, keepQuery)\r\nreplace(params)\r\nreplace(params, keepQuery)\n"})}),"\n",(0,s.jsx)(r.p,{children:"Updates router and cause the app to redirect to the newly resolved path.\r\nVisit of current page in the history stack will be replaced."}),"\n",(0,s.jsx)(r.h4,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"key"})}),(0,s.jsx)(r.p,{children:"Name of route parameter."}),(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"params"})}),(0,s.jsx)(r.p,{children:"A dictionary containing new parameter values. Unrecorgnized keys are omitted."}),(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"value"})}),(0,s.jsx)(r.p,{children:"New value."}),(0,s.jsxs)(r.h4,{children:[(0,s.jsx)(r.code,{children:"keepQuery"})," ",(0,s.jsx)(a.Optional,{})," ",(0,s.jsx)(a.Version,{})]}),(0,s.jsx)(r.p,{children:"Whether to keep current query string and hash."})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"set(key, value)\r\nset(key, value, keepQuery)\r\nset(params)\r\nset(params, keepQuery)\r\nset(path)\n"})}),"\n",(0,s.jsx)(r.p,{children:"Updates router and cause the app to navigate to the newly resolved path."}),"\n",(0,s.jsx)(r.h4,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"key"})}),(0,s.jsx)(r.p,{children:"Name of route parameter."}),(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"value"})}),(0,s.jsx)(r.p,{children:"New value."}),(0,s.jsx)(r.h4,{children:(0,s.jsx)(r.code,{children:"params"})}),(0,s.jsx)(r.p,{children:"A dictionary containing new parameter values. Unrecorgnized keys are omitted."}),(0,s.jsxs)(r.h4,{children:[(0,s.jsx)(r.code,{children:"path"})," ",(0,s.jsx)(a.Deprecated,{})]}),(0,s.jsx)(r.p,{children:"A string specifying a path."}),(0,s.jsxs)(r.h4,{children:[(0,s.jsx)(r.code,{children:"keepQuery"})," ",(0,s.jsx)(a.Optional,{})," ",(0,s.jsx)(a.Version,{})]}),(0,s.jsx)(r.p,{children:"Whether to keep current query string and hash."})]}),"\n",(0,s.jsx)(r.h3,{children:(0,s.jsx)(r.code,{children:"Route.toJSON()"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"route.toJSON()\n"})}),"\n",(0,s.jsx)(r.p,{children:"Gets all route parameters as a plain JSON object."}),"\n",(0,s.jsx)(r.h3,{children:(0,s.jsx)(r.code,{children:"Route.toString()"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"route.toString()\n"})}),"\n",(0,s.jsx)(r.p,{children:"Gets the path represented by current route parameters."}),"\n",(0,s.jsx)(r.h2,{children:"Version information"}),"\n",(0,s.jsx)(c,{module:"brew-js",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"0.1.0"})," Introduced"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"0.2.0"})," ",(0,s.jsx)(r.code,{children:"Route.toJSON()"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:"Route.getPath()"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"0.2.3"})," ",(0,s.jsx)(r.code,{children:"Route.replace()"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"0.6.13"})," ",(0,s.jsx)(r.code,{children:"Route.set()"}),": ",(0,s.jsx)(r.code,{children:"keepQuery"})," parameter ",(0,s.jsx)("br",{}),(0,s.jsx)(r.code,{children:"Route.replace()"}),": ",(0,s.jsx)(r.code,{children:"keepQuery"})," parameter"]}),"\n"]})})]})}function i(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}r.default=function(e={}){const{wrapper:r}=e.components||{};return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);