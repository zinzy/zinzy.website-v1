#!/usr/bin/env python3
import os
import glob
import markdown
# import frontmatter

if not os.path.exists('public'):
    os.mkdir('public')

for f in glob.iglob('content/public/*.md'):
    with open(f, 'r') as file:
        # post = frontmatter.loads(file.read())
        raw = file.read()
        html = markdown.markdown(raw)

    file_name = os.path.basename(f)
    destination = os.path.join("public", os.path.splitext(file_name)[0] + ".html")

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
                font-size: 90%;
                margin-top: 100px;
              }
              a {
                color: black;
                text-decoration: none;
                border-bottom: 1px solid rgb(84, 43, 255);
              }
              a:hover {
                color: deeppink;
              }
              a:visited {
                color: black;
              }
              a:visited:hover {
                color: deeppink;
              }
              article h1 {
                font-size: 2em;
              }
              </style>
</head>
<body>
''')
        file.write("<article class='h-entry'>" + html + "</article>")
        file.write(r'''

  <footer class="h-card">
    <p><a href="/" class="p-name u-url"><mark>Zinzy.website</mark></a> is the personal website of Zinzy Waleson, a designer and facilitator in <span class="p-locality">Amsterdam</a>. All the content on this site is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>. You may find Zinzy on 
    <a href="https://www.linkedin.com/in/zinzy/" target="_blank" rel="me noopener noreferrer">LinkedIn</a>, 
    <a href="https://github.com/zinzy" target="_blank" rel="me noopener noreferrer">Github</a> or
    <a href="mailto:zinzy@pm.me" class="u-email" target="_blank" rel="me noopener noreferrer">Email</a>.</p>
    <p>
      <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/previous">←</a>
      An IndieWeb Webring 🕸💍
      <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/next">→</a>
    </p>
  </footer>
</body>
</html>''')