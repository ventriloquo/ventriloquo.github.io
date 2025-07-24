"use strict";

let   livros_lidos        = 0;
let   livros_sendo_lidos  = 0;
let   paginas_lidas       = 0;
let   paginas_total       = 0;
const livros              = document.getElementsByClassName("livro");
const livros_total        = livros.length;
const livros_progresso    = document.getElementsByTagName("progress");

for (let i = 0; i < livros_progresso.length; i++) {
  livros_progresso[i].setAttribute("id", "progress");
  livros[i].setAttribute("id", `livro_${i}`);

  const restante = document.createElement("p");
  restante.setAttribute("id", "restante");
  restante.style.fontSize  = "small"
  restante.style.fontStyle = "italic"
  restante.style.color     = "var(--accent)"

  if (livros_progresso[i].value == livros_progresso[i].max) {
    livros_lidos++;
  } else {
    restante.innerText = `Faltam ${livros_progresso[i].max - livros_progresso[i].value} páginas`
    document.getElementById(`livro_${i}`).appendChild(restante)
    livros_sendo_lidos++;
  }

  paginas_lidas = paginas_lidas + livros_progresso[i].value;
  paginas_total = paginas_total + livros_progresso[i].max;
}

const status_biblioteca = document.getElementById("status_biblioteca");
status_biblioteca.innerHTML = `
  <table>
    <thead>
    </thead>
    <tbody>
      <tr>
        <td>Total de livros</td>
        <td style="text-align:center">${livros_total}</td>
      </tr>
      <tr>
        <td>Total de livros lidos</td>
        <td style="text-align:center">${livros_lidos}</td>
      </tr>
      <tr>
        <td>Total de livros que estou lendo</td>
        <td style="text-align:center"> ${livros_sendo_lidos}</td>
      </tr>
      <tr>
        <th>Meu progresso</th>
        <th class="livro" style="text-align:center">
          ${paginas_lidas} páginas de ${paginas_total}
          <progress
            value="${paginas_lidas}"
            max="${paginas_total}"
          >
          </progress>
        </th>
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

