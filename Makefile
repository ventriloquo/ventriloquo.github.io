blog:
	@haredoc -t -Fhtml hare_blog > temp
	@cat head.html > index.html
	@cat 01_script.html >> index.html
	@cat temp >> index.html
	@cat 02_script.html >> index.html
	@rm temp
