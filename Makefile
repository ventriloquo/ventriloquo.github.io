blog:
	@mkdir -p docs
	@haredoc -t -Fhtml posts 		>  content
	@cat body.html 							>  index.html
	@cat 01_script.html 				>> index.html
	@cat content 								>> index.html
	@cat 02_script.html 				>> index.html
	@echo "</body></html>" 			>> index.html
	@cp 404.html not_found.html
	@rm content
