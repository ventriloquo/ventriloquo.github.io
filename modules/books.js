"use strict";

import {
    create_page,
    create_priv_page,
    slug,
    markup,
    tag
} from "./common.js";

import { bookshelf } from "./db/books.js";

export function books() {
    let livros_lidos = 0, livros_sendo_lidos = 0, livros_nao_lidos = 0;
    for (const b of bookshelf) {
	if (Number(b.progress.current) === Number(b.progress.maximum)) livros_lidos++;
	if (Number(b.progress.current) > 0 && Number(b.progress.current) < Number(b.progress.maximum)) livros_sendo_lidos++;
	if (Number(b.progress.current) === 0) livros_nao_lidos++;
    }
    const total_de_livros = bookshelf.length;

    create_page(
	"bookshelf", "Lista de Leitura",
	tag("div", {},
	    tag("p", {}, "Essa é a minha coleção de livros e mangás"),
	    tag("h3", {}, "Status"),
	    tag("table", {"style":"margin-bottom: -3px; border-bottom: 0"},
		tag("tbody", {},
		    tag("tr", {},
			tag("th", {}, "Livros lidos"),
			tag("th", {}, "Livros sendo lidos"),
			tag("th", {}, "Livros não lidos")
		       ),
		    tag("tr", {},
			tag("td", {}, `${livros_lidos}`),
			tag("td", {}, `${livros_sendo_lidos}`),
			tag("td", {}, `${livros_nao_lidos}`)
		       ),
		   )
	       ),
	    tag("progress", {"style":"border: solid .1em rgba(var(--ac-0), 1)", "value":`${livros_lidos}`, "max":`${total_de_livros}`}),
	    tag("p", {"style":"margin: 0; text-align: center"},
		"Li "                                                                  +
		`<span style='color: rgba(var(--ac-1), 1)'>${livros_lidos}</span> `    +
		"de "                                                                  +
		`<span style='color: rgba(var(--ac-0), 1)'>${total_de_livros}</span> ` +
		"livros da minha coleção."
	       ),
	    tag("h3", {}, "Coleção"),
	    tag("div",
		{
		    "id":"shelf",
		    "style":"display: flex; flex-wrap: wrap; justify-content: center"
		}
	       )
	   )
    );

    for (const book of bookshelf) {
	if (book.review === undefined) book.review = "<p style='color: var(--red)'>Sem review ainda</p>";
	switch (Number(book.nota)) {
	case 0:
	case 1: book.nota = "<br>&#9733;&#9734;&#9734;&#9734;&#9734;<br><img loading='lazy' width='112' height='112' style='object-fit: cover' src='/assets/ashes_emoji.gif'>"; break;
	case 2: book.nota = "<br>&#9733;&#9733;&#9734;&#9734;&#9734;<br><img loading='lazy' width='112' height='112' style='object-fit: cover' src='/assets/paia.jpg'>"; break;
	case 3: book.nota = "<br>&#9733;&#9733;&#9733;&#9734;&#9734;<br><img loading='lazy' width='112' height='112' style='object-fit: cover' src='/assets/meh_emoji.gif'>"; break;
	case 4: book.nota = "<br>&#9733;&#9733;&#9733;&#9733;&#9734;<br><img loading='lazy' width='112' height='112' style='object-fit: cover' src='/assets/nice_emoji.gif'>"; break;
	case 5: book.nota = "<br>&#9733;&#9733;&#9733;&#9733;&#9733;<br><img loading='lazy' width='112' height='112' style='object-fit: cover' src='/assets/absolute_cinema.webp'>"; break; 
	default: book.nota = "<span style='color: var(--red)'>Sem nota ainda</span>";
	}

	create_priv_page(`#${slug(book.title)}_page`, `${book.title}`,
			 tag("div", {},
			     tag("div", {},
				 tag("img",
				     {
					 "loading":"lazy",
					 "alt":book.title,
					 "title":book.title,
					 "width":"250",
					 "height":"400",
					 "style":"object-fit: cover",
					 "src":`/assets/${book.cover}`
				     }
				    ),
				 tag("div", {},
				     tag("blockquote", {"class":"quote"}, `<span>Review</span><br>${markup(book.review)}`),
				     tag("p", {"style":"margin: 0; text-align: center"}, `A minha nota para esse treco é...<br>${book.nota}`)
				    ),
				),
			    )
			);

	document.getElementById("shelf").appendChild(
	    tag("div", {"style":"margin: 10px", "class":"book"},
		tag("a", {"href":`#${slug(book.title)}_page`},
		    tag("img",
			{
			    "loading":"lazy",
			    "alt":book.title,
			    "title":book.title,
			    "width":"180",
			    "height":"280",
			    "style":"object-fit: cover; margin-top: 0",
			    "src":`/assets/${book.cover}`
			}
		       )
		   ),
		tag("progress", {"value":book.progress.current, "max":book.progress.maximum}),
		tag("p", {"style":"margin: 0; text-align: center"}, `${book.progress.current}/${book.progress.maximum}`)
	       )
	);

	const books = document.querySelectorAll(".book");
	books.forEach(book => {
	    if (book.children[1].value === book.children[1].max) {
		book.children[1].classList.add("green_bar");
	    }
	    if (0 < book.children[1].value && book.children[1].value < book.children[1].max) {
		book.children[1].classList.add("yellow_bar");
	    }
	    if (book.children[1].value === 0) {
		book.children[2].style.color = "var(--red)";
	    }
	})
    }
}

export default books;
