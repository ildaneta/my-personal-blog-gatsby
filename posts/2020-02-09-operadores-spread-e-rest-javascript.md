---
layout: post
title: Operadores Spread e Rest Javascript
description: Um pouco mais sobre os operadores spread e rest
date: '2020-02-09 03:52:30'
thumbnail: assets/img/0_bpYAhsqPDn2CO78u.png
category: JS
background: '#f7a5a6'
---
![javascript spread e rest operator](assets/img/0_bpYAhsqPDn2CO78u.png)



Através do bootcamp do qual sou aluna, aprendi sobre os operadores REST e SPREAD, ambas features do ES6.

Porém apareceu uma publicação em minha timeline do linkedin onde o autor falou um pouco do REST, e ao visualizar os comentários percebi que vários desenvolvedores pareciam ainda não conhecer essa maravilhosidade, e então resolvi escrever esse artigo para ajudarmos ainda mais desenvolvedor@s.

# SPREAD

Basicamente o operador spread`...`serve para que possamos copiar dados de um array ou objeto e para passarmos um array inteiro como parâmetro para uma função, porém quando a função não espera um array mas sim argumentos separados.

> OMG parece genial não? Mas como utilizá-lo?

![](assets/img/1_EQ_i83oYjj81VyZDlt9G1A.png)

Partindo do código acima, podemos observar que temos a variável **dataUser**que é um array com os dados de um usuário.

Suponhamos que queremos criar uma novo array **newUser** que possua os mesmos dados do **dataUser**, mais dados adicionais, então utilizamos o spread [***…nameArray***, dadosAdicionais].

Então, dando um`console.log`em nossos 2 arrays, vemos que **dataUser** possui 4 posições e **newUser** possui 6, pois ele possui tudo de dataUser mais o estado civil e a cidade como dados adicionais.

Podemos também apenas copiar os dados do array ou objeto que queremos e colocá-los em uma nova variável, nada nos impede:

![](assets/img/1_m7MTzUcZgBM7ahbXhZVMnQ.png)

Com isso, os objetos **dataUser** e **newUser** possuirão os mesmos conteúdos.

Outra forma de utilizarmos o spread é em funções, principalmente aquelas que requerem uma quantidade considerável de parâmetros.\
Utilizando o exemplo abaixo, nossa função **sum** espera por três parâmetros, onde ela retornará a soma dos 3.

Se não tívessemos o spread, teríamos as duas opções abaixo para enviar parâmetros a nossa função, sendo a opção 2 a ‘pior’ forma digamos.

![](assets/img/1_g5hU573WYJl5gCLaqf7epQ.png)

Com o spread precisaríamos apenas:

![](assets/img/1_pdEGJ8AtvxFhzYVJcBXGsQ.png)

O que o spread faz no exemplo acima é “quebrar o array” onde cada posição se torna uma variável do argumento.

Podemos também combinar (um ou mais) arrays ou (um ou mais) objetos:

![](assets/img/1_QbBux4m49yEFZwPkn2gJMg.png)

Perceba que no exemplo acima, utilizei o spread também no`console.log`, assim ele já mostra meu array **fullName** ‘*espalhado*’.

# REST

O rest é utilizado quando queremos recuperar o resto de conteúdos de objetos e vetores, permitindo que nós transformemos indeterminado número de parâmetros em um novo array.

Seguindo a linha do spread, o rest possui a mesma forma declarativa para utilização, …nomeArray ou …nomeObjeto, porém o rest é utilizado sempre no final e a forma de nomear as variáveis também é diferente, pois o rest utiliza o modelo de desestruturação.

Vamos aos exemplos:

![](assets/img/1_yOOJMxG6QxD3Rkd_tUm3lQ.png)

Conforme acima, o array **numbers** possui números, porém se quisermos utilizar alguns números em variáveis separadas, basta criarmos um novo array passando o nome que essas variáveis passarão a ter e o restante dos dados que não quisermos em variáveis separadas, podemos transformá-los em outro array.\
Nesse caso, o **restNumbers** é um array derivado de **numbers** que possui o restante dos números que não separamos.

![](assets/img/1_t3X5RFnj7hVnYhJg78lQtA.png)

Os nomes que daremos as nossas variáveis devem seguir a ordem da posição dos itens do array, nesse caso, name equivale a posição\[0] de **person**, assim como yearBirth equivale a posição\[1] e assim sucessivamente.

O rest também funciona com objetos, porém já é um processo de desestruturação diferente e acho que merece um artigo só para ele.

Espero que tenham conseguido entender o valor desses operadores em nosso dia-a-dia, pois são uma mão na roda.

E se você utiliza React por exemplo, o spread é muito valioso para setar valores em estados, já que o React parte do princípio da imutabilidade, então possivelmente (se você não estiver utilizando um MobX ou Redux por ex) será necessário copiar o valor o estado …stateAtual e adicionar o novo valor em seguida.

Um abraço e te espero no próximo artigo 😘…
