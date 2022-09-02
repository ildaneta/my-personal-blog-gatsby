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
![](assets/img/water-reminder-app.png)

Após começar a utilizar o Firebase em alguns projetos pessoais e profissionais, vejo como essas bibliotecas podem nos auxiliar e empoderar nossos aplicativos, principalmente quando não temos a estrutura de um backend, ou quando queremos ter um login ou banco de dados de forma mais simplificada por exemplo.

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

   ![Firebase console](assets/img/firebase-console.png)
2. Após realizarmos o login no Console do Firebase, clique em **"+ Adicionar projeto"**

   ![Firebase console adicionar projeto](assets/img/firebase-console-adicionar-projeto.png)
3. Em seguida, **digite um nome para o seu projeto** e **clique no botão continuar**.
4. Na próxima etapa, você pode deixar o Google Analytics ativado ou não e **clicar no botão continuar**.
5. Em Configurar o Google Analytics, selecione a opção **"Default Account for Firebase"** e clique no botão **"Criar Projeto"**.
6. Pronto! Agora é só esperar o projeto ser criado. 🎉

   ![Firebase console projeto criado](assets/img/firebase-console-projeto-criado.png)

### 2. Instalação do React Native Firebase App

Agora, vamos instalar o módulo React Native Firebase App. Pois, é ele quem faz a conexão da nossa aplicação com o Firebase.

Então, execute a instalação na raiz do projeto:

```
# Com npm
npm install --save @react-native-firebase/app

# Com Yarn
yarn add @react-native-firebase/app
```

### 3. Configuração no Android

Para realizar a configuração no Android, primeiramente necessitamos ir no console do Firebase para adicionar um novo aplicativo Android. Então, clique no **ícone do Android**.

![Adicionar Firebase no Android](assets/img/adicionar-firebase-android.png)

