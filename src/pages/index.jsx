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
 
 
      <section className=""> 

      <div className="row">
        <div className="col-md-8 offset-md-2 col-xl-6 offset-xl-3"> 
          <div className="mt-3 mt-lg-5">
            {
              data.allMdx.nodes.map(node => ( 
                <article className="h-entry" key={node.slug}>
                  <header>
                    <h3 className="h6 p-name">{node.frontmatter.title}</h3>
                    <p className="text-muted">{node.frontmatter.excerpt}</p>  
                  </header>
                  <div className="e-content">
                    <MDXProvider>
                      <MDXRenderer>{node.body}</MDXRenderer>
                    </MDXProvider>
                  </div> 
                </article>  
              ))
            }
            </div>

        </div>
      </div>
 
 

      </section>

 
 
    </Layout>
  )
}

export const query = graphql`
query IndexQuery { 
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {title: {eq: "Hello"}}}
    limit: 1
  ) {
    nodes {
      frontmatter {
        title
        category
        startdate(formatString: "MMMM D, YYYY")
        slug
      }
      slug
      parent {
        ... on File {
          changeTime(fromNow: true)
        }
      }
      body
    }
  }
 
} 
`

export default IndexPage