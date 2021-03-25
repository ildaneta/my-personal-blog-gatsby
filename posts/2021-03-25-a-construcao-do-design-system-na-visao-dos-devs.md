---
layout: post
title: A construção do Design System na visão dos devs
description: >-
  Iremos descobrir um pouco mais sobre o Design System, e como nós devs podemos
  dar vida a esse produto incrível.
date: '2021-03-25 12:10:11'
thumbnail: assets/img/Rectangle 4.png
category: Dev
background: '#CD4C51'
---
![](assets/img/Rectangle 4.png)

Atuando como dev mobile no banco, sou focada na experiência e usabilidade dos usuários. Assim, trabalhamos juntamente com os designers, pensando em como podemos deixar nossa aplicação ainda mais acessível a quem estiver utilizando-a.

No início de minha carreira em tecnologia, aos 18 anos, meu primeiro emprego foi como analista de processos, onde eu era responsável por realizar levantamentos de requisitos junto ao cliente e stakeholders, transcrever a documentação utilizando a notação BPMN e posteriormente treinar nossos usuários para que eles pudessem ler e entender essa documentação, pois o próximo passo após os requisitos serem aprovados, era iniciar o desenvolvimento de software.

Nesta empresa, atuava em um departamento que automatizava processos, ou seja, transformávamos atividades que eram realizadas de forma manual em sistemas automatizados. Então, acredito que com toda essa experiência que possuí lidando diretamente com nossos usuários, além de posteriormente atuar como analista de suporte, fez com que eu direcionasse minha carreira de desenvolvedora tendo justamente esse foco no usuário e na experiência, me preocupando sempre no impacto que proporciono através das telas e códigos que produzo.

Na minha visão, entender sobre o negócio deixou de ser um papel apenas do PO (Product Owner) do produto, ou designers. Acredito no real impacto que causamos na vida das pessoas, e uma forma de demonstrar isso é através das interfaces das aplicações que criamos, pois nosso usuário final não consegue saber como o código foi desenvolvido, mas consegue entender se aquela interface facilita ou não sua usabilidade.

Ao longo desse artigo estarei dando minha opinião sobre esse assunto que vejo ainda mais relevante devido as aplicações frontend estarem se tornando cada vez mais complexas e robustas, e também porque muitos conteúdos que vejo sobre Design System sempre estão baseados na visão do designer (que é muito importante), mas acredito que podemos construir uma boa visão juntos sobre o tema, e para isso é preciso enxergarmos todos os benefícios de termos um DS e qual o nosso papel nessa jornada.

## Diferentes tipos de carreira

Antes de começarmos a entender o Design System, é importante termos a visão de que os tempos vem mudando, e com isso o mercado também muda e consequentemente as profissões. Atualmente é comum vermos conteúdos sobre carreiras Y, W e T, principalmente na área de tecnologia.

Mas em que se conecta nosso tipo de carreira ao Design System?

Como vocês sabem, e já comentei em outros artigos, gosto de planejar e pensar em minha carreira a longo prazo. Tenho seguido a carreira T, e uma premissa para ela, é o profissional buscar obter conhecimento em outros assuntos de forma mais profunda, e no meu caso, constantemente estudo sobre assuntos relacionados ao design, interfaces e usuários... Mas existem infinitas possibilidades, como seguir uma carreira técnica e de gestão ao mesmo tempo. Para entender um pouco mais sobre esses novos tipos de carreiras, deixarei no final do artigo alguns conteúdos para vocês se aprofundarem posteriormente.

Outro ponto em comum entre esses novos tipos de carreiras é manter a consistência em obter aprendizados e soft skills, além da parte técnica.

Então acredito que esse pode ser um excelente motivo para iniciarmos nosso aprendizado sobre o DS (carinhosamente apelidado pelos designers que significa **D**esign **S**ystem).

## O que é um Design System?

O DS é um produto vivo, ou seja, que constantemente pode ser melhorado e evoluído, alem de ser um produto que serve outros produtos, de forma dinâmica.

Nesse produto teremos regras, componentes, tipografias, cores, padrões de uso, responsividade, tamanhos... um conjunto de ferramentas que vão nos ajudar a ter mais consistência nos projetos que utilizarmos o DS e um alto ganho de usabilidade.

### Quais são os passos para a construção de um DS?

A construção de um DS é um projeto que leva um tempo considerável, pois os designers tem que passar por todo um step-by-step, como por exemplo:

* Realizar uma imersão para entendimento dos usuários e stakeholders
* Início da ideação do design
* Testes de usabilidade
* Criação de telas
* Handoff com a equipe de desenvolvimento

Esses são apenas alguns passos, e como foi perceptível, é necessário realmente uma imersão e entendimento para a criação de um DS por parte dos designers.

Mas vocês já pensaram em qual é o nosso papel como devs na criação do Design System?

A Meiuca é uma empresa referência em Design Systems e citam: "Se não tem nada em código, então você não tem um DS", ou seja, apesar de ter Design no nome, não significa que apenas eles criam o produto. Sendo assim, para o DS efetivamente existir e poder ser colocado em prática em projetos, nós devs temos que codificá-lo.

## Quais os benefícios do Design System?

Poderia ficar um bom tempo falando sobre os benefícios que obtemos ao termos um DS, mas destaquei os que na minha visão são os mais importantes.

São eles:

* Menor tempo a ser gasto na criação de telas;
* Aumentar a escalabilidade de um projeto;
* Facilitar mudanças de interfaces;
* Consistência na experiência do usuário e código;
* Possibilitar aos desenvolvedores(es) em projetos que utilizam o DS, manter um foco maior nas regras de negócio;
* Previnir código duplicado (muito comumente vemos componentes duplicados, quando não temos uma fonte única de verdade, como o DS);
* Melhorar comunicação entre as equipes, pois sendo o DS nossa fonte de busca e verdade para mantermos a consistência visual, as equipes estarão mais alinhadas para a chegada de novos integrantes na equipe;
* Aumenta a disseminação de conhecimento e compartilhamento sobre experiências visuais, tendo como centro a construção da identidade visual do produto/empresa;
* Segurança para o usuário utilizar a aplicação;

Sobre os benefícios de termos um DS, gostaria de comentar um pouco mais sobre o último ponto, Segurança para o usuário utilizar a aplicação.

Quando mantemos a consistência visual de nossas aplicações como por exemplo através de tipografias, cores e componentes, que partem do mesmo princípio visual, estamos construindo a marca de nossa companhia e consequentemente de nosso produto.

Muitas vezes associamos a segurança apenas ao mantermos controles para invasões por exemplo, mas quando mantemos uma identidade visual consistente, estamos associando essa imagem ao que queremos transmitir com nosso produto/aplicação.

## Como podemos dar vida a um DS?

Geralmente um DS cria vida através da criação de uma biblioteca de componentes, que segue um conjunto de regras pré determinadas. Mas para que esse DS realmente seja fiel ao proposto e consiga transmitir tudo o que foi idealizado pelo time de design, temos que seguir algumas boas práticas no desenvolvimento desse código, como por exemplo:

* Utilizarmos variáveis (chamados tokens pelos designers) para dimensões, cores e fontes, pois caso o DS evolua e mude pequenas regras, nosso código precisa se adaptar de forma eficiente e ágil;

![](assets/img/Tokens-Design-System.png)



* Utilizarmos boas práticas no desenvolvimento dessa lib, pois o DS é um projeto igual a outros, onde devemos utilizar commits semânticos, testes...
* Realizar code review, para auxiliar na manutenção dessa biblioteca, pois outros projetos estarão utilizando esse produto, e manter a consistência do código, auxilia a manter o DS "vivo";
* Pensarmos nos comportamentos que esses componentes terão de forma particular e criarmos propriedades que não comprometam a qualidade dos mesmos, em resumo, manter a qualidade do código e permitir que seu componente se adeque a comportamentos diferentes.

Seguirmos boas práticas no desenvolvimento dos códigos que produzimos não nos auxilia apenas na criação do DS, mas no nosso crescimento profissional também. É importante mantermos o olhar do impacto que causamos na vida das pessoas através do que entregamos, e a melhor forma de medir isso é através do código que criamos.

Acredito que meu maior intuito com esse artigo é mostrar que juntos podemos construir novas visões e novas formas de visualizarmos o que estamos em constante contato.

E para nós devs mobile, frontend, entendermos sobre interfaces, usabilidade e a experiência de nossos usuários tem sido um requisito cada vez mais relevante para esses cargos.

E você já teve a oportunidade de criar um Design System ou de utilizá-lo?

Espero que esse artigo aguce ainda mais sua curiosidade e aumente sua vontade de explorar outros assuntos em nosso incrível mundo de desenvolvimento.

Para que vocês saibam ainda mais sobre o assunto, deixo abaixo o link onde meus amigos amigos designers Bruno Ranieri e Nickolas Gomes participaram de um podcast e trouxeram muitos insights sobre o tema.

Gostaria também de agradecer meu amigo designer Grizilli que me trouxe muitas dicas para esse artigo, além de me auxiliar no card de divulgação do LinkedIn.

\
[Podcast Lambda 3 - Design System](https://open.spotify.com/episode/6vECz1EcQPn4j2Qank8WiS?si=j-X1rEQOTtKAisC2ycG9Vw)\
[Design System na visão da Meiuca - Artigo](https://medium.com/meiuca/1-design-system-na-vis%C3%A3o-da-meiuca-cc0d67aa8d1b)\
[Como o Design System pode transformar seu produto digital - Artigo](https://medium.com/flowestudio/como-design-system-pode-revolucionar-seu-produto-digital-5b79a2d05f75)
