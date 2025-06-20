"use strict"

let post, text, title, date, id;
for (let i = 0; i < posts.length; i++) {
    post	= posts[i];
    title	= post.title;
    text	= post.content;
    date	= post.date;

    if (date === undefined) date = "Sem data definida";
    if (text === undefined) text = "Sem conteúdo definido";

    id = `post_${date.toLowerCase().replaceAll(".", "-").replaceAll(" ", "-")}_${title.toLowerCase().replaceAll(" ", "-")
												    .replaceAll(",", "")
												    .replaceAll(".", "")
												    .replaceAll("é", "e")
												    .replaceAll("ê", "e")
												    .replaceAll("á", "a")
												    .replaceAll("à", "a")
												    .replaceAll("ã", "a")
												    .replaceAll("ô", "o")
												    .replaceAll("õ", "o")}`

    let article = document.createElement("article");
    article.setAttribute("id", id);
    document.getElementById("blog_posts").appendChild(article);

    document.getElementById(id).innerHTML = `
    <a href="#${id}"><h1>${title} <time>${date}</time></h1></a>
    ${text.replaceAll("\n", "<p>")
	  .replaceAll("--", "—")}
    <hr>`;
}
