// # Retornei o desenvolvimento das minhas bindings¹ da Raylib².
//
// Depois de ter basicamente abandonado esse projeto por 8 meses,
// eu finalmente voltei a desenvolver ela.
//
// Esse projeto serve para os meus estudos de programação (eu ainda não sei programar),
// sendo assim, todo o processo de desenvolvimento dessas bindings está sendo manual.
//
// Eu sei muito bem que essa não é nem de longe a forma minimamente eficiente, mas
// eu não estou querendo ser eficiente nesse processo, não agora pelo menos, eu quero
// adquirir experiência com a Hare³ e aprender as diferenças dela com a C, e deixar
// essas informações queimadas no meu cérebro.
//
// Tendo isso em vista, no momento, eu já consegui traduzir os dois primeiros exemplos
// que são mostrados no site da própria Raylib. O segundo exemplo foi um bom refresco
// para mim. Já fazia muito tempo desde a última vez que eu usei a Hare, e eu não lembrava
// de basicamente nada sobre como eu usava certas coisas.
//
// O segundo exemplo da Raylib faz o uso de enums, o que eu nunca cheguei a usar no tempo
// em que eu estava estudando a Hare pela primeira vez. Então, lá fui eu para a página de
// tutorial⁴ da Hare buscar por algum uso de enum.
//
// O que descobri é que para usar um enum, você precisa explicitamente usar o nome do enum
// em si e acessar a propriedade dele da mesma forma que é feita quando você importa um
// módulo. Da seguinte forma:
//
//	use raylib::*;
//
//	type game_screen = enum {
//		LOGO = 0,
//		TITLE,
//		GAMEPLAY,
//		ENDING,
//	};
//
//	export fn main() int = {
//	// Código...
//		let current_screen = game_screen::LOGO;
//	// Código...
//	};
//
// Para fazer com que a variável current_screen represente o estado LOGO, é
// necessário acessar o enum da mesma forma que o módulo é acessado no topo.
//
// Ao decorrer do código para o segundo exemplo, são utilizados outros enums e
// também são utilizados switch-cases que fazem uso dos mesmos.
//
// Foi um bom execício.
//
// # Referências
//
// 1:
//
// https://github.com/ventriloquo/hare_raylib/
//
// 2:
//
// https://raylib.com/
//
// 3:
//
// https://harelang.org/
//
// 4:
//
// https://harelang.org/tutorials/introduction
export fn post_2025_05_25() (hare, raylib);
