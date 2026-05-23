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
* Listas

- Pera
- Uva
- Maçã
- Salada Mista

1. Pera
2. Uva
3. Maçã
4. Salada Mista

* Texto pré-formatado

#+begin_src
Lorem Ipsum Dolor Sit Amet
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

#+begin_src
<span>Lorem Ipsum</span>
Lorem Ipsum Dolor Sit Amet
#+end_src

#+begin_src
<span>Lorem Ipsum</span>
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
