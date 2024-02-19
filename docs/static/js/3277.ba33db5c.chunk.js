"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[3277],{4372:function(e,r,n){n.r(r),n.d(r,{default:function(){return l}});var t=n(2556),s=n(2192),i='import { useLayoutEffect, useRef } from "react";\r\nimport { NumericField, NumericFieldProps, classNames, combineRef, domEventRef, useFormField } from "zeta-dom-react";\r\nimport dom from "zeta-dom/dom";\r\nimport { getRect } from "zeta-dom/domUtil";\r\nimport { pipe } from "zeta-dom/util";\r\nimport { position } from "@misonou/react-css-utils";\r\n\r\nexport interface SliderFieldProps extends NumericFieldProps {\r\n    min: number;\r\n    max: number;\r\n    step?: number;\r\n    showValue?: boolean;\r\n    format?: (value: number) => string;\r\n}\r\n\r\nexport function SliderField(props: SliderFieldProps) {\r\n    const { value, setValue, elementRef } = useFormField(NumericField, props, props.min);\r\n    const percent = 100 * (value - props.min) / (props.max - props.min);\r\n    const ref = useRef<HTMLDivElement>(null);\r\n\r\n    useLayoutEffect(() => {\r\n        const container = ref.current!;\r\n        const element = container.querySelector(\'.zui-slider-field-current\');\r\n        const button = container.querySelector(\'.zui-slider-field-button\')!;\r\n        if (element) {\r\n            position(element, button, \'center auto\', container);\r\n        }\r\n    }, [percent])\r\n\r\n    return (\r\n        <div ref={combineRef(ref, elementRef, domEventRef({ mousedown }))} className={classNames(\'zui-field zui-slider-field\', { \'show-value\': props.showValue })}>\r\n            <div className="zui-slider-field-line">\r\n                <div className="zui-slider-field-line-fill" style={{ width: percent + \'%\' }}></div>\r\n                <div className="zui-slider-field-button" style={{ left: percent + \'%\', transform: \'translateX(\' + (50 - percent) + \'%)\' }}>\r\n                    {props.showValue &&\r\n                        <div className="zui-slider-field-current">{(props.format || pipe)(value)}</div>}\r\n                </div>\r\n            </div>\r\n            <div className="zui-slider-field-text">\r\n                <span>{(props.format || pipe)(props.min)}</span>\r\n                <span>{(props.format || pipe)(props.max)}</span>\r\n            </div>\r\n        </div>\r\n    );\r\n\r\n    function mousedown(e: Zeta.ZetaMouseEvent | Zeta.ZetaTouchEvent, element: HTMLElement) {\r\n        const rect = getRect(element);\r\n        const offset = getRect(element.querySelector(\'.zui-slider-field-button\')!).width;\r\n        const setValueFromX = (x: number) => {\r\n            const percent = Math.min(1, Math.max(0, (x - rect.left - offset / 2) / (rect.right - rect.left - offset)));\r\n            const step = props.step || 1;\r\n            setValue(props.min + Math.ceil((props.max - props.min) * percent / step) * step);\r\n        };\r\n        setValueFromX(e.clientX);\r\n        return dom.beginDrag(setValueFromX);\r\n    }\r\n}\r\n';function o(e){const r=Object.assign({h1:"h1",pre:"pre",code:"code",h2:"h2",ul:"ul",li:"li",a:"a"},e.components),{Module:n,CodeBlock:o}=r;return o||a("CodeBlock",!0),n||a("Module",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{name:"zeta-dom-react"}),"\n",(0,t.jsx)(r.h1,{children:"Slider"}),"\n",(0,t.jsx)(s.RW,{min:0,max:100}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"<SliderField min={0} max={100} />\n"})}),"\n",(0,t.jsx)(r.h2,{children:"Example: Show value"}),"\n",(0,t.jsx)(s.RW,{min:0,max:100,showValue:!0}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"<SliderField min={0} max={100} showValue />\n"})}),"\n",(0,t.jsx)(r.h2,{children:"Example: Steps"}),"\n",(0,t.jsx)(s.RW,{min:0,max:100,step:10}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"<SliderField min={0} max={100} step={10} />\n"})}),"\n",(0,t.jsx)(r.h2,{children:"Example: Custom label"}),"\n",(0,t.jsx)(s.RW,{min:0,max:100,format:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"<SliderField min={0} max={100}\r\n    format={new Intl.NumberFormat('en-US', {\r\n        style: 'currency',\r\n        currency: 'USD',\r\n        minimumFractionDigits: 2\r\n    }).format} />\n"})}),"\n",(0,t.jsx)(r.h2,{children:"Source code"}),"\n",(0,t.jsx)(o,{children:i,className:"language-tsx"}),"\n",(0,t.jsx)(r.h2,{children:"See also"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:":",children:(0,t.jsx)(r.code,{children:"NumericField"})})}),"\n"]})]})}var l=function(e={}){const{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)};function a(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);