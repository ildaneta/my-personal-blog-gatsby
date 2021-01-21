---
layout: post
title: >-
  Criando um projeto React Native do zero com typescript adicionando fontes
  externas
description: >-
  Neste artigo vamos começar uma série de novos aprendizados sobre o React
  Native, e para iniciarmos, vamos criar nossa primeira aplicação do zero e
  adicionaremos por sequência fontes externas do Google Fonts. Acompanhe!
date: '2021-01-21 05:52:18'
thumbnail: >-
  assets/img/Criando um projeto React Native do zero com typescript adicionando
  fontes externas.png
category: Dev
background: '#CD4C51'
---
![](assets/img/Adicionar um pouquinho de texto.png)

Em maio do ano passado comecei a atuar formalmente com desenvolvimento mobile híbrido, pois utilizo como ferramenta o React Native.

Percebi um grande interesse da comunidade nessa tecnologia, e pensei em uma forma legal de passar um pouquinho do meu conhecimento para vocês em forma de artigo, onde juntos(as) iremos criar uma aplicação de lista de objetivos, um To-do app, e assim poderemos inserir nossos objetivos, marcar os que estão completos e excluir os indesejados.

A partir desse artigo então, faremos uma série com mais 4 ou 5 artigos, onde estaremos desenvolvendo novas features em nossa aplicação, ou seja, iremos desenvolvendo um pouco mais a cada artigo.

Com isso, criei esse pequeno wireframe abaixo, que não passa de um esboço para que possamos ter em mente como será mais ou menos nossa interface, mais propriamente, as funcionalidades de forma bruta para nosso desenvolvimento. Mas não se assuste, nosso aplicativo terá um layout bem bonito, apesar de simples, pois o meu objetivo é fazer um pequeno overview das coisas mais importantes que necessitamos entender no React Native, para que você possa começar a criar seus projetos utilizando esse framework.

![app to-do](assets/img/app-to-do.png "app to-do")

E para iniciarmos nossa série de artigos sobre o React Native, hoje aprenderemos como startar um projeto utilizando o template de typescript, porque atuar com as tipagens é muito valorado pelas companhias, além de cuidarmos ainda melhor do nosso código, pois um grande diferencial do typescript é justamente previnir que cometamos erros no código, e a verificação disso é feita antes de buildarmos, pois caso tenhamos erros, os mesmos terão que ser corrigidos para que o código por fim realize o build.

Para realizar os passos abaixo é recomendado que você já possua o Android Studio e/ou XCode, além do Yarn e/ou NPM já instalados em seu pc.

Com isso, deixo a documentação que a rocketseat criou para termos de apoio ao instalarmos essas aplicações. Por favor, tenha-os antes de prosseguir para os passos abaixo.

