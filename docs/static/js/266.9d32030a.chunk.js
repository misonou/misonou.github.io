"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[266],{266:function(e,n,t){t.r(n);var s=t(2556);function i(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",a:"a",ul:"ul",li:"li",strong:"strong"},e.components),{Module:t,ImportHint:i,MemberList:c,VersionTimeline:h,Badge:a}=n;return a||r("Badge",!1),a.Optional||r("Badge.Optional",!0),a.ReadOnly||r("Badge.ReadOnly",!0),a.Version||r("Badge.Version",!0),i||r("ImportHint",!0),c||r("MemberList",!0),t||r("Module",!0),h||r("VersionTimeline",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{name:"@misonou/react-app-utils"}),"\n",(0,s.jsx)(n.h1,{children:"fuzzyMatch"}),"\n",(0,s.jsx)(n.p,{children:"Returns a list of matched items using fuzzy logic."}),"\n",(0,s.jsx)(n.h2,{children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"fuzzyMatch(haystack, needle)\r\nfuzzyMatch(haystack, needle, options)\n"})}),"\n",(0,s.jsx)(i,{name:"fuzzyMatch",module:"@misonou/react-app-utils"}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"haystack"})}),(0,s.jsx)(n.p,{children:"A list of items to match against."}),(0,s.jsx)(n.h4,{children:(0,s.jsx)(n.code,{children:"needle"})}),(0,s.jsx)(n.p,{children:"Keyword to be matched."}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"options"})," ",(0,s.jsx)(a.Optional,{})]}),(0,s.jsx)(n.p,{children:"A dictionary containing options specifying the matching behavior."}),(0,s.jsxs)("dl",{children:[(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"returnAll"})," ",(0,s.jsx)(a.Optional,{})," ",(0,s.jsx)(a.Version,{})]}),(0,s.jsxs)(n.p,{children:["Whether to include all items in the returned list.\r\nItems that have no matches will appear last when ",(0,s.jsx)(n.code,{children:"sortByRelevancy"})," is set."]}),(0,s.jsxs)(n.h4,{children:[(0,s.jsx)(n.code,{children:"sortByRelevancy"})," ",(0,s.jsx)(a.Optional,{})]}),(0,s.jsx)(n.p,{children:"Whether to sort the list of matched items by relevancy.\r\nItems with longest matched substring will appear first."})]})]}),"\n",(0,s.jsx)(n.h3,{children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["An array containing one or more ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"MatchedItem"})}),"."]}),"\n",(0,s.jsx)(n.h2,{children:"MatchableItem interface"}),"\n",(0,s.jsx)(c,{i:"MatchableItem",ip:["displayText","matchingText","value"]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"MatchableItem.displayText"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifies primary text to match against search keyword.\r\nPrimary text will have matched substring highlighted, accessible by ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"MatchedItem.formattedText"})}),"."]}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"MatchableItem.matchingText"})," ",(0,s.jsx)(a.Optional,{})]}),"\n",(0,s.jsx)(n.p,{children:"Specifies additional texts to match against search keyword."}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(n.code,{children:"MatchableItem.value"})}),"\n",(0,s.jsx)(n.p,{children:"User defined value representing the item."}),"\n",(0,s.jsx)(n.h2,{children:"MatchedItem interface"}),"\n",(0,s.jsx)(c,{extends:["MatchableItem"],i:"MatchedItem",ip:["displayText","formattedText","value"]}),"\n",(0,s.jsxs)(n.h3,{children:[(0,s.jsx)(n.code,{children:"MatchedItem.formattedText"})," ",(0,s.jsx)(a.ReadOnly,{})]}),"\n",(0,s.jsxs)(n.p,{children:["Gets the formatted text where matched substring found in ",(0,s.jsx)(n.a,{href:":",children:(0,s.jsx)(n.code,{children:"MatchableItem.displayText"})})," is highlighted."]}),"\n",(0,s.jsx)(n.h2,{children:"Version information"}),"\n",(0,s.jsx)(h,{module:"@misonou/react-app-utils",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1.3.0"})," Introduced"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1.5.0"})," ",(0,s.jsx)(n.code,{children:"returnAll"})," option"]}),"\n"]})})]})}function r(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);