import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/seo";
import links from "../components/SocialLinks/content";

import Icons from "../components/SocialLinks/icons";

import {
  AboutHeader,
  AboutDescription,
  AboutSubTitle,
  AboutLinksList,
} from "../styles/about";

import {
  SocialLinksItem,
  SocialLinksLink,
  IconWrapper,
} from "../components/SocialLinks/style";

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <AboutHeader>Sobre Mim</AboutHeader>
    <AboutDescription>Olá, meu nome é Ilda Neta!</AboutDescription>
    <AboutDescription>
      Atuando há mais de 7 anos na área de tecnologia, descobri meu amor pela
      programação, e assim atuo como desenvolvedora mobile.
    </AboutDescription>

    <AboutDescription>
      Atuo com foco na experiência e usuabilidade dos usuários, pensando sempre
      em como criar interfaces lindas, responsivas e sempre com o foco no
      usuário.
    </AboutDescription>

    <AboutDescription>
      Além disso, procuro estar em constante contato com nossa comunidade,
      através da produção de conteúdos, mentorias, lives e participação em talks
      de tecnologia, nacionais e internacionais.
    </AboutDescription>

    <AboutDescription>
      Atualmente estou desenvolvendo uma nova versão para meu blog, trazendo
      ainda mais a experiência e a usabilidade para o centro da aplicação, além
      da implementação de novos idiomas, auxiliando pessoas que vivem em outros
      países terem acesso aos conteúdos produzidos.
    </AboutDescription>

    <AboutDescription>
      Fico muito feliz com sua visita, e espero te ver por aqui mais vezes.
    </AboutDescription>

    <AboutSubTitle>Entre em contato comigo</AboutSubTitle>

    <AboutLinksList>
      {links.map((link, index) => {
        const Icon = Icons[link.label];

        return (
          <SocialLinksItem key={index}>
            <SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </SocialLinksLink>
          </SocialLinksItem>
        );
      })}
    </AboutLinksList>
  </Layout>
);

export default AboutPage;
