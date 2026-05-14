---
title: Projetos
---

<h1>Projetos</h1>
<p>Esses são alguns dos projetos em que eu já trabalhei/estou desenvolvendo.</p>
<hr>

{% for project in site.data.projects %}
  <div
    style="display: flex; flex-wrap: wrap; flex-direction: row; justify-content: space-between; align-items: center"
  >
    <img
      style="margin: 0; max-width: 200px; max-height: 300px"
      loading="lazy"
      src="/assets/img/projects/{{ project.cover }}"
    >
    <div style="max-width: 50ch">
      <h2>
        <a href="{{ project.url }}" target="_blank">{{ project.title }}</a>
      </h2>
      <p style="text-align: justify">{{ project.desc }}</p>
    </div>
  </div>
  <hr>
{% endfor %}
