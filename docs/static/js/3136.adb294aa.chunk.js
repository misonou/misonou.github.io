"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[3136],{3136:function(e,n,r){r.r(n),r.d(n,{default:function(){return s}});var o=r(2556),t=r(4331),a="import { forwardRef } from \"react\";\r\nimport { IconType } from \"react-icons/lib\";\r\nimport { combineFn, exclude } from \"zeta-dom/util\";\r\nimport { ChoiceField, ChoiceFieldProps, classNames, combineValidators, toRefCallback, useFormField } from \"zeta-dom-react\";\r\nimport { Button, validators } from \".\";\r\n\r\nexport interface ToggleButtonGroupItem {\r\n    value: string;\r\n    label: string;\r\n    icon?: IconType;\r\n}\r\n\r\nexport interface ToggleButtonGroupProps extends Omit<ChoiceFieldProps<ToggleButtonGroupItem>, 'onChange'>, Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {\r\n    items: (ToggleButtonGroupItem | string)[];\r\n    orientation?: 'horizontal' | 'vertical';\r\n    allowUnselect?: boolean;\r\n    onChange?: (value: string, index: number) => void;\r\n}\r\n\r\nexport const ToggleButtonGroup = forwardRef<HTMLDivElement, ToggleButtonGroupProps>((props, ref) => {\r\n    const { value, error, setValue, elementRef, items, selectedIndex } = useFormField(ChoiceField, {\r\n        ...props,\r\n        onChange: (v: string): any => {\r\n            return props.onChange?.(v, selectedIndex);\r\n        },\r\n        onValidate: combineValidators(\r\n            props.required && validators.required(),\r\n            props.onValidate\r\n        )\r\n    });\r\n\r\n    const divProps = exclude(props, ['label', 'items', 'onChange', 'required', 'allowUnselect', 'showErrorMessage', 'clearWhenUnmount', 'orientation', 'name']);\r\n    return (\r\n        <div {...divProps} ref={combineFn(elementRef, toRefCallback(ref))} className={classNames(props.className, 'zui-field', { 'has-error': !!error })}>\r\n            <div className={classNames('zui-button-group', { orientation: props.orientation || 'horizontal' })}>\r\n                {items.map(v => (\r\n                    <Button key={v.value} {...v} className={v.value === value ? 'active' : ''} onClick={() => setValue(props.allowUnselect && value === v.value ? '' : v.value)} disabled={props.disabled} />\r\n                ))}\r\n            </div>\r\n            {error && props.showErrorMessage !== false &&\r\n                <div className=\"zui-field-error\">{error}</div>}\r\n        </div>\r\n    );\r\n});\r\n";function l(e){const n=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},e.components),{Module:r,CodeBlock:l}=n;return l||i("CodeBlock",!0),r||i("Module",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{name:"zeta-dom-react"}),"\n",(0,o.jsx)(n.h1,{children:"ToggleButtonGroup"}),"\n",(0,o.jsx)(n.h2,{children:"Normal"}),"\n",(0,o.jsx)(t.th,{items:["Apple","Banana","Orange"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"<ToggleButtonGroup\n    items={['Apple', 'Banana', 'Orange']} />\n"})}),"\n",(0,o.jsx)(n.h2,{children:"Allow unselected"}),"\n",(0,o.jsx)(t.th,{items:["Apple","Banana","Orange"],allowUnselect:!0}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"<ToggleButtonGroup\n    items={['Apple', 'Banana', 'Orange']}\n    allowUnselect />\n"})}),"\n",(0,o.jsx)(n.h2,{children:"Vertical orientation"}),"\n",(0,o.jsx)(t.th,{items:["Apple","Banana","Orange"],orientation:"vertical"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"<ToggleButtonGroup\n    items={['Apple', 'Banana', 'Orange']}\n    orientation=\"vertical\" />\n"})}),"\n",(0,o.jsx)(n.h2,{children:"Source code"}),"\n",(0,o.jsx)(l,{children:a,className:"typescript"}),"\n",(0,o.jsx)(n.h2,{children:"See also"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"ChoiceField"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"ChoiceFieldProps"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:":",children:(0,o.jsx)(n.code,{children:"ChoiceItem"})})}),"\n"]})]})}var s=function(e={}){const{wrapper:n}=e.components||{};return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)};function i(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);