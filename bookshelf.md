---
title: Lista de Leitura
---

<h1>Lista de Leitura</h1>
<p>
  Eu não sou o tipo de pessoa que curte muito ler, porém tem certas obras que me
  atraem (boa parte são mangás).
</p>

<hr>

<div id="shelf" style="display: flex; flex-wrap: wrap; justify-content: center">
  {% for book in site.data.books %}
    <div style="margin: 5px; box-shadow: 0 0 5px 1px black" class="book">
      <a
        href='#{{ book.title | slug }}'
      >
        <img
          loading="lazy"
          alt="{{ book.title }}"
          title="{{ book.title }}"
          src="/assets/img/books/{{ book.cover }}"
        >
      </a>
      <div class="info">
        <img
          class="info_cover"
          loading="lazy"
          alt="{{ book.title }}"
          title="{{ book.title }}"
          src="/assets/img/books/{{ book.cover }}"
        >
        <div class="book_progress">
          {% if book.progress.current == 0 %}
            <progress
              value="{{ book.progress.current }}"
              max="{{ book.progress.maximum }}"
              class="red_bar"
            >
            </progress>
          {% elsif book.progress.current < book.progress.maximum and book.progress.current > 0 %}
            <progress
              value="{{ book.progress.current }}"
              max="{{ book.progress.maximum }}"
              class="yellow_bar"
            >
            </progress>
          {% else %}
            <progress
              value="{{ book.progress.current }}"
              max="{{ book.progress.maximum }}"
              class="green_bar"
            >
            </progress>
          {% endif %}
          <p style="margin: 0; text-align: center; font-family: 'code'">
            {{ book.progress.current }}/{{ book.progress.maximum }}
          </p>
        </div>
        {% if book.review %}
          <div
            id='{{ book.title | slug }}'
            class="book_review"
          >
            <blockquote style="margin: 0">
              <p><strong>Minha opinião</strong></p>
              <p>{{ book.review }}</p>
            </blockquote>
            {% assign nota = book.nota %}
            {% case nota %}
            {% when 1 %}
              <center>
                &#9733;&#9734;&#9734;&#9734;&#9734;<br><img
                  loading="lazy"
                  style="object-fit: cover; width: 112px; height: 112px"
                  src="/assets/img/review/ashes_emoji.gif"
                >
              </center>
            {% when 2 %}
              <center>
                &#9733;&#9733;&#9734;&#9734;&#9734;<br><img
                  loading="lazy"
                  style="object-fit: cover; width: 112px; height: 112px"
                  src="/assets/img/review/paia.jpg"
                >
              </center>
            {% when 3 %}
              <center>
                &#9733;&#9733;&#9733;&#9734;&#9734;<br><img
                  loading="lazy"
                  style="object-fit: cover; width: 112px; height: 112px"
                  src="/assets/img/review/meh_emoji.gif"
                >
              </center>
            {% when 4 %}
              <center>
                &#9733;&#9733;&#9733;&#9733;&#9734;<br><img
                  loading="lazy"
                  style="object-fit: cover; width: 112px; height: 112px"
                  src="/assets/img/review/nice_emoji.gif"
                >
              </center>
            {% when 5 %}
              <center>
                &#9733;&#9733;&#9733;&#9733;&#9733;<br><img
                  loading="lazy"
                  style="object-fit: cover; width: 112px; height: 112px"
                  src="/assets/img/review/absolute_cinema.webp"
                >
              </center>
          {% endcase %}
          </div>
          <div class="close_button">
            <a href="#" class="button">Fechar</a>
          </div>
        {% else %}
          <div
            id='{{ book.title | slug }}'
            class="book_review"
          >
            <blockquote style="margin: 0">
              <p><strong>Minha opinião</strong></p>
              <p>Não tenho uma opinão formada sobre isso aqui ainda.</p>
            </blockquote>
          </div>
          <div class="close_button">
            <a href="#" class="button">Fechar</a>
          </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
