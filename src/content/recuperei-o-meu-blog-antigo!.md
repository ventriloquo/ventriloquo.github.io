---
date: '2025-05-06'
title: Recuperei o meu blog antigo!
description: Esse carinha tava guardado em minhas memórias a muito tempo
thumbnail: '☆*: .｡. o(≧▽≦)o .｡.:*☆'
tags:
  - updates
type: post
possui_bloco_de_código: true
---
# Eu simplesmente não acredito nisso!

Longos foram os tempos que eu tive este blog, ô nostalgia!

Este blog surgiu na época em que eu ainda não trabalhava, e durou até +/- o meu 2º mês de serviço. Desde então, eu fiz tantas mudanças e tantas reviravoltas que simplesmente eu achava que essa versão do site tinha virado uma história que só estava presente na minha cabeça e na de mais 3 pessoas:
- Um primo meu
- Um amigo meu
- A minha namorada

Mas, essa parte de ter durado até +/- o meu 2º mês de trabalho foi o que salvou esse carinha, porquê o símeo que está escrevendo aqui, achou na época uma ótima ideia de fazer um backup no computador do trabalho ._.

Mentira, não era backup coisa nenhuma, eu provavelmente estava desenvolvendo a versão feita usando Emacs desse site. Pois é, até isso eu usei. Ainda está no ar (por enquanto), o link é esse [aqui](https://tukain.codeberg.page).

# A maior diferença dele

Esse site usa um [SSG](https://en.wikipedia.org/wiki/Static_site_generator) diferente da versão então mais recente, que usa [Jekyll](https://jekyllrb.com), ele usa o [Lume](https://lume.land)!

O Lume é um SSG feito pelo pessoal do [Deno.land], um runtime Javascript/Typescript, e que em si, é feito usando Typescript. E olha, o bichinho é rápido viu.

Além disso, o Lume usa uma [templating engine](https://en.wikipedia.org/wiki/Template_processor) diferente do Jekyll também, ele usa o [Vento.js](https://vento.js.org) no lugar do [Liquid](https://shopify.github.io/liquid/). As diferenças são mais práticas do que parecem na realidade.

A Liquid é apenas uma templating engine, com parâmetros pré-definidos, enquanto o Vento.js te permite usar JAVASCRIPT para fazer ações customizadas/processar o conteúdo, ou seja, você pode fazer qualquer coisa praticamente.

# MUITOS PLUGINS ÚTEIS

A minha configuração atual é a seguinte:

```js
import lume from "lume/mod.ts";
import feed from "lume/plugins/feed.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import pagefind from "lume/plugins/pagefind.ts";

const site = lume({
  src: "./src",
  dest: "./out",
  server: {
    open: false,
  }
});


site.ignore("README.md", ".git", ".gitignore");

site.script("update", "git add . && git commit -m 'Update' && git push");

site.copy([".woff2", ".png", ".webp", ".jpg", ".ico", ".gif"]);

site.loadAssets([".js", ".json"])

site.use(pagefind())

site.use(minifyHTML())

site.use(lightningCss({ includes: "assets/css/" }))

site.use(feed({
  output: ["/feed.xml", "/feed.json"],
  query: "type=post",
  info: {
    title: "=site.title",
    description: "=site.description",
  },
  items: {
    title: "=title",
    description: "=excerpt",
  },
}));

export default site;

```

Os plugins em si são:
- o creador de feeds rss e json
- o minificador de HTML
- o minificador de CSS
- a search engine do site

Todos eles sendo bem simples de instalar, bastando apenas um `import` e pronto! Sem a necessidade de usar um arquivo separado para listar os plugins que deseja, configurar esses plugins no arquivo de configuração do site e depois rodar um comando que não é o comando que você usa para **GERAR** o site... te soa familiar, Jekyll?

```sh
Gemfile -> _config.yml -> bundle
```

# LumeCMS

E claro, a cereja no bolo, esse carinha tem um freaking [CMS](https://pt.wikipedia.org/wiki/Sistema_de_gerenciamento_de_conte%C3%BAdo)! Que inclusive, é bem simples de se configurar e de utilizar.

Ele basicamente facilita na criação de conteúdo, dando menus, botões e listas que você preenche com as informações da postagem e, claro, escreve o conteúdo em si.

Ele também é configurado da mesma maneira que o site em si, só que em um arquivo diferente, o `_cms.js` (ou `_cms.ts`, caso você esteja usando Typescript).

# Vou fazer algumas mudanças ainda

O que eu planejo fazer é uma espécie de combinação entre esse site e o anterior, feito com Jekyll. 

E uma das coisas que esse carinha precisa, é de um belo carinho do meu CSS atual.

Outra coisa que vou ter que fazer é basicamente re-aprender a usar o Vento.js, e mais importante, vou ter que me lembrar de como navego nessa code-base.

Vou nessa!
