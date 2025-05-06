blog:
	@mkdir -p docs
	@haredoc -t -Fhtml posts 		>  content
	@cat body.html 							>  docs/index.html
	@cat 01_script.html 				>> docs/index.html
	@cat content 								>> docs/index.html
	@cat 02_script.html 				>> docs/index.html
	@echo "</body></html>" 			>> docs/index.html
	@cp 404.html not_found.html
	@cp -r assets CNAME 404.html not_found.html docs
	@rm content
