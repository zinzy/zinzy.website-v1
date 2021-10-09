import * as React from "react" 
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
  

// markup
const IndexPage = ({data}) => {
  return (
    <Layout> 
      <a href="mailto:zinzy@pm.me">Hello</a>
    </Layout>
  )
}


export const indexPage = graphql`
  query blogIndex {
    allMdx(
      sort: {fields: frontmatter___title}
      filter: {fileAbsolutePath: {regex: "/_writing/"}}
      limit: 1
    ) {
      nodes { 
        body
        id
        excerpt
        frontmatter {
          title 
          date(formatString: "MMM DD, YYYY") 
        }
        slug  
      }
    }
  }
`

export default IndexPage
