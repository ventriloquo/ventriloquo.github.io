"use strict";

import { create_page, markup, tag } from "./common.js";

import { ideias as ideia } from "./db/ideias.js";

export function ideias() {
  create_page(
    "ideias",
    "Ideias",
    tag(
      "div",
      { "id": "whiteboard" },
      tag(
        "p",
        { "style": "margin-bottom: 1em" },
        "Este site está em constante desenvolvimento, mas nem sempre eu consigo implementar todas as ideias que tenho, então é bom ter um lugar onde elas podem ficar guardadas para que eu tente novamente no futuro.",
      ),
    ),
  );

  for (const i of ideia) {
    const details = (stat) => {
      document.getElementById("whiteboard").appendChild(
        tag(
          "details",
          {},
          tag("summary", {}, `<span>${i.title}</span>${stat}`),
          tag("p", {}, markup(i.content)),
        ),
      );
    };

    switch (i.stat) {
      case 1:
        details("<span class='status doing'>Parcialmente feito<span>");
        break;
      case 2:
        details("<span class='status done'>Feito</span>");
        break;
      default:
        details("<span class='status not_done'>Não feito</span>");
        break;
    }
  }
}
export default ideias;
