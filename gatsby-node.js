/* the path can take the path of the folder without confusing the API*/
const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);

// To add the slug to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // checking if we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages'
    });

    // creating a new field with name slug with the way of URL equal the value
    createNodeField({
      node,
      name: 'slug',
      /* limiting the amount of characters so that we only see in URL the 
      name of post without the date */
      value: `posts/${slug.slice(12)}`
    });
  }
};

// creating pages from each post
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              title
              category
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              description
              background
              image
            }
            timeToRead
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges;

    const postsPerPage = 15;
    const numPages = Math.ceil(posts.length / postsPerPage);

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/components/templates/blog-post.js`),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        }
      });
    });

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve(`./src/components/templates/blog-list.js`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1
        }
      });
    });
  });
};
