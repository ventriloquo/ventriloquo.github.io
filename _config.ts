import lume from "lume/mod.ts";

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

site.add("assets")

export default site;
