---
date: '2024-04-04'
thumbnail: (─‿‿─)
title: Algumas atualizações
description: Porquê eu sou tão indeciso?
type: post
tags:
  - updates
possui_bloco_de_código: true
---
Tudo bem com você? Espero que sim. Bom, na última semana eu ando passando
quase que por uma montanha-russa de emoções. Mudei a estrutura do meu site,
migrei do Github para 3 serviços Git diferentes, voltei a usar o Neovim, decidi
deixar a Hare de lado… Mas esse último não durou muito, e eu vou começar
comentando sobre ele.

# Já estou usando a Hare de novo.

Bom,
apesar de tudo o que eu disse em um post de uma semana atrás, eu acabei
voltando a usar a Hare. Dessa vez eu não sei muito bem como explicar o motivo
de voltar, mas posso dizer que foi algo mais emocional do que lógico. Algo como
um sentimento de nostalgia, já que Hare foi a primeira linguagem de programação
que eu realmente parei para estudar e aprender a programar com ela.

Pode
haver também um pouco de orgulho envolvido, já que ela é uma linguagem
relativamente desconhecida e por conta disso não existem tutoriais e vídeos
sobre ela por aí, com excessão dos vindos dos próprios desenvolvedores da Hare
e de poucas excessões como o Tsoding.

E não, eu ainda não sei programar,
mas posso dizer que estou aprendendo uma coisa ou outra, e devo isso à Hare.
Acho que o design dela faz com que quando eu tente fazer algo e ele não
funciona, o problema está puramente na forma em que eu me expressei, e não na
forma que eu pensei.

Um exemplo muito bom disso é um problema que tive
ao fazer um clone do comando “cat”. O problema era o seguinte:

O
programa conseguia ler o arquivo dado pelo usuário sem problema, porém, ele
mostrava apenas a primeira linha do arquivo. Então, eu precisaria de uma forma
de mostrar a linha atual e depois disso a próxima e assim por diante,
incrementando a posição atual.

Eu provavelmente não vou conseguir
escrever exatamente como que estava a linha de código que só mostrava a
primeira linha, mas era algo mais ou menos assim:

```rust
fn lerArquivo(lines: []str) void = {
  let total = len(lines);

  for (let i = 0z; i < total) { 
    fmt::println(lines[i])!; 
    i=i+1;
  }; 
}; 
```

O erro está na 6ª linha, eu tentei fazer o valor de “i” ser incrementado por
“1” até que o valor de “i” fosse igual ao “total”, o que em questão de lógica
está correto, mas a expressão “i = i+1” está errada.

Se eu não estou
enganado, esta é a sintaxe usada na linguagem de programação Lua.

A
forma correta de incrementar um número em Hare (e em outras línguas) é com o
operador “+=”, que serve justamente para incrementar. Então, feita essa pequena
modificação, o programa re-itera pelo arquivo, lê, e escreve a linha atual sem
nenhum problema.

E sim, eu tomei como base parte de um exemplo da
documentação da Hare para fazer esse programa, sendo essa parte alguns dos
módulos usados, mas a lógica em si e a execução foram feitos por conta
própria.

# O site sofreu várias mudanças

Acompanhada dessa minha
saga de estudos sobre programação, vieram também diversas mudanças com esse
site. Se bem que nesse aspecto, mudar o site é algo extremamente
recorrente. <s><a href="/2024/04/29/automatizei-o-sistema-de-blogs-do-site.html">Mas devo mencionar a atual presença de nenhum framework ou
    gerador de site estático sendo usada para a criação de páginas/posts.</a></s>

Em
relação a Web, a única coisa que se mantém consistente em todas as versões do
meu site que já existiram é a falta ou presença mínima de javascript. Com
excessão disso, já fiz diversas mudanças que variam de coisas como a estrutura
de arquivos do site, para tags usadas, classes, propriedades, enfim, toda a
infraestrutura.

