---
date: '2025-05-08'
title: Deno Deploy
description: 'Um Vercel da vida, só que com um dinossauro'
thumbnail: "\U0001F996⬆️☁️"
tags:
  - updates
  - web
  - programação
type: post
possui_bloco_de_código: false
---
E lá vamos nois!

Já estou (de novo) no meu estado de pseudo-hiperfoco, um estado que depois que eu descubro uma forma nova de fazer algo que eu **já faço** eu fico biru-teteia das ideias e só paro quando fico entediado!

A bola da vez é o [Deno Deploy](https://deno.com/deploy), um serviço de [_serverless deployment_](https://pt.wikipedia.org/wiki/Serverless) do pessoal do Deno, o mesmo pessoal que faz o SSG que eu uso, o Lume!

A parte legal disso tudo é que a forma que você trabalha com os projetos do Deno Deploy é a partir de 2 formas:

1. Um repositório no Github;
2. Um [playground](https://docs.deno.com/deploy/manual/playgrounds/).

No caso de você usar um repositório pré-existente, o que você vai precisar fazer é configurar um [_workflow_](https://docs.github.com/pt/actions/writing-workflows) que faz todo o processo de _deployment_ e _upload_ para o Deno Deploy, o que é mais fácil do que parece na verdade, o próprio Deno Deploy tem uma interface para facilitar a criação desse _workflow_ e na documentação tem um [exemplo disponível](https://docs.deno.com/runtime/reference/continuous_integration/).

O resultado final é um projeto seu no ar, hosteado pelo Deno Deploy!

Eu mesmo acabei de fazer o meu primeiro deploy do [LumeCMS](https://lume.land/cms/) no Deno Deploy! O que me permite fazer a criação e a edição do conteúdo do meu site usando um painel de administração!

Eu acho muito bacana quando as ferramentas que eu uso formam um ecosistema fechadinho e bem polído.

Os _playgrounds_ são uma boa forma de experimentar com o Javascript/[Typescript](https://www.typescriptlang.org/) e até mesmo com o famoso [React](https://react.dev). Inclusive, eu tenho [um projeto no ar](https://jsx-tukain.deno.dev) em que eu uso o React com `JSX` e [PicoCSS](https://picocss.com) para fazer um blog usando apenas 1 arquivo Javascript.

Não é nada sério e também nada prático, principalmente levando em conta que o Lume e o Jekyll existem. Mas, ainda assim ele é uma boa forma de aprender a usar essa ferramenta vida diretamente do ~~capeta~~ mano Zuckerberg.

Enfim, isso é tudo o que eu tenho a dizer por enquanto, fui!
