---
layout: post
title: Aprendendo a criar componentes e estilos no React Native
description: >-
  Hoje iremos aprender um pouco mais sobre o React Native, e para isso,
  entenderemos melhor o que são os componentes e como podemos estilizá-los!
date: '2021-02-03 05:57:55'
thumbnail: assets/img/app-final.png
category: Dev
background: '#CD4C51'
---
![Imagem final](assets/img/app-final.png "Imagem final")

Continuando nosso artigo que nos ensina a startar um projeto React Native e a inserir fontes externas, hoje iremos avançar um pouco mais nossos conhecimentos, onde desvendaremos o que são os famosos componentes e como podemos deixá-los ainda mais bonitos, adicionando estilos.

Acredito que a partir desse artigo especificamente, explicarei de uma forma mais detalhada, mas se ainda assim persistirem dúvidas, estou a disposição para que elas sejam resolvidas, pois quando aprendemos uma nova tecnologia, quanto mais informações temos, buscamos e aprendemos, melhor para fixar o conhecimento, com isso, espero que os artigos instiguem ainda mais vocês a buscarem mais sobre esse framework que é super importante e bastante utilizado.

E antes de entrarmos realmente no assunto React Native, acho que é super importante colocarmos nossos projetos visíveis no Github, e além disso, termos esse material como fonte de estudos e dúvidas. Acreditem, o que vocês aprenderão abaixo será válido durante todo o aprendizado de vocês, e ao salvarmos nosso código e deixarmos-o disponível, criamos uma fonte válida de informação, que nós mesmos produzimos, além de treinarmos comandos e funcionalidades que serão muito utilizadas no ambiente laboral.

Com isso, vamos começar hoje aprendendo de uma forma ainda melhor, iniciando pelo Git.

## Criando uma nova branch em nosso projeto no Github

Conforme dei de sugestão no último artigo, acho válido o projeto estar no Github, mas não se preocupe, caso não tenha conseguido subir seu projeto, ou caso não tenha concluído todos os passos do artigo anterior, no link abaixo você terá acesso ao projeto que está em meu Github, e caso prefira, esteja a vontade para clonar esse projeto / realizar um fork.

