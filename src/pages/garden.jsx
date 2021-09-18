import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogIndex = ({ data }) => {

  return (
    <Layout>
      <div>



        <div className="row">
          <div className="col-lg-6">
            <h2>The digital garden</h2>
            <p>I maintain this space as a digital garden; a public, one-person wiki of sorts, containing a variety of subjects. Its contents are subject to change.</p>
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
                      <div className="col-5 text-end">{node.parent.modifiedTime}</div>  
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
            modifiedTime(formatString: "MMM D, YYYY")
          }
        }
      }
    }
  }
`

export default BlogIndex