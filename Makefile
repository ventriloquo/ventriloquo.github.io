LANG="pt-br"
TITLE="O site do Tukain"
DESCRIPTION="Sou alguém que busca por músicas que me relaxam ou que dão adrenalina… Só depende do dia. Sinta-se livre para explorar o meu espaço neste vasto mundo chamado internet!"
NOTE="Usuário Linux / Blogger / Curioso por tecnología"
SITE_BASENAME="tukain.xyz"
EDITOR="nvim"

all: public

new: posts
	@${EDITOR} posts/$$(date "+%Y-%m-%d_%T").md

index: item
	@cat header > tmp/index.html
	@echo "<center><hgroup><h1 class=\"title\">${TITLE}</h1>" >> tmp/index.html
	@echo "<p class=\"note\">${NOTE}</p></hgroup></center>" >> tmp/index.html
	@echo "<article><p class=\"description\">${DESCRIPTION}</p><hr>" >> tmp/index.html
	@echo "<table><thead><tr><th>Posts ($$(ls -1 ./posts | wc -l))</th></tr></thead><tbody>" >> tmp/index.html
	@for FILE in $$(ls ./posts | sort -r); do \
		echo "<tr><td><a href='/$${FILE}'>$$(echo $${FILE} | tr '-' '/' | tr '_' ' ' | tr '.md' ' ' )</a></td></tr>" >> tmp/index.html;\
	done
	@echo "</tbody></table>" >> tmp/index.html
	@cat footer >> tmp/index.html

header:
	@echo "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=UTF-8' /><meta http-equiv='Content-Language' content='${LANG}' /><meta name='generator' content='A freaking Makefile' /><meta name='author' content='tukain' /><meta name='description' content='${DESCRIPTION}' /><meta name='viewport' content='width=device-width, initial-scale=1'><link rel='icon' href='https://avatars.githubusercontent.com/u/205941290' type='image/png' /><link href='/styles.css' rel='stylesheet'><title>${TITLE}</title></head><body>" > header

footer:
	@echo '</body></html>' >> footer

item: header footer
	@if [ -e "tmp" ]; then\
		rm -rf tmp;\
	fi
	@mkdir -p tmp
	@for FILE in $$(ls ./posts | sort -r); do \
		mkdir tmp/$$FILE;\
		cat header > tmp/$$FILE/index.html;\
		echo "<center><h1><a href='/'>${TITLE}</a></h1></center>" >> tmp/$$FILE/index.html;\
		echo "<article>" >> tmp/$$FILE/index.html;\
		echo "<time>$$(echo $${FILE} | tr '-' '/' | tr '_' ' ' | tr '.md' ' ' )</time>" >> tmp/$$FILE/index.html;\
		smu ./posts/$$FILE >> tmp/$$FILE/index.html; \
		echo "</article>" >> tmp/$$FILE/index.html;\
		cat footer >> tmp/$$FILE/index.html;\
	done

feed: item
	@echo '<?xml version="1.0" encoding="UTF-8" ?>' > feed.xml
	@echo '<rss version="2.0">' >> feed.xml
	@echo '<channel>' >> feed.xml
	@echo '<title>${TITLE} - Feed</title>' >> feed.xml
	@echo '<description>Feed do meu blog</description>' >> feed.xml
	@for PAGE in $$(/bin/ls ./posts | sort -r | tr '\n' ' '); do \
	  echo "<item>" >> feed.xml;\
	  echo "<title>$$(smu ./posts/$$PAGE | grep '<h1>' | tr '<>/' '\n' | head -n3 | tail -n1 )</title>" >> feed.xml;\
	  echo "<link>https://${SITE_BASENAME}/$$PAGE</link>" >> feed.xml;\
	  echo "<description><![CDATA[" >> feed.xml;\
	  smu ./posts/$$PAGE >> feed.xml;\
	  echo "]]></description>" >> feed.xml;\
	  echo "</item>" >> feed.xml;\
	done
	@echo '</channel>' >> feed.xml
	@echo '</rss>' >> feed.xml

public: posts assets index feed
	@if [ -e "public" ]; then\
		rm -rf public header footer;\
	fi
	@mkdir -p public
	@cp -r tmp/* assets/* *.xml public

