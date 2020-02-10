import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import { SkillsHeader, SkillsLink } from '../styles/skills';

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" />
    <SkillsHeader>Skills</SkillsHeader>
    <SkillsLink href="https://ildaneta.netlify.com/about">
      Visite o Sobre Mim
    </SkillsLink>
  </Layout>
);

export default SkillsPage;
