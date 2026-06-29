"use strict";

import { create_page, markup, tag } from "./common.js";

export function etc() {
  create_page(
    "etc",
    "Mais...",
    tag(
      "p",
      {},
      markup(`
#+begin_note
Se você está vendo esta página, é porquê seu navegador não o redirecionou para a página correta.

<a href='/etc/'>Aqui está o link para você ir lá</a>
#+end_note
      `),
    ),
  );

  const e = document.querySelector("#etc_title");

  const io = new IntersectionObserver((entry) => {
    entry.forEach((entry) => {
      if (entry.isIntersecting) {
        window.location.href = "/etc/";
        observador.unobserve(e);
      }
    });
  }, {
    threshold: 1,
  });

  io.observe(e);
}
