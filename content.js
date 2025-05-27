const site_title = "Tukain's Website"

let posts = [
    {
	title: "Novamente usando o Javascript para gerar meu site",
	content:`
Eu fiquei muito em dúvida sobre o que eu poderia fazer para continuar o desenvolvimento desse site.

Testei o meu site feito com o Jekyll, mas não deu aquele %i estalo i%, então foi à procura de algum outro SSG, como o <a href="https://gohugo.io/">Hugo</a> por exemplo. Mas cara... que dor de cabeça que foi tentar traduzir um site feito usando Jekyll para um site em Hugo. É tanta coisinha pequena diferente que simplesmente não valia o esforço.

No lugar, decidi revitalizar o meu antigo site que era auto-suficiente. Um site que funciona praticamente como uma espécie de SSG, mas que não depende de nenhum processo de %[build]% antes de poder ir ao ar.

Eu havia criado esse site para ser o meu projetinho do Neocities. Um site onde eu editaria tudo usando o próprio Neocities, e que não precisaria de repositórios Git, nem nada do gênero. Simplesmente precisaria fazer login na minha conta do Neocities e já poderia escrever posts.

Fiz uma mudança considerável no código-fonte original, dando uma boa polida nele. Acho que isso faz parte de progredir nos estudos.

Apesar disso, o código-fonte responsável por gerar o site é bem pequeno. Tendo umas 60 linhas, no máximo.
`
    },
    {
	title: "Retornei ao desenvolvimento das minhas bindings da Raylib.",
	content: `
Depois de ter basicamente abandonado esse projeto por 8 meses, eu finalmente voltei a desenvolver ele.

Esse projeto serve para os meus estudos de programação (eu ainda não sei programar), sendo assim, todo o processo de desenvolvimento dessas bindings está sendo manual.

Eu sei muito bem que essa não é nem de longe a forma minimamente eficiente, mas eu não estou querendo ser eficiente nesse processo, não agora pelo menos, eu quero adquirir experiência com a Hare e aprender as diferenças dela com a C, e deixar essas informações queimadas no meu cérebro.

Tendo isso em vista, no momento, eu já consegui traduzir os dois primeiros exemplos que são mostrados no site da própria Raylib. O segundo exemplo foi um bom refresco para mim. Já fazia muito tempo desde a última vez que eu usei a Hare, e eu não lembrava de basicamente nada sobre como eu usava certas coisas.

O segundo exemplo da Raylib faz o uso de enums, o que eu nunca cheguei a usar no tempo em que eu estava estudando a Hare pela primeira vez. Então, lá fui eu para a página de tutorial da Hare buscar por algum uso de enum.

O que descobri é que para usar um enum, você precisa explicitamente usar o nome do enum em si e acessar a propriedade dele quase que da mesma forma que é feita quando você importa um módulo. Da seguinte forma:

%|
use raylib::*;

type game_screen = enum {
        LOGO = 0,
        TITLE,
        GAMEPLAY,
        ENDING,
};

export fn main() int = {
// Código...
        let current_screen = game_screen::LOGO;
// Código...
};

|%
Ao decorrer do código para o segundo exemplo, são utilizados outros enums e também são utilizados switch-cases que fazem uso dos mesmos.

Foi um bom execício.
`
    },
    {
	title: "Teste",
	content: `
Agora eu tenho a capacidade de usar os %i template literals i% do Javascript!

O título desse website é: %[${site_title}]%

A sua data e hora atual: é %[${new Date}]%

Além disso, eu posso simplesmente escrever inline-javascript sem problemas!
Experimenta clicar <button onClick="alert('AAEEEEEEEEEEEE KAASSINNÃÃÃOOOO')">aqui</button>
`
    }
]
