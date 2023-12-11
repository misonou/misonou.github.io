"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[2461],{2461:function(e,n,l){l.r(n);var i=l(2556);function s(e){const n=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",code:"code",a:"a",pre:"pre",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li"},e.components),{Module:l,MemberList:s,Badge:c}=n;return c||r("Badge",!1),c.Optional||r("Badge.Optional",!0),c.ReadOnly||r("Badge.ReadOnly",!0),s||r("MemberList",!0),l||r("Module",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{name:"brew-js-react"}),"\n",(0,i.jsx)(n.h1,{children:"ScrollableMixin"}),"\n",(0,i.jsx)(n.p,{children:"Enables scrollable plugin on the applied element."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note that to use ",(0,i.jsx)(n.code,{children:"ScrollableMixin"}),", app must be configured with ",(0,i.jsx)(n.a,{href:":",children:(0,i.jsx)(n.code,{children:"app.useScrollable"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"function View() {\r\n    const scrollable = useScrollableMixin();\r\n    return (\r\n        <div {...Mixin.use(scrollable)}>\r\n            <div {...Mixin.use(Mixin.scrollableTarget)}>\r\n                {/* ... */}\r\n            </div>\r\n        </div>\r\n    );\r\n}\n"})}),"\n",(0,i.jsx)(n.h2,{children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"useScrollableMixin()\r\nuseScrollableMixin(options)\n"})}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"options"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsxs)("dl",{children:[(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"direction"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsx)(n.p,{children:"Specifies in which direction can be scrolled."}),(0,i.jsx)(n.p,{children:"Accepts the following keyword:"}),(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"both"})}),(0,i.jsx)(n.p,{children:"Allows scroll on both direction if content is overflown."}),(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"x-only"})}),(0,i.jsx)(n.p,{children:"Only allows scroll on horizontal direction."}),(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"y-only"})}),(0,i.jsx)(n.p,{children:"Only allows scroll on vertical direction."})]}),(0,i.jsxs)(n.p,{children:["Default is ",(0,i.jsx)(n.code,{children:"both"}),"."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"handle"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsx)(n.p,{children:"Specifies which parts should initiate scrolling when\r\ntouch or mouse events is received."}),(0,i.jsx)(n.p,{children:"Accepts the following keyword:"}),(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"auto"})}),(0,i.jsx)(n.p,{children:"Dragging content area on touch devices or scroll bars on other devices."}),(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"scrollbar"})}),(0,i.jsx)(n.p,{children:"only when dragging scroll bars"}),(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"content"})}),(0,i.jsx)(n.p,{children:"only when dragging contents."})]}),(0,i.jsxs)(n.p,{children:["Default is ",(0,i.jsx)(n.code,{children:"auto"}),"."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"paged"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsxs)(n.p,{children:["Whether element matched by ",(0,i.jsx)(n.code,{children:"ScrollableMixinOptions.pagedItemSelector"}),"\r\nshould be snapped to the boundaries of scrollable area."]}),(0,i.jsx)(n.p,{children:"Accepts the following keyword:"}),(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"landscape"})}),(0,i.jsx)(n.p,{children:"Only snaps when page orientation is landscape"}),(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"portrait"})}),(0,i.jsx)(n.p,{children:"Only snaps when page orientation is portrait"}),(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"always"})}),(0,i.jsx)(n.p,{children:"Always snaps for both page orientation."})]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"pagedItemSelector"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsxs)(n.p,{children:["Enables ",(0,i.jsx)(n.code,{children:"pageIndex"}),", which will be updated upon scrolling."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"persistScroll"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsx)(n.p,{children:"Whether current scroll position will be persisted and be restored\r\nwhen traversing back in browser's history."})]})]}),"\n",(0,i.jsx)(n.h3,{children:"Return value"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:":",children:(0,i.jsx)(n.code,{children:"ScrollableMixin"})})," instance."]}),"\n",(0,i.jsx)(n.h2,{children:"ScrollableMixin class"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Mixin should be created using ",(0,i.jsx)(n.a,{href:":",children:(0,i.jsx)(n.code,{children:"useScrollableMixin"})})," and applied to element by ",(0,i.jsx)(n.code,{children:"Mixin.use"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s,{i:"ScrollableMixin",extends:["ClassNameMixin"],ip:["target","pageIndex","scrolling"],im:["withOptions()","onPageIndexChanged()","destroy()","enable()","disable()","setOptions()","setStickyPosition()","refresh()","scrollPadding()","stop()","scrollLeft()","scrollTop()","scrollBy()","scrollTo()","scrollByPage()","scrollToPage()","scrollToElement()"]}),"\n",(0,i.jsxs)(n.h3,{children:[(0,i.jsx)(n.code,{children:"ScrollableMixin.pageIndex"})," ",(0,i.jsx)(c.ReadOnly,{})]}),"\n",(0,i.jsxs)(n.p,{children:["Gets the index of the currently visible element matched by ",(0,i.jsx)(n.a,{href:":",children:(0,i.jsx)(n.code,{children:"ScrollableMixinOptions.pagedItemSelector"})})," options."]}),"\n",(0,i.jsxs)(n.h3,{children:[(0,i.jsx)(n.code,{children:"ScrollableMixin.scrolling"})," ",(0,i.jsx)(c.ReadOnly,{})]}),"\n",(0,i.jsx)(n.p,{children:"Gets whether the content area is being scrolled."}),"\n",(0,i.jsxs)(n.h3,{children:[(0,i.jsx)(n.code,{children:"ScrollableMixin.target"})," ",(0,i.jsx)(c.ReadOnly,{})]}),"\n",(0,i.jsx)(n.p,{children:"Gets a mixin object that when applied to descecant element\r\nthe element will act as content to be scrolled."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.onPageIndexChanged()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"onPageIndexChanged(callback)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Adds an listener to be invoked when ",(0,i.jsx)(n.code,{children:"ScrollableMixin.pageIndex"})," is updated."]}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"callback"})}),(0,i.jsx)(n.p,{children:"A callback to be invoked."})]}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.destroy()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"destroy()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Deactivates the scrollable plugin and release all resources.\r\nThis method is intended for internal use."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.enable()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"enable()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Enables scrolling of content area."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.disable()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"disable()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Disables scrolling of content area."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.setOptions()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"setOptions(options)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sets options for jQuery scrollable plugin."}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"options"})}),(0,i.jsxs)(n.p,{children:["A dictionary specifying options. Must not pass ",(0,i.jsx)(n.code,{children:"scrollStart"}),", ",(0,i.jsx)(n.code,{children:"scrollMove"}),", ",(0,i.jsx)(n.code,{children:"scrollStop"})," and ",(0,i.jsx)(n.code,{children:"scrollEnd"})," options."]})]}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.setStickyPosition()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"setStickyPosition(element, dir)\r\nsetStickyPosition(element, dir, fixed)\r\nsetStickyPosition(element, dir, within)\r\nsetStickyPosition(element, dir, within, fixed)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sets sticky position for one or more elements."}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"element"})}),(0,i.jsx)(n.p,{children:"An element or a valid CSS selector."}),(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"dir"})}),(0,i.jsxs)(n.p,{children:["Which side(s) should the element be sticked onto to remain visible when the element is scrolled beyond visible area. When given ",(0,i.jsx)(n.code,{children:"none"})," the element will no longer be sticky."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"fixed"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsx)(n.p,{children:"Whether the element should be in fixed position, as if the content area is scrolled all the way in that direction."}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"within"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsx)(n.p,{children:"When specified, the element will only be sticked onto the side of this element or region."})]}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.refresh()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"refresh()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Forces recalculation of internal states."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.scrollPadding()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"scrollPadding()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the scroll padding"}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.stop()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"stop()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Stops scrolling immediately."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.scrollLeft()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"scrollLeft()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Gets horizontal scroll position."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.scrollTop()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"scrollTop()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Gets vertical scroll position."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.scrollBy()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"scrollBy(x, y)\r\nscrollBy(x, y, duration)\r\nscrollBy(x, y, duration, callback)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Scrolls content area by the specified number of pixels."}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"x"})}),(0,i.jsx)(n.p,{children:"Number of pixels in horizontal direction."}),(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"y"})}),(0,i.jsx)(n.p,{children:"Number of pixels in vertical direction."}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"duration"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsxs)(n.p,{children:["Duration of animated scrolling in milliseconds. Default is ",(0,i.jsx)(n.code,{children:"0"}),", meaning for no animation."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"callback"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsx)(n.p,{children:"A callback to be invoked when scrolling is completed."})]}),"\n",(0,i.jsx)(n.h3,{children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves when scrolling is completed."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.scrollTo()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"scrollTo(x, y)\r\nscrollTo(x, y, duration)\r\nscrollTo(x, y, duration, callback)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Scrolls content area to the specific offsets meansured from top-left corner."}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"x"})}),(0,i.jsx)(n.p,{children:"Number of pixels in horizontal direction."}),(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"y"})}),(0,i.jsx)(n.p,{children:"Number of pixels in vertical direction."}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"duration"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsxs)(n.p,{children:["Duration of animated scrolling in milliseconds. Default is ",(0,i.jsx)(n.code,{children:"0"}),", meaning for no animation."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"callback"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsx)(n.p,{children:"A callback to be invoked when scrolling is completed."})]}),"\n",(0,i.jsx)(n.h3,{children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves when scrolling is completed."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.scrollByPage()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"scrollByPage(x, y)\r\nscrollByPage(x, y, duration)\r\nscrollByPage(x, y, duration, callback)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Scrolls content area by the specified number of pages. It is identical to scroll by the number of pixels of the visible content area."}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"x"})}),(0,i.jsx)(n.p,{children:"Number of pages in horizontal direction."}),(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"y"})}),(0,i.jsx)(n.p,{children:"Number of pages in vertical direction."}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"duration"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsxs)(n.p,{children:["Duration of animated scrolling in milliseconds. Default is ",(0,i.jsx)(n.code,{children:"0"}),", meaning for no animation."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"callback"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsx)(n.p,{children:"A callback to be invoked when scrolling is completed."})]}),"\n",(0,i.jsx)(n.h3,{children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves when scrolling is completed."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.scrollToPage()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"scrollToPage(x, y)\r\nscrollToPage(x, y, duration)\r\nscrollToPage(x, y, duration, callback)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Scrolls content area to a specified page. It is identical to scroll to the number of pixels of the visible content area times the page index."}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"x"})}),(0,i.jsx)(n.p,{children:"Page index in horizontal direction."}),(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"y"})}),(0,i.jsx)(n.p,{children:"Page index in vertical direction."}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"duration"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsxs)(n.p,{children:["Duration of animated scrolling in milliseconds. Default is ",(0,i.jsx)(n.code,{children:"0"}),", meaning for no animation."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"callback"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsx)(n.p,{children:"A callback to be invoked when scrolling is completed."})]}),"\n",(0,i.jsx)(n.h3,{children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves when scrolling is completed."}),"\n",(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.code,{children:"ScrollableMixin.scrollToElement()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"scrollToElement(target, targetOrigin, duration)\r\nscrollToElement(target, targetOrigin, duration, callback)\r\nscrollToElement(target)\r\nscrollToElement(target, targetOrigin)\r\nscrollToElement(target, targetOrigin, wrapperOrigin)\r\nscrollToElement(target, targetOrigin, wrapperOrigin, duration)\r\nscrollToElement(target, targetOrigin, wrapperOrigin, duration, callback)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Scrolls content area so that the target element is aligned to a specific location."}),"\n",(0,i.jsx)(n.h3,{children:"Parameters"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"target"})}),(0,i.jsx)(n.p,{children:"A element or a valid CSS selector."}),(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"targetOrigin"})}),(0,i.jsxs)(n.p,{children:["The coordinate of the target element to be aligned. It supports format likes ",(0,i.jsx)(n.code,{children:"left top"}),", ",(0,i.jsx)(n.code,{children:"left+50px top-10px"}),", or ",(0,i.jsx)(n.code,{children:"left+10% top+10%"}),"."]}),(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"duration"})}),(0,i.jsxs)(n.p,{children:["Duration of animated scrolling in milliseconds. Default is ",(0,i.jsx)(n.code,{children:"0"}),", meaning for no animation."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"wrapperOrigin"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsxs)(n.p,{children:["The coordinate of the visible content area that the target element is aligned to. It supports format likes ",(0,i.jsx)(n.code,{children:"left top"}),", ",(0,i.jsx)(n.code,{children:"left+50px top-10px"}),", or ",(0,i.jsx)(n.code,{children:"left+10% top+10%"}),"."]}),(0,i.jsxs)(n.h4,{children:[(0,i.jsx)(n.code,{children:"callback"})," ",(0,i.jsx)(c.Optional,{})]}),(0,i.jsx)(n.p,{children:"A callback to be invoked when scrolling is completed."})]}),"\n",(0,i.jsx)(n.h3,{children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves when scrolling is completed."}),"\n",(0,i.jsx)(n.h2,{children:"See also"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/react/mixin/scrollable-sticky",children:"Sticky elements"})}),"\n"]})]})}function r(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(s,e)})):s(e)}}}]);