"use strict";(self.webpackChunkbrewjs_for_react_router_example=self.webpackChunkbrewjs_for_react_router_example||[]).push([[3221],{3221:function(e,a,n){n.r(a),n.d(a,{default:function(){return m}});var c=n(2556),o=n(4050),d="import { useLayoutEffect, useRef, useState } from \"react\";\r\nimport { Mixin, useFlyoutMixin, useFocusStateMixin, useScrollableMixin } from \"brew-js-react\";\r\nimport { useAsync, useMemoizedFunction } from \"zeta-dom-react\";\r\nimport { MatchableItem, MatchedItem, fuzzyMatch, useMenuKeystrokeMixin } from \"@misonou/react-app-utils\";\r\nimport { TextInput, TextInputProps } from \".\";\r\nimport { startPositioning } from \"@misonou/react-css-utils\";\r\n\r\nexport interface Suggestion<T = any> extends MatchableItem<T> {\r\n}\r\n\r\nexport interface SuggestionBaseProps<T extends Suggestion> {\r\n    /**\r\n     * Specifies maximum number of items to be shown in suggestion list.\r\n     */\r\n    showCount?: number;\r\n    /**\r\n     * Specifies whether to show all suggestions when input box is empty.\r\n     */\r\n    alwaysShowSuggestions?: boolean;\r\n    /**\r\n     * Specifies whether to show unmatched suggestions.\r\n     */\r\n    alwaysShowAllSuggestions?: boolean;\r\n    /**\r\n     * Returns suggestions based on user input.\r\n     * @param text User input.\r\n     * @param signal An `AbortSignal` object.\r\n     */\r\n    getSuggestions?: (text: string, signal: AbortSignal) => readonly T[] | Promise<readonly T[]>;\r\n    /**\r\n     * Overrides default rendering for suggestion.\r\n     * @param item Item to be rendered.\r\n     */\r\n    renderItem?: (item: MatchedItem<T>) => React.ReactNode;\r\n}\r\n\r\nexport interface SuggestionListProps<T extends Suggestion> extends SuggestionBaseProps<T> {\r\n    suggestions: readonly T[];\r\n    excludes?: readonly T['value'][];\r\n    inputText: string;\r\n    loading: boolean;\r\n    onSelect: (item: MatchedItem<T>) => void;\r\n}\r\n\r\nexport function SuggestionList<T extends Suggestion>(props: SuggestionListProps<T>) {\r\n    let suggestions: MatchedItem<T>[] = [];\r\n    if (props.inputText) {\r\n        suggestions = fuzzyMatch(props.suggestions, props.inputText, {\r\n            sortByRelevancy: true,\r\n            returnAll: props.alwaysShowAllSuggestions\r\n        });\r\n    } else if (props.alwaysShowSuggestions) {\r\n        suggestions = props.suggestions.map(v => ({ ...v, formattedText: v.displayText })).sort((a, b) => a.displayText.localeCompare(b.displayText));\r\n    }\r\n    if (props.excludes) {\r\n        suggestions = suggestions.filter(v => !props.excludes!.includes(v.value));\r\n    }\r\n    if (props.showCount) {\r\n        suggestions.splice(props.showCount);\r\n    }\r\n    return (\r\n        <>\r\n            <div {...Mixin.use(Mixin.scrollableTarget, 'zui-suggestion-picker-list')}>\r\n                {suggestions.map((v, i) => (\r\n                    <button key={i} type=\"button\" className=\"zui-suggestion-picker-item\" onClick={() => props.onSelect(v)}>\r\n                        {props.renderItem ?\r\n                            props.renderItem(v) :\r\n                            <span dangerouslySetInnerHTML={{ __html: v.formattedText }}></span>}\r\n                    </button>\r\n                ))}\r\n            </div>\r\n            {props.loading ?\r\n                <></> :\r\n                suggestions.length === 0 && props.inputText &&\r\n                <div className=\"zui-suggestion-picker-list-empty\">No result</div>}\r\n        </>\r\n    );\r\n}\r\n\r\nexport interface SuggestionsProps<T extends Suggestion> extends Omit<TextInputProps, 'name' | 'value' | 'onChange'>, SuggestionBaseProps<T> {\r\n    /**\r\n     * Specifies a list of suggestions.\r\n     * {@link SuggestionBaseProps.getSuggestions} will not be invoked if suggestions are given.\r\n     */\r\n    suggestions?: readonly T[];\r\n    /**\r\n     * Exclues items to in suggestion list.\r\n     */\r\n    excludes?: readonly T['value'][];\r\n    /**\r\n     * Specifies behavior when a suggestion item is selected.\r\n     */\r\n    updateInputOnSelect?: 'clear' | 'complete';\r\n    /**\r\n     * Sets text in input.\r\n     */\r\n    inputText?: string;\r\n    /**\r\n     * Specifies action when a suggestion item is selected.\r\n     */\r\n    onSelect?: (item: MatchedItem<T>) => void;\r\n    /**\r\n     * Specifies action when input text changed.\r\n     */\r\n    onTextChange?: (value: string) => void;\r\n}\r\n\r\nexport function Suggestions<T extends Suggestion>(props: SuggestionsProps<T>) {\r\n    const containerRef = useRef<HTMLElement>(null);\r\n    const scrollable = useScrollableMixin({ direction: 'y-only' });\r\n    const onSelectedItem = useMemoizedFunction((v: MatchedItem<T>) => {\r\n        props.onSelect?.(v);\r\n        if (props.updateInputOnSelect === 'clear') {\r\n            onTextChange('');\r\n        } else if (props.updateInputOnSelect === 'complete') {\r\n            onTextChange(v.displayText);\r\n        }\r\n    });\r\n    const onTextChange = (value: string) => {\r\n        setInputText(value);\r\n        props.onTextChange?.(value);\r\n    };\r\n    const [inputText, setInputText] = useState('');\r\n    const menuKeystroke = useMenuKeystrokeMixin('.zui-suggestion-picker-item');\r\n    const focusState = useFocusStateMixin();\r\n    const flyout = useFlyoutMixin({ initialFocus: false, closeOnBlur: false });\r\n\r\n    const [suggestions, { loading }] = useAsync(async (signal) => {\r\n        return props.suggestions || ((inputText || props.alwaysShowSuggestions) && await props.getSuggestions?.(inputText, signal)) || [];\r\n    }, [inputText], 250);\r\n\r\n    useLayoutEffect(() => {\r\n        return flyout.whenVisible(() => {\r\n            return startPositioning(flyout.element!, containerRef.current!, 'left bottom', {\r\n                strategy: 'flip',\r\n                basisHeight: 300,\r\n                scrollToFit: true\r\n            });\r\n        });\r\n    }, []);\r\n\r\n    return (\r\n        <div {...Mixin.use(containerRef, focusState, menuKeystroke, flyout.toggle.on('focus'), 'zui-field zui-picker-input')}>\r\n            <TextInput {...props}\r\n                autoComplete=\"off\" value={inputText} onChange={onTextChange} />\r\n            <div {...Mixin.use(flyout, scrollable, 'zui-suggestion-picker')}>\r\n                <SuggestionList {...props} inputText={inputText} loading={loading} onSelect={onSelectedItem} suggestions={suggestions || []} />\r\n            </div>\r\n        </div>\r\n    );\r\n}\r\n",t=n(933);function i(e){const a=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",code:"code"},e.components),{Module:n,CodeBlock:i}=a;return i||l("CodeBlock",!0),n||l("Module",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{name:"zeta-dom-react"}),"\n",(0,c.jsx)(a.h1,{children:"Suggestions"}),"\n",(0,c.jsx)(o.Db,{label:"Countries",getSuggestions:()=>t.hP}),"\n",(0,c.jsx)(a.h2,{children:"Example: Multiple picker"}),"\n",(0,c.jsx)(o.G8,{label:"Countries",getSuggestions:()=>t.hP}),"\n",(0,c.jsx)(a.h2,{children:"Source code"}),"\n",(0,c.jsx)(i,{children:d,className:"language-tsx"}),"\n",(0,c.jsx)(a.h2,{children:"See also"}),"\n",(0,c.jsxs)(a.ul,{children:["\n",(0,c.jsx)(a.li,{children:(0,c.jsx)(a.a,{href:":",children:(0,c.jsx)(a.code,{children:"MultiChoiceField"})})}),"\n"]})]})}var m=function(e={}){const{wrapper:a}=e.components||{};return a?(0,c.jsx)(a,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)};function l(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},933:function(e,a,n){n.d(a,{_R:function(){return o},hP:function(){return t},wr:function(){return d}});var c=[{name:"Afghanistan",code:"AF",dial_code:"004",tc_name:"\u963f\u5bcc\u6c57"},{name:"\xc5land Islands",code:"AX",dial_code:"248",tc_name:"\u5967\u862d"},{name:"Albania",code:"AL",dial_code:"008",tc_name:"\u963f\u723e\u5df4\u5c3c\u4e9e"},{name:"Algeria",code:"DZ",dial_code:"012",tc_name:"\u963f\u723e\u53ca\u5229\u4e9e"},{name:"American Samoa",code:"AS",dial_code:"016",tc_name:"\u7f8e\u5c6c\u85a9\u6469\u4e9e"},{name:"Andorra",code:"AD",dial_code:"020",tc_name:"\u5b89\u9053\u723e"},{name:"Angola",code:"AO",dial_code:"024",tc_name:"\u5b89\u54e5\u62c9"},{name:"Anguilla",code:"AI",dial_code:"660",tc_name:"\u5b89\u572d\u62c9"},{name:"Antarctica",code:"AQ",dial_code:"010",tc_name:"\u5357\u6975\u6d32"},{name:"Antigua and Barbuda",code:"AG",dial_code:"028",tc_name:"\u5b89\u5730\u5361\u53ca\u5df4\u5e03\u9054"},{name:"Argentina",code:"AR",dial_code:"032",tc_name:"\u963f\u6839\u5ef7"},{name:"Armenia",code:"AM",dial_code:"051",tc_name:"\u4e9e\u7f8e\u5c3c\u4e9e"},{name:"Aruba",code:"AW",dial_code:"533",tc_name:"\u963f\u9b6f\u5df4"},{name:"Australia",code:"AU",dial_code:"036",tc_name:"\u6fb3\u6d32"},{name:"Austria",code:"AT",dial_code:"040",tc_name:"\u5967\u5730\u5229"},{name:"Azerbaijan",code:"AZ",dial_code:"031",tc_name:"\u4e9e\u585e\u62dc\u7136"},{name:"Bahamas",code:"BS",dial_code:"044",tc_name:"\u5df4\u54c8\u99ac"},{name:"Bahrain",code:"BH",dial_code:"048",tc_name:"\u5df4\u6797"},{name:"Bangladesh",code:"BD",dial_code:"050",tc_name:"\u5b5f\u52a0\u62c9"},{name:"Barbados",code:"BB",dial_code:"052",tc_name:"\u5df4\u8c9d\u591a"},{name:"Belarus",code:"BY",dial_code:"112",tc_name:"\u767d\u4fc4\u7f85\u65af"},{name:"Belgium",code:"BE",dial_code:"056",tc_name:"\u6bd4\u5229\u6642"},{name:"Belize",code:"BZ",dial_code:"084",tc_name:"\u8c9d\u91cc\u65af"},{name:"Benin",code:"BJ",dial_code:"204",tc_name:"\u8c9d\u5357"},{name:"Bermuda",code:"BM",dial_code:"060",tc_name:"\u767e\u6155\u9054"},{name:"Bhutan",code:"BT",dial_code:"064",tc_name:"\u4e0d\u4e39"},{name:"Bolivia, Plurinational State of)",code:"BO",dial_code:"068",tc_name:"\u73bb\u5229\u7dad\u4e9e"},{name:"Bonaire, Sint Eustatius and Saba",code:"BQ",dial_code:"535",tc_name:"\u8377\u862d\u52a0\u52d2\u6bd4\u5340"},{name:"Bosnia and Herzegovina",code:"BA",dial_code:"070",tc_name:"\u6ce2\u58eb\u5c3c\u4e9e\u8207\u8d6b\u585e\u54e5\u7dad\u7d0d"},{name:"Botswana",code:"BW",dial_code:"072",tc_name:"\u6ce2\u672d\u90a3"},{name:"Bouvet Island",code:"BV",dial_code:"074",tc_name:"\u5e03\u97cb\u5cf6"},{name:"Brazil",code:"BR",dial_code:"076",tc_name:"\u5df4\u897f"},{name:"British Indian Ocean Territory",code:"IO",dial_code:"086",tc_name:"\u82f1\u5c6c\u5370\u5ea6\u6d0b\u9818\u5730"},{name:"Brunei Darussalam",code:"BN",dial_code:"096",tc_name:"\u6c76\u840a"},{name:"Bulgaria",code:"BG",dial_code:"100",tc_name:"\u4fdd\u52a0\u5229\u4e9e"},{name:"Burkina Faso",code:"BF",dial_code:"854",tc_name:"\u5e03\u5409\u7d0d\u6cd5\u7d22"},{name:"Burundi",code:"BI",dial_code:"108",tc_name:"\u84b2\u9686\u5730"},{name:"Cabo Verde",code:"CV",dial_code:"132",tc_name:"\u7dad\u5fb7\u89d2"},{name:"Cambodia",code:"KH",dial_code:"116",tc_name:"\u67ec\u57d4\u5be8"},{name:"Cameroon",code:"CM",dial_code:"120",tc_name:"\u5580\u9ea5\u9686"},{name:"Canada",code:"CA",dial_code:"124",tc_name:"\u52a0\u62ff\u5927"},{name:"Cayman Islands",code:"KY",dial_code:"136",tc_name:"\u958b\u66fc\u7fa4\u5cf6"},{name:"Central African Republic",code:"CF",dial_code:"140",tc_name:"\u4e2d\u975e"},{name:"Chad",code:"TD",dial_code:"148",tc_name:"\u67e5\u5fb7"},{name:"Chile",code:"CL",dial_code:"152",tc_name:"\u667a\u5229"},{name:"China",code:"CN",dial_code:"156",tc_name:"\u4e2d\u570b"},{name:"Christmas Island",code:"CX",dial_code:"162",tc_name:"\u8056\u8a95\u5cf6"},{name:"Cocos, Keeling) Islands",code:"CC",dial_code:"166",tc_name:"\u79d1\u79d1\u65af\uff08\u57fa\u6797\uff09\u7fa4\u5cf6"},{name:"Colombia",code:"CO",dial_code:"170",tc_name:"\u54e5\u502b\u6bd4\u4e9e"},{name:"Comoros",code:"KM",dial_code:"174",tc_name:"\u845b\u6469"},{name:"Congo",code:"CG",dial_code:"178",tc_name:"\u525b\u679c\u5171\u548c\u570b"},{name:"Congo, Democratic Republic of the)",code:"CD",dial_code:"180",tc_name:"\u525b\u679c\u6c11\u4e3b\u5171\u548c\u570b"},{name:"Cook Islands",code:"CK",dial_code:"184",tc_name:"\u5eab\u514b\u7fa4\u5cf6"},{name:"Costa Rica",code:"CR",dial_code:"188",tc_name:"\u54e5\u65af\u5927\u9ece\u52a0"},{name:"C\xf4te d'Ivoire",code:"CI",dial_code:"384",tc_name:"\u8c61\u7259\u6d77\u5cb8"},{name:"Croatia",code:"HR",dial_code:"191",tc_name:"\u514b\u7f85\u57c3\u897f\u4e9e"},{name:"Cuba",code:"CU",dial_code:"192",tc_name:"\u53e4\u5df4"},{name:"Cura\xe7ao",code:"CW",dial_code:"531",tc_name:"\u53e4\u62c9\u7d22"},{name:"Cyprus",code:"CY",dial_code:"196",tc_name:"\u8cfd\u666e\u52d2\u65af"},{name:"Czechia",code:"CZ",dial_code:"203",tc_name:"\u6377\u514b"},{name:"Denmark",code:"DK",dial_code:"208",tc_name:"\u4e39\u9ea5"},{name:"Djibouti",code:"DJ",dial_code:"262",tc_name:"\u5409\u5e03\u5730"},{name:"Dominica",code:"DM",dial_code:"212",tc_name:"\u591a\u7c73\u5c3c\u514b"},{name:"Dominican Republic",code:"DO",dial_code:"214",tc_name:"\u591a\u660e\u5c3c\u52a0"},{name:"Ecuador",code:"EC",dial_code:"218",tc_name:"\u5384\u74dc\u591a"},{name:"Egypt",code:"EG",dial_code:"818",tc_name:"\u57c3\u53ca"},{name:"El Salvador",code:"SV",dial_code:"222",tc_name:"\u85a9\u723e\u74e6\u591a"},{name:"Equatorial Guinea",code:"GQ",dial_code:"226",tc_name:"\u8d64\u9053\u5e7e\u5167\u4e9e"},{name:"Eritrea",code:"ER",dial_code:"232",tc_name:"\u5384\u5229\u5782\u4e9e"},{name:"Estonia",code:"EE",dial_code:"233",tc_name:"\u611b\u6c99\u5c3c\u4e9e"},{name:"Eswatini",code:"SZ",dial_code:"748",tc_name:"\u53f2\u74e6\u5e1d\u5c3c"},{name:"Ethiopia",code:"ET",dial_code:"231",tc_name:"\u8863\u7d22\u6bd4\u4e9e"},{name:"Falkland Islands, Malvinas)",code:"FK",dial_code:"238",tc_name:"\u798f\u514b\u862d\u7fa4\u5cf6"},{name:"Faroe Islands",code:"FO",dial_code:"234",tc_name:"\u6cd5\u7f85\u7fa4\u5cf6"},{name:"Fiji",code:"FJ",dial_code:"242",tc_name:"\u6590\u6fdf"},{name:"Finland",code:"FI",dial_code:"246",tc_name:"\u82ac\u862d"},{name:"France",code:"FR",dial_code:"250",tc_name:"\u6cd5\u570b"},{name:"French Guiana",code:"GF",dial_code:"254",tc_name:"\u6cd5\u5c6c\u572d\u4e9e\u90a3"},{name:"French Polynesia",code:"PF",dial_code:"258",tc_name:"\u6cd5\u5c6c\u73bb\u91cc\u5c3c\u897f\u4e9e"},{name:"French Southern Territories",code:"TF",dial_code:"260",tc_name:"\u6cd5\u5c6c\u5357\u90e8\u548c\u5357\u6975\u9818\u5730"},{name:"Gabon",code:"GA",dial_code:"266",tc_name:"\u52a0\u5f6d"},{name:"Gambia",code:"GM",dial_code:"270",tc_name:"\u7518\u6bd4\u4e9e"},{name:"Georgia",code:"GE",dial_code:"268",tc_name:"\u55ac\u6cbb\u4e9e"},{name:"Germany",code:"DE",dial_code:"276",tc_name:"\u5fb7\u570b"},{name:"Ghana",code:"GH",dial_code:"288",tc_name:"\u8fe6\u7d0d"},{name:"Gibraltar",code:"GI",dial_code:"292",tc_name:"\u76f4\u5e03\u7f85\u9640"},{name:"Greece",code:"GR",dial_code:"300",tc_name:"\u5e0c\u81d8"},{name:"Greenland",code:"GL",dial_code:"304",tc_name:"\u683c\u9675\u862d"},{name:"Grenada",code:"GD",dial_code:"308",tc_name:"\u683c\u745e\u90a3\u9054"},{name:"Guadeloupe",code:"GP",dial_code:"312",tc_name:"\u74dc\u5730\u6d1b\u666e"},{name:"Guam",code:"GU",dial_code:"316",tc_name:"\u95dc\u5cf6"},{name:"Guatemala",code:"GT",dial_code:"320",tc_name:"\u74dc\u5730\u99ac\u62c9"},{name:"Guernsey",code:"GG",dial_code:"831",tc_name:"\u6839\u897f"},{name:"Guinea",code:"GN",dial_code:"324",tc_name:"\u5e7e\u5167\u4e9e"},{name:"Guinea-Bissau",code:"GW",dial_code:"624",tc_name:"\u5e7e\u5167\u4e9e\u6bd4\u7d22"},{name:"Guyana",code:"GY",dial_code:"328",tc_name:"\u84cb\u4e9e\u90a3"},{name:"Haiti",code:"HT",dial_code:"332",tc_name:"\u6d77\u5730"},{name:"Heard Island and McDonald Islands",code:"HM",dial_code:"334",tc_name:"\u8d6b\u5fb7\u5cf6\u548c\u9ea5\u514b\u5510\u7d0d\u7fa4\u5cf6"},{name:"Holy See",code:"VA",dial_code:"336",tc_name:"\u68b5\u8482\u5ca1"},{name:"Honduras",code:"HN",dial_code:"340",tc_name:"\u5b8f\u90fd\u62c9\u65af"},{name:"Hong Kong",code:"HK",dial_code:"344",tc_name:"\u9999\u6e2f"},{name:"Hungary",code:"HU",dial_code:"348",tc_name:"\u5308\u7259\u5229"},{name:"Iceland",code:"IS",dial_code:"352",tc_name:"\u51b0\u5cf6"},{name:"India",code:"IN",dial_code:"356",tc_name:"\u5370\u5ea6"},{name:"Indonesia",code:"ID",dial_code:"360",tc_name:"\u5370\u5ea6\u5c3c\u897f\u4e9e"},{name:"Iran, Islamic Republic of)",code:"IR",dial_code:"364",tc_name:"\u4f0a\u6717"},{name:"Iraq",code:"IQ",dial_code:"368",tc_name:"\u4f0a\u62c9\u514b"},{name:"Ireland",code:"IE",dial_code:"372",tc_name:"\u611b\u723e\u862d"},{name:"Isle of Man",code:"IM",dial_code:"833",tc_name:"\u66fc\u5cf6"},{name:"Israel",code:"IL",dial_code:"376",tc_name:"\u4ee5\u8272\u5217"},{name:"Italy",code:"IT",dial_code:"380",tc_name:"\u7fa9\u5927\u5229"},{name:"Jamaica",code:"JM",dial_code:"388",tc_name:"\u7259\u8cb7\u52a0"},{name:"Japan",code:"JP",dial_code:"392",tc_name:"\u65e5\u672c"},{name:"Jersey",code:"JE",dial_code:"832",tc_name:"\u6fa4\u897f"},{name:"Jordan",code:"JO",dial_code:"400",tc_name:"\u7d04\u65e6"},{name:"Kazakhstan",code:"KZ",dial_code:"398",tc_name:"\u54c8\u85a9\u514b"},{name:"Kenya",code:"KE",dial_code:"404",tc_name:"\u80af\u4e9e"},{name:"Kiribati",code:"KI",dial_code:"296",tc_name:"\u5409\u91cc\u5df4\u65af"},{name:"Korea, Democratic People's Republic of)",code:"KP",dial_code:"408",tc_name:"\u5317\u97d3"},{name:"Korea, Republic of)",code:"KR",dial_code:"410",tc_name:"\u5357\u97d3"},{name:"Kuwait",code:"KW",dial_code:"414",tc_name:"\u79d1\u5a01\u7279"},{name:"Kyrgyzstan",code:"KG",dial_code:"417",tc_name:"\u5409\u723e\u5409\u65af"},{name:"Lao People's Democratic Republic",code:"LA",dial_code:"418",tc_name:"\u5bee\u570b"},{name:"Latvia",code:"LV",dial_code:"428",tc_name:"\u62c9\u812b\u7dad\u4e9e"},{name:"Lebanon",code:"LB",dial_code:"422",tc_name:"\u9ece\u5df4\u5ae9"},{name:"Lesotho",code:"LS",dial_code:"426",tc_name:"\u8cf4\u7d22\u6258"},{name:"Liberia",code:"LR",dial_code:"430",tc_name:"\u8cf4\u6bd4\u745e\u4e9e"},{name:"Libya",code:"LY",dial_code:"434",tc_name:"\u5229\u6bd4\u4e9e"},{name:"Liechtenstein",code:"LI",dial_code:"438",tc_name:"\u5217\u652f\u6566\u65af\u767b"},{name:"Lithuania",code:"LT",dial_code:"440",tc_name:"\u7acb\u9676\u5b9b"},{name:"Luxembourg",code:"LU",dial_code:"442",tc_name:"\u76e7\u68ee\u5821"},{name:"Macao",code:"MO",dial_code:"446",tc_name:"\u6fb3\u9580"},{name:"Madagascar",code:"MG",dial_code:"450",tc_name:"\u99ac\u9054\u52a0\u65af\u52a0"},{name:"Malawi",code:"MW",dial_code:"454",tc_name:"\u99ac\u62c9\u5a01"},{name:"Malaysia",code:"MY",dial_code:"458",tc_name:"\u99ac\u4f86\u897f\u4e9e"},{name:"Maldives",code:"MV",dial_code:"462",tc_name:"\u99ac\u723e\u5730\u592b"},{name:"Mali",code:"ML",dial_code:"466",tc_name:"\u99ac\u5229"},{name:"Malta",code:"MT",dial_code:"470",tc_name:"\u99ac\u723e\u4ed6"},{name:"Marshall Islands",code:"MH",dial_code:"584",tc_name:"\u99ac\u7d39\u723e\u7fa4\u5cf6"},{name:"Martinique",code:"MQ",dial_code:"474",tc_name:"\u99ac\u4e01\u5c3c\u514b"},{name:"Mauritania",code:"MR",dial_code:"478",tc_name:"\u8305\u5229\u5854\u5c3c\u4e9e"},{name:"Mauritius",code:"MU",dial_code:"480",tc_name:"\u6a21\u91cc\u897f\u65af"},{name:"Mayotte",code:"YT",dial_code:"175",tc_name:"\u99ac\u7d04\u7279"},{name:"Mexico",code:"MX",dial_code:"484",tc_name:"\u58a8\u897f\u54e5"},{name:"Micronesia, Federated States of)",code:"FM",dial_code:"583",tc_name:"\u5bc6\u514b\u7f85\u5c3c\u897f\u4e9e\u806f\u90a6"},{name:"Moldova, Republic of)",code:"MD",dial_code:"498",tc_name:"\u6469\u723e\u591a\u74e6"},{name:"Monaco",code:"MC",dial_code:"492",tc_name:"\u6469\u7d0d\u54e5"},{name:"Mongolia",code:"MN",dial_code:"496",tc_name:"\u8499\u53e4"},{name:"Montenegro",code:"ME",dial_code:"499",tc_name:"\u8499\u7279\u5167\u54e5\u7f85"},{name:"Montserrat",code:"MS",dial_code:"500",tc_name:"\u8499\u7279\u585e\u62c9\u7279"},{name:"Morocco",code:"MA",dial_code:"504",tc_name:"\u6469\u6d1b\u54e5"},{name:"Mozambique",code:"MZ",dial_code:"508",tc_name:"\u83ab\u4e09\u6bd4\u514b"},{name:"Myanmar",code:"MM",dial_code:"104",tc_name:"\u7dec\u7538"},{name:"Namibia",code:"NA",dial_code:"516",tc_name:"\u7d0d\u7c73\u6bd4\u4e9e"},{name:"Nauru",code:"NR",dial_code:"520",tc_name:"\u8afe\u9b6f"},{name:"Nepal",code:"NP",dial_code:"524",tc_name:"\u5c3c\u6cca\u723e"},{name:"Netherlands",code:"NL",dial_code:"528",tc_name:"\u8377\u862d"},{name:"New Caledonia",code:"NC",dial_code:"540",tc_name:"\u65b0\u5580\u91cc\u591a\u5c3c\u4e9e"},{name:"New Zealand",code:"NZ",dial_code:"554",tc_name:"\u7d10\u897f\u862d"},{name:"Nicaragua",code:"NI",dial_code:"558",tc_name:"\u5c3c\u52a0\u62c9\u74dc"},{name:"Niger",code:"NE",dial_code:"562",tc_name:"\u5c3c\u65e5"},{name:"Nigeria",code:"NG",dial_code:"566",tc_name:"\u5948\u53ca\u5229\u4e9e"},{name:"Niue",code:"NU",dial_code:"570",tc_name:"\u7d10\u57c3"},{name:"Norfolk Island",code:"NF",dial_code:"574",tc_name:"\u8afe\u798f\u514b\u5cf6"},{name:"North Macedonia",code:"MK",dial_code:"807",tc_name:"\u5317\u99ac\u5176\u9813"},{name:"Northern Mariana Islands",code:"MP",dial_code:"580",tc_name:"\u5317\u99ac\u5229\u5b89\u7d0d\u7fa4\u5cf6"},{name:"Norway",code:"NO",dial_code:"578",tc_name:"\u632a\u5a01"},{name:"Oman",code:"OM",dial_code:"512",tc_name:"\u963f\u66fc"},{name:"Pakistan",code:"PK",dial_code:"586",tc_name:"\u5df4\u57fa\u65af\u5766"},{name:"Palau",code:"PW",dial_code:"585",tc_name:"\u5e1b\u7409"},{name:"Palestine, State of",code:"PS",dial_code:"275",tc_name:"\u5df4\u52d2\u65af\u5766"},{name:"Panama",code:"PA",dial_code:"591",tc_name:"\u5df4\u62ff\u99ac"},{name:"Papua New Guinea",code:"PG",dial_code:"598",tc_name:"\u5df4\u5e03\u4e9e\u7d10\u5e7e\u5167\u4e9e"},{name:"Paraguay",code:"PY",dial_code:"600",tc_name:"\u5df4\u62c9\u572d"},{name:"Peru",code:"PE",dial_code:"604",tc_name:"\u79d8\u9b6f"},{name:"Philippines",code:"PH",dial_code:"608",tc_name:"\u83f2\u5f8b\u8cd3"},{name:"Pitcairn",code:"PN",dial_code:"612",tc_name:"\u76ae\u7279\u51f1\u6069\u7fa4\u5cf6"},{name:"Poland",code:"PL",dial_code:"616",tc_name:"\u6ce2\u862d"},{name:"Portugal",code:"PT",dial_code:"620",tc_name:"\u8461\u8404\u7259"},{name:"Puerto Rico",code:"PR",dial_code:"630",tc_name:"\u6ce2\u591a\u9ece\u5404"},{name:"Qatar",code:"QA",dial_code:"634",tc_name:"\u5361\u9054"},{name:"R\xe9union",code:"RE",dial_code:"638",tc_name:"\u7559\u5c3c\u65fa"},{name:"Romania",code:"RO",dial_code:"642",tc_name:"\u7f85\u99ac\u5c3c\u4e9e"},{name:"Russian Federation",code:"RU",dial_code:"643",tc_name:"\u4fc4\u7f85\u65af"},{name:"Rwanda",code:"RW",dial_code:"646",tc_name:"\u76e7\u5b89\u9054"},{name:"Saint Barth\xe9lemy",code:"BL",dial_code:"652",tc_name:"\u8056\u5df4\u745f\u7c73"},{name:"Saint Helena, Ascension and Tristan da Cunha",code:"SH",dial_code:"654",tc_name:"\u8056\u8d6b\u502b\u90a3\u3001\u963f\u68ee\u677e\u548c\u7279\u91cc\u65af\u5766-\u9054\u5eab\u5c3c\u4e9e"},{name:"Saint Kitts and Nevis",code:"KN",dial_code:"659",tc_name:"\u8056\u514b\u91cc\u65af\u591a\u798f\u53ca\u5c3c\u7dad\u65af"},{name:"Saint Lucia",code:"LC",dial_code:"662",tc_name:"\u8056\u9732\u897f\u4e9e"},{name:"Saint Martin, French part)",code:"MF",dial_code:"663",tc_name:"\u6cd5\u5c6c\u8056\u99ac\u4e01"},{name:"Saint Pierre and Miquelon",code:"PM",dial_code:"666",tc_name:"\u8056\u76ae\u57c3\u8207\u5bc6\u514b\u9686\u7fa4\u5cf6"},{name:"Saint Vincent and the Grenadines",code:"VC",dial_code:"670",tc_name:"\u8056\u6587\u68ee\u53ca\u683c\u745e\u90a3\u4e01"},{name:"Samoa",code:"WS",dial_code:"882",tc_name:"\u85a9\u6469\u4e9e"},{name:"San Marino",code:"SM",dial_code:"674",tc_name:"\u8056\u99ac\u5229\u8afe"},{name:"Sao Tome and Principe",code:"ST",dial_code:"678",tc_name:"\u8056\u591a\u7f8e\u666e\u6797\u897f\u6bd4"},{name:"Saudi Arabia",code:"SA",dial_code:"682",tc_name:"\u6c99\u70cf\u5730\u963f\u62c9\u4f2f"},{name:"Senegal",code:"SN",dial_code:"686",tc_name:"\u585e\u5167\u52a0\u723e"},{name:"Serbia",code:"RS",dial_code:"688",tc_name:"\u585e\u723e\u7dad\u4e9e"},{name:"Seychelles",code:"SC",dial_code:"690",tc_name:"\u585e\u5e2d\u723e"},{name:"Sierra Leone",code:"SL",dial_code:"694",tc_name:"\u7345\u5b50\u5c71"},{name:"Singapore",code:"SG",dial_code:"702",tc_name:"\u65b0\u52a0\u5761"},{name:"Sint Maarten, Dutch part)",code:"SX",dial_code:"534",tc_name:"\u8377\u5c6c\u8056\u99ac\u4e01"},{name:"Slovakia",code:"SK",dial_code:"703",tc_name:"\u65af\u6d1b\u4f10\u514b"},{name:"Slovenia",code:"SI",dial_code:"705",tc_name:"\u65af\u6d1b\u7dad\u5c3c\u4e9e"},{name:"Solomon Islands",code:"SB",dial_code:"090",tc_name:"\u7d22\u7f85\u9580\u7fa4\u5cf6"},{name:"Somalia",code:"SO",dial_code:"706",tc_name:"\u7d22\u99ac\u5229\u4e9e"},{name:"South Africa",code:"ZA",dial_code:"710",tc_name:"\u5357\u975e"},{name:"South Georgia and the South Sandwich Islands",code:"GS",dial_code:"239",tc_name:"\u5357\u55ac\u6cbb\u4e9e\u548c\u5357\u6851\u5a01\u5947\u7fa4\u5cf6"},{name:"South Sudan",code:"SS",dial_code:"728",tc_name:"\u5357\u8607\u4e39"},{name:"Spain",code:"ES",dial_code:"724",tc_name:"\u897f\u73ed\u7259"},{name:"Sri Lanka",code:"LK",dial_code:"144",tc_name:"\u65af\u91cc\u862d\u5361"},{name:"Sudan",code:"SD",dial_code:"729",tc_name:"\u8607\u4e39"},{name:"Suriname",code:"SR",dial_code:"740",tc_name:"\u8607\u5229\u5357"},{name:"Svalbard and Jan Mayen",code:"SJ",dial_code:"744",tc_name:"\u65af\u74e6\u723e\u5df4\u548c\u63da\u99ac\u5ef6"},{name:"Sweden",code:"SE",dial_code:"752",tc_name:"\u745e\u5178"},{name:"Switzerland",code:"CH",dial_code:"756",tc_name:"\u745e\u58eb"},{name:"Syrian Arab Republic",code:"SY",dial_code:"760",tc_name:"\u6558\u5229\u4e9e"},{name:"Taiwan",code:"TW",dial_code:"158",tc_name:"\u53f0\u7063"},{name:"Tajikistan",code:"TJ",dial_code:"762",tc_name:"\u5854\u5409\u514b"},{name:"Tanzania, United Republic of",code:"TZ",dial_code:"834",tc_name:"\u5766\u5c1a\u5c3c\u4e9e"},{name:"Thailand",code:"TH",dial_code:"764",tc_name:"\u6cf0\u570b"},{name:"Timor-Leste",code:"TL",dial_code:"626",tc_name:"\u6771\u5e1d\u6c76"},{name:"Togo",code:"TG",dial_code:"768",tc_name:"\u591a\u54e5"},{name:"Tokelau",code:"TK",dial_code:"772",tc_name:"\u6258\u514b\u52de"},{name:"Tonga",code:"TO",dial_code:"776",tc_name:"\u6771\u52a0"},{name:"Trinidad and Tobago",code:"TT",dial_code:"780",tc_name:"\u5343\u91cc\u9054\u53ca\u6258\u5df4\u54e5"},{name:"Tunisia",code:"TN",dial_code:"788",tc_name:"\u7a81\u5c3c\u897f\u4e9e"},{name:"T\xfcrkiye",code:"TR",dial_code:"792",tc_name:"\u571f\u8033\u5176"},{name:"Turkmenistan",code:"TM",dial_code:"795",tc_name:"\u571f\u5eab\u66fc"},{name:"Turks and Caicos Islands",code:"TC",dial_code:"796",tc_name:"\u7279\u514b\u65af\u8207\u51f1\u79d1\u65af\u7fa4\u5cf6"},{name:"Tuvalu",code:"TV",dial_code:"798",tc_name:"\u5410\u74e6\u9b6f"},{name:"Uganda",code:"UG",dial_code:"800",tc_name:"\u70cf\u5e72\u9054"},{name:"Ukraine",code:"UA",dial_code:"804",tc_name:"\u70cf\u514b\u862d"},{name:"United Arab Emirates",code:"AE",dial_code:"784",tc_name:"\u963f\u806f"},{name:"United Kingdom of Great Britain and Northern Ireland",code:"GB",dial_code:"826",tc_name:"\u82f1\u570b"},{name:"United States of America",code:"US",dial_code:"840",tc_name:"\u7f8e\u570b"},{name:"United States Minor Outlying Islands",code:"UM",dial_code:"581",tc_name:"\u7f8e\u570b\u672c\u571f\u5916\u5c0f\u5cf6\u5dbc"},{name:"Uruguay",code:"UY",dial_code:"858",tc_name:"\u70cf\u62c9\u572d"},{name:"Uzbekistan",code:"UZ",dial_code:"860",tc_name:"\u70cf\u8332\u5225\u514b"},{name:"Vanuatu",code:"VU",dial_code:"548",tc_name:"\u842c\u90a3\u675c"},{name:"Venezuela, Bolivarian Republic of)",code:"VE",dial_code:"862",tc_name:"\u59d4\u5167\u745e\u62c9"},{name:"Viet Nam",code:"VN",dial_code:"704",tc_name:"\u8d8a\u5357"},{name:"Virgin Islands, British)",code:"VG",dial_code:"092",tc_name:"\u82f1\u5c6c\u7dad\u4eac\u7fa4\u5cf6"},{name:"Virgin Islands, U.S.)",code:"VI",dial_code:"850",tc_name:"\u7f8e\u5c6c\u7dad\u4eac\u7fa4\u5cf6"},{name:"Wallis and Futuna",code:"WF",dial_code:"876",tc_name:"\u74e6\u5229\u65af\u548c\u5bcc\u5716\u90a3"},{name:"Western Sahara",code:"EH",dial_code:"732",tc_name:"\u897f\u6492\u54c8\u62c9"},{name:"Yemen",code:"YE",dial_code:"887",tc_name:"\u8449\u9580"},{name:"Zambia",code:"ZM",dial_code:"894",tc_name:"\u5c1a\u6bd4\u4e9e"},{name:"Zimbabwe",code:"ZW",dial_code:"716",tc_name:"\u8f9b\u5df4\u5a01"}],o=c.map((function(e){return{value:e.code,label:e.name}})),d=c.map((function(e){return{value:e.code,label:e.tc_name}})).sort((function(e,a){return e.label.localeCompare(a.label)})),t=c.map((function(e){return{value:e.code,displayText:e.name}}))}}]);