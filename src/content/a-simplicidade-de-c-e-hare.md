---
date: '2024-03-25'
title: A simplicidade de C e Hare
thumbnail: (>'o')> ♥ <('o'<)
description: Nem um pouco parecido com um mostro de 7 cabeças
type: post
tags:
  - programação
possui_bloco_de_código: true
---
Recentemente eu fiz um post sobre os meus estudos com a linguagem de
programação Hare, falei sobre o que eu planejo fazer com esse conhecimento
entre outras coisas. Mas algo que eu não comentei sobre foi o fato de eu estar
estudando Hare em conjunto com C (só mencionei que a sintaxe da Hare é
semelhante a C).

# Por quê estou fazendo isso?

Bom, isso é algo que eu simplesmente esqueci de comentar no meu último post, estou fazendo isso
por 2 motivos principais:

As sintaxes são semelhantes, então posso pegar
um conhecimento novo de uma e levar para outra; Ambas são linguagens low-level,
com foco em alto desempenho e possuem manipulação manual de memória, então
posso aprender esse conceito de forma prática. Claro que existem outros motivos
para eu fazer algo nesse estilo, mas eu não vejo a necessidade de listar todos
eles aqui. Afinal, já é algo “estranho” para um jovem da minha idade ter
interesse em uma “linguagem defasada e insegura” como a C, ao invés de querer
aprender algo como Python, Ruby ou Javascript.

# Existe algum outro motivo?

Óbviamente que sim. Aprender C/Hare é algo como um sonho que
quero, e posso, tornar realidade. É algo que chega perto de uma romantização,
um sentimento que dá vontade de correr atrás, de se esforçar para
alcança-lo.

Quase como você sonha em ter seu próprio carro, viver
sozinho, ou viajar o mundo. Não é um sentimento fácil de por em palavras.

# Como está meu progresso até agora?

Bom, eu iniciei meus estudos a
pouquíssimo tempo, então ainda estou em meus estágios iniciais. Porém já
aprendi alguns conceitos básicos como if statements, which loop, for loop,
switch-case, structs e alguns types também (tanto em C quanto em Hare).

Também comecei a fazer alguns programas extremamente simples só para fixar
esses conceitos na minha cabeça, um exemplo desses programas é um programa que
cria um arquivo vazio usando um nome que o usuário fornece.

# Escrito em C:

```c
int main()
{
  FILE *arq;
  char nome[100];

  printf("Digite o nome do arquivo: ");
  scanf("%s", &nome[0]);

  if (fopen(nome, "r"))
  {
   printf("O arquivo já existe.\n");
  }
  else
  {
   arq = fopen(nome, "w");
  }
}
```

# Escrito em Hare:

```rust
use os;
use bufio;
use strings;

export fn main() void = {
let arquivo = nomeDoArquivo();

 if (os::exists(arquivo)) {
   fmt::println("Arquivo já existe.\n")!;
 } else {
   os::create(arquivo, 384)!;
 };

};

fn nomeDoArquivo() str = {
  fmt::printf("Escreva o nome do arquivo.\n:")!;
  const inputUser = bufio::read_line(os::stdin)! as []u8;
  return strings::fromutf8(inputUser)!;
};
```

# As diferenças

Algo que já para notar nesses exemplos é que o código
em Hare é um pouco maior que o código em C, o motivo disso é que a Hare tem um
foco na manipulação de erros. O que faz com que você tenha não só ter plena
noção do que deve ser feito em caso de algum erro, mas também dizer ao programa
o que ele vai fazer em caso de erro.

A consequência disso é ter um pouco
mais de linhas de código necessárias e também mais símbolos para serem
utilizados durante a escrita do programa.

Apesar disso, eu acho a
sintaxe da Hare mais legível que a C em alguns casos, como por exemplo na
criação e utilização de structs.

# _Fin_

Bem, isso é tudo o que eu tenho a dizer por agora.

Até o próximo post!
