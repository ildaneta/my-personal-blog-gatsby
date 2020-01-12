import React from 'react';

import Layout from '../components/Layout/';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      category="JS"
      date="12 de Janeiro de 2020"
      timeToRead="5"
      title="Diga não ao Medium"
      description="Descubra os benefícios de ter o seu próprio blog."
    />
  </Layout>
);

export default IndexPage;
