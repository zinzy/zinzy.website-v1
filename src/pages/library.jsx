import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

// markup
const LibraryPage = ({data}) => {  
 
  const posts = data.allMdx.nodes;
  const [appPosts, setAppPosts] = React.useState(data.allMdx.nodes); 
 
  const toggle = event => {
    setAppPosts(
      event.target.checked ? data.allMdx.nodes.filter(post => post.frontmatter.listingOnly == null) : data.allMdx.nodes
    );
    console.log(event.target.checked)
  };

  return (
    <Layout>
      <title>Home Page</title>
      
      <div className="row">
          <div className="col-lg-6">
            <h2>The library</h2>
            <p>A collection of more or less opinionated reviews of and thoughts on the things I read, listen to, and watch.</p>
          </div>
        </div>  


        <div class="d-flex">
          <div class="flex-grow-1">Flex item</div>
          <div class="">
            <div class="form-check form-switch">
              <input class="form-check-input" onChange={toggle} type="checkbox"/> 
              <label class="form-check-label" for="flexSwitchCheckDefault">Reviews only</label> 
            </div>
          </div>
        </div> 
         
 

      <ul class="content-list content-list-links mt-5">
      {
        appPosts.map(node => (
          <li key={node.slug}> 
            <a href={node.slug} className={node.frontmatter.listingOnly == null ? `d-block` : `d-none`}>
              <div className="row">
                <div className="col-2">{node.frontmatter.subcategory}</div>
                <div className="col-7">
                  {node.frontmatter.title}
                </div>  
                <div className="col-3 text-end">{node.frontmatter.date}</div> 
              </div>  
            </a>
            <div className={node.frontmatter.listingOnly != null ? `d-block text-muted` : `d-none`}>
              <div className="row">
                <div className="col-2">{node.frontmatter.subcategory}</div>
                <div className="col-7">
                  {node.frontmatter.title}
                </div>  
                <div className="col-3 text-end">{node.frontmatter.date}</div> 
              </div>  
            </div>

          </li>
        ))
      }
      </ul>
    </Layout>
  )
} 

export const query = graphql`
query LibraryQuery {
    allMdx(
      sort: {fields: frontmatter___title}
      filter: {fileAbsolutePath: {regex: "/library/"}}
    ) {
      nodes { 
        body
        slug
        frontmatter {
          date(formatString: "MMM YYYY")
          title 
          category
          subcategory  
          listingOnly
        }
      }
    }
  }
  

`

export default LibraryPage