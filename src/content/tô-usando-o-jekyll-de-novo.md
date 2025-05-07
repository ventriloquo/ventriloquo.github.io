---
date: '2024-07-29'
title: Tô usando o Jekyll de novo
thumbnail: ._.
description: 'Acho melhor eu ir logo a um psicólogo, isso não deve ser normal'
type: post
tags:
  - web
possui_bloco_de_código: true
---
É isso mesmo que você acabou de ler. Eu tô usando o Jekyll de novo. Cara, eu
devo estar inconscientemente treinando para conseguir o recorde mundial de
pessoa mais indecisa, eu simplesmente não consigo entender o porquê de eu fazer
isso, é algo praticamente impulsivo.

# Jekyll... de novo.

Ok, vamos direto ao o que importa: o Jekyll.

Sim, eu tinha re-estruturado o site inteiro para que eu só precisasse de um
script que eu mesmo tinha criado, como eu mencionei [aqui](/2024/06/25/Simplifiquei-o-site.html).

Para jogar mais sal na ferida, eu tinha dito o seguinte:

> Eu queria deixar esse site mais fácil de ser editado (ou até mesmo atualizado) pelo Neocities.

Pois é. Agora eu tô usando o Jekyll de novo.

Enfim, o resumo da ópera é que eu percebi um pequeno problema com a forma que
eu estava estruturando o site, e meio que... Não daria para manter ele do jeito
que ele estava por muito tempo. A não ser que eu quisesse que este site fosse
apenas um blog (sem feed rss, eu conseguiria fazer isso modificando o script,
mas seria mais trabalhoso do que re-implementar o Jekyll, e bom, aqui estamos),
nesse caso ele estava funcionando perfeitamente bem.

# 0 Javascript, de novo.

Uma consequência de voltar a usar o Jekyll é a falta de necessidade de utilizar
o Javascript em diversas partes do site. O meu único uso era para blocos de
código, e eu utilizava o Prism.js para renderizar esses blocos.

Mas o Jekyll já vem com algo que faz a mesma coisa que o Prism, e o que for
gerado vai fazer parte do HTML do site, sem a necessidade do usuário ser quem
processa a sintáxe do bloco de código.

Eis aqui um exemplo:

```rust
use fmt;

export fn main() void = {
    fmt::println("Olá, mundo!")!;
};
```

# Mas espere aí! Tem uma coisa diferente

O que eu fiz de diferente desta vez foi em relação com o shell-script que era
utilizado para criar novos posts, mesmo antes de eu ter removido o Jekyll do
site, era utilizado um shell-script para poder agilizar o processo de criar
novos posts.

O que é que tá diferente nele?

Simples.

Ele não é mais um shell-script, ele é um script Ruby!

A mesma linguagem em que o Jekyll é escrito. Ou seja, eu removi uma dependência
externa do processo de construção do site. Não era algo crítico, mas ainda
assim é algo que eu acho bom de fazer.

No caso, diminuir a quantidade de peças diferentes envolvidas no projeto.

O script não é tão diferente do [anterior](/2024/06/25/Simplifiquei-o-site.html),
mas já dá para ver suas particularidades:

```ruby
#!/usr/bin/ruby
require 'date'

puts "Escolha o que você quer fazer:"
puts "1: Fazer um post"
puts "2: Fazer um tutorial"
puts ""
choice = gets.chomp

if choice == "1"
  path = "_posts"
elsif choice == "2"
  path = "_tutorial"
else
  abort("Opção inválida.")
end

puts "Título:"
title = gets.chomp
puts ""
puts "Descrição:"
description = gets.chomp
puts ""
puts "Thumbnail:"
thumbnail = gets.chomp
date = DateTime.now.strftime("%Y-%m-%d-")

filename = date + title + ".md"
file = File.new(filename, "w")

File.open(file, "w") do |f|
f.write("---
layout: post
draft: true
thumbnail: #{thumbnail}
title: #{title}
description: #{description}
---
* TOC
{:toc}
")
end

spawn("mkdir -p #{path}")
spawn("mv #{filename} #{path}")
exec("nvim", "#{path}/#{filename}")
```

Tudo o que vou comentar sobre este bloco é isso aqui:
> Eu sei que esse código não é o mais eficiênte, mas o importante é que ele funciona.

# _Fin_

Bom, isso é basicamente tudo o que eu tenho para dizer por hoje, amanhã tenho
que ir trabalhar (vida de CLT é complicada, mas vale a pena).

Até o próximo post!
