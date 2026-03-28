"use strict";

import {
  create_page,
  markup,
  tag,
} from "./common.js";

import { ideias as ideia } from "./db/ideias.js";

export function ideias() {
  create_page("ideias", "Ideias",
    tag("div", {"id":"whiteboard"}, tag("h2", {"style":"margin-bottom: 1em"}, "Ideias para o meu site"))
  );

  for (const i of ideia) {
    switch (i.stat) {
      case 1: i.stat  = "<span class='status doing'>Parcialmente feito<span>";  break;
      case 2: i.stat  = "<span class='status done'>Feito</span>";               break;
      default: i.stat = "<span class='status not_done'>Não feito</span>";       break;
    }
    document.getElementById("whiteboard").appendChild(
      tag("details", {},
        tag("summary", {}, `<span>${i.title}</span>${i.stat}`),
        tag("p", {}, markup(i.content))
      )
    );
  }

}
export default ideias;
