(require 'ox-publish)
(load-file "./htmlize.el")

(delete-directory "./public" t)

(setq org-html-preamble
      (concat
       "<header>"
         "<nav>"
           "<ul>"
             "<li><a href=\"/\">Início</a></li>"
           "</ul>"
	   "<ul>"
             "<li><a href=\"/blog\">Blog</a></li>"
           "</ul>"
         "</nav>"
	 "</header>"))

(setq org-html-postamble nil)

(setq org-html-head "<link rel=icon type=\"image/webp\" href=\"/fav.webp\"> <link rel=stylesheet href=\"/css/main.css\" />"
      org-html-head-include-default-style nil
      org-html-head-include-scripts nil
      org-html-use-infojs nil
      org-html-doctype "html5"
      org-html-html5-fancy t)

(setq org-publish-project-alist
      '(("pages"
    	 :base-directory "./content"
	 :auto-sitemap t
	 :sitemap-filename "sitemap.org"
	 :sitemap-title "Sitemap"
	 :sitemap-sort-files anti-chronologically
	 :recursive t
	 :htmlized-source t
	 :publishing-directory "./public"
	 :section-numbers nil
	 :with-author nil
	 :validate nil
	 :language "pt-br"
	 :publishing-function org-html-publish-to-html)
	
	("static"
	 :base-directory "./assets/"
	 :base-extension "css\\|png\\|jpg\\|webp\\|gif\\|woff2\\|otf\\|ttf"
	 :recursive t
	 :publishing-directory "./public"
	 :publishing-function org-publish-attachment)
	
	("tukain.xyz"
	 :components ("pages" "static"))))

(org-publish-all t)
