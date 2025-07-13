---
title: "Blog"
---
<div class="cards" style="
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
">
{% for post in site.posts %}
  <a href="{{ post.url }}" title='Postado em: {{post.date | date: "%d/%m/%Y"}}'>
    <div class="card card_post" style="animation-delay: {{forloop.index}}00ms">
      <div class="card_image">
        {% if post.thumbnail %}
          <img loading="lazy" src="/assets/img/thumbnails/{{post.thumbnail}}" alt="{{post.thumbnail}}">
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
