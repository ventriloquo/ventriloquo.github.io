all:
	@printf "Gerando website...\n"
	@rm -rf public
	@git add posts/*
	@mkdir -p public/notes
	@cp -r assets public
	@for FILE in $$(/bin/ls ./posts); \
		do \
			mkdir public/notes/$$FILE; \
			cat template/head.html > public/notes/$$FILE/index.html; \
			cat template/intro.html >> public/notes/$$FILE/index.html; \
			echo "<h3 class=\"voltar center\"><a href=\"/\">Voltar</a></h3>" >> public/notes/$$FILE/index.html; \
			pandoc --toc -t html ./posts/$$FILE >> public/notes/$$FILE/index.html; \
			cat template/footer.html >> public/notes/$$FILE/index.html; \
		done
	@printf "Listando posts...\n"
	@cat template/head.html > public/index.html
	@cat template/intro.html >> public/index.html
	@for PAGE in $$(/bin/ls -1 ./posts | sort -r | tr '\n' ' ');\
		do \
			pandoc -t plain -o .tmp ./posts/$$PAGE; \
			echo "<hr><article><h1>$$(cat .tmp | head -n 1)</h1><p>$$(cat .tmp | head -n 5 | tail -n +2)</p><a href=\"/notes/$$PAGE\">$$PAGE↩</a></article>" >> public/index.html; \
		done
	@cat template/footer.html >> public/index.html
	@printf "Concluido.\n"
