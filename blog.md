---
title: "Blog"
---

# Aqui estão os meus posts!

<div class="cards" style="
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
">
{% for post in site.posts %}
  <a href="{{ post.url }}">
    <div class="card">
      <div class="card_image">
        {% if post.thumbnail %}
          <img src="/assets/img/thumbnails/{{post.thumbnail}}">
          {% else %}
          <p>Imagem não encontrada</p>
        {% endif %}
      </div>
      <div class="card_title">
        <h3>{{ post.title }}</h3>
      </div>
    </div>
  </a>
{% endfor %}
</div>
