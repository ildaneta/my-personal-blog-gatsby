import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import links from '../components/SocialLinks/content';

import Icons from '../components/SocialLinks/icons';

import {
  AboutHeader,
  AboutDescription,
  AboutLink,
  AboutSubTitle,
  AboutLinksList
} from '../styles/about';

import {
  SocialLinksItem,
  SocialLinksLink,
  IconWrapper
} from '../components/SocialLinks/style';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutHeader>Sobre Mim</AboutHeader>
    <AboutDescription>
      Olá! Meu nome é {' '}
      <AboutLink href="https://www.linkedin.com/in/ilda-silva-neta/" target="_blank">
        Ilda Neta
      </AboutLink>{' '},
      atualmente vivo em Salvador-Bahia/Brasil e atuo como desenvolvedora Mobile com foco em React Native no{' '}
      <AboutLink href="https://www.abcbrasil.com.br/" target="_blank">
        Banco ABC (Arab Banking Corporation) Brasil.
      </AboutLink>{' '}
    </AboutDescription>
    <AboutDescription>
      Atuando há mais de 6 anos com tecnologia, aprendi que poderia impactar a vida das pessoas combinando tecnologia, educação financeira e investimentos, fazendo-me sentir que nasci para o que faço.
    </AboutDescription>

    <AboutDescription>
      Nasci para encantar e mudar a vida das pessoas, gerando impactos tecnológicos que podem modificar todo o ambiente em que vivem.

    </AboutDescription>


    <AboutDescription>
      Com isso, juntamente com minha equipe, estamos focados em causar uma revolução tecnológica, no produto de Investimentos de Renda Fixa do Banco ABC, chamada {' '}
      <AboutLink href="https://www.abcbrasil.com.br/abc-personal/" target="_blank">
        Personal
      </AboutLink>{' '}.
    </AboutDescription>

    <AboutDescription>
      Além de amar palestrar, descobri que poderia auxiliar ainda mais a comunidade transformando a paixão em escrever artigos em realidade através de um blog, surgindo assim meus primeiros códigos utilizando o Gatsby para tornar essa vontade uma
      realidade.
    </AboutDescription>

    <AboutDescription>

      <AboutLink
        href="https://www.linkedin.com/posts/ilda-silva-neta_rocketseat-spacesquad-desenvolvimentopessoal-activity-6663898502927646720-boHI"
        target="_blank"
      >
        Recentemente também fui convidada para participar do Space Squad da Rocketseat, como Mentora
      </AboutLink>
      , através do voluntariado, para auxiliar outras(os) devs a conquistarem o próximo nível que tanto almejam
    </AboutDescription>

    <AboutDescription>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/U0wQjppkFdY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </AboutDescription>
    <AboutDescription>
      Espero te ver aqui mais vezes, pois esse blog foi feito com muito carinho,
      para que você possa saber mais sobre esse universo tão fascinante da
      tecnologia e um pouco sobre meu universo particular também.
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
