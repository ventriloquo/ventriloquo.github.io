const site_title = "Tukain's Website"

let posts = [
    {
	title: "Novamente usando o Javascript para gerar meu site",
	content:`
Eu fiquei muito em dúvida sobre o que eu poderia fazer para continuar o desenvolvimento desse site.

Testei o meu site feito com o Jekyll, mas não deu aquele %i estalo i%, então foi à procura de algum outro SSG, como o <a href="https://gohugo.io/">Hugo</a> por exemplo. Mas cara... que dor de cabeça que foi tentar traduzir um site feito usando Jekyll para um site em Hugo. É tanta coisinha pequena diferente que simplesmente não valia o esforço.

No lugar, decidi revitalizar o meu antigo site que era auto-suficiente. Um site que funciona praticamente como uma espécie de SSG, mas que não depende de nenhum processo de [build] antes de poder ir ao ar.

Eu havia criado esse site para ser o meu projetinho do Neocities. Um site onde eu editaria tudo usando o próprio Neocities, e que não precisaria de repositórios Git, nem nada do gênero. Simplesmente precisaria fazer login na minha conta do Neocities e já poderia escrever posts.

Fiz uma mudança considerável no código-fonte original, dando uma boa polida nele. Acho que isso faz parte de progredir nos estudos.

Apesar disso, o código-fonte responsável por gerar o site é bem pequeno. Tendo umas 60 linhas, no máximo.
`
    },
    {
	title: "Teste",
	content: `
Esse site tem a capacidade de usar os %i template literals i% do Javascript!

O título desse website é: [${site_title}]

A sua data e hora atual: é [${new Date}]

Além disso, eu posso simplesmente escrever inline-javascript sem problemas! Experimenta clicar <button onClick="alert('AAEEEEEEEEEEEE KAASSINNÃÃÃOOOO')">aqui</button>
`
    }
]
