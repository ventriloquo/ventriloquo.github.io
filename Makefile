blog:
	@mkdir -p public
	@haredoc -t -Fhtml posts 		>  content
	@cat body.html 							>  public/index.html
	@cat 01_script.html 				>> public/index.html
	@cat content 								>> public/index.html
	@cat 02_script.html 				>> public/index.html
	@echo "</body></html>" 			>> public/index.html
	@cp 404.html not_found.html
	@cp -r assets CNAME 404.html not_found.html public
	@rm content
