---
date: '2024-08-01'
title: Como usar o Jekyll
description: Um guia rápido para utilizar o Jekyll
thumbnail: Jekyll > Hugo
draft: false
type: tutorial
tags:
  - web
  - ssg
possui_bloco_de_código: true
---
Olá! Tudo bem com você? Espero que sim.
Como você já deve saber, meu nome é Diogo, e hoje eu estou aqui para te mostrar
como criar um site utilizando o Jekyll!

# Estrutura básica

Para começar, precisamos construir a estrutura de arquivos do Jekyll, você pode
fazer ela manualmente (utilizando apenas as partes que você vai precisar) ou
utilizando o comando `jekyll new [nome do site]`.

Eu vou seguir a rota de criar tudo manualmente, afinal foi assim que eu fiz com
este site.

Irei assumir que você criou uma pasta para o seu website, digamos que ela se
chame `meu_site`, dentro dela serão necessárias mais 2 pastas e 1 arquivo.

As pastas são a `_includes` e `_layouts`, e o arquivo é o `_config.yml`.

Tendo tudo isso criado, vamos editar o arquivo `_config.yml`

# \_config.yml

O arquivo `_config.yml` é o arquivo de configuração do site inteiro, o conceito
pode ser um pouco estranho quando se trata de websites, mas você se acostuma
rápido.

Nele, você define diversas variáveis que podem ser acessadas a qualquer momento
com uma de-referência (não é esse o termo, eu simplesmente esqueci o correto),
como por exemplo:

```liquid
{{ site.lang }} => pt-br
```

Tendo isso em mente, vamos adicionar nossas variáveis!

Para começar, vamos colocar o título e o autor do nosso site, digamos que o
título seja `jorjingameplays` e o autor seja `zacarias`.

```yaml
title: "jorjingameplays"
author: "zacarias"
```

Ah! Claro. Não podemos esquecer de pôr a linguagem do nosso website!

```yaml
title: "jorjingameplays"
author: "zacarias"
lang: "pt-br"
```

Hmmm, que tal uma descrição?

```yaml
title: "jorjingameplays"
author: "zacarias"
description: "Um site muito maneiro"
lang: "pt-br"
```

Ok, isso já está bom, já podemos sair do arquivo \_config.yml.

Tudo o que fizemos foi preparar algumas das variáveis que serão usadas no
website inteiro, como por exemplo a variável `lang`, que foi onde colocamos a
língua em que nosso website é escrito.

# \_includes

Agora vamos dar foco ao diretório `_includes`. Nele, você vai criar arquivos
com snippets de código que vão ser usados em várias páginas diferentes pelo
site.

Um exemplo disso é uma navbar, um exemplo disso seria esse arquivo aqui:

```html
<!-- _includes/navbar.html -->
<header>
  <nav>
    <ul>
      <li>
        <a href="/">Início</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="/pages/blog.html">Blog</a>
      </li>
      <li>
        <a href="/pages/tutorials.html">Tutoriais</a>
      </li>
      <li>
        <a href="/rss.xml">Feed</a>
      </li>
    </ul>
  </nav>
</header>
```

Eu pessoalmente uso isso para o topo do documento html (vulgo, todo aquele
boiler-plate que você tem que escrever), e para a footer também.

Além disso, eu também tenho 3 tipos de navbars, que por enquanto não são tão
diferentes umas das outras, mas em brece serão.

Com isso, a estrutura do diretório `_includes` fica assim no meu site:

```bash
_includes/
├── footer.html
├── head.html
├── navbar.html
├── navbar_post.html
└── navbar_tutorial.html
```

O que você vai colocar nesta pasta depende exclusivamente de você.

# \_layouts

Agora vamos para uma das partes mais importantes do Jekyll, o diretório
`_layouts`.

Basicamente, tudo o que você vai colocar aqui serão templates que podem ser
reutilizadas por diversas páginas diferentes.

Como exemplo, eu vou mostrar como você poderia usar isso em combinação com o
diretório `_includes`.

Digamos que o site `jorjingameplays` tem 3 páginas, e todas elas vão ter uma
navbar e também uma footer idênticas, além disso, a estrutura básica dessas
páginas são praticamente as mesmas.

A melhor forma de lidar com isso é criando um layout (template).

Assumindo que você tenha criado um arquivo html para o boiler-plate, a navbar e 
outro para a footer, podemos criar um arquivo html no diretório `_layouts`, 
vamos chamar ele de... `default.html` (wow, que original 🤡).

Dentro dele, vamos incluir os outros arquivos que criamos no diretório
`_includes`

