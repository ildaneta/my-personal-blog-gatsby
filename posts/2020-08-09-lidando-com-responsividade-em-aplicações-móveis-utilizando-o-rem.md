---
layout: post
title: Lidando com responsividade em aplicações móveis utilizando o REM
description: >-
  Neste artigo irei explicar um pouco mais sobre a medida relativa REM do CSS, e
  como podemos utilizá-la para auxiliar na responsividade de aplicações móveis!
date: '2020-08-09 08:52:16'
thumbnail: assets/img/2ef58f878ee7.jpg
category: CSS
background: '#7d669e'
---
![Relative unit REM](assets/img/2ef58f878ee7.jpg)

Atuando na área front-end é perceptível de primeira que a responsividade é algo imprescindível, mas no mundo mobile isso também é utilizado, pensando principalmente na gama de possibilidades de tamanhos que possuímos hoje em dia, tanto de width quanto height, ou seja, temos desde smartphones com width pequeno e hight grande, ou width grande e hight grande, tablets...

Além do tamanho das medidas de width (largura) e height (altura) que variam bastante, outra medida que muda bastante de um dispositivo para o outro, é a densidade de pixels.

Com isso, o objetivo desse artigo é te apresentar a medida REM e o poder que ela possui para nos auxiliar na responsividade, além de uma lib que comecei a utilizar recentemente no React Native, que me permite utilizar o REM e outras medidas relativas no desenvolvimento de aplicações móveis.

## 1 - Entendendo o verdadeiro tamanho de um Pixel

O píxel ao contrário do que muitos(as) devs pensam, não possui uma medida absoluta, pois ele pode assumir diferentes tamanhos, devido a estar diretamente relacionado a quantidade de pixels por polegadas ou ppi (pixel per inch). O que ocorre é que o valor do pixel sofre influência da quantidade de pixels que suporta a resolução do dispositivo, ou seja, quanto maior a densidade de pixels um dispositivo possui, mais pixels por polegada cabem em sua tela.

Esse conceito começou a partir do lançamento do iPhone 4 através da tela de retina, onde a Apple conseguiu fazer com que 4 pixels coubessem em um espaço onde antes caberia apenas 1 pixel, pois a tela de retina, além de ser mais nítida, dobrava a quantidade de píxel por polegada exibida na tela dos dispositivos.

![Pixel in iPhone 4](assets/img/xxx.PNG)

Com isso percebemos que o píxel do CSS não é um píxel da tela do dispositivo (hardware), mas um píxel de referência (geralmente maior do que o píxel real).

## 2 - Conhecendo a diferença entre medidas absolutas e medidas relativas

**Unidades de medidas absolutas** são aquelas que não dependem de valores de referência, ou seja, caso defina um elemento utilizando a medida em CSS pt ou pc por exemplo, esse elemento terá esse valor em todas as versões mobile ou web onde a aplicação esteja sendo exibida, independente do tamanho da tela, e no caso do mobile, independente da densidade de pixel que o aparelho oferece, ou seja, por não se adaptar a quantidade de ppi dos dispositivos, uma simples declaração de font-size: 16px, pode resultar em um grande problema de responsividade em outros dispositivos.

Já as **Unidades de medidas relativas** são medidas que se baseiam em um valor base (ou valor de referência), diferentemente das medidas absolutas, essa se adequam ao contexto onde estão inseridas. \
\
Temos bastantes exemplos de medidas relativas como o **EM**, a porcentagem **%**, o **REM**, entre outros, mas o foco desse artigo é mostrar uma medida que me auxilia bastante quando necessito ser responsiva nas telas que entrego, ou seja, necessito que o layout do design seja fiel ao que foi apresentado e além disso, consiga se adequar a maior quantidade de dispositivos e aparelhos que existirem. 

## 3 - Conhecendo a medida relativa REM

**REM** (cuja letra inicial **"r"** vem de ***"root": "root em"***), ou seja, seu tamanho baseia-se na fonte fixada ao elemento raiz.

Diferentemente do EM, ele não possui aninhamento de tamanhos, e seu valor é a base para as medidas subsequentes.

Sua base comumente possui o valor de **1rem equivalendo a 16px (pixels)**, então para criar uma tabela de valores em REM basta utilizar o valor em ***pixel*/16** (que é o valor de **1rem**):

```jsx
1px  = 1/16 = 0.0625rem

4px  = 0.25rem
8px  = 0.5rem
16px = 1rem (valor base do REM)
24px = 1.5rem
32px = 2rem
```

