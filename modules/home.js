"use strict";

import { create_priv_page, markup, tag } from "./common.js";

import { posts } from "./db/posts.js";
import { list_entries } from "./blog.js";

const sun = "<img loading='lazy' width='24' height='24' src='/assets/sun.svg'>";
const moon =
  "<img loading='lazy' width='24' height='24' src='/assets/moon.svg'>";

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
        "onclick": "navigator.toggle_dark_mode()",
        "style": "display: inline-block; text-align: center; padding: 0px 24px",
      }),
    ),
  );

  const theme_switcher = document.getElementById("theme_switcher");
  const check_theme = () => {
    if (localStorage.theme === "dark") {
      theme_switcher.innerHTML = sun;
    } else {
      theme_switcher.innerHTML = moon;
    }
  };

  const toggle_dark_mode = () => {
    document.documentElement.classList.toggle("dark-mode");

    const isDark = document.documentElement.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    check_theme();
  };

  navigator.toggle_dark_mode = toggle_dark_mode;
  check_theme();

  list_entries(5, "recent");
}
