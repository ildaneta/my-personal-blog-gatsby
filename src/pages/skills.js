import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import links from '../components/Skills/content';
import Icons from '../components/Skills/icons';

import {
  SkillsHeader,
  SkillsLink,
  SkillsList,
  SkillsItem,
  SkillsWrapper,
  SkillsLinkIcon
} from '../styles/skills';

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" />
    <SkillsHeader>Skills</SkillsHeader>
    <SkillsLink href="https://ildaneta.netlify.com/about">
      Visite o Sobre Mim
    </SkillsLink>
    <SkillsList>
      {links.map((link, index) => {
        const Icon = Icons[link.label];

        return (
          <SkillsWrapper key={link}>
            <SkillsLinkIcon
              href="#"
              title={link.label}
              rel="noopener noreferrer"
            >
              <SkillsItem>
                <Icon />
              </SkillsItem>
            </SkillsLinkIcon>
          </SkillsWrapper>
        );
      })}
    </SkillsList>
  </Layout>
);

export default SkillsPage;
