import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const notesIndex = ({ data }) => {

  return (
    <Layout>
      <div>

        <div className="row">
          <div className="col-lg-8">
            <h2>Notes</h2>
            <p>I maintain this space to link and think. You'll find soft stances, lived experiences, and critical notes on the things I hold dear. Its contents are subject to change.</p>
          </div>
        </div>  
 

        <ul class="content-list content-list-links mt-5">

        <div className="text-muted text-end"> 
        <p>Last tended to</p>
        </div>  

            {
              data.allMdx.nodes.map(node => (
                <li key={node.slug}>
                  <a href={`/${node.slug}/`}>
                    <div className="d-flex">
                      <div className="flex-grow-1">{node.frontmatter.title}</div>  
                      <div className="">{node.parent.changeTime}</div>  
                    </div>  
                  </a>
                </li>
              ))
            }
            </ul>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query notesIndex {
  allMdx(
    filter: {fileAbsolutePath: {regex: "/notes/"}, frontmatter: {slug: {ne: "hello"}}}
  ) {
    nodes {
      body
      id
      excerpt
      frontmatter {
        title
        growthStage
        slug
      }
      slug
      parent {
        ... on File {
          changeTime(fromNow: true)
        }
      }
    }
  }
}

`

export default notesIndex