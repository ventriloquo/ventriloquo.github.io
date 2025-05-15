#!/bin/sh

# DON'T CHANGE THIS
INPUT=$1
SITE_NAME=$(cat ./config.json | jq -r .name)
SITE_LANG="$(cat ./config.json | jq -r .lang)"
SITE_AUTHOR="$(cat ./config.json | jq -r .author)"
SITE_DESCRIPTION="$(cat ./config.json | jq -r .description)"
SITE_NOTE="$(cat ./config.json | jq -r .note)"
SITE_FAVICON_NAME="$(cat ./config.json | jq -r .favicon.filename)"
SITE_FAVICON_TYPE="$(cat ./config.json | jq -r .favicon.extension)"

create_site() {
  [ -z "$(which smu)" ] && echo "smu is not installed! Please install it from git://git.codemadness.org/smu/" && exit 1
  [ -z "$(which jq)" ] && echo "jq is not installed! Please install it from your package repo!" && exit 1
  [ ! -f "config.json" ] && echo "You don't have a config.json file!" && exit 1
  mkdir -p "content"
  mkdir -p "assets"
  mkdir -p "pages"
  mkdir -p "public"
  touch ".site"
  cat << EOF > "pages/head.html"
<!DOCTYPE html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="Content-Language" content="${SITE_LANG}" />
  <meta name="generator" content="blog.sh" />
  <meta name="author" content="${SITE_AUTHOR}" />
  <meta name="description" content="${SITE_DESCRIPTION}" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="/assets/${SITE_FAVICON_NAME}.${SITE_FAVICON_TYPE}" type="image/${SITE_FAVICON_TYPE}" />
  <link href="/assets/styles.css" rel="stylesheet">
  <title>${SITE_NAME}</title>
</head>

EOF


}

build_site() {
  [ ! -f ".site" ] && echo "You're not inside the site directory!" && exit 1
  rm -rf ./public
  mkdir -p public/posts

  for FILE in $(/bin/ls ./content)
  do
    cat ./pages/head.html   >  public/posts/$FILE.html
    echo "<body><article><p style='text-align: center' ><a href='/'>Voltar</a></p>"  >> public/posts/$FILE.html
    smu ./content/$FILE     >> public/posts/$FILE.html
    echo "</article></body>" >> public/posts/$FILE.html
  done

  cat ./pages/head.html > index.html
  echo "<article>" >> index.html
  echo "<h1>$SITE_NAME</h1>" >> index.html
  echo "<h4><i>${SITE_NOTE}</i></h4>" >> index.html
  [ ! -z "$SITE_DESCRIPTION" ] && echo "<p>${SITE_DESCRIPTION}</p>" >> index.html

  echo "<hr>" >> index.html
  echo "<ul>" >> index.html

  for PAGE in $(/bin/ls -1 ./public/posts | sort -r | tr '\n' ' ')
  do
    echo "<li><a href=\"/posts/${PAGE}\">$(grep '<h1>' ./public/posts/$PAGE | tr '<>/' '\n' | head -n3 | tail -n1 )</a></li>" >> index.html
  done

  echo "</ul>" >> index.html
  mv *.html public
  cp -r ./assets ./public
}

version() {
  printf "\e[32mblog.sh \e[34m(v0.0.1)\e[0m\n"
}

case $INPUT in
  "build") build_site;;
  "create") create_site;;
  "version") version;;
  *) cat << EOF

Usage: blog.sh <command>

version - shows blog.sh version
create  - create the website structure
build   - build the website

EOF
;;
esac
