use posts;

// # Sobre mim
//
// Não sou um programador, mas gosto desse mundo.
//
// Atualmente, estou fazendo bindings para a biblioteca de jogos Raylib
// na linguagem de programação Hare.
//
// # Redes Sociais
//
// https://github.com/ventriloquo
//
// https://bandcamp.com/ventriloquo
export type sobre_mim = struct {
	short_description: str,
	social_media: str,
};

// # Sobre o site
//
// Este site, como você já percebeu, não é um site "padrão".
// Ele é montado utilizando a ferramenta de documentação
// da linguagem de programação Hare.
//
// # Organização das páginas
//
// As "páginas comuns" como esta que você está vendo agora, serão construídas
// com base em structs. Nesses structs serão contidas algumas informações sobre
// a página em questão, funcionando como uma descrição breve do que você
// encontrará na página.
//
// Exemplo:
//
// 	type projetos = struct {
// 		games: str,
// 		hobbies: str,
// 	};
//
// O conteúdo que compõe esses structs fará o uso da língua inglesa de forma
// majoritária, devido à uma limitação na linguagem de programação Hare. Fazendo
// com que não seja possível utilizar caracteres UTF-8 em locais que não
// são comentários.
//
// # Como os posts são organizados
//
// Os posts neste site são funções, os tópicos (tags) são parte
// do tipo (type) da função, geralmente, serão tuples (mais de um tipo).
//
// Eles são organizados em ordem cronológica e decrescendente, do mais antigo
// ao mais recente.
//
// Exemplo:
//
// 	fn post_2001_09_11() (evento_historico, importante);
//
// # Tags
//
// Por mais que as tags sejam representadas como tipos nos posts, elas ficarão
// listadas como variáveis globais, dentro de cada uma, terá uma lista com os
// links que referênciam os posts que utilizaram tais tags.
//
// Exemplo:
//
// 	const importante;
//
// Conteria:
//
// 	- post_2001_09_11
export type sobre_o_site = struct {
	site: regras,
};

// Regras que este site seguirá:
//
// - Não será utilizado JavaScript;
// - O site inteiro deve ser contido em 1 arquivo html (o código-fonte pode ter mais de um arquivo);
// - Não serão usadas imagens, nunca;
// - Serão mostrados apenas 80 caracteres por linha no máximo.
// - O site jamais deverá deixar de ser open-source.
export type regras = struct {
	javascript: never,
	file_limit: int,
	images: never,
	character_limit: int,
	open_source: !void,
};


