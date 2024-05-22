"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[6554],{6554:function(e,n,r){r.r(n);var s=r(2556);function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",code:"code",h3:"h3",pre:"pre",a:"a"},e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Known issues"}),"\n",(0,s.jsx)(n.p,{children:"Here listed major known issues over different versions, listing affected versions and possible workaround."}),"\n",(0,s.jsx)(n.h2,{children:"Compatibility with bundlers"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Affects"})," ",(0,s.jsx)(n.code,{children:"zeta-dom@<=0.5.1"})," ",(0,s.jsx)(n.code,{children:"brew-js@<=0.6.5"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{children:"WebPack 5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Module not found: Error: Can't resolve 'zeta-dom/util' in '[xxx]'\r\nDid you mean to import zeta-dom/util.js?\r\nBREAKING CHANGE: The request 'zeta-dom/util' failed to resolve only because it was resolved as fully specified\n"})}),"\n",(0,s.jsx)(n.p,{children:"When using newer version of WebPack, the following WebPack rule is required:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\r\n    /* ... */\r\n    module: {\r\n        rules: [\r\n            {\r\n                test: /\\.m?js/,\r\n                resolve: {\r\n                    fullySpecified: false\r\n                }\r\n            }\r\n        ]\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/react-app-rewired",children:(0,s.jsx)(n.code,{children:"react-app-rewired"})})," or ",(0,s.jsx)(n.a,{href:"https://craco.js.org/",children:(0,s.jsx)(n.code,{children:"craco"})})," to customize when using ",(0,s.jsx)(n.code,{children:"create-react-app"}),"."]}),"\n",(0,s.jsx)(n.h3,{children:"@rollup"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"@rollup/plugin-alias"})," plugin:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import alias from '@rollup/plugin-alias';\r\nexport default {\r\n    /* ... */\r\n    plugins: [\r\n        alias({\r\n            entries: {\r\n                'zeta-dom': './node_modules/zeta-dom',\r\n                'brew-js': './node_modules/brew-js'\r\n            }\r\n        })\r\n    ]\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In case of Vite, add the ",(0,s.jsx)(n.code,{children:"resolve.alias"})," option:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"export default {\r\n    /* ... */\r\n    resolve: {\r\n        alias: {\r\n            'zeta-dom': './node_modules/zeta-dom',\r\n            'brew-js': './node_modules/brew-js'\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Animation sequence not working (2024/04/25)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Affects"})," ",(0,s.jsx)(n.code,{children:"brew-js@0.6.0-0.6.4"})," ",(0,s.jsx)(n.code,{children:"brew-js-react@0.5.0-0.5.5"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Animation sequence may not work if ",(0,s.jsx)(n.code,{children:"zeta-dom"})," is installed with version prior to ",(0,s.jsx)(n.code,{children:"0.4.13"})," because of out-dated dependency list."]}),"\n",(0,s.jsxs)(n.p,{children:["To fix the issue, update ",(0,s.jsx)(n.code,{children:"zeta-dom"})," to ",(0,s.jsx)(n.code,{children:"0.4.13"})," or newer."]}),"\n",(0,s.jsx)(n.h2,{children:"Event listener bound to parent element not working after Chrome updated to version 117 (2023/09/13)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Affects"})," ",(0,s.jsx)(n.code,{children:"zeta-dom@<=0.3.14"})," ",(0,s.jsx)(n.code,{children:"zeta-dom@<=0.4.6"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Chrome 117 introduced experimetal extension to the ",(0,s.jsx)(n.code,{children:"Iterator"})," base type that affects\r\nevent emitting mechanism."]}),"\n",(0,s.jsxs)(n.p,{children:["To fix the issue, upgrade to version ",(0,s.jsx)(n.code,{children:"0.3.15"})," or ",(0,s.jsx)(n.code,{children:"0.4.7"})," for ",(0,s.jsx)(n.code,{children:"zeta-dom"}),"."]}),"\n",(0,s.jsx)(n.h2,{children:"Choice field causing parent component to update indefinitely (2023/05/05)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Affects"})," ",(0,s.jsx)(n.code,{children:"zeta-dom-react@0.3.10-0.4.3"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When using ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"ChoiceField"})})," (e.g. for dropdowns) and having ",(0,s.jsx)(n.code,{children:"value"})," and ",(0,s.jsx)(n.code,{children:"onChange"})," prop, the following error is logged in console:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"ReactJS: Maximum update depth exceeded error\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A bug is introduced in ",(0,s.jsx)(n.code,{children:"v0.3.10"})," that will cause ",(0,s.jsx)(n.code,{children:"onChange"})," of an unselected controlled choice field to call every time component refreshes, which leads to infinite update when ",(0,s.jsx)(n.code,{children:"onChange"})," sets new state every time."]}),"\n",(0,s.jsx)(n.p,{children:"Problematic code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Dropdown\r\n    value={value}\r\n    onChange={() && setValue(newValueEveryTime())} />\n"})}),"\n",(0,s.jsx)(n.p,{children:"To fix this without updating to newer version:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Dropdown\r\n    value={value}\r\n    onChange={v => ensureValueIsUpdated(v) && setValue(newValueEveryTime())} />\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Failed to compile in HMR mode (2023/03/30)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Affects"})," ",(0,s.jsx)(n.code,{children:"brew-js@<=0.4.7"})," ",(0,s.jsx)(n.code,{children:"brew-js-react@<=0.3.1"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Due to certain version of ",(0,s.jsx)(n.code,{children:"react-refresh"})," failed to correctly infer JS file with extension ",(0,s.jsx)(n.code,{children:".js"})," whether it is ",(0,s.jsx)(n.code,{children:"commonjs"})," or ",(0,s.jsx)(n.code,{children:"esm"})," file, the following error will occured when running ",(0,s.jsx)(n.code,{children:"npm start"})," or ",(0,s.jsx)(n.code,{children:"yarn start"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Failed to compile.\r\n\r\nnode_modules/brew-js/include/external/jquery.js 2:28\r\nModule parse failed: Unexpected token (2:28)\r\nFile was processed with these loaders:\r\n\r\n./node_modules/@pmmmwh/react-refresh-webpack-plugin/loader/index.js\r\nYou may need an additional loader to handle the result of these loaders.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To fix the issue, upgrade to version ",(0,s.jsx)(n.code,{children:"0.4.8"})," or later for ",(0,s.jsx)(n.code,{children:"brew-js"})," and ",(0,s.jsx)(n.code,{children:"0.3.2"})," or later for ",(0,s.jsx)(n.code,{children:"brew-js-react"}),"."]}),"\n",(0,s.jsx)(n.h2,{children:"Unable for a controlled field to update its value (2023/02/03)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Affects"})," ",(0,s.jsx)(n.code,{children:"zeta-dom-react@0.3.6-0.3.9"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A major bug was identified that affects ",(0,s.jsx)(n.code,{children:"v0.3.6"}),"-",(0,s.jsx)(n.code,{children:"0.3.9"}),". Please upgrade to newer version."]}),"\n",(0,s.jsx)(n.h2,{children:"useAsync not working in React 18 (2023/02/03)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Affects"})," ",(0,s.jsx)(n.code,{children:"zeta-dom-react@<=0.3.9"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Before ",(0,s.jsx)(n.code,{children:"v0.3.10"}),", there is known incompatibility when strict mode is enabled. Please upgrade to newer version."]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);