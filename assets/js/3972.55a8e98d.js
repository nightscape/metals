(self.webpackChunk=self.webpackChunk||[]).push([[3972],{304:(e,n,t)=>{"use strict";t.d(n,{c:()=>T});var s=t(1504),a=t(7624);function i(e){var n,t=function(e){var n=s.Children.toArray(e),t=n.find((function(e){return s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type})),i=n.filter((function(e){return e!==t}));return{mdxAdmonitionTitle:null==t?void 0:t.props.children,rest:i.length>0?(0,a.jsx)(a.Fragment,{children:i}):null}}(e.children),i=t.mdxAdmonitionTitle,c=t.rest,r=null!=(n=e.title)?n:i;return Object.assign({},e,r&&{title:r},{children:c})}var c=t(5456),r=t(4357),o=t(5864);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function u(e){var n=e.type,t=e.className,s=e.children;return(0,a.jsx)("div",{className:(0,c.c)(o.W.common.admonition,o.W.common.admonitionType(n),l.admonition,t),children:s})}function d(e){var n=e.icon,t=e.title;return(0,a.jsxs)("div",{className:l.admonitionHeading,children:[(0,a.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function m(e){var n=e.children;return n?(0,a.jsx)("div",{className:l.admonitionContent,children:n}):null}function f(e){var n=e.type,t=e.icon,s=e.title,i=e.children,c=e.className;return(0,a.jsxs)(u,{type:n,className:c,children:[(0,a.jsx)(d,{title:s,icon:t}),(0,a.jsx)(m,{children:i})]})}function h(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}))}var g={icon:(0,a.jsx)(h,{}),title:(0,a.jsx)(r.c,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function p(e){return(0,a.jsx)(f,Object.assign({},g,e,{className:(0,c.c)("alert alert--secondary",e.className),children:e.children}))}function v(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}))}var j={icon:(0,a.jsx)(v,{}),title:(0,a.jsx)(r.c,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,a.jsx)(f,Object.assign({},j,e,{className:(0,c.c)("alert alert--success",e.className),children:e.children}))}function x(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}))}var N={icon:(0,a.jsx)(x,{}),title:(0,a.jsx)(r.c,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(e){return(0,a.jsx)(f,Object.assign({},N,e,{className:(0,c.c)("alert alert--info",e.className),children:e.children}))}function y(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}))}var C={icon:(0,a.jsx)(y,{}),title:(0,a.jsx)(r.c,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function B(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}))}var w={icon:(0,a.jsx)(B,{}),title:(0,a.jsx)(r.c,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};var O={icon:(0,a.jsx)(y,{}),title:(0,a.jsx)(r.c,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var E={note:p,tip:b,info:k,warning:function(e){return(0,a.jsx)(f,Object.assign({},C,e,{className:(0,c.c)("alert alert--warning",e.className),children:e.children}))},danger:function(e){return(0,a.jsx)(f,Object.assign({},w,e,{className:(0,c.c)("alert alert--danger",e.className),children:e.children}))}},L={secondary:function(e){return(0,a.jsx)(p,Object.assign({title:"secondary"},e))},important:function(e){return(0,a.jsx)(k,Object.assign({title:"important"},e))},success:function(e){return(0,a.jsx)(b,Object.assign({title:"success"},e))},caution:function(e){return(0,a.jsx)(f,Object.assign({},O,e,{className:(0,c.c)("alert alert--warning",e.className),children:e.children}))}};const _=Object.assign({},E,L);function T(e){var n,t=i(e),s=(n=t.type,_[n]||(console.warn('No admonition component found for admonition type "'+n+'". Using Info as fallback.'),_.info));return(0,a.jsx)(s,Object.assign({},t))}},7790:(e,n,t)=>{"use strict";t.d(n,{c:()=>m});t(1504);var s=t(4357),a=t(5864),i=t(6016),c=t(5656),r=t(5456);const o={iconEdit:"iconEdit_Z9Sw"};var l=t(7624),u=["className"];function d(e){var n=e.className,t=(0,c.c)(e,u);return(0,l.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.c)(o.iconEdit,n),"aria-hidden":"true"},t,{children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function m(e){var n=e.editUrl;return(0,l.jsxs)(i.c,{to:n,className:a.W.common.editThisPage,children:[(0,l.jsx)(d,{}),(0,l.jsx)(s.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},808:(e,n,t)=>{"use strict";t.d(n,{c:()=>oe});var s=t(1504),a=t(2172),i=t(6952),c=t(5656),r=t(3664),o=t(5456),l=t(6528),u=t(1824);function d(){var e=(0,u.y)().prism,n=(0,l.U)().colorMode,t=e.theme,s=e.darkTheme||t;return"dark"===n?s:t}var m=t(5864),f=t(6912),h=t(6504),g=t.n(h),p=(0,f.c)(/title=(["'])(.*?)\1/,{quote:1,title:2}),v=(0,f.c)(/\{([\d,-]+)\}/,{range:1}),j={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function b(e,n){var t=e.map((function(e){var t=j[e],s=t.start,a=t.end;return"(?:"+s+"\\s*("+n.flatMap((function(e){var n,t;return[e.line,null==(n=e.block)?void 0:n.start,null==(t=e.block)?void 0:t.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")}function x(e,n){var t=e.replace(/\n$/,""),s=n.language,a=n.magicComments,i=n.metastring;if(i&&v.test(i)){var c=i.match(v).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+i+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var r=a[0].className,o=g()(c).filter((function(e){return e>0})).map((function(e){return[e-1,[r]]}));return{lineClassNames:Object.fromEntries(o),code:t}}if(void 0===s)return{lineClassNames:{},code:t};for(var l=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],n);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],n);case"html":return b(["js","jsBlock","html"],n);case"python":case"py":case"bash":return b(["bash"],n);case"markdown":case"md":return b(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return b(["tex"],n);case"lua":case"haskell":case"sql":return b(["lua"],n);case"wasm":return b(["wasm"],n);default:return b(Object.keys(j).filter((function(e){return!["lua","wasm","tex","latex","matlab"].includes(e)})),n)}}(s,a),u=t.split("\n"),d=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),m=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var n=e.className;return[e.line,n]}))),f=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.start,n]}))),h=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.end,n]}))),p=0;p<u.length;){var x=u[p].match(l);if(x){var N=x.slice(1).find((function(e){return void 0!==e}));m[N]?d[m[N]].range+=p+",":f[N]?d[f[N]].start=p:h[N]&&(d[h[N]].range+=d[h[N]].start+"-"+(p-1)+","),u.splice(p,1)}else p+=1}t=u.join("\n");var k={};return Object.entries(d).forEach((function(e){var n=e[0],t=e[1].range;g()(t).forEach((function(e){null!=k[e]||(k[e]=[]),k[e].push(n)}))})),{lineClassNames:k,code:t}}const N={codeBlockContainer:"codeBlockContainer_Ckt0"};var k=t(7624),y=["as"];function C(e){var n=e.as,t=(0,c.c)(e,y),s=function(e){var n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach((function(e){var s=e[0],a=e[1],i=n[s];i&&"string"==typeof a&&(t[i]=a)})),t}(d());return(0,k.jsx)(n,Object.assign({},t,{style:s,className:(0,o.c)(t.className,N.codeBlockContainer,m.W.common.codeBlock)}))}const B={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function w(e){var n=e.children,t=e.className;return(0,k.jsx)(C,{as:"pre",tabIndex:0,className:(0,o.c)(B.codeBlockStandalone,"thin-scrollbar",t),children:(0,k.jsx)("code",{className:B.codeBlockLines,children:n})})}var O=t(436),E={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,n){var t=(0,s.useState)(),a=t[0],i=t[1],c=(0,s.useCallback)((function(){var n;i(null==(n=e.current)?void 0:n.closest("[role=tabpanel][hidden]"))}),[e,i]);(0,s.useEffect)((function(){c()}),[c]),function(e,n,t){void 0===t&&(t=E);var a=(0,O.yA)(n),i=(0,O.Mh)(t);(0,s.useEffect)((function(){var n=new MutationObserver(a);return e&&n.observe(e,i),function(){return n.disconnect()}}),[e,a,i])}(a,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(n(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _=t(5720);const T={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function S(e){var n=e.line,t=e.classNames,s=e.showLineNumbers,a=e.getLineProps,i=e.getTokenProps;1===n.length&&"\n"===n[0].content&&(n[0].content="");var c=a({line:n,className:(0,o.c)(t,s&&T.codeLine)}),r=n.map((function(e,n){return(0,k.jsx)("span",Object.assign({},i({token:e,key:n})),n)}));return(0,k.jsxs)("span",Object.assign({},c,{children:[s?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:T.codeLineNumber}),(0,k.jsx)("span",{className:T.codeLineContent,children:r})]}):r,(0,k.jsx)("br",{})]}))}var A=t(4357);function M(e){return(0,k.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,k.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function z(e){return(0,k.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,k.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const I={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function H(e){var n=e.code,t=e.className,a=(0,s.useState)(!1),i=a[0],c=a[1],r=(0,s.useRef)(void 0),l=(0,s.useCallback)((function(){!function(e,n){var t=(void 0===n?{}:n).target,s=void 0===t?document.body:t;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var a=document.createElement("textarea"),i=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var c=document.getSelection(),r=c.rangeCount>0&&c.getRangeAt(0);s.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var o=!1;try{o=document.execCommand("copy")}catch(l){}a.remove(),r&&(c.removeAllRanges(),c.addRange(r)),i&&i.focus()}(n),c(!0),r.current=window.setTimeout((function(){c(!1)}),1e3)}),[n]);return(0,s.useEffect)((function(){return function(){return window.clearTimeout(r.current)}}),[]),(0,k.jsx)("button",{type:"button","aria-label":i?(0,A.G)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,A.G)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,A.G)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.c)("clean-btn",t,I.copyButton,i&&I.copyButtonCopied),onClick:l,children:(0,k.jsxs)("span",{className:I.copyButtonIcons,"aria-hidden":"true",children:[(0,k.jsx)(M,{className:I.copyButtonIcon}),(0,k.jsx)(z,{className:I.copyButtonSuccessIcon})]})})}function W(e){return(0,k.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,k.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const R={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function V(e){var n=e.className,t=e.onClick,s=e.isEnabled,a=(0,A.G)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,k.jsx)("button",{type:"button",onClick:t,className:(0,o.c)("clean-btn",n,s&&R.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,k.jsx)(W,{className:R.wordWrapButtonIcon,"aria-hidden":"true"})})}function P(e){var n,t,a,i,c,r,l,m,f,h,g,v=e.children,j=e.className,b=void 0===j?"":j,N=e.metastring,y=e.title,w=e.showLineNumbers,O=e.language,E=(0,u.y)().prism,T=E.defaultLanguage,A=E.magicComments,M=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=O?O:null==(t=b.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:t.replace(/language-/,""))?n:T),z=d(),I=(a=(0,s.useState)(!1),i=a[0],c=a[1],r=(0,s.useState)(!1),l=r[0],m=r[1],f=(0,s.useRef)(null),h=(0,s.useCallback)((function(){var e=f.current.querySelector("code");i?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),c((function(e){return!e}))}),[f,i]),g=(0,s.useCallback)((function(){var e=f.current,n=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");m(n)}),[f]),L(f,g),(0,s.useEffect)((function(){g()}),[i,g]),(0,s.useEffect)((function(){return window.addEventListener("resize",g,{passive:!0}),function(){window.removeEventListener("resize",g)}}),[g]),{codeBlockRef:f,isEnabled:i,isCodeScrollable:l,toggle:h}),W=function(e){var n,t;return null!=(n=null==e||null==(t=e.match(p))?void 0:t.groups.title)?n:""}(N)||y,R=x(v,{metastring:N,language:M,magicComments:A}),P=R.lineClassNames,q=R.code,D=null!=w?w:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(N);return(0,k.jsxs)(C,{as:"div",className:(0,o.c)(b,M&&!b.includes("language-"+M)&&"language-"+M),children:[W&&(0,k.jsx)("div",{className:B.codeBlockTitle,children:W}),(0,k.jsxs)("div",{className:B.codeBlockContent,children:[(0,k.jsx)(_.gl,{theme:z,code:q,language:null!=M?M:"text",children:function(e){var n=e.className,t=e.style,s=e.tokens,a=e.getLineProps,i=e.getTokenProps;return(0,k.jsx)("pre",{tabIndex:0,ref:I.codeBlockRef,className:(0,o.c)(n,B.codeBlock,"thin-scrollbar"),style:t,children:(0,k.jsx)("code",{className:(0,o.c)(B.codeBlockLines,D&&B.codeBlockLinesWithNumbering),children:s.map((function(e,n){return(0,k.jsx)(S,{line:e,getLineProps:a,getTokenProps:i,classNames:P[n],showLineNumbers:D},n)}))})})}}),(0,k.jsxs)("div",{className:B.buttonGroup,children:[(I.isEnabled||I.isCodeScrollable)&&(0,k.jsx)(V,{className:B.codeButton,onClick:function(){return I.toggle()},isEnabled:I.isEnabled}),(0,k.jsx)(H,{className:B.codeButton,code:q})]})]})]})}var q=["children"];function D(e){var n=e.children,t=(0,c.c)(e,q),a=(0,r.c)(),i=function(e){return s.Children.toArray(e).some((function(e){return(0,s.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),o="string"==typeof i?P:w;return(0,k.jsx)(o,Object.assign({},t,{children:i}),String(a))}var G=t(6016);var F=t(8448);const U={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var $=["summary","children"];function Z(e){return!!e&&("SUMMARY"===e.tagName||Z(e.parentElement))}function J(e,n){return!!e&&(e===n||J(e.parentElement,n))}function Y(e){var n=e.summary,t=e.children,a=(0,c.c)(e,$),i=(0,r.c)(),l=(0,s.useRef)(null),u=(0,F.a)({initialState:!a.open}),d=u.collapsed,m=u.setCollapsed,f=(0,s.useState)(a.open),h=f[0],g=f[1],p=s.isValidElement(n)?n:(0,k.jsx)("summary",{children:null!=n?n:"Details"});return(0,k.jsxs)("details",Object.assign({},a,{ref:l,open:h,"data-collapsed":d,className:(0,o.c)(U.details,i&&U.isBrowser,a.className),onMouseDown:function(e){Z(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;Z(n)&&J(n,l.current)&&(e.preventDefault(),d?(m(!1),g(!0)):m(!0))},children:[p,(0,k.jsx)(F.U,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){m(e),g(!e)},children:(0,k.jsx)("div",{className:U.collapsibleContent,children:t})})]}))}const K={details:"details_b_Ee"};var Q="alert alert--info";function X(e){var n=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return(0,k.jsx)(Y,Object.assign({},n,{className:(0,o.c)(Q,K.details,n.className)}))}function ee(e){var n=s.Children.toArray(e.children),t=n.find((function(e){return s.isValidElement(e)&&"summary"===e.type})),a=(0,k.jsx)(k.Fragment,{children:n.filter((function(e){return e!==t}))});return(0,k.jsx)(X,Object.assign({},e,{summary:t,children:a}))}var ne=t(6448);function te(e){return(0,k.jsx)(ne.c,Object.assign({},e))}const se={containsTaskList:"containsTaskList_mC6p"};function ae(e){if(void 0!==e)return(0,o.c)(e,(null==e?void 0:e.includes("contains-task-list"))&&se.containsTaskList)}const ie={img:"img_ev3q"};var ce=t(304);const re={Head:i.c,details:ee,Details:ee,code:function(e){return s.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?(0,k.jsx)("code",Object.assign({},e)):(0,k.jsx)(D,Object.assign({},e))},a:function(e){return(0,k.jsx)(G.c,Object.assign({},e))},pre:function(e){return(0,k.jsx)(k.Fragment,{children:e.children})},ul:function(e){return(0,k.jsx)("ul",Object.assign({},e,{className:ae(e.className)}))},img:function(e){return(0,k.jsx)("img",Object.assign({loading:"lazy"},e,{className:(n=e.className,(0,o.c)(n,ie.img))}));var n},h1:function(e){return(0,k.jsx)(te,Object.assign({as:"h1"},e))},h2:function(e){return(0,k.jsx)(te,Object.assign({as:"h2"},e))},h3:function(e){return(0,k.jsx)(te,Object.assign({as:"h3"},e))},h4:function(e){return(0,k.jsx)(te,Object.assign({as:"h4"},e))},h5:function(e){return(0,k.jsx)(te,Object.assign({as:"h5"},e))},h6:function(e){return(0,k.jsx)(te,Object.assign({as:"h6"},e))},admonition:ce.c,mermaid:function(){return null}};function oe(e){var n=e.children;return(0,k.jsx)(a.I,{components:re,children:n})}},308:(e,n,t)=>{"use strict";t.d(n,{c:()=>c});t(1504);var s=t(5456),a=t(6016),i=t(7624);function c(e){var n=e.permalink,t=e.title,c=e.subLabel,r=e.isNext;return(0,i.jsxs)(a.c,{className:(0,s.c)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[c&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:c}),(0,i.jsx)("div",{className:"pagination-nav__label",children:t})]})}},7088:(e,n,t)=>{"use strict";t.d(n,{c:()=>u});t(1504);var s=t(5456),a=t(4357),i=t(6016);const c={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=t(7624);function o(e){var n=e.permalink,t=e.label,a=e.count;return(0,r.jsxs)(i.c,{href:n,className:(0,s.c)(c.tag,a?c.tagWithCount:c.tagRegular),children:[t,a&&(0,r.jsx)("span",{children:a})]})}const l={tags:"tags_jXut",tag:"tag_QGVx"};function u(e){var n=e.tags;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(a.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,s.c)(l.tags,"padding--none","margin-left--sm"),children:n.map((function(e){var n=e.label,t=e.permalink;return(0,r.jsx)("li",{className:l.tag,children:(0,r.jsx)(o,{label:n,permalink:t})},t)}))})]})}},6504:(e,n)=>{function t(e){let n,t=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))t.push(parseInt(s,10));else if(n=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,i]=n;if(s&&i){s=parseInt(s),i=parseInt(i);const e=s<i?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(i+=e);for(let n=s;n!==i;n+=e)t.push(n)}}return t}n.default=t,e.exports=t},2172:(e,n,t)=>{"use strict";t.d(n,{I:()=>r,M:()=>c});var s=t(1504);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);