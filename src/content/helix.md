---
date: '2024-03-23'
thumbnail: (╯°□°）╯︵ ┻━┻
title: Helix
description: Algo melhor que o Neovim?!
type: post
tags:
  - editor
  - programação
  - linux
possui_bloco_de_código: false
---
# Só pode tá de sacanagem.

Não é possível isso. Logo depois de ter feito uma configuração do Neovim, e ter
feito um post inteiro sobre isso, me aparece um tal de Helix. E ele é
praticamente tudo o que eu gostei do Neovim, só que sem precisar sair caçando
plugins, muito menos ter que configurar eles.

# Deixa eu explicar isso direito.

O Helix, assim como o Neovim, é um editor de código modal, no estilo do Vim,
a diferença é que o Helix toma como base a movimentação do Kakoune. Você não
precisa conhecer o Kakoune, tudo o que você precisa saber é que a movimentação
do Kakoune é levemente diferente do Vim e é também mais ergonômica.

Dito isso, o Helix já começa tendo uma boa vantagem em questão de uso, mas isso
não é tudo: O miserável tem a pachorra de ter tudo o que eu implementei via
plugins no Neovim, **NATIVAMENTE**.

Não só isso como todas as coisas que eu nem cheguei a implementar na minha
configuração do Neovim, **JÁ FUNCIONAM SEM NENHUMA CONFIGURAÇÃO**

Coisas como:

- Suporte ao Treesitter
- Integração com LSP’s
- Integração com Git

São coisas nativas, já pré-configuradas e que não precisam de customização
mínima para nenhuma.

Tudo o que eu precisei fazer para que essas coisas funcionassem foi instalar os
programas. Se eu não quisesse, não teria a necessidade de customizar nada,
porque tudo funciona sozinho, eu só preciso usar sem nem me preocupar com isso.
Isso me lembra até mesmo o VSCode um pouco, você só precisa instalar ele e usar,
acabou.

E mesmo com tudo isso, o Helix ainda é extremamente rápido. Coisa de
milisegundos para inicializar, mesmo com uma configuração relativamente
extensa como a minha.

Mas a verdade, é que nem o VSCode é tão simples, você ainda vai ter que
instalar um plugin eventualmente, e claro, você também terá de que sacrificar
toda sua memória ram e bateria.

# Tudo o que eu preciso é nativo, mas e se eu quiser algo mais?

Bem, é aqui que mora a maior desvantagem do Helix: Ele não tem suporte a
plugins. É, isso é meio chato, você só pode fazer aquilo que é nativo e que
pode ser usado. Ainda assim não é um problema para mim, porque com a excessão
de customizações da aparência da interface mais avançadas, todo o resto são
coisas que já vêm acompanhadas do Helix.

Até mesmo temas, eu não sei exatamente o porquê, mas tem mais de
100 paletas de cores para escolher, olha, eu não sei você, mas eu tô muito mais
que satisfeito com esse catálogo nativo.

# A movimentação

Olha, eu gosto e muito da movimentação do Vim, mas cara, a movimentação do
Helix tá em outro patamar na minha opinião. Não me refiro a eficiência mas sim
ergonomia, e até em questão de lembrar dos comandos.

Eu simplesmente estou amando a forma de se movimentar no Helix, é uma junção
de memória muscular do Vim com algo que é simplesmente mais intuitivo, eu não
tenho palavras para descrever o quão bom é isso.

# Deixa eu dar um exemplo melhor

No Vim, para deletar uma linha inteira, eu preciso estar no modo
normal e digitar dd, o primeiro “d” significa “delete”, ok, tudo bem até aqui,
mas me fala uma coisa: O que caralhos é o segundo “d”?

Eu sei desse comando por pura memória muscular, não porquê é intuitívo. Ela não
segue nem o padrão dos comandos de deletar algo como o dw, que deleta a próxima
palavra (Delete Word) nem a de deletar uma paravra que está atrás do cursor, db
(Delete Backwords).

Enquanto isso, no Helix, você tem um comando que seleciona uma linha, x, e um
que deleta o que tá selecionado, d, e é isso. Não tem segredo, você só aperta
xd e pronto, você deletou uma linha.

Esse não é o único exemplo de um comando ter teclas de ação ruins no Vim, ainda
tem coisas como o u que desfaz a última modificação, e para refazer você aperta
Ctrl-r, quem foi que teve essa ideia? No Helix, o u faz a mesma coisa, mas para refazer
você aperta Shift-u, que é muito melhor pelo simples motivo de você assimilar a
tecla u como a tecla de desfazer/refazer. Ela segue a mesma lógica do clássico
Ctrl-z e Ctrl-Shift-z, e ainda assim é mais natural e ergonômica do que a
implementação do Vim.

# Vou migrar do Neovim para o Helix?

Eu não sei dizer se vou com toda a certeza deixar de usar o Neovim, mas o que eu posso
dizer é que a chance é extremamente alta. O Helix tá sendo o que o Neovim foi
pra mim em relação ao Vim, mas para fins de simplicidade, eu vou parafrasear a
mim mesmo aqui:

> Em 3 horas eu cheguei em uma configuração
> que é extremamente rápida, confortável, modular, e claro, agradável aos
> olhos [...]

A diferença aqui é que eu não passei 3 horas configurando, eu passei 15 minutos.

# _Fin_
Bem, é isso, te vejo no próximo post!
