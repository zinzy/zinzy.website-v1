import * as React from "react" 
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"


// markup
export default function ChangelogPage({data}) {

  return (
    <Layout>
      <title>Home Page</title>
      
      
      <div className="row">
          <div className="col-lg-6">
            <h2>The changelog</h2>
            <p>The sweet spot in between the noise and the static, my changelog contains updates relevant to the skills I've acquired over the past few years.</p>
          </div>
        </div>  

      <ul class="content-list mt-5">
      {
        data.allMdx.nodes.map(node => (
          <li key={node.slug}>
            <a href={node.slug}>
              <div className="row">
                      <div className="col-1">
                        
                  {(() => { 
                    switch (node.frontmatter.category) { 
                      case 'Development': return (<span role="img" aria-label="Category">🛠️</span>)  
                      case 'Queer facilitator': return (<span role="img" aria-label="Category">🏳️‍🌈</span>)  
                      case 'Mentor': return (<span role="img" aria-label="Category">☕</span>)    
                      case 'Professional': return (<span role="img" aria-label="Category">🔥</span>)   
                      case 'Technical': return (<span role="img" aria-label="Category">🛠️</span>)   
                      case 'Writer': return (<span role="img" aria-label="Category">✍🏽</span>)   
                      default: return (<span role="img" aria-label="Category">💡</span>) 
                    } 
                    })()}   
                      </div>
                      <div className="col-8">
                        <h3 className="h6">{node.frontmatter.title}</h3>
                        <MDXProvider>
                          <MDXRenderer>{node.body}</MDXRenderer>
                        </MDXProvider>
                      </div>  
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
query ChangelogQuery {
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {fileAbsolutePath: {regex: "/changelog/"}}
  ) {
    nodes {
      frontmatter {
        title
        category
        date(formatString: "MMM D, YYYY")
      }
      body 
    }
  }
}
` 
