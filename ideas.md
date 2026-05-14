---
title: Ideias
---

<h1>Ideias</h1>

<p>
  Este site está em constante desenvolvimento, mas nem sempre eu consigo
  implementar todas as ideias que tenho, então é bom ter um lugar onde elas
  podem ficar guardadas para que eu tente novamente no futuro.
</p>

{% for idea in site.data.ideas %}
{% assign stat = idea.stat %}
{% case stat %}
{% when 1 %}
<details>
  <summary>
    <span>{{ idea.title }}</span>
    <span class="status doing">Parcialmente feito</span>
  </summary>
  <pre>{{ idea.content }}</pre>
</details>
{% when 2 %}
<details>
      <summary>
        <span>{{ idea.title }}</span>
        <span class="status done">Feito</span>
      </summary>
      <pre>{{ idea.content }}</pre>
</details>
{% else %}
<details>
  <summary>
    <span>{{ idea.title }}</span>
    <span class="status not_done">Não feito</span>
  </summary>
<pre>{{ idea.content }}</pre>
</details>
{% endcase %}
{% endfor %}
