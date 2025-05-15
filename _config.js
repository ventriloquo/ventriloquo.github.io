import lume from "lume/mod.ts";
import feed from "lume/plugins/feed.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
//import minifyHTML from "lume/plugins/minify_html.ts";
import pagefind from "lume/plugins/pagefind.ts";
import sitemap from "lume/plugins/sitemap.ts";
import robots from "lume/plugins/robots.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";

const site = lume({
  src: "./src",
//  dest: "./out",
  prettyUrls: true,
  server: {
    open: false,
  }
});


site.ignore("README.md", ".git", ".gitignore");

site.script("update", "git add . && git commit -m 'Update' && git push");

site.copy([".otf", ".woff2", ".png", ".webp", ".jpg", ".ico", ".gif"]);

site.loadAssets([".js", ".json"])

site.use(slugifyUrls())

site.use(sitemap())

site.use(robots({
  allow: ["Googlebot"],
  disallow: "*",
}))

site.use(pagefind())

//site.use(minifyHTML())

site.use(lightningCss({ includes: "assets/css/" }))

site.use(feed({
  output: ["/feed.xml", "/feed.json"],
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

export default site;
