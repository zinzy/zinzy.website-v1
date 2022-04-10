import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const notesIndex = ({ data }) => {  
  return (
    <Layout>
      <section>
        <div className="row">
          <div className=" col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
            <div className="row">
              <div className="col-lg-8">
                <h2>Notes</h2>
                <p>I maintain this space to link and think. You'll find soft stances, lived experiences, and critical notes on the things I hold dear. Its contents are subject to change.</p>
              </div>
            </div>  

            <ul class="masonry mt-5">  
                {
                  data.allMdx.nodes.map(node => (
                    <li key={node.slug}>
                      <a href={`/${node.slug}/`}>
                        <div className="">
                          <div className="font-weight-bold">{node.frontmatter.title}</div> 
                          <div className="">{node.frontmatter.excerpt}</div> 
                          <div className="text-muted small mt-3">
                            <div>{node.parent.changeTime}</div>
                          </div>  
                        </div>  
                      </a>
                    </li>
                  ))
                }
            </ul>
          </div>
        </div>
      </section>
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
        excerpt
      }
      slug
      parent {
        ... on File {
          changeTime(fromNow: true)
          modifiedTime
        }
      }
    }
  }
}

`

export default notesIndex