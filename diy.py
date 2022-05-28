#!/usr/bin/env python3
import os
import glob
import markdown
# import frontmatter

if not os.path.exists('public'):
    os.mkdir('public')

for f in glob.iglob('content/*.md'):
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
              }</style>
</head>
<body>
''')
        file.write(html)
        file.write(r'''

  <footer>
    Zinzy.website is the personal website of Zinzy Waleson. All the content on this site is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>
  </footer>
</body>
</html>''')