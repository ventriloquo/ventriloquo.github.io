function estilizarCodigo(caractere, cor) {
  // Procura todos os elementos no corpo do documento
  const elementos = document.body.getElementsByTagName('pre');

  for (let elemento of elementos) {
    if (elemento.textContent.includes(caractere)) {
	elemento.innerHTML = elemento.innerHTML.replaceAll(caractere, `<span style="color: ${cor}">` + caractere + '</span>');
    }
  }
}

let main_body = document.createElement("main");
main_body.setAttribute("id", "body");
main_body.setAttribute("class", "container");

let banner = document.createElement("hgroup")
banner.innerHTML = `
  <h1>Diário do Tukain <img class="icon" src="/assets/notepad.webp"></h1>
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
     <time>${post.date}</time>
     <a href="#${id}"><h1>${title}</h1></a>
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

estilizarCodigo('=', 'yellow');
estilizarCodigo('true', 'orange');
estilizarCodigo('false', 'orange');
estilizarCodigo('@symbol', 'orange');
estilizarCodigo('export', 'red');
estilizarCodigo('return', 'red');
estilizarCodigo('use', 'red');
estilizarCodigo('defer', 'red');
estilizarCodigo('def', 'red');
estilizarCodigo('type', 'mediumpurple');
estilizarCodigo('enum', 'mediumpurple');
estilizarCodigo('const', 'mediumpurple');
estilizarCodigo('match', 'mediumpurple');
estilizarCodigo('let', 'mediumpurple');
estilizarCodigo('fn', 'mediumpurple');
estilizarCodigo('switch', 'mediumpurple');
estilizarCodigo('break', 'mediumpurple');
estilizarCodigo('case', 'mediumpurple');
estilizarCodigo('if', 'mediumpurple');
estilizarCodigo('else', 'mediumpurple');
estilizarCodigo('assert', 'mediumpurple');
estilizarCodigo('len', 'mediumpurple');
estilizarCodigo('for', 'mediumpurple');
estilizarCodigo('yield', 'mediumpurple');
estilizarCodigo('free', 'mediumpurple');
estilizarCodigo('delete', 'mediumpurple');
estilizarCodigo('insert', 'mediumpurple');
estilizarCodigo('append', 'mediumpurple');
estilizarCodigo('static', 'mediumpurple');
estilizarCodigo('+', 'orange');
estilizarCodigo('-', 'orange');
estilizarCodigo('/', 'orange');
estilizarCodigo('*', 'orange');
estilizarCodigo('!', 'orange');
estilizarCodigo('||', 'orange');
estilizarCodigo(',', 'blueviolet');
estilizarCodigo('{', 'blueviolet');
estilizarCodigo('}', 'blueviolet');
estilizarCodigo('[', 'blueviolet');
estilizarCodigo(']', 'blueviolet');
estilizarCodigo('::', 'blueviolet');
estilizarCodigo('(', 'blueviolet');
estilizarCodigo(')', 'blueviolet');
estilizarCodigo('struct', 'lblue');
estilizarCodigo('str', 'lblue');
estilizarCodigo('i64', 'lblue');
estilizarCodigo('i32', 'lblue');
estilizarCodigo('i16', 'lblue');
estilizarCodigo('i8', 'lblue');
estilizarCodigo('f32', 'lblue');
estilizarCodigo('f64', 'lblue');
estilizarCodigo('u8', 'lblue');
estilizarCodigo('u16', 'lblue');
estilizarCodigo('u32', 'lblue');
estilizarCodigo('u64', 'lblue');
estilizarCodigo('opaque', 'lblue');
estilizarCodigo('void', 'lblue');
estilizarCodigo('rune', 'lblue');
estilizarCodigo('size', 'lblue');
estilizarCodigo('null', 'lblue');
estilizarCodigo('nullable', 'lblue');
