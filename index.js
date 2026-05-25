"use strict";

import { tag } from "./modules/common.js";
import { blog } from "./modules/blog.js";
import { projects } from "./modules/projects.js";
import { home } from "./modules/home.js";
import { menu } from "./modules/menu.js";
import { books } from "./modules/books.js";
import { games } from "./modules/games.js";
import { links } from "./modules/links.js";
import { sitemap } from "./modules/sitemap.js";
import { intro } from "./modules/intro.js";
import { ideias } from "./modules/ideias.js";
import { about } from "./modules/about.js";
import { pagina_de_testes } from "./modules/teste.js";

function main() {
  tag(
    "header",
    {},
    tag(
      "nav",
      {},
      tag(
        "div",
        { "class": "desktop_menu" },
        tag(
          "a",
          { "href": "/#home" },
          tag("img", {
            "loading": "lazy",
            "src": "/assets/fav.png",
            "style": "margin: 0 auto; border-radius: 5px",
            "width": "80",
            "height": "80",
          }),
        ),
      ),
      tag("div", { "class": "desktop_menu", "id": "desktop_menu" }),
      tag(
        "div",
        { "class": "mobile_menu" },
        tag("a", { "href": "/#home" }, "Início"),
      ),
      tag(
        "div",
        { "class": "mobile_menu" },
        tag("a", { "href": "/#mobile_menu" }, "Menu"),
      ),
    ),
  );
  tag("main", { "id": "body" });
  // remove o id `body` do primeiro elemento com esse id.
  document.getElementById("body").removeAttribute("id");

  home();
  projects();
  blog();
  books();
  games();
  links();
  ideias();
  about();
  menu();
  sitemap();
  intro();
  pagina_de_testes();
}

navigation.addEventListener("currententrychange", (e) => {
  setTimeout(() => {
    const sections = document.getElementsByTagName("section");
    for (let s of sections) {
      if (s.checkVisibility()) {
        document.title = s.children[0].innerText;
      }
    }
  }, 0);
});

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "p":
      document.location = "#projetos";
      break;
    case "b":
      document.location = "#blog";
      break;
    case "l":
      document.location = "#bookshelf";
      break;
    case "j":
      document.location = "#jogos";
      break;
    case "i":
      document.location = "#ideias";
      break;
    case "L":
      document.location = "#links";
      break;
    case "a":
      document.location = "#about";
      break;
    case "t":
      document.location = "#testes";
      break;
    case "m":
      document.location = "#sitemap";
      break;
    case "h":
      document.location = "#home";
      break;
    case "f":
      document.location =
        `mailto:contato.nest604@passinbox.com?subject=Feedback: ${document.title}`;
  }
});

main();
