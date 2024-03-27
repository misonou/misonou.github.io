"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[266],{266:function(e,t,n){n.r(t);var s=n(2556);function i(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",del:"del",a:"a"},e.components),{Module:n,ImportHint:i,MemberList:c,Badge:a}=t;return a||r("Badge",!1),a.Optional||r("Badge.Optional",!0),a.ReadOnly||r("Badge.ReadOnly",!0),i||r("ImportHint",!0),c||r("MemberList",!0),n||r("Module",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{name:"@misonou/react-app-utils"}),"\n",(0,s.jsx)(t.h1,{children:"fuzzyMatch"}),"\n",(0,s.jsx)(t.p,{children:"Returns a list of matched items using fuzzy logic."}),"\n",(0,s.jsx)(t.h2,{children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"fuzzyMatch(haystack, needle)\r\nfuzzyMatch(haystack, needle, options)\n"})}),"\n",(0,s.jsx)(i,{name:"fuzzyMatch",module:"@misonou/react-app-utils"}),"\n",(0,s.jsx)(t.h3,{children:"Parameters"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)(t.h4,{children:(0,s.jsx)(t.code,{children:"haystack"})}),(0,s.jsx)(t.p,{children:"A list of items to match against."}),(0,s.jsx)(t.h4,{children:(0,s.jsx)(t.code,{children:"needle"})}),(0,s.jsx)(t.p,{children:"Keyword to be matched."}),(0,s.jsxs)(t.h4,{children:[(0,s.jsx)(t.code,{children:"options"})," ",(0,s.jsx)(a.Optional,{})]}),(0,s.jsx)(t.p,{children:"A dictionary containing options specifying the matching behavior."}),(0,s.jsxs)("dl",{children:[(0,s.jsxs)(t.h4,{children:[(0,s.jsx)(t.code,{children:"returnAll"})," ",(0,s.jsx)(a.Optional,{})," ",(0,s.jsx)(t.del,{children:"1.5.0"})]}),(0,s.jsxs)(t.p,{children:["Whether to include all items in the returned list.\r\nItems that have no matches will appear last when ",(0,s.jsx)(t.code,{children:"sortByRelevancy"})," is set."]}),(0,s.jsxs)(t.h4,{children:[(0,s.jsx)(t.code,{children:"sortByRelevancy"})," ",(0,s.jsx)(a.Optional,{})]}),(0,s.jsx)(t.p,{children:"Whether to sort the list of matched items by relevancy.\r\nItems with longest matched substring will appear first."})]})]}),"\n",(0,s.jsx)(t.h3,{children:"Return value"}),"\n",(0,s.jsxs)(t.p,{children:["An array containing one or more ",(0,s.jsx)(t.a,{href:":",children:(0,s.jsx)(t.code,{children:"MatchedItem"})}),"."]}),"\n",(0,s.jsx)(t.h2,{children:"MatchableItem interface"}),"\n",(0,s.jsx)(c,{i:"MatchableItem",ip:["displayText","matchingText","value"]}),"\n",(0,s.jsx)(t.h3,{children:(0,s.jsx)(t.code,{children:"MatchableItem.displayText"})}),"\n",(0,s.jsxs)(t.p,{children:["Specifies primary text to match against search keyword.\r\nPrimary text will have matched substring highlighted, accessible by ",(0,s.jsx)(t.a,{href:":",children:(0,s.jsx)(t.code,{children:"MatchedItem.formattedText"})}),"."]}),"\n",(0,s.jsxs)(t.h3,{children:[(0,s.jsx)(t.code,{children:"MatchableItem.matchingText"})," ",(0,s.jsx)(a.Optional,{})]}),"\n",(0,s.jsx)(t.p,{children:"Specifies additional texts to match against search keyword."}),"\n",(0,s.jsx)(t.h3,{children:(0,s.jsx)(t.code,{children:"MatchableItem.value"})}),"\n",(0,s.jsx)(t.p,{children:"User defined value representing the item."}),"\n",(0,s.jsx)(t.h2,{children:"MatchedItem interface"}),"\n",(0,s.jsx)(c,{extends:["MatchableItem"],i:"MatchedItem",ip:["displayText","formattedText","value"]}),"\n",(0,s.jsxs)(t.h3,{children:[(0,s.jsx)(t.code,{children:"MatchedItem.formattedText"})," ",(0,s.jsx)(a.ReadOnly,{})]}),"\n",(0,s.jsxs)(t.p,{children:["Gets the formatted text where matched substring found in ",(0,s.jsx)(t.a,{href:":",children:(0,s.jsx)(t.code,{children:"MatchableItem.displayText"})})," is highlighted."]})]})}function r(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=e.components||{};return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);