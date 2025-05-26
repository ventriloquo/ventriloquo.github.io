---
title: Minhas bindings da Raylib
thumbnail: raylib.ha.jpg
---
Retornei ao desenvolvimento das minhas bindings da Raylib.

Depois de ter basicamente abandonado esse projeto por 8 meses, eu finalmente
voltei a desenvolver ele.

Esse projeto serve para os meus estudos de programação (eu ainda não sei
programar), sendo assim, todo o processo de desenvolvimento dessas bindings
está sendo manual.

Eu sei muito bem que essa não é nem de longe a forma minimamente eficiente, mas
eu não estou querendo ser eficiente nesse processo, não agora pelo menos, eu
quero adquirir experiência com a Hare e aprender as diferenças dela com a C, e
deixar essas informações queimadas no meu cérebro.

Tendo isso em vista, no momento, eu já consegui traduzir os dois primeiros
exemplos que são mostrados no site da própria Raylib. O segundo exemplo foi um
bom refresco para mim. Já fazia muito tempo desde a última vez que eu usei a
Hare, e eu não lembrava de basicamente nada sobre como eu usava certas coisas.

O segundo exemplo da Raylib faz o uso de enums, o que eu nunca cheguei a usar
no tempo em que eu estava estudando a Hare pela primeira vez. Então, lá fui eu
para a página de tutorial da Hare buscar por algum uso de enum.

O que descobri é que para usar um enum, você precisa explicitamente usar o nome
do enum em si e acessar a propriedade dele quase que da mesma forma que é feita
quando você importa um módulo. Da seguinte forma:

```rust
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
```

Ao decorrer do código para o segundo exemplo, são utilizados outros enums e
também são utilizados switch-cases que fazem uso dos mesmos.

Foi um bom execício.
