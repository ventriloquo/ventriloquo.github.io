"use strict";

import posts from "./db/posts.js"

function slug(text) {
  return text
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll("á", "a")
    .replaceAll("à", "a")
    .replaceAll("ã", "a")
    .replaceAll("é", "e")
    .replaceAll("ê", "e")
    .replaceAll("í", "i")
    .replaceAll("ô", "o")
    .replaceAll("ó", "o")
    .replaceAll("õ", "o");
}

let post, content, title, date, id;
for (let i = 0; i < posts.length; i++) {
  post = posts[i];
  title = post.title;
  content = post.content;
  date = post.date;

  if (date === undefined)     date    = "Sem data definida";
  if (content === undefined)  content = "Sem conteúdo definido";

  id = `post_${slug(date)}_${slug(title)}`;

  const article = document.createElement("article");
  article.setAttribute("id", id);
  article.innerHTML = `
    <a href="#${id}"><h1>${title}</h1><time>${date}</time></a>
    ${content
        .split('\n')
        .map(text => `<p>${text}</p>`)
        .join("")
        .replaceAll("--", "—")
    }
    <hr>`;
  document.getElementById("blog_posts").appendChild(article);
}

