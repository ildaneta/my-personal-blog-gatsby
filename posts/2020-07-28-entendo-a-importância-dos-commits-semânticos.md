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
![commits semanticos](assets/img/teste.PNG)

No banco que trabalho atualmente, estamos desenvolvendo um documento com boas práticas que serão seguidas por todos(as) os(as) devs do banco, e um dos itens desse documento são os Commits Semânticos, que é uma simples prática que deveríamos utilizar não apenas em corporações, mas em projetos pessoais.

Acredito que ainda possuem muitos(as) devs que desconhecem essa boa prática, e minha intenção com esse artigo é justamente aumentar seu conhecimento, e que com isso, você consiga ver todo o potencial por detrás dessa boa prática, como por exemplo, mostrar a uma companhia que você deseja se candidatar, que seus projetos possuem bons commits, antes mesmo de estar atuando em equipes laborais.

# O que são Commits Semânticos?

De acordo com a documentação do [Convetional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/), Commits semânticos são uma convenção simples para ser utilizada nas mensagens de commit. Essa convenção define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas.

### Porque realizar esse tipo de commit?

Além do que é citado na documentação, esses commits auxiliarão você e sua equipe a entenderem de forma facilitada quais alterações foram realizadas no trecho de código que foi commitado.

Essa identificação ocorre por meio de uma palavra que identifica se aquele commit realizado se trata de uma alteração de código, atualização de pacotes, documentação, alteração de visual, teste...

Para se ter ideia do quanto são importantes, a biblioteca de testes **Karma** utiliza como critério de mensagem para geração de log de alterações, o padrão de commit semântico. Para visualizar a documentação do Karma basta [clicar aqui.](https://karma-runner.github.io/3.0/dev/git-commit-msg.html)

### Como realizar um Commit Semântico?

A estrutura base de um commit semântico ou "esqueleto" é:
