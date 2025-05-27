let main_body = document.createElement("main");
main_body.setAttribute("id", "body");
main_body.setAttribute("class", "container");

let banner = document.createElement("hgroup")
banner.innerHTML = `
  <a href="/"><h1>Diário do Tukain <img class="icon" src="/assets/folder.webp"></h1></a>
  <p>Aqui é um local onde eu guardo alguns pensamentos meus.</p>
  <p>Inspirado pelo <a target="_blank" href="https://c9x.me/notes/">Notes</a> do c9x.</p>`

document.body.appendChild(main_body);
document.getElementById("body").appendChild(banner);

let id, post, text, title
for (let i = 0; i < posts.length; i++) {
    post = posts[i]
    title = post.title
    text = post.content
    id = `${title
                   .toLowerCase()
                   .replaceAll(" ", "-")
                   .replaceAll(",", "")
                   .replaceAll(".", "")
                   .replaceAll("é", "e")
                   .replaceAll("ê", "e")
                   .replaceAll("á", "a")
                   .replaceAll("à", "a")
                   .replaceAll("ã", "a")
                   .replaceAll("ô", "o")
                   .replaceAll("õ", "o")
           }`
     let article = document.createElement("article")
     article.setAttribute("id", id);
     document.getElementById("body").appendChild(article);
     document.getElementById(id).innerHTML = `
     <a href="#${id}"><h1><img class="icon" src="/assets/notepad.webp">${title}</h1></a>
     ${text
           .replaceAll("%%", "%")
           .replaceAll("%#", "<h2>")
           .replaceAll("#%", "</h2>")
           .replaceAll("%'", "<blockquote>")
           .replaceAll("'%", "</blockquote>")
           .replaceAll("%/", "<br>")
           .replaceAll("%|", "<pre>")
           .replaceAll("|%", "</pre>")
           .replaceAll("%[",  "<kbd>")
           .replaceAll("]%",  "</kbd>")
           .replaceAll("%b",  "<b>")
           .replaceAll("b%",  "</b>")
           .replaceAll("%i",  "<i>")
           .replaceAll("i%",  "</i>")
           .replaceAll("\n", "<br>")
         }
     <hr>
       `;
}
