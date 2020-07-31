// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-components-templates-blog-post-js": () => import("./../src/components/templates/blog-post.js" /* webpackChunkName: "component---src-components-templates-blog-post-js" */),
  "component---src-components-templates-blog-list-js": () => import("./../src/components/templates/blog-list.js" /* webpackChunkName: "component---src-components-templates-blog-list-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-search-js": () => import("./../src/pages/search.js" /* webpackChunkName: "component---src-pages-search-js" */),
  "component---src-pages-skills-js": () => import("./../src/pages/skills.js" /* webpackChunkName: "component---src-pages-skills-js" */)
}

