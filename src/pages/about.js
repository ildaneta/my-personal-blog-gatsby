import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import links from '../components/SocialLinks/content';

import Icons from '../components/SocialLinks/icons';

import {
  AboutHeader,
  AboutDescription,
  AboutSubTitle,
  AboutLinksList,
} from '../styles/about';

import {
  SocialLinksItem,
  SocialLinksLink,
  IconWrapper,
} from '../components/SocialLinks/style';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutHeader>Sobre Mim</AboutHeader>
    <AboutDescription>Olá, meu nome é Ilda Neta!</AboutDescription>
    <AboutDescription>
      Sou uma desenvolvedora minimalista que busca através da escrita e
      palestras, impactar nossa sociedade.
    </AboutDescription>

    <AboutDescription>
      Atuo com foco na experiência e usuabilidade dos usuários, pensando sempre
      em como levar interfaces lindas, responsivas e sempre com o foco no
      usuário.
    </AboutDescription>

    <AboutDescription>
      Além disso, procuro estar em constante contato com nossa comunidade,
      através da produção de conteúdos, mentorias, lives e participação em talks
      de tecnologia, nacionais e internacionais.
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
