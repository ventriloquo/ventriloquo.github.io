"use strict";

import { create_priv_page, markup, tag } from "./common.js";

export function pagina_de_testes() {
  create_priv_page(
    "testes",
    "Página de testes",
    tag(
      "p",
      {},
      markup(
        `
* Formatação básica

*Negrito*, **Itálico**, ***Negrito e Itálico***

* Listas

- Pera
- Uva
- Maçã
- Salada Mista

* Texto pré-formatado

#+begin_src
use fmt;

export fn main() void = {
  let a: int = 0;
  let b: int = 1;

  for (a < 100_000_000)
  {
    let c: int = a + b;
    a = b;
    b = c;

    fmt::printfln("{}", a)!;
  };
};
#+end_src

#+begin_src
#include "raylib.h"

typedef enum GameScreen { LOGO = 0, TITLE, GAMEPLAY, ENDING } GameScreen;

int main(void)
{
    const int screenWidth = 800;
    const int screenHeight = 450;

    InitWindow(screenWidth, screenHeight, "raylib [core] example - basic screen manager");

    GameScreen currentScreen = LOGO;

    int framesCounter = 0;          

    SetTargetFPS(60);               

    while (!WindowShouldClose())    
    {
        switch (currentScreen)
        {
            case LOGO:
            {
                framesCounter++;    

                if (framesCounter > 120)
                {
                    currentScreen = TITLE;
                }
            } break;

            case TITLE:
            {
                if (IsKeyPressed(KEY_ENTER) || IsGestureDetected(GESTURE_TAP))
                {
                    currentScreen = GAMEPLAY;
                }
            } break;

            case GAMEPLAY:
            {
                if (IsKeyPressed(KEY_ENTER) || IsGestureDetected(GESTURE_TAP))
                {
                    currentScreen = ENDING;
                }
            } break;

            case ENDING:
            {
                if (IsKeyPressed(KEY_ENTER) || IsGestureDetected(GESTURE_TAP))
                {
                    currentScreen = TITLE;
                }
            } break;

            default: break;
        }

        BeginDrawing();
            ClearBackground(RAYWHITE);
            switch(currentScreen)
            {
                case LOGO:
                {
                    DrawText("LOGO SCREEN", 20, 20, 40, LIGHTGRAY);
                    DrawText("WAIT for 2 SECONDS...", 290, 220, 20, GRAY);
                } break;

                case TITLE:
                {
                    DrawRectangle(0, 0, screenWidth, screenHeight, GREEN);
                    DrawText("TITLE SCREEN", 20, 20, 40, DARKGREEN);
                    DrawText("PRESS ENTER or TAP to JUMP to GAMEPLAY SCREEN", 120, 220, 20, DARKGREEN);
                } break;

                case GAMEPLAY:
                {
                    DrawRectangle(0, 0, screenWidth, screenHeight, PURPLE);
                    DrawText("GAMEPLAY SCREEN", 20, 20, 40, MAROON);
                    DrawText("PRESS ENTER or TAP to JUMP to ENDING SCREEN", 130, 220, 20, MAROON);
                } break;

                case ENDING:
                {
                    DrawRectangle(0, 0, screenWidth, screenHeight, BLUE);
                    DrawText("ENDING SCREEN", 20, 20, 40, DARKBLUE);
                    DrawText("PRESS ENTER or TAP to RETURN to TITLE SCREEN", 120, 220, 20, DARKBLUE);
                } break;

                default: break;
            }

        EndDrawing();
    }

    CloseWindow();

    return 0;
}
#+end_src

#+begin_example
Lorem Ipsum Dolor Sit Amet
#+end_example

#+begin_src
Lorem Ipsum Dolor Sit Amet
#+end_src
#+begin_example
Lorem Ipsum Dolor Sit Amet
#+end_example

* Código dentro de parágrafo

Lorem Ipsum Dolor <code>Sit</code> Amet

* Notas

#+begin_note
Lorem Ipsum Dolor Sit Amet
#+end_note

* Citações

#+begin_quote
Lorem Ipsum Dolor Sit Amet
#+end_quote

#+begin_quote
<span>Lorem</span>
Lorem Ipsum Dolor Sit Amet
#+end_quote

* Links

Lorem [[https://www.lipsum.com/][Ipsum]] Dolor Sit Amet

* Botões

<ul> <li> <a class="blog_entry button" href="#testes">teste</a> </li> <li> <a class="blog_entry button" href="#testes">teste</a> </li> <li> <a class="blog_entry button" href="#testes">teste</a> </li> </ul>

<a class="button" href="#testes">teste</a>
<a class="button" href="#testes">teste</a>
<a class="button" href="#testes">teste</a>

<a class="button" style="display: inline-block" href="#testes">teste</a>
<a class="button" style="display: inline-block" href="#testes">teste</a>
<a class="button" style="display: inline-block" href="#testes">teste</a>

<div style="display: flex">
<a class="button" style="display: inline-block" href="#testes">teste</a>
<a class="button" style="display: inline-block" href="#testes">teste</a>
<a class="button" style="display: inline-block" href="#testes">teste</a>
</div>
`,
      ),
    ),
  );
}
