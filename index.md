---
title: Home
---
<h1>Caderno do Tukain</h1>

<p>
  Aqui é um lugar onde eu gosto de compartilhar um pouco do meu cotidiano.
  Também é um lugar onde eu ponho em prática algumas coisas que eu aprendi, seja
  elas relacionadas à tecnologia, programação ou qualquer outro assunto que eu
  achar pertinente.
</p>

<blockquote>
  <p><strong>Reg Braithwaite</strong></p>
  <p>
    "The strength of JavaScript is that you can do anything. The weakness is
    that you will."
  </p>
</blockquote>

<h2>Últimos posts</h2>

<ul>
  {% for post in site.posts limit: 5 %}
    <li>
      <a class="blog_entry button" href="{{ post.url }}">{{
          post.date
          | date: '%d/%m/%Y'
        }} - {{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
