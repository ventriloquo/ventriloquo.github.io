"use strict";
const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
const errorMsg = `ATENÇÃO:
Este site não é completamente otimizado para o Firefox.

Algumas partes do site podem ser renderizadas de forma incorreta ou falhar em renderizar por completo.

Desculpe pelo transtorno.
    -- Tukain
`;

if (isFirefox) {
  alert(errorMsg);
  console.error(errorMsg);
}

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
import { etc } from "./modules/etc.js";
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
  // Remove o id `body` do primeiro elemento com esse id.
  document.getElementById("body").removeAttribute("id");

  home();
  projects();
  blog();
  books();
  games();
  links();
  ideias();
  about();
  etc();

  // Não aparecem na navbar
  menu();
  sitemap();
  intro();
  pagina_de_testes();
}

main();

function active_page() {
  const hash = `/${document.location.hash}_button`;
  const active_button = document.getElementById(hash);

  if (active_button) {
    document.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    document.getElementById(hash).classList.add("active");
  }

  switch (document.location.hash) {
    case "#home":
    case "#testes":
    case "#sitemap":
    case "#intro":
      document.querySelectorAll(".active").forEach((e) => {
        e.classList.remove("active");
      });
      break;
  }
}

const sections = document.querySelectorAll("section");
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const firstChild = entry.target.children[0];
      if (firstChild && firstChild.innerText) {
        document.title = firstChild.innerText;
      }
    }
  }
}, { threshold: 0 });

sections.forEach((s) => io.observe(s));

function handleNavigation() {
  setTimeout(() => {
    active_page();
  }, 0);
}

globalThis.addEventListener("popstate", handleNavigation);
globalThis.addEventListener("hashchange", handleNavigation);

const theme_switcher_desktop = tag("a", {
  "id": "theme_switcher_desktop",
  "class": "button",
  "style": `
    user-select: none;
    display: inline-block;
    text-align: center;
    padding: 0px 24px;
  `,
});

const theme_switcher_mobile = tag("a", {
  "id": "theme_switcher_mobile",
  "class": "button",
  "style": `
    user-select: none;
    display: inline-block;
    text-align: center;
    display: block;
    width: -webkit-fill-available;
    margin-top: 1px;
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  `,
});

document.getElementById("desktop_menu").appendChild(theme_switcher_desktop);
document.getElementById("mobile_menu").appendChild(theme_switcher_mobile);

const switch_theme = {
  sun: `<img
          title='Light Mode'
          loading='lazy'
          width='24'
          height='24'
          src='/assets/sun.svg'>`,
  moon: `<img
            title='Dark Mode'
            loading='lazy'
            width='24'
            height='24'
            src='/assets/moon.svg'>`,

  theme_switcher: [
    document.getElementById("theme_switcher_desktop"),
    document.getElementById("theme_switcher_mobile"),
  ],

  change_icon() {
    if (localStorage.theme === "light") {
      this.theme_switcher[0].innerHTML = this.moon;
      this.theme_switcher[1].innerHTML = this.moon;
    } else {
      this.theme_switcher[0].innerHTML = this.sun;
      this.theme_switcher[1].innerHTML = this.sun;
    }
  },

  toggle_dark_mode() {
    document.documentElement.classList.toggle("light-mode");
    const isLight = document.documentElement.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    this.change_icon();
  },
};

switch_theme.change_icon();

document.getElementById("theme_switcher_desktop").addEventListener(
  "click",
  () => {
    switch_theme.toggle_dark_mode();
  },
);
document.getElementById("theme_switcher_mobile").addEventListener(
  "click",
  () => {
    switch_theme.toggle_dark_mode();
  },
);

if (localStorage.theme === "light") {
  document.documentElement.classList.add("light-mode");
}

//document.addEventListener("keydown", (e) => {
//  switch (e.key) {
//    case "p":
//      document.location = "#projetos";
//      break;
//    case "b":
//      document.location = "#blog";
//      break;
//    case "s":
//      document.location = "#bookshelf";
//      break;
//    case "g":
//      document.location = "#jogos";
//      break;
//    case "i":
//      document.location = "#ideias";
//      break;
//    case "w":
//      document.location = "#links";
//      break;
//    case "a":
//      document.location = "#about";
//      break;
//    case "t":
//      document.location = "#testes";
//      break;
//    case "d":
//      switch_theme.toggle_dark_mode();
//      break;
//    case "m":
//      document.location = "#sitemap";
//      break;
//    case "H":
//      document.location = "#home";
//      break;
//    case "f":
//      document.location =
//        `mailto:contato.nest604@passinbox.com?subject=Feedback: ${document.title}`;
//      break;
//    case "h":
//      history.back();
//      break;
//    case "j":
//      window.scrollBy({ top: 100, behavior: 'smooth' });
//      break;
//    case "k":
//      window.scrollBy({ top: -100, behavior: 'smooth' });
//      break;
//    case "l":
//      history.forward();
//      break;
//  }
//});
//
