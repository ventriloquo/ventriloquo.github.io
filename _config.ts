import lume from "lume/mod.ts";
import feed from "lume/plugins/feed.ts";
import date from "lume/plugins/date.ts"
import prism from "lume/plugins/prism.ts";
import "npm:prismjs@1.29.0/components/prism-rust.js";
import "npm:prismjs@1.29.0/components/prism-go.js";
import "npm:prismjs@1.29.0/components/prism-c.js";
import "npm:prismjs@1.29.0/components/prism-haskell.js";
import "npm:prismjs@1.29.0/components/prism-bash.js";
import "npm:prismjs@1.29.0/components/prism-lisp.js";
import "npm:prismjs@1.29.0/components/prism-lua.js";
import "npm:prismjs@1.29.0/components/prism-makefile.js";

const site = lume({
  src: "./src",
  dest: "./public",
  location: new URL("https://tukainpng.neocities.org"),
  cssFile: "/src/assets/css/styles.css",
  fontsFonts: "/src/assets/fonts/",
  server: {
    port: "8000",
    page404: "not_found.html",
  },
});

site.use(date())

site.use(prism())

site.use(feed({
  output: ["/feed.rss", "/feed.json"],
  query: "type=post",
  info: {
    title: "=site.title",
    description: "=site.description",
  },
  items: {
    title: "=title",
    description: "=excerpt",
  },
}));

site.add("assets")

export default site;