Você deve estar se perguntando, tudo bem, entendi o valor do REM mas não entendi ainda como ele me ajudará na construção do código e responsividade.\
\
Como explicado acima, os dispositivos mobiles hoje possuem muitos formatos, que incluem a tamanho de altura e largura, mas também atrelado a quantidade de pixels que suporta as resoluções dos dispositivo, o que acaba impactando diretamente em seu layout pois quanto maior a densidade de pixels um dispositivo possui, mais pixels por polegada cabem em sua tela.

Para exemplificar essa diversidade de densidade de pixels, cito abaixo as medidas mencionadas na [documentação de Pixel Ratio do ReactNative](https://reactnative.dev/docs/pixelratio) :

`PixelRatio.get() === 1`

* [dispositivos Android mdpi](https://material.io/tools/devices/)

`PixelRatio.get() === 1.5`

* [dispositivos hdpi Android](https://material.io/tools/devices/)

`PixelRatio.get() === 2`

* iPhone SE, 6S, 7, 8
* iPhone XR
* iPhone 11
* [dispositivos xhdpi Android](https://material.io/tools/devices/)

`PixelRatio.get() === 3`

* iPhone 6S Plus, 7 Plus, 8 Plus
* iPhone X, XS, XS Max
* iPhone 11 Pro, 11 Pro Max
* Pixel, Pixel 2
* [Dispositivos Android xxhdpi](https://material.io/tools/devices/)

`PixelRatio.get() === 3.5`

* Nexus 6
* Pixel XL, Pixel 2 XL
* [Dispositivos Android xxxhdpi](https://material.io/tools/devices/)

Como isso impacta seu código?

![](assets/img/untitled (2).png)

Como mostra na imagem acima, estou emulando o código abaixo em 2 dispositivos Android, mas que possuem densidade de pixels diferentes.

Então se eu declarar a última imagem no meu estilo utilizando pixels, ela ficará diferente em dispositivos que possuírem diferentes densidades, devido ao ppi(pixel per inch).

Ou seja, se eu declaro o tamanho da imagem (width e height) cat com um tamanho de 70px, automaticamente esse valor será multiplicado a quantidade de pixel que esse dispositivo possui, e no caso do exemplo acima ficaria:\
\
70px x 3.5(proporção do dispositivo da esquerda) = 245px\
70px x 2.75(proporção da direita) = 192,5px\
\
Mas o dispositivo da direita está mostrando que o valor em pixel é 193px, o que leva também a outro problema, os arredondamentos.\
\
Graças a esses valores que são arredondados, muitas vezes, nós desenvolvedores perdermos um certo tempo tentando mudar aquela diferença de pixel, principalmente quando mudamos de sistema operacional.

De acordo com a documentação do pixel ratio que é uma classe que acessa a densidade nativa dos dispositivos, temos algumas formas de sabermos esses valores, utilizando por exemplo as funções abaixo:

`PixelRatio.get( )` - o método [get()](https://reactnative.dev/docs/pixelratio#getpixelsizeforlayoutsize) fornece acesso à densidade de pixels e escala da fonte do dispositivo.

`PixelRatio.getPixelSizeForLayoutSize( )` - o método [getPixelSizeForLayoutSize()](https://reactnative.dev/docs/pixelratio#getpixelsizeforlayoutsize) converte um tamanho de layout (dp) em tamanho de pixel (px).\
\
Exemplo de utilização que gerou as imagens de tela acima:

```typescript
import React from 'react';
import { View, Text, Image, SafeAreaView, PixelRatio } from 'react-native';

const size = 70;
const cat = {
  uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
  width: size,
  height: size,
};

const ExampleREM: React.FC = () => {
  return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>A proporção atual de pixel é:</Text>
          <Text style={styles.value}>{PixelRatio.get()} </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            Exige uma imagem de de width em pixels de:
          </Text>
          <Text style={styles.value}>
            {PixelRatio.getPixelSizeForLayoutSize(size)} px
          </Text>

          {/* Transformando o tamanho da imagem em REM */}
          <Image source={cat} style={styles.cat} />
        </View>
      </SafeAreaView>
  );
};

export default ExampleREM;
```

Com isso, utilizei como alternativa a medida REM, pois é uma medida relativa que depende de uma medida base. Essa medida base não leva em consideração a proporção dos dispositivos, ou seja, o valor transformado em pixel não será multiplicado pela densidade oferecida pela tela.

Atrelado a isso, não é possível até a data em que estou escrevendo esse post inserir medidas 'rem' utilizando o StyleSheet ofertado pela lib do 'react-native', e para contornar essa situação, comecei a utilizar recentemente a lib react-native-extended-stylesheet

Artigos para se aprofundar:

<https://alistapart.com/article/a-pixel-identity-crisis/>

<https://www.alura.com.br/artigos/guia-de-unidades-no-css>

<https://developer.android.com/training/multiscreen/screendensities?hl=pt-br>
