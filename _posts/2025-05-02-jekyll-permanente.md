---
title: Irei permanecer com o Jekyll.
thumbnail: jekyll-logo.png
description: Depois de ir e voltar diversas vezes entre o meu site construído com Jekyll e o contruído com o Haredoc, eu tomei uma decisão definitiva.
---
Esse post vai ser **beeeeeeemmm** estranho. Pelo menos se você não for a minha
namorada (te amo amor <3).

Bom, nos últimos 3 dias, eu andei passando por uma... _crise de idêntidade?_ Mas
só relacionada ao site. Fiquei alternando entre o meu querido
[Jekyll](https://jekyllrb.com) e o Haredoc, um programa que serve para
gerar documentação a partir de algum código fonte [Hare](https://harelang.org).
Pois é, uma coisa não tem nada haver com a outra.

Mas o Sr. Mamaco aqui basicamente forçou o output do Haredoc (em HTML) para que
o site resultante service de blog. E olha, não é por nada não, mas o resultado
até que ficou bonitinho:

![](/assets/img/hare_blog.jpeg)

> Essas caixinhas foram parte da minha implementação dos "Alerts" do Github.
> Bem simples de se fazer na realidade.

Ele também tinha a característica de ter "multiplas páginas" que eram alteradas
sem recarregar a página. Vulgo, um monte de elemento em CSS que era escondido
até se tornar um `:target`.

Enfim. O maior problema dessa versão do site era o Markup. Ele é
**extremamente** básico, básico ao ponto de que você só consegue fazer 3
coisas:

1. um parágrafo
2. uma lista não ordenada (que nem essa)
3. uma seção pré-formatada (como um bloco de código)

Pronto. Só isso. Acabou.

Absolutamente todo o resto, eu implementei usando JavaShit, e eu nem cheguei a
conseguir colocar textos em **negrito**, _itálico_, ~~riscado~~ nem nada do
gênero. Eu só consegui implantar uma forma de fazer títulos, os alerts e
colocar um syntax-highlighter fulero.

O lance das "páginas dinâmicas" não foi nem de propósito, eu fiz aquilo por
necessidade mesmo, a coisa é feia desse nível.

Sem contar a necessidade de "recompilar" o site sempre que eu fazia uma mudança
e ter que usar o **PYTHON** para abrir um servidor `http` para que eu pudesse
visualizar o site.

> Inclusive, se você não sabia que o python podia fazer isso, basta digitar
> isso aqui no seu terminal:
> ```sh
> python -m http.server
> ```

Por aqui no Jekyll, por outro lado, as coisas que "faltam" podem ser resolvidas
com um simples `plug-in`.

Isso, e claro, a facilidade de criar e editar **QUALQUER** coisa usando o
meu celular.

Cara, eu simplesmente não me entendo, eu literalemente escolhi deliberadamente
uma forma **PIOR** de fazer o que eu já faço com o Jekyll. Por puro capricho
desse pseudo-autismo meu.

# Fiz isso literalmente por conta do meu tédio

Desde a ideia até o primeiro esboço de como eu poderia fazer isso, tudo foi a
mais pura obra do meu tédio.

Eu acho que eu deveria ficar impressionado até, ter a disposição de fazer tudo
isso só por quê ficou entediado? É coisa de ~~doente mental~~ doido.

E agora cá estou eu, de novo, novamente, mais uma vez, escrevendo um post novo
usando essa maravilhosa ferramenta chamada Jekyll. Como eu adoro me distânciar
dessa minha zona de conforto só para depois voltar para ela.

![](/assets/img/ironia.jpg)

# _Fin_

Enfim, vou indo.

Até o próximo post!
