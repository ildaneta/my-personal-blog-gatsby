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

Atuando na área front-end é perceptível de primeira que a responsividade é algo imprescindível, mas no mundo mobile isso também é utilizado, pensando principalmente na gama de dispositivos que temos de possibilidades, ou seja, temos desde smartphones com width pequeno e hight alto, ou width largo e hight alto, tablets...

Cada modelo de dispositivo possui medidas diferentes de outros dispositivos, e isso acaba "pegando" vários devs no momento de pensar na responsividade de uma aplicação mobile.

Com isso, o objetivo desse artigo é te apresentar a medida REM e o poder que ela possui para nos auxiliar na responsividade.

1 - Conhecendo a diferença entre medidas absolutas e medidas relativas

Unidades de medidas absolutas são aquelas que não dependem de valores de referência, ou seja, caso defina um elemento com css em pt ou pc por exemplo, esse elemento terá esse valor em todas as versões mobile ou web onde a aplicação esteja sendo exibida, independente do tamanho da tela, e no caso do mobile, independente da densidade de pixel que o aparelho oferece.

Unidades de medidas relativas são medidas que se baseiam em um valor base (ou valor de referência), ou seja, diferentemente das medidas absolutas, essas medidas se adequam ao contexto onde estão inseridas.
