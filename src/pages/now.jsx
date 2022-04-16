import * as React from "react" 
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { FaClock } from "react-icons/fa" 

// markup
export default function NowPage({data}) {

  

  return (
    <Layout>
      
      <div className="row">
        <div className="col-md-8 offset-md-2 col-xl-6 offset-xl-3">

        <div className="mb-5">
          <h2>Now</h2> 
          <p>Inspired by Internet hero <a href="https://sive.rs" target="_blank" rel="noopener noreferrer">Derek Sivers</a>, this page contains an irregularly-updated broader horizon of what I'm working on, reading and watching, thinking about, and interesting in. Less ranty than a Twitter feed, more unreliable than an About page.</p>
        </div>


          <ul class="list-unstyled changelog mt-5">
          {
            data.allMdx.nodes.map(node => (
              <li key={node.slug} className="h-entry">
              <div className="row">
 
                <div className="col-1">
                  <div className="timeline">
                    <FaClock />  
                    <div className="line"></div>
                  </div>
                </div>
                <div className="col-11">
                <div className="date dt-published mb-3 mb-lg-0">{node.frontmatter.date}</div> 
                
                  <div className="mb-5"> 

                  <h3 className="">{node.frontmatter.title}</h3>

                    <div className="p-content">
                      <MDXProvider>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                      </MDXProvider>
                    </div>
 
                  </div>
                </div>   
              </div>  
              </li>
            ))
          }
          </ul>
        </div>
      </div>
  
  
    </Layout>
  )
}

export const query = graphql`
query NowQuery {
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {fileAbsolutePath: {regex: "/now/"}}
  ) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMM YYYY")
      }
      body 
    }
  }
}
` 
