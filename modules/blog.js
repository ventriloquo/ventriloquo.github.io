"use strict";

import { posts } from "./db/posts.js";

import {
  create_priv_page,
  invert_date,
  markup,
  page_list,
  slug,
  tag,
} from "./common.js";

export function list_entries(limit, list_name = "entry_list") {
  let l = 0;
  for (const post of posts) {
    if (l === Number(limit)) break;
    const post_iso_date = invert_date(post.date, ".").replaceAll(".", "/");
    const id = `blog/${post_iso_date}/${slug(post.title)}/`;

    document.getElementById(list_name).appendChild(
      tag(
        "li",
        {},
        tag(
          "a",
          { "class": "blog_entry button", "href": `#${id}` },
          `${post.date} - ${post.title}`,
        ),
      ),
    );
    l++;
  }
}

export function create_post() {
  for (const post of posts) {
    const post_iso_date = invert_date(post.date, ".").replaceAll(".", "/");
    const post_link = `blog/${post_iso_date}/${slug(post.title)}/`;
    const wordcount = post.content.split(" ").length;
    const minutes = Math.floor(wordcount / 200);
    const read_time = minutes <= 1
      ? "~1 minuto para ler"
      : `~${minutes} minutos para ler`;

    create_priv_page(
      post_link,
      `${post.title}`,
      tag(
        "div",
        {},
        tag(
          "h3",
          { "style": "font-weight: normal" },
          post.date,
          tag("span", {}, ` - ~${wordcount} palavras, ${read_time}`),
        ),
        tag("hr"),
        tag("p", {}, markup(post.content)),
        tag("hr"),
        tag("a", {
          "class": "button",
          "style": "display: inline-block",
          "href":
            `mailto:contato.nest604@passinbox.com?subject=Feedback: ${post.title}`,
        }, "Feedback"),
      ),
    );
  }
}

export function blog() {
  page_list.push(
    {
      id: `/#blog`,
      title: "Blog",
    },
  );
  tag(
    "section",
    { "id": "blog" },
    tag(
      "h1",
      { "id": "blog_title", "style": "position: relative" },
      "Blog",
      tag("span", {
        "id": "entry_count",
        "style": "position: absolute; right: 0; bottom: 0; font-size: large",
      }, `<span style="opacity: 0">|</span> ${posts.length} posts`),
    ),
    tag("input", {
      "type": "text",
      "id": "searchBox",
      "placeholder": "Pesquisar",
    }),
    tag("ul", { "id": "entry_list" }),
  );

  create_post();

  const searchBox = document.getElementById("searchBox");
  const resultsContainer = document.getElementById("entry_list");

  function displayPosts(filteredPosts) {
    resultsContainer.innerHTML = filteredPosts.map((post) => `
          <li><a href="#blog/${
      invert_date(post.date, ".").replaceAll(".", "/")
    }/${slug(post.title)}/" class="blog_entry button">${post.title}</a></li>
      `).join("");
  }

  searchBox.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = posts.filter((post) =>
      post.content.toLowerCase().includes(query)
    );
    displayPosts(filtered);
  });

  displayPosts(posts);
}
