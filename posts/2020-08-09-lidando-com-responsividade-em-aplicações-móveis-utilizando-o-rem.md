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

Atuando na área front-end é perceptível de primeira que a responsividade é algo imprescindível, mas no mundo mobile isso também é utilizado, pensando principalmente na gama de dispositivos que possuímos de possibilidades de tamanhos, tanto de width quanto height, ou seja, temos desde smartphones com width pequeno e hight alto, ou width largo e hight alto, tablets...

Além do tamanho das medidas de width e height que variam bastante, temos que entender que além destes tamanhos, outra medida que muda bastante de um dispositivo para o outro, é a densidade de pixels.

Com isso, o objetivo desse artigo é te apresentar a medida REM e o poder que ela possui para nos auxiliar na responsividade

1 - Entendendo o verdadeiro tamanho de um Pixel

O pixel ao contrário do que muitos(as) devs pensam, não possui uma medida absoluta, pois ele pode assumir diferentes tamanhos, devido a estar diretamente relacionado a quantidade de pixels por polegadas ou ppi (pixel per inch). O que ocorre é que o valor do pixel sofre influência da quantidade de pixels que suporta a resolução do dispositivo, ou seja, quanto maior a densidade de pixels um dispositivo possui, mais pixels por polegada cabem em sua tela.

Esse conceito começou a partir do lançamento do iPhone 4 através da tela de retina, onde a Apple conseguiu fazer com que 4 pixels coubessem em um espaço onde antes caberia apenas 1 pixel. Além disso, a tela de retina era mais nítida e dobrou a quantidade de pixel por polegada.

![Pixel in iPhone 4](assets/img/xxx.PNG)

2 - Conhecendo a diferença entre medidas absolutas e medidas relativas

Unidades de medidas absolutas são aquelas que não dependem de valores de referência, ou seja, caso defina um elemento com css em pt ou pc por exemplo, esse elemento terá esse valor em todas as versões mobile ou web onde a aplicação esteja sendo exibida, independente do tamanho da tela, e no caso do mobile, independente da densidade de pixel que o aparelho oferece.

Unidades de medidas relativas são medidas que se baseiam em um valor base (ou valor de referência), ou seja, diferentemente das medidas absolutas, essas medidas se adequam ao contexto onde estão inseridas.
