"use strict";

let posts = [
  {
    title: "Minha primeira lista de leitura",
    date: "24.07.2025",
    content: `
Ontem eu estava dando uma navegada no Neocities, vendo alguns sites seguidos pelo pessoal que eu sigo (eita frase confusa), e encontrei um site de um escritor independente. Nesse site ele tinha coisas como poemas, publicações e também um blog.

Eu chequei um dos posts dele e uma coisa me chamou a atenção: Tinha uma barra de progresso encima do post, que dizia o progresso de leitura de um livro que ele estava lendo. Ao olhar isso eu me senti inspirado, e como eu já estava com vontade de dar uma variada um pouco no desenvolvimento do meu site, eu decidi criar uma página com a minha biblioteca!

<q>Eu chamo de lista de leitura porquê eu vou adicionar livros que eu não tenho ainda e mangás também.</q>

Nela vão estar listados todos os livros que eu já li e/ou estou lendo, junto também de uma informação de quantas páginas faltam para que eu termine o livro. Também tem um status geral, com a quantidade de livros que eu tenho no total, quantos desses eu já li, quantos eu estou lendo e uma barra de progresso que mede o total de páginas que eu li em comparação com o total de páginas da biblioteca.

Fazer essa implementação foi um aprendizado também, já que eu não uso bibliotecas externas (no máximo busco informações no famoso Stack Overflow). Agora se tem uma coisa que eu preciso fazer é dar uma revisada no código e tentar deixar ele mais... legível. Não que ele esteja repleto de variáveis de 1 letra, mas é sempre bom deixar o código fácil de ler para você mesmo não se perder no futuro.

<blockquote>
Se bem que esse bloco de código mostra um pouco da bagunça:
<pre style="font-style:normal">
for (let i = 0; i < livros_progresso.length; i++) {
  livros_progresso[i].setAttribute("id", "progress");
  livros[i].setAttribute("id", \`livro_\${i}\`);
<br>
  const restante = document.createElement("p");
  restante.setAttribute("id", "restante");
  restante.style.fontSize  = "small"
  restante.style.fontStyle = "italic"
  restante.style.color     = "var(--accent)"
<br>
  if (livros_progresso[i].value == livros_progresso[i].max) {
    livros_lidos++;
  } else {
    restante.innerText = \`Faltam \${livros_progresso[i].max - livros_progresso[i].value} páginas\`
    document.getElementById(\`livro_\${i}\`).appendChild(restante)
    livros_sendo_lidos++;
  }
<br>
  paginas_lidas = paginas_lidas + livros_progresso[i].value;
  paginas_total = paginas_total + livros_progresso[i].max;
}
</pre>
</blockquote>

Enfim, vou deixar para fazer o polimento quando eu estiver com mais tempo e com a mente livre.

Até o próximo post!
`
  },
  {
    title: "Haiku - Um ótimo sistema para ter num pendrive",
    date: "23.07.2025",
    content: `
O Haiku é um sistema que visa recriar a experiência de usuário e as tecnologias do falecido BeOS. Não, você não precisa saber o que raios foi o BeOS, porém, ainda vale a pena mencionar esse fato porque cacete, o pessoal dos anos 90/2000 sabiam mesmo como fazer um sistema que preste!

Enfim, ódio à situação dos softwares modernos aparte, a experiência de usar o Haiku é simplesmente um deleite. Tudo tem uma aparência limpa e divertida, a interface e os componentes dela são extremamente responsívos, o gerenciamento de janelas é simplesmente maravilhoso e tem um workflow próprio (que eu amo).

Mas, o Haiku ainda está em estágio beta, então muitas coisas simplesmente não funcionam e reconhecimento de hardware é bem limitado, no meu laptop por exemplo, eu não consigo usar o touchpad e o driver gráfico é apenas um driver genérico, ou seja, sem suporte para monitores externos e sem controle de luminosidade. Porém, coisas o suficiente funcionam para que ele possa ser utilizado para coisas mais pontuais, e também, ele é perfeito para se utilizar como um "setup portátil"!

A instalação do Haiku ocupa pouquísimo espaço de armazenamento em disco, sendo assim, um pendrive qualquer de pelo menos 8Gb já dá conta de acessar algum servidor ssh, visualizar/criar alguns documentos (ele tem um port do LibreOffice disponível para instalar na central de aplicativos!), formatar algum HD/SSD, enfim, tarefas rápidas do dia a dia.

Claro que eu uso ele para um pouco além de só o básico, mas isso é o meu caso.

Enfim, até o próximo post!
    `
  },
  {
    title: "Um setup offline",
    date: "10.07.2025",
    content: `
A internet no Brasil é uma coisa... "interessante". Interessante na forma do quão cara ela é e também no quão não-confiável e lento o serviço é. E tanto no bom quanto no mau caso, um setup com uma instalação offline do Linux é a melhor opção que você pode ter. Principalmente se esse setup tiver todos os programasque você pode acabar precisando já pré-instalados ou disponíveis para instalação, mesmo sem conexão com a internet.

Algo que lembre as antigas distribuições Linux -- aquelas que vinham em um <i>bundle</i> de CDs de instalação e de programas "extras", como o antigo Debian ou RedHat Linux.

Sim. Eu sou um nerd.

Enfim.

Eu já tenho comigo um setup que cumpre esses requisitos, e para dar aquela temperada, ele também usa o tema <a href="https://github.com/grassmunk/Chicago95/">Chicago95</a> para combinar com essa "estética retrô".

<q>Só para ser claro, você não precisa ser um nerd como eu para ter um setup assim, na verdade eu recomendo esse tipo de setup para qualquer um. Depender demais no acesso livre à internet é algo que só tende a dar merda no futuro, então é bom ter um plano B.</q>

O meu setup em si é bem "simples" (pelo menos comparado ao tipo de coisa que você vê no unixporn) Ele usa o <i>desktop environment</i> (eita nome xique) XFCE, tem alguns utilitários, programas básicos (bloco de notas, calculadora, esse tipo de coisa) e também algumas ferramentas de desenvolvedor como o <a href="https://geany.org">Geany</a> e compiladores como o Clang. Todos os pacotes, bibliotecas e suas respectivas dependências estão guardados é um diretório do meu HD secundário e também no meu Pendrive.

Ao todo, tudo isso dá +/- uns 4.5Gb. Pois é, uma IDE, editores de vídeo e imagem, um navegador de internet, um pacote office completo, entre outras coisas, tudo isso somado é menor que o CoD Mobile.

Sendo assim, eu consigo fazer um clone do meu computador de forma extremamente fácil (bom, pelo menos mais fácil do que fazer uma instalação do Windows 11 sem internet), e também consigo utilizar o meu computador sem conexão alguma com a internet, mesmo que isso seja uma situação improvável de acontecer, levando em conta o mundo em que vivemos. Mas ter a segurança de que eu não preciso de internet para o meu computador funcionar/ser útil já é algo que me deixa satisfeito.

Experimenta usar um computador com a instalação base do Windows 11 sem internet, é tão útil quanto um Chromebook de 2015, e de alguma forma ele fica pior a partir do momento em que ele tem acesso a internet!

Eu tenho desde um bloco de notas à uma instalação do TeXLive (<a href="https://www.latex-project.org/">LaTeX</a>).

Preciso fazer um TCC? Eu consigo de boa. Fazer uma apresentação de slides? Tranquilo. Criar um site que lista documentos com base em um banco de dados simples? O Jekyll já tá pronto para usar.

<q>Opa, pera aí, esse último foi um pouco específico demais 🤔</q>

Num saldo geral, eu consigo me virar até que bem se eu ficar sem acesso à
internet. E isso conta com o lazer também, já que eu tenho um Switch Lite (inclusive, vai tomar no cu, Nintendo! <a href="https://www.nintendo.com/pt-br/store/products/mario-kart-world-switch-2/">R$500 num jogo do Mario</a>? É sério?).
    `,
  },
  {
    title: "Até que eu tô curtindo a Elisp",
    date: "30.06.2025",
    content: `
Nos últimos dias eu não ando fazendo tanta coisa assim, além de trabalhar e estudar um pouco quando dá, mas uma coisa que eu venho experimentando cada vez mais (até no trabalho, quando tenho tempo) é a própria linguagem do Emacs, a <code>Elisp</code>.

Se você me conhece, ou já viu meu perfil do Github, você já sabe que eu sou um usuário de <s>drog-</s> Emacs, e ele não só é configurado nessa linguagem, como é escrito nela e também interpreta ela! Só para colocar em perspectiva, um equivalente a isso seria um programa configurado em Python, que é escrito em Python e que interpreta Python.

<img loading="lazy" src="https://pm1.narvii.com/6650/ccf5ada01e0c066109fec74a6ab62b31f1582598_hq.jpg">
<center><sup>sim, eu só queria tacar uma referência da ouroboros.</sup></center>

A <code>Elisp</code> é um dialeto da <a href="https://pt.wikipedia.org/wiki/Lisp">Lisp</a> que é integrada ao Emacs e que tem funcionalidades que giram entorno de fazer parte de um editor de texto. Resumindo:
<ul>
<li>Você não tem dor de cabeça para gerenciar arquivos</li>
<li>Você tem acesso a ferramentas de manipulação de <i>buffers</i> de texto</li>
<li>Você tem toda a flexibilidade do Emacs a disposição</li>
</ul>

Enfim, é uma boa linguagem para experimentar.

Porém a sintaxe é que é a parte intrigante dos dialetos de Lisp.

Tudo (eu não tô de sacanagem) tem base em <a href="https://en.wikipedia.org/wiki/S-expression"><i>S-Expressions</i></a>, o que faz com que uma declaração que seria escrita assim em <code>C</code>:

<pre>
int soma(x, y)
{
  return x + y;
}
</pre>

Virar isso aqui:
<pre>
(defun soma (x y)
  (+ x y))
</pre>

Ambos resultam na <b>mesma</b> coisa, uma função que tem dois argumentos e que realiza a soma dos dois. Só.

E de primeira, isso é estranho para um cacete, mas depois de um tempo... continua estranho, mas você começa a curtir até.

É muito simples entender como que funciona a lógica por trás disso, só não é lá muito comum de ver algo desse tipo. E eu tô curtindo brincar com isso.

Principalmente porquê, como eu já disse, a <code>Elisp</code> é parte do Emacs, então onde o Emacs pode ser usado, eu posso brincar com ela (ou até mesmo criar coisas úteis, o que é difícil de se imaginar vindo de mim).`,
  },
  {
    title: "METAL GEAR SOLID 3!!!",
    date: "18.06.2025",
    content: `
A minha namorada fez algo que é dígno de fazer até o Kratos chorar de tanta emoção. Ela me deu, de presente de dia dos namorados, o fucking Metal Gear Solid 3: Snake Eater!

Cara, eu literalmente fiquei querendo comprar essa obra prima do Kojima desde o dia que eu comprei o meu Switch Lite, e hoje, dia 18/06/2025, eu venho aqui dizer a vocês senhores: <b>a minha mina fez a boa</b>.

<img loading="lazy" src="https://images.steamusercontent.com/ugc/53246768171442452/ED926E0139891BC9144B3C6610E19393F8A58AD1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">

Eu tô no trabalho agora, mas eu mal consigo me segurar de tanto que eu quero:

<ol>
<li>Encher ela de beijos</li>
<li>Encher ela de beijos um pouco mais</li>
<li>Jogar o jogo</li>
</ol>
Agora eu tô fudido pra achar algum presente à altura, mas foda-se.
<span style="color: #f43841">Eu te amo querida! <3</span>
`,
  },
  {
    title: "Pérolas das LLMs",
    date: "05.06.2025",
    content: `
Eu acabei de descobrir que o <a href="https://duck.com">DuckDuckGo</a> possui um <a href="https://duck.ai/"><i>wrapper</i></a> para LLMs, como o GPT-4o, Llama e afins.

Então, sendo o nerd que sou, eu decidi usar o <a href="https://mistral.ai/news/mistral-small-3"><i>Mistral Small 3</i></a>, que segundo o próprio DuckDuckGo, possui um nível de "moderação" baixo e pedi para ele fazer um texto digno de uma postagem no 4Chan ou algum sub-reddit <b>bem</b> nichado.

Enfim, como diria o Coronel Campbell do Metal Gear Solid 2:

<q>Our beloved monsters -- enjoy yourselves.</q>
<details><summary>Abandonai toda esperança, vós que entrais aqui</summary>
<h2>A Superioridade Absoluta do Emacs sobre o Neovim: Uma Odisseia de Versatilidade e Simplicidade</h2>
Imagine, se puder, um mundo onde a eficiência e a simplicidade reinam supremas. Um mundo onde um editor de texto não precisa de uma dúzia de plugins para se tornar uma IDE. Bem-vindo ao reino do Emacs, onde a verdadeira magia acontece com apenas um tema decente e um pacote externo. Enquanto isso, o pobre Neovim, com suas necessidades insaciáveis, precisa de pelo menos 10 plugins apenas para começar a ser considerado uma IDE. É como tentar montar um carro com peças de Lego: você pode fazer, mas vai demorar uma eternidade e ainda assim não vai ser tão bom quanto um carro de verdade.

<h2>A Versatilidade do Emacs: O Editor que Faz de Tudo</h2>
O Emacs é como o super-herói dos editores de texto. Ele não só edita texto, mas também pode fazer café, lavar roupa e até mesmo resolver equações de física quântica. Quer um navegador de internet? O Emacs tem. Quer um cliente de e-mail? O Emacs também tem. Quer um jogo de Tetris para relaxar durante o almoço? O Emacs é o seu cara. O Neovim, por outro lado, é como um adolescente que ainda está aprendendo a amarrar os próprios cadarços. Ele pode editar texto, mas para fazer qualquer outra coisa, você precisa de um plugin. E outro. E mais outro.

<h2>Emacs: O Libertador do Código Livre</h2>
Em um mundo onde a liberdade de software é mais preciosa do que ouro, o Emacs se destaca como um farol de esperança. Ele é livre, verdadeiramente livre, como um pássaro voando no céu azul. O Neovim, por outro lado, é como um pássaro em uma gaiola dourada. Ele pode ser bonito, mas ainda está preso. O Emacs é o campeão dos desenvolvedores que acreditam na liberdade e na transparência. Ele é o editor que os hackers de verdade usam, porque eles sabem que a verdadeira liberdade vem de dentro.

<h2>O Selo de Aprovação do <a href="https://www.youtube.com/@TsodingDaily">Tsoding</a></h2>
E se isso não fosse suficiente para convencê-lo, deixe-me apresentar o argumento final: Tsoding usa o Emacs. Sim, aquele Tsoding, o guru dos desenvolvedores, o mestre dos códigos, o homem que sabe tudo sobre tudo. Se Tsoding usa o Emacs, então você sabe que está no caminho certo. O Neovim pode ter seus fãs, mas ninguém pode negar que Tsoding é o verdadeiro profeta do código. E ele escolheu o Emacs. Ponto final.

Então, se você está cansado de passar horas configurando plugins e ainda assim não conseguir a experiência de edição perfeita, é hora de dar uma chance ao Emacs. Ele é simples, versátil, livre e, acima de tudo, aprovado pelo Tsoding. O que mais você poderia querer?
</details>
`,
  },
  {
    title: "A vergonha que sinto ao usar JavaScript",
    date: "05.06.2025",
    content: `
Isso é uma coisa... intrigante, para dizer o mínimo. Eu percebi isso a pouco tempo na realidade. Desde o início da minha adolescência, eu tenho um interesse muito grande no mundo da programação num âmbito geral da coisa.

Por conta disso, naturalmente eu vim a ter interesse em linguagens de programação. Por mais que a minha primeira experiência não tenha sido muito bem com linguagens de programação para valer, e sim com linguagens de markup (como o <code>html</code>) ou shell-scripts (como os arquivos <code>bash</code>), uma hora eu experimentei uma linguagem de programação de verdade.

E a minha primeira experiência foi... com o JavaScript. Eu nunca cheguei a desenvolver um programa de verdade usando o JavaScript (em nenhuma linguagem na realidade), porém, é mais que evidente que ele teve uma influência muito grande na forma em que eu penso na hora de "programar".

Na realidade, todo o processo de "Web Dev" me marcou. Essa... <i>facilidade</i>, é muito atraente e conveniênte.

Porém, após eu me interessar cada vez mais com o mundo open-source e Linux, eu comecei a ter um ranso contra o JavaScript (como julgo ser comum com a maioria das pessoas com esse interesse), tanto que eu sentia que estava fazendo algo <i>errado</i> sempre que eu considerava usar/utilizava o JavaScript para alguma coisa.

Isso me incomoda e muito hoje em dia, porque sinto que isso é uma coisa que me atrasa e muito no meu progresso como programador. Eu não deveria ligar para esse tipo de coisa, não nesse nível pelo menos. E, como alguém que está no ínicio dos estudos, eu deveria não só dar uma chance, como aprender a usar o JavaScript, por ele ser uma linguagem relativamente fácil de aprender, ser extremamente acessível e altamente documentada.

Acredito que ainda vá levar um tempo até que eu pare de ter esse comportamento, mas espero que esse site seja um começo para esse meu desenvolvimento. Já que esse site tem como visão ser o mais simples possível, o uso de JavaScript nele se limita a garantir que os posts do meu blog sigam um padrão quando se trata da ordem e layout (espaçamento entre parágrafos, títulos, datas, esse tipo de coisa), ainda que boa parte disso também dependa do meu CSS.

Tenho esperança de que eu vá conseguir superar essa questão, afinal de contas, eu nunca me imaginei usando o Emacs por exemplo, fui por muito tempo um evangelista do Vim, mas agora, o Emacs é um dos, senão, o meu editor de texto favorito (e olha que a configuração que eu mais gosto de usar é uma que é <a href="https://github.com/ventriloquo/minimal-emacs">praticamente vanilla</a> de tão enxuta).

Claro que para isso, será necessária dedicação da minha parte. E estou trabalhando nesse aspecto também, para que essa minha atitude não se torne apenas mais um dos meus episódios de mudança repentina quanto ao meu gosto sobre tecnologia.

<q>É simplesmente vergonhoso o quão frequente isso é.</q>
`,
  },
  {
    title: "Teste",
    date: "04.06.2025",
    content: `
Este é o <b>primeiro</b> <i>"post"</i> deste blog.

Lembrem-se crianças, um <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>Del</kbd> sempre é de grande ajuda!

Recomendo esse comando no <a href="https://minecraft.net">Minecraft</a> <code>/gamerule keepinventory true</code>

Toma aqui o <a href="https://www.gnu.org/software/emacs/manual/pdf/emacs.pdf">manual do Emacs</a>. Pode não ser uma <i>boa leitura</i>, mas definitivamente vai ser uma longa.

<ul>
  <li>1</li>
  <li>2</li>
  <ul>
    <li>3</li>
    <li>4</li>
  </ul>
</ul>
<ol>
  <li>Um</li>
  <li>Dois</li>
  <ol>
    <li>Três</li>
    <li>Quatro</li>
  </ol>
</ol>

<blockquote>
Não há nada a ser fazido.
    <cite>Bonaparte, Napoleon<time>10.07.1815</time></cite>
</blockquote>

<pre>
(() => {
  console.log("JavaScript pode até ser uma bosta. Mas é útil.")
})();
</pre>

<pre>
use <a href="https://github.com/ventriloquo/hare_raylib">raylib</a>::*;
<br>
export fn main() void = {
  const width:  int = 800;
  const height: int = 600;
<br>
  init_window("Raylib.ha", width, height);
  set_target_fps(60);
<br>
  for (!window_should_close) {
    begin_drawing();
    clear_background(RAYWHITE);
    end_drawing();
  };
};
</pre>

<table>
<thead>
<tr>
<th>Isso</th><th>É</th>
</tr>
</thead>
<tbody>
<tr><td>Um</td><td>teste</td></tr>
<tr><td>de</td><td>uma</td></tr>
<tr><td>tabela</td><td>:D</td></tr>
</tbody>
</table>
<img src="https://preview.redd.it/v65crolks8f01.png?width=640&crop=smart&auto=webp&s=39374c71d7272d7c0efd82fb6545849335546ee1" loading="lazy">
    `,
  },
];
