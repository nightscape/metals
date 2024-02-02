"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9648],{5944:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(1504),a=t(8264),s=["zero","one","two","few","many","other"];function c(e){return s.filter((function(r){return e.includes(r)}))}var l={locale:"en",pluralForms:c(["one","other"]),select:function(e){return 1===e?"one":"other"}};function u(){var e=(0,a.c)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return r=e,t=new Intl.PluralRules(r),{locale:r,pluralForms:c(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),l}var r,t}),[e])}function o(){var e=u();return{selectMessage:function(r,t){return function(e,r,t){var n=e.split("|");if(1===n.length)return n[0];n.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var a=t.select(r),s=t.pluralForms.indexOf(a);return n[Math.min(s,n.length-1)]}(t,r,e)}}}},7420:(e,r,t)=>{t.r(r),t.d(r,{default:()=>F});var n=t(96),a=t(7552),s=t(1528),c=t(1504),l=t(8264),u=t(4320),o=t(6952),i=t(6016),h=t(4357),m=t(5944),d=t(7125),p=t(5592),f=t(3664),g=t(6280);const x=function(){var e=(0,f.c)(),r=(0,p.Uz)(),t=(0,p.IT)(),n=(0,l.c)().siteConfig.baseUrl,a=e?new URLSearchParams(t.search):null,s=(null==a?void 0:a.get("q"))||"",c=(null==a?void 0:a.get("ctx"))||"",u=(null==a?void 0:a.get("version"))||"",o=function(e){var r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:s,searchContext:c&&Array.isArray(g.ms)&&g.ms.some((function(e){return"string"==typeof e?e===c:e.path===c}))?c:"",searchVersion:u,updateSearchPath:function(e){var t=o(e);r.replace({search:t.toString()})},updateSearchContext:function(e){var n=new URLSearchParams(t.search);n.set("ctx",e),r.replace({search:n.toString()})},generateSearchPageLink:function(e){var r=o(e);return n+"search?"+r.toString()}}};var v=t(4352),y=t(9880),S=t(2791),j=t(4436),C=t(2164),I=t(3265),w=t(2852);const R={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var P=t(9132),b=t(7624);function A(){var e,r=(0,l.c)(),t=r.siteConfig.baseUrl,n=r.i18n.currentLocale,u=(0,m.A)().selectMessage,i=x(),p=i.searchValue,f=i.searchContext,S=i.searchVersion,j=i.updateSearchPath,C=i.updateSearchContext,w=(0,c.useState)(p),A=w[0],F=w[1],k=(0,c.useState)(),N=k[0],q=k[1],L=(0,c.useState)(),T=L[0],U=L[1],M=""+t+S,Q=(0,c.useMemo)((function(){return A?(0,h.G)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:A}):(0,h.G)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[A]);(0,c.useEffect)((function(){j(A),N&&(A?N(A,(function(e){U(e)})):U(void 0))}),[A,N]);var z=(0,c.useCallback)((function(e){F(e.target.value)}),[]);return(0,c.useEffect)((function(){p&&p!==A&&F(p)}),[p]),(0,c.useEffect)((function(){function e(){return(e=(0,s.c)((0,a.c)().mark((function e(){var r,t,n;return(0,a.c)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(g.ms)&&!f&&!g.o3){e.next=6;break}return e.next=3,(0,v.i)(M,f);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0={wrappedIndexes:[],zhDictionary:[]};case 7:r=e.t0,t=r.wrappedIndexes,n=r.zhDictionary,q((function(){return(0,y.r)(t,n,100)}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f,M]),(0,b.jsxs)(c.Fragment,{children:[(0,b.jsxs)(o.c,{children:[(0,b.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,b.jsx)("title",{children:Q})]}),(0,b.jsxs)("div",{className:"container margin-vert--lg",children:[(0,b.jsx)("h1",{children:Q}),(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)("div",{className:(0,d.c)("col",(e={},e[R.searchQueryColumn]=Array.isArray(g.ms),e["col--9"]=Array.isArray(g.ms),e["col--12"]=!Array.isArray(g.ms),e)),children:(0,b.jsx)("input",{type:"search",name:"q",className:R.searchQueryInput,"aria-label":"Search",onChange:z,value:A,autoComplete:"off",autoFocus:!0})}),Array.isArray(g.ms)?(0,b.jsx)("div",{className:(0,d.c)("col","col--3","padding-left--none",R.searchContextColumn),children:(0,b.jsxs)("select",{name:"search-context",className:R.searchContextInput,id:"context-selector",value:f,onChange:function(e){return C(e.target.value)},children:[g.o3&&(0,b.jsx)("option",{value:"",children:(0,h.G)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"})}),g.ms.map((function(e){var r=(0,P.e)(e,n),t=r.label,a=r.path;return(0,b.jsx)("option",{value:a,children:t},a)}))]})}):null]}),!N&&A&&(0,b.jsx)("div",{children:(0,b.jsx)(I.c,{})}),T&&(T.length>0?(0,b.jsx)("p",{children:u(T.length,(0,h.G)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:T.length}))}):(0,b.jsx)("p",{children:(0,h.G)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,b.jsx)("section",{children:T&&T.map((function(e){return(0,b.jsx)(_,{searchResult:e},e.document.i)}))})]})]})}function _(e){var r=e.searchResult,t=r.document,a=r.type,s=r.page,c=r.tokens,l=r.metadata,u=0===a,o=2===a,h=(u?t.b:s.b).slice(),m=o?t.s:t.t;u||h.push(s.t);var d="";if(g.Wm&&c.length>0){for(var p,f=new URLSearchParams,x=(0,n.c)(c);!(p=x()).done;){var v=p.value;f.append("_highlight",v)}d="?"+f.toString()}return(0,b.jsxs)("article",{className:R.searchResultItem,children:[(0,b.jsx)("h2",{children:(0,b.jsx)(i.c,{to:t.u+d+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,S.s)(m,c):(0,j.K)(m,(0,C.A)(l,"t"),c,100)}})}),h.length>0&&(0,b.jsx)("p",{className:R.searchResultItemPath,children:(0,w._)(h)}),o&&(0,b.jsx)("p",{className:R.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,j.K)(t.t,(0,C.A)(l,"t"),c,100)}})]})}const F=function(){return(0,b.jsx)(u.c,{children:(0,b.jsx)(A,{})})}}}]);