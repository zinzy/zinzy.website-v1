import * as React from "react" 
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
  

// markup
const IndexPage = ({data}) => {
  return (
    <Layout> 
      <article>
        {
          data.allMdx.nodes.map(node => (
            <div key={node.slug}>
              <header className="text-center text-md-start">
                <div className="text-muted">The week on Sunday</div>
                <h2>{node.frontmatter.title} </h2>
                <time className="text-muted">{node.frontmatter.date}</time>
              </header>
              
              <MDXProvider>
                <MDXRenderer>{node.body}</MDXRenderer>
              </MDXProvider>
            </div>
          ))
        }
        </article>
    </Layout>
  )
}


export const indexPage = graphql`
  query blogIndex {
    allMdx(
      sort: {fields: frontmatter___title}
      filter: {fileAbsolutePath: {regex: "/_writing/"}}
      limit: 1
    ) {
      nodes { 
        body
        id
        excerpt
        frontmatter {
          title 
          date(formatString: "MMM DD, YYYY") 
        }
        slug  
      }
    }
  }
`

export default IndexPage
