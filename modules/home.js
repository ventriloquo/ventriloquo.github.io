"use strict";

import { create_priv_page, markup, tag } from "./common.js";

import { posts } from "./db/posts.js";
import { list_entries } from "./blog.js";

export function home() {
  create_priv_page(
    "home",
    "Caderno do Tukain",
    tag(
      "div",
      {},
      markup(
        `Aqui é um lugar onde eu gosto de compartilhar um pouco do meu cotidiano. Também é um lugar onde eu ponho em prática algumas coisas que eu aprendi, seja elas relacionadas à tecnologia, programação ou qualquer outro assunto que eu achar pertinente.
#+begin_quote
<span>Reg Braithwaite</span>
"The strength of JavaScript is that you can do anything. The weakness is that you will."
#+end_quote

* Últimos posts
`,
      ),
      tag("ul", { "id": "recent" }),
      tag("hr"),
      tag("a", {
        "id": "theme_switcher",
        "class": "button",
        "style":
          "user-select: none; display: inline-block; text-align: center; padding: 0px 24px",
      }),
    ),
  );

  list_entries(5, "recent");
}
