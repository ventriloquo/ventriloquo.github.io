#!/bin/sh

# DON'T CHANGE THIS
INPUT=$1

RED="\e[31m"
GREEN="\e[32m"
BLUE="\e[34m"
RESET="\e[0m"

usage() {
cat << EOF

Usage: blog.sh <command>

version - shows blog.sh version
create  - create the website structure
build   - build the website

EOF
}

check_dependencies() {
  printf "${BLUE}Checking dependencies...\n"
  [ -z "$(which smu)" ] && printf "${RED}smu is not installed! Please install it.\n(git://git.codemadness.org/smu/)" && exit 1
  [ -z "$(which convert)" ] && printf "${RED}Image Magick is not installed! Please install it." && exit 1
  [ ! -f "config" ] && echo "${RED}You don't have a config file!" && exit 1
  printf "${GREEN}God's in his heaven, all's right with the world.\n${RESET}"
}

check_dependencies

grab_config() {
  cat config | grep $1 | awk -F: '{print $2}'
}

SITE_NAME="$(grab_config title)"
SITE_LANG="$(grab_config lang)"
SITE_AUTHOR="$(grab_config author)"
SITE_DESCRIPTION="$(grab_config description)"
SITE_NOTE="$(grab_config note)"
SITE_FAVICON_NAME="$(grab_config favicon_name)"
SITE_FAVICON_TYPE="$(grab_config favicon_type)"
SITE_BASENAME="$(grab_config basename)"

create_site() {
  mkdir -p "content"
  mkdir -p "assets/img"
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


build_feed() {
  [ ! -e public ] && echo "You didn't build the website yet!" && exit 1
  echo '<?xml version="1.0" encoding="UTF-8" ?>' > public/feed.xml
  echo '<rss version="2.0">' >> public/feed.xml
  echo '<channel>' >> public/feed.xml
  echo '<title>Tukain - Feed</title>' >> public/feed.xml
  echo '<description>Feed do meu blog</description>' >> public/feed.xml
  for PAGE in $(/bin/ls -1 ./public/posts | sort -r | tr '\n' ' ')
  do
    echo "<item>" >> public/feed.xml
    echo "<title>$(grep '<h1>' ./public/posts/$PAGE | tr '<>/' '\n' | head -n3 | tail -n1 )</title>" >> public/feed.xml
    echo "<link>https://${SITE_BASENAME}/posts/${PAGE}</link>" >> public/feed.xml
    echo "<description><![CDATA[" >> public/feed.xml
    smu ./content/$(echo $PAGE | awk -F'.html' '{print $1}') >> public/feed.xml
    echo "]]</description>" >> public/feed.xml
    echo "</item>" >> public/feed.xml
  done
  echo '</channel>' >> public/feed.xml
  echo '</rss>' >> public/feed.xml
}


build_site() {
  [ ! -e "./.site" ] && echo "You're not inside the site directory!" && exit 1
  rm -rf ./public
  mkdir -p public/posts

  for FILE in $(/bin/ls ./content)
  do
    cat ./pages/head.html   >  public/posts/$FILE.html
    echo "<body><article><h1 style='text-align: center' ><a href='/'>${SITE_NAME}</a></h1>"  >> public/posts/$FILE.html
    echo "<time>$FILE</time>"  >> public/posts/$FILE.html
    smu ./content/$FILE     >> public/posts/$FILE.html
    echo "</article></body>" >> public/posts/$FILE.html
  done

  cat ./pages/head.html > index.html
  echo "<article>" >> index.html
  echo "<h1 class='site_name'>$SITE_NAME</h1>" >> index.html
  echo "<h4><i>${SITE_NOTE}</i></h4>" >> index.html
  [ ! -z "$SITE_DESCRIPTION" ] && echo "<p>${SITE_DESCRIPTION}</p>" >> index.html

  echo "<hr>" >> index.html
  echo "<table><thead><tr><th>Post</th><th>Data de criação</th></tr></thead></tbody>" >> index.html

  for PAGE in $(/bin/ls -1 ./public/posts | sort -r | tr '\n' ' ')
  do
    echo "<tr>\
      <td><a href=\"/posts/${PAGE}\">\
      $(grep '<h1>' ./public/posts/$PAGE | tr '<>/' '\n' | head -n3 | tail -n1 )\
      </a></td>\
      <td>$(echo $PAGE | awk -F'.html' '{print $1}')</td></tr>" >> index.html
  done

  echo "</tbody></table>" >> index.html

  mkdir -p assets/img
  rm ./assets/img/*

  for IMAGE in $(/bin/ls ./content)
  do
    RESULT=$(grep "(/assets/img" ./content/${IMAGE} | tr "!()[]" "|" | awk -F\| '{print $5}')
    printf "\e[34mImagens encontradas em ${IMAGE}:\e[0m\n${RESULT}\n"
    for LINE in $RESULT
    do
    printf "\e[34mLinha sendo processada:\e[0m\n${LINE}\n"
      for TEXT in $LINE
      do
      LABEL=$(echo $TEXT | awk -F\/ '{print $4}' | awk -F".webp" '{print $1}' | tr "-" " ")
      printf "\e[34mTexto final:\e[0m\n${LABEL}\n"
      convert \
        -background \#2a2a37 \
        -fill \#dcd7ba \
        -size 800x200 \
        -font assets/fonts/shingopro.otf \
        -pointsize 30 \
        -gravity center \
        caption:"${LABEL}" \
        ".${LINE}"
      done
    done
  done

  mv *.html public
  cp -r ./assets ./public
  build_feed
}

version() {
  printf "${BLUE}blog.sh (v0.0.1)${RESET}\n"
}

case $INPUT in
  "build") build_site;;
  "feed") build_feed;;
  "create") create_site;;
  "version") version;;
  *) usage;;
esac
