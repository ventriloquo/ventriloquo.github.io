// # Adicionei uma espécie de "syntax-highlighting" ao blog
//
// Um ponto fraco que eu não comentei no meu post anterior ([[post_2025_04_21]])
// é que os blocos de códigos (que são chamados de "exemplos" de acordo com a
// sintáxe do Haredoc) não possuem colorização.
//
// O que para mim, um ricer amador, é quase que um crime (eita frecura).
//
// Então eu tomei a decisão lógica de pedir um snippet de código ao ChatGPT para
// que eu pudesse modificar elementos do HTML usando JavaScript.
//
// É.
//
// Bom, na verdade, eu só queria uma coisa para fazer com que os parágrafos que
// se iniciassem com uma hashtag ficassem com um estilo diferente e que a tal
// hashtag fosse escondida. O resto eu fiz na gambiarra usando esse snippet como
// base.
//
// Isso em si é uma coisa extremamente básica e que não tem aplicação prática
// alguma fora do contexto de escrever em Hare... o que é a intenção desse blog,
// não é verdade?
//
// Eu posso dizer que eu tive um pouco de sorte da Hare ter uma sintaxe com
// poucas coisas que se interligam no sentido gramatical, porque dessa forma eu
// não deixo o "int" da função "print" verde porque eu queria deixar o tipo
// "int" verde. O que eu tenho certeza que seria o caso de eu fazer esse mesmo
// blog só que focado em C.
//
// Maassss pelo menos tá funcionando tranquilo. Por enquanto.
//
// 	use raylib;
//
// 	def TITLE = "Window";
// 	def SCREEN_RESOLUTION = Vector2 {
// 		x = 1280.0,
// 		y = 720.0,
// 	}
//
// 	export fn main() void = {
// 		init_window(SCREEN_RESOLUTION.x: int, SCREEN_RESOLUTION.y: int, TITLE);
// 		defer close_window();
// 		for (!window_should_close()) {
// 			set_window_title(TITLE);
// 			begin_drawing();
// 			defer end_drawing();
// 			clear_background(GRUV_BG_BLACK);
// 		};
// 	};
// https://github.com/ventriloquo/hare_raylib
export fn post_2025_04_22() (updates, web, programacao);
