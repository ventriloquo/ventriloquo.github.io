"use strict";

import {
    create_priv_page,
    markup,
    tag
} from "./common.js";

import { posts } from "./db/posts.js";
import { list_entries } from "./blog.js";

export function home() {
    create_priv_page("home", "Caderno do Tukain",
		     tag("div", {}, markup(`Aqui é um lugar onde eu gosto de compartilhar um pouco do meu cotidiano. Também é um lugar onde eu ponho em prática algumas coisas que eu aprendi, seja elas relacionadas à tecnologia, programação ou qualquer outro assunto que eu achar pertinente.
#+begin_quote
<span>Reg Braithwaite</span>
"The strength of JavaScript is that you can do anything. The weakness is that you will."
#+end_quote

* Últimos posts
`),
			 tag("ul", {"id":"recent"}),
			 tag("p", {"style":"text-align: center"}, tag("a", {"href":"https://github.com/protesilaos/modus-themes", "target":"_blank", "class":"button"}, "Paleta de cores utilizada no site"))
			)
		    );


    list_entries(3, "recent");
}
