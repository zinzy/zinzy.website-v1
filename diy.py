#!/usr/bin/env python3
import os
import glob
import markdown

if not os.path.exists('public'):
    os.mkdir('public')

for f in glob.iglob('content/*.md'):
    with open(f, 'r') as file:
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
 <link rel="stylesheet" href="../assets/css/style.css" type="text/css">
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