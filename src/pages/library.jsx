import * as React from "react" 
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

 
// markup
const LibraryPage = ({data}) => {
  return (
    <Layout>
      <title>Home Page</title>
      
      
      <div className="row">
          <div className="col-lg-6">
            <h2>The library</h2>
            <p>A collection of more or less opinionated reviews of and thoughts on the things I read, listen to, and watch.</p>
          </div>
        </div>  

      <ul class="content-list mt-5">
      {
        data.allMdx.nodes.map(node => (
          <li key={node.slug}>
            <a href={node.slug}>
              <div className="row">
                <div className="col-2">{node.frontmatter.subcategory}</div>
                <div className="col-7">{node.frontmatter.title}</div>  
                <div className="col-3 text-end">{node.frontmatter.date}</div> 
              </div>  
            </a>
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
        }
      }
    }
  }
  

`

export default LibraryPage
