import React from "react";
import { graphql } from "gatsby";

import Layout from "../Layout";
import Seo from "../seo.js";
import PostItem from "../PostItem";
import Pagination from "../Pagination";

import * as s from "../ListWrapper/style";

const BlogList = (props) => {
  const postList = props.data.allMarkdownRemark.edges;

  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <Layout>
      <Seo title="Home" />
      <s.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: { category, date, description, title, background },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              slug={slug}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              background={background}
            />
          )
        )}
      </s.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            background
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogList;
