"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[1630],{1630:function(e,n,s){s.r(n);var i=s(2556);function l(e){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",blockquote:"blockquote",a:"a",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li",strong:"strong"},e.components),{Module:s,ImportHint:l,MemberList:c,VersionTimeline:t,Badge:o}=n;return o||r("Badge",!1),o.Optional||r("Badge.Optional",!0),o.ReadOnly||r("Badge.ReadOnly",!0),o.Version||r("Badge.Version",!0),l||r("ImportHint",!0),c||r("MemberList",!0),s||r("Module",!0),t||r("VersionTimeline",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{name:"brew-js-react"}),"\n",(0,i.jsx)(n.h1,{children:"FlyoutMixin"}),"\n",(0,i.jsx)(n.p,{children:"Provides methods controlling the applied element as a flyout."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"function Menu() {\r\n    const flyout = useFlyoutMixin();\r\n    return (\r\n        <div>\r\n            <div {...Mixin.use(flyout.toggle, 'menu-toggle')}>Toggle</div>\r\n            <div {...Mixin.use(flyout, 'menu')}>\r\n                {/* ... */}\r\n            </div>\r\n        </div>\r\n    );\r\n}\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:":",children:(0,i.jsx)(n.code,{children:"openFlyout"})})," for real examples."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"useFlyoutMixin()\r\nuseFlyoutMixin(options)\n"})}),"\n",(0,i.jsx)(l,{name:"useFlyoutMixin",module:"brew-js-react",require:"useFlyoutMixin",global:"brew.react.useFlyoutMixin"}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"options"})," ",(0,i.jsx)(o.Optional,{})]}),(0,i.jsxs)("dl",{children:[(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"closeOnBlur"})," ",(0,i.jsx)(o.Optional,{})," ",(0,i.jsx)(o.Version,{})]}),(0,i.jsxs)(n.p,{children:["Whether the flyout should be closed when flyout, or source element if given, loses focus.\r\nDefault is ",(0,i.jsx)(n.code,{children:"true"})," if flyout is not dismissible by swipe gesture."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"containment"})," ",(0,i.jsx)(o.Optional,{})," ",(0,i.jsx)(o.Version,{})]}),(0,i.jsx)(n.p,{children:"Specifies that the flyout should remain its state unless user is interacting\r\nwithin the specified element."}),(0,i.jsxs)(n.p,{children:["This options is used in conjunction with ",(0,i.jsx)(n.code,{children:"closeOnBlur"}),".\r\nIf a CSS selector is given, it will select the closest ancestor from the flyout element."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"modal"})," ",(0,i.jsx)(o.Optional,{})]}),(0,i.jsx)(n.p,{children:"Whether flyout is modal."}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"swipeToDismiss"})," ",(0,i.jsx)(o.Optional,{})]}),(0,i.jsx)(n.p,{children:"Enables swipe gesture to close the flyout."}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"tabThrough"})," ",(0,i.jsx)(o.Optional,{})]}),(0,i.jsxs)(n.p,{children:["Whether flyout should lose focus when user presses ",(0,i.jsx)(n.code,{children:"tab"})," key."]})]})]}),"\n",(0,i.jsx)(n.h3,{children:"Return value"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:":",children:(0,i.jsx)(n.code,{children:"FlyoutMixin"})})," instance."]}),"\n",(0,i.jsx)(n.h2,{children:"Passing toggle"}),"\n",(0,i.jsx)(n.p,{children:"To let other part of the app to toggle a flyout, the toggle mixin can be passed to child components."}),"\n",(0,i.jsx)(n.h2,{children:"FlyoutMixin class"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Mixin should be created using ",(0,i.jsx)(n.a,{href:":",children:(0,i.jsx)(n.code,{children:"useFlyoutMixin"})})," and applied to element by ",(0,i.jsx)(n.a,{href:":",children:(0,i.jsx)(n.code,{children:"Mixin.use"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(c,{i:"FlyoutMixin",extends:["ClassNameMixin"],ip:["element","isFlyoutOpened","animating","visible","toggle","modal"],im:["withEffects()","onOpen()","onToggleState()","onVisibilityChanged()","open()","close()","toggleSelf()","whenVisible()"]}),"\n",(0,i.jsxs)(n.h3,{children:[(0,i.jsx)(n.code,{children:"FlyoutMixin.animating"})," ",(0,i.jsx)(o.ReadOnly,{})]}),"\n",(0,i.jsx)(n.p,{children:"Gets whether the flyout is animating."}),"\n",(0,i.jsxs)(n.h3,{children:[(0,i.jsx)(n.code,{children:"FlyoutMixin.element"})," ",(0,i.jsx)(o.ReadOnly,{})]}),"\n",(0,i.jsx)(n.p,{children:"Gets the flyout element."}),"\n",(0,i.jsxs)(n.h3,{children:[(0,i.jsx)(n.code,{children:"FlyoutMixin.isFlyoutOpened"})," ",(0,i.jsx)(o.ReadOnly,{})]}),"\n",(0,i.jsx)(n.p,{children:"Gets whether the flyout is open."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"FlyoutMixin.modal"})}),"\n",(0,i.jsx)(n.p,{children:"Gets or sets whether the flyout is modal."}),"\n",(0,i.jsxs)(n.h3,{children:[(0,i.jsx)(n.code,{children:"FlyoutMixin.toggle"})," ",(0,i.jsx)(o.ReadOnly,{})]}),"\n",(0,i.jsxs)(n.p,{children:["Gets a ",(0,i.jsx)(n.a,{href:":",children:(0,i.jsx)(n.code,{children:"FlyoutToggleMixin"})})," object that when applied to an element,\r\nclicking that element will toggle the flyout."]}),"\n",(0,i.jsxs)(n.h3,{children:[(0,i.jsx)(n.code,{children:"FlyoutMixin.visible"})," ",(0,i.jsx)(o.ReadOnly,{})]}),"\n",(0,i.jsx)(n.p,{children:"Gets whether the flyout is visible.\r\nNote that flyout is still considered visible before closing animation completes."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"FlyoutMixin.close()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"close()\r\nclose(state)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Closes the flyout."}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"state"})," ",(0,i.jsx)(o.Optional,{})]}),(0,i.jsxs)(n.p,{children:["Value to be sent to the promise returned by ",(0,i.jsx)(n.code,{children:"FlyoutMixin.open"}),"."]})]}),"\n",(0,i.jsx)(n.h3,{children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves after closing animation completes."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"FlyoutMixin.onOpen()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"onOpen(callback)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Adds a listener to handle the opening of the flyout."}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"callback"})}),(0,i.jsxs)(n.p,{children:["Callback to be called, receiving value passed to ",(0,i.jsx)(n.code,{children:"FlyoutMixin.open"}),"."]})]}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"FlyoutMixin.onToggleState()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"onToggleState(callback)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Adds a listener to monitor the opening and closing of the flyout.\r\nIt differs from ",(0,i.jsx)(n.code,{children:"FlyoutMixin.onVisibilityChanged"})," that the callback is called immediately when the flyout is being closed."]}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"callback"})}),(0,i.jsx)(n.p,{children:"Callback to be called."})]}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"FlyoutMixin.onVisibilityChanged()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"onVisibilityChanged(callback)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Adds a listener to monitor the change of visibility of the flyout.\r\nIt differs from ",(0,i.jsx)(n.code,{children:"FlyoutMixin.onToggleState"})," that the callback is called after closing animation completes."]}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"callback"})}),(0,i.jsx)(n.p,{children:"Callback to be called."})]}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"FlyoutMixin.open()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"open()\r\nopen(state)\r\nopen(state, source)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Opens the flyout."}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"state"})," ",(0,i.jsx)(o.Optional,{})]}),(0,i.jsxs)(n.p,{children:["Value to be sent to listener added by ",(0,i.jsx)(n.code,{children:"FlyoutMixin.onOpen"}),"."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"source"})," ",(0,i.jsx)(o.Optional,{})]}),(0,i.jsx)(n.p,{children:"Source element that triggered the flyout."})]}),"\n",(0,i.jsx)(n.h3,{children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves when the flyout is being closed."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"FlyoutMixin.toggleSelf()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"toggleSelf()\r\ntoggleSelf(source)\r\ntoggleSelf(flag)\r\ntoggleSelf(flag, source)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Toggles the flyout."}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"source"})," ",(0,i.jsx)(o.Optional,{})]}),(0,i.jsx)(n.p,{children:"Source element which triggered the flyout."}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"flag"})," ",(0,i.jsx)(o.Optional,{})," ",(0,i.jsx)(o.Version,{})]}),(0,i.jsx)(n.p,{children:"Whether the flyout should be open or closed."})]}),"\n",(0,i.jsx)(n.h3,{children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves when the flyout is being closed."}),"\n",(0,i.jsxs)(n.h3,{children:[(0,i.jsx)(n.code,{children:"FlyoutMixin.whenVisible()"})," ",(0,i.jsx)(o.Version,{})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"whenVisible(effect)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Activates effects when flyout becomes visible."}),"\n",(0,i.jsx)(n.p,{children:"It is a shorthand for dispose callback pattern with visibility change,\r\nequivalent to the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"let dispose;\r\nflyout.watch('visible', visible => {\r\n    if (visible) {\r\n        dispose = effect();\r\n    } else if (dispose) {\r\n        dispose();\r\n    }\r\n}, true);\n"})}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"effect"})}),(0,i.jsx)(n.p,{children:"Imperative function that can return a cleanup function."})]}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"FlyoutMixin.withEffects()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"withEffects()\r\nwithEffects(effects0)\r\nwithEffects(effects0, effects1)\r\nwithEffects(effects0, effects1, /* \u2026 ,*/ effectsN)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Specifies animating effects for the flyout."}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"effects0"})," \u2026 ",(0,i.jsx)(n.code,{children:"effectsN"})," ",(0,i.jsx)(o.Optional,{})]}),(0,i.jsx)(n.p,{children:"One or more predefined effects."})]}),"\n",(0,i.jsx)(n.h2,{children:"Version information"}),"\n",(0,i.jsx)(t,{module:"brew-js-react",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"0.1.0"})," Introduced"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"0.5.4"})," ",(0,i.jsx)(n.code,{children:"useFlyoutMixin()"}),": ",(0,i.jsx)(n.code,{children:"closeOnBlur"})," option ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"FlyoutMixin.open()"}),": ",(0,i.jsx)(n.code,{children:"source"})," parameter"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"0.5.7"})," ",(0,i.jsx)(n.code,{children:"FlyoutMixin.toggleSelf()"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"0.6.0"})," ",(0,i.jsx)(n.code,{children:"FlyoutMixin.element"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"0.6.1"})," ",(0,i.jsx)(n.code,{children:"FlyoutMixin.toggleSelf()"}),": ",(0,i.jsx)(n.code,{children:"flag"})," parameter"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"0.6.2"})," ",(0,i.jsx)(n.code,{children:"useFlyoutMixin()"}),": ",(0,i.jsx)(n.code,{children:"containment"})," option"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"0.6.3"})," ",(0,i.jsx)(n.code,{children:"FlyoutMixin.whenVisible()"})]}),"\n"]})})]})}function r(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);