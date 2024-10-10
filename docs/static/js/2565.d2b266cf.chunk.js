"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[2565],{2565:function(e,n,i){i.r(n);var r=i(2556);function s(e){const n=Object.assign({h1:"h1",h2:"h2",h4:"h4",ul:"ul",li:"li",strong:"strong",code:"code",a:"a"},e.components),{Module:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{name:"brew-js-react"}),"\n",(0,r.jsx)(n.h1,{children:"Change log"}),"\n",(0,r.jsx)(n.h2,{children:"v0.6.4 (2024/10/10)"}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default scope for async operation:"}),"\r\nerror and async events (",(0,r.jsx)(n.code,{children:"asyncStart"})," and ",(0,r.jsx)(n.code,{children:"asyncEnd"}),") will be dispatched\r\nto container element of the view by default"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ViewProps.errorHandler"})})," to handle errors triggered by view content"]}),"\n",(0,r.jsxs)(n.li,{children:["Allows passing tuple containing router parameters, query string or query parameters and\r\nhash to ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"resolvePath"})}),", ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"linkTo"})}),", ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"navigateTo"})})," and ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"redirectTo"})})," ",(0,r.jsx)(n.a,{href:"/docs/router/react/resolvePath#s-passing-query-and-hash",children:"[link]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," reset from error view on navigation"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Dialogs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default scope for async operation:"}),"\r\nerror and async events (",(0,r.jsx)(n.code,{children:"asyncStart"})," and ",(0,r.jsx)(n.code,{children:"asyncEnd"}),") will be dispatched\r\nto container element of the view by default"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"DialogContext.errorHandler"})})," to handle errors triggered by dialog content"]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"DialogContext.commitDialog"})})," and ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"DialogContext.dismissDialog"})})]}),"\n",(0,r.jsxs)(n.li,{children:["Update type definition of ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"createDialog"})})," for better type inference"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.6.3 (2024/09/18)"}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutMixin.whenVisible"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," render view component after ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ViewContext.container"})})," is available"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," import error for lazy loaded view component being reported twice"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," root ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ViewContext.page"})})," returned ",(0,r.jsx)(n.code,{children:"undefined"})," instead of initial page before app ready"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Miscellaneous"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," library failed to initialize properly due to module import order"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.6.2 (2024/09/09)"}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"containment"})," option for ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"useFlyoutMixin"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Hooks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"useRouteState"})})," causes render issue after snapshot if ",(0,r.jsx)(n.code,{children:"snapshotOnUpdate"})," is ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," type definition of returned callback from ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"useQueryParam"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.6.1 (2024/08/30)"}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add overload to ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutMixin.toggleSelf"})})," and ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutToggleMixin.toggle"})})]}),"\n",(0,r.jsxs)(n.li,{children:["Add type argument to ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutMixin"})})," and ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutToggleMixin"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Dialogs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Dialog content are now rendered in strict mode"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," improve focus restoration for dialog"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.6.0 (2024/07/29)"}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"View component now re-renders on every page load with new view Data"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"useQueryParam"})})," caused redirection to root path (",(0,r.jsx)(n.code,{children:"/"}),") when new query string is empty"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"useQueryParam"})})," did not update browser path and internal state properly when setting value multiple times in the same event loop"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Breaking change:"})," ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutMixin"})})," and ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ScrollableMixin"})})," will now throw if it is applied to multiple elements"]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutMixin.element"})}),", ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ScrollableMixin.element"})})," and ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ScrollableMixin.contentElement"})})]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"MixinState.onDispose"})})," for cleaning up resources for each applied element immediately after element is unmounted"]}),"\n",(0,r.jsxs)(n.li,{children:["Deprecated ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"StatefulMixin.initState"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," connected ",(0,r.jsx)(n.code,{children:"MutationObserver"})," are not disposed after use"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Dialogs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Dialog ",(0,r.jsx)(n.code,{children:"onCommit"})," callback are supplied with ",(0,r.jsx)(n.code,{children:"AbortSignal"})," ",(0,r.jsx)(n.a,{href:"/docs/react/dialog/foreground-operation#s-abort-signal",children:"[link]"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.5.7 (2024/06/12)"}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"page"}),", ",(0,r.jsx)(n.code,{children:"navigationType"})," properties and ",(0,r.jsx)(n.code,{children:"waitFor"})," method to ",(0,r.jsxs)(n.a,{href:":",children:[(0,r.jsx)(n.code,{children:"ViewContext: pagechange"})," event"]})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutMixin.toggleSelf"})})," and ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutToggleMixin.toggle"})})," for toggling flyout"]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutToggleMixin.on"})}),", allow toggling flyout by focusing applied element"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"StatefulMixin.state"})})," returned ",(0,r.jsx)(n.code,{children:"undefined"})," before reset"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Miscellaneous"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Officially support React 19"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.5.6 (2024/04/26)"}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"useQueryParam"})})]}),"\n",(0,r.jsxs)(n.li,{children:["Expose associated view component in ",(0,r.jsx)(n.code,{children:"pageenter"})," and ",(0,r.jsx)(n.code,{children:"pageleave"})," event"]}),"\n",(0,r.jsxs)(n.li,{children:["Fire ",(0,r.jsx)(n.code,{children:"pageenter"})," event after effect callbacks in view component are invoked"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Callback passed to ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutMixin.onOpen"})})," will receive data when flyout is opened directly using ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"openFlyout"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.5.5 (2024/04/12)"}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add overload to ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"matchView"})})]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"isViewRendered"})})]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ViewContext.parent"})})," and ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ViewContext.getChildren"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ViewContext.active"})})," should return ",(0,r.jsx)(n.code,{children:"false"})," when container is unmounted"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Allow tree shaking unused mixins"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.5.4 (2024/03/18)"}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"closeOnBlur"})," option for ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"useFlyoutMixin"})})]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"source"})," parameter for ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutMixin.open"})})," and ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutToggleMixin.open"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," flyout toggle mixin not disposed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," handler registered with ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutMixin.onOpen"})})," incorrectly receives value\r\nwhen flyout is opened by ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"openFlyout"})})," or ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"toggleFlyout"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Miscellaneous"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," type definition"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.5.3 (2024/02/19)"}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"LoadingStateMixin.loading"})})," property"]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"StatefulMixin.onBeforeUpdate"})})]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"Mixin.tabRoot"})})," static attribute  mixin"]}),"\n",(0,r.jsxs)(n.li,{children:["Add overload for ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"StaticAttributeMixin"})})," constructor"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," unable to restore class names after synchronous update"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," incorrect base class in type definition for ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FocusStateMixin"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Miscellaneous"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Support outro animation when loading completed"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.5.2 (2024/01/12)"}),"\n",(0,r.jsx)(n.h4,{children:"Dialog"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"focus"})," option for ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"createDialog"})})]}),"\n",(0,r.jsx)(n.li,{children:"Stop async state propagation"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"initialFocus"})," option for ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FlyoutMixin"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.5.1 (2023/12/13)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," dependency version"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.5.0 (2023/12/11)"}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Support ",(0,r.jsx)(n.code,{children:"snapshot"})," flag for view state"]}),"\n",(0,r.jsx)(n.li,{children:"Support automatically starting animation for new elements"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add overload for ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ScrollIntoViewMixin.when"})})]}),"\n",(0,r.jsxs)(n.li,{children:["Add mixins to manage class names: ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ClassNameToggleMixin"})})," and ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"UnmanagedClassNameMixin"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," missing calling parent ",(0,r.jsx)(n.code,{children:"initElement"})," method in ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ScrollableMixin"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Miscellaneous"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," external import in UMD build"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.4.8 (2023/11/10)"}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," allow ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"useRouteState"})})," and ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"renderView"})})," to be used before app ready"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," persist and restore route state correctly upon navigation"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.4.7 (2023/10/27)"}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," unable to update nested view container"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," should not redirect away from matched view in nested conta"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"I18n"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Add language parameter to translate callback"}),"\n",(0,r.jsxs)(n.li,{children:["Return unique translate function for each language from ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"useTranslation"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Allow using selector for ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"AnimateSequenceMixin"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," incorrect directives set by ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"AnimateSequenceMixin"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.4.6 (2023/09/04)"}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add new methods to ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ScrollableMixin"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," some properties not aliased when mixin is cloned"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.4.5 (2023/07/24)"}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," ",(0,r.jsx)(n.code,{children:"pagedItemSelector"})," option should work without ",(0,r.jsx)(n.code,{children:"paged"})," enabled for ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ScrollableMixin"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.4.4 (2023/07/14)"}),"\n",(0,r.jsx)(n.h4,{children:"Dialog"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Set ",(0,r.jsx)(n.code,{children:".loading"})," class during onCommit"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," unable to focus dialog content on open"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," return result promise from ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"closeDialog"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FocusStateMixin.for"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"FocusStateMixin"})})," cannot retain ",(0,r.jsx)(n.code,{children:".focus-*"})," class"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.4.3 (2023/06/29)"}),"\n",(0,r.jsx)(n.h4,{children:"Hooks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"useRouteParam"})})," should not cause redirection when container is not active"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"useRouteParam"})})," should return previous value when container is not active"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," navigation pending forever when view switched twice"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," unexpected navigation due to nested view container"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," missing properties and methods for context object returned by ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"useViewContext"})})," outside view container"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," update view at next beforepageload if redirection triggered"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," delay navigation completion until view rendered"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"persistScroll"})," option to ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ScrollableMixin"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.4.2 (2023/06/19)"}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"viewContext"})," to view component props"]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"pagechange"})," event to view context"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"ScrollIntoViewMixin"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.4.1 (2023/06/07)"}),"\n",(0,r.jsx)(n.h4,{children:"Hooks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"useAppReadyState"})}),", deprecating ",(0,r.jsx)(n.code,{children:"useAppReady"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"renderView"})})," will now throw if supplied component is not registered"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.4.0 (2023/05/24)"}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"View states are now session storage by router"}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"navigationType"})," to view component props"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.3.4 (2023/05/16)"}),"\n",(0,r.jsx)(n.h4,{children:"Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"resolvePath"})})," to resolve app path for a given view component"]}),"\n",(0,r.jsxs)(n.li,{children:["Allow passing additional data to view ",(0,r.jsx)(n.a,{href:"/docs/router/react/passing-data",children:"[link]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," ",(0,r.jsx)(n.a,{href:":",children:(0,r.jsx)(n.code,{children:"linkTo"})})," should return correct browser path base on ",(0,r.jsx)(n.code,{children:"urlMode"})," option"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," loading of view component may not be awaited by navigation promise"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{children:"Mixins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("kbd",{children:"fix"})," mixin got pre-disposed in dev strict mode"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"v0.3.3 (2023/04/24)"})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}}}]);