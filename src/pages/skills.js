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
  SkillsLinkIcon,
  SkillsSubTitle,
  SkillsP,
  Div,
  SoftSkillsWrapper
} from '../styles/skills';

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" />
    <SkillsHeader>Skills</SkillsHeader>
    <SkillsSubTitle>Hard Skills</SkillsSubTitle>
    <SkillsLink href="https://ildaneta.netlify.com/about">
      Visite o Sobre Mim
    </SkillsLink>
    <SkillsList>
      {links.map((link, index) => {
        const Icon = Icons[link.label];

        return (
          <SkillsWrapper key={link}>
            <SkillsItem>
              <SkillsLinkIcon
                href="#"
                title={link.label}
                rel="noopener noreferrer"
              >
                <Icon />
              </SkillsLinkIcon>
            </SkillsItem>
          </SkillsWrapper>
        );
      })}
    </SkillsList>

    <SkillsSubTitle>Soft Skills</SkillsSubTitle>

    <SoftSkillsWrapper>
      <Div>
        <SkillsP>Empatia</SkillsP>
      </Div>
      <Div>
        <SkillsP>Liderança</SkillsP>
      </Div>
      <Div>
        <SkillsP>Adaptabilidade </SkillsP>
      </Div>
      <Div>
        <SkillsP>Comunicação clara</SkillsP>
      </Div>

      <Div>
        <SkillsP>Trabalho em equipe</SkillsP>
      </Div>

      <Div>
        <SkillsP>Inteligência emocional</SkillsP>
      </Div>
    </SoftSkillsWrapper>
  </Layout>
);

export default SkillsPage;
