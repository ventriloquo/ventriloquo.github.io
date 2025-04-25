// # Usando a Hare para criar (e gerenciar) um blog
//
// Aqui vai mais uma prova de que eu preciso ser estudado por algum psicólogo.
// Bom, deixa eu primeiro explicar o que é a "Hare":
// A Hare é uma linguagem de programação low-level, com o foco em
// desenvolvimento de sistemas e error-handling.
//
// Tendo isso dito, como cacetaralhos eu estou criando um site com algo que não
// tem nada haver com sites?!
//
// Na realidade é bem simples (nem tanto assim, mas pra um nerdola, até que
// sim). Na Hare, existe uma ferramenta para que você gere documentação para as
// funções exportadas de um programa ou biblioteca. Os comentários acima dessas
// funções são utilizados para gerar tal documentação.
//
// Porém, essa ferramenta te permite gerar uma documentação em 'HTML` e,
// inclusive, gerar um HTML sem nenhuma template. Permitindo assim que você crie
// esta template, e é aí que eu tiro proveito para criar essa espécie de blog.
//
// # Mais do que só isso,
//
// Eu também tiro proveito da própria sintaxe da Hare!
//
// A Hare é uma linguagem de tipagem estática, ou seja, os tipos dos dados ou
// tipos retornados por alguma função, devem ser ditos pelo programador. E a
// hare tem diversos tipos e formas de declarar e utilizar esses tipos.
//
// E uma dessas formas de utilizar tipos são as "tuples".
//
// Resumindo, imagine as tuples como um conjunto de tipos, por exemplo: Digamos
// que uma função X tenha como resultado o nome e a idade de alguém, você
// poderia usar um struct (estrutura) que possui os tipos para Strings e
// Intergers, tipo assim:
//
//	type dados_usuario = struct {
//		nome: str,
//		idade: i32,
//	};
//
//	export fn usuario() dados_usuario = {...};
//
// Mas você também poderia usar uma Tuple contendo os dois, e ficaria
// +/- assim:
//
// 	export fn usuario() (str, i32) = {...};
//
// Tendo isso em mente, eu aproveitei a existência das tuples para pôr "tags"
// nos posts!
//
// # E para finalizar...
//
// Tudo pode ser "automatizado" usando uma simples Makefile!
//
//	blog:
//		@haredoc -t -Fhtml hare_blog > temp
//		@cat head.html > index.html
//		@cat temp >> index.html
//		@rm temp
//
// Isso mesmo, toda a página é "compilada" com 4 comandos!
export fn post_21_04_2025() (etc, web, programacao);
