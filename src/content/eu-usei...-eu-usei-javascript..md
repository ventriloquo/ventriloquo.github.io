---
date: '2024-06-11'
thumbnail: "\U0001F480"
title: Eu usei... Eu usei Javascript.
description: Pelo menos não é React.
type: post
tags:
  - programação
  - web
possui_bloco_de_código: false
---
É, é isso mesmo que você leu. Esse blog oficialmente fez uso de Javascript.

Vamos dar 1 minuto de silêncio a este site que acabou de falecer…

Quer saber? Tanto faz.

# Não, eu não tô brincando

Eu realmente começei a usar Javascript nesse blog, o motivo é bem simples na
verdade: Tava foda fazer uma versão desktop e mobile só com html e css.

O que sinceramente não é novidade pra quem tem mais experiência no mundo web.
Existe um “ditado” que eu já ouvi antes mesmo de aprender html:

- HTML é o esqueleto;
- CSS é o corpo;
- Javascript é a vida;

Não acho que isso seja a coisa mais precisa que já ouvi, mas já dá para ter uma
ideia do que ela significa.

# O que estou fazendo com ele?

Coisas extremamente simples na verdade. Eu tenho dois arquivos, um é para a
página principal e o outro é para as páginas dos posts.

O que fica na página principal é o responsável pela responsividade da sidebar
do blog. Antes, eu tinha a sidebar e uma página separada com o mesmo conteúdo,
e com isso, eu escondia a sidebar na versão mobile do site e mostrava um link
para a página separada com o mesmo conteúdo, usando uma classe e css.

Não preciso explicar muito para entender que isso gerava um retrabalho bem
chato sempre que eu fazia alguma modificação na sidebar.

Então o Javascript responsável pela sidebar me livra desse retrabalho. A forma
que ele funciona é bem simples na realidade. Para começar, ele verifica a
resolução da tela de quem tá visitando o site, se a largura dela for menor do
que 600 pixels, então ele irá mostrar a navbar (que agora só é visível na
versão mobile), e nela irá existir um “link” que quando clicado executa uma
função que esconde todos os posts e mostra a sidebar, o mesmo vale para o link
da página inicial, que agora é só um botão para uma outra função que faz o
inverso.

Se a tela tiver uma resolução horizontal maior ou igual a 600 pixels, a versão
de desktop é que será mostrada, com o Javascript escondendo a navbar e
mostrando a sidebar ao lado dos posts.

O segundo arquivo é um que tem como função gerar uma tabela de conteúdos com
links para cada título do post. Isso é uma coisa que eu queria fazer a um tempo
na realidade, mas só fiz isso agora.

# Pera aí, o link do site tá diferente também…

Se você presta atenção na sua barra de navegação, você deve ter percebido que o
endereço do site mudou também. O site agora é hosteado no
<a href="https://neocities.org">Neocities</a>. Não tem muito o que eu falar aqui, o motivo
da mudança é bem básico. Fiz isso por que ele atualiza o site mais rápido do
que o Github.

Tudo o que eu preciso fazer e arrastar os assets do site para a minha dashboard
e pronto, os arquivos do site são atualizados, e em questão de segundos as
mudanças já estão no ar.

O Codeberg também é assim, mas o problema do Codeberg, pelo menos comigo, é que
ele é insuportavelmente lento de acessar na minha rede wi-fi. Eu não faço a
mínima ideia do que seja o problema, eu só sei que é inutilizável.

# _Fin_

Bom, eu não tenho muito o que falar hoje, então vou parar por aqui.

Até o próximo post!
