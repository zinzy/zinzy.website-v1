import * as React from "react" 
import { graphql } from 'gatsby'
import Layout from "../components/layout"

// markup
const EssaysPage = ({data}) => {
  return (
    <Layout>
      <title>Home Page</title>
      <h1>Zinzy Nev Geene</h1>
      <p>
        Edit <code>src/pages/index.js</code> to see this page
        update in real-time.
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>


      <ul>
      {
        data.allMdx.nodes.map(node => (
          <li key={node.frontmatter.slug}>
            {node.frontmatter.title}, {node.frontmatter.category}, {node.frontmatter.date}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query EssaysQuery {
    allMdx(
      sort: {fields: frontmatter___title}
      filter: {fileAbsolutePath: {regex: "/essays/"}}
    ) {
      nodes {
        frontmatter {
          title 
          category
          date
        }
      }
    }
  }
  

`

export default EssaysPage
