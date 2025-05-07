---
date: '2024-05-09'
thumbnail: (^▽^)
title: Zig
description: A linguagem com o melhor build system que já usei até hoje
type: post
tags:
  - programação
possui_bloco_de_código: true
---
E lá vamos nós, mais um post falando sobre uma linguagem de programação…
Dessa vez eu irei falar sobre a <a href="https://ziglang.org">Zig</a>, para ser mais
preciso, eu quero comentar sobre o build system da Zig.

# Antes, o que é a Zig?

A Zig é uma linguagem de programação com o foco em criação de softwares
robustos, ideais e reutilizáveis. Também é uma linguagem simples (no
sentido literal, ela não é fácil), que não quer ser um obstáculo para o
programador, deixando assim que você foque em debugar o seu programa, não a
linguagem.

Ela é uma linguagem em que o código deve ser explícito. Não existem
pre-processadores, não existem alocações de memória escondidas, não exite um
fluxo de trabalho escondido.

tudo é exposto ao programador, de forma que até mesmo um simples “olá mundo”
passe de um simples

```c
printf("Olá, mundo!\n");
```

para

```zig
std.io.getStdOut().writer().print("Olá, {s}!\n", .{"mundo"});
```

Isso é algo que pode ser útil ou atrapalhar um pouco, acho que só depende de
experiência mesmo.

# O build system da Zig

Comecei a estudar a Zig ontem, e uma coisa que me chamou a atenção foram 2
tipos de comentários, um de documentação <code class="language-plaintext highlighter-rouge">///</code> e um de topo
de documentação <code class="language-plaintext highlighter-rouge">//!</code>.

O que chama a atenção, é que esses comentários não podem ser utilizados em
qualquer lugar, eles devem ser usados, respectivamente, antes de uma definição
e no topo do código-fonte.

Esses comentários são usados na criação de um site estático, esse sendo gerado
com o comando <code class="language-plaintext highlighter-rouge">zig build-exe -femit-docs</code>.

Sim. O compilador da Zig é capaz de gerar um website de documentação, onde a
documentação utilizada pelo site é definida no código-fonte do seu programa.

Só isso já facilita todo o processo de aprendizado para mim, já que eu posso
gerar uma documentação para eu mesmo, contendo as referências que eu utilizei
para fazer algo, instruções e até mesmo o próprio código-fonte para ser
checado.

# Compilando um programa feito em zig usando outro arquivo Zig

Esta é outra coisa que me chamou a atenção, o arquivo <code class="language-plaintext highlighter-rouge">build.zig</code>.

Esse arquivo é o responsável por dizer onde está o código-fonte, onde será
posto os binários, quais as opções de compilação seram utilizadas, quais os
testes que serão executados, e na realidade qualquer coisa que você queira.

O <code class="language-plaintext highlighter-rouge">build.zig</code> é praticamente um Makefile bufado, tendo todo o poder da
linguagem disponível para uso.

# Zls

Que saudades de um LSP 😭

Diferente da <a href="https://harelang.org">Hare</a>, a Zig possui um lsp, o que é
(principalmente na Zig) extremamente útil.

Como eu já mencionei

> Ela é uma linguagem em que o código deve ser explícito. [...]

E exemplifiquei com o <code class="language-plaintext highlighter-rouge">olá, mundo!</code>, a Zig tem uma sintaxe que exige que
todas as funções utilizadas sejam expostas, e digamos que a biblioteca padrão é
bem completa…

tendo isso dito, já dá para pressupor que não dá para você simplesmente dar um
chute as cegas sobre como uma função é chamada e acertar de primeira, não
facilmente pelo menos (não mesmo).

O Zls também tem um formatador e suporte a sintax highlighting, o que sempre é
bem-vindo para mim.

# Compilação lenta no começo, rápida no resto

O compilador da Zig possuí um sistema de cache, ele serve para que você não
tenha que compiladar todo o programa do zero, basicamente apenas as mudaças são
compiladas pelo o que eu entendi (eu posso estar errado, eu ainda não li muito
sobre o compilador).

# Documentação sempre pronta para leitura

A Zig também tem toda a documentação da biblioteca padrão disponível para uso a
qualquer momento, você só precisa executar o comando <code class="language-plaintext highlighter-rouge">zig std</code> e a
documentação será aberta em seu navegador de escolha em um servidor web
hosteado em sua máquina.

Acho que eu não preciso mencionar o quão útil isso é. Não é?

Junto com a pasta de instalação da Zig, vem também o manual de referência da
versão da Zig que você fez download.

# _Fin_

Bem, isso é tudo o que eu tenho a dizer por hoje. Eu tenho um longo caminho
pela frente em relação a estudos.

Até o próximo post!
