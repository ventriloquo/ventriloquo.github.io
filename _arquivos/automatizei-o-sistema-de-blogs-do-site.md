---
date: '2024-04-29'
thumbnail: "\U0001F527"
title: Automatizei o sistema de blogs do site
description: Agora a criação de posts é semelhante ao Hugo.
type: post
tags:
  - updates
  - web
  - ssg
possui_bloco_de_código: false
---
Bom, isso é uma coisa um pouco difícil de explicar (nem tanto na verdade),
mas ainda assim, é algo bacana de ser comentado.

# Como assim “Automatizei”?

Se você já usou o Hugo framework, então você sabe como
que funciona o sistema de geração de posts para blogs. E pra quem nunca usou,
aqui vai uma explicação simples de como que funciona o processo (supondo que
você já tenha uma pasta do site gerada e um tema configurado)

  1. Você digita <code class="language-plaintext highlighter-rouge">hugo new [pasta dos posts]/[nome do arquivo].md</code>
  1. Você abre o arquivo criado
  1. Você escreve o post usando Mardown
  1. Você digita <code class="language-plaintext highlighter-rouge">hugo</code>
  1. Pronto. O post foi gerado.

A forma como o meu sistema de criação de posts funciona se assemelha um
pouco com esse processo. A diferença fica nas ferramentas usadas e em como é a
estrutura das coisas.

# As ferramentas e estrutura

O que eu estou usando para a geração de
posts (e futuramente o rss deles), é um programa chamado <a href="https://git.codemadness.org/saait">saait</a>. 
A forma como ele funciona lembra um pouco como o Hugo opera, mas a estrutura de pastas é bem mais simples
e o próprio programa não faz muito além de criar uma página com uma indexação
de outras páginas.

Basicamente, o saait serve apenas para criar uma
página que lista outras páginas. Porém, ele possui um sistema de templates, e
isso é o que muda tudo.

Todo e qualquer arquivo que você deseja criar
utilizando as templates, tem que ser previamente montado na pasta de templates.
A pasta de templates contém pastas com o nome dos arquivos que você quer gerar
(por exemplo: atom.xml), dentro delas, você cria 3 arquivos com a mesma
extensão do arquivo (seguindo o exemplo acima: header.xml, footer.xml e
item.xml).

Existem nomes de pastas que são reservadas, como por exemplo
a pasta page, que contém as informações de como que um post deve ser
estruturado.

Outra pasta que faz parte da estruturação da geração feita
pelo saait é a pages. Nela, você coloca seus posts, não tendo a necessidade de
escrever um arquivo html por completo, já que essa parte fica a cargo da
template page.

Ainda dentro dessa pasta é necessária atenção com uma
coisa: cada post precisa de um arquivo de configuração ([nome do arquivo].cfg),
o nome do arquivo de configuração precisa ter o mesmo nome que o arquivo html.
Dentro desse arquivo de configuração você coloca coisas como o nome do arquivo
que será gerado, o título da página, descrição, data de criação e de
modificação.

Uma prática que eu recomendo é a de dar um prefixo numérico
aos dois arquivos (por exemplo: 000-), isso fará com que você consiga ordenar
os posts por ordem numérica.

Outro programa que uso é o <a href="https://git.codemadness.org/smu">smu</a>, esse é bem mais simples de
explicar.

Basicamente, o smu é um programa que gera html a partir de um
arquivo de markup similar ao markdown, sendo assim, é possível usa-lo como
parte da geração dos posts, eliminando a necessidade de escrever html
diretamente.

Por fim, o último programa que uso é o <a href="https://git.codemadness.org/stagit">stagit</a>. 
Neste caso, eu o modifiquei para que a página gerada por ele se integrasse ao meu site, mas a
funcionalidade dele é a mesma.

O stagit é dividido em duas partes:
stagit e stagit-index. O stagit-index é o responsável por gerar a página
inicial com a lista dos repositórios (essa sendo a parte que eu modifiquei para
meu uso) e o stagit sendo o responsável de gerar as páginas de um repositório
específico.

A forma como você usa os dois é bem similar, mas existe uma
diferença. No caso do stagit-index, você digita <code class="language-plaintext highlighter-rouge">stagit-index [repositórios]</code>,
fazendo isso, ele criará um site que irá indexar os
repositórios que você especificou com o comando na pasta atual.

Agora para que os repositórios listados tenham algum conteúdo, é necessário que você
crie pastas com os mesmos nomes dos repositórios que você indexou.

E é aí que o stagit entra em ação. A cada uma das pastas, você deve digitar o
comando <code class="language-plaintext highlighter-rouge">stagit [nome do repositório respectivo]</code>.

Tendo feito essas duas etapas, você terá um site que te deixa visualizar
repositórios.

# Certo, mas onde está a automação nisso?

Agora é que vem a parte boa.

Todo esse processo gera apenas arquivos html, você
deve providenciar um arquivo CSS. Tendo isso feito, você pode scriptar todo o
resto.

A forma que eu faço todo esse processo é a partir de Makefiles e
1 script. As Makefiles ficam em cada pasta onde uma etapa do processo é feita
(a index dos posts, a index do stagit e cada repositório), e o script que eu
fiz serve para criar novos posts e em seguida atualizar o site.

Na criação de um novo post, você deve providenciar um nome para o post e uma
descrição, depois disso o seu editor de texto definido pela variável $EDITOR
será aberto em um arquivo temporário, onde será escrito o post usando o markup
do smu. Ao salvar e sair do arquivo, o post é convertivo para html e posto na
pasta pages, depois disso as Makefiles entram em ação.

Os posts são criados, ordenados e por fim, postos na pasta output, junto com o site git
gerado pelo stagit-index+stagit.

Quando todo esse processo é realizado, os arquivos dentro da pasta output são
movidos para o repositório do meu site e em seguida são postos no repositório
remoto do site, atualizando assim o site com um post novo.

# _Fin_

Enfim, isso é tudo o que eu tenho para falar hoje, agora eu vou preparar a
geração do rss do site.

Até o próximo post!
