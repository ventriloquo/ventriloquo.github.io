"use strict";

export const ideias = [
  {
    title: "Limpar o código",
    stat: 0,
    content: `
O código desse site atualmente é uma bagunça. Tem muita coisa aqui que eu
simplesmente necessito mudar.
- definições/funções que fazem coisas muito parecidas, senão, idênticas
- alguns arquivos são enormes ([[/assets/css/styles.css][o CSS]] já passa das 700 linhas, por exemplo)

Hoje em dia eu uso algumas ferramentas para me ajudar a escrever melhor
([[https://helix-editor.com][Helix]], [[https://deno.com][deno]] lint+fmt,
typescript-language-server e às vezes um prompt em alguma IA), mas eu criei
esse site antes disso.
    `,
  },
  {
    title: "Botão para trocar entre tema claro e escuro",
    stat: 2,
    content: `
Um botão clicável/tocável para alternar entre tema claro e escuro.

Atualmente, é possível alternar entre temas com a tecla <code>T</code>.
    `,
  },
  {
    title: "Melhorar a <code>markup()</code>",
    stat: 2,
    content: `
A função <code>markup()</code> é a responsável por gerar strings HTML a partir
de uma sintaxe para texto, tentando replicar a sintaxe do
[[https://orgmode.org][Org Mode]] (com algumas adições/modificações).

No momento, ela é "compatível" com estas sintaxes:

- listas desordenadas (<code>-&nbsp;</code>)
- citações (<code>&#35;+begin_quote</code> e <code>&#35;+end_quote</code>)
- exemplos (<code>&#35;+begin_example</code> e <code>&#35;+end_example</code>)
- blocos de código (<code>&#35;+begin_src</code> e <code>&#35;+end_src</code>)
- heading de nível 1 (<code>&#42;&nbsp;</code>)
- links (<code>&#91;&#91;https://google.com&#93;&#91;Google&#93;&#93;</code>)
- texto com cores diferentes (<code>&#44;&#44;cor&#58;texto&#44;&#44;</code>)
- texto em negrito (<code>&#42;texto&#42;</code>)
- texto itálico (<code>&#42;&#42;texto&#42;&#42;</code>)
- texto negrito e itálico (<code>&#42;&#42;&#42;texto&#42;&#42;&#42;</code>)
- texto pré-formatado/código (<code>&#39;&#39;texto&#39;&#39;</code>)
- tabelas ([[https://www.markdownguide.org/extended-syntax/#tables][Que nem no Markdown]])
`,
  },
  {
    title: "Botão para enviar feedback de um post",
    stat: 2,
    content: `
Ao final de cada post deve haver um botão de feedback com um link para e-mail
pre-preenchido com algumas informações sobre o post.

O formato do link é o seguinte:
#+begin_src
mailto:email@example.com?subject=ASSUNTO
#+end_src
`,
  },
  {
    title: "Avaliações para os livros",
    stat: 2,
    content: `
Notas para os livros/mangás que eu li, com a nota variando de 0 a 10.

Para cada "range" de uma nota, deve haver um emote estilo Twitch para ilustrar
a nota.

Por exemplo:

#+begin_src
entre 9 e 10 => Senhor cinema
entre 8 e 9  => pogchamp
entre 0 e 1  => It's Joever
#+end_src
    `,
  },
  {
    title: "Uma página de ideias",
    stat: 2,
    content: `
Uma página contendo todas as minhas ideias para o site
`,
  },
  {
    title: "Página de introdução com uma animação 3D",
    stat: 1,
    content: `
Quando alguém entrar no site, uma página de introdução deve aparecer (isso é
bem comúm no Neocities).

A página deve ter uma animação em 3D, um cubo que ao ter o mouse encima se
desmancha e faz alguma outra forma geométrica com os dizeres "Bem-vindo!" ou
algo do gênero.

Para mobile, essa abertura pode ser uma animação que rode sozinha e mostre a
home logo em seguida.
    `,
  },
];
export default ideias;
