---
layout: "base"
---

{% for tag in site.tags %}
  <h1>{{ tag[0] }}</h1>
  <ul>
    {% for post in tag[1] %}
      <li><h3><a href="{{ post.url }}">{{ post.title }}</a></h3></li>
    {% endfor %}
  </ul>
{% endfor %}
