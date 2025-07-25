"use strict";

import links from "./db/links.js";

const header = document.getElementById("header");
header.innerHTML = `
    <nav>
      <div>
        <a href="/">Início</a>
      </div>
      <div id="nav_list" class="nav_items"></div>
      <button popovertarget="nav_menu" popovertargetaction="toggle" class="nav_menu">Menu</button>
    </nav>
    <div popover id="nav_menu"> </div>
    <script src="./js/nav.js"></script>
`

function generate_link_list(list) {
  for (let i = 0; i < links.length; i++) {
    const nav_item = document.createElement("a");
    nav_item.setAttribute("href", `${links[i].path}`);
    nav_item.innerText = `${links[i].title}`;

    list.appendChild(nav_item);
  }
}

const nav_list = document.getElementById("nav_list");
const nav_menu = document.getElementById("nav_menu");

generate_link_list(nav_list);
generate_link_list(nav_menu);

nav_menu.addEventListener("click", () => {
  if (nav_menu.matches(":popover-open")) {
    nav_menu.hidePopover();
  }
})

