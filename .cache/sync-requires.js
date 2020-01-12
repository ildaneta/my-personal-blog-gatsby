const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ildaemanoely/my-personal-blog-gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/ildaemanoely/my-personal-blog-gatsby/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/ildaemanoely/my-personal-blog-gatsby/src/pages/about.js"))),
  "component---src-pages-cv-js": hot(preferDefault(require("/home/ildaemanoely/my-personal-blog-gatsby/src/pages/cv.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/ildaemanoely/my-personal-blog-gatsby/src/pages/index.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("/home/ildaemanoely/my-personal-blog-gatsby/src/pages/skills.js")))
}

