---
date: '2024-04-11'
thumbnail: ( ͡° ͜ʖ ͡°)
title: raylib.ha
description: Meu primeiro projeto com a Hare
type: post
tags:
  - programação
  - linux
possui_bloco_de_código: false
---
Nos últimos dias eu ando trabalhando em um pequeno projeto, esse sendo algo
que estou fazendo como uma forma de aprendizado. O nome que dei a esse projeto
é raylib.ha.

A minha inspiração foi uma live de um streamer que eu
acompanho, o Tsoding. A live em questão é uma em que ele explora a Harelang
pela primeira vez, ao decorrer da live, ele se questiona se ele poderia usar a
raylib com a Hare. Depois de alguns minutos explorando, ele descobre como ele
pode fazer isso, e parte em direção para criar uma janela com um quadrado
vermelho que pode se movimentar na janela com as teclas W/A/S/D.

# Do que se trata

Bem, antes de falar sobre o meu projeto, acho melhor
esclarecer a aqueles que não conhece a raylib o que ela é. A raylib, como o
nome já pode soar, é uma biblioteca que serve para a criação de jogos em C sem
muita dor de cabeça.

E o meu projeto se trata de algo cujo o objetivo é
criar bindings que permitam o uso da raylib por meio da Harelang.

# Meus objetivos

Quero que, ao finalizar o projeto, seja possível criar
jogos usando a raylib com a mesma facilidade, se não até mais, do que quando
sendo feito usando C. Por enquanto estou focando nas partes necessárias para
fazer um jogo 2D, seja esse jogo um plataformer, seja ele arena-shooter
top-down.

Claro que isso implica também a necessidade de fazer bindings
para a raymath, já que um jogo, por mais simples que seja, também precisa ter
física. E eu vou sim fazer isso, só não agora. Ainda assim, não vai demorar
muito para eu começar a fazer as bindings da raymath.

# Meu progresso até agora

Ainda me considero um iniciante, e falta muito para conseguir
fazer todas as bindings para jogos 2D, quem dirá para todo o resto. Porém, já
consegui finalizar coisas como o input via gamepads, teclado e mouse,
praticamente todas as formas geométricas com a excessão de apenas 3, funções de
timing, enfim, tive um avanço significativo.

Além da tradução direta das
funções feitas em C, eu também fiz algumas adaptações para que não ouvesse
atrito/diferença na forma em que você usa algumas funções. Também adicionei um
método alternativo para a criação de triângulos.

A última coisa que
realizei até o momento foi o suporte a músicas, e irei adicionar as demais
funções relacionadas a áudio ainda nessa semana. Essa última função foi também
fruto de uma intuição sobre como poder utilizar structs definidos fora da
raylib.ha, e pode ter certeza de que foi gratificante saber que deu certo.

# _Fin_

Bem, isso é tudo o que eu tenho a comentar por
agora.

Até o próximo post!
