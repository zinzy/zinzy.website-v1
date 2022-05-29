#!/usr/bin/env python3
import os
import glob
import markdown
import frontmatter

if not os.path.exists('test'):
    os.mkdir('test')  

for file in glob.iglob('content/*.md'):
    with open(file, 'r') as f:
        raw = f.read()
        html = markdown.markdown(raw)
         

    blob = frontmatter.load(file) 

    print(blob['title'])
    print(blob['tags'])

    with open(file) as reader:
        
        content = reader.read()
        # to parse the yaml, we need to get just the front matter
        meta = frontmatter.loads(content)
        postcontent = markdown.markdown(meta.content)
 
    file_name = os.path.basename(file)
    destination = os.path.join("test", os.path.splitext(file_name)[0] + ".html")
 
    with open(destination, 'w') as file: 
        file.write("<h1>" + meta["title"] + "</h1>") 
        file.write("<p><time>" + meta["date"] + "</time></p>") 
        file.write(meta.postcontent) 