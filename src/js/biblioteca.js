"use strict";

const colection = [
  {
    title: "Jujutsu Kaisen, Vol. 1",
    cover: "jujutsu_01.jpg",
    progress: {
      current: "192",
      maximum: "192"
    }
  },
  {
    title: "Jujutsu Kaisen, Vol. 2",
    cover: "jujutsu_02.jpg",
    progress: {
      current: "192",
      maximum: "192"
    }
  },
  {
    title: "Jujutsu Kaisen, Vol. 3",
    cover: "jujutsu_03.jpg",
    progress: {
      current: "192",
      maximum: "192"
    }
  },
  {
    title: "Akira, Vol. 1",
    cover: "akira_01.jpg",
    progress: {
      current: "352",
      maximum: "352"
    }
  },
  {
    title: "Akira, Vol. 2",
    cover: "akira_02.jpg",
    progress: {
      current: "304",
      maximum: "304"
    }
  },
  {
    title: "Akira, Vol. 3",
    cover: "akira_03.jpg",
    progress: {
      current: "160",
      maximum: "280"
    }
  },
  {
    title: "Hellsing, Vol. 6",
    cover: "hellsing_06.jpg",
    progress: {
      current: "192",
      maximum: "192"
    }
  },
  {
    title: "Chainsaw Man, Vol. 1",
    cover: "chainsaw_man_01.jpg",
    progress: {
      current: "192",
      maximum: "192"
    }
  },
  {
    title: "Tokyo Ghoul, Vol. 1",
    cover: "tokyo_ghoul_01.jpg",
    progress: {
      current: "224",
      maximum: "224"
    }
  },
  {
    title: "Tokyo Ghoul, Vol. 2",
    cover: "tokyo_ghoul_02.jpg",
    progress: {
      current: "73",
      maximum: "213"
    }
  },
  {
    title: "Eterna Vigilância",
    cover: "eterna_vigilancia.jpg",
    progress: {
      current: "82",
      maximum: "356"
    }
  },
  {
    title: "Assassins Creed: A Cruzada Secreta",
    cover: "assassins_creed_a_cruzada_secreta.jpg",
    progress: {
      current: "0",
      maximum: "336"
    }
  },
  {
    title: "Assassins Creed: Renascença",
    cover: "assassins_creed_renascenca.jpg",
    progress: {
      current: "47",
      maximum: "378"
    }
  },
  {
    title: "Assassins Creed: Irmandade",
    cover: "assassins_creed_irmandade.jpg",
    progress: {
      current: "0",
      maximum: "392"
    }
  },
  {
    title: "Cyberpunk 2077: Trauma Team",
    cover: "cyberpunk_2077_trauma_team.jpg",
    progress: {
      current: "96",
      maximum: "96"
    }
  },
  {
    title: "Neuromancer",
    cover: "neuromancer.jpg",
    progress: {
      current: "6",
      maximum: "374"
    }
  },
  {
    title: "Count Zero",
    cover: "count_zero.jpg",
    progress: {
      current: "0",
      maximum: "360"
    }
  },
  {
    title: "Mona Lisa Overdrive",
    cover: "mona_lisa_overdrive.jpg",
    progress: {
      current: "0",
      maximum: "369"
    }
  },
  {
    title: "The C Programming Language",
    cover: "c.jpg",
    progress: {
      current: "0",
      maximum: "274"
    }
  },
];

const biblioteca = document.getElementById("biblioteca")

for (let i = 0; i < colection.length; i++) {
  const entrada   = document.createElement("div");
  const capa      = document.createElement("img");
  const titulo    = document.createElement("p");
  const progresso = document.createElement("progress");

  entrada.setAttribute("class", "livro");
  entrada.setAttribute("id", `livro_${i}`)

  capa.setAttribute("loading", "lazy");
  capa.setAttribute("src", `./assets/${colection[i].cover}`);
  capa.setAttribute("style", `animation-delay: ${i}50ms`)

  let maximum = colection[i].progress.maximum;
  let current = colection[i].progress.current;

  progresso.setAttribute("value", `${current}`);
  progresso.setAttribute("max", `${maximum}`);
  progresso.setAttribute("title", `${current} páginas lidas`);

  titulo.innerText = `${colection[i].title}`

  biblioteca.appendChild(entrada);
  document.getElementById(`livro_${i}`).appendChild(capa);
  document.getElementById(`livro_${i}`).appendChild(progresso);
  document.getElementById(`livro_${i}`).appendChild(titulo);
}

