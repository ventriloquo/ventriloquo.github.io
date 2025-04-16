---
layout: page
title: Pesquisar
---

<style>
	#search-container {
	    max-width: 800px;
	}

	input[type=text] {
		font-size: normal;
	    outline: none;
	    padding: 1rem;
		background: var(--solarized-mono2);
		color: var(--solarized-mono01);
		   display: block;
					margin: auto;
	    width: 500px;
		-webkit-appearance: none;
		font-family: inherit;
		font-size: 100%;
		border: solid 2px var(--solarized-mono2);
	}
	#results-container {
		margin: .5rem 0;
	}
	@media only screen and (orientation: portrait) {
		input[type=text] {
			 width: 250px;
			}
			#search-container {
				max-width: 250px;
				display: block;
				margin: auto;
			}
	}
</style>

<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" placeholder="Search...">
<ol id="results-container"></ol>
</div>

<!-- Script pointing to search-script.js -->
<script src="/search.js" type="text/javascript"></script>

<!-- Configuration -->
<script type="text/javascript">
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a href="{url}" title="{description}">{title}</a></li>',
  noResultsText: 'No results found',
  limit: 10,
  fuzzy: false,
  exclude: ['Welcome']
})
</script>