"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[5649],{5649:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var a=r(2556),n=r(885),s=r(882),o=r(6502),c=r(5465),i=r(4050),d=r(7749),p=r(6122),u=r(4519),l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function h(){var e=(0,s.N)({productType:""},"contact","asc",10),t=(0,p.Wd)({productType:"",page:"1"},!0),r=(0,n.Z)(t,2),h=r[0],g=r[1];(0,u.useMemo)((function(){var t=h.page,r=l(h,["page"]);e.filters=r,e.pageIndex=(+t||1)-1}),[h]),(0,u.useEffect)((function(){return e.on("viewChange",(function(){g(Object.assign(Object.assign({},e.filters),{page:String(e.pageIndex+1)}))}))}),[e]);var m=e.getView(c,(function(t,r){return r.productType&&(t=t.filter((function(e){return e.productType===r.productType}))),e.sort(t)})),x=(0,n.Z)(m,1)[0];return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",Object.assign({className:"table-filter"},{children:(0,a.jsx)(i.Lt,{label:"Product Type",items:["","Desktop","Laptop","Tablet"],allowUnselect:!0,variant:"button",value:e.filters.productType,onChange:function(t){return e.filters.productType=t}})})),(0,a.jsxs)("table",Object.assign({className:"app-demo-view-table"},{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Product ID"}),(0,a.jsx)("th",{children:"Product Type"})]})}),(0,a.jsx)("tbody",{children:x.map((function(e,t){return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.contact}),(0,a.jsx)("td",{children:e.productId}),(0,a.jsx)("td",{children:e.productType})]},t)}))})]})),(0,a.jsxs)("div",Object.assign({className:"table-footer"},{children:[(0,a.jsxs)("div",{children:[e.itemCount," items"]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("i",Object.assign({className:(0,o.AK)({disabled:0===e.pageIndex}),onClick:function(){return e.pageIndex--}},{children:"Prev"})),(0,d.rx)(" ",e.pageCount).split("").map((function(t,r){return(0,a.jsx)("i",Object.assign({className:(0,o.AK)({active:r===e.pageIndex}),onClick:function(){return e.pageIndex=r}},{children:r+1}),r)})),(0,a.jsx)("i",Object.assign({className:(0,o.AK)({disabled:e.pageIndex===e.pageCount-1}),onClick:function(){return e.pageIndex++}},{children:"Next"}))]})]}))]})}var g="import { classNames, useDataView } from \"zeta-dom-react\";\r\nimport data from \"src/data/examples/sales.json\";\r\nimport { Dropdown } from \"src/components/controls\";\r\nimport { repeat } from \"zeta-dom/util\";\r\nimport { useQueryParam } from \"brew-js-react\";\r\nimport { useEffect, useMemo } from \"react\";\r\nimport \"./style.css\";\r\n\r\nexport default function Component() {\r\n    const dataView = useDataView({ productType: '' }, 'contact', 'asc', 10);\r\n\r\n    const [params, setParams] = useQueryParam({ productType: '', page: '1' },\r\n        // enable snapshotOnUpdate so that use can navigate back\r\n        // to previous state through history\r\n        true);\r\n\r\n    useMemo(() => {\r\n        // update data view when query string changes\r\n        const { page, ...filters } = params;\r\n        dataView.filters = filters;\r\n        dataView.pageIndex = (+page || 1) - 1;\r\n    }, [params]);\r\n\r\n    useEffect(() => {\r\n        // update query string view when view changes\r\n        return dataView.on('viewChange', () => {\r\n            setParams({\r\n                ...dataView.filters,\r\n                page: String(dataView.pageIndex + 1),\r\n            });\r\n        });\r\n    }, [dataView]);\r\n\r\n    const [pageItems] = dataView.getView(data, (items, filters) => {\r\n        if (filters.productType) {\r\n            items = items.filter(v => v.productType === filters.productType);\r\n        }\r\n        return dataView.sort(items);\r\n    });\r\n\r\n    return (\r\n        <div>\r\n            {/* Filter controls */}\r\n            <div className=\"table-filter\">\r\n                <Dropdown label=\"Product Type\" items={['', 'Desktop', 'Laptop', 'Tablet']} allowUnselect variant=\"button\"\r\n                    value={dataView.filters.productType}\r\n                    onChange={v => dataView.filters.productType = v} />\r\n            </div>\r\n\r\n            {/* Table */}\r\n            <table className=\"app-demo-view-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Product ID</th>\r\n                        <th>Product Type</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    {pageItems.map((v, i) => (\r\n                        <tr key={i}>\r\n                            <td>{v.contact}</td>\r\n                            <td>{v.productId}</td>\r\n                            <td>{v.productType}</td>\r\n                        </tr>\r\n                    ))}\r\n                </tbody>\r\n            </table>\r\n\r\n            {/* Simple pagination */}\r\n            <div className=\"table-footer\">\r\n                <div>{dataView.itemCount} items</div>\r\n                <div>\r\n                    <i className={classNames({ disabled: dataView.pageIndex === 0 })} onClick={() => dataView.pageIndex--}>Prev</i>\r\n                    {repeat(' ', dataView.pageCount).split('').map((v, i) => (\r\n                        <i key={i} className={classNames({ active: i === dataView.pageIndex })} onClick={() => dataView.pageIndex = i}>{i + 1}</i>\r\n                    ))}\r\n                    <i className={classNames({ disabled: dataView.pageIndex === dataView.pageCount - 1 })} onClick={() => dataView.pageIndex++}>Next</i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    );\r\n}\r\n",m=r(6119);function x(){return(0,a.jsx)(m.iV,{component:h,source:{tsx:g},maxHeight:"none"})}function f(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",blockquote:"blockquote",ul:"ul",li:"li",strong:"strong"},e.components),{Module:r,ImportHint:n,VersionTimeline:s,Badge:o}=t;return o||j("Badge",!1),o.Optional||j("Badge.Optional",!0),n||j("ImportHint",!0),r||j("Module",!0),s||j("VersionTimeline",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{name:"brew-js-react"}),"\n",(0,a.jsx)(t.h1,{children:"useQueryParam"}),"\n",(0,a.jsx)(t.p,{children:"Returns value of the specified parameter in query string, and a function to update it."}),"\n",(0,a.jsx)(t.h2,{children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"useQueryParam(name, defaultValue)\r\nuseQueryParam(name, defaultValue, snapshotOnUpdate)\r\nuseQueryParam(dict)\r\nuseQueryParam(dict, snapshotOnUpdate)\n"})}),"\n",(0,a.jsx)(n,{name:"useQueryParam",module:"brew-js-react",require:"useQueryParam",global:"brew.react.useQueryParam"}),"\n",(0,a.jsx)(t.h3,{children:"Parameters"}),"\n",(0,a.jsxs)("dl",{children:[(0,a.jsx)(t.h4,{children:(0,a.jsx)(t.code,{children:"name"})}),(0,a.jsx)(t.p,{children:"Name of the parameter."}),(0,a.jsx)(t.h4,{children:(0,a.jsx)(t.code,{children:"defaultValue"})}),(0,a.jsx)(t.p,{children:"Default value when the specified parameter is not present in query string."}),(0,a.jsx)(t.h4,{children:(0,a.jsx)(t.code,{children:"dict"})}),(0,a.jsx)(t.p,{children:"A dictionary containing parameter names and associated default values."}),(0,a.jsxs)(t.h4,{children:[(0,a.jsx)(t.code,{children:"snapshotOnUpdate"})," ",(0,a.jsx)(o.Optional,{})]}),(0,a.jsxs)(t.p,{children:["Whether to create snapshot in browser's history when query parameter is updated. Default is ",(0,a.jsx)(t.code,{children:"false"}),"."]})]}),"\n",(0,a.jsx)(t.h2,{children:"Return value"}),"\n",(0,a.jsxs)("dl",{children:[(0,a.jsx)(t.h4,{children:(0,a.jsx)(t.code,{children:"[value, updateValue]"})}),(0,a.jsxs)(t.p,{children:["When ",(0,a.jsx)(t.code,{children:"name"})," is supplied as argument, it returns the current value of the specified parameter in query string,\r\nand a function to update that parameter."]}),(0,a.jsx)(t.h4,{children:(0,a.jsx)(t.code,{children:"[readOnlyDict, updateValues]"})}),(0,a.jsxs)(t.p,{children:["When ",(0,a.jsx)(t.code,{children:"dict"})," is supplied as argument, it returns a read-only dictionary containing values of the specified parameter in query string,\r\nand a function to update parameters."]}),(0,a.jsx)(t.p,{children:"The update function always performs partial update, meaning that unsupplied parameters are unchanged."})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"To clear a parameter in query string, pass empty string to that parameter.\r\nIt will be re-populated with default value in next render."}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Update function has no effect when parent view container is going to unmount due to navigation."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{children:"Example"}),"\n",(0,a.jsx)(t.p,{children:"The following example links data view to query string parameters."}),"\n",(0,a.jsx)(x,{}),"\n",(0,a.jsx)(t.h2,{children:"Version information"}),"\n",(0,a.jsx)(s,{module:"brew-js-react",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"0.5.6"})," Introduced"]}),"\n"]})})]})}var y=function(e={}){const{wrapper:t}=e.components||{};return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(f,e)})):f(e)};function j(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},882:function(e,t,r){r.d(t,{N:function(){return g}});var a=r(4519),n=r(6770),s=r(7749),o=r(1266),c=r(2674),i=(0,s.D8)(),d=h.prototype,p=new n.pF;function u(e,t){var r=(0,s.Jp)(e)&&-1,a=(0,s.Jp)(t)&&1;return r||a?r+a:"string"===typeof e||"string"===typeof t?String(e).localeCompare(t,void 0,{caseFirst:"upper"}):e-t}function l(e,t,r){i(e).setPageCount(Math.ceil(r/(t||r||1)))}function h(e,t,r,a){var n=this,o={filters:(0,s.l7)({},e),sortBy:t,sortOrder:r||t&&"asc",itemCount:null,pageIndex:0,pageSize:void 0===a?h.pageSize:a},c=i(n,{setPageCount:(0,s.aU)(n,"pageCount",0,!0),defaults:o,items:[]}),d=function(){p.emit("viewChange",n)},u=function(e){var t=this!==n,r=t||(0,s.Zr)(e.newValues,(function(e,t){return"pageCount"!==t&&"itemCount"!==t}));c.sorted=c.items.length?void 0:[],t&&(c.filtered=c.sorted),n.pageIndex=t||!(0,s.nr)(e.newValues,"pageIndex")?0:n.pageIndex,r&&(0,s.lb)(d)};e=(0,s.l7)(n,o).filters;for(var l in(0,s.YP)(n,u),(0,s.YP)(e,u),e)(0,s.aU)(e,l);(0,s.vV)(e)}function g(e,t,r,n,i){if("string"!==typeof e)return g("__dataView",e,t,r,n);var d=(0,c.F)(e),p=(0,o.Rk)(),u=(0,a.useState)((function(){return new h(t,r,n,i).reset(d.get())}))[0];return(0,a.useEffect)((function(){return(0,s.kV)(u.on("viewChange",(function(){d.set(u.toJSON()),p()})),d.onPopState?d.onPopState((function(e){d.set(u.toJSON()),u.reset(e)})):s.ZT)}),[u]),u}(0,s.Ou)(h,{pageSize:0}),(0,s.r9)(h,{get hasPreviousPage(){return this.pageIndex>0},get hasNextPage(){return this.pageIndex<this.pageCount-1},on:function(e,t){return p.add(this,e,t)},getView:function(e,t){var r=this,a=i(r),n=r.pageIndex||0,s=r.pageSize||0;e!==a.items&&(a.items=e||[],a.filtered=a.items.length?void 0:[],a.sorted=a.filtered),t=t||function(e){return r.sort(e)};var o=a.sorted||(a.sorted=t.call(r,a.filtered||a.items,r.filters,r.sortBy,r.sortOrder)||[]);return a.filtered=o,e&&(r.itemCount=o.length),[o.slice(n*s,s?(n+1)*s:void 0),o.length]},sort:function(e,t){if(e=(0,s.VL)(e),!(0,s.mf)(t)){var r=t||this.sortBy;if(!r)return e;t=function(e){return e[r]}}var a="desc"===this.sortOrder?-1:1,n=new Map;return(0,s.S6)(e,(function(e,r){n.set(r,t(r))})),e.sort((function(e,t){var r=n.get(e),o=n.get(t);return a*((0,s.kJ)(r)?(0,s.Zr)(r,(function(e,t){return u(e,o[t])})):u(r,o))}))},toggleSort:function(e,t){var r=this;r.sortBy===e?r.sortOrder="asc"===r.sortOrder?"desc":"asc":(r.sortBy=e,r.sortOrder=t||"asc")},toJSON:function(){var e=this;return(0,s.l7)((0,s.ei)(e,(0,s.XP)(i(e).defaults)),{filters:(0,s.l7)({},e.filters),itemCount:e.itemCount})},reset:function(e){var t=i(this);return delete t.itemCount,(0,s.l7)(this,e||t.defaults)}}),(0,s.aU)(d,"sortBy"),(0,s.aU)(d,"sortOrder"),(0,s.aU)(d,"itemCount",0,(function(e){return i(this).itemCount=e,l(this,this.pageSize,e),e||0})),(0,s.aU)(d,"pageSize",0,(function(e){return l(this,e,this.itemCount),e})),(0,s.aU)(d,"pageIndex",0,(function(e){return Math.max(0,(0,s.Jp)(i(this).itemCount)?e:Math.min(e,this.pageCount-1))})),(0,s.aU)(d,"filters",{},(function(e,t){return(0,s.l7)(t||{},e)}))},5465:function(e){e.exports=JSON.parse('[{"contact":"Paul Thomas","sex":"M","age":43,"state":"OH","productId":"M01-F0024","productType":"Desktop"},{"contact":"Margo Simms","sex":"F","age":37,"state":"WV","productId":"GT13-0024","productType":"Desktop"},{"contact":"Sam Stine","sex":"M","age":26,"state":"PA","productId":"I3670","productType":"Desktop"},{"contact":"Moe Eggert","sex":"M","age":35,"state":"PA","productId":"I3593","productType":"Laptop"},{"contact":"Jessica Elk","sex":"F","age":55,"state":"PA","productId":"15M-ED","productType":"Laptop"},{"contact":"Sally Struthers","sex":"F","age":45,"state":"PA","productId":"GT13-0024","productType":"Desktop"},{"contact":"Michelle Samms","sex":"F","age":46,"state":"OH","productId":"GA401IV","productType":"Laptop"},{"contact":"Mick Roberts","sex":"M","age":23,"state":"OH","productId":"MY2J2LL","productType":"Tablet"},{"contact":"Ed Klondike","sex":"M","age":52,"state":"OH","productId":"81TC00","productType":"Laptop"},{"contact":"Phil Jones","sex":"M","age":56,"state":"WV","productId":"M01-F0024","productType":"Desktop"},{"contact":"Rick James","sex":"M","age":49,"state":"PA","productId":"GA401IV","productType":"Laptop"},{"contact":"Sue Etna","sex":"F","age":54,"state":"OH","productId":"GT13-0024","productType":"Desktop"},{"contact":"Jason Case","sex":"M","age":57,"state":"PA","productId":"81TC00","productType":"Laptop"},{"contact":"Doug Johnson","sex":"M","age":51,"state":"PA","productId":"I3670","productType":"Desktop"},{"contact":"Andy Sands","sex":"M","age":56,"state":"OH","productId":"MY2J2LL","productType":"Tablet"},{"contact":"Kim Collins","sex":"F","age":49,"state":"PA","productId":"I3593","productType":"Laptop"},{"contact":"Edna Sanders","sex":"F","age":46,"state":"OH","productId":"15M-ED","productType":"Laptop"},{"contact":"Michelle Samms","sex":"F","age":46,"state":"NY","productId":"MY2J2LL","productType":"Tablet"},{"contact":"Mick Roberts","sex":"M","age":23,"state":"PA","productId":"I3593","productType":"Laptop"},{"contact":"Sally Struthers","sex":"F","age":45,"state":"NY","productId":"81TC00","productType":"Laptop"},{"contact":"Jason Case","sex":"M","age":57,"state":"PA","productId":"M01-F0024","productType":"Desktop"},{"contact":"Doug Johnson","sex":"M","age":51,"state":"PA","productId":"GA401IV","productType":"Laptop"},{"contact":"Paul Thomas","sex":"M","age":43,"state":"OH","productId":"81TC00","productType":"Laptop"},{"contact":"Margo Simms","sex":"F","age":37,"state":"WV","productId":"Q526FA","productType":"Laptop"},{"contact":"Michelle Samms","sex":"F","age":46,"state":"NY","productId":"I3670","productType":"Desktop"},{"contact":"Mick Roberts","sex":"M","age":23,"state":"PA","productId":"Q526FA","productType":"Laptop"},{"contact":"Ed Klondike","sex":"M","age":52,"state":"OH","productId":"Q526FA","productType":"Laptop"},{"contact":"Moe Eggert","sex":"M","age":35,"state":"PA","productId":"15M-ED","productType":"Laptop"},{"contact":"Jessica Elk","sex":"F","age":55,"state":"PA","productId":"GA401IV","productType":"Laptop"},{"contact":"Phil Jones","sex":"M","age":56,"state":"WV","productId":"M01-F0024","productType":"Desktop"},{"contact":"Rick James","sex":"M","age":49,"state":"PA","productId":"GA401IV","productType":"Laptop"},{"contact":"Sue Etna","sex":"F","age":54,"state":"OH","productId":"GT13-0024","productType":"Desktop"},{"contact":"Kim Collins","sex":"F","age":49,"state":"PA","productId":"I3593","productType":"Laptop"},{"contact":"Edna Sanders","sex":"F","age":46,"state":"OH","productId":"15M-ED","productType":"Laptop"},{"contact":"Michelle Samms","sex":"F","age":46,"state":"NY","productId":"MY2J2LL","productType":"Tablet"},{"contact":"Sally Struthers","sex":"F","age":45,"state":"NY","productId":"81TC00","productType":"Laptop"},{"contact":"Jason Case","sex":"M","age":57,"state":"PA","productId":"M01-F0024","productType":"Desktop"},{"contact":"Doug Johnson","sex":"M","age":51,"state":"PA","productId":"GA401IV","productType":"Laptop"},{"contact":"Moe Eggert","sex":"M","age":35,"state":"PA","productId":"I3593","productType":"Laptop"}]')}}]);