[](https://github.com/ildaneta/challenges/tree/master/toDo-app)<https://github.com/ildaneta/challenges/tree/master/toDo-app>

Após terem o repositório no Github de vocês, sugiro baixá-lo para iniciarmos hoje criando uma nova branch, e para isso, seguiremos a estrutura de nomenclatura abaixo:

`tipoDaModificação/nomeProjeto/Funcionalidade-alterada-ou-criada`

O que ficaria mais ou menos assim:

`feat/ToDoApp/Criacao-de-componentes`

É legal que no momento de criação de branches, você seja descritivo e claro, para que quando você precise voltar novamente nessa branch, ela seja de fácil localização.

Esse padrão de nomenclatura é o que utilizamos em nosso projeto laboral, e foi um consenso que minha equipe chegou e escolheu, assim, cada equipe ou empresa poderão ter padrões diferentes para nomear branchs.

Outro ponto interessante, é que o **feat**, vem de **feature**, seguindo o padrão de nomenclaturas que existem no Conventional Commits, onde inclusive já fiz um artigo exclusivo a ele e você pode lê-lo aqui: [](https://ildaneta.dev/posts/entendo-a-import%C3%A2ncia-dos-commits-sem%C3%A2nticos/)[https://ildaneta.dev/posts/entendo-a-importância-dos-commits-semânticos/](https://ildaneta.dev/posts/entendo-a-import%C3%A2ncia-dos-commits-sem%C3%A2nticos/).

Então supondo que nossa branch fosse pra corrigir um bug em produção, colocaríamos o sufixo de fix, ficando: `fix/ToDoApp/Correcao-componente-input`

Agora que já sabemos a nomenclatura, vamos começar a digitar as linhas de comando para entrarmos em nosso projeto, e criarmos uma nova branch.

1 - `cd nomePasta` que o projeto está

2 - Ao entrarmos na pasta do projeto ToDo, digitaremos `git branch` para saber qual branch estamos no momento, provavelmente será sua master:

![](assets/img/1.png)

Então vamos criar nossa nova branch, onde iremos aprender sobre criação de componentes e estilos, sugiro o nome abaixo, mas vocês podem nomear da forma que acharem mais agradável, o que cito aqui são apenas segestões:

```powershell
git checkout -b feat/TodoApp/Criando-componentes-e-estilos
```

A tela exibida será semelhante a abaixo:

![](assets/img/2.png)

Quando digitamos o comando de `git checkout nomeBranch` de forma isolada, estamos apenas mudando da branch atual, para a branch digitada, porém quando colocamos o `-b` na frente, estamos criando uma nova branch a partir da branch atual que estamos e já mudando para dentro dessa nova branch, conforme a mensagem exibida: **Switched to a new branch...**

Agora, se você rodar a linha de comando abaixo, verá que já estamos dentro dessa nova branch:

```powershell
git branch
```

![](assets/img/3.png)

Pronto, branch criada e verificada com sucesso, agora começaremos nosso caminho pelo React Native.

## Entendendo melhor as tags no React Native

Pensando realmente em entender o React Native iniciando pelos fundamentos, creio que é importante dizer algumas pequenas diferenças que temos em relação ao ReactJS web e o React Native, e a primeira delas é em relação as tags.

No frontend um dos principais conhecimentos que temos que ter é sobre as tags HTML, porque quando você lida com sites que serão renderizados via browser e posteriormente rankeados, é extremamente importante entender a semântica por detrás das tags e como o bom uso delas podem aumentar o SEO de sua página, por exemplo. Porém como o React Native não é renderizado da mesma forma, não possuímos tags como no frontend, porque basicamente no mobile possuímos tags mais genéricas, como por exemplo a tag **`<Text>`** que serve para escrever qualquer tipo de texto, diferente do web que possuímos o **`<p>`**, **`<strong>`**, que são formas diferentes de escrevermos textos, pois cada uma das tags possui suas particularidades.

O React Native funciona como uma coleção especial de componentes React, e nossos componentes / tags são compilados para widgets nativos, tanto nativo iOS quanto nativo Android, da seguinte forma:

![](assets/img/4.png)

Mas pode surgir a dúvida, apenas nossa interface é compilada? E o que ocorre com nosso código Javascript?

Nosso código Javascript não é compilado, porque ele é executado em uma máquina virtual no final, rodado e hospedado pelo React Native dentro do nosso aplicativo. O React Native também nos dá ferramentas para que nosso código Javascript se comunique com módulos e API's nativas, como por exemplo quando queremos ter acesso a câmera do dispositivo.

![](assets/img/5.png)

Temos algumas tags que são bastante utilizadas em nosso dia a dia, por exemplo: **`<View>`**, **`<Text>`**, **`<Image>`**, **`<TextInput>`**, **`<ScrollView>`** e **`<TouchableOpacity>`**.

Mas para que vocês possam entender melhor sobre as tags e sobre a ferramenta, deixo o link da doc do React Native abaixo:

[](https://reactnative.dev/docs/components-and-apis)<https://reactnative.dev/docs/components-and-apis>

## O que são componentes dentro do React Native?

Agora que já entendemos um pouquinho mais sobre as tags no React Native e como elas são compiladas, chegou o momento de entendermos o que são os componentes.

Partindo da documentação do [React](https://pt-br.reactjs.org/docs/components-and-props.html), componentes permitem você dividir a UI (User Interface) em partes independentes e reutilizáveis, pensando em cada parte isoladamente.

Conceitualmente, componentes são como funções Javascript. Eles aceitam entradas arbitrárias (chamadas “props” = propriedades) e retornam elementos React que descrevem o que deve aparecer na tela.

Basicamente da seguinte forma:

```tsx
import React from 'react';
import { Text } from 'react-native';

function Welcome(props) {
  return <Text>Hello, {props.name}</Text>;
}

export default Welcome;
```

Então como vimos na própria documentação, componentes são trechos de código isolados, ou seja, possuem estilos e propriedades próprias, e que podem ser reutilizados na aplicação.

Uma observação importante é que um componente pode ou não receber propriedades.

No trecho de código acima, estamos criando um componente chamado **Welcome**, e esse componente/função vai receber uma propriedade chamada `name`. Então para utilizarmos esse componente, o código ficaria mais ou menos assim:

```tsx
import React from 'react';

import Welcome from '../../components/Welcome';

const Main = (): JSX.Element => {
 
  return <Welcome name="Ilda Neta"/>;
};

export default Main;
```

O que estamos fazendo é basicamente importar esse componente e colocar dentro dele a propriedade que ele espera, a prop name, com o valor de string Ilda Neta.

Agora que já entendemos um pouco mais sobre os fundamentos, chegou nosso momento de codar, e com isso, vamos conhecer o layout da nossa aplicação:

![](assets/img/Captura de Tela 2021-02-03 às 18.13.10.png)

Como citei no artigo anterior, é um layout simples, mas funcional, e o importante mesmo é que vocês entendam os conceitos e consigam aplicá-los posteriormente em outros projetos. As cores, nomenclaturas e todo o restante do código pode ser criado conforme seu gosto, o que disponibilizo é apenas uma inspiração para que você tenha em mente uma forma de criar sua aplicação, com isso, sinta-se a vontade para personalizar seu projeto da maneira que mais lhe agradar.

Criaremos então nosso primeiro componente, que será o **Header**, e para criá-lo seguiremos os passos abaixo:

1 - Iremos até nossa pasta **components** e criaremos dentro dela outra pasta chamada **header** e dentro da pasta header criaremos os arquivos `Header.tsx` e `styles.ts`:

![](assets/img/6.png)

Aqui chegamos a outra dica bem legal, que é a diferença entre utilizarmos a extensão **.ts** e **.tsx**.

Quando utilizamos a extensão .ts, estamos dizendo que esse arquivo não terá trechos de código JSX ou seja, tags com textos e estilos unidos a código Javascript. Já quando utilizamos o arquivo .tsx, estamos dizendo que esse código terá trechos JSX.

Caso surjam dúvidas relacionadas a isso, deixo abaixo a explicação contida na doc do React sobre o JSX:

[](https://pt-br.reactjs.org/docs/introducing-jsx.html)<https://pt-br.reactjs.org/docs/introducing-jsx.html>

2 - Após criarmos a estrutura de pastas do componente Header, vamos começar a escrever o código, com isso sempre é necessário importar o React e as tags que utilizaremos do React Native. Após isso, criamos nossa função Header que será uma arrowFunction que retorna uma View vazia:

```tsx
import React from 'react';
import { View } from 'react-native';

const Header = (): JSX.Element => {
  return <View />;
};

export default Header;
```

Como havíamos começado no outro artigo, estaremos utilizando já o typescript porque ele nos traz muitas vantages na escrita do código, uma delas é a intellisense que vou mostrar logo adiante a vocês, mas pra quem nunca viu uma tipagem, como podemos identificá-las?

As tipagens comumente virão após os dois pontos, e que conforme o código acima, conseguimos ver a tipagem da função da seguinte forma `: JSX.Element` . Comumente utilizávamos antes para tipar os retornos das funções o `React.FC`, da seguinte forma:

```tsx
import React from 'react';
import { View } from 'react-native';

const Header: React.FC = () => {
  return <View />;
}

export default Header;
```

Porém essa tipagem acaba trazendo alguns pequenos probleminhas no código, com isso, o Facebook retirou essa tipagem do template typescript do create-react-app. Caso você deseje estudar mais sobre esse ponto, deixo com vocês abaixo a thread do Facebook onde eles aceitam essa sugestão via pull request:

[](https://github.com/facebook/create-react-app/pull/8177)<https://github.com/facebook/create-react-app/pull/8177>

No lugar dessa tipagem React.FC, colocamos que a função nos retornará um `JSX.Element`.

Outra particularidade que temos nas funções é que, além da tipagem do retorno da função, como acima, quando essa função receber parâmetros, teremos também que tipar esses parâmetros, e já já abaixo veremos essa situação.

São muitos detalhes, mas espero que vocês continuem perseverantes, pois venceremos os conceitos com calma, paciência e vontade de aprender.

E basicamente esse é um componente, mas que da forma que está ele não vai nos retornar nada, para isso, iremos adicionar um texto, que será o header do nosso aplicativo, da seguinte forma:

```tsx
import React from 'react';
import { View, Text } from 'react-native';

const Header = (): JSX.Element => {
  return <Text>ToDo App</Text>;
};

export default Header;
```

3 - Componente criado, agora chegou o momento de importarmos ele e exibirmos em nossa aplicação.

Para isso, vamos até nosso arquivo `App.tsx` e importaremos nosso componente **Header**:

```tsx
import React from 'react';

import Header from './src/components/header/Header';

const App = (): JSX.Element => {
  return <Header />;
};

export default App;
```

Também colocaremos a tipagem do retorno da função App, adicionando o `(): JSX.Element`.

Após isso, rodaremos novamente o nosso app. Caso seu projeto já tenha sido instalado no dispositivo, basta rodar `yarn start` para o metro bundler rodar, e abrirmos nosso app no emulador.

Mas caso você não tenha o app instalado no emulador rode `yarn android` ou `yarn ios` assim ele vai buildar a aplicação, instalá-la no seu emulador e abrir o app.

E nosso resultado será:

![](assets/img/7.png)

Como é possível visualizar, no iOS ele considera o notch como uma parte da tela, e assim nossa interface fica quebrada.

Mas o React Native tem uma tag específica pra isso, chamada `<SafeAreaView>`, e como o próprio nome da tag nos revela, ela nos ajuda a exibir nossa interface apenas na área que é visível ao usuário, com isso, alteraremos nosso código da seguinte forma:

```tsx
import React from 'react';
import { SafeAreaView } from 'react-native';

import Header from './src/components/header/Header';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Header />
    </SafeAreaView>
  );
};

export default App;
```

Importamos o **SafeAreaView** e colocamos ele ao redor de nossa aplicação, assim qualquer conteúdo renderizado pelo aplicativo estará em uma área visível para o usuário.

Também podemos perceber que o nosso **return** mudou, e isso ocorre porque quando renderizamos mais de uma tag, temos que colocar os `()` ao redor das tags, conforme o código acima.

E esse é o resultado em nossa aplicação:

![](assets/img/8.png)

## Lidando com estilos no React Native

Conseguimos então criar nosso primeiro componente, mas como podemos visualizar, ele está bem simples, sem estilos e sem a fonte externa que importamos. Com isso, agora vamos aprender um pouco mais sobre as estilizações.

Criamos acima o arquivo de `styles.ts` dentro da pasta do nosso componente Header, mas como podemos criar os estilos dentro dele?

```tsx
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({});
```

Basicamente, o trecho de código acima é o start para criarmos nossos estilos, onde utilizamos o método **StyleSheet** fornecido pelo react native.

Após importá-lo, precisamos exportar nossa constante styles, que recebe o `StyleSheet.create({})` .

Para linkar nossos estilos ao nosso componente, precisamos voltar no arquivo `Header.tsx` e importar nossos estilos, da seguinte forma:

![](assets/img/9.png)

E para realmente surtir efeitos visuais no nosso componente, colocamos dentro da tag `<Text>` a propriedade de estilos, da seguinte forma:

```tsx
import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

const Header = (): JSX.Element => {
  return <Text style={styles.textHeader}>ToDo App</Text>;
};

export default Header;
```

Todas as tags React Native podem receber essa propriedade `style`, e assim, dentro dela dizemos qual será a propriedade que passará a identidade visual de nosso componente dentro da nossa constante `styles`. Como podemos ver, estamos dizendo que a propriedade **textHeader** será a que passará estilos para nosso texto, com isso, voltaremos dentro do nosso arquivo de `styles.ts` e adicionaremos essa propriedade, da seguinte forma:

```tsx
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  textHeader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
  },
});
```

Resultando:

![](assets/img/10.png)

Como é visível no estilo, no React Native é um pouco diferente do web também na declaração das propriedades de estilo, pois no mobile não utilizamos o `font-family` com hífen como no web, e isso acontece porque o que digitamos não é propriamente o CSS, mas uma estilização baseada em CSS, e por isso a nomenclatura acaba se diferenciando um pouco.

Uma boa prática também é que não criemos nossos estilos no mesmo arquivo da lógica da aplicação, como fizemos no primeiro artigo, por isso aqui, separamos eles em dois arquivos.

E como de costume, para que vocês possam se aprofundar mais no conhecimento do **StyleSheet**, deixo abaixo a documentação sobre ele:

[](https://reactnative.dev/docs/stylesheet)<https://reactnative.dev/docs/stylesheet>

## Entendendo melhor as Props ou Propriedades

Acabamos então de criar nosso primeiro componente e já até estilizamos ele, mas em realidade esse componente ainda está bem simples e sem as estilizações finais que precisamos para nossa aplicação, assim, chega o momento de entendermos um pouco mais sobre as props/propriedades que nossos componentes podem receber e como podemos iniciar as tipagens delas.

No comecinho do artigo, vimos o componente **Welcome,** que recebe uma propriedade **name**, e em nosso componente de Header, faremos a mesma coisa, mas nossa propriedade se chamará **headerTitle**, ficando da seguinte forma:

```tsx
import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

const Header = (prop): JSX.Element => {
  return <Text style={styles.textHeader}>{prop.headerTitle}</Text>;
};

export default Header;
```

Mas podemos melhorar um pouquinho mais esse código da seguinte forma:

```tsx
import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

const Header = ({ headerTitle }): JSX.Element => {
  return <Text style={styles.textHeader}>{headerTitle}</Text>;
};

export default Header;
```

O que melhoramos no código acima é que desestruturamos a propriedade de dentro de props, é o mesmo que fazermos assim:

`const { headerTitle } = props`

Como já sabemos, o React Native é apenas um framework que nos auxilia na produção da aplicação, mas ter a base Javascript é sumamente indispensável, por isso, aconselho a estudar mais sobre desestruturações, manipulações de arrays e spread and rest operators.

Mesmo realizando essa desestruturação, nossa prop está sem tipagem, o que faz o código ficar com esse alerta:
