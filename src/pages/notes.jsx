import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactTimeAgo from "react-time-ago"
import JavascriptTimeAgo from 'javascript-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

const notesIndex = ({ data }) => { 
  TimeAgo.addDefaultLocale(en)

// Create formatter (English).
const timeAgo = new TimeAgo('en-US')

timeAgo.format(new Date())
// "just now"

timeAgo.format(Date.now() - 60 * 1000)
// "1 minute ago"

timeAgo.format(Date.now() - 2 * 60 * 60 * 1000)
// "2 hours ago"

timeAgo.format(Date.now() - 24 * 60 * 60 * 1000)
// "1 day ago"
  return (
    <Layout>
      <section>
        <div className="row">
          <div className="col-md-8 offset-md-2 col-xl-10 offset-xl-1">
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
                            <ReactTimeAgo date={node.parent.modifiedTime}/>
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
          changeTime
          modifiedTime
        }
      }
    }
  }
}

`

export default notesIndex