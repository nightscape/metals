"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4e3],{6048:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>h,toc:()=>c});var i=s(7624),a=s(2172);const n={author:"Rikito Taniguchi",title:"Metals v0.11.8 - Aluminium",authorURL:"https://twitter.com/tanishiking",authorImageURL:"https://github.com/tanishiking.png"},l=void 0,h={permalink:"/metals/blog/2022/08/10/aluminium",source:"@site/blog/2022-08-10-aluminium.md",title:"Metals v0.11.8 - Aluminium",description:"We're happy to announce the release of Metals v0.11.8, bringing a number of improvements for both Scala 2 and Scala 3.",date:"2022-08-10T00:00:00.000Z",formattedDate:"August 10, 2022",tags:[],readingTime:6.695,hasTruncateMarker:!1,authors:[{name:"Rikito Taniguchi",url:"https://twitter.com/tanishiking",imageURL:"https://github.com/tanishiking.png"}],frontMatter:{author:"Rikito Taniguchi",title:"Metals v0.11.8 - Aluminium",authorURL:"https://twitter.com/tanishiking",authorImageURL:"https://github.com/tanishiking.png"},unlisted:!1,prevItem:{title:"Metals v0.11.9 - Aluminium",permalink:"/metals/blog/2022/10/06/aluminium"},nextItem:{title:"Metals v0.11.7 - Aluminium",permalink:"/metals/blog/2022/07/04/aluminium"}},r={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",level:2},{value:"[Scala 3] Auto import and completion for extension methods",id:"scala-3-auto-import-and-completion-for-extension-methods",level:2},{value:"[Scala 3] Convert to Named Parameters code action",id:"scala-3-convert-to-named-parameters-code-action",level:2},{value:"[Scala 3] Scaladoc completion",id:"scala-3-scaladoc-completion",level:2},{value:"[Scala 3] Completions in string interpolation",id:"scala-3-completions-in-string-interpolation",level:2},{value:"[Scala 2] Automatically import types in string interpolations",id:"scala-2-automatically-import-types-in-string-interpolations",level:2},{value:"Code Action documentation",id:"code-action-documentation",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.11.8 (2022-08-10)",id:"v0118-2022-08-10",level:2}];function o(t){const e={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"We're happy to announce the release of Metals v0.11.8, bringing a number of improvements for both Scala 2 and Scala 3."}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Commits since last release"}),(0,i.jsx)("td",{align:"center",children:"84"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Merged PRs"}),(0,i.jsx)("td",{align:"center",children:"80"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Contributors"}),(0,i.jsx)("td",{align:"center",children:"15"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Closed issues"}),(0,i.jsx)("td",{align:"center",children:"22"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"New features"}),(0,i.jsx)("td",{align:"center",children:"5"})]})]})}),"\n",(0,i.jsxs)(e.p,{children:["For full details: ",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/milestone/52?closed=1",children:"https://github.com/scalameta/metals/milestone/52?closed=1"})]}),"\n",(0,i.jsxs)(e.p,{children:["Metals is a language server for Scala that works with VS Code, Vim, Emacs and\nSublime Text. Metals is developed at the\n",(0,i.jsx)(e.a,{href:"https://scala.epfl.ch/",children:"Scala Center"})," and ",(0,i.jsx)(e.a,{href:"https://virtuslab.com",children:"VirtusLab"}),"\nwith the help from ",(0,i.jsx)(e.a,{href:"https://lunatech.com",children:"Lunatech"})," along with contributors from\nthe community."]}),"\n",(0,i.jsx)(e.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,i.jsxs)(e.p,{children:["Check out ",(0,i.jsx)(e.a,{href:"https://scalameta.org/metals/",children:"https://scalameta.org/metals/"}),", and\ngive Metals a try!"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"[Scala 3] Auto import and completion for extension methods"}),"\n",(0,i.jsx)(e.li,{children:"[Scala 3] Convert to Named Parameters code action"}),"\n",(0,i.jsx)(e.li,{children:"[Scala 3] Scaladoc Completion for Scala3"}),"\n",(0,i.jsx)(e.li,{children:"[Scala 3] Completions in string interpolation"}),"\n",(0,i.jsx)(e.li,{children:"[Scala 2] Automatic import of types in string interpolations"}),"\n",(0,i.jsx)(e.li,{children:"Code Action documentation"}),"\n",(0,i.jsx)(e.li,{children:"Support of Scala 3.2.0-RC3, Scala 3.2.0-RC2"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"and a lot of bugfixes!"}),"\n",(0,i.jsx)(e.h2,{id:"scala-3-auto-import-and-completion-for-extension-methods",children:"[Scala 3] Auto import and completion for extension methods"}),"\n",(0,i.jsxs)(e.p,{children:["You might know that Scala 3 has introduced ",(0,i.jsx)(e.code,{children:"extension methods"})," that allow defining new methods to your existing types."]}),"\n",(0,i.jsx)(e.p,{children:"Previously, Metals couldn't auto-complete extension methods; so developers had to find an appropriate extension method from their workspace and manually import it. But, this was time-consuming and not always beginner friendly."}),"\n",(0,i.jsx)(e.p,{children:"Now, Metals provides auto-completion for extension methods and automatically imports them!"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://i.imgur.com/EAbVHeH.gif",alt:"extension-methods"})}),"\n",(0,i.jsx)(e.h2,{id:"scala-3-convert-to-named-parameters-code-action",children:"[Scala 3] Convert to Named Parameters code action"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.a,{href:"https://scalameta.org/metals/blog/2022/07/04/aluminium#scala-2-add-converttonamedarguments-code-action",children:["Metals 0.11.7 added ",(0,i.jsx)(e.code,{children:"ConvertToNamedParameters"})," code action to Scala2"]}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Thanks to the contribution by ",(0,i.jsx)(e.a,{href:"https://github.com/jkciesluk",children:"@jkciesluk"}),", this feature is now available for Scala 3!"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://i.imgur.com/9i7MWoQ.gif",alt:"convert-to-named"})}),"\n",(0,i.jsx)(e.h2,{id:"scala-3-scaladoc-completion",children:"[Scala 3] Scaladoc completion"}),"\n",(0,i.jsxs)(e.p,{children:["Metals now supports offering Scaladoc completions in Scala 3. When typing ",(0,i.jsx)(e.code,{children:"/**"})," you get an option to auto-complete a scaladoc template for methods, classes, etc.!"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://i.imgur.com/MEJUXr3.gif",alt:"scala-doc-completion"})}),"\n",(0,i.jsx)(e.h2,{id:"scala-3-completions-in-string-interpolation",children:"[Scala 3] Completions in string interpolation"}),"\n",(0,i.jsxs)(e.p,{children:["In the previous versions, whenever users wanted to include a value in a string using string interpolation, they would need to do it all manually. Now, it is possible to get an automatic conversion to string interpolation when typing ",(0,i.jsx)(e.code,{children:"$value"}),", as well as automatic wrapping in ",(0,i.jsx)(e.code,{children:"{}"})," when accessing members of such value."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://i.imgur.com/EyFKpiv.gif",alt:"scala3-interpolation"})}),"\n",(0,i.jsx)(e.h2,{id:"scala-2-automatically-import-types-in-string-interpolations",children:"[Scala 2] Automatically import types in string interpolations"}),"\n",(0,i.jsx)(e.p,{children:"Previously, the only suggestions for string interpolations were coming from the currently available symbols in scope. This meant that if you wanted to import something from another package, you would need to do it manually."}),"\n",(0,i.jsx)(e.p,{children:"This problem is now resolved. Users can easily get such symbols automatically imported, which creates a seamless workflow."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://i.imgur.com/cCWTQnj.gif",alt:"scala2-inteprolation"})}),"\n",(0,i.jsx)(e.p,{children:"The feature is also being worked on for Scala 3."}),"\n",(0,i.jsx)(e.h2,{id:"code-action-documentation",children:"Code Action documentation"}),"\n",(0,i.jsxs)(e.p,{children:["Have you ever wondered what kind of refactorings are available in Metals?\nCheck out this new page in the documentation! You can see a list of all the code actions in Metals with examples.\n",(0,i.jsx)(e.a,{href:"https://scalameta.org/metals/docs/codeactions/codeactions",children:"https://scalameta.org/metals/docs/codeactions/codeactions"})]}),"\n",(0,i.jsxs)(e.p,{children:["Big thanks to ",(0,i.jsx)(e.a,{href:"https://github.com/vzmerr",children:"zmerr"})," for writing this documentation."]}),"\n",(0,i.jsx)(e.h2,{id:"contributors",children:"Contributors"}),"\n",(0,i.jsx)(e.p,{children:"Big thanks to everybody who contributed to this release or reported an issue!"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"$ git shortlog -sn --no-merges v0.11.7..v0.11.8\n33\tTomasz Godzik\n    11\tRikito Taniguchi\n     9\tScala Steward\n     6\tjkciesluk\n     6\tKamil Podsiad\u0142o\n     5\tvzmerr\n     3\tVadim Chelyshov\n     2\tAdrien Piquerez\n     2\tscalameta-bot\n     2\tzmerr\n     1\tArthur S\n     1\tAnton Sviridov\n     1\ttgodzik\n     1\tScalameta Bot\n     1\tChris Kipp\n"})}),"\n",(0,i.jsx)(e.h2,{id:"merged-prs",children:"Merged PRs"}),"\n",(0,i.jsxs)(e.h2,{id:"v0118-2022-08-10",children:[(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/tree/v0.11.8",children:"v0.11.8"})," (2022-08-10)"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/compare/v0.11.7...v0.11.8",children:"Full Changelog"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Merged pull requests:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["[Scala 3] Revert type completions feature\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4236",children:"#4236"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Show package completions\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4223",children:"#4223"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["chore(ci): small changes to account for migration from LSIF -> SCIP\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4222",children:"#4222"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["chore: Switch to JDK 17 for most tests\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4219",children:"#4219"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Print correct method signature for Selectable\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4202",children:"#4202"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["Scala 3 type completion\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4174",children:"#4174"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/vzmerr",children:"vzmerr"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Don't use interrupt for the Scala 3 compiler\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4200",children:"#4200"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["build(deps): Update scalameta, semanticdb-scalac, ... from 4.5.9 to 4.5.11\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4210",children:"#4210"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["feat: Auto complete (missing) extension methods\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4183",children:"#4183"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["build(deps): Update mdoc, mdoc-interfaces, sbt-mdoc from 2.3.2 to 2.3.3\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4209",children:"#4209"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["build(deps): Update flyway-core from 9.0.1 to 9.0.4\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4208",children:"#4208"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["chore: Bump Bloop to latest to test out recent changes\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4204",children:"#4204"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["Update debug adapter to 2.2.0 stable (dependency update)\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4203",children:"#4203"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/arixmkii",children:"arixmkii"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["fix: index inline extension methods in ScalaToplevelMtags\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4199",children:"#4199"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["feature: Update Ammonite runner for Scala 3 and latest Scala 2 versions\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4197",children:"#4197"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["chore: Support Scala 3.2.0-RC3\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4198",children:"#4198"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["fix: Fold the end line of template / block if it's braceless\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4191",children:"#4191"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Print local type aliases properly\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4188",children:"#4188"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["Add match keyword completion\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4185",children:"#4185"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/jkciesluk",children:"jkciesluk"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["fix: request configuration before connecting to build server\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4180",children:"#4180"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["Code Actions doc page\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4157",children:"#4157"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/vzmerr",children:"vzmerr"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["fix: Remember choice ",(0,i.jsx)(e.code,{children:"Don't show this again"})," for sbt as build server\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4175",children:"#4175"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/jkciesluk",children:"jkciesluk"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: [Scala 3] Show correct param names in java methods\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4179",children:"#4179"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["fix: return all inversed dependencies in ",(0,i.jsx)(e.code,{children:"inverseDependenciesAll"}),"\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4176",children:"#4176"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["refactor: Use MetalsNames in ExtractValue code action\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4173",children:"#4173"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["feat: Import missing extension method\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4141",children:"#4141"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Use the correct RC version of 3.2.0\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4171",children:"#4171"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["Multiline string enhance\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4168",children:"#4168"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/vzmerr",children:"vzmerr"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["refactor: Print better debug infor when InferredType command failed\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4162",children:"#4162"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["chore: use sonatypeOssRepos instead of sonatypeRepo\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4169",children:"#4169"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["docs: Add architecture.md\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4008",children:"#4008"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Include method signature in the label\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4161",children:"#4161"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["Add convertToNamedParameters support for Scala 3\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4131",children:"#4131"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/jkciesluk",children:"jkciesluk"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bughack: Force specific Scala 3 compiler for worksheets\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4153",children:"#4153"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Show better titles for ConvertToNamedArguments code action\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4158",children:"#4158"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["fix triple quoted new line on type formatting\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4151",children:"#4151"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/vzmerr",children:"vzmerr"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["build(deps): Update flyway-core from 9.0.0 to 9.0.1\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4159",children:"#4159"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Allow completions in multiline expressions when debugging\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4111",children:"#4111"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: [Scala 2] Automatically import types in string interpolations\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4140",children:"#4140"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["Extend extract value with new cases\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4139",children:"#4139"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/jkciesluk",children:"jkciesluk"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["Bump sbt-dependency-submission\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4155",children:"#4155"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/adpi2",children:"adpi2"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["feat: Adding stub implementations for abstract given instances\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4055",children:"#4055"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["refactor: Show more debug messages\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4150",children:"#4150"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Reenable RenameLspSuite\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4152",children:"#4152"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["support for partial function\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4125",children:"#4125"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/zmerr",children:"zmerr"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["build(deps): Update flyway-core from 8.5.13 to 9.0.0\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4147",children:"#4147"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["build(deps): Update sbt, scripted-plugin from 1.7.0 to 1.7.1\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4148",children:"#4148"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["fix: avoid duplicate migration appllication\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4144",children:"#4144"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["removing brace of for comprehension\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4137",children:"#4137"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/vzmerr",children:"vzmerr"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["chore: update git-ignore-revs\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4145",children:"#4145"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["chore: change formatting of trailing commas\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4050",children:"#4050"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["build(deps): Update interface from 1.0.6 to 1.0.8\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4135",children:"#4135"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["build(deps): Update sbt from 1.6.2 to 1.7.0\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4136",children:"#4136"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["fix: Dialect should be scala21xSource3 for ",(0,i.jsx)(e.code,{children:"-Xsource:3.x.x"}),"\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4134",children:"#4134"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["chore: refactor update test cases\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4129",children:"#4129"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Occurence highlight did not work for local vars\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4109",children:"#4109"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/jkciesluk",children:"jkciesluk"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Save fingerprints between restarts\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4127",children:"#4127"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["[docs] Update Maven integration launcher to 2.13\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4130",children:"#4130"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/keynmol",children:"keynmol"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["feature: Add a way to turn on debug logging and fix scalafix warmup\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4124",children:"#4124"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["build(deps): Update scribe, scribe-file, scribe-slf4j from 3.10.0 to 3.10.1\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4128",children:"#4128"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["java version through shell\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4067",children:"#4067"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/zmerr",children:"zmerr"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["fix: do not start debug session for test explorer if projects contains errors\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4116",children:"#4116"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["build(deps): Update mill-contrib-testng from 0.10.4 to 0.10.5\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4119",children:"#4119"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["add scala 3.2.0-RC2\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4118",children:"#4118"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/dos65",children:"dos65"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["build(deps): Update jsoup from 1.15.1 to 1.15.2\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4120",children:"#4120"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["build(deps): Update ipcsocket from 1.4.1 to 1.5.0\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4122",children:"#4122"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: [Scala 3] Improve constant and refined types printing\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4117",children:"#4117"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["docs: Add documentation for running scalafix in Metals\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4108",children:"#4108"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Build.sc was seen as Ammonite script\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4106",children:"#4106"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/jkciesluk",children:"jkciesluk"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["Update sbt-dependency-graph\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4110",children:"#4110"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/adpi2",children:"adpi2"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Refresh decorations even if empty to clear them out\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4104",children:"#4104"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["bugfix: Include entire expression in filterText for member itnerpolat\u2026\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4105",children:"#4105"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["feat: ScaladocCompletion for Scala3\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4076",children:"#4076"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tanishiking",children:"tanishiking"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["feat: update test suite location\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4073",children:"#4073"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/kpodsiad",children:"kpodsiad"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["feature: [Scala 3] Add interpolation completions\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4061",children:"#4061"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["docs: Fix wording about the expression evaluation\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4101",children:"#4101"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["docs: Add missing release notes section\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4097",children:"#4097"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["chore: Fix links in the new release docs\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4096",children:"#4096"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["release: Add release notes for Metals 0.11.7\n",(0,i.jsx)(e.a,{href:"https://github.com/scalameta/metals/pull/4083",children:"#4083"}),"\n(",(0,i.jsx)(e.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n"]})]})}function d(t={}){const{wrapper:e}={...(0,a.M)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(o,{...t})}):o(t)}},2172:(t,e,s)=>{s.d(e,{I:()=>h,M:()=>l});var i=s(1504);const a={},n=i.createContext(a);function l(t){const e=i.useContext(n);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function h(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:l(t.components),i.createElement(n.Provider,{value:e},t.children)}}}]);