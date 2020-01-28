const postQuery = `{
  posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
          category
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest
  }));

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: 'Posts',
    settings: {
      attributesToSnippet: ['excerpt:20']
    }
  }
];

const settings = { attributesToSnippet: [`excerpt:20`] };

module.exports = queries;
