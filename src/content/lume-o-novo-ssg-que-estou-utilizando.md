---
date: '2024-08-20'
title: Lume - O novo SSG que estou utilizando
description: 'O Jekyll deu uma experiência ótima, mas o Lume está dando uma incrível.'
thumbnail: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
tags:
  - ssg
  - web
type: post
possui_bloco_de_código: false
---
Pois é, depois de algum tempo batendo a cabeça na parede para tentar ter alguma ideia do que fazer de novo no site, me veio a ideia de migrar para o [Lume](https://lume.land/).

Claro que eu fui primeiro verificar se essa migração seria viável, visto que o Hugo, por exemplo, foi uma ideia que rapidamente se provou como sendo uma idéia não só péssima, como estressante.

Então, eu fui pesquisar a respeito do Lume antes de tentar fazer alguma coisa, e percebi que não só o processo de migração seria extremamente fácil, como também eu teria vantagens que eu não tinha com o Jekyll (além do build step ser bem mais rápido).

# Javascript

Não é segredo para ninguém que eu não sou o maior fã do Javascript, e sempre procuro utilizar o mínimo possível, porém, hoje em dia eu o enxergo como uma ferramenta qualquer que, se usada de forma correta, pode facilitar e muito a minha vida.

Um exemplo disso é o próprio Lume, que é um [`Static Site Generator`](https://en.wikipedia.org/wiki/Static_site_generator) para o [Deno](https://deno.land), um runtime de Javascript.

O uso de Javascript no Lume, junto de sua arquitetura, permitem que ele seja um SSG extremamente customizável e versátil, e ainda assim, por utilizar o Deno, ser rápido.

# LumeCMS

Isso é algo que eu nunca pensei que seria tão simples de configurar. Mas o LumeCMS é.

Para quem não sabe, um [CMS](https://pt.wikipedia.org/wiki/Sistema_de_gerenciamento_de_conte%C3%BAdo) é
> um programa de computador utilizado para criar, editar, publicar e gerenciar conteúdos em plataformas digitais e páginas online pré-estruturadas

O que significa tudo isso? Basicamente que eu tenho uma interface que facilita a criação de posts ou tutoriais nesse site, dentre outras coisas que eu posso configurar também.

A customização desse CMS também me impressionou e muito, mas não tanto quanto o processo de utilizar ele. Se fosse para definir em uma palavra, eu o definiria como "eficiênte".

Não tem um processo longo de instalação nem configuração, o CMS vai fazer parte da codebase do site usando o Lume e a documentação do CMS é tão simples que mesmo eu, que não sou um fanático por Javascript e Webdev, conseguiu configurar o CMS a um ponto agradável em questão de 1 hora.

# Coisas que mudaram no site

Como já mencionei, a transição foi algo simples e direto ao ponto, mas não significa que eu consegui transportar tudo do Jekyll para cá.

Um exemplo de algo que não consegui trazer para aqui foi o Rogue, que era o responsável por geral blocos de código com syntax-highlighting utilizando somente HTML e CSS. O mesmo vale para o gerador de `TOC` (Tabela de Conteúdos).

Como resultado, eu voltei a utilizar o Prism.js, e até o momento, ainda não implementei um `TOC`.

O site no geral teve uma polida por debaixo dos panos, mas nada que fosse extremo a ponto de fazer alguma diferença notável.

# _Fin_

Bem, é isso. Espero que você tenha gostado deste post.

Te vejo no próximo post!
