---
date: '2024-06-06'
thumbnail: 5%...23%...
title: O que ando fazendo
description: Algumas das coisas que fiz e estou fazendo no momento
type: post
tags:
  - updates
possui_bloco_de_código: false
---
Nada melhor do que fazer um post antes de ir almoçar, né?

Às vezes eu me sinto um esquizofrénico quando vou postar algo por aqui, apesar
desse blog ser algo que deixo sempre em destaque nas minhas redes sociais, não
há nenhuma forma para eu saber a taxa de visitas nele.

O engraçado disso é que às poucas pessoas que eu sei que conhecem ou daram uma
olhada nesse blog, com a excessão de 3, nem sequer falam português, então tudo
o que eles podem julgar é a aparência do site.

Isso não me desmotiva de nenhuma forma em continuar melhorando o blog, muito
pelo contrário. Inclusive, fiz diversas mudanças nas últimas semanas.

# As mudanças no blog

Uma das coisas que eu melhorei significamente foi a listagem de posts, antes a
lista era uma tabela quadrada contendo um <code>&lt;article&gt;</code> por linha, e o título era
um link para o post em si. Funcionou por um tempo, mas além de não ser algo
agradável aos olhos, também era uma experiência ruim para quem fosse visitar o
blog em um celular.

Tendo isso em mente, eu fiz com que a listagem não seja mais uma tabela, ela
simplesmente contém vários <code>&lt;article&gt;</code> em ordem de postagem, e eles por si só
são links para seus posts respectivos. Além disso, o tamanho do texto é maior e
a descrição do post é mostrada logo abaixo do título do post.

Essa não foi a única mudança visível no blog, agora quando você está visitando
o site usando um computador, você verá uma seção ao lado da listagem de posts
contendo informações sobre mim, essa mesma seção também tem uma página própria,
cujo o link só aparece na navbar em um aparelho com tela na vertical, vulgo, um
celular.

# Meu Neovim está quase se tornando uma mini IDE

Outra coisa em que ando trabalho é a configuração do meu Neovim, fiz diversas
mudanças na forma em que eu estruturo ela e também consertei alguns problemas
que ela tinha.

Fiz mudanças na aparência também, com a mais perceptível sendo a mudança do
plugin de dashboard que eu usava (do dashboard.nvim para o alpha.nvim), na
aparência da barra de abas e também na lateral que contém o número de linhas.

Configurei melhor o gitsigns.nvim, não foram muitas mudanças, mas o pouco que
fiz já melhor integrou-no ao meu Neovim.

Resolvi também um pequeno problema que havia com as paletas de cores, com isso,
a troca de paleta de cores e também o uso melhoraram.

# Sobre a Hare

Apesar de não comentar muito sobre ela últimamente, eu ando experimentando
bastante essa linguagem maravilhosa.

Uma das coisas que ando fazendo é melhorando o meu build-system e também fiquei
experimentando um utilitário que vem junto da Hare: o haredoc.

O haredoc é uma ferramenta muito boa, porém ele é tão simples que se eu fosse
fazer um post dedicado eu não teria muito o que falar.

Basicamente, o haredoc é um programa que te possibilita ler a documentação de
um módulo. O interessante é que ele não consegue ler somente os módulos da
biblioteca padrão, ele também consegue ler a documentação de um módulo que você
providencia.

Isso também implica dizer que ele gera documentação, e isso é verdade, ele gera
a documentação em tempo real e visualiza ela em seu terminal.

O interessante é que ele também consegue gerar html, e esse html tem um
template que é basicamente idêntico ao site de documentação da Hare. Porém,
você também pode dizer que não quer o template, e ele só irá gerar o html do
conteúdo, deixando o resto por sua conta.

A forma como a documentação é gerada é similar à zig ou rust, usando
comentários dentro do código-fonte do programa, a diferença fica no fato em
que, ao contrário da zig por exemplo, você não precisa usar um tipo de
comentário diferente, todo e qualquer comentário que o seu programa possua será
parte da documentação. Claro que há regras sobre quais comentários irão
aparecer em certos lugares, mas mesmo assim, a experiência de fazer uma
documentação de um módulo é extremamente fácil.

# Github CLI

Há pouco tempo eu voltei a utilizar o Github, mas uma coisa que eu nunca
utilizei foi o github-cli. Somente esse ano eu comecei a usar chaves ssh, então
não é uma surpresa que eu também não usava o github-cli.

E olha… eu tava perdendo uma conveniência que sinceramente me faz me sentir
burro por não ter usado no passado.

Eu tenho uma mentalidade de que quanto menos eu precisar usar um navegador ou
uma interface gráfica, melhor. Sim isso é irônico vindo de alguém que tem um
blog. Mas é também por isso que eu tenho um feed RSS integrado a esse blog.

Tendo essa mentalidade, fica claro o quanto eu gostei de poder gerenciar o meu
perfil do Github sem precisar abrir o navegador. Ele também é fácil de se
utilizar, o que me surpreendeu um pouco, já que estamos falando de uma
ferramenta que não só interage com repositórios git, mas também com o
ecossistema do Github.

# _Fin_

Bom, isso é tudo o que eu tenho a falar por agora, mas acho que consegui fazer
um post bacana.

Até o próximo post!
