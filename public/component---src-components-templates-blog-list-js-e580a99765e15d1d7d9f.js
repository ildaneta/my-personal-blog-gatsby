(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0/Pd":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("vOnD"),i=n("Wbzz"),l=Object(o.b)(i.Link).withConfig({displayName:"style__PostItemLink",componentId:"sc-17tuqy5-0"})(["color:var(--colorLetters);display:flex;text-decoration:none;&:hover{color:var(--rose);}"]),c=o.b.section.withConfig({displayName:"style__PostItemWrapper",componentId:"sc-17tuqy5-1"})(["border-bottom:1px solid var(--rose);padding:2rem 2rem;width:100%;"]),m=o.b.div.withConfig({displayName:"style__PostItemTag",componentId:"sc-17tuqy5-2"})(["display:flex;align-items:center;justify-content:center;border-radius:3px;background:",";color:var(--white);font-size:1.3rem;font-weight:700;text-transform:uppercase;margin-left:1.5rem;margin-bottom:15px;flex-basis:auto;width:90px;height:40px;"],(function(e){return e.background})),s=o.b.div.withConfig({displayName:"style__PostItemInfo",componentId:"sc-17tuqy5-3"})(["flex-direction:column;margin-left:1.5rem;"]),d=o.b.time.withConfig({displayName:"style__PostItemDate",componentId:"sc-17tuqy5-4"})(["font-size:0.9rem;line-height:1.2;"]),f=o.b.h1.withConfig({displayName:"style__PostItemTitle",componentId:"sc-17tuqy5-5"})(["font-size:1.6rem;font-weight:700;margin:0.2rem 0 0.5rem;"]),p=o.b.p.withConfig({displayName:"style__PostItemDescription",componentId:"sc-17tuqy5-6"})(["font-size:1.2rem;font-weight:300;line-height:1.2;"]);t.a=function(e){var t=e.slug,n=e.category,a=e.date,o=e.timeToRead,i=e.title,u=e.description,g=e.background;return r.a.createElement(l,{to:t},r.a.createElement(c,null,r.a.createElement(m,{background:g},n),r.a.createElement(s,null,r.a.createElement(d,null,a," • ",o," min de leitura"),r.a.createElement(f,null,i),r.a.createElement(p,null,u))))}},"26I/":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("Zttt"),i=n("vrFN"),l=n("0/Pd"),c=n("Wbzz"),m=n("vOnD"),s=n("mrSG"),d=n("OXR1"),f=a.forwardRef((function(e,t){return a.createElement(d.a,Object(s.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),a.createElement("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z",key:"k0"}),a.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k1"}))}));f.displayName="ArrowBackIos";var p=a.forwardRef((function(e,t){return a.createElement(d.a,Object(s.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),a.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z",key:"k0"}),a.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k1"}))}));p.displayName="ArrowForwardIos";var u=m.b.div.withConfig({displayName:"style__PaginationWrapper",componentId:"pnhcb7-0"})(["display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--rose);color:var(--white);padding:1.5rem 3rem;a{color:var(--rose);text-decoration:none;transition:color 0.5s;cursor:pointer;&:hover{color:var(--white);}}p{color:var(--rose);}"]),g=Object(m.b)(f).withConfig({displayName:"style__ArrowLeft",componentId:"pnhcb7-1"})(["color:var(--rose);width:12px;margin-right:5px;&:hover{color:var(--white);}"]),h=Object(m.b)(p).withConfig({displayName:"style__ArrowRight",componentId:"pnhcb7-2"})(["color:var(--rose);width:12px;margin-left:5px;&:hover{color:var(--white);}"]),w=function(e){var t=e.isFirst,n=e.isLast,a=e.currentPage,o=e.numPages,i=e.prevPage,l=e.nextPage;return r.a.createElement(u,null,!t&&r.a.createElement(c.Link,{to:i},r.a.createElement(g,null)," página anterior"),r.a.createElement("p",null,a," de ",o),!n&&r.a.createElement(c.Link,{to:l},"próxima página",r.a.createElement(h,null)))};n.d(t,"query",(function(){return y}));var y="3572607332";t.default=function(e){var t=e.data.allMarkdownRemark.edges,n=e.pageContext,a=n.currentPage,c=n.numPages,m=1===a,s=a===c,d=a-1==1?"/":"/page/"+(a-1),f="/page/"+(a+1);return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Home"}),t.map((function(e){var t=e.node,n=t.frontmatter,a=n.category,o=n.date,i=n.description,c=n.title,m=n.background,s=t.timeToRead,d=t.fields.slug;return r.a.createElement(l.a,{slug:d,category:a,date:o,timeToRead:s,title:c,description:i,background:m})})),r.a.createElement(w,{isFirst:m,isLast:s,currentPage:a,numPages:c,prevPage:d,nextPage:f}))}}}]);
//# sourceMappingURL=component---src-components-templates-blog-list-js-e580a99765e15d1d7d9f.js.map