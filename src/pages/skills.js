import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/seo";
import links from "../components/Skills/content";
import Icons from "../components/Skills/icons";

import {
  SkillsHeader,
  SkillsList,
  SkillsItem,
  SkillsWrapper,
  SkillsSubTitle,
  SkillsP,
  Div,
  SoftSkillsWrapper,
  Spacer,
} from "../styles/skills";

const SkillsPage = () => (
  <Layout>
    <Seo title="Skills" />
    <SkillsHeader>Skills</SkillsHeader>

    <SkillsSubTitle>Hard Skills</SkillsSubTitle>
    <SkillsList>
      {links.map((link, index) => {
        const Icon = Icons[link.label];

        return (
          <SkillsWrapper key={link}>
            <SkillsItem>
              <Icon title={link.label} />
            </SkillsItem>
          </SkillsWrapper>
        );
      })}
    </SkillsList>

    <Spacer />

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