[](https://react-native.rocketseat.dev/)<https://react-native.rocketseat.dev/>

## 1) Iniciando o projeto React Native

Iniciaremos rodando o seguinte comando:

```powershell
npx react-native init nomeProjeto --template react-native-template-typescript
```

Onde está nomeProjeto, renomeei para o nome que seu aplicativo terá, no caso todoApp.

Basicamente com o comando acima estamos iniciando um projeto React Native onde após o init já nomeamos esse projeto e em seguida dizemos que queremos que o template gerado seja com typescript, assim poderemos criar arquivos **.ts** e **.tsx**.

Ao terminar de rodar esse comando, nos será gerado um projeto conforme o abaixo:

![projeto base react native](assets/img/projeto-base.png "projeto base react native")

Para emular o código acima e conseguir visualizar como um projeto base React Native vem configurado, basta rodar o seguinte comando:

```powershell
cd [nome da pasta que o projeto esta]
yarn android 
yarn ios

yarn start
```

O `yarn start` cria o metro bundler que irá fazer seu código ser 'escutado'.

E ao executarmos, nosso aplicativo estará parecido com o abaixo:

![Welcome react native](assets/img/welcome-react-native.png "Welcome react native")

Esses são textos e estilos que vem por padrão ao baixarmos um template React Native, mas como não iremos utilizar esses estilos, vamos até o arquivo **App.tsx** e iremos apagar todo o conteúdo desse arquivo.

Esse arquivo geralmente apenas exibe as páginas ou componentes finais que criamos, pois como é nosso arquivo principal, não devemos sobrecarregá-lo com outras funções.

Resetando o que havia nesse arquivo, iremos apenas mostrar em tela um texto "Hello world" e estilizar esse texto com uma fonte de 15px e adicionarmos margins em cima e dos lados.

Para isso, vamos dentro do elemento **<Text />** e adicionaremos a propriedade **style={styles.text}**, pois assim, ao criarmos nosso estilo dentro da const styles, nossa propriedade text estará linkada com a tag que possui esse estilo.

```typescript
import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello World</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default App;
```

Gerando o seguinte resultado:

![Hello world](assets/img/hello-world.png "Hello world")

A partir desse momento, nosso app está pronto para começarmos a colocar a mão no código, e com isso, vamos agora deixá-lo preparado para nossas futuras features dentro dele, criando nossa estrutura de pastas.

Vamos adicionar uma pasta na raiz do projeto chamada src (que é uma abreviação de source), onde ficarão todos os nossos arquivos de estilos, componentes, páginas...

Dentro dessa pasta, vamos criar uma pasta chamada **components**, outra pasta chamada **pages** mas você também pode chamar de **screens** e outra pasta chamada **utils**.

![Sources folder](assets/img/sources-folder.png "Sources folder")

Essas pastas serão utilizadas nos próximos artigos, na medida que formos criando o código do nosso app, mas basicamente dentro da pasta components ficarão os componentes que criarmos em nossa aplicação, dentro de screens ficarão nossas páginas já montadas e dentro de utils ficarão alguns arquivos de auxílio, como por exemplo de colors, fontsSizes...

Para finalizarmos a primeira etapa de hoje, vamos adicionar uma fonte externa, mais propriamente do Google Fonts.

## 2) Adicionando Fontes Externas no React Native

Para adicionarmos fontes externas em nossas aplicações React Native seguiremos os passos abaixo:

1. Em nosso app, iremos utilizar a fonte Montserrat, e para isso, vamos acessar o Google Fonts, buscar pela fonte Montserrat, e em seguida baixá-las clicando em **Download family.**

<https://fonts.google.com/specimen/Montserrat>

2. Em sequência, vamos criar mais uma pasta na raiz do projeto chamada assets (fora da src), e dentro dela criaremos outra pasta chamada **fonts**. Em seguida, vamos pegar os arquivos **.ttf** que iremos utilizar no projeto e jogar dentro da pasta fonts que acabamos de criar.

Iremos utilizar as fontes **Montserrat-Regular.ttf** e **Montserrat-Bold.ttf**, ficando assim nosso projeto:

![Fonts](assets/img/fonts.png "Fonts")

Apenas uma observação, é que se você estiver no ambiente Mac OS, é importante você clicar nos arquivos .ttf baixados em downloads, e instalar essas fontes no seu pc, pois iremos precisar delas instaladas para o passo 6.

3. Após o passo acima, iremos criar um arquivo na raiz do projeto chamado **react-native.config.js** e dentro dele colocaremos o seguinte código:

```typescript
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts'],
};
```

O que estamos fazendo no código acima é basicamente adicionando nossas fontes para serem interpretadas nos códigos nativos iOS e Android.

4. Agora iremos rodar o comando abaixo para linkar nossas fontes ao nosso app:

```powershell
yarn react-native link
```

Aparecerá uma mensagem como a abaixo, indicando que as fontes foram linkadas com sucesso:

![Linkando fonts](assets/img/link-fonts.png "Linkando fonts")

5. Agora, como mexemos em recursos nativos, temos que "reinstalar" essas novas atualizações em nosso app, com as seguintes linhas de comando:

```powershell
yarn android
yarn ios
```

Após o passo acima, nossas fontes já estarão habilitadas para serem utilizadas.

E se ficar na dúvida se as fontes foram instaladas ou não, basta conferir no Android e iOS da seguinte forma:

* iOS - Para conferir se as fontes que vamos utilizar foram instaladas no iOS basta ir até a pasta ios na raiz do projeto:

ios → nomeProjeto → Info.plist

No arquivo Info.plist, vamos rolar até o fim do arquivo e verificar se nossas fontes foram injetadas no código nativo iOS, conforme abaixo:

![iOS fonts](assets/img/ios-fonts.png "iOS fonts")

* Android - Para conferir se as fontes que vamos utilizar foram instaladas no Android basta ir até a pasta android na raiz do projeto:

android → app → src → main → assets → fonts

Caso dentro de main possua a pasta assets e dentro dela nossa pasta de fontes, significa que nossas fontes externas já estão linkadas ao nosso código nativo Android.

![Android fonts](assets/img/android-fonts.png "Android fonts")

6. Passo caso você tenha ambiente do iOS

Fontes conferidas com sucesso, agora é só utilizá-las, e para isso, primeiro preciso explicar de uma pequena diferença que existe entre o Android e o iOS.

Pode ser que em uma determinada fonte, tenha seu nome no iOS diferente do nome do arquivo baixado, e esse nome é utilizado no Android. Com isso, quem possuir ambiente iOS, é recomendado ir até o programa **Catálogo de Fontes** e procurar pelas fontes que baixamos no passo 2.

Quando clicamos em cima da fonte Montserrat Normal, ao analisarmos o **Nome PostScript** dessa fonte, veremos que ela está escrita da mesma forma da fonte que baixamos:

![](assets/img/catalago-fonts.png)

é igual a:

![](assets/img/fonts-app.png)

É importante conferirmos esse passo quando temos o iOS, pois caso aqui o nome da fonte seja diferente do que colocamos em nosso projeto, é aconselhado que mudemos o nome do .ttf que está dentro do projeto, deixando igual ao do iOS, pois mudar o nome aqui dentro do Catálogo de fontes é mais difícil.

Porque disso? Porque quando vamos utilizar a fonte em nosso código, utilizamos um mesmo nome para os dois sistemas operacionais.

7. Agora vamos voltar ao nosso arquivo `App.tsx` , dentro do nosso objeto de estilo text, e adicionaremos a propriedade fontFamily: 'Montserrat-Regular' e setaremos o valor de 20 para nosso fontSize.

```typescript
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello World</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    fontFamily: 'Montserrat-Regular',
  },
});

export default App;
```

Perceba que o nome que utilizamos em fontFamily é o mesmo nome do nosso arquivo de fontes, menos a extensão.

![](assets/img/fonts-app-project.png)

E agora, ao salvarmos, nosso app já estará utilizando a fonte externa que instalamos:

![](assets/img/hello-world-montserrat.png)

E assim encerramos nosso primeiro artigo projeto.

Espero que vocês tenham gostado e evoluído muito na "aula" de hoje.

Passei o fim do ano passado planejando os novos artigos para o ano de 2021 e quis começar criando um projeto com vocês , assim teremos um aplicativo criado em conjunto e aprenderemos de uma forma diferente.

Como dica final para os ensinamentos de hoje, crie um repositório em seu Github e coloque nosso app, pois nos próximos artigos iremos evoluir ele ainda mais.

Vejo você em nosso próximo artigo/aula, pois nos próximos passos são entendermos o que são os componentes dentro do React Native e como podemos estilizá-los ainda mais!

Até já!
