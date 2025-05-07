---
date: '2024-05-28'
thumbnail: (@ _ @)
title: Harebuild
description: Um build system no estilo do Zig Build System
type: post
tags:
  - programação
  - linux
possui_bloco_de_código: true
---
Quanto tempo meu caro leitor, espero que você esteja bem.

Hoje eu trago algo que comecei a fazer a pouco tempo, e que, pelo menos para
mim, é algo que acho que será útil assim que estiver concluído. Estou me
referindo a um build-system que comecei a fazer para a Hare, ele está em seus
estágios iniciais, eu nem sequer li sobre como fazer um build-system ainda.

# Então como que ele funciona por enquanto?

No momento ele é basicamente um shell-script glorificado, não que isso seja um
problema, mas ainda assim continua sendo algo que um shell-script (ou Makefile)
conseguiria fazer de forma até mesmo mais simples.

Porém, a ideia é ter uma forma de compilar um programa feito em Hare, usando um
outro programa feito em Hare, quiçá até mesmo integrar o build-system no
próprio código-fonte do programa.

# Como está a implementação atual?

Por enquanto, como eu já disse, ela é basicamente um shell-script glorificado,
mas para fins de tranparência (já que eu não criei um repositório para esse
projeto no momento) aqui está o código-fonte dela:

```rust
use fmt;
use os;
use os::exec;

type Build = struct {
	flag:	str,
	target:	str,
	link:	str,
	output:	str,
	src:	str,
};

fn build(b: Build) void = {
	let cmd = exec::cmd(
		"hare",
		"build",
		"-a",
		b.target,
		b.flag,
		b.link,
		"-o",
		b.output,
		b.src,
	)!;
	let proc = exec::start(&cmd)!;
	let status = exec::wait(&proc)!;
	assert(exec::check(&status) is void);
};

def src_file = "hello.ha";

export fn main() void = {
	let prog = Build {
		target =	os::machine(),
		flag =		"-R",
		link =		"-L.",
		src =		src_file,
		output =	"hello",
	};

	build(prog);
};

@init fn init() void = {
	fmt::printfln("Compilando: {}", src_file)!;
};

@fini fn init() void = {
	fmt::println("Programa compilado!")!;
};
```

Como eu disse, extremamente simples, um shell-script glorificado, mas apesar
disso, ainda é um começo de algo que pode vir a ser útil.

# _Fin_

Bem, isso é tudo o que eu tenho a dizer por hoje.

Te vejo no próximo post!
