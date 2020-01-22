const visit = require("unist-util-visit-parents")

module.exports = ({ markdownAST }) => {
  const htmls = []
  visit(markdownAST, "html", node => {
    htmls.push(node)
  })
  const imageNodes = htmls.filter(html => html.value.indexOf("<img") >= 0)

  return Promise.all(
    imageNodes.map(
      imageNode =>
        new Promise(resolve => {
          // Add class lazyload
          imageNode.value = imageNode.value.replace(
            "gatsby-resp-image-image",
            "gatsby-resp-image-image lazyload"
          )
          // Replace src to data-src
          imageNode.value = imageNode.value.replace("src=", "data-src=")
          // Replace srcset to data-srcset
          imageNode.value = imageNode.value.replace("srcset=", "data-srcset=")

          resolve(imageNode)
        })
    )
  )
}