A mudança mais atual é o meu próprio css sendo
implementado e alterado conforme minhas necessidades. É a basicamente a minha
primeira vez fazendo o css do meu site completamente do 0, e tomando cuidado
também em relação a resposividade dele com aparelhos mobile, na verdade dando
um foco especial a esses aparelhos.

O motivo disso é porque a única
pessoa que eu tenho não só plena certeza de que lê todos os posts, como também
é alguém que eu sempre tento agradar com cada post: a minha namorada.

E
bom, a forma que ela lê os artigos é por meio do celular dela, então nada mais
justo do que dar uma atenção especial para este tipo de aparelho.

# Migrei do Github para 3 serviços Git diferentes

Ok, isso é algo que
precisa de uma explicação mais detalhada.

A não muito tempo atrás esse
site, junto de outros projetos, era hosteado no Github, o que eu já devo
admitir que não gostava nem um pouco. A interface gráfica é muito sem
personalidade, basicamente um espelho das interfaces corporativas que vemos
pelo mundo afora.

O que não é uma surpresa na verdade, afinal, o Github
é um produto da Microsoft, então isso não é nada além do mínimo esperado. E
claro, ele também é algo de código fechado.

Ao menos para mim, não é
muito confortável deixar algo de código aberto guardado em um produto de código
fechado, muito menos depender desse produto.

Mas enfim, o motivo que me
fez deixar de usar o Github foi simples: Ele simplesmente desabilitou minha
conta por conta de “atividade suspeita na conta”, sendo que essa atividade foi
realizada por mim mesmo, usando uma chave ssh verificada pela minha conta (que
inclusive tem também autenticação de 2 fatores via OTP e app).

E já que
o Github descidiu dar o primeiro passo, eu segui adiante.

Atualmente o
meu site é hosteado no Codeberg, e também é nele que guardo meus projetos,
porém, ele não é o meu Git principal, ele é o meu secundário. O meu git
primário é o git.cbps.xyz/guapito, e eu também tenho um git reserva que uso
como backup no git.disroot.org.

Eu mantenho todos os 3 gits
sincronizados usando uma função que os 3 compartilham por usarem o mesmo
software de servidor: push mirrors.

Tudo o que eu preciso fazer é
garantir que todos os 3 possuem os mesmos repositórios, depois, em 1 dos gits
eu adiciono os repositórios dos demais nas configurações do repositório
respectivo na seção de push mirros e pronto, quaisquer mudanças feitas nesse
repositório serão refletidas nos demais.

# Voltei a usar o Neovim

Bom, eu já esperava que essa volta viria cedo ou tarde. O Helix é um ótimo
editor de texto, e ele realmente é melhor que a minha configuração do Neovim,
porém, o problema vive justamente aí, eu posso deixar o meu Neovim melhor que o
Helix com apenas alguns ajustes e 2/3 plugins.

<s><a href="/2024/05/30/minha-nova-configura%C3%A7%C3%A3o-do-neovim.html">E eu fiz diversas
mudanças na minha configuração do Neovim, a única coisa que está faltando mesmo
é suporte a lsp, tirando isso, ela já está melhor que o Helix em seu estado
atual.</a></s>

A simples possibilidade de modificar a interface e como as coisas
funcionam da forma que quiser já é algo que me faz preferir o Neovim. Claro que
eu não sou um maníaco por customização, sempre que uma opção limitada for
melhor que a customizável em certa tarefa, eu vou usar a opção limitada, e bom,
esse foi o caso do Helix enquanto eu não aprimorava a minha configuração do
Neovim.

E agora que a minha configuração está muito mais madura, eu
oficialmente posso colocar o Helix em uma posição de editor de texto
secundário, tomando o lugar do Emacs, que deixei de utilizar a um tempo.

# _Fin_

Enfim, obrigado por ler este artigo, significa muito
para mim.

Até o próximo post!
