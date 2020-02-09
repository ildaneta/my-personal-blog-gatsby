import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../Layout';
import SEO from '../seo.js';
import RecommendedPosts from '../RecommendedPosts';
import Comments from '../Comments';

import * as s from '../Post/style';

const BlogPost = ({ data, pageContext }) => {
  const title = data.markdownRemark.frontmatter.title;
  const html = data.markdownRemark.html;
  const date = data.markdownRemark.frontmatter.date;
  const timeToRead = data.markdownRemark.timeToRead;
  const description = data.markdownRemark.frontmatter.description;
  const url = data.markdownRemark.fields.slug;
  const image = data.markdownRemark.frontmatter.image;

  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;

  return (
    // Integrando o post com o layout através das tags Layout e SEO
    <Layout>
      <SEO title={title} description={description} image={image} />
      <s.PostHeader>
        <s.PostDate>
          {date} • {timeToRead} min de leitura
        </s.PostDate>
        <s.PostTitle>{title}</s.PostTitle>
        <s.PostDescription>{description}</s.PostDescription>
      </s.PostHeader>
      <s.MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </s.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={url} title={title} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        thumbnail
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
