(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("sC2a"),n("JHok"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("U6Bt"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n("q1tI")),i=l(n("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=["shortname","identifier","title","url","category_id","onNewComment","language"],m=!1;function u(e,t){var n=t.onNewComment,r=t.language,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var o in a)e.page[o]=a[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var f=function(e){function t(){return s(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return d.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!m){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),m=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};d.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){u(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){u(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);f.displayName="DisqusThread",f.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},f.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=f},vqeo:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Zttt"),i=n("vrFN"),l=n("qzLn"),s=n("vOnD"),c=n("ibEc"),d=n("kOA+"),m=n.n(d),u=n("mrSG"),f=n("OXR1"),p=r.forwardRef((function(e,t){return r.createElement(f.a,Object(u.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),r.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k0"}),r.createElement("path",{d:"M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z",key:"k1"}))}));p.displayName="ArrowRight";var h=r.forwardRef((function(e,t){return r.createElement(f.a,Object(u.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),r.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k0"}),r.createElement("path",{d:"M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z",key:"k1"}))}));h.displayName="ArrowLeft";function g(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    padding: 2rem 1rem;\n    line-height: 1.3;\n    font-size: .9rem;\n  "]);return g=function(){return e},e}var v=s.c.section.withConfig({displayName:"style__RecommendedWrapper",componentId:"sc-1ik1khk-0"})(["border-bottom:1px solid var(--rose);border-top:1px solid var(--rose);background:var(--background);display:flex;justify-content:space-around;"]),w=Object(s.c)(m.a).withConfig({displayName:"style__RecommendedLink",componentId:"sc-1ik1khk-1"})(["background:var(--background);color:var(--colorLetters);display:flex;padding:2rem;text-decoration:none;transition:background 0.5s;width:100%;justify-content:center;line-height:21px;&:hover{background:var(--hoverRecommended);color:var(--white);}&.previous{border-right:1px solid var(--rose);justify-content:flex-start;align-items:center;}&.next{justify-content:flex-end;align-items:center;}",""],c.a.lessThan("large")(g())),y=Object(s.c)(h).withConfig({displayName:"style__ArrowLeftt",componentId:"sc-1ik1khk-2"})(["color:var(--colorLetters);width:19px;margin-right:5px;&:hover{background:var(--hover);color:var(--hover);}"]),b=Object(s.c)(p).withConfig({displayName:"style__ArrowRightt",componentId:"sc-1ik1khk-3"})(["color:var(--colorLetters);width:19px;margin-left:5px;&:hover{background:var(--hover);background:var(--hover);}"]),k=function(e){var t=e.next,n=e.previous;return a.a.createElement(v,null,n&&a.a.createElement(w,{cover:!0,direction:"left",bg:Object(l.a)(),duration:.6,to:n.fields.slug,className:"previous"},a.a.createElement(y,null),"Post Anterior: ",n.frontmatter.title),t&&a.a.createElement(w,{cover:!0,direction:"right",bg:Object(l.a)(),duration:.6,to:t.fields.slug,className:"next"},"Próximo Post: ",t.frontmatter.title,a.a.createElement(b,null)))},x=n("RPjP"),_=n.n(x);function E(){var e=j(["\n    font-size: 1.375rem;\n  "]);return E=function(){return e},e}function C(){var e=j(["\n    padding: 3rem 1.4rem 0;\n    max-width: 100%;\n  "]);return C=function(){return e},e}function z(){var e=j(["\n    padding: 3rem 1.4rem 0;\n    max-width: 100%;\n  "]);return z=function(){return e},e}function j(e,t){return t||(t=e.slice(0)),e.raw=t,e}var O=s.c.section.withConfig({displayName:"style__CommentsWrapper",componentId:"sc-34tukp-0"})(["margin:auto;max-width:70rem;padding:2rem;"," iframe[src*='ads-iframe']{display:none;}iframe[src*='ads-iframe']{","}#disqus_thread{a{color:var(--hover) !important;}}"],c.a.lessThan("large")(z()),c.a.lessThan("large")(C())),N=s.c.h2.withConfig({displayName:"style__CommentsTitle",componentId:"sc-34tukp-1"})(["color:var(--colorLettersComments);font-size:2.1rem;font-weight:700;padding-bottom:2rem;",""],c.a.lessThan("large")(E())),T=function(e){var t=e.url,n=e.title,r="https://localhost:8000/"+t;return a.a.createElement(O,null,a.a.createElement(N,null,"Comentários"),a.a.createElement(_.a,{shortname:"ildasilva",identifier:r,title:n,url:r}))};function P(){var e=H(["\n      padding: 0;\n    "]);return P=function(){return e},e}function R(){var e=H(["\n      font-size: 1.125rem;\n    "]);return R=function(){return e},e}function q(){var e=H(["\n      font-size: 1.375rem;\n    "]);return q=function(){return e},e}function D(){var e=H(["\n      font-size: 1.875rem;\n    "]);return D=function(){return e},e}function L(){var e=H(["\n      padding: 0 1rem;\n    "]);return L=function(){return e},e}function I(){var e=H(["\n    padding: 2rem 0;\n    max-width: 100%;\n    font-family: 'Didact Gothic', sans-serif;\n  "]);return I=function(){return e},e}function S(){var e=H(["\n    padding: 0 1rem;\n    font-size: 0.9rem;\n  "]);return S=function(){return e},e}function A(){var e=H(["\n    font-size: 1.6rem;\n    line-height: 1.3;\n    padding: 0 1rem;\n  "]);return A=function(){return e},e}function M(){var e=H(["\n    line-height: 2.8rem;\n    font-size: 2.5rem;\n    line-height: 1.1;\n    padding: 0 1rem;\n  "]);return M=function(){return e},e}function G(){var e=H(["\n    padding: 3rem 0 0;\n    max-width: 100%;\n  "]);return G=function(){return e},e}function H(e,t){return t||(t=e.slice(0)),e.raw=t,e}var B=s.c.header.withConfig({displayName:"style__PostHeader",componentId:"ls47m9-0"})(["color:var(--colorLetters);margin:auto;max-width:70rem;padding:2rem 3rem 0;",""],c.a.lessThan("large")(G())),U=s.c.h1.withConfig({displayName:"style__PostTitle",componentId:"ls47m9-1"})(["font-size:2.8rem;font-weight:600;padding:0 1.4rem;margin:1rem auto;font-family:'Didact Gothic',sans-serif;line-height:3.2rem;",""],c.a.lessThan("large")(M())),J=s.c.h2.withConfig({displayName:"style__PostDescription",componentId:"ls47m9-2"})(["font-size:1.6rem;font-weight:200;padding:0 1.4rem;font-family:'Didact Gothic',sans-serif;line-height:1.8rem;",""],c.a.lessThan("large")(A())),V=s.c.p.withConfig({displayName:"style__PostDate",componentId:"ls47m9-3"})(["font-size:1.1rem;font-weight:300;padding:0 1.4rem;font-family:'Didact Gothic',sans-serif;",""],c.a.lessThan("large")(S())),Z=s.c.section.withConfig({displayName:"style__MainContent",componentId:"ls47m9-4"})(["margin:auto;max-width:70rem;padding:2rem 3rem;font-family:'Didact Gothic',sans-serif;"," p,h1,h2,h3,h4,ul,ol,.tags,iframe,.button-post{color:var(--colorLetters);font-size:1.25rem;font-weight:300;line-height:1.4;letter-spacing:0.069rem;padding:0 1.4rem;}p{margin:0 auto 1.6rem;}h1,h2,h3,h4,h5{margin:2.4rem auto 1rem;}ul,ol{list-style:disc;padding-left:2.5rem;margin:0 auto 1.6rem;}li{padding:0.625rem 0;& > ul{margin-bottom:0;}}p,li{code{word-wrap:break-word;}}img{display:block;max-width:100%;margin:1.875rem auto;}iframe{padding:0 1.6rem 1.6rem;width:100%;","}blockquote{color:var(--white);border-left:0.3rem solid var(--rose);padding:0 1.875rem;margin:0.1px 0.5rem;}hr{border:1px solid #38444d;margin:3rem auto;}#twitter-widget-0,.instagram-media,.twitter-tweet{margin:20px auto !important;}h1,h2,h3,h4,h5{font-weight:800;letter-spacing:0.069rem;line-height:1.4;}h1{font-size:2.8rem;","}h2{font-size:2.1rem;","}h3{font-size:1.6rem;","}h4{font-size:1.4rem;}h5{font-size:1.2rem;}strong{font-weight:700;}.gatsby-resp-image-background-image{z-index:2;opacity:1 !important;}.gatsby-resp-image-image{box-shadow:none !important;transition:opacity 0.2s;&.lazyload{opacity:0;}&.lazyloaded{opacity:1;z-index:3;border-radius:5px;}}.gatsby-highlight{padding:0 1.6rem 1.6rem;","}.instagram-media{margin:1rem auto !important;}a{color:var(--linkColor);text-decoration:none;transition:opacity 0.5s;font-weight:300;border-bottom:1px solid var(--linkColor);svg{color:var(--white);}&:hover{opacity:0.9;border-bottom:2px dotted var(--linkColor);color:var(--linkColor);}}"],c.a.lessThan("large")(I()),c.a.lessThan("large")(L()),c.a.lessThan("large")(D()),c.a.lessThan("large")(q()),c.a.lessThan("large")(R()),c.a.lessThan("large")(P()));n.d(t,"query",(function(){return F}));var F="3959979806";t.default=function(e){var t=e.data,n=e.pageContext,r=t.markdownRemark.frontmatter.title,l=t.markdownRemark.html,s=t.markdownRemark.frontmatter.date,c=t.markdownRemark.timeToRead,d=t.markdownRemark.frontmatter.description,m=t.markdownRemark.fields.slug,u=t.markdownRemark.frontmatter.thumbnail,f=n.nextPost,p=n.previousPost;return a.a.createElement(o.a,null,a.a.createElement(i.a,{title:r,description:d,thumbnail:"https://ildaneta.dev/"+u}),a.a.createElement(B,null,a.a.createElement(V,null,s," • ",c," min de leitura"),a.a.createElement(U,null,r),a.a.createElement(J,null,d)),a.a.createElement(Z,null,a.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})),a.a.createElement(k,{next:f,previous:p}),a.a.createElement(T,{url:m,title:r}))}}}]);
//# sourceMappingURL=component---src-components-templates-blog-post-js-ca08924b7b3098e9cc66.js.map