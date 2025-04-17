---
layout: page
title: Pesquisar
---

<div id="search-container">
    <input type="text" id="search-input" placeholder="Pesquisar...">
    <ul style="list-style: none" id="results-container"></ul>
</div>

<script src="/search.js" type="text/javascript"></script>

<!-- Configuration -->
<script type="text/javascript">
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a href="{url}" title="{description}">{title}</a><li style="margin-bottom: 0.5rem">{description}</li></li>',
  noResultsText: 'Nada encontrado',
  limit: 10,
  fuzzy: true,
  exclude: ['Welcome']
})
</script>
