---
title: Links
---

<h1>Links</h1>
<p>
  Estes são alguns links dos <a
    href="https://neocities.org/site/tukainpng/follows"
  >sites que eu acompanho.</a>
</p>

<div style="display: flex; flex-wrap: wrap; justify-content: center">
  {% for button in site.data.buttons %}
    {% if button.button %}
      <a target="blank" href="{{ button.url }}" class="link_button button">
        <img
          loading="lazy"
          src="/assets/img/buttons/{{ button.button }}"
          title="{{ button.title }}"
          width="88px"
          height="31px"
          style="object-fit: cover"
        >
      </a>
    {% else %}
      <a target="blank" href="{{ button.url }}" class="link_button button">
        <p>
          {{ button.title }}
        </p>
      </a>
    {% endif %}
  {% endfor %}
</div>
