;; https://www.reddit.com/r/emacs/comments/116yit2/help_me_configure_orgpublish_autositemap_to/
(defun my-sitemap-entry (entry style project)
  "Customized sitemap entry creation function, to use my /nicer/ formatting."
  (let* ((date (org-publish-find-date entry project)))
    (format "%s[[file:%s][%s]]"
	    (if date (format-time-string "[%Y-%m-%d] " date) "")
	    entry
	    (org-publish-find-title entry project))))

(setq  current_theme	(format " %s " (nth 0 custom-enabled-themes))
       accent_color	(face-attribute 'dired-directory	:foreground nil 'default)
       background_01	(face-attribute 'dired-directory	:background nil 'default)
       background_00	(face-attribute 'default		:background)
       foreground	(face-attribute 'default		:foreground)

       cursor-color-as-accent-color (concat "\n:root {\n\t--ac:\t"   (face-attribute 'cursor  :background nil 'default) ";\n}\n")
       hl-line-as-background-0	    (concat "\n:root {\n\t--bg-0:\t" (face-attribute 'hl-line :background nil 'default) ";\n}\n")
       hl-line-as-background-1	    (concat "\n:root {\n\t--bg-1:\t" (face-attribute 'hl-line :background nil 'default) ";\n}\n")
       
       org-html-head-extra (concat
			    "<head><link rel='icon' href='/assets/fav.png'></head>"
			    "<style>"
			    (with-temp-buffer (insert-file-contents "src/assets/styles.css") (buffer-string))
			    "\n:root {\n"
			    "\t--bg-1:\t" background_01	";\n"
			    "\t--bg-0:\t" background_00	";\n"
			    "\t--fg:\t"   foreground	";\n"
			    "\t--ac:\t"   accent_color	";\n"
			    "}\n"
			    (cond
			     ((equal current_theme " base16-gruvbox-dark ")
			      (concat hl-line-as-background-0))
			     ((equal current_theme " base16-gruvbox-light ")
			      (concat hl-line-as-background-0))
			     ((equal current_theme " base16-nord ")
			      (concat hl-line-as-background-0))
			     ((equal current_theme " base16-sakura ")
			      (concat cursor-color-as-accent-color hl-line-as-background-0))
			     ((equal current_theme " srcery ")
			      (concat cursor-color-as-accent-color hl-line-as-background-1))
			     ((equal current_theme " modus-operandi ")
			      (concat ":root {--bg-0:#e0e0e0;--bg-1:#f2f2f2;--ac:#003497;}"))
			     ((equal current_theme " modus-vivendi ")
			      (concat ":root {--bg-0:#303030;--bg-1:#1e1e1e;--ac:#ff9580;}"))
			     ((equal current_theme " modus-vivendi-tinted ")
			      (concat ":root {--bg-1:#1d2235;}"
				      "h3 {color:#d2b580}"
				      "h4 {color:#82b0ec}"))
			     ((equal current_theme " modus-operandi-tinted ")
			      (concat ":root {--bg-0:#efe9dd;}"
				      "h3 {color:#624416}"
				      "h4 {color:#193668}"))
			     )
			    "/*" current_theme "*/\n"
			    "</style>")

       org-html-preamble (concat
			  "<header>"
			  "<img loading='lazy' src='/assets/fav.png' height='100' style='border-radius: 5px'>"
			  "<div>"
			  "<a href='/'>Início</a>"
			  "</div>"
			  "<div>"
			  "<a target='_blank' href='https://codeberg.org/tukain'>Codeberg</a>"
			  "</div>"
			  "</header>")
       org-html-postamble (concat
			   "<div class='buttons'>"
			   "<a href='https://dorival.neocities.org/'><img loading='lazy' src='/assets/dorival-button.gif'></a>"
			   "<a href='https://kuroi.neocities.org/'><img loading='lazy' src='/assets/kuroi.png'></a>"
			   "<a href='https://dudalog.neocities.org/'><img loading='lazy' src='/assets/dudalog.png'></a>"
			   "<a href='https://fi-do-manin.neocities.org/'><img loading='lazy' src='/assets/fidomanin.png'></a>"
			   "<a href='https://sqrsux.neocities.org/'><img loading='lazy' src='/assets/sqr.gif'></a>"
			   "<a href='https://blanketfort.neocities.org/'><img loading='lazy' src='/assets/blanket_fort.gif'></a>"
			   "<a href='https://dabric.xyz/'><img loading='lazy' src='/assets/dabric.png'></a>"
			   "</div>"
			   "<div>"
			   "<img loading='lazy' style='margin: 0' src='/assets/under_construction.png'>"
			   "</div>"
			   "<div>"
			   "<p>Gerado com: %c</p>"
			   "<p>Tema: " current_theme "</p>"
			   "<p>Autor do site: <a href='https://codeberg.org/tukain/'>Tukain</a></p>"
			   "</div>")

       org-export-with-section-numbers	nil
       org-export-with-toc		3
       org-export-default-language      "pt-br"
       org-export-with-todo-keywords	t
       org-confirm-babel-evaluate       nil
       org-html-doctype                 "html5"
       org-html-html5-fancy             t
       org-html-head-include-scripts    nil
       org-export-with-broken-links     t

       org-publish-project-alist '(("Caderno do Tukain"
				    :base-directory "src"
				    :base-extension "org"
				    :publishing-directory "public"
				    :publishing-function org-html-publish-to-html
				    :recusive nil)
				   ("notes"
				    :base-directory "src/notes"
				    :auto-sitemap t
				    :sitemap-sort-files anti-chronologically
				    :sitemap-format-entry my-sitemap-entry
				    :sitemap-title ""
				    :base-extension "org"
				    :publishing-directory "public/notes"
				    :publishing-function org-html-publish-to-html
				    :recusive nil)
				   ("static"
				    :base-directory "src/assets"
				    :base-extension "jpg\\|jpeg\\|png\\|webp\\|ttf\\|gif\\|css\\|js\\|html"
				    :recusive t
				    :publishing-directory "public/assets"
				    :publishing-function org-publish-attachment)))

(org-publish-all t)

