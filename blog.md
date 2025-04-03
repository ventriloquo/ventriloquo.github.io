---
title: "Blog"
---

# Aqui estão os meus posts!

<ul>
    {% for post in site.posts %}
        <li>
            <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        </li>
    {% endfor %}
</ul>
