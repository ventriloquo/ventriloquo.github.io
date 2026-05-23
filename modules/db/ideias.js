"use strict";

export const ideias = [
  {
    title: "Melhorar a <code>markup()</code>",
    stat: 0,
    content: `
A função <code>markup()</code> é a responsável por gerar strings HTML a partir de uma sintaxe para texto, tentando replicar a sintaxe do [[https://orgmode.org][Org Mode]].

No momento, ela é "compatível" com estas sintaxes:

- listas desordenadas ("- ")
- citações ("#+begin_quote" e "#+end_quote")
- exemplos ("#+begin_example" e "#+end_example")
- blocos de código ("#+begin_src" e "#+end_src")
- heading de nível 1 ("* ")
- links ("&#91;&#91;https://google.com&#93;&#91;Google&#93;&#93;")

Estas são as que eu desejo implementar:

- texto em negrito ("*texto*")
- texto itálico ("/texto/")
- texto pré-formatado/código ("=texto=")
`,
  },
  {
    title: "Botão para enviar feedback de um post",
    stat: 2,
    content: `
Ao final de cada post deve haver um botão de feedback com um link para e-mail pre-preenchido com algumas informações sobre o post.

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

Para cada "range" de uma nota, deve haver um emote estilo Twitch para ilustrar a nota.

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
Quando alguém entrar no site, uma página de introdução deve aparecer (isso é bem comúm no Neocities).

A página deve ter uma animação em 3D, um cubo que ao ter o mouse encima se desmancha e faz alguma outra forma geométrica com os dizeres "Bem-vindo!" ou algo do gênero.

Para mobile, essa abertura pode ser uma animação que rode sozinha e mostre a home logo em seguida.
    `,
  },
];
export default ideias;
