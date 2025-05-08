import lumeCMS from "lume/cms/mod.ts";
import GitHub from "lume/cms/storage/github.ts";
import { Octokit } from "npm:octokit";

const username = Deno.env.get("USERNAME");
const password = Deno.env.get("PASSWORD");

const cms = lumeCMS({
    auth: {
    method: "basic",
    users: {
      [username]: password,
    },
  },
});

cms.storage(
  "src",
  new GitHub({
    client: new Octokit({ auth: Deno.env.get("GITHUB_TOKEN") }),
    owner: "ventriloquo",
    repo: "ventriloquo.github.io",
  }),
);

cms.upload("Mídia: Arquivos multimídia utilizados nos posts/tutoriais", "src:src/assets/media");

cms.collection("Conteúdo: Posts e tutoriais", "src:src/content/*.md",
  [
    {
      name: "date",
      type: "date",
      attributes: {
        required: true,
      },
    },
    {
      name: "title",
      type: "text",
      attributes: {
        required: true,
      },
    },
    {
      name: "description",
      attributes: {
        required: true,
      },
      type: "text",
    },
    {
      name: "thumbnail",
      attributes: {
        required: true,
        maxlength: 24,
      },
      type: "text",
    },
    {
      name: "tags",
      type: "list",
    },
    {
      name: "type",
      type: "select",
      options: [
        "post",
        "tutorial",
      ],
      attributes: {
        required: true,
      },
    },
    {
      name: "possui_bloco_de_código",
      type: "checkbox",
    },
    {
      name: "content",
      type: "markdown",
      attributes: {
        required: true,
      },
    },
  ]);

cms.collection("Tags: Tags dos posts e tutoriais", "src:src/tags/*.md",
  [
    {
      name: "title",
      type: "text",
      attributes: {
        required: true,
      },
    },
  ]);

export default cms;
