import { graphql } from "gatsby"
import Layout from "../components/layout"
import React, { useState, useEffect } from 'react';

const BlogIndex = ({ data }) => {
 
  return (
    <Layout>
      <div>

        <div className="row">
          <div className="col-lg-6">
            <h2>The digital garden</h2>
            <p>I maintain this space as a digital garden; a public, one-person wiki of sorts, containing a variety of subjects. Its contents are subject to change.</p>
 


 

        <ul class="content-list mt-5">

        <div className="text-muted small text-end"> 
        <p>Last tended to</p>
        </div>  
            {
              data.allMdx.nodes.map(node => (
                <li key={node.slug}>
                  <a href={node.slug}>
                    <div className="row">
                      <div className="col-1">
                        {(() => { 
                          switch (node.frontmatter.growthStage) { 
                            default: return (<span role="img" aria-label="Category">🌱</span>)  
                            case 'Sprout': return (<span role="img" aria-label="Category">🌱</span>) 
                            case 'Seedling': return (<span role="img" aria-label="Category">🌱</span>)  
                            case 'Budding': return (<span role="img" aria-label="Category">🪴</span>)  
                            case 'Evergreen': return (<span role="img" aria-label="Category">🌳</span>)  
                          } 
                        })()} 
                      </div>
                      <div className="col-6">{node.frontmatter.title}</div>  
                      <div className="col-5 text-end">{node.parent.changeTime}</div>  
                    </div>  
                  </a>
                </li>
              ))
            }
            </ul>
    </div>
    </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(
      sort: {fields: frontmatter___title}
      filter: {fileAbsolutePath: {regex: "/garden/"}}
    ) {
      nodes { 
        body
        id
        excerpt
        frontmatter {
          title
          growthStage
        }
        slug 
        parent {
          ... on File {
            changeTime(formatString: "MMM D, YYYY")
          }
        }
      }
    }
  }
`

export default BlogIndex