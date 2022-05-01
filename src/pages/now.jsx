import * as React from "react" 
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import Clock from "../components/icons/Clock"
import { BsArrowLeft } from "react-icons/bs";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx" 

// markup
export default function NowPage({data}) {

  

  return (
    <Layout>
    <div className="row">
        <div className="col-md-2 mb-5">
          <Link to="/"><BsArrowLeft/></Link>
        </div>
    <div className="col-md-9 offset-md-1">

      <h2>Now</h2>
      <p>Inspired by Internet hero <a href="https://sive.rs" target="_blank" rel="noopener noreferrer">Derek Sivers</a>, this page contains an irregularly-updated broader horizon of what I'm working on, reading and watching, thinking about, and interesting in.</p>

      <ul className="changelog list-unstyled mt-10">
          {
            data.allMdx.nodes.map(node => (
              <li>
                <article key={node.slug} className="h-entry">

                <div className="row h-entry">
 
                  <div className="col-2 col-md-1">
                    <div className="timeline">
                      <Clock/>
                      <div className="line"></div>
                    </div>
                  </div>
                  <div className="col-10 col-md-11 pb-5 mt-1"> 
                    <h3>{node.frontmatter.title}</h3>
                  <div className="dt-published small text-muted">{node.frontmatter.date}</div> 
 
                    <div className="mt-3"> 
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
              </article>
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
