import React, { useState } from 'react';
import { graphql } from "gatsby"
import { BsArrowLeft } from "react-icons/bs";
import Layout from "../components/layout" 
import { Link } from "gatsby"

const NotesIndex = ({data}) => {   
  return (
    <Layout>
        <div className="row">
        <div className="col-md-2">
          <Link to="/"><BsArrowLeft/></Link>
        </div>
        <div className="col-md-9 offset-md-1">

          <h2>Notes</h2>

          <div className="category-section mt-10">
            {data.categorized.group.map(( { fieldValue, edges } ) => {
                return (
                  <>
                    <ul className="category-lists list-unstyled">
                      <li>
                        <div className="text-muted">{fieldValue}</div>
                        <ul className=" list-unstyled">
                          {edges.map(( { node } ) => {
                            return (
                              <li key={node.slug}>
                                <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link> 
                              </li>
                            )    
                          })}
                        </ul>
                      </li>
                    </ul>
                  </>   
                )    
                })}
          </div>
        </div>
      </div>
 
    </Layout>
  )
}

export const pageQuery = graphql`
query Notes {
  categorized:allMdx(
    filter: {fileAbsolutePath: {regex: "/notes/"}}
    sort: {fields: frontmatter___title, order: ASC}
  ) {
    group(field: frontmatter___category) {
      fieldValue
      totalCount
      edges {
        node {
          body
          id
          slug
          frontmatter {
            title
            category
            date(formatString: "MMMM D, YYYY")
            excerpt
          }
        }
      } 
    }
  }
  default:allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {fileAbsolutePath: {regex: "/notes/"}}
  ) {
    nodes { 
      body
      slug
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title 
        category
      }
      parent {
        ... on File {
          changeTime(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
}
`

export default NotesIndex