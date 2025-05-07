---
date: '2024-05-05'
thumbnail: (/◔ ◡ ◔)/
title: Neatvi
description: 'Um editor de texto extremamente simples, mas extensível.'
type: post
tags:
  - editor
possui_bloco_de_código: false
---
Bom, aqui vem mais um post falando sobre um editor de texto. Mas desta vez o
editor em questão não é um clone do Vim, nem do Kakoune, é um clone do Vi,
aquele editor de texto que quase ninguém usa por livre e espontânea vontade.

# Então ele é um Vim piorado?

Eu não diria que ele é um Vim piorado, na verdade ele é um Vi melhorado, porém,
ao contrário do Vim, o Neatvi continua sendo um Vi, as únicas diferenças
marcantes entre o Neatvi e o Vi original são:

1. Syntax highlighting
1. Um script externo

Com a excessão dessas duas diferenças claras, não tem muita coisa que distingue
o Neatvi do Vi.

# Como é usar o Neatvi?

O Neatvi tem um workflow praticamente idêntico ao Vi, ou seja, em comparação
com o Vim, seria como você usar o bloco de notas de um lado e o VSCode do
outro. Porém, isso não quer dizer que o Neatvi não tem suas qualidades também.

Assim como as ferramentas suckless, como por exemplo o
<a href="http://st.suckless.org">st</a> (o terminal que eu uso), quaisquer modificações do
comportamento do próprio editor devem ser feitas editando o código fonte do
terminal. E isso inclui adicionar uma syntax highlighting para alguma linguagem
que o Neatvi já não suporte.

De primeira, isso pode soar um pouco intimidador, mas quando você tira um pouco
do seu tempo para fazer as modificações que você precisa, percebe que não é tão
complicado assim. Claro que a minha opinião é enviesada, e também estou
assumindo que você tenha experiência em modificar configurações de programas a
partir de arquivos de texto.

Apesar desta forma de adicionar um a syntax highlighting não ser tão fácil
quanto adicionar uma no Helix ou Neovim, ela é feita de uma forma que te
permite colorir qualquer linguagem que você queira. Lógico que exige mais
trabalho, e também tem suas limitações, mas isso também se aplica a ferramentas
suckless no geral. Você não usa o dwm porquê ele é mais fácil de usar do que o
i3, você usa ele porque em questões de customizações e formas de trabalhar, o
limite é apenas o seu conhecimento em C e em LibX11.

Mas o Neatvi tem mais uma coisa que faz com que ele não seja totalmente
dependente de modificações no código fonte.

# O neatvi.sh

Esse carinha é um shell script que o Neatvi executa quanto você aperta <code>q</code>, a
mesma tecla usada para criação de macros no Vim/Neovim. A diferença é que após
você apertar essa tecla, qualquer outra tecla que for apertada será passada
como um argumento para o neatvi.sh, e esse shell script deve ser criado pelo
próprio usuário.

Sendo assim, você pode fazer por exemplo, uma mini integração entre o Neatvi e
o Git, uma forma de visualizar os arquivos do diretório atual, enfim, assim
como modificações no próprio código-fonte, você tem uma liberdade absurda com o
que você pode fazer.

Eu por exemplo, fiz uma integração com o git, podendo inicializar um
repositório, adicionar arquivos a esse repositório, realizar commits,
visualizar os commits feitos em um arquivo, adicionar/modificar o remote do
repositório e até as diferenças entre o repositório local e o remoto.

# _Fin_

Enfim, é isso o que eu tenho para falar por agora.

Se eu continuar assim, esse site vai deixar de ser um blog e vai se tornar um
site de review de editores de texto.

Até o próximo post!
