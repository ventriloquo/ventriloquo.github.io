"use strict";
import { create_page, markup, tag } from "./common.js";

export function about() {
  create_page(
    "about",
    "Sobre mim",
    tag(
      "div",
      {},
      tag("img", { "src": "/assets/fav.png", "style": "border-radius: 5px" }),
      tag(
        "h2",
        { "style": "text-align: center" },
        "Diogo Fernandes, aka, Tukain",
      ),
      tag("h4", {
        "style":
          "text-align: center; font-style: italic; font-weight: normal; margin-top: 2em",
      }, "Usuário Linux / Blogger / Aspirante a programador"),
      tag(
        "p",
        { "style": "text-align: justify" },
        markup(`
Sou só mais um neste vasto mundo chamado internet. Isso é um fato. Porém, quero poder deixar meus 10 centavos de contribuição. Ou seja, só tô afim de fazer algo bacana para mostrar para os meus conhecidos e… quem sabe isso tenha algum retorno no futuro.

Gosto do mundo open-source, sistemas Linux/Unix/BSD, história da computação, escrever pequenos shell-scripts para agilizar algumas tarefas no computador e estudo programação no meu tempo livre.

Gosto da [[https://en.wikipedia.org/wiki/IndieWeb][indie-web]], detesto redes “sociais”.

Também gosto de customizar a aparência do meu desktop e brincar com CSS.
      `),
      ),
      tag("br"),
      tag("h3", {}, "Onde você pode me encontrar:"),
      tag(
        "ul",
        {},
        tag(
          "li",
          {},
          tag("a", {
            "class": "blog_entry button",
            "href": "https://codeberg.org/tukain/",
          }, "Codeberg"),
        ),
        tag(
          "li",
          {},
          tag("a", {
            "class": "blog_entry button",
            "href": "https://neocities.org/site/tukainpng",
          }, "Neocities"),
        ),
        tag(
          "li",
          {},
          tag("a", {
            "class": "blog_entry button",
            "href": "https://github.com/ventriloquo",
          }, "Github"),
        ),
      ),
      tag(
        "ul",
        {},
        tag(
          "li",
          {},
          tag("a", {
            "style": "text-align: center; margin-top: 1em",
            "class": "blog_entry button",
            "href": "https://github.com/morhetz/gruvbox",
          }, "Paleta de cores utilizada no site"),
        ),
      ),
      tag(
        "div",
        {
          "style":
            "display: flex; justify-content: space-evenly; margin-top: 15px;",
        },
        tag("div", {
          "style": `display: inline-block;
            flex-grow: 1;
            height: 32px;
            border: solid 1px var(--fg);
            border-right: none;
            border-start-start-radius: 5px;
            border-end-start-radius: 5px;
            background-color: var(--fg)`,
        }),
        tag("div", {
          "style": `display: inline-block;
            flex-grow: 1;
            height: 32px;
            border: solid 1px var(--fg);
            border-left:  none;
            background-color: var(--bg-0)`,
        }),
        tag("div", {
          "style": `display: inline-block;
            flex-grow: 1;
            height: 32px;
            border: solid 1px var(--fg);
            border-left:  none;
            background-color: var(--bg-1)`,
        }),
        tag("div", {
          "style": `display: inline-block;
            flex-grow: 1;
            height: 32px;
            border: solid 1px var(--fg);
            border-left:  none;
            background-color: var(--bg-2)`,
        }),
        tag("div", {
          "style": `display: inline-block;
            flex-grow: 1;
            height: 32px;
            border: solid 1px var(--fg);
            border-left:  none;
            background-color: var(--red)`,
        }),
        tag("div", {
          "style": `display: inline-block;
            flex-grow: 1;
            height: 32px;
            border: solid 1px var(--fg);
            border-left:  none;
            background-color: var(--green)`,
        }),
        tag("div", {
          "style": `display: inline-block;
            flex-grow: 1;
            height: 32px;
            border: solid 1px var(--fg);
            border-left:  none;
            background-color: var(--yellow)`,
        }),
        tag("div", {
          "style": `display: inline-block;
            flex-grow: 1;
            height: 32px;
            border: solid 1px var(--fg);
            border-left:  none;
            background-color: var(--blue)`,
        }),
        tag("div", {
          "style": `display: inline-block;
            flex-grow: 1;
            height: 32px;
            border: solid 1px var(--fg);
            border-left:  none;
            background-color: var(--purple)`,
        }),
        tag("div", {
          "style": `display: inline-block;
            flex-grow: 1;
            height: 32px;
            border: solid 1px var(--fg);
            border-left:  none;
            border-start-end-radius: 5px;
            border-end-end-radius: 5px;
            background-color: var(--cyan)`,
        }),
      ),
    ),
  );

  document.getElementById("about_title").style.display = "none";
}

export default about;
