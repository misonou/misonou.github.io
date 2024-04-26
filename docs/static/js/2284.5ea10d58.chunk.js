"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[2284],{2284:function(e,n,r){r.r(n);var d=r(2556);function i(e){const n=Object.assign({h1:"h1",h2:"h2",h4:"h4",ul:"ul",li:"li",a:"a",code:"code",blockquote:"blockquote",p:"p",h3:"h3",strong:"strong"},e.components),{Module:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{name:"zeta-dom-react"}),"\n",(0,d.jsx)(n.h1,{children:"Change log: zeta-dom-react"}),"\n",(0,d.jsx)(n.h2,{children:"v0.5.3 (2024/04/22)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useAutoSetRef"})}),", ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useEventTrigger"})})," and ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useValueTrigger"})})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"partial"})})," now returns the same object when no properties were updated to reduce component update"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," singleton may be disposed before effect causing error in development mode"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.validate"})})," erroneously triggers validations for all fields when empty string is given as first argument"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.5.2 (2024/03/27)"}),"\n",(0,d.jsx)(n.h4,{children:"Data view"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"DataView.pageCount"})})," property"]}),"\n",(0,d.jsxs)(n.li,{children:["Normalize to valid page index on setting ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"DataView.pageIndex"})})," as well as ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"DataView.itemCount"})})," and ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"DataView.pageSize"})})]}),"\n",(0,d.jsx)(n.li,{children:"Reset page index when filter or sort changes"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," invoke unload effect callback in ",(0,d.jsx)(n.code,{children:"pagehide"})," event as soon as possible"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," unload effect callback got invoked after mounting in dev strict mode"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.5.1 (2024/02/26)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," extra call after consecutive re-render when using ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useAsync"})})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.5.0 (2024/02/23)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useErrorHandler"})})," now reports unhandled error to window ",(0,d.jsx)(n.code,{children:"event"})," event"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," unhandled rejection from ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useAsync"})})," with debounce"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," possible error from ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.getErrors"})})," in listed compatible browsers"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," missing exported interface"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.15 (2023/11/17)"}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Return ",(0,d.jsx)(n.code,{children:"validate"})," callback from ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useFormField"})})]}),"\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"<HiddenField>"})})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Data view"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"DataView.toggleSort"})})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," singletons in-used may be incorrectly disposed in dev mode"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.14 (2023/11/10)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.code,{children:"snapshot"})," parameter to ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"ViewState.set"})})]}),"\n",(0,d.jsxs)(n.li,{children:["Add overload to ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useSingleton"})})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," handle discarded singletons in dev strict mode"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," dispose view state properly in dev strict mode"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.13 (2023/10/31)"}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.code,{children:"useFormField"})," should update component when nested data has changed"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," inconsistent empty logic when finding focus target using ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.focus"})})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," error caused by reassigning data object in dev strict mode"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.code,{children:"useFormContext"})," should update component and emit ",(0,d.jsx)(n.code,{children:"dataChange"})," event when data property is automatically created or deleted\r\nwhen field component is mounted or unmounted","\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["Note that auto creation with empty values will not trigger re-render nor ",(0,d.jsx)(n.code,{children:"dataChange"})," event"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.12 (2023/10/13)"}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"ToggleFieldState.toggleValue"})})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"TextField"})})," now accepts and returns ",(0,d.jsx)(n.code,{children:"readOnly"})," attribute"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," nested object data corrupted when sorting array items"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," text field should normalize value to string"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," data change detection issue with ",(0,d.jsx)(n.code,{children:"NaN"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Behavior change for ",(0,d.jsx)(n.code,{children:"classNames"}),":","\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"classNames({ key: 0 })"})," now appends ",(0,d.jsx)(n.code,{children:"key-0"})," to ",(0,d.jsx)(n.code,{children:"class"})," attribute instead of considering falsy."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.11 (2023/9/11)"}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"DateField"})})," not working on iOS 15 and older"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.10 (2023/9/4)"}),"\n",(0,d.jsx)(n.p,{children:"Update deprecated function usage"}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.9 (2023/7/24)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"domEventRef"})})," throws error and invoke incorrect handler after child component rerenders"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"domEventRef"})})," should handle changing of event types"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.8 (2023/6/20)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useUnloadEffect"})})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useFormContext"})})," now accepts callback to generate initial data"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"<FormObject>"})})," and ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"<FormArray>"})})," can now be used without form context"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," should set error when ",(0,d.jsx)(n.code,{children:"onValidate"})," is not supplied for a required field"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.7 (2023/6/13)"}),"\n",(0,d.jsx)(n.h4,{children:"Data view"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," latest state not persisted after leaving and traversing back"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"DateField"})})," normalizes value to incorrect date or causes component to update indefinitely when selected date is not in the same timezone as current time due to daylight saving adjustment"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," latest statenot persisted after leaving and traversing back"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.6 (2023/6/7)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilties"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useSingleton"})})," hook"]}),"\n",(0,d.jsxs)(n.li,{children:["Support ",(0,d.jsx)(n.code,{children:"AbortSignal"})," and abortion in ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useAsync"})})," ",(0,d.jsx)(n.a,{href:"/docs/react/useAsync#s-abort-signal",children:"[link]"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Callback passed to ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useAsync"})})," got invoked twice when component is mounted"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Setting ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.preventLeave"})})," to ",(0,d.jsx)(n.code,{children:"false"})," should unlock form element"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.5 (2023/5/30)"}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.clear"})})," method"]}),"\n",(0,d.jsxs)(n.li,{children:["Stricter condition for ",(0,d.jsx)(n.code,{children:"preventLeave"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.code,{children:"toggleValue"})," from ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"MultiChoiceField"})})," has incorrect behavior"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.4 (2023/5/5)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilties"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"domEventRef"})})]}),"\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"ErrorHandlerWithRef.emit"})})," method"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.getErrors"})})," method ",(0,d.jsx)(n.a,{href:"/docs/react/form/FormContext#s-formcontext-geterrors",children:"[link]"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," an bug that could cause page halted with ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"ChoiceField"})})," ",(0,d.jsx)(n.a,{href:"/docs/known-issues#s-choice-field-causing-parent-component-to-update-indefinitely",children:"[link]"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.code,{children:"validateToChange"})," prop on field level should override form options"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.3 (2023/4/28)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," import error for ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useMemoizedFunction"})})," introduced in ",(0,d.jsx)(n.code,{children:"v0.4.2"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," value in ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.data"})})," object are not synchronized when setting new value does not actually update the value"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," a property named ",(0,d.jsx)(n.code,{children:"undefined"})," is created on ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.data"})})," if an unnamed field is associated to a form context"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.2 (2023/4/24)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"ErrorHandlerWithRef.catch"})})," now accepts multiple error codes or constructors ",(0,d.jsx)(n.a,{href:"/docs/react/useErrorHandler#s-selective-handling",children:"[link]"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"DateField"})})]}),"\n",(0,d.jsx)(n.li,{children:"Allow focus to first erreous or empty field"}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.code,{children:"autoPersist"})," flag disabled in dev strict mode"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," missing ",(0,d.jsx)(n.code,{children:"disabled"})," in ",(0,d.jsx)(n.code,{children:"inputProps"})," for ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"TextField"})})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.1 (2023/4/13)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useMediaQuery"})})," did not trigger re-render in dev strict mode"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"NumericField"})})]}),"\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.code,{children:"ValidationError"})," and ",(0,d.jsx)(n.code,{children:"formatError"})," for customizing error messages ",(0,d.jsx)(n.a,{href:"/docs/react/form/error-message",children:"[link]"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," normalize value to boolean for ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"ToggleField"})})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.4.0 (2023/3/29)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.code,{children:"debounce"})," param to ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useAsync"})})," ",(0,d.jsx)(n.a,{href:"/docs/react/useAsync#s-debounce",children:"[link]"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Support nested data object and array ",(0,d.jsx)(n.a,{href:"/docs/react/form/data-object-array",children:"[link]"})]}),"\n",(0,d.jsxs)(n.li,{children:["Add static method ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.get"})})," ",(0,d.jsx)(n.a,{href:"/docs/react/form/FormContext#s-formcontext-get",children:"[link]"})]}),"\n",(0,d.jsxs)(n.li,{children:["Add overload ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.element"})})," and ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.focus"})})," method"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.focus"})})," method now returns a boolean whether focus is set"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," field not working properly in dev strict mode"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.validate"})})," method should return ",(0,d.jsx)(n.code,{children:"false"})," when a required field is empty"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.validate"})})," method should not validate disabled field"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.3.11 (2023/2/18)"}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Add ",(0,d.jsx)(n.code,{children:"defaultValue"})," and ",(0,d.jsx)(n.code,{children:"normalizeValue"})," to field type"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.code,{children:"onChange"})," should be called with current value when resetting form"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.code,{children:"onChange"})," are not called when no form context"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.3.10 (2023/2/3)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Incorrect initial state for ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useAsync"})})," when ",(0,d.jsx)(n.code,{children:"autoload"})," is false"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Issue with strict mode in React 18"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Type inference issue"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Value for controlled field cannot be updated"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.3.8 (2023/1/17)"}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.getError"})})," method"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"}),"  Unable to create property on ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.data"})})," with ",(0,d.jsx)(n.code,{children:"undefined"})," value"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"}),"  Property being re-created for unrendered field after reset or property is deleted"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.3.7 (2023/1/10)"}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Rerender with correct value for ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useFormField"})})," when name is changed"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Reset error state for ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useFormField"})})," when name is changed"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Prevent from leaving if ",(0,d.jsx)(n.code,{children:"beforeLeave"})," event is not handled"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.3.6 (2022/12/21)"}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormFieldProps.clearWhenUnmount"})})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Trigger ",(0,d.jsx)(n.code,{children:"dataChange"})," event when property is created on or deleted from ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.data"})})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Trigger ",(0,d.jsx)(n.code,{children:"validationChange"})," event when passing error by field props"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Prevent component update after unmount when using ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useFormContext"})})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.3.5 (2022/11/19)"}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add ",(0,d.jsx)(n.code,{children:"preventLeave"})," option"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," New way to define custom field types"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.code,{children:"dataChange"})," event may report duplicated keys"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.3.4 (2022/11/11)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useUpdateTrigger"})})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Unnecessary effect execution in ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useBreakpoint"})})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.toJSON"})})," method"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Handle native form ",(0,d.jsx)(n.code,{children:"reset"})," event"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add optional ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormFieldProps.label"})})," prop"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Force component update after reset"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Incorrect ",(0,d.jsx)(n.code,{children:"isValid"})," state after reset"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Setting error by ",(0,d.jsx)(n.code,{children:"error"})," prop or ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.setError"})})," should invalidate form"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.3.3 (2022/11/3)"}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.ref"})})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Update default ",(0,d.jsx)(n.code,{children:"isEmpty"})," condition, and allow to override by field types"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{children:"Miscellanous"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Expose correct file in unpkg"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.3.2 (2022/8/24)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useErrorHandler"})})," replacing ",(0,d.jsx)(n.code,{children:"useErrorHandlerRef"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Emit ",(0,d.jsx)(n.code,{children:"load"})," event from ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useAsync"})})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," Forward ",(0,d.jsx)(n.code,{children:"error"})," event to ",(0,d.jsx)(n.code,{children:"zeta.dom"})," from ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useAsync"})})," if it is not handled"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"}),"  Component will be rerendered when loading starts"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add ",(0,d.jsx)(n.code,{children:"Form"})," component for rendering ",(0,d.jsx)(n.code,{children:"<form>"})," element"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add ",(0,d.jsx)(n.code,{children:"enterKeyHint"})," options for ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext"})})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add field type for extensibility"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Expose current form object in ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormFieldState.form"})})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.3.1 (2022/8/4)"}),"\n",(0,d.jsx)(n.h4,{children:"Utilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"innerTextOrHTML"})})," and ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"withSuspense"})})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"}),"  Reduce component rerendering by ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useAsync"})})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.code,{children:"onChange"})," callback should be called for uncontrolled field"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{children:"v0.3.0 (2022/7/18)"}),"\n",(0,d.jsx)(n.h4,{children:"Data view"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Breaking change:"})," ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"DataView.getView"})})," no longer reverse item orderings for the array returned from callback when ",(0,d.jsx)(n.code,{children:"sortOrder"})," is ",(0,d.jsx)(n.code,{children:"desc"}),"; the callback must handle the descending order manually"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"DataView.sort"})})," method"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"}),"  ",(0,d.jsx)(n.code,{children:"viewChange"})," event was not emitted when ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"DataView"})})," was not created in by ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"useDataView"})})," hook"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"}),"  Maintain previous order unchanged for items in the same order in new sorting logic","\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"For example given an array of items [A,B,C,D,E] that is currently sorted as [E,B,D,C,A], then for a new sorting logic that results in [E>B=C=D>A], the result ordering should be [E,B,D,C,A]; in the sense that [B,D,C] remains their order unchanged."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"fix"})," ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"DataView.getView"})})," should sort items if callback is not supplied"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{children:"Forms"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("kbd",{children:"feat"})," Add ",(0,d.jsx)(n.a,{href:":",children:(0,d.jsx)(n.code,{children:"FormContext.setError"})})," method"]}),"\n"]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(i,e)})):i(e)}}}]);