"use strict";

export const posts = [
  {
    title: "Slackware",
    date: "20.06.2026",
    content: `
Ok, isso aqui não foi algo que eu esperava fazer nem em 1 milhão de anos. Mas é oficial: eu estou usando o [[https://slackware.com][Slackware]]!

Motivos? Deu vontade.

Na realidade o que me incentivou a fazer isso foi toda a "arquitetura" em volta dele, o init system, consumo de RAM, etc.

Ainda estou me adaptando a ele, mas o que eu já posso dizer é que ele me lembra (muito) o OpenBSD.
<img loading='lazy' src='/assets/3cc9c2980af43d306f77f6210a094129.png'>

* Gerenciamento de pacotes

Os meus melhores amigos no uso desse sistema estão sendo os [[https://appimage.org][AppImages]], [[https://suckless.org][Softwares Suckless]] (ou [[https://suckless.org/rocks][endossados por eles]]) e o [[https://github.com/xplshn/dbin][dbin]] (um gerenciador de pacotes estáticos agnóstico). Com os AppImages e o dbin eu consigo lidar com a falta de softwares disponíveis nos repositórios do Slackware (basicamente só tem algumas coisas relacionadas ao X.org, KDE e XFCE) e os Softwares Suckless são simples por natureza e extremamente fáceis de serem compilados em diversos sistemas.

O Frankenstein resultante disso é um sistema Linux com uma base relativamente estática, já que eu faço questão de instalar os meus apps no diretório <code>~/.local/bin</code> para mexer o mínimo com a raíz do sistema, tanto por questão de segurança, quanto por conveniência, afinal, sem um gerenciador de pacotes convencional, seria um saco saber o que foi que eu instalei e o que já veio com o sistema.

* Coisas que estou gostando

O que me surpreendeu foi o uso muito baixo de recursos do Hardware, como o consumo de memória RAM, que oscila na casa dos <b>180mb</b>! Talvez eu conseguisse replicar isso no Alpine, mas eu teria muito serviço para fazer e arriscaria quebrar alguma coisa ainda por cima. O Slackware fica assim só de você fazer uma instalação enxuta, desmarcando as seleções de pacotes do KDE e do XFCE no instalador (inclusive, o processo de instalação do Slackware é muito fácil, o que me pegou de surpresa).

A melhor coisa nele até agora para mim é o [[http://www.slackware.com/config/init.php][Init System]] dele. Os serviços são só um bando de Shell Scripts. É sério. Quer fazer o Emacs rodar como servidor durante o Boot da sua máquina? Faz um Shell Script em <code>/etc/rc.d</code> com o nome tendo <code>rd.</code> no início, dê permissão de execução e pronto! A próxima vez que você iniciar a sua máquina, esse Shell Script vai ser executado. Ou então, se você não quer fazer vários Scripts separados e ter o risco deles não serem executados em uma ordem específica, você pode pôr tudo no Script <code>rc.local</code>. Ele vai ser executado por último, então não tem risco de algum comando seu não funcionar corretamente porquê ele foi executado fora de ordem.

Eu coloquei alguns comandos para configurar minha placa Wi-Fi e pôr o <code>wpa_supplicant</code> para funcionar no <code>/etc/rc.d/rc.local</code>. Sempre funciona exatamente como eu quis. Eu não quero nem começar a falar da dor de cabeça que era fazer o <code>wpa_supplicant</code> funcionar consistentemente no Alpine, principalmente quando eu tinha que levar meu notebook para outro lugar e precisava conectar em uma outra rede Wi-Fi (meu notebook não tem entrada RJ45). Então acabava tendo que usar o NetworkManager só para ter uma conexão consistente e poder mudar de Wi-Fi (o que eu detesto).

* Coisas que não gostei

Devo dizer que é extremamente satisfatório quando eu baixo o código-fonte de algo e ele simplesmente compila sem problemas ou coisas faltando. Isso é, quando ele compila. Tanto pela falta de pacotes nos repositórios quanto pelo fato do gerenciador de pacotes não baixar automaticamente as dependências de um pacotes, a experiência de compilar/instalar algo externo é quase que uma roleta russa. Se você estiver compilando algo que segue +/- a [[https://suckless.org/philosophy/][filosofia Suckless]], então você tem menos chances de não conseguir compilar algo (mas isso não é impossível, eu mesmo não consegui compilar o [[https://codeberg.org/nsxiv/nsxiv][NSXIV]] porquê o Slackware não tem a biblioteca <code>Imlib2</code> disponível, então tive que usar um visualizador de imagem diferente, o [[https://www.johnhawthorn.com/meh/][meh]]).

Isso é algo que é sim chato, mas como eu já disse anteriormente, eu já tenho as soluções para esses problemas.

* Enfim...

Acho que por enquanto isso é tudo o que eu tenho a falar. Ainda tem muita coisa que eu tenho que aprender no Slackware antes de ter uma opinião concreta sobre ele. Mas estou gostando da experiência.

Até o próximo post!
`
  },
  {
    title: "O site agora tem teclas de atalho!",
    date: "25.05.2026",
    content: `
O site agora tem teclas de atalho para navegação mais rápida com o teclado!

Isso é só uma coisinha besta que eu pensei em fazer enquanto estava implementando a troca de título com base na página visível.

#+begin_quote
Se você não reparou, antes você poderia visitar qualquer página aqui, mas o título do site não mudava. Agora ele muda!
#+end_quote

Confesso que fiquei uma boa meia hora quebrando a cabeça tentado entender o porquê do título da página só mudar depois de acessar a página duas vezes, então fiquei mais uns 15 minutos checando com o Gemini quais eram as possíveis causas, só para no final o problema ser uma [[https://pt.wikipedia.org/wiki/Condi%C3%A7%C3%A3o_de_corrida#:~:text=Uma%20condi%C3%A7%C3%A3o%20de%20corrida%20%C3%A9%20uma%20falha%20num%20sistema%20ou%20processo%20em%20que%20o%20resultado%20do%20processo%20%C3%A9%20inesperadamente%20dependente%20da%20sequ%C3%AAncia%20ou%20sincronia%20doutros%20eventos.][<i>race condicion</i>]] entre a API <code>navigation</code> e o <code>DOM</code> 🤦.

Basicamente, a página trocava mais rápido do que o <code>DOM</code> conseguia trocar o título do site. A solução? <b>Põe um timer nessa bomba</b>.

#+begin_src
<span>JS</span>
navigation.addEventListener("currententrychange", (e) => {
  <b>// Eu não tava de sacanagem</b>
  setTimeout(() => {
    const sections = document.getElementsByTagName("section");
    for (let s of sections) {
      if (s.checkVisibility()) {
        document.title = s.children[0].innerText;
      }
    }    <b>// É literalmente coisa de milésimos de diferença,</b>
  }, 0); <b>// eu posso simplesmente fazer o processo aguardar</b>
});      <b>// "0 segundos" e só isso já resolve a <i>race condition</i>.</b>
#+end_src

#+begin_note
O código responsável por fazer essa função não é mais esse. Já que essa API se tornou mainline a pouco tempo, é muito fácil ter algum navegador que não é compatível com ela, fazendo com que o site fique inacessível.

Então eu taquei esse código no GPT-5 e pedi pra ele me dar algo mais compatível com browsers mais antigos. Nos meus testes está tudo funcionando numa boa, pelo menos por enquanto.
#+end_note

Enfim, com a troca de título com base nas páginas funcionando, me veio a ideia de possibilitar o envio de feedback sobre qualquer página do site sem ser com um botão em cada página (como são os posts do blog). Então a solução foi bem simples: é só colocar um <code>eventListener</code> verificando o teclado!

#+begin_quote
<span>Explicação rápida</span>
Agora o site checa quais teclas estão sendo pressionadas, quando alguma tecla específica é apertada (pox exemplo: <code>h</code>), ele faz uma ação (por exemplo: ir para a tela inicial do site)
#+end_quote

As teclas de atalho são as seguintes:
- <code>p</code> - Ir para a página dos meus projetos
- <code>b</code> - Ir para a página do meu blog
- <code>s</code> - Ir para a página da minha lista de leitura
- <code>g</code> - Ir para a página dos meus jogos
- <code>i</code> - Ir para a página das minhas ideias
- <code>w</code> - Ir para a página dos sites que eu acompanho
- <code>a</code> - Ir para a página sobre mim
- <code>t</code> - Ir para a página de testes
- <code>d</code> - Trocar entre tema claro/escuro
- <code>m</code> - Ir para o mapa do site
- <code>h</code> - Ir para a home
- <code>f</code> - Enviar um feedback sobre a página atual
- <code>j</code> - Descer página
- <code>k</code> - Subir página
`,
  },
  {
    title: "Recuperei o meu site!",
    date: "23.05.2026",
    content: `
Isso mesmo! Depois de 10 longos dias, eu finalmente consegui recuperar o meu site feito em JS! Eu sabia que eu tinha um um backup em algum lugar, eu só não sabia o quão antigo ele era.

Para a minha sorte ele não era tão antigo assim, acho que ele tinha de 2 a 3 semanas apenas, então só precisei refazer as últimas mudanças que eu havia implementado no site, mudanças essas que estavam presentes na versão feita em Lume (e também na versão em Jekyll).

#+begin_quote
Mano, por quê que eu faço tantas versões alternativas para o mesmo site? Eu devo tá ficando maluco.
#+end_quote

Além disso, eu também aproveitei e dei umas incrementadas aqui e alí no código-fonte e também no design geral.

Só sei que é muito satisfatório ter o meu site de volta! Queimei <b>muitos</b> neurônios fazendo isso aqui.
`,
  },
  {
    title: "Eu sem querer deletei o meu site do Neocities 💀 ",
    date: "13.05.2026",
    content: `
Pois é, eu simplesmente deletei o meu site no Neocities. Bom… não exatamente.

O que aconteceu é que eu estava (estou) fazendo experimentos com o [[https://deno.com/deploy][Deno Deploy]], [[https://lume.land/][Lume]] e [[https://lume.land/cms][LumeCMS]]. Só que tem um pequeno porém: Você precisa usar um repositório no Github para poder usar o Deno Deploy.

Até aí, tudo bem, 0 problemas.

Mas, eu esqueci que no repositório do meu site no Github tinha um Github Action configurado para “atualizar”/sobrescrever o site do meu Neocities. Isso porque ele era um repositório com o código-fonte de uma versão antiga do meu site em que eu usava [[https://jekyllrb.com/][Jekyll]].

É, eu fui muleque pra cacete.

Mas o lado bom é que eu já tinha uma versão funcional do meu site feita em Lume, então em questão de conteúdo eu não perdi nada. Além disso, eu (acho que) tenho um backup do site do Neocities relativamente atual. Só vou conseguir ter certeza quando eu chegar em casa.

* O site ainda não está 100%

Ainda faltam alguns ajustes e otimizações a serem feitas, afinal de contas eu não estava planejando tacar uma bomba de hidrogênio num site que eu passei meses desenvolvendo.

<img loading="lazy" src="/assets/hammy_crying.gif">

Para além disso, eu também não consegui replicar absolutamente tudo do meu site, e tive que fazer algumas adaptações. Por exemplo, antes, cada livro da minha lista de leitura tinha uma página própria, agora, alguns deles mostram uma pequena janela com a minha opinião sobre ele (isso só funciona no desktop, por enquanto).
`,
  },
  {
    title: "Raylib.ha - Como devo continuar?",
    date: "20.04.2026",
    content: `
A quase dois anos eu tenho um projeto do qual eu deixo em hiato, retorno, e depois ponho na geladeira de novo: O [[https://codeberg.org/tukain/raylib.ha][Raylib.ha]].

Ele se trata de <i>bindings</i> feitas à mão da linguagem [[https://harelang.org][Hare]] para a biblioteca [[https://raylib.com][Raylib]]. Sendo o objetivo deste projeto me introduzir ao mundo da programação, área da qual eu tenho muito interesse e que se aproximou de ser um Hobbie meu. Aprendi muita coisa com esse projeto, muita mesmo, porém, como eu tenho essa mania de deixa-lo congelado, com o tempo eu acabo perdendo parte do aprendizado e acabo tendo que reamprender algo que eu já deveria saber fazer com as mãos atadas.

Eu não consigo seguir tutoriais de "como aprender a programar" a bastante tempo, mesmo antes de eu iniciar esse projeto. As impressões que eu tenho até hoje sempre que assisto um conteúdo do gênero são as seguintes:
- Esse cara quer me vender um curso de R$600,00 não é?
- Se fosse para usar Copilot eu nem sequer estaria assistindo um vídeo
- Eu não vou ficar 2 horas assistindo um cara explicando como funciona um <code>if</code> <code>else</code>
- Eu vim procurar saber como funciona o gerenciamento de memória manual, não ouvir uma palestra dos perigos de fazer isso e que [[https://rust-lang.org/pt-BR/][Rust]] é uma linguagem melhor

Enfim. Eu aprendo muito mais assistindo um programador fazendo algo como um jogo simples ou testando alguma linguagem mais obscura do que assistindo esses tutoriais desnecessáriamente longos e com uma linguagem que se não te tratar feito um analfabeto funcional, te trata como um engenheiro de software com 30 anos de experiência e que já trabalhou no CERN.

Essa é a minha impressão pelo menos (em relação a certos tutoriais). Claro que existem bons exemplos nesse bolo imenso, mas a massa gira em torno de cursos de a à z, <i>frameworks</i> que estão no hype, ou fica só no básico e poucas vezes mostram algo na prática.

Não tenho certeza se é por conta disso que a minha motivação para continuar esse projeto surge e depois desaparece, na realidade eu duvido muito, mas pode ser que tenha alguma influência.

#+begin_quote
Essa questão é tão clara quanto fumaça de diesel.
#+end_quote

Apesar dos vários hiatos, hoje em dia, essas <i>bindings</i> são funcionais, incompletas, mas funcionais.

Ela tem um "teste" que é basicamente aquela clássica animação do DVD batendo nos cantos da tela. Isso serve só para ver se você tem a Raylib e a Hare instaladas corretamente.

Mas ainda faltam muitas coisas. Como forma de visualizar melhor isso, eu deixei várias funções da biblioteca original feita em C presentes como comentários nas <i>bindings</i>, como por exemplo:

#+begin_src
<span>Hare</span>
// // Files management functions
// *LoadFileData
// UnloadFileData
// SaveFileData
// ExportDataAsCode
// *LoadFileText
// UnloadFileText
@symbol("SaveFileText")	fn SaveFileText(filename: *c::char, text: *c::char) bool;
export fn save_file_text(filename: str, text: str) bool = SaveFileText(c::fromstr(filename: str)!, c::fromstr(text: str)!);
#+end_src

Da seção de gerenciamento de arquivos, a única função que possui uma <i>binding</i> é a <code>SaveFileText</code>. Existem outros casos como este dentro do código das <i>bindings</i>, mas aos poucos eu vou preencher essas lacunas. O problema é quanto tempo isso vai levar.

Essas <i>bindings</i> são como um quebra-cabeças enorme que ao mesmo tempo me dá entusiasmo de tentar resolver e também me dá preguiça de trabalhar encima. Sempre aparece algo mais "atrativo" para se fazer no meio do desenvolvimento disso, ou então, eu estou exausto demais para tocar no computador.

Me pergunto como irei continuar esse projeto - *se* eu continuar ele. O que é um desejo meu, porém, se eu não tiver o empenho (e o ânimo) para continuar, ele vai novamente para a geladeira, e vai ficar cada vez mais no fundo dela.

Uma coisa que eu tenho certeza: eu ainda tenho muito trabalho a fazer, pois eu nem comecei a fazer as <i>bindings</i> da [[https://www.raylib.com/cheatsheet/raymath_cheatsheet.html][Raymath]], a biblioteca de cálculos usada na Raylib.

Veremos quanto tempo isso vai levar.
`,
  },
  {
    title: "Existe privacidade na internet?",
    date: "15.04.2026",
    content: `
A cada dia que passa, a cada hora, minuto que seja, me parece que o conceito de privacidade na internet é basicamente inexistente. No mundo real, é fácil distinguir quando você tem a privacidade para fazer algo ou não, por exemplo, se você pode andar tranquilamente de cueca na sua casa, é porquê você está certo de que não está sendo observado por ninguém e que você está em um espaço <b>privado</b>.

Porém, a internet de hoje é quase como se você estivesse no Big Brother. Você tem que fazer um esforço extremo e por conta própria de esconder que é você que está andando pela casa de cueca, mas ainda assim, alguém, em algum lugar, sabe que tem um cara andando de cueca pela casa.

A única forma de você ficar "invisível" é se você simplesmente nunca teve, e nem vá ter contato algum com a internet. Bom, pelo menos nenhum contato proposital, afinal de contas, para cada uma pessoa hoje em dia, tem de 2 a 4 câmeras no bolso dela, sem contar com as câmeras de segurança com conexão à internet que tem a cada estabelecimento qualquer.  Você basicamente ter que virar um <i>John Doe</i> ambulante.

O que eu acho triste é que isso é algo impossível de solucionar, afinal de contas, faz parte da nossa evolução, e infelizmente, pode ser usado com más intenções. O que sinceramente não é novidade, aqui no Brasil por exemplo é cheio de parlamentar que parece ter tesão em censurar quem ele não gosta com um verniz de "justiça social".

O jeito correto de encarar a internet na minha visão é vendo ela como uma grande praça pública que opera em paralelo ao Estado, mas que pode sofrer intervenções do mesmo. Existem áreas dessa praça que são bem reguladas e que seguem os regulamentos do Estado e morais impostos pela sociedade (Ex: Redes sociais), e também existem aquelas áreas que essas coisas são relativisadas ou até mesmo ignoradas (Ex: Dark Web). A única coisa que permanece a mesma nessas áreas é a de que mesmo se você esconder quem você é, alguém, em algum lugar, vai saber que uma pessoa passou por área <i>X</i>, em horário <i>Y</i>, e conversou com grupo <i>Z</i>.

Sabe, eu sou uma pessoa muito pessimista, muito mesmo. E esse tipo de questionamento martela a minha cabeça e só piora a situação. Às vezes invejo os ignorantes, pois eles não precisam se preocupar com esse tipo de coisa. Na realidade, nem mesmo eu precisaria me preocupar com isso, afinal de contas não há o que eu possa fazer para mudar isso, e mesmo que eu pudesse, eu não sei quais seriam as consequências dessas mudanças. Só... é difícil ficar com isso preso na cabeça e saber que não há o que fazer, isso me entristece um pouco.

Devo muito desse pessimismo à minha paranóia, da qual eu não sei a origem, mas sei que existe e que me afeta em diversos aspectos da minha vida, seja a pessoal, ou até da minha <i>persona</i> online.

Estaria eu correto em assumir que privacidade na internet é um conceito inexistente? Ou isso seria obra da minha paranóia?

Difícil dizer.
`,
  },

  {
    title: "Backup de programas",
    date: "27.03.2026",
    content: `
Caramba, pelo jeito o buraco dessas leis de "Proteção à Criança" é <b>muito</b> mais profundo do que eu imaginei. Tem desde o [[https://www.legislation.gov.uk/ukpga/2023/50][Online Safety Act]] do Reino Unido, até umas propostas de lei na [[https://legiscan.com/CA/text/AB1043/id/3269704][Califórnia]] e Colorado, lá nos States.

Algo em comúm que a Lei Felca tem com essas leis dos States, é a obrigação até mesmo do sistema operacional ter algum meio "eficiente" de verificar a idade do usuário, o que, caso não seja realizado, pode acarretar em penalidades extremas. Por conta disso temos exemplos de Distros Linux que simplesmente deixaram de operar no Brasil e nesses Estados dos States com leis parecidas, como o Arch Linux 32.

Mas, se uma distribuição Linux deixa de operar, para que eles também evitem uma dor de cabeça jurídica, eles podem muito bem bloquear qualquer IP vindo dessas regiões de sequer baixar um programa dos repositórios deles (o que, sinceramente, é justo).

Como eu sou um cara bem paranóico (principalmente com esse tipo de coisa), eu comecei a fazer backup de uma porrada de programa que eu uso. Como a minha "main distro" é o Alpine, isso é bem fácil, é só questão de executar um <code>apk fetch -R *programa*</code> e já era, ele pega o programa e todas as dependências dele e baixa os pacotes no diretório atual. Fiz isso com o [[https://gnome.org][GNOME]] e outros programas, como o [[https://librewolf.net][Librewolf]]. Basicamente, eu tenho como instalar esses programas mesmo se eu não tiver acesso à internet, ou se o meu acesso aos repositórios for restringido.

Isso é uma coisa que eu recomendo que qualquer um faça também, eu sei que no Debian dá para fazer isso também (por mais que não seja tão simples quanto no alpine), afinal, de pouco serve um computador sem nenhum programa útil, e ter que depender de um terceiro guardando uma biblioteca de pacotes (um repositório) para poder instalar os seus programas é algo que a qualquer dia vai se virar contra você algum dia.
`,
  },
  {
    title: "Lei Felca",
    date: "17.03.2026",
    content: `
Hoje entra em vigor a "Lei Felca" o "ECA Digital".

Essa merda vai servir basicamente para censura e vigilância em massa. É só ver o estado que a Inglaterra está em relação a essas leis de "proteção da criança e do adolescente na internet".


- Aumentar pena para pedófilos/aliciadores? Fiscalizar contas suspeitas? Tomar medidas de conscientização na internet para os pais a fim de que eles mesmo tomem conta dos seus próprios filhos? Não, pra quê isso? 0 nececidade.
- Fazer todo mundo que não tem nada haver com isso enviar uma foto da cara com o RG do lado para poder usar o próprio instagram, mesmo que a pessoa não tenha nenhum antecedente criminal relacionado com violações dos direitos de criaças/adolescentes? Com toda certeza. Quem se opõe a isso com toda certeza é um pedófilo.

Pelo amor de Deus, essa porra não é, nunca foi e jamais será posta em prática para benefício da população. Literalmente serve apenas para limitar a privacidade de cidadãos inocentes a troco de porra nenhuma, porque isso não põe nenhum criminoso na cadeia, não faz com que punições para esse tipo de crime sejam mais duras e muito menos põe a polícia para trabalhar de forma eficiente.

Além de tudo essa porra põe em cheque até mesmo sistemas operacionais, pelo simples motivo de possibilitar que a "criança" acesse algo que não seja apropriado para ela, e por isso o sistema operacional tem que ter uma medida que impeça menores de idade de acessar conteúdo impróprio. Eu tenho uma medida muito eficiente para isso, se chama: PAIS PRESENTES.

Sistemas Linux já vão para a casa do caralho de imediato. Como caralhos o Arch Linux, Debian, Void, e etc, vai implementar algo que sirva para verificar a idade de alguém no nível requisitado pela Lei Felca? A PORRA DO SISTEMA É DE CÓDIGO ABERTO CACETE! Literalmente se a mizera do muleque quiser ver UM FURRY DANDO UM BACKFLIP NUMA ROLA, ele VAI DAR UM JEITO e não tem como impedir ele, porquê o código é aberto para QUALQUER UM MODIFICAR, ou seja, ele pode pegar o sistema de verificação de idade e tacar no limbo. E aí? Os programadores do sistema vão ser responsabilizados por isso?

Não é atoa que já tem distro que tá bloqueando o download no Brasil, quem é doido de arriscar uma multa de MILHÕES DE REAIS POR INFRAÇÃO?

Cara, a solução do Brasil realmente é o aeroporto, puta que pariu.
`,
  },
  {
    title: "Patinete Elétrico",
    date: "10.03.2026",
    content: `
A um certo tempo, eu estive pesquisando e procurando algum tipo de mobilidade elétrica da qual eu poderia utilizar para poder ir e vir do meu trabalho de forma mais tranquila (antes disso, eu ia pedalando, 10km indo e depois mais 10km voltando). Vi diversas opções, desde scooters elétricas que mais pareciam mobiletes tiradas dos Jetsons a bikes elétricas fazendo cosplay de Dirt Bike.

Dentro desse monte de opções, as mais acessíveis tinham um problema crônico: eram muito baixas e pesadas para que eu ficasse subindo e descendo as escadas de casa.

Foi então que o algorítimo do Youtube me recomendou vídeos de patinetes elétricos. Estes, diferente dessas bicicletas mais acessíveis, não tinham o problema da subida e descida de escada, pois eram bem mais leves.

Depois de muito vai e vem acabei comprando um patinete no Mercado Livre, do qual chegou no início da semana passada e venho usando desde então.

É muito confortável a viagem com ele, exceto em algumas partes onde o caminho é bem acidentado (ele não tem suspenção e os pneus são maciços, então ele treme para um cacete), porém hoje eu senti na pele a maior desvantagem dele: se você cair, vai ser que nem uma queda de skate, só que a 25km/h.

Caí feito um saco de bosta kkkkkk

Ralei meu cotovelo, o lado direito da minha cintura, fiquei com um inchaço no joelho esquerdo e com o ombro direito doendo. Graças à Deus eu tava de capacete, por que se não era do asfalto para o hospital.

Enfim, tô vivo kkkkkkkk

Serei mais cuidadoso a partir de agora, até porquê eu não quero nem ir parar na fila do INSS e muito menos levar uma surra da minha namorada.`,
  },
  {
    title: "Ideias para o site",
    date: "09.02.2026",
    content: `
Se você acompanha o meu site, já deve ter percebido algumas coisas mudando de repente ou surgindo/sumindo. Isso acontece porquê eu não planejei de forma prévia o que faria parte do site, então como resultado ele fica em contante mudança.

Porém, tem coisas que eu quero fazer com ele e que eu planejo a implementação antes de colocar no ar (convenhamos, esse é o mínimo esperado). Por exemplo, se você visitar esse site pelo computador, você verá uma "intro" antes de ter acesso à home. Eu quero poder fazer algo parecido para os visitantes mobile também.

Outra coisa que eu quero fazer é adicionar a minha nota para certo livro na minha lista de leitura, porém, não quero uma simples nota de 1 a 10, quero adicionar algo mais... humor e piadas. Tipo, digamos que eu dê um 9.5 para algum livro, eu quero que apareça um "emote da twitch" com o [[https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-Z83xWmYqR3AX7HmwMWY4NI4Cvo7jXp0Nw&s][senhor cinema]] do lado da nota, ou então se eu dou um 2.0 aparece o meme do "[[https://i.scdn.co/image/ab67616d0000b2735c7c92b73a24a47e534c241f][It's Joever]]". Não me parece ser algo difícil de se fazer, mas o complicado vai ser fazer isso se adaptar bem para o mobile (o que para mim é uma obrigação, já que a minha namorada gosta de ver meu site de vez em quando e ela só tem celular).

Talvez eu faça uma [[/#ideias][página dedicada a listar minhas ideias]] e coisas que quero implementar aqui...

Bom, se eu não fizer uma página desse tipo, no mínimo eu tenho que anotar isso em algum lugar, se não eu vou acabar me esquecendo da ideia.

Outra coisa que eu acho que já vou começar a implementar é um botão para enviar feedback de um post. Ele apareceria no final de cada post e nele teria um e-mail pré preenchido com algumas informações do post e pronto para que a pessoa simplesmente dê sua opinião e envie o e-mail. Essa sim é uma ideia fácil de implementar de forma satisfatória para computador e para mobile.
`,
  },
  {
    title: "Chrome Devtools",
    date: "25.01.2026",
    content: `
Vem cá, desde quando os navegadores que a gente usa todo santo dia se tornaram uma IDE também?

Eu não tô brincando, se você tem um site escrito à mão (HTML, CSS e JS sem um processo de build, como em um SSG) você pode fazer esse teste:
- Abrir o site no navegador
- Apertar a tecla <code>F12</code>
- Clicar em "Sources", depois Workspace
- "Add folder manually"
- Colocar a pasta do site, e... pronto, você tem uma IDE para editar o seu site. Sem precisar instalar mais nenhum programa externo.

#+begin_quote
<span>Detalhe</span>
No Chrome, você consegue até mesmo habilitar uma função similar ao Github Copilot!
#+end_quote

Isso é um treco que eu já havia visto anteriormente, mas não havia parado para pensar em <b>quando</b> isso ficou dessa forma. Sinceramente estou curioso para saber, mas não quero ter que me enfiar em um <i>Rabbit Hole</i> só por conta de algo besta como esse.

Se você tem alguma noção de quando os navegadores ficaram assim, sinta-se à vontade para comentar na [[https://neocities.org/site/tukainpng][minha página do Neocities]].

Isso é melhor do que o VSCode, Vim ou Emacs? Não. Nem de longe. Não tem o mínimo de comparação. O editor de texto em si é bem simples, o que é "atraente" é todo o resto das ferramentas que tem por aqui.

Debugger, Análise de uso de memória/rede, monitor de performance, enfim, é uma IDE.

Se comparar com o editor do Neocities aí sim isso aqui se torna algo foderoso. Você tem basicamente aquele <i>Workflow</i> de Ver, Editar, Ver de novo. Algo que você tem também no editor do Neocities, com a diferença sendo que você não está ativamente alterando o seu site que está no ar.

#+begin_quote
<span>Resumo da ópera</span>
Um site simples é infinitas vezes mais versátil do que qualquer outra coisa.
#+end_quote

A parte mais maneira desse <i>Workflow</i> é que você pode literalmente selecionar qualquer elemento do site, e ficar modificando o CSS, e então, salvar o arquivo! Para um site em que o CSS é extremamente relevante (como esse) isso é uma <i>Killer Feature</i>.
<img loading='lazy' src='/assets/chrome_devtools_screenshot.png'>
`,
  },
  {
    title: "Que preguiça",
    date: "19.01.2026",
    content: `
Que preguiçaaaaaaaaaa

Cara, eu nem tenho muito o que dizer aqui, só sei que a minha preguiça hoje tá em níveis jamais alcançados antes por este que vos escreve.

Nas últimas 48 horas eu estou fazendo alguns updates no meu "pequeno" projeto de [[https://codeberg.org/tukain/raylib.ha][<i>bindings</i> da Raylib para a Hare]]. Em grande parte, colocando documentação (até agora me arrependo de não ter adicionado os benditos comentários desde o início). Quando dá na telha, eu também adiciono novas <i>bindings</i>.

Mas Jesus amado, a preguiça que bate é tanta que eu faço qualquer outra coisa, menos isso.

Pelo menos quando eu tenho a força de vontade para fazer algo com o projeto, eu sempre experimento coisas novas e acabo aprendendo algo diferente ou tenho uma ideia de como posso implementar X coisa.

Mas, além disso, eu também estou tentando fazer algo que espero ter sucesso até o fim deste ano:

* Me distanciar o máximo possível de redes sociais.

Eu já não sou tão ligado nelas em comparação com até mesmo amigos meus, porém eu ainda tenho aquele bendito reflexo de checar as notificações do celular (ele é tão forte que às vezes eu faço isso para "olhar que horas são", sendo que eu tenho um relógio no pulso!).

No meu caso (na real acho que uns 70% da população) não é viável eu eliminar completamente esses venenos da minha vida. Tenho amigos dos quais só consigo ter algum contato por elas, a prefeitura da minha cidade só dá atualizações por elas basicamente, enfim, não dá para eliminar completamente elas. Mas eu posso reduzir o uso delas.

O Youtube mesmo é uma coisa que eu <b>tenho</b> que diminuir o uso. Eu tô passando coisa de 3 a 4 horas por dia assistindo esse treco, em troca de meia grama de conhecimento útil, uma live onde eu realmente aprendo algo que é do meu interesse (vlw [[https://youtube.com/@tsodingdaily][Tsoding]]) e o resto do tempo eu fico num <i>Doom Scroll</i> cheio de coisas irrelevantes ou chocantes.

Isso não é nem um pouco bom para a minha saúde e muito menos para o meu [[https://pt.wikipedia.org/wiki/Limiar_de_aten%C3%A7%C3%A3o][<i>Attention Span</i>]]. Além disso, eu sinto que esse treco está afetando o meu psicológico de uma forma tão negativa que eu já nem consigo acreditar mais quando alguém diz que eu sou bom em tal coisa ou outra, na minha cabeça a primeira coisa que aparece é algo em torno de

#+begin_quote
Como que um cara que passa o dia todo assistindo shorts é capaz de fazer algo?
#+end_quote

É. Tá ruim assim.

Pelo menos eu tenho a sorte de ter uma família que me ama e uma namorada que sempre levanta o meu astral (te amo querida), sinceramente não sei como seria minha vida sem isso.

Minha namorada inclusive já conversou comigo em relação a isso, e é algo que é simplesmente ilógico mesmo. Tipo, eu não sou a volta de Einstein nem nada, mas as coisas que eu sei fazer com Linux, programação e etc, com base em alguns forúns e manuais que eu já li não são tão fáceis de se fazer ou entender, a menos que você tenha algum interesse e força de vontade para compreender (o que a maior parte das pessoas acaba não tendo. A menos que você tenha um site aqui no Neocities, aí você já assinou o seu certificado de Nerd de Computador.)

* A minha preguiça chega até mesmo a ser paradoxal.

Um exemplo disso é o setup do meu computador. Ele tem [[https://alpinelinux.org][Alpine Linux]] e eu uso o [[https://swaywm.org][Sway]]. Motivo? Porque para mim, é mais eficiente eu ter um ambiente onde eu posso integrar [[https://pt.wikipedia.org/wiki/Shell_script][<i>Shell Scripts</i>]] com facilidade para automatizar tarefas extremamente complexas como <b>TOCAR UMA PLAYLIST DE MÚSICAS LO-FI QUE EU TENHO BAIXADA NO MEU COMPUTADOR</b>.

Eu queria tá de sacanagem, mas eu não tô kkkkkk

Além de claro, o fato de que eu refaço esse site do 0 sempre que eu fico enjoado com como ele está. E eu não posso nem dizer que eu não sou tão ativo no desenvolvimento das <i>bindings</i> porquê a sintáxe da [[https://harelang.org][Hare]] é complicada ou algo do gênero. Eu não ironicamente já usei e customizei um <i>Window Manager</i> que é configurado com [[https://pt.wikipedia.org/wiki/XML][XML]], e gostei! ([[https://labwc.github.io/][Labwc]]).

E também a sintáxe da Hare lembra um pouco a sintáxe do JavaScript. Um pouco.

#+begin_src
<span>JavaScript</span>
const string = "Olá, mundo!";
console.log(string.length);
#+end_src
#+begin_example
11
#+end_example

#+begin_src
<span>Hare</span>
use fmt;

export fn main() void = {
  const string: str = "Olá, mundo!";
  fmt::printfln("{}", len(string))!;
};
#+end_src
#+begin_example
12
#+end_example

#+begin_quote
Agora que eu tô vendo aqui, por quê que um retorna 11 e o outro retorna 12? Eu hein.
#+end_quote

#+begin_note
Como apontado pelo [[https://neocities.org/site/sob-o-sol][sob-o-sol]] ([[https://neocities.org/site/tukainpng?event_id=6239969][aqui]]), a razão disso se deve ao fato de que o <code>len</code> da Hare calcula o tamanho de uma string byte por byte, e por conta disso o valor retornado é 12 ao invés de 11, já que caracteres como "á" são representados com mais de 1 byte.
#+end_note

Ok, não é tãooo similar assim, mas ainda assim é o suficiente para que eu não tenha muitas dificuldades na hora de escrever em ambas.

E outra coisa né, se eu me dei o trabalho de fazer uma "[[/modules/common.js][imitação do React]]" só para criar esse site (com o markup dos [[/modules/db/posts.js][posts]] sendo copiado do [[https://orgmode.org][Org mode]]), eu consigo fazer umas <i>bindings</i> >:(.

Enfim, acho que já tá de bom tamanho por hoje. Até o próximo post!
`,
  },
  {
    title: "Base16 e sincronização de temas com o Emacs",
    date: "10.01.2026",
    content: `
Uma das coisas que eu mais gosto de fazer no meu setup é customizar a paleta de cores de tudo (como quase todo usuário Linux). Porém, às vezes isso é bem tediante.

Cada programa tem o seu próprio jeito de configurar, o tipo de sistema de cores nem sempre segue um padrão (<code>RGB</code>, <code>RGBA</code>, <code>ARGB</code> e etc), enfim, muitas coisa para ter que lembrar e ajustar. Por conta disso, eu customava fazer um setup com um certo tema (por exemplo, [[https://github.com/sainnhe/everforest][everforest]]) e usar ele por pelo menos 1 ou 3 meses, já que a dor de cabeça de sair ajustando as cores de todos os programas que eu uso era grande demais para que eu fizesse isso com mais frequência.

Porém, como dito no meu post anterior:

#+begin_quote
[…] eu também consigo integrar a paleta de cor do tema que eu estou usando no Emacs e aplicar ela no CSS do site!
#+end_quote

Isso se dá graças ao fato de que o Emacs consegue "descrever" as cores dos componentes do <i>buffer</i>, como cor, tipo de fonte, transparência e etc. Ou seja, basta você pedir ao Emacs que ele dê a cor do background dele e ele vai te dar uma string com a cor!

#+begin_src
<span>Elisp</span>
(face-attribute 'default :background)
#+end_src
#+begin_example
#feedf3
#+end_example

Levando isso em consideração, eu pensei o seguinte: se eu consigo fazer essa integração com o meu site, então eu consigo fazer isso com as configurações do meu setup!

E então, depois de umas duas horas +/-, eu fiz um script em <code>Elisp</code> que gera esses arquivos de configuração para mim e deixei ele pronto para executar sempre que o Emacs é aberto.

<img loading="lazy" src="/assets/theme_switcher.gif">

A forma como ele funciona é bem simples: eu defini algumas variáveis contendo as cores que vou utilizar nas configurações (por exemplo, <code>red</code>) e escrevo o seguinte para criar os arquivos de configuração:

#+begin_src
<span>Elisp</span>
(generate-config "~/.config/rofi/themes/colors.rasi"
		 "* {\\n"
		 "  col1: "	background	";\\n"
		 "  col2: "	grey            ";\\n"
		 "  col3: "	foreground      ";\\n"
		 "  col4: "	accent		";\\n"
		 "  col5: "	blue		";\\n"
		 "}")
#+end_src

<code>generate-config</code> é na realidade um <i>Macro</i> de uma função que fiz chamada <code>new-buffer</code>.

A definição dessa função é a seguinte:

#+begin_src
<span>Elisp</span>
(defun new-buffer (name &optional content filepath)
  (if (not (stringp name))
      (error "\`%s' is not a string." name)
    (switch-to-buffer name)
    (erase-buffer)
    (if content (insert content))
    (if (not filepath)
	(warn "No \`filepath' provided. Showing buffer instead.")
      (write-file filepath)
      (kill-current-buffer)
      (message "\`%s' was written" filepath))))
#+end_src

Sim, eu sei, esse treco tá feio que dói. Maaass, funciona. Essa função funciona como um "<i>Helper</i>" para criar <i>buffers</i> com um conteúdo pre-definido e salvar esse buffer para o arquivo especificado em <code>filepath</code>.

A definição do <i>Macro</i> é bem simples:

#+begin_src
<span>Elisp</span>
(defmacro generate-config (buffer-name &rest lines)
  \`(new-buffer ,buffer-name (concat ,@lines) ,buffer-name))
#+end_src

Basicamente, para usar ele você dá uma <i>string</i> contendo o caminho para o arquivo que será escrito (ex: <code>~/.config/rofi/themes/colors.rasi</code>) e em seguida, qualquer número de strings desejadas para serem colocadas no arquivo. Isso permite que você use <i>strings</i> contidas em variáveis, como uma cor em hexadecimal por exemplo.

Dá para usar ele para criar/escrever qualquer arquivo de texto, não só configurações, mas por conta do objetivo do "script", o nome dele ficou assim.

Ele tem uma única dependência: [[https://github.com/tinted-theming/base16-emacs][base16-emacs]].

Esse pacote é dá uma porrada de temas do <i>framework</i> "[[https://github.com/chriskempson/base16][base16]]". E uma coisa que faz parte das <i>guidelines</i> desse <i>framework</i> é que as cores [[https://en.wikipedia.org/wiki/ANSI_escape_code#Colors][ansi]] também são modificadas. Dessa forma fica fácil extrair a cor vemelha por exemplo, porque eu não preciso procurar ela dentro da lista de cores do Emacs, eu só preciso do atributo <code>ansi-color-red</code>.

Por enquanto, esse script que fiz só funciona perfeitamente com esse pacote.

Com o tempo vou adicionar mais "templates" a esse script e também vou deixar ele mais robusto, mas por enquanto ele está praticamente perfeito (eu uso pouquíssimos programas de interface gráfica no meu setup, então só de configurar o meu terminal 90% das coisas que uso ficam tematizadas).
`,
  },
  {
    title: "Emacs - O meu novo computador",
    date: "25.12.2025",
    content: `
O Emacs é famoso por ser um programa que faz de <b>tudo</b>. E isso não é exagero (antes fosse!). Com ele você consegue fazer desde a tarefa mais básica que é editar texto, a planilhas, gestão de projetos, leitura de feeds RSS, comunicação via IRC, XMPP ou E-mail...

Enfim, <b>muita</b> coisa.

Óbviamente eu não faço tudo isso que listei acima, mas faço sim algumas coisas com ele e gostaria de escrever sobre. Bom, vamos começar!

* Minha configuração atual

Depois de um tempo em hiato, eu voltei a desenvolver a minha configuração do Emacs. Agora ela além de estar mais robusta, configurei até mesmo o cliente de e-mail [[https://www.gnu.org/software/emacs/manual/html_node/emacs/Rmail.html]["Rmail"]] (o "cliente de e-mail padrão do Emacs") e o [[https://www.gnu.org/software/emacs/erc.html][Erc]] (o cliente IRC pré-instalado do Emacs).

Além disso, usei um snippet do pessoal do [[https://systemcrafters.net][System Crafters]] para conseguir usar com mais facilidade a funcionalidade de leitura de arquivos <code>gpg</code>, o nome da função é meio estranho, mas basicamente, eu só preciso chamar ela e dar como um argumento uma chave presente no arquivo <code>.authinfo</code> e ela me retornará a senha correspondente à essa chave.

Como por exemplo:

#+begin_src
<span>Elisp</span>
(efs/lookup-password :machine irc.libera.chat)
#+end_src
#+begin_quote
[[https://systemcrafters.net/emacs-tips/using-encrypted-passwords/#accessing-passwords-outside-of-emacs][A função em si é essa aqui]]:

#+begin_src
<span>Elisp</span>
(defun efs/lookup-password (&rest keys)
  (let ((result (apply #'auth-source-search keys)))
    (if result
        (funcall (plist-get (car result) :secret))
      nil)))
#+end_src
#+end_quote

Eu também dei uma repaginada no alinhamento das coisas, afinal, não
basta funcionar, tem que ser bonito de se ver, e a Elisp é uma
linguagem ótima para fazer esse tipo de coisa! Porque ela:

- Não se importa com a quantidade de espaços que existe entre uma
  função e um parâmetro;
- Tem uma sintáxe bem simples de se ler (às vezes).

Sendo assim, eu consigo fazer esse tipo de coisa aqui:

#+begin_src
<span>Elisp</span>
(icomplete-mode		               	t)
(ido-mode		               	t)
(ido-everywhere		               	t)
(which-key-mode		               	t)
(delete-selection-mode	               	t)
(global-visual-line-mode               	t)
(global-auto-revert-mode               	t)
(global-prettify-symbols-mode          	t)
(global-hl-line-mode	               	t)
(global-completion-preview-mode        	t)
(global-display-line-numbers-mode       t)
(fido-vertical-mode			t)
#+end_src

#+begin_quote
"Perfeitamente equilibrado, como tudo deve ser."
#+end_quote

<img loading="lazy" src="https://i.redd.it/qpbqimfqx4p71.jpg">

* Meu novo site

Também reescrevi meu site usando o <code>ox-publish</code>, a funcionalidade de publicação de documentos nativa do Emacs! Quando configurado de uma certa forma, ele não fica muito diferente de um [[https://jekyllrb.com][SSG]] ou [[https://codeberg.org/tukain/blog.sh][algo do gênero]].

Dentre vários facilitadores dados pelo [[https://orgmode.org/][org-mode]], acho que a que eu mais gosto é o <i>syntax highlighting</i>. Ele usa as cores do tema que você está usando no Emacs! Além disso, você também consegue executar os blocos de códigos presentes no documento e exibir o resultado desses blocos!

#+begin_src
<span>Elisp</span>
(message "Maneiro, né?")
#+end_src
#+begin_example
Maneiro, né?
#+end_example

Não tenho ainda muitas ideias do que eu posso fazer com essa coisinha, mas pode ser que seja útil para demonstrar algo que aprendi a fazer na [[https://harelang.org][Hare]] (desde que o output seja em texto, claro).

O que eu sei é que o desenvolvimento do site passa a ser algo centralizado no Emacs. Algo que tem seus lados positivos, mas também tem seus negativos. O que eu posso fazer é tirar proveito dos <code>git submodules</code> para conseguir gerenciar um repositório com o "código-fonte" do site e o site "compilado" de forma facilitada (o que eu [[https://codeberg.org/tukain/site][já]] [[https://codeberg.org/tukain/pages][fazia]] na realidade).

Ah, mais uma coisa que eu lembrei agora: cada página desse site funciona de forma "independente" das outras. Basicamente, todas as páginas já incluem toda a estilização necessária para ter a aparência do site (todas elas incluem uma <i>tag</i> <code>&lt;style&gt;</code> com o CSS do site :P).

Além disso, eu também consigo integrar a paleta de cor do tema que eu estou usando no Emacs e aplicar ela no CSS do site!

Ou seja, as cores que o site tem, são as mesmas que a do meu Emacs, sem que eu precise definir elas manualmente!

#+begin_src
<span>Elisp</span>
(setq org-html-head-extra
      (concat
       "&lt;head&gt;&lt;link rel='icon' href='/assets/fav.png'&gt;&lt;/head&gt;"
       "&lt;style&gt;"
       (with-temp-buffer (insert-file-contents "src/assets/styles.css") (buffer-string))
       ":root {"
           "--bg-1:"    (face-attribute 'default :background)			";"
           "--bg-0:"    (face-attribute 'hl-line :background nil 'default)	";"
           "--fg:"	(face-attribute 'default :foreground)			";"
           "--ac:"	(face-attribute 'cursor  :background nil 'default)	";"
       "}"
       "&lt;/style&gt;"))
#+end_src

* Organização financeira

O <code>org-mode</code> também tem a funcionalidade de gerir planilhas, com fórmulas e tudo!

Por exemplo, digamos que eu esteja gerendo uma planilha contendo os meus gastos mensais com planos de assinatura/contas recorrentes. Eu poderia fazer isso aqui:

#+begin_src
<span>Org-mode</span>
| Nome        | Dia de cobrança | Valor (R$) |
|-------------+-----------------+------------|
| Netflix     |              22 |      20.90 |
| Crunchyroll |              11 |      14.99 |
|-------------+-----------------+------------|
| Total       |                 |   35.89 R$ |
#+TBLFM: @>$3=string("R$")vsum(@I$3..@II$3)
#+end_src

É, a sintáxe não é lá aquelas coisas... mas é funcional. Para coisas simples ela é relativamente intuitiva (+/- né). O maneiro mesmo é escrever essas tabelas, por quê? Porque o Emacs formata automagicamente elas! É só começar uma tabela com <code>| nome</code> e apertar <code>tab</code>!

Além disso, também existe a tecla de atalho =Ctrl c }= que exibe alguns marcadores na tabela para poder facilitar o processo de escrever as fórmulas.

Ficando +/- assim:
#+begin_src
<span>Org-mode</span>
   1| Nome        | Dia de cobrança | Valor (R$) |
I*1 |-------------+-----------------+------------|
   2| Netflix     |              22 | 20.90      |
   3| Crunchyroll |              11 | 14.99      |
I*2 |-------------+-----------------+------------|
   4| Total       |                 | 35.89 R$   |
   5| Média       |                 | 17.945 R$  |
#+TBLFM: @4$3=string("R$")vsum(@I$3..@II$3)::@5$3=string("R$")vmean(@I$3..@II$3)
#+end_src

Como eu estou tentando diminuir o meu uso no celular, isso pode ser o tipo de coisa que pode me ajudar. Dessa forma eu vou ter um jeito de gerenciar as minhas finanças sem depender de aplicativos no meu celular. Até porque eu posso criar <i>deadlines</i> no <code>org-mode</code> e visualizar meus afazeres usando a agenda integrada dele!

#+begin_quote
Devo que admitir que não sei ainda como se usa o <code>org-agenda</code>, mas pelo o que eu li no [[https://orgmode.org/features.html#agendas][site oficial]] parece ser muito bacana!
#+end_quote

* Workflow de programação

O Emacs é primariamente um editor de código (por mais incrível que pareça). Sendo assim, ele possui *várias* funções e configurações para deixar a usabilidade na hora de programar melhor.

Uma das coisas mais maneiras do Emacs é a Elisp, a linguagem que ele é configurado, interpreta e é em boa parte escrito nela também. A parte de "interpretar" é que é a mais interessante, porquê isso permite que você teste um "plugin" sem a necessidade de instalar ele! Você só precisa criar um buffer ou abrir o "/scratch buffer/" e apertar =Ctrl c= =Ctrl e=. Isso vai fazer o Emacs interpretar o buffer inteiro, e dessa forma, você pode testar o "plugin" à vontade enquanto o Emacs estiver aberto!

Então você pode, por exemplo, testar um "plugin" que dá <i>syntax highlighting</i> (colorização de código) para alguma linguagem de programação que não é suportada por padrão pelo Emacs, como a [[https://harelang.org][Hare]], por exemplo.

Também tem o <code>compile-mode</code>... Meu Deus, por que isso não é um padrão de indústria?

Basicamente, o <code>compile-mode</code> serve para executar um comando especificado por você no diretório em que você estava e, caso aconteça erros, ele cria "links" com base nas linhas/colunas especificadas pela mensagem de erro.

Por exemplo...

#+begin_src
<span>Hare</span>
// Eu não incluí o módulo "fmt", necessário para usar a função "println"

export fn main() void = {
	println("Olá, mundo!")!;
};
#+end_src
#+begin_example
teste.ha:2:16: error: Unknown object 'println'

2 |		println("Olá, mundo!")!;
  |	               ^


harec for /tmp/teste.ha exited with status 4
#+end_example

A parte escrita com <code>teste.ha:2:16:</code> viraria um link, onde se eu clicar, o Emacs abriria o arquivo onde o erro ocorreu e deixaria o ponteiro do editor na linha e na coluna especificada pelo erro.

Depois de corrigir o erro, eu só preciso apertar uma tecla de atalho para que o comando usado para compilar o programa seja re-executado. Sem a necessidade de ir até onde o arquivo do programa está!

Particularmente isso é bem útil para mim, já que eu sou bem iniciante no mundo de programação, e isso é uma mão na roda na hora de escrever algo.

#+begin_quote
Principalmente na hora de desenvolver as [[https://codeberg.org/tukain/raylib.ha][minhas bindings]] para a [[https://github.com/raysan5/raylib][Raylib]].

Com uma sintáxe dessas aqui a última coisa que eu quero é ter que fazer todo esse processo na mão:

#+begin_src
<span>Hare</span>
@symbol("TakeScreenshot") fn TakeScreenshot(filename: *c::char) void;
export fn take_screenshot(filename: str) void = TakeScreenshot(c::fromstr(filename: str)!);
#+end_src
#+end_quote

* Conclusão

Enfim, acho que já deu para entender um pouco sobre algumas das coisas que eu faço (e coisas que dá para fazer) com o Emacs. Faz um bom tempo que eu não escrevo um post tão longo, já estava com saudades!

Até o próximo post!
`,
  },
  {
    title: "Blog.sh - O meu próprio SSG",
    date: "20.12.2025",
    content: `
Ok, SSG é exagero. Esse carinha só serve para gerar um blog (por isso o nome blog.sh, quem diria).

Ele é basicamente um Shell Script (o mais POSIX que eu conseguir) que gera snippets de HTML a partir de certos parâmetros, usa o smu para converter Markdown para HTML e no fim, junta os dois para criar páginas para posts e lista essas páginas em uma index organizada por ordem crescente.

Ele é um projeto antigo meu e que eu ressuscitei essa semana.

Motivo? Tédio.

Eu tava dando uma olhada em alguns repositórios antigos meus e ele tava no meio deles. Então eu quis dar uma repaginada no garoto e cá está ele, novinho em folha e com funcionalidades que ele não possuia antes, como:

- mostrar as datas dos posts
- categorizar os posts em múltiplas pastas com base na data deles (que nem o Jekyll!)
- gerar um feed RSS

Enfim, ainda tem muito o que eu posso fazer para melhorar esse Script.
`,
  },
  {
    title: "Gambiarras mostruosas com o Codeberg",
    date: "16.12.2025",
    content: `
Se você, assim como eu, é um nerd que usa Linux, então você já ouviu falar do Github. Muito provavelmente você também tem uma conta lá e uma meia dúzia de repositórios.

Mas, você já imaginou ter um repositório que faz um git push para outros repositórios de outros serviços de git hosting?

Esse é o tipo de coisa que você consegue fazer com o Codeberg/Forgejo!

Eu acabei de redescobrir essa funcionalidade e já tô fazendo a festa com ela!

Esse site por exemplo, eu faço uma modificação no repositório (como criar um novo post), mando as mudanças para o Codeberg, e então, o Codeberg vai usar as credenciais que eu providenciei (no caso, a url do outro repositório e um token de acesso) e vai mandar as mudanças do repositório do Codeberg para os outros repositórios que eu registrei!

Ou seja, eu consigo fazer uma espécie de backup dos meus repositórios. Bastando eu registrar outros repositórios de destino.

Ainda usando esse site como exemplo, ele está hospedado no Codeberg, Github e mais outro local, as mudanças são passadas de um para o outro, e no final, todos eles são clones do repositório do Codeberg. E além disso, o meu site fica hospedado tanto no Codeberg quanto no Neocities, já que o Codeberg possui o serviço "Codeberg Pages" (equivalente ao Github Pages) e no Github eu deixei um Workflow para mandar o site contruído para o Neocities.

#+begin_quote
Resumindo, dá para criar uma corrente de repositórios ligados a um repositório principal que são idênticos.
#+end_quote

Já tô configurando meus outros repositórios para funcionarem da mesma forma, já que aí eu vou ter uma certa redundância com cada um, então em caso de um banimento por conta de moderação automática (tô falando de você Github, perdi umas 4 contas nessa brincadeira) eu ainda vou ter um backup do repositório em outro local.
`,
  },
  {
    title: "Niri - O WM mais diferenciado que já usei",
    date: "15.12.2025",
    content: `
Eu sou um usuário Linux a um bom tempo, a pelo menos uns 6/7 anos agora, e eu já usei diversos tipos de Desktop Environments e Window Managers. Desde o clássico XFCE4 ao DWM no X11, e no Wayland, do KDE ao Sway.

Mas todos eles seguem certos arquétipos de ambientes de trabalho semelhantes ao Windows ou ao macOS (no caso dos WM's, eles seguem um padrão bem similar em relação a como eles gerenciam janelas, a diferença fica em o que você consegue modificar e como). Agora o Niri…

Ele parece uma junção do Sway com o GNOME.

Ele gerencia janelas de forma semelhante a outros gerenciadores de janelas, mas não completamente. Nenhuma janela se sobrepõe à outra, a menos que essa janela seja flutuante. Sempre que uma nova janela aparece, ela surgirá no lado direito da tela, e se ela não couber dentro da tela, o foco irá "deslizar" para essa janela.

Imagine que as suas janelas estão em uma fita infinita, todas as janelas irão aparecer nessa fita e nenhuma delas vai se sobrepôr uma com a outra. É basicamente esse o diferencial do Niri.

As áreas de trabalho são basicamente outras "fitas infinitas" que ficam organizadas abaixo umas das outras, e você pode facilmente navegar entre elas e enviar janelas para cada uma. Há também um overview de todas as janelas e áreas de trabalho ("exposé" para os usuários de macOS) que é acessível com uma simples tecla de atalho (Win + o por padrão).

Para facilitar a sua vida, aqui está um vídeo mostrando como isso tudo funciona

Eu tô amando a minha experiência com o Niri. É basicamente a junção das coisas que eu mais amo do Sway com as coisas que mais amo do GNOME.

- Áreas de trabalho dinâmicas
- Overview de todas as janelas
- Organização automática de janelas
- Um arquivo de configuração poderosíssimo
- Roda liso numa batata (meu notebook é um Celeron com 4Gb de RAM)
`,
  },
  {
    title: "Boku no Hero acabou",
    date: "14.12.2025",
    content: `
Cara… eu não consigo nem acreditar nisso… finalmente acabou!

Eu não sei nem o que dizer direito, o sentimento está sendo o mesmo de quando eu terminei Fullmetal Alchemist Brotherhood, a ficha não caiu ainda.

Eu acompanho o anime de Boku no Hero desde o lançamento da segunda temporada, eu tinha uns 12 anos de idade, hoje em dia eu já tenho 20. Posso facilmente dizer que esse foi o anime da minha adolescência.

Assisti todos os episódios religiosamente (eita que exagero) e todos os filmes (quando chegaram aos sete mares).

E hoje, eu assisti o último episódio, da última temporada.

É oficialmente um fim de um cíclo para mim. E foi algo prazeroso. Vou sentir saudades de aguardar todo final de semana para poder assistir um episódio novo.
`,
  },
  {
    title: "Learn You A Haskell",
    date: "10.12.2025",
    content: `
Deixei um dos meus projetos hospedado aqui no meu site. O lyah (Learn You A Haskell)!

Ele é uma restauração do site do livro "Learn You A Haskell For Great Good", só que feita usando o Jekyll.

Tentei deixar ele o mais próximo do site original (quando ele ainda estava de pé, pelo menos).

Se você quiser ver ele, é só acessar "[[https://tukainpng.neocities.org/lyah][tukainpng.neocities.org/lyah]]"!
`,
  },
  {
    title: "TGA 2025",
    date: "06.12.2025",
    content: `
- Valve lança uma linha de Hardware
- Valve já afirmou no passado que tem novos projetos de jogos em desenvolvimento
- Referências a um certo jogo com as siglas "HEV" (Hazardous EnVironment Suit, a armadura do half-life) aparecem no código-fonte da Source 2
- TGA 2025 já tá chegando

* I HAVE HOPE!!!

VALVE, LANÇA HALF-LIFE 3 PELO AMOR DE DEEEUUUSS 😭😭😭😭
`,
  },
  {
    title: "Final de ano já tá chegando",
    date: "03.12.2025",
    content: `
Nesse ano muita coisa aconteceu na minha vida (na de todo mundo na real né?), algumas boas, outras nem tanto. Mas num geral, acho que foi um ano relativamente bom. Principalmente se eu comparar com o tempo perdido que foi final de 2019, 2020, 2021 e o início de 2022.

Fiz também bastante coisa nesse ano, criei muitas boas memórias.

- Tive um reencontro com um amigo que conheci no SENAI (a gente não se via fazia mó tempo)
- Comprei um Nintendo Switch Lite no início do ano, depois em Outubro eu comprei um Switch padrão e vendi o Lite
- Fiz, refiz e fiz esse site de novo e de novo
- Quase comprei uma bicicleta elétrica (ainda bem que não comprei, principalmente por conta dessa PL de pagar IPVA até em cadeira de roda)
- Usei/Testei vários streamings diferentes (até agora, os únicos que duraram o ano todo foram o Spotify e a Crunchyroll)
- Completei 2 anos de namoro com a minha namorada (te amo querida)
- Criei uma conta no Twitter e me arrependi logo em seguida (eu vou deletar aquele treco, ô algoritimo que só recomenda desgraça)
- Tive as minhas primeiras férias como um CLT (o condenado trabalha 1 ano inteiro para tirar 30 dias de descanço, é foda kkkkk)

Enfim, é muita coisa para tentar resumir.
`,
  },
  {
    title: "F One Punch Man 🪦",
    date: "28.11.2025",
    content: `
Eu sei. Você sabe. Todos sabemos. A terceira temporada de One Punch Man está um completo desastre.

Como que conseguiram a façanha de fazer uma animação pior que a da segunda? (ela já era uma bosta!)

Não vou pôr a culpa inteira no estúdio em si, ele tem uma capacidade até que boa para fazer animações de baixo custo. Mas aí é que tá o problema: <b>ANIMAÇÕES DE BAIXO CUSTO</b>.

Pelo amor de Deus, Bandai! É de One Punch Man que a gente tá falando! Como que você espera que isso vai dar certo? Passar da Mad <b>FUCKING</b> House na 1ª temporada para um estúdio que no máximo conseguiria fazer um Slice of Life mediano? É sério?

Sinceramente, eu espero que esse treco seja cancelado. Dói só de ver os episódios lançando.

Descarta essas 2 últimas temporadas, põe esse treco no congelador e só tira se for para tacar na mão de um estúdio como a Bones ou Mad House.
`,
  },
  {
    title: "Uma pequena curiosidade sobre o DOM",
    date: "27.11.2025",
    content: `
Eu gosto muito de assistir as lives do Tsoding, e em uma das lives onde ele estava falando sobre JavaScript, ele mostrou uma coisa muito curiosa sobre o DOM.

Basicamente, qualquer <code>ID</code> dado a um elemento no HTML pode ser acessado como uma variável no JavaScript.

Bacana né?

Você pode, por exemplo, criar um elemento &lt;p&gt;, dar o <code>ID</code> "paragrafo" e usar o JavaScript para adicionar texto a ele!

+/- assim:

#+begin_src
<span>HTML</span>
&lt;p id="paragrafo"&gt;&lt;/p&gt;
&lt;script&gt;
  paragrafo.innerText = "Adicionando texto!"
&lt;/script&gt;
#+end_src
`,
  },
  {
    title: "Tédio",
    date: "25.10.2025",
    content: `
Sabe uma coisa que eu ando sentindo ultimamente? É. Tédio. E por causa dele, eu percebi um padrão de comportamento meu que é muito similar ao da minha mãe. Minha mãe é que nem um tubarão

Não sei se você conhece essa piadinha, mas ela é a seguinte:

#+begin_quote
A minha mãe é que nem um tubarão, se ficar parada morre.
#+end_quote

Essa descrição se encaixa como uma luva para uma das coisas que ela vive fazendo, que é mudar móveis/decoração de lugar, pintar paredes, colocar uma planta nova na varanda, ou até tirar uma, enfim, o ambiente de casa está sempre mudando.

Isso não é algo ruim, longe disso, é bom viver em um ambiente que é tão vivo. Porém, percebi que eu herdei algo semelhante a essa "mania" de mudar as coisas como estão, a diferença é que eu faço isso de forma digital, com esse site!

* Esse site vive em constante mudança

É até enjoativo, eu já fiz e refiz esse site de novo e de novo e de novo. Inclusive, já fiz posts falando sobre isso! Que nem a minha mãe, a constante mudança que faço é tão frequente e tão… natural, que eu acabo só percebendo quando já estou no meio da mudança.

Por um lado, por conta desse desejo constante de experimentar algo novo, eu acabo aprendendo coisas novas. Ano passado mesmo eu não sabia fazer metade do que sei hoje em dia, e o mesmo vale para o ano retrasado e etc.

Por outro lado, sinto que por nunca me dar por satisfeito, não consigo seguir em frente com outros projetos, o que é, ironicamente, péssimo para o meu aprendizado.

* As constantes

Apesar disso, ainda existem coisas que eu não largo a mão com tanta facilidade, uma delas é jogar video-game, por exemplo. Em fevereiro, eu comprei um Nintendo Switch Lite, desde então, venho construindo aos poucos uma biblioteca. Não só isso, como também estou lentamente fazendo uma biblioteca de mangás também, estando perto de finalizar a minha coleção do Akira.

Eu vou tentar me educar para que os meus estudos de programação sejam também uma dessas constantes. O que na realidade já foram no passado, mas devido a vários enventos que ocorreram na minha vida eu acabei perdendo o gás.

Enfim, vou indo nessa, até o próximo post!
`,
  },
  {
    title: "A Nintendo fez uma das patentes mais idiotas do mundo",
    date: "13.09.2025",
    content:
      `Não é segredo para ninguém que a Nintendo (ou como o Lion do Canal Central diz: Metendo) é a encarnação da ganância e soberba. Ela tem franquias incríveis e também foi muito importante para <a href="https://pt.wikipedia.org/wiki/Crise_dos_jogos_eletr%C3%B4nicos_de_1983">salvar a indústria quando ela estava a beira de um colapso</a>, mas, não podemos negar que a Nintendo de hoje é algo completamente diferente do que a Nintendo dos anos 80/90.

#+begin_quote
Principalmente depois que o Reggie saiu dela em 2019
#+end_quote

A Nintendo, pouco a pouco, vem perdendo a vergonha e ficando cada vez mais anti-consumidor (irônico, né?). <a href="https://www.nintendo.com/pt-br/store/products/mario-kart-world-switch-2/?srsltid=AfmBOoqfbT2DxZ0uAFUdP3guuVvxnUAmLk0tdpvAqDA8Wr9_on9vkCpb">Jogos medíocres a R$500,00</a> ou então <a href="https://www.nintendo.com/pt-br/store/products/the-legend-of-zelda-breath-of-the-wild-switch/">jogos com quase 10 anos de idade com preço de lançamento</a> (mesmo em mídia digital!)

Eu comprei um Nintendo Switch Lite por duas razões:

- Jogos em mídia física de verdade (e não Blu-Rays com uma chave de acesso pra um download de 300Gb)
- Custo-benefício

Em relação a este console, eu falo sem medo que este é um dos melhores consoles da geração (O melhor é o Switch OLED). O irônico é que eu tenho um console da Nintendo, com uma case temática de um dos jogos da Nintendo, mas não tenho nenhum jogo da Nintendo.

Preço, falta de legendas/dublagem, enfim, estes e outros pontos me fazem não ter a mínima vontade de comprar um jogo dela. Mas tem uma coisinha que ela fez que simplemente é tão absurda quanto ela é idiota.

* A patente

A patente <a href="https://gamesfray.com/wp-content/uploads/2025/09/US12403397B2-2025-09-02.pdf">N°12.403.397</a> é, de forma resumida, uma patente sobre as mecânicas de sumonar um personagem para lutar no lugar do personagem controlado pelo jogador.

Notou alguma semelhança?

Jogos da franquia JoJo's Bizarre Adventures, Persona, Digimon, Bakugan, Yu-Gi-Oh!, todos eles possuem mecânicas que caem como uma luva nessa descrição da patente.

#+begin_quote
Inclusive, <a href="https://en.wikipedia.org/wiki/List_of_JoJo%27s_Bizarre_Adventure_video_games#Main_series:~:text=JoJo%27s%20Bizarre%20Adventure%20(1993%20%2D%20Super%20Famicom%20%2D%20Cobra%20Team%2C%20WinkySoft)%20%2D%20Role%2Dplaying%20game">alguns deles existiam antes</a> mesmo da <a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon_(video_game_series)#:~:text=The%20first%20games%2C%20Pocket%20Monsters%20Red%20and%20Green%2C%20were%20released%20in%201996%20in%20Japan%20for%20the%20Game%20Boy">franquia Pokémon</a> existir!
#+end_quote

Bom, agora a Metendo© tem uma patente que é infringida pelos jogos destas franquias.

Mas, como já destacado pela <a href="https://www.ign.com/articles/nintendo-should-never-have-received-controversial-summon-character-and-let-it-fight-pokmon-patent-ip-lawyers-say#:~:text=However%2C%20Don%20McGowan,screen%20patent.%E2%80%9D">IGN</a> no artigo deles falando sobre o assunto, dificilmente alguém vai levar essa patente a sério, e isso foi algo que o antigo CLO da própria Nintendo disse! Essa patente é ridícula a esse ponto, nem um ex-funcionário põe fé nessa bosta.
`,
  },
  {
    title: "Até que eu tô curtindo a Elisp",
    date: "30.06.2025",
    content: `
Nos últimos dias eu não ando fazendo tanta coisa assim, além de trabalhar e estudar um pouco quando dá, mas uma coisa que eu venho experimentando cada vez mais (até no trabalho, quando tenho tempo) é a própria linguagem do Emacs, a Elisp.

Se você me conhece, ou já viu meu perfil do Github, você já sabe que eu sou um usuário de drog- Emacs, e ele não só é configurado nessa linguagem, como é escrito nela e também interpreta ela! Só para colocar em perspectiva, um equivalente a isso seria um programa configurado em Python, que é escrito em Python e que interpreta Python.

A Elisp é um dialeto da Lisp que é integrada ao Emacs e que tem funcionalidades que giram entorno de fazer parte de um editor de texto. Resumindo:

- Você não tem dor de cabeça para gerenciar arquivos
- Você tem acesso a ferramentas de manipulação de buffers de texto
- Você tem toda a flexibilidade do Emacs a disposição

Enfim, é uma boa linguagem para experimentar.

Porém a sintaxe é que é a parte intrigante dos dialetos de Lisp.

Tudo (eu não tô de sacanagem) tem base em S-Expressions, o que faz com que uma declaração que seria escrita assim em C:

#+begin_src
<span>C</span>
int soma(int x, int y)
{
  return x + y;
}
#+end_src

Virar isso aqui:

#+begin_src
<span>Elisp</span>
(defun soma (x y)
  (+ x y))
#+end_src

Ambos resultam na mesma coisa, uma função que tem dois argumentos e que realiza a soma dos dois. Só.

E de primeira, isso é estranho para um cacete, mas depois de um tempo… continua estranho, mas você começa a curtir até.

É muito simples entender como que funciona a lógica por trás disso, só não é lá muito comum de ver algo desse tipo. E eu tô curtindo brincar com isso.

Principalmente porquê, como eu já disse, a Elisp é parte do Emacs, então onde o Emacs pode ser usado, eu posso brincar com ela (ou até mesmo criar coisas úteis, o que é difícil de se imaginar vindo de mim).
    `,
  },
];

export default posts;
