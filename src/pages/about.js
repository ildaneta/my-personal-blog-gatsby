import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import { AboutHeader, AboutDescription, AboutLink } from '../styles/about';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutHeader>Sobre Mim</AboutHeader>

    <AboutDescription>
      Olá! Meu nome é Ilda Emanoely Neta, sou natural de Goiânia Goiás,
      atualmente moro em Salvador e trabalho na{' '}
      <AboutLink href="http://cubos.io/" target="_blank">
        Cubos Tecnologia.
      </AboutLink>
    </AboutDescription>
    <AboutDescription>
      Atuo na área de tecnologia há 6 anos, onde já atuei como analista de
      processos, suporte e atualmente sou desenvolvedora front-end. Atuando como
      analista de processos fui responsável por levantamento de requisitos,
      criação e execução de testes e implantação.
    </AboutDescription>
    <AboutDescription>
      Atuando como desenvolvedora front-end sou responsável pela criação do
      Dashboard gerencial da própria Cubos, onde juntamente com o back-end e
      designer, criaremos um produto interno totalmente novo e performático,
      auxiliando a empresa a gerenciar seus colaboradores e a reduzir custos.
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
      Recentemente descobri que sou apaixonada por escrever artigos, surgindo
      assim a vontade de criar meu próprio Blog. Também descobri que palestrar
      me torna mais feliz, pois assim, posso compartilhar experiências laborais
      e pessoais com nossa grandiosa comunidade de tecnologia.
    </AboutDescription>
  </Layout>
);

export default AboutPage;
