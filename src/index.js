"use strict";

const nav_menu = document.getElementById("nav_menu");
nav_menu.addEventListener("click", () => {
  if (nav_menu.matches(":popover-open")) {
    nav_menu.hidePopover();
  }
})

let   livros_lidos        = 0;
let   livros_sendo_lidos  = 0;
let   paginas_lidas       = 0;
let   paginas_total       = 0;
const livros              = document.getElementsByClassName("livro");
const livros_total        = livros.length;
const livros_progresso    = document.getElementsByTagName("progress");

for (let i = 0; i < livros_progresso.length; i++) {
  const progresso = livros_progresso[i];
  const pagina_maximo = Number(progresso.max);
  const pagina_atual = Number(progresso.value);

  progresso.setAttribute("id", "progress");

  progresso.setAttribute("title", `${pagina_atual} páginas lidas`);
  livros[i].setAttribute("id", `livro_${i}`);

  const restante = document.createElement("p");
  restante.style.fontSize  = "small"
  restante.style.fontStyle = "italic"
  restante.style.color     = "var(--accent-2)"

  if (pagina_atual === pagina_maximo) {
    livros_lidos++;
  } else {
    restante.innerText = `Faltam ${pagina_maximo - pagina_atual} páginas`
    livros[i].appendChild(restante)
    livros_sendo_lidos++;
  }

  paginas_lidas = paginas_lidas + pagina_atual;
  paginas_total = paginas_total + pagina_maximo;
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

  const article = document.createElement("article");
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

