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
      Atuando há mais de 7 anos na área de tecnologia, descobri meu amor pela
      programação, e assim atuo como desenvolvedora mobile.
    </AboutDescription>

    <AboutDescription>
      Durante todos esses anos profissionais, tive um contato muito próximo com
      nossos usuários, o que fez direcionar minha atuação como desenvolvedora,
      pensando sempre na experiência e usuabilidade proposta na aplicação.
    </AboutDescription>

    <AboutDescription>
      Além disso, procuro estar em constante contato com nossa comunidade,
      através da produção de conteúdos, mentorias, lives e participação em talks
      de tecnologia, nacionais e internacionais.
    </AboutDescription>

    <AboutDescription>
      Atualmente estou desenvolvendo uma nova versão para meu blog, trazendo
      ainda mais a experiência e a usabilidade como centro da apliação, além da
      implementação de novos idiomas, facilitando assim o acesso aos conteúdos
      produzidos por pessoas de outros países.
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
