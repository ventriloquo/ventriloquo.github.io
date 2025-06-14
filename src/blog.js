"use strict"

const toc = document.createElement("ul");
document.getElementById("blog_posts").appendChild(toc);
toc.setAttribute("id", "table_of_contents")

let post, text, title, date, id;
for (let i = 0; i < posts.length; i++) {
    post	= posts[i];
    title	= post.title;
    text	= post.content;
    date	= post.date;

    if (date === undefined) {
	date = "Sem data definida"
    }

    id = `post_${date.replaceAll(".", "-")}_${title.toLowerCase()
                                                   .replaceAll(" ", "-")
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

    let toc_item = document.createElement("li");
    toc_item.innerHTML = `<a href="#${id}">${title}</a>`

    document.getElementById("blog_posts").appendChild(article);
    document.getElementById("table_of_contents").appendChild(toc_item)

    document.getElementById(id).innerHTML = `
    <a href="#${id}"><h1>${title} <time>${date}</time></h1></a>
    ${text.replaceAll("\n", "<br>")
          .replaceAll("--", "—")}
    <hr>`;
}

const progressBar = document.getElementById('progress-bar');


window.addEventListener('scroll', () => {
  const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPosition = window.scrollY;
  const progress = (scrollPosition / totalHeight) * 100;
  progressBar.style.width = `${progress}%`;
});
