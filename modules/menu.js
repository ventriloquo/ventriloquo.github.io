"use strict";

import { create_priv_page, page_list, tag } from "./common.js";

function active_page(id) {
  document.querySelectorAll(".active").forEach((e) => {
    e.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

navigator.active_page = active_page;

export function menu() {
  create_priv_page(
    "mobile_menu",
    "Menu",
    tag("div", {}, tag("ul", { "id": "mobile_menu" })),
  );

  let i = 0;
  for (const page of page_list) {
    document.getElementById("mobile_menu").appendChild(
      tag(
        "li",
        { "id": `menu_item_${i}` },
        tag("a", {
          "id": `${page.id}_button`,
          "href": page.id,
          "class": "blog_entry button",
          "onclick": `navigator.active_page("${page.id}_button")`,
        }, page.title),
      ),
    );

    document.getElementById("desktop_menu").appendChild(
      tag("a", {
        "id": `${page.id}_button`,
        "href": page.id,
        "class": "button",
        "onclick": `navigator.active_page("${page.id}_button")`,
      }, page.title),
    );

    i++;
  }

  document.getElementById("menu_item_0").children[0].style
    .borderStartStartRadius = "5px";
  document.getElementById("menu_item_0").children[0].style
    .borderStartEndRadius = "5px";
}

export default menu;
