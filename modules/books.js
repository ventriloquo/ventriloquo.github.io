"use strict";

import { create_page, create_priv_page, markup, slug, tag } from "./common.js";

import { bookshelf } from "./db/books.js";

export function books() {
  let livros_lidos = 0, livros_sendo_lidos = 0, livros_nao_lidos = 0;
  for (const b of bookshelf) {
    if (Number(b.progress.current) === Number(b.progress.maximum)) {
      livros_lidos++;
    }
    if (
      Number(b.progress.current) > 0 &&
      Number(b.progress.current) < Number(b.progress.maximum)
    ) livros_sendo_lidos++;
    if (Number(b.progress.current) === 0) livros_nao_lidos++;
  }
  const total_de_livros = bookshelf.length;

  create_page(
    "bookshelf",
    "Lista de Leitura",
    tag(
      "div",
      {},
      tag(
        "p",
        {},
        "Eu não sou o tipo de pessoa que curte muito ler, porém tem certas obras que me atraem (boa parte são mangás).",
      ),
      tag("h3", {}, "Status"),
      tag(
        "table",
        { "style": "margin-bottom: -5px" },
        tag(
          "tbody",
          {},
          tag(
            "tr",
            {},
            tag("th", {}, "Livros lidos"),
            tag("th", {}, "Livros sendo lidos"),
            tag("th", {}, "Livros não lidos"),
          ),
          tag(
            "tr",
            {},
            tag("td", {}, `${livros_lidos}`),
            tag("td", {}, `${livros_sendo_lidos}`),
            tag("td", {}, `${livros_nao_lidos}`),
          ),
        ),
      ),
      tag("progress", {
        "class": "book_progress_bar",
        "style":
          "width: -moz-available; width: -webkit-fill-available; border: solid 1px rgb(var(--ac-0))",
        "value": `${livros_lidos}`,
        "max": `${total_de_livros}`,
      }),
      tag(
        "p",
        { "style": "margin: 0; text-align: center" },
        "Li " +
          `<span style='color: rgba(var(--ac-1), 1)'>${livros_lidos}</span> ` +
          "de " +
          `<span style='color: rgba(var(--ac-0), 1)'>${total_de_livros}</span> ` +
          "items da minha coleção.",
      ),
      tag("h3", {}, "Coleção"),
      tag("div", {
        "id": "shelf",
        "style": "display: flex; flex-wrap: wrap; justify-content: center",
      }),
    ),
  );

  for (const book of bookshelf) {
    if (book.review === undefined) {
      book.review = "<p>Não tenho uma opinião formada sobre isso ainda</p>";
    }

    switch (Number(book.nota)) {
      case 0:
      case 1:
        book.nota =
          "<br>&#9733;&#9734;&#9734;&#9734;&#9734;<br><img loading='lazy' width='112' height='112' style='object-fit: cover' src='/assets/ashes_emoji.gif'>";
        break;
      case 2:
        book.nota =
          "<br>&#9733;&#9733;&#9734;&#9734;&#9734;<br><img loading='lazy' width='112' height='112' style='object-fit: cover' src='/assets/paia.jpg'>";
        break;
      case 3:
        book.nota =
          "<br>&#9733;&#9733;&#9733;&#9734;&#9734;<br><img loading='lazy' width='112' height='112' style='object-fit: cover' src='/assets/meh_emoji.gif'>";
        break;
      case 4:
        book.nota =
          "<br>&#9733;&#9733;&#9733;&#9733;&#9734;<br><img loading='lazy' width='112' height='112' style='object-fit: cover' src='/assets/nice_emoji.gif'>";
        break;
      case 5:
        book.nota =
          "<br>&#9733;&#9733;&#9733;&#9733;&#9733;<br><img loading='lazy' width='112' height='112' style='object-fit: cover' src='/assets/absolute_cinema.webp'>";
        break;
    }

    create_priv_page(
      `#bookshelf/${slug(book.title)}`,
      `${book.title}`,
      tag(
        "div",
        { "class": "book_info" },
        tag(
          "div",
          {
            "class": "book_info_book",
            "style":
              "background-color: var(--bg-0); padding: 10px; border-radius: 5px; width: fit-content; height: fit-content",
          },
          tag("img", {
            "loading": "lazy",
            "alt": book.title,
            "title": book.title,
            "width": "250",
            "height": "400",
            "style": "margin-top: 0; object-fit: cover",
            "src": `/assets/${book.cover}`,
          }),
          tag("progress", {
            "class": "book_progress_bar",
            "value": `${book.progress.current}`,
            "max": `${book.progress.maximum}`,
          }),
          tag("p", {
            "style":
              "font-family: 'code'; margin-top: 10px; text-align: center; font-size: larger",
          }, `${book.progress.current}/${book.progress.maximum}`),
        ),
        tag(
          "div",
          { "class": "book_info_review" },
          tag(
            "blockquote",
            { "class": "quote" },
            `<span>Minha opinião</span><br>${markup(book.review)}`,
          ),
        ),
        tag(
          "p",
          {
            "class": "book_info_rating",
            "style": "text-align: center",
            "id": `${slug(book.title)}_rating`,
          },
        ),
        tag("a", {
          "class": "book_info_exit button",
          "style":
            "width: -moz-available; width: -webkit-fill-available; margin: auto; text-align: center",
          "onclick": "history.back()",
          "href": `#bookshelf/${slug(book.title)}`,
        }, "Voltar"),
      ),
    );

    document.getElementById(`bookshelf/${slug(book.title)}`).classList.add(
      "book_page",
    );

    document.getElementById("shelf").appendChild(
      tag(
        "div",
        { "class": "book", "id": `#${slug(book.title)}` },
        tag(
          "a",
          { "href": `#bookshelf/${slug(book.title)}` },
          tag("img", {
            "loading": "lazy",
            "alt": book.title,
            "title": book.title,
            "width": "180",
            "height": "280",
            "style": "object-fit: cover; margin-top: 0",
            "src": `/assets/${book.cover}`,
          }),
        ),
        tag(
          "div",
          { "class": "book_progress" },
          tag("progress", {
            "class": "book_progress_bar",
            "value": book.progress.current,
            "max": book.progress.maximum,
          }),
          tag(
            "p",
            { "style": "margin: 0; text-align: center; font-family: 'code'" },
            `${book.progress.current}/${book.progress.maximum}`,
          ),
        ),
      ),
    );

    const nota = document.getElementById(`${slug(book.title)}_rating`);
    if (book.nota !== undefined) {
      nota.innerHTML = `A minha nota para esse treco é...<br>${book.nota}`;
    }

    const progress_bar = document.querySelectorAll(".book_progress_bar");
    progress_bar.forEach((progress_bar) => {
      if (progress_bar.value === progress_bar.max) {
        progress_bar.classList.add("green_bar");
      }

      if (
        0 < progress_bar.value &&
        progress_bar.value < progress_bar.max
      ) {
        progress_bar.classList.add("yellow_bar");
      }

      if (progress_bar.value === 0) {
        progress_bar.classList.add("red_bar");
      }
    });

    document.getElementById(`bookshelf/${slug(book.title)}_title`).style
      .textAlign = "center";
  }
}

export default books;
