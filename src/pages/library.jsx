import React, { useState } from 'react';
import { graphql } from 'gatsby'
import Layout from "../components/layout" 
import { Link } from "gatsby"
import { BsArrowLeft } from "react-icons/bs"; 

// markup
const LibraryPage = ({data}) => {   

  return (
    <Layout> 
      
      <div className="row">
        <div className="col-md-2 mb-5">
          <Link to="/"><BsArrowLeft/></Link>
        </div>
        <div className="col-md-9 offset-md-1">
            <h2>Library <span className="text-light"> | </span> <Link to="/antilibrary" className="text-light">Antilibrary</Link></h2>

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

export const query = graphql`
query LibraryQuery {
  categorized:allMdx(
    filter: {fileAbsolutePath: {regex: "/the-library/"}}
    sort: {fields: frontmatter___title, order: ASC}
  ) {
    group(field: frontmatter___subcategory) {
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
  }
`

export default LibraryPage