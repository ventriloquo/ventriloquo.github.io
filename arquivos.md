---
title: "Posts arquivados"
---

Estes são posts que recuperei de um backup **muito** antigo (por volta de
agosto de 2024), eles estão ordenados do mais antigo primeiro até o mais
recente e são posts que foram escritos usando o [Lume](https://lume.land).

<div class="cards" style="
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
">
{% for post in site.arquivos %}
  <a href="{{ post.url }}">
    <div class="card">
        <div class="card_image">
            <p>{{post.date | date: "%d/%m/%Y" }}</p>
        </div>
      <div class="card_title">
        <h3>{{ post.title }}</h3>
      </div>
    </div>
  </a>
{% endfor %}
</div>
