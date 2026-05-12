import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS({
  site: {
    name: "Caderno do Tukain",
    description: "Aqui é onde o conteúdo do site é gerenciado.",
    url: "https://tukainpng.neocities.org"
  }
});

cms.storage("src/assets", "assets");

cms.collection("Posts", "src:posts/*.md", [
  "title: text",
  "date: date",
  "content: markdown"
])

cms.upload("Imagens", "src:assets/img");

cms.document("Projetos", "src:_data/projects.yml")
cms.document("Livros", "src:_data/books.yml")
cms.document("Jogos", "src:_data/games.yml")
cms.document("Ideias", "src:_data/ideas.yml")
cms.document("Links", "src:_data/buttons.yml")

export default cms;