1. Para registrar nosso app Android no primeiro passo, realizaremos as instruções abaixo e posteriormente clicaremos em Registar app para passarmos para as próximas etapas.

   ![Adicionando Firebase no Android passo 1](assets/img/adicionando-firebase-android.png)

   a. Para encontrar o nome do pacote Android, basta acessarmos em nosso código o arquivo [MainActivity.java](http://MainActivity.java) e o nome estará na primeira linha do arquivo.

   ![MainActivity.java](assets/img/mainactivity.java.png)

   b. Em apelido do app podemos colocar **Android**\
   \
   c. No campo certificado de assinatura SHA-1 não necessitaremos nesse exemplo, pois ele é obrigatório apenas em alguns cenários específicos, mas caso necessite gerar o certificado, digite no prompt o código abaixo e o certificado será gerado.

   ```
   cd android
   bash ./gradlew signinReport
   ```

   Serão geradas várias chaves, mas a necessária para este campo é `Variant: debugAndroidTest - SHA1`

   ![SHA1](assets/img/sha1.png)
2. Na próxima etapa, faremos o download do arquivo de configuração que é o **google-services.json** e clicar em **Próxima.**\
   \
   a. Iremos baixá-lo e inserí-lo em nosso código dentro de `/android/app/`

   ![Arquivo google-services.json](assets/img/arquivo-google-services.json.png)
3. Posteriormente adicionaremos o SDK do Firebase em nosso aplicativo, ou seja, configuraremos o código nativo que irá conectar a nossa aplicação com o Firebase.\
   \
   a. Primeiro vamos dentro do arquivo `/android/build.gradle` e adicionaremos dentro de `buildscript`:

   ```javascript
   buildscript {
     repositories {
       // Check that you have the following line (if not, add it):
       google()  // Google's Maven repository
     }
     dependencies {
       ...
       // Add this line
       classpath("com.google.gms:google-services:4.3.13")

     }
   }

   allprojects {
     ...
     repositories {
       // Check that you have the following line (if not, add it):
       google()  // Google's Maven repository
       ...
     }
   }
   ```

   b. Posteriormente, iremos adicionar dentro do `arquivo /android/app/build.gradle` o seguinte trecho:

   ```javascript
   apply plugin: 'com.android.application'

   // Add this line
   apply plugin: 'com.google.gms.google-services'


   dependencies {
     // Import the Firebase BoM if you choose utilize analytics
     implementation platform('com.google.firebase:firebase-bom:30.3.1')

     // Add the dependency for the Firebase SDK for Google Analytics
     // When using the BoM, don't specify versions in Firebase dependencies
     implementation 'com.google.firebase:firebase-analytics'
   }
   ```

### 4. Configuração no iOS

Para realizar a configuração no iOS segue o mesmo padrão do Android, primeiramente necessitamos ir no console do Firebase, clicar em **Adicionar app** e então, clicaremos no **ícone do iOS+**.

![Firebase adicionar ios](assets/img/firebase-adicionar-ios.png)

1. Conforme configuramos no Android, preencheremos os campos abaixo e em seguida clicaremos em **Registrar app** para seguirmos para as próximas etapas.

   ![Adicionar iOS passo 1](assets/img/firebae-adicionar-ios.png)

   a. Para encontrarmos o nome do `ID do pacote Apple` necessitamos abrir nosso projeto no `XCode` clicar em cima do nome do projeto e assim será aberto ao lado do nome, do lado direito, mais detalhes do projeto, e dentro da aba General conseguimos ver dentro de **Bundle Identifier** o nome que utilizaremos dentro do `ID do pacote Apple`

   ![Bundle Identifier](assets/img/bundle-identifier.png)

   b. No Apelido do app coloquei o nome de iOS\
   c. No campo **Código da App Store** você pode adicionar caso já tenha a conta da appStoreConect, mas é totalmente opcional
2. Na próxima etapa, iremos realizar o download do arquivo de configuração que é o **GoogleService-Info.plist** e clicar em **Próxima**.

   ![googleService-Info.plist](assets/img/googleservice-info.plist.png)

   \
   a. Iremos baixá-lo e para inserí-lo dentro do projeto, abriremos novamente o `XCode` → clicaremos em cima do nome do projeto, apertar o botão direito do mouse → `Add Files to "nome do projeto`

   ![Add files XCode](assets/img/add-files-xcode.png)

   b. Selecionaremos o arquivo baixado e clicaremos em **Add**

   ![Adding file to XCode project](assets/img/add-file-ios.png)

   ![File added](assets/img/file-added.png)
3. Agora a partir da etapa 3 da documentação, não seguiremos exatamente como está descrito. Nesse passo, é solicitado que adicionemos o SDK do Firebase, mas todas as vezes que tentei realizar esse passo, o SDK de alguma forma fez o meu projeto ter alguns bugs, então preferi não instalá-lo, mas esteja a vontade para fazê-lo, se desejar. Ou seja, esse passo eu pulo.

   ![Adicionar SDK firebase](assets/img/adicionar-sdk-firebase.png)
4. Na etapa de adicionar o código de inicialização, também faremos um pouco diferente do que é visualizado, porque nosso código iOS está em C++ e as opções exibidas são apenas para `SwiftUI`, `Swift` e `Objective-C` .\
   \
   a. Para permitir que o Firebase use as credenciais no iOS, abra dentro do código o arquivo  `/ios/{projectName}/AppDelegate.m` e adicionaremos a seguinte linha na parte superior do arquivo, logo abaixo de `#import "AppDelegate.h"`:

   ```swift
   #import "AppDelegate.h"

   #import "Firebase.h"
   #import "FirebaseCore.h"
   ```

   b. Ainda nesse arquivo, adicionaremos o seguinte trecho de código:

   ```javascript
   - (BOOL)application:(UIApplication *)application
       didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

     // Add this config
     [FIRApp configure];

     return YES;
   }
   ```

### 5. Instalação das bibliotecas do Firebase

Agora que nosso Firebase está instalado e devidamente configurado, instalaremos as bibliotecas que utilizaremos nesse projeto de login.

1. A primeira lib a ser instalada será o Cloud Firestore, que é um banco de dados de documentos NoSQL. É escalonável e focado em desenvolvimento de aplicações móveis e web.

   **Principais benefícios**

   * Flexibilidade
   * Consultas expressivas
   * Atualizações em tempo real

     * Podemos utilizar a sincronização de dados para atualizá-los em qualquer dispositivo conectado
   * Suporte off-line

     * Armazena em cache os dados ativamente utilizados pelo aplicativo
   * Projetado para escalar

   Assim, para podermos utilizá-lo necessitamos instalar a biblioteca da seguinte forma:

   ```
   yarn add @react-native-firebase/firestore 
   ```
2. A segunda biblioteca que instalaremos será a de Auth para podermos dar vida as telas de login com e-mail e senha. Para instalá-la necessitamos rodar:

   ```
   yarn add @react-native-firebase/auth
   ```

   Pronto, agora sim, nosso Firebase está instalado, configurado, e com as bibliotecas necessárias também instaladas. Mas agora necessitamos rodar o `pod install` em nossa pasta iOS e posteriormente buildar novamente o projeto em nossos emuladores Android e iOS, visto que fizemos configurações em códigos nativos.

   ```
   cd ios/ && pod install
   ```

   Pode ser que ocorra um erro o rodar o pod install parecido com o abaixo: \
   `The Swift pod FirebaseCoreInternal depends upon GoogleUtilities, which does not define modules. To opt into those targets generating module maps (which is necessary to import them from Swift when building as static libraries), you may set use_modular_headers! globally in your Podfile, or specify :modular_headers => true for particular dependencies.`\
   \
   Basicamente temos que permitir vincular bibliotecas estáticas Swift, como o `FirebaseCoreInternal` e para isso adicionaremos o seguinte comando em nosso arquivo Podfile:

   ```javascript
   pod 'Firebase', :modular_headers => true
   pod 'FirebaseCore', :modular_headers => true
   pod 'FirebaseCoreInternal', :modular_headers => true
   pod 'GoogleUtilities', :modular_headers => true
   ```

   E depois buildar novamente o projeto nos emuladores Android e iOS, via prompt ou via Android Studio e XCode.

   ```
   yarn ios 

   yarn android
   ```

   Agora sim, tudo pronto para começarmos a utilizá-lo em nosso código.\
   \
   Para iniciarmos a utilização das bibliotecas que instalamos do Firebase, criei o projeto Water Reminder no meu Github, que pode ser acessado pelo link: [](https://github.com/ildaneta/water-reminder)<https://github.com/ildaneta/water-reminder>

   Se vocês quiserem, podem clonar o projeto a partir da branch `feature/screens` , assim, toda a parte de telas, componentes e navegações já estarão configuradas, e será possível implementar as telas de SignIn, SignUp e Recovery password com o que aprenderemos em seguida.

   Branch: [](https://github.com/ildaneta/water-reminder/tree/feature/screens)<https://github.com/ildaneta/water-reminder/tree/feature/screens>

### Utilizando o Auth e Cloud Firestore

1. Para iniciarmos a utilizar o Auth do Firebase, iremos novamente até o console [https://console.firebase.google.com](https://console.firebase.google.com/) e no menu superior esquerdo clicaremos em Criação → Authentication

   ![Firebase Authentication](assets/img/firebase-authentication.png)

   Logo em seguida, clicaremos em **Vamos começar** → escolher a opção de **E-mail/senha**

   ![Autenticação com email e senha](assets/img/autenticacao-email-senha.png)

   Ativaremos a primeira opção e logo após, clicar em **Salvar.**

   ![Email e senha](assets/img/email-senha.png)
2. Configuramos nosso Auth no console do Firebase, agora criaremos nosso Cloud Firestore, ou seja, nosso banco de dados, que salvará os dados dos users. Para isso, iremos novamente no menu superior esquerdo, clicaremos em **Firestore Database** e logo após em **Criar banco de dados.**

   ![Cloud Firestore](assets/img/cloud-firestore.png)

   Escolha o **modo de produção** → **Avançar**, logo após, o **local do Cloud Firestore** e **Ativar**

   ![Modo produção](assets/img/modo-producao.png)

   Assim que nosso banco de dados estiver criado, iremos dentro de Regras e apagaremos a parte `: if false`; do lado de `,write` , em seguida, clicar em **Publicar**, porque assim, salvaremos dados no banco de dados, mesmo quando o usuário ainda não estiver logado.

   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: // if false; // apagar
       }
     }
   }
   ```

   ![Firestore rules](assets/img/firestore-rules.png)
3. O próximo passo é configurar uma coleção, que seria o mesmo de uma tabela, nesse caso, será nossa tabela de users. Daremos o nome da coleção e clicaremos em **Próxima**.

   ![Firestore Collection](assets/img/firestore-collection.png)

   Para criar uma collection pelo Firebase é necessário inserir um id do documento, nesse caso, podemos clicar em **Código automático** e **Salvar** assim nossa collection estará criada.

   ![Collection](assets/img/firestore-collection.png)
4. Agora chegou o momento do código.\
   Para essa aplicação, como tudo está relacionado a parte de login, criei um hook chamado `useAuth` onde estarão todas as funções necessárias para o login funcionar corretamente, que serão: **signUp**(responsável por criar um usuário), **signIn**(responsável por realizar o login), **singOut**(responsável por deslogar o usuário), **recoveryPassword**(responsável por resetar a senha do user via e-mail), **isLoading**(retornará se está havendo um carregamento), e **user**(retorna o id e **username** do usuário).
5. Criando um Usuário com **Firebase Auth** e adicionando-o dentro da collection de Users do **Firebase Firestore.**\
   Para criar o usuário com o auth é necessário chamar o método do auth `.createUserWithEmailAndPassword(email, password)` passando o email e senha digitada pelo user. Após isso, guardo os dados no firestore, chamando o método `firestore()`, para salvar os dados na collection de users, utilizo o método `.collection('users')` passando o nome da collection.

   Aqui tem um detalhe importante, pois para adicionar dados em uma collection posso utilizar duas formas, uma com o método `.add()`, assim criamos um novo dado na collection com um id aleatório criado pelo Firebase, mas nesse cenário eu precisava que o id do documento da collection fosse igual ao id do user criado no auth, com isso, ao adicionar eu utilizo o método `.doc(uid)` passando o id da conta do usuário dentro do auth, e chamo o método `.set()` passando o id do user e o nome de cadastro que serão armazenados na collection de users do firestore.

   ```javascript
   const signUp = async ({username, email, password}: SignUpData) => {
       if (!username || !email || !password) {
         return Alert.alert(
           'SignUp',
           'Enter username, e-mail and password to create your account.',
         );
       }

       if (password.length < 6) {
         return Alert.alert(
           'SignUp',
           'Password cannot be less than 6 characters.',
         );
       }

       try {
         setIsLoading(true);
         await auth()
           .createUserWithEmailAndPassword(email, password)
           .then(account => {
             const {uid} = account.user;

             firestore()
               .collection('users')
               .doc(uid)
               .set({
                 id: uid,
                 username,
               })
               .then(() => {
                 Alert.alert('SignUp', 'Account created with sucess!', [
                   {
                     text: 'Ok',
                     onPress: () => navigation.navigate('SignIn'),
                   },
                 ]);
               });

             setIsLoading(false);
           })
           .catch(error => {
             const {code} = error;

             if (code === 'auth/email-already-in-use') {
               return Alert.alert('SignUp', 'E-mail is already in use');
             }
             setIsLoading(false);
           })
           .finally(() => {
             setIsLoading(false);
           });
       } catch (error) {}
     };
   ```

   Basicamente são esses os passos para criar um usuário com as duas libs, o restante do código são apenas algumas verificações e redirecionamentos que realizo.
6. Realizar o login de um usuário já cadastrado na base dados do auth e firestore

   Os passos para realizar o login são bem parecidos ao de criar um novo user, o que mudam são os métodos utilizados.

   No auth, ao invés de utilizar o `.createUserWithEmailAndPassword()` para criar, utilizaremos o `.signInWithEmailAndPassword(email, password)` para realizar o login, e para trazer do firestore esse user já cadastrado, utilizamos o método `.get()` passando antes qual a collection que iremos buscar o dado e qual o id do documento que será recuperado.

   Outro passo que realizo no signIn é salvar os dados do usuário que são o id e o nome dentro do `AsyncStorage` assim consigo verificar se o usuário já está logado para que não precise passar novamente pela tela de signIn.

   ```javascript
   const signIn = async ({email, password}: SignInData) => {
       if (!email || !password) {
         return Alert.alert('SignIn', 'E-mail and password is required.');
       }

       setIsLoading(true);

       auth()
         .signInWithEmailAndPassword(email, password)
         .then(response => {
           const {uid} = response.user;
           firestore()
             .collection('users')
             .doc(uid)
             .get()
             .then(async profile => {
               const {id, username} = profile.data() as IUser;

               if (profile.exists) {
                 const userData = {
                   id,
                   username,
                 };

                 setUser(userData);

                 AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userData));
                 navigation.navigate('Home');
               }

               setIsLoading(false);
             });
         })
         .catch(error => {
           const {code} = error;

           if (code === 'auth/wrong-password') {
             return Alert.alert(
               'SignIn',
               'The password is invalid or the user does not have a password.',
             );
           }

           if (code === 'auth/user-not-found') {
             Alert.alert(
               'SignIn',
               'There is no user record corresponding to this e-mail.',
             );
           }
         })
         .finally(() => setIsLoading(false));
     };
   ```
7. Realizar a recuperação de senha do user\
   Para enviar um e-mail de recuperação de senha e assim o usuário poder modificá-la, utilizamos o método do auth `.sendPasswordResetEmail(email)`, esse é bem simples, porque o firebase cuida de todo o restante, que seria enviar o e-mail e salvar a nova senha cadastrada. No código abaixo além de chamar o método para recuperar a senha, apresento alertas em caso de sucesso e erro.

   ```javascript
   const recoveryPassword = async ({email}: RecoveryPasswordData) => {
       if (!email) {
         return Alert.alert('Recovery password', 'E-mail is required.');
       }

       await auth()
         .sendPasswordResetEmail(email)
         .then(() => {
           Alert.alert(
             'Recovery password',
             'We have sent a link to your email to reset your password.',
             [
               {
                 text: 'Ok',
                 onPress: () => navigation.navigate('SignIn'),
               },
             ],
           );
         })
         .catch(error => {
           const {code} = error;

           if (code === 'auth/user-not-found') {
             Alert.alert(
               'Recovery password',
               'It was not possible to send the password reset to your e-mail, because the e-mail you entered was not registered.',
             );
           }
         });
     };
   ```
8. Deslogar o user da aplicação\
   Por fim, mas não menos importante, seria o passo de realizar o logout do usuário do aplicativo, e para isso chamamos o método do auth `.signOut()`. Como eu também salvo no `AsyncStorage` os dados do user quando ele loga, nesse momento eu também os removo e navego novamente para a tela de SignIn.

   ```javascript
   const signOut = async () => {
       setIsLoading(true);
       await auth().signOut();
       await AsyncStorage.removeItem(USER_COLLECTION);
       setUser(null);
       setIsLoading(false);

       navigation.navigate('SignIn');
     };
   ```

Basicamente são esses os passos que temos que realizar para ter a solução de login completa utilizando o firebase.

Lembrando que vocês podem acompanhar todo o progresso / implementação do aplicativo pelo projeto no Github: [](https://github.com/ildaneta/water-reminder)<https://github.com/ildaneta/water-reminder>

Além disso, esse projeto é open source, ou seja, o código é aberto e vocês podem utilizá-lo a vontade, além disso, é uma ótima oportunidade para realizar contribuições, ou seja, vocês podem fazer esse app criar vida, enviar solicitações de pull request para mim, inserir testes, enfim, colocar todos os conhecimentos em prática e ainda contribuir em um projeto da comunidade.

Espero que tenham gostado do artigo, apesar de bem grande, tentei explicar no máximo de detalhes possíveis como instalar, configurar e utilizar o Firebase, que ja é uma das minhas libs favoritas, e que no começo tive alguns probleminhas para realizar a instalação inicial, que para mim é o mais complexo.

Até o próximo artigo pessoal! 🫶🏻