(require 'ox-publish)
(load-file "./htmlize.el")
(load-file "~/.config/emacs/pkgs/simphare-mode.el")
(delete-directory "./public" t)

(setq org-html-preamble
      "<header>
         <nav>
           <div>
             <a href=\"/\">Início</a>
           </div>
           <div>
             <a href=\"/blog.html\">Blog</a>
             <a href=\"/sobre.html\">Sobre</a>
           </div>
         </nav>
       </header>")

(setq org-html-postamble nil)

(setq org-html-head "<link rel=\"icon\" type=\"image/svg+xml\" href=\"data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg'
	              width='32' height='32'&gt;
	              &lt;polygon points='16,2 30,16 16,30 2,16' fill='%23FFDD33'/&gt;
                      &lt;/svg&gt;\">
                     <link rel=icon type=\"image/webp\" href=\"/fav.webp\">
                     <link rel=stylesheet href=\"/reset.css\" />
                     <link rel=stylesheet href=\"/styles.css\" />"
      org-html-head-include-default-style nil
      org-html-head-include-scripts nil
      org-html-use-infojs nil
      org-html-doctype "html5"
      org-html-html5-fancy t)

;; NOTE: Meu Deus do ceu, por que CACETARALHOS isso não tem uma documentação decente?!
(defun my-sitemap-format-entry (entry style project)
  (let ((title (org-publish-find-title entry project))
        (date (org-publish-find-date entry project)))
    (format "[[./%s][%s - %s]]" entry (format-time-string "%d/%m/%Y" (seconds-to-time date)) title)))

(setq org-publish-project-alist
      '(("pages"
    	 :base-directory "./content"
	 :auto-sitemap t
	 :sitemap-filename "sitemap.org"
	 :sitemap-title "Sitemap"
	 :sitemap-sort-files anti-chronologically
	 :sitemap-format-entry my-sitemap-format-entry
	 :recursive t
	 :htmlized-source t
	 :publishing-directory "./public"
	 :section-numbers nil
	 :table-of-contents nil
	 :with-toc nil
	 :with-author nil
	 :with-creator nil
	 :with-latex t
	 :with-date t
	 :validate nil
	 :with-tags nil
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
