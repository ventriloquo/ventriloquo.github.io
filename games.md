---
title: Minha coleção de jogos
---

<h1>Minha coleção de jogos</h1>

<p>
  Desde de pequeno eu tenho contato com jogos, é seguro dizer que eles tiveram
  influência na minha personalidade e também me deram diversos ensinamentos,
  fora, obviamente, a diversão proporcionada por eles.
</p>

<p>Essa é a minha atual coleção de jogos, do meu Nintendo Switch.</p>

<hr>

<div
  id="game_library"
  style="display: flex; flex-wrap: wrap; justify-content: center"
  class="game_collection"
>
  {% for game in site.data.games %}
    <div style="margin: 5px">
      <img
        loading="lazy"
        width="180"
        height="180"
        style="margin: 0"
        alt="{{ game.title }}"
        title="{{ game.title }}"
        src="/assets/img/games/{{ game.cover }}"
      >
    </div>
  {% endfor %}
</div>
