"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[1441],{1441:function(e,d,r){r.r(d);var c=r(2556);function s(e){const d=Object.assign({h1:"h1",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",code:"code"},e.components),{Module:r}=d;return r||function(e,d){throw new Error("Expected "+(d?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Module",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{name:"waterpipe"}),"\n",(0,c.jsx)(d.h1,{children:"Cheat sheet"}),"\n",(0,c.jsx)(d.p,{children:"This cheat sheet contains reference to the latest waterpipe 2.0 syntax.\r\nSome of the features are not available in 1.x versions."}),"\n",(0,c.jsx)(d.h2,{children:"Object path"}),"\n",(0,c.jsxs)("table",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{prop}}"})}),(0,c.jsx)("td",{width:"450px",children:"Property or global variable"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{obj.prop}}"})}),(0,c.jsx)("td",{width:"450px",children:"Property of descendent object"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{arr.0}}, {{arr.1}}, ..."})}),(0,c.jsx)("td",{width:"450px",children:"First (and second ...) element in an array"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{arr.^0}}, {{arr.^1}}, ..."})}),(0,c.jsxs)("td",{width:"450px",children:[(0,c.jsx)("kbd",{children:"v2.4"})," Last (and second last ...) element in an array"]})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{obj.$(name)}}"})}),(0,c.jsx)("td",{width:"450px",children:"Evaluated property name"})]})]}),"\n",(0,c.jsx)(d.h2,{children:"Special variable"}),"\n",(0,c.jsxs)("table",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{@random}}"})}),(0,c.jsxs)("td",{width:"450px",children:[(0,c.jsx)("kbd",{children:"v2.4"})," A random number between 0 and 1"]})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{@now}}"})}),(0,c.jsxs)("td",{width:"450px",children:[(0,c.jsx)("kbd",{children:"v2.4"})," Timestamp of current time"]})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{@today}}"})}),(0,c.jsxs)("td",{width:"450px",children:[(0,c.jsx)("kbd",{children:"v2.4"})," Timestamp of today's date"]})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{@global}}"})}),(0,c.jsx)("td",{width:"450px",children:"Global object passed to waterpipe"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{width:"250px",children:[(0,c.jsx)("code",{children:"{{@0}}"})," ",(0,c.jsx)("code",{children:"{{.}}"})]}),(0,c.jsx)("td",{width:"450px",children:"Current object or value"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{width:"250px",children:[(0,c.jsx)("code",{children:"{{@1}}"})," ",(0,c.jsx)("code",{children:"{{@2}}"}),"..."]}),(0,c.jsx)("td",{width:"450px",children:"Object or value in outer scope"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{width:"250px",children:[(0,c.jsx)("code",{children:"{{@root}}"})," ",(0,c.jsx)("code",{children:"{{_}}"})]}),(0,c.jsx)("td",{width:"450px",children:"Object or value passed to waterpipe"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{width:"250px",children:[(0,c.jsx)("code",{children:"{{#key}}"})," ",(0,c.jsx)("code",{children:"{{#}}"})]}),(0,c.jsxs)("td",{width:"450px",children:["Key of current iteration in ",(0,c.jsx)("code",{children:"{{foreach}}"})]})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{width:"250px",children:[(0,c.jsx)("code",{children:"{{#index}}"})," ",(0,c.jsx)("code",{children:"{{##}}"})]}),(0,c.jsxs)("td",{width:"450px",children:["Zero-based index of current iteration in ",(0,c.jsx)("code",{children:"{{foreach}}"})]})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{#count}}"})}),(0,c.jsxs)("td",{width:"450px",children:["Total iteration count in ",(0,c.jsx)("code",{children:"{{foreach}}"})]})]})]}),"\n",(0,c.jsxs)(d.blockquote,{children:["\n",(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.strong,{children:"Note:"})," Shorthand ",(0,c.jsx)(d.code,{children:"."}),", ",(0,c.jsx)(d.code,{children:"_"}),", ",(0,c.jsx)(d.code,{children:"#"})," and ",(0,c.jsx)(d.code,{children:"##"})," must be in evaluated mode (",(0,c.jsx)(d.code,{children:"$."}),", ",(0,c.jsx)(d.code,{children:"$_"}),", ",(0,c.jsx)(d.code,{children:"&#"})," and ",(0,c.jsx)(d.code,{children:"&##"}),") when placing for argument."]}),"\n"]}),"\n",(0,c.jsx)(d.h2,{children:"Statement"}),"\n",(0,c.jsxs)("table",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{width:"250px",children:[(0,c.jsx)("code",{children:"{{if  <kbd>exp</kbd> }}"}),(0,c.jsx)("br",{}),(0,c.jsx)("code",{children:"{{if not  <kbd>exp</kbd> }}"})]}),(0,c.jsxs)("td",{width:"450px",children:["Logic branching",(0,c.jsx)("br",{}),"Support ",(0,c.jsx)("code",{children:"{{elseif}}"})," ",(0,c.jsx)("code",{children:"{{elseif not}}"})," and ",(0,c.jsx)("code",{children:"{{else}}"})]})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{foreach  <kbd>exp</kbd> }}"})}),(0,c.jsx)("td",{width:"450px",children:"Iterate over an object or array"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{foreach}}"})}),(0,c.jsx)("td",{width:"450px",children:"Iterate over the current object or array"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{!<kbd>comment</kbd>}}"})}),(0,c.jsx)("td",{width:"450px",children:"Comment"})]})]}),"\n",(0,c.jsx)(d.h2,{children:"Output"}),"\n",(0,c.jsxs)("table",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{&amp;html}}"})}),(0,c.jsxs)("td",{width:"450px",children:["Turn off HTML character escaping",(0,c.jsx)("br",{}),(0,c.jsx)("code",{children:"{{html}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"&lt;p&gt;&lt;/p&gt;"}),(0,c.jsx)("br",{}),(0,c.jsx)("code",{children:"{{&html}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"<p></p>"})]})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{objOrArray}}"})}),(0,c.jsxs)("td",{width:"450px",children:["Object is output as JSON",(0,c.jsx)("br",{}),(0,c.jsx)("code",{children:"{{&obj}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:'{"prop":true,"arr":[1,2,3]}'})]})]})]}),"\n",(0,c.jsx)(d.h2,{children:"Pipe"}),"\n",(0,c.jsxs)("table",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{value + 1}}"})}),(0,c.jsxs)("td",{width:"450px",children:["Call ",(0,c.jsx)("code",{children:"+"})," with argument ",(0,c.jsx)("code",{children:"1"})," on input ",(0,c.jsx)("code",{children:"value"})]})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{+ 1}}"})}),(0,c.jsx)("td",{width:"450px",children:"Call pipe on current object or value in absence of name collision"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{str substr 0 1 upper}}"})}),(0,c.jsx)("td",{width:"450px",children:"Chaining pipe functions (left-to-right evaluation)"})]})]}),"\n",(0,c.jsx)(d.h2,{children:"Input resolution"}),"\n",(0,c.jsxs)("table",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{[ value + 1 ] / 2}}"})}),(0,c.jsx)("td",{width:"450px",children:"Pipe as input"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:'{{"constant" length}}'})}),(0,c.jsx)("td",{width:"450px",children:"Constant as input"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{$length length}}"})}),(0,c.jsx)("td",{width:"450px",children:"Forced evaluation on input in case having name collision"})]})]}),"\n",(0,c.jsx)(d.h2,{children:"Argument resolution"}),"\n",(0,c.jsxs)("table",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{== [ 1 / 2 ]}}"})}),(0,c.jsx)("td",{width:"450px",children:"Pipe as argument"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{arr map [ prop ]}}"})}),(0,c.jsx)("td",{width:"450px",children:"Pipe as function argument"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{width:"250px",children:[(0,c.jsx)("code",{children:"{{== 1}}"}),(0,c.jsx)("br",{}),(0,c.jsx)("code",{children:"{{== true}}"})]}),(0,c.jsxs)("td",{width:"450px",children:["Numbers, booleans, ",(0,c.jsx)("code",{children:"undefined"})," and ",(0,c.jsx)("code",{children:"null"})," are always as is"]})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{== arg}}"})}),(0,c.jsxs)("td",{width:"450px",children:["Auto mode",(0,c.jsx)("br",{})," ",(0,c.jsx)("kbd",{children:"="})," ",(0,c.jsx)("code",{children:"{{== $arg}}"})," if ",(0,c.jsx)("code",{children:"arg"})," exists",(0,c.jsx)("br",{})," ",(0,c.jsx)("kbd",{children:"="})," ",(0,c.jsx)("code",{children:'{{== "arg"}}'})," if ",(0,c.jsx)("code",{children:"arg"})," does not exist"]})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{width:"250px",children:[(0,c.jsx)("code",{children:"{{== $arg}}"}),(0,c.jsx)("br",{}),(0,c.jsx)("code",{children:"{{== $1}}"})]}),(0,c.jsx)("td",{width:"450px",children:"Forced evaluation"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:'{{== "arg"}}'})}),(0,c.jsx)("td",{width:"450px",children:"Forced constant value"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{width:"250px",children:[(0,c.jsx)("code",{children:"{{value1 == value2}}"}),(0,c.jsx)("br",{}),(0,c.jsx)("code",{children:"{{object1 == value2}}"}),(0,c.jsx)("br",{}),(0,c.jsx)("code",{children:"{{object1 == object2}}"})]}),(0,c.jsx)("td",{width:"450px",children:"Permitted evaluation in auto mode"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{value1 == object2}}"})}),(0,c.jsxs)("td",{width:"450px",children:["Fallback to forced constant value",(0,c.jsx)("br",{})," ",(0,c.jsx)("kbd",{children:"="})," ",(0,c.jsx)("code",{children:'{{value1 == "object2"}}'})]})]})]}),"\n",(0,c.jsx)(d.h2,{children:"Special functions"}),"\n",(0,c.jsxs)("table",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{arr1 | arr2}}"})}),(0,c.jsx)("td",{width:"450px",children:"Concatenates arrays or values into new array"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{width:"250px",children:[(0,c.jsx)("code",{children:"{{e1 &amp;&amp; e2}}"}),(0,c.jsx)("br",{}),(0,c.jsx)("code",{children:"{{e1 || e2}}"}),(0,c.jsx)("br",{}),(0,c.jsx)("code",{children:"{{e1 &amp;&amp; [ e2 || e3 ]}}"})]}),(0,c.jsx)("td",{width:"450px",children:"Boolean logic"})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{let name value}}"})}),(0,c.jsxs)("td",{width:"450px",children:["Save ",(0,c.jsx)("code",{children:"value"})," to global variable named ",(0,c.jsx)("code",{children:"name"})]})]}),"\r\n",(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"250px",children:(0,c.jsx)("code",{children:"{{value as name}}"})}),(0,c.jsxs)("td",{width:"450px",children:["Save ",(0,c.jsx)("code",{children:"value"})," to global variable named ",(0,c.jsx)("code",{children:"name"})," and output the value"]})]})]}),"\n",(0,c.jsx)(d.h2,{children:"Built-in functions"}),"\n",(0,c.jsxs)("table",{width:"700px",children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"125px",valign:"top",children:(0,c.jsx)("i",{children:"Comparison"})}),(0,c.jsxs)("td",{width:"175px",children:[(0,c.jsx)("code",{children:"=="})," ",(0,c.jsx)("code",{children:"equals"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"!="})," ",(0,c.jsx)("code",{children:"notequals"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"~="})," ",(0,c.jsx)("code",{children:"iequals"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"!~="})," ",(0,c.jsx)("code",{children:"inotequals"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"^="})," ",(0,c.jsx)("code",{children:"startswith"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"$="})," ",(0,c.jsx)("code",{children:"endswith"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:">"})," ",(0,c.jsx)("code",{children:"less"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"<"})," ",(0,c.jsx)("code",{children:"orless"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:">="})," ",(0,c.jsx)("code",{children:"more"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"<"})," ",(0,c.jsx)("code",{children:"ormore"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"between"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"contains"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"like"})]}),(0,c.jsxs)("td",{width:"425px",children:[(0,c.jsx)("code",{children:"{{a == b}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{a != b}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{a ~= A}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"})," ",(0,c.jsx)("kbd",{children:"v2.1"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{a !~= A}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"false"})," ",(0,c.jsx)("kbd",{children:"v2.1"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{abc ^= a}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"})," ",(0,c.jsx)("kbd",{children:"v2.1"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{abc $= c}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"})," ",(0,c.jsx)("kbd",{children:"v2.1"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{a > b}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{a &lt; b}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{a >= b}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{a &lt;= b}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{a between 0 100}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"foobar" contains foo}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"foobar" like /^foo/}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"})]})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"125px",valign:"top",children:(0,c.jsx)("i",{children:"Condition"})}),(0,c.jsxs)("td",{width:"175px",children:[(0,c.jsx)("code",{children:"!!"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"!"})," ",(0,c.jsx)("code",{children:"not"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"or"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"??"})," ",(0,c.jsx)("kbd",{children:"v2.2"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"?:"})," ",(0,c.jsx)("code",{children:"choose"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"?"})," ",(0,c.jsx)("code",{children:"test"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"in"})," ",(0,c.jsx)("kbd",{children:"v2.1"})]}),(0,c.jsxs)("td",{width:"425px",children:[(0,c.jsx)("code",{children:"{{[ !! 1 ]}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{[ ! 1 ]}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"false"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{falsy or default}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"default"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{null ?? default}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"default"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{falsy ?: yes no}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"no"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{? falsy yes no}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"no"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"length" in [ 1 | 2 | 3 ]}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"})]})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"125px",valign:"top",children:(0,c.jsx)("i",{children:"String"})}),(0,c.jsxs)("td",{width:"175px",children:[(0,c.jsx)("code",{children:"&"})," ",(0,c.jsx)("code",{children:"concat"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"replace"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"substr"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"trim"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"trimstart"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"trimend"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"padstart"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"padend"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"removestart"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"removeend"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"cutbefore"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"cutbeforelast"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"cutafter"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"cutafterlast"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"split"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"repeat"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"upper"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"lower"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"ucfirst"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"lcfirst"})," ",(0,c.jsx)("kbd",{children:"v2.1"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"hyphenate"})," ",(0,c.jsx)("kbd",{children:"v2.1"})]}),(0,c.jsx)("td",{width:"425px",children:(0,c.jsxs)(d.p,{children:[(0,c.jsx)("code",{children:'{{"foo" & bar}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"foobar"})," (alias in ",(0,c.jsx)("kbd",{children:"v2.4"}),")",(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"foo" replace foo bar}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"bar"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"foo" substr 0 2}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"fo"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{" foo " trim}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"foo"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{" foo " trimstart}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"foo "}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{" foo " trimend}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:" foo"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"foo" padstart /}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"/foo"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"foo" padend /}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"foo/"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"/foo/" removestart /}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"foo/"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"/foo/" removeend /}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"/foo"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"a.b.c" cutbefore .}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"a"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"a.b.c" cutbeforelast .}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"a.b"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"a.b.c" cutafter .}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"b.c"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"a.b.c" cutafterlast .}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"c"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{&amp;"a.b.c" split .}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:'["a","b","c"]'}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{2 repeat "foo"}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"foofoo"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"foo" upper}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"FOO"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"FOO" lower}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"foo"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"foo" ucfirst}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"Foo"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"FOO" lcfirst}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"fOO"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"FooBar" hyphenate}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"foo-bar"})]})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"125px",valign:"top",children:(0,c.jsx)("i",{children:"Maths"})}),(0,c.jsxs)("td",{width:"175px",children:[(0,c.jsx)("code",{children:"max"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"min"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"round"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"floor"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"ceil"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"abs"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"+"})," ",(0,c.jsx)("code",{children:"plus"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"-"})," ",(0,c.jsx)("code",{children:"minus"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"*"})," ",(0,c.jsx)("code",{children:"multiply"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"/"})," ",(0,c.jsx)("code",{children:"divide"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"%"})," ",(0,c.jsx)("code",{children:"mod"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"^"})," ",(0,c.jsx)("code",{children:"pow"})]}),(0,c.jsxs)("td",{width:"425px",children:[(0,c.jsx)("code",{children:"{{10 max 1}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"1"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{10 min 100}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"100"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{3.14 round}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"3"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{3.14 floor}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"3"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{3.14 ceil}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"4"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{-3.14 abs}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"3.14"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{10 + 2}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"12"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{10 - 2}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"8"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{10 * 2}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"20"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{10 / 2}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"5"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{10 % 2}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"0"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{10 ^ 2}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"100"})]})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"125px",valign:"top",children:(0,c.jsx)("i",{children:"Iterable"})}),(0,c.jsxs)("td",{width:"175px",children:[(0,c.jsx)("code",{children:".."})," ",(0,c.jsx)("code",{children:"to"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"join"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"keys"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"map"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"where"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"first"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"any"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"all"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"sum"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"slice"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"unique"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"sort"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"sortby"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"rsort"})," ",(0,c.jsx)("kbd",{children:"v2.6"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"rsortby"})," ",(0,c.jsx)("kbd",{children:"v2.6"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"reverse"})]}),(0,c.jsxs)("td",{width:"425px",children:[(0,c.jsx)("code",{children:"{{0 .. 3}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"[0,1,2,3]"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib join ,}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"1,1,2,3,5,8"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib keys}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"[0,1,2,3,4,5]"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib map [ % 2 ]}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"[0,0,1,0,0,1]"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib where [ even ]}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"[2,8]"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib first [ even ]}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"2"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib any [ even ]}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"true"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib all [ even ]}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"false"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib sum}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"20"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib slice 0 2}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"[1,1]"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib unique}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"[1,2,3,5,8]"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib sort}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"[1,1,2,3,5,8]"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib sortby [ % 2 ]}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"[2,8,1,1,3,5]"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib rsort}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"[8,5,3,2,1,1]"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib rsortby [ % 2 ]}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"[8,2,5,3,1,1]"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{fib reverse}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"[8,5,3,2,1,1]"})]})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"125px",valign:"top",children:(0,c.jsx)("i",{children:"Formatting"})}),(0,c.jsxs)("td",{width:"175px",children:[(0,c.jsx)("code",{children:":printf"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:":query"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:":date"})]}),(0,c.jsxs)("td",{width:"425px",children:[(0,c.jsx)("code",{children:"{{3.14 :printf %d}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"3"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{&amp;:query}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"p1=value1&p2=value2"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"{{0 :date yyyy-MM-dd}}"})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"1970-01-01"})]})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"125px",valign:"top",children:(0,c.jsx)("i",{children:"Date"})}),(0,c.jsxs)("td",{width:"175px",children:[(0,c.jsx)("code",{children:"asdate"})," ",(0,c.jsx)("kbd",{children:"v2.6"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:"addtime"})," ",(0,c.jsx)("kbd",{children:"v2.6"})]}),(0,c.jsxs)("td",{width:"425px",children:[(0,c.jsx)("code",{children:'{{"2019-01-01" asdate + 0}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"1546300800000"}),(0,c.jsx)("br",{}),"\r\n",(0,c.jsx)("code",{children:'{{"2019-01-01" addtime 1M}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"2019-02-01"})]})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{width:"125px",valign:"top",children:(0,c.jsx)("i",{children:"Template"})}),(0,c.jsxs)("td",{width:"175px",children:[(0,c.jsx)("code",{children:"|>"})," ",(0,c.jsx)("code",{children:"eval"})," ",(0,c.jsx)("kbd",{children:"v2.8"})]}),(0,c.jsxs)("td",{width:"425px",children:[(0,c.jsx)("code",{children:'{{"foo" |&gt; template}}'})," ",(0,c.jsx)("kbd",{children:"\u279c"})," ",(0,c.jsx)("code",{children:"Value is foo"})]})]})]})]})}d.default=function(e={}){const{wrapper:d}=e.components||{};return d?(0,c.jsx)(d,Object.assign({},e,{children:(0,c.jsx)(s,e)})):s(e)}}}]);