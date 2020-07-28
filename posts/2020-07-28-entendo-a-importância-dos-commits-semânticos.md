---
layout: post
title: Entendo a importância dos Commits Semânticos
description: >-
  Neste artigo iremos descobrir o quanto os commits semânticos são essenciais e
  como poderemos utilizá-los!
date: '2020-07-28 12:24:21'
thumbnail: assets/img/teste.PNG
category: Dev
background: '#CD4C51'
---
<!--StartFragment-->

Recentemente descobri o termo "Commits Semânticos", que funciona de forma simples, mas que mesmo sendo simples, comecei a perceber que nem todos(as) os(as) devs conheciam verdadeiramente o quanto esses commits semânticos poderiam ser úteis e valoráveis em projetos.

Além disso, se você está entrando no mundo da programação agora, com certeza eu indicaria que você iniciasse a utilização desses commits em seu git, principalmente se seu foco nesse momento é entrar em uma empresa de tecnologia.

# O que são Commits Semânticos?

De acordo com a documentação do[Convetional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/), Commits semânticos são uma convenção simples para utilizar nas mensagens de commit. Essa convenção define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas.

### Porque realizar esse tipo de commit?

Além do que é citado na documentação, esses commits auxiliarão você e sua equipe a entenderem de forma facilitada quais alterações foram realizadas no trecho de código que foi commitado.

Essa identificação ocorre por meio de uma palavra que identifica se aquele commit realizado se trata de uma alteração de código, atualização de pacotes, documentação, alteração de visual, teste...

Para se ter ideia do quanto são importantes, a biblioteca de testes Karma utiliza como critério de mensagem para geração de log de alterações, o padrão de commit semântico, e para visualizar a documentação deles basta[clicar aqui.](https://karma-runner.github.io/3.0/dev/git-commit-msg.html)

### Como realizar um Commit Semântico?

A estrutura base de um commit semântico ou "esqueleto" é:

<!--EndFragment-->