```liquid
{% include boiler_plate.html %}
{% include navbar.html %}
{% include footer.html %}
```

Agora digamos que... Em cada página, há o título da página escrito nela
acompanhado de uma descrição logo abaixo.

```liquid
{% include boiler_plate.html %}
{% include navbar.html %}

    <hgroup>
        <h1>{{ page.title }}</h1>
        <p>{{ page.description }}</p>
    </hgroup>

    <br>

    {{ content }}

{% include footer.html %}
```

> Mas espera aí, o que são essas coisas nas chaves duplas?

Lembra quando eu falei sobre acessar variáveis no `_config.yml`?

Então, todo arquivo que tiver `front-matter` consegue armazenar e utilizar
variáveis contidas na `front-matter`.

> Ô meu aliado, o que, em nome de tudo que é ambençoado por Sérgio Sacani, é
> "front-matter"?

# front-matter

Essa belezura é onde ficam as variáveis locais (as variáveis da página local),
elas irão se comportar da mesma forma que as variáveis no `_config.yml`, com a
diferença que ao invés de usar `site.etc`, você vai usar `page.etc`.

Irão existir momentos em que você ter usar o arquivo `_config.yml`, e momentos
em que o certo será a `front-matter`.

A `front-matter` fica localizada no topo do arquivo, e lá você declara as
variáveis locais utilizando mesma sintaxe do `_config.yml`.

No nosso layout chamado `default.html`, utilizamos duas variáveis locais, mas
não temos nenhum arquivo com `front-matter` definindo elas, então vamos criar
um!

Na raíz da pasta do site, vamos criar um arquivo que vamos chamar de
`index.md`. O motivo de usar a extensão `.md` é bem simples, o Jekyll converte
Markdown (.md) para HTML automagicamente, então não precisamos lidar com HTML
com tanta frequência.

Dentro desse arquivo, vamos adicionar a seguinte `front-matter` no topo dele:

```yaml
---
layout: default
title: "Página Inicial"
description: "Meu primeiro site utilizando Jekyll!"
---
```

Depois disso, é só escrever qualquer coisa que você quiser abaixo da
`front-matter`

```yaml
---
layout: default
title: "Página Inicial"
description: "Meu primeiro site utilizando Jekyll!"
---

Oiê :3

Meu nome é Jorjingameplay420_69, tudo bom com você?
```

Você pode repetir isso para as outras páginas também.

# Chegou a hora de por isso em prática

Agora que você já fez a estrutura dos arquivos, já fez blocos reutilizáveis de
código (`_includes`) e já fez também um layout padrão, tudo o que você precisa
fazer agora é abrir o seu terminal, e digitar:

```bash
jekyll build
```

Se eu lembrei de te contar tudo o que você precisava fazer e você fez tudo o
que eu te disse, você vai ter no final disso tudo um diretório chamado `_site`
contendo o produto final do seu trabalho.

Você vai ficar bastante tempo criando layout's e include's, mas no final, você
vai conseguir criar novas páginas cada vez mais rápido, sem contar que quando
você edita um include, por exemplo, todos os arquivos que usam este include vão
ser modificados também. Evitando assim um possível retrabalho que levaria de
alguns minutos a algumas horas ou quem sabe até mesmo dias.

# Conclusão

Com toda certeza eu não te dei uma visão geral completa do que é o Jekyll, até
porquê essa não é a minha intenção, só quero te dar um pequeno empurrão para
conhecer esta ferramenta incrível.

Este website inclusive, é construído inteiramente utilizando o Jekyll. Fazendo
uso de partes mais programáticas do Jekyll e outras mais avançadas (nem tanto
na verdade). Tanto que eu não faço uso de nenhuma linha de Javascript, só uso
coisas que são nativas do Jekyll, e também faço 30 pactos com o cara da
biqueira embaixo da terra para fazer um CSS que faz parecer que eu tô usando
React ou TailwindCSS.

Sinta-se livre para examinar o "[código-fonte](https://github.com/tukainpng/tukainpng.github.io)"
deste website, quem sabe você aprenda algo de verdade vendo como que se usa o
Jekyll na prática.

Logicamente, eu recomendo fortemente que você [![Image](/assets/media/5ea23c05e100e5031eca4abfca246e35.jpg)](https://jekyllrb.com/docs/)
(pesquise no Google o que isso significa 😁)

Enfim, eu vou dar o fora agora, qualquer erro que você perceba neste artigo ou
qualquer ideia que você tenha para melhorar ele, por favor, abra uma issue no
Github comentando sobre.

Espero que eu tenha sido útil para você, e até a próxima!
