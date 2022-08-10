---
layout: post
title: Como instalar, configurar e utilizar o Firebase em aplicações React Native
description: Nesse artigo aprenderemos como instalar, configurar e utilizar o
  Firebase em nossos apps React Native, além disso, aprenderemos também como
  utilizar o Firebase Auth e Firestore Database.
date: 2022-08-10 08:49:45
thumbnail: assets/img/water-reminder-app.png
category: Dev
background: "#CD4C51"
---
![Water reminder app](assets/img/water-reminder-app.png)

Após começar a utilizar o Firebase em alguns projetos pessoais e profissionais, vejo como essas bibliotecas podem nos auxiliar e empoderar nossos nossos aplicativos, principalmente quando não temos a estrutura de um backend, ou quando queremos ter um login ou banco de dados de forma mais simplificada por exemplo.

Por isso, decidi criar esse design/projeto exclusivamente para aprendermos a configurar o Firebase e seus pacotes em nossos projetos, além de explicar como utilizar o Auth para criarmos login com e-mail e senha, e o firestore para o armazenamento dos dados dos users.

O primeiro passo será iniciarmos o nosso projeto, com isso, resolvi criá-lo com o React Native CLI visto que o Expo esta com alguns problemas na ultima versão do SDK 65, principalmente relacionado a dependência `@types/react` onde ele entra em um loop dizendo que você não instalou a dependência, mesmo já estando instalada.

Para startar nosso projeto com TypeScript, rodaremos o seguinte comando:

`npx react-native init nomeProjeto --template react-native-template-typescript`

Como o projeto foi criado a partir da CLI, para rodar em nossos emuladores é necessário realizar o build do app no `Android Studio` e `XCode` ou rodando `yarn android` e `yarn ios` .

> 💡 NIT: sempre que crio um projeto, eu também crio a pasta referente a ele no Github, assim consigo versionar e não perder o que tenho progredido no projeto.

Projeto criado e buildado com sucesso ✅

![Projeto inicial react native cli buildado](assets/img/projeto-inicial-react-native-cli.png)

Depois de criado e buildado o projeto, o próximo passo que realizo é iniciar as instalações do Firebase. Porém, antes de iniciar, você conhece a ferramenta?

## O que é o Firebase?

É uma plataforma do Google que auxilia no desenvolvimento de aplicativos web e/ou mobile, de forma rápida e simples.

O Firebase é um **BaaS (Backend as a Service),** ou seja, provê a estrutura e o backend sem ter que desenvolver o backend de forma manual, além disso, oferece várias soluções como: armazenamento de arquivos, autenticação de usuários, banco de dados, analytics, feature-flags...

Para saber mais sobre a ferramenta, basta acessar as duas documentações disponíveis, a do react native firebase [](https://rnfirebase.io/)<https://rnfirebase.io/> e a do próprio Firebase [](https://firebase.google.com/docs)<https://firebase.google.com/docs> .

## Quais são as vantagens do Firebase?

* Possui uma versão gratuita e muito completa por sinal
* Escalável
* Possui suporte para diversos tipos de plataformas (iOS, Android, JavaScript e C++) utilizando a mesma API
* Reduz o tempo de desenvolvimento já que entrega o backend pronto
* Possui fácil implementação

### 1. Criando um projeto no Firebase Console

1. Antes de iniciarmos a instalação de pacotes no código, necessitamos acessar o [Console do Firebase](https://firebase.google.com/) para criar um novo projeto. Você pode utilizar uma conta Google para conectar-se, ou criar uma nova conta gratuita caso não tenha, e para isso, basta clicar em **"Começar”.** [](https://firebase.google.com/)<https://firebase.google.com/>

   ![Firebase console]()
2.