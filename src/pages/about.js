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
      Olá! Meu nome é Ilda Emanoely Neta, sou natural de Goiânia-Goiás/Brasil,
      atualmente moro em Salvador-Bahia/Brasil e trabalho na{' '}
      <AboutLink href="http://cubos.io/" target="_blank">
        Cubos Tecnologia.
      </AboutLink>{' '}
      Descobri que através do estilo de vida minimalista e da educação
      financeira, posso impactar a vida de muitas pessoas
    </AboutDescription>
    <AboutDescription>
      Atuo na área de tecnologia há 6 anos, onde já possuí os cargos de:
      analista de processos, suporte e atualmente sou desenvolvedora front-end.
      Atuando como analista de processos fui responsável por levantamento de
      requisitos, criação e execução de testes e implantação.
    </AboutDescription>
    <AboutDescription>
      Atuando como desenvolvedora front-end sou responsável pela criação de um
      módulo de investimentos do nosso produto em parceria com o Banco Máxima,
      que se chama BBNK. O BBNK é um white label bancário, onde alguns itens do
      banco podem ser customizáveis a partir do desejo do cliente. O módulo de
      investimentos que estou criando juntamente com mais um front-end, é
      voltado para a Renda Fixa, para que o dinheiro do cliente fique rendendo
      na conta até que ele liquide todo o valor.
    </AboutDescription>
    <AboutDescription>
      Cursei Sistemas de Informação na{' '}
      <AboutLink href="https://www.ufg.br" target="_blank">
        Universidade Federal de Goiás
      </AboutLink>{' '}
      e atualmente a fim de aprofundar meus estudos na carreira de tecnologia,
      estou cursando Gestão da Tecnologia da Informação no{' '}
      <AboutLink href="http://unijorge.edu.br/" target="_blank">
        Centro Universitário Jorge Amado.
      </AboutLink>
    </AboutDescription>
    <AboutDescription>
      Através da paixão em escrever artigos, surgiu em mim a vontade de criar
      meu próprio Blog, onde utilizei o Gatsby para tornar essa vontade uma
      realidade. Palestrar também me torna mais feliz, pois assim, posso
      compartilhar experiências laborais e pessoais com nossa grandiosa
      comunidade de tecnologia.{' '}
      <AboutLink
        href="https://ildaneta.netlify.com/posts/minha-primeira-palestra-em-um-festival-de-tecnologia-para-mulheres/"
        target="_blank"
      >
        Veja aqui um relato sobre minha primeira palestra.
      </AboutLink>
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
