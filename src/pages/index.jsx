import * as React from "react" 
import { graphql } from 'gatsby' 
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
  

// markup
const IndexPage = ({data}) => {
  return (
    <Layout>
      <title>Home Page</title>


      <section>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.slug}>
              <header>
                <h2><a href={`/${node.slug}`}>{node.frontmatter.title}</a></h2>
                <time className="dt-published">{node.frontmatter.date}</time>
              </header>
            <MDXProvider>
              <MDXRenderer>{node.body}</MDXRenderer>
            </MDXProvider>  
            </article>
          ))
        }

      </section> 
      

 


 
    </Layout>
  )
}

export const query = graphql`
query FrontPage {
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {fileAbsolutePath: {regex: "/weeknotes/"}}
    limit: 1
  ) {
    nodes { 
      body
      slug
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title 
        category
        subcategory  
        listingOnly
        slug
      }
      parent {
        ... on File {
          changeTime(fromNow: true)
        }
      }
    }
  }
}
`

export default IndexPage