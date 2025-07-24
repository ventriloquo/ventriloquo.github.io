"use strict";

let livros_lidos        = 0;
let livros_sendo_lidos  = 0;
let livros_total        = document.getElementsByClassName("livro").length;
let livros_progresso    = document.getElementsByTagName("progress");

for (let i = 0; i < livros_progresso.length; i++) {
    livros_progresso[i].setAttribute("id", "progress");
    if (livros_progresso[i].value == livros_progresso[i].max) {
	livros_lidos++;
    } else {
	livros_sendo_lidos++;
    }
}

let status_biblioteca = document.getElementById("status_biblioteca");
status_biblioteca.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Total</th>
        <th>Lido</th>
        <th>Lendo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${livros_total}</td>
        <td>${livros_lidos}</td>
        <td> ${livros_sendo_lidos}</td>
      </tr>
    </tbody>
  </table>
`;

let post, text, title, date, id;
for (let i = 0; i < posts.length; i++) {
  post = posts[i];
  title = post.title;
  text = post.content;
  date = post.date;

  if (date === undefined) date = "Sem data definida";
  if (text === undefined) text = "Sem conteúdo definido";

  id = `post_${date.toLowerCase().replaceAll(".", "-").replaceAll(" ", "-")}_${
    title
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
      .replaceAll("õ", "o")
  }`;

  let article = document.createElement("article");
  article.setAttribute("id", id);
  document.getElementById("blog_posts").appendChild(article);

  document.getElementById(id).innerHTML = `
    <a href="#${id}"><h1>${title} <time>${date}</time></h1></a>
    ${
      text
        .replaceAll("\n", "<p>")
        .replaceAll("--", "—")
    }
    <hr>`;
}

