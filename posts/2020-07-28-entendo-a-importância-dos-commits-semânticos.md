---
layout: post
title: Entendendo a importância dos Commits Semânticos
description: >-
  Neste artigo iremos descobrir o quanto os commits semânticos são essenciais em
  nossa carreira e como essa prática pode torná-lo(a) um programador(a) melhor!
date: '2020-07-28 12:24:21'
thumbnail: assets/img/teste.PNG
category: Dev
background: '#CD4C51'
---
![commits semanticos](assets/img/teste.PNG)

No banco que trabalho atualmente, estamos desenvolvendo um documento com boas práticas que serão seguidas por todos(as) os(as) devs do banco, e um dos itens desse documento são os ***Commits Semânticos***, que é uma simples prática que deveríamos utilizar não apenas em corporações, mas também em projetos pessoais.

Acredito que ainda possuem muitos (as) programadores (as) que desconhecem essa boa prática, e minha intenção com esse artigo é justamente aumentar seu conhecimento, e que com isso, você consiga ver todo o potencial por detrás da utilização desses commits, por exemplo: mostrar a uma empresa que você deseja se candidatar, que seus projetos possuem bons commits, antes mesmo de ter atuando em equipes laborais.

# O que são Commits Semânticos?

De acordo com a documentação do [Convetional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/), Commits Semânticos são uma convenção simples para ser utilizada nas mensagens de commit. Essa convenção define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas.

### Porque realizar esse tipo de commit?

Além do que é citado na documentação, esses commits auxiliarão você e sua equipe a entenderem de forma facilitada quais alterações foram realizadas no trecho de código que foi commitado.

Essa identificação ocorre por meio de uma palavra que identifica se aquele commit realizado se trata de uma alteração de código, atualização de pacotes, documentação, alteração de visual, teste...

Para se ter ideia do quanto são importantes, a biblioteca de testes **Karma** utiliza como critério de mensagem para geração de log de alterações, o padrão de commit semântico. Para visualizar a documentação do Karma basta [clicar aqui.](https://karma-runner.github.io/3.0/dev/git-commit-msg.html)

### Como realizar um Commit Semântico?

A estrutura base de um commit semântico ou "esqueleto" é:

```html
<tipo>(escopo opcional): <descrição>

[corpo opcional]

[rodapé opcional]
```

## Tipo e Descrição

O commit semântico possui os elementos estruturais abaixo (**tipos**), que informam a intenção do seu commit ao utilizador(a) de seu código.

1. **fix** - Commits do tipo **`fix`** indicam que seu trecho de código commitado está solucionando um problema (bug fix), (se relaciona com o **`PATCH`** do versionamento semântico).
2. **feat** - Commits do tipo **`feat`** indicam que seu trecho de código está incuindo um novo recurso (se relaciona com o **`MINOR`** do versionamento semântico).
3. **docs** - Commits do tipo **`docs`** indicam que houveram mudanças na documentação, como por exemplo no Readme do seu repositório. *(Não inclui alterações em código).*
4. **style** - Commits do tipo **`style`** indicam que houveram alterações referentes a formatações de código, semicolons, trailing spaces, lint... *(Não inclui alterações em código).*
5. **refactor** - Commits do tipo **`refactor`** referem-se a mudanças devido a refatorações que não alterem sua funcionalidade, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review.
6. **build** - Commits do tipo **`build`** são utilizados quando são realizadas modificações em arquivos de build e dependências.
7. **test** - Commits do tipo **`test`** são utilizados quando são realizadas alterações em testes, seja criando, alterando ou excluindo testes unitários. *(Não inclui alterações em código)*
8. **chore** - Commits do tipo **`chore`** indicam atualizações de tarefas de build, configurações de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. *(Não inclui alterações em código)*
9. **BREAKING CHANGE** - Commits que possuem o texto **`BREAKING CHANGE`** no começo do corpo opcional ou no rodapé opcional, indicam que a modificação que está sendo realizada no commit, possui uma modificiação que quebra a compatibilidade da API, (se relaciona com o **`MAJOR`** do versionamento semântico).

Observação: Quando se utiliza o **`BREAKING CHANGE`** é **obrigatório** informar uma descrição, onde deverá conter o que foi alterado na API por exemplo.\
Além disso, é indicado que o **tipo** seja acompanhado de um `!` para chamar atenção para a quebra de compatibilidade.

1. Commit Semântico que inclui o BREAKING CHANGE, além do `!` para chamar atenção para a quebra de compatibilidade.

```jsx
chore!: removendo Node 6 da matriz de testes

BREAKING CHANGE: removendo Node 6 que atinge o final de vida em Abril
```

2. Commit Semântico apenas com tipo e descrição

```jsx
docs: ortografia correta de CHANGELOG
```

## Corpo

O **corpo**, como mencionado no "esqueleto do commit semântico" é opcional. É indicado utilizá-lo quando o detalhamento do seu commit irá ser maior que 7 palavras.

3. Commit Semântico com corpo

```jsx
feat: adicionado a nova estrutura de pastas do frontend

- Foi realizada uma mudança em toda a estruturação de páginas do projeto frontend,
pois agora iremos utilizar o modelo de Design Atômico
```

## Escopo

O escopo do commit, é opcional, e é com ele que iremos informar qual parte do código foi modificado. Pode ser o nome de um componente, uma determinada propriedade da API ou o nome da API, uma função...

4. Commit Semântico com escopo e corpo

```jsx
fix(ProdutoApi): retirando variável do path da API e ajustando loggers

- O path anterior tinha variáveis desnecessárias e não utilizadas por nenhum 
consumidor
```

## Rodapé

O rodapé, assim como o escopo e descrição, são opcionais de serem informados. Nele geralmente são informados uma issue, id ou tasks de atividades, que foram utilizadas para realizar a alteração desse trecho de código commitado.

5. Commit Semântico com escopo, corpo e rodapé

```jsx
fix: corrige pequenos erros de digitação no código

veja o ticket para detalhes sobre os erros de digitação corrigidos

originado da issue JD#12
```

Além dos benefícios citados acima, acredito que o ***Commit Semântico*** pode demonstrar que o seu perfil de desenvolvedor está alcançando outro nível, e que além de introduzir boas práticas em seu código, você está preocupado em inserir boas práticas em seus commits.

Essas boas práticas no commit auxiliarão você quando tiver que resolver um problema e/ou quando um colega de trabalho pegará aquele trecho de código feito por você, e conseguirá entender apenas olhando o que foi commitado.

Espero que tenha gostado da dica de hoje, pois o foco dos artigos é fazer de você um(a) dev cada vez melhor!
