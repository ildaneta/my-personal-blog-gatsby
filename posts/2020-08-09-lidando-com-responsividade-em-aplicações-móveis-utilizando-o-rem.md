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

Além do tamanho das medidas de width e height que variam bastante, temos que entender que além destes tamanhos, outra medida que muda bastante de um dispositivo para o outro, é a densidade de pixels.

Com isso, o objetivo desse artigo é te apresentar a medida REM e o poder que ela possui para nos auxiliar na responsividade, além de uma lib que comecei a utilizar recentemente no React Native, que me permite utilizar o REM e outras medidas relativas no desenvolvimento de aplicações móveis.

1 - Entendendo o verdadeiro tamanho de um Pixel

O píxel ao contrário do que muitos(as) devs pensam, não possui uma medida absoluta, pois ele pode assumir diferentes tamanhos, devido a estar diretamente relacionado a quantidade de pixels por polegadas ou ppi (pixel per inch). O que ocorre é que o valor do pixel sofre influência da quantidade de pixels que suporta a resolução do dispositivo, ou seja, quanto maior a densidade de pixels um dispositivo possui, mais pixels por polegada cabem em sua tela.

Esse conceito começou a partir do lançamento do iPhone 4 através da tela de retina, onde a Apple conseguiu fazer com que 4 pixels coubessem em um espaço onde antes caberia apenas 1 pixel, através da tela de retina, que era mais nítida e dobrava a quantidade de píxel por polegada exibida na tela.

![Pixel in iPhone 4](assets/img/xxx.PNG)

Com isso percebemos que o píxel do CSS não é um píxel da tela do dispositivo (hardware), mas um píxel de referência (geralmente maior do que o píxel real).

Atualmente temos 3 níveis de densidades de píxel para iPhones e 6 para Android.

2 - Conhecendo a diferença entre medidas absolutas e medidas relativas

**Unidades de medidas absolutas** são aquelas que não dependem de valores de referência, ou seja, caso defina um elemento utilizando a medida em CSS pt ou pc por exemplo, esse elemento terá esse valor em todas as versões mobile ou web onde a aplicação esteja sendo exibida, independente do tamanho da tela, e no caso do mobile, independente da densidade de pixel que o aparelho oferece, ou seja, por não se adaptar a quantidade de ppi dos dispositivos, uma simples declaração de font-size: 16px, pode resultar em um grande problema de responsividade em outros dispositivos.

Já as **Unidades de medidas relativas** são medidas que se baseiam em um valor base (ou valor de referência), diferentemente das medidas absolutas, essa se adequam ao contexto onde estão inseridas. \
\
Temos bastantes exemplos de medidas relativas como o **EM**, a porcentagem **%**, o **REM**, entre outros, mas o foco desse artigo é mostrar uma medida que me auxilia bastante quando necessito ser responsiva nas telas que entrego, ou seja, necessito que o layout do design seja fiel ao que foi apresentado e além disso, consiga se adequar a maior quantidade de dispositivos e aparelhos que existirem. 

3 - Conhecendo a medida relativa REM

REM (cuja letra inicial "r" vem de "root": "root em"), ou seja, seu tamanho baseia-se na fonte fixada ao elemento raiz.

Diferentemente do EM, ele não possui aninhamento de tamanhos, e seu valor é a base para as medidas subsequentes.

Sua base comumente possui o valor de **1rem equivalendo a 16px (pixéis)**, então para criar uma tabela de valores em REM basta utilizar o valor em ***pixel*/16** (que é o valor de **1rem**):

```jsx
1px  = 1/16 = 0.0625rem
4px  = 0.25rem
8px  = 0.5rem
16px = 1rem (valor base do REM)
24px = 1.5rem
32px = 2rem
```



Artigos para se aprofundar:

<https://alistapart.com/article/a-pixel-identity-crisis/>

<https://www.alura.com.br/artigos/guia-de-unidades-no-css>

<https://developer.android.com/training/multiscreen/screendensities?hl=pt-br>
