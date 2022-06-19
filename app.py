#!/usr/bin/env python3
import os
import glob
import markdown
# import frontmatter 

from datetime import datetime

now = datetime.now()

date_time = now.strftime("%A %B %d, %Y, %H:%M:%S")

if not os.path.exists('site'):
    os.mkdir('site')

for f in glob.iglob('content/public/*.md'):
    with open(f, 'r') as file:
        # post = frontmatter.loads(file.read())
        raw = file.read()
        html = markdown.markdown(raw)

    file_name = os.path.basename(f)
    destination = os.path.join("site", os.path.splitext(file_name)[0] + ".html")

    with open(destination, 'w') as file:
        file.write(r'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="Zinzy Waleson">

  <link rel="canonical" href="https://zinzy.website">
  <link rel="authorization_endpoint" href="https://indieauth.com/auth">

  <!-- Primary Meta Tags -->
  <title>Zinzy Waleson</title>
  <meta name="title" content="Zinzy Waleson">
  <meta name="description" content="Zinzy Waleson’s Personal Website">
  <meta name="author" content="Zinzy Waleson">
  <link rel="canonical" href="https://zinzy.website/"> 

            <style> 

                @media (prefers-color-scheme: dark) {
                  html { background: #1c1c1c; color: white; }
                  a { color: #8e8e8e; }
                  a:visited { color: #8e8e8e; }
                  a:active { color: #8e8e8e; }
                }

            body {
                padding: 20px;
              }
              @media screen and (min-width: 768px) {
                body {
                  max-width: 600px;
                  margin: 100px auto; 
                }
              }
              @media screen and (min-width: 992px) {
                body {
                  max-width: 600px;
                  margin: 200px auto; 
                }
              }
              section {
                margin-top: 50px;
              }
              article {
                margin-top: 30px;
              }
              footer {
                margin-top: 100px;
              } 
              article h1 {
                font-size: 2em;
              }
              img {
                max-width: 100%;
                height: auto;
              }
              blockquote {
                border-left: 1px solid gray;
                padding-left: 1rem;
                margin-left: 0;
              }

              </style>
</head>
<body>
''')  
        file.write("<article class='h-entry'>" + html + "</article>")
        file.write(r'''

  
  <footer class="h-card">
  <hr/>
    <p><a href="/" class="u-url">Zinzy.website</a> is the personal website of <span class="p-name">Zinzy Waleson</span>, a designer and facilitator in <span class="p-locality">Amsterdam</a>. All the content on this site is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>. You may find Zinzy on 
    <a href="https://www.linkedin.com/in/zinzy/" target="_blank" rel="me noopener noreferrer">LinkedIn</a>, 
    <a href="https://github.com/zinzy" target="_blank" rel="me noopener noreferrer">Github</a> or
    <a href="mailto:zinzy@pm.me" class="u-email" target="_blank" rel="me noopener noreferrer">Email</a>.</p>
  </footer>
</body>
</html>''') 
        file.write("<p>Last update: " + str(date_time) + "</p>")
        file.write(r'''
          <hr/>
          <p>
            <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/previous">←</a>
            An IndieWeb Webring 🕸💍
            <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/next">→</a>
          </p>
          ''')