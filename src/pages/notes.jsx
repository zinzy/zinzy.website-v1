import React, { useState } from 'react';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Form from 'react-bootstrap/Form'
import { Link } from "gatsby"

const NotesIndex = ({data}) => {   
 
  const [checked, setChecked] = useState(false);

 
  return (
    <Layout>
      <section>
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <h2>Notes</h2>
                <p>I maintain this space to link and think. You'll find soft stances, lived experiences, and critical notes on the things I hold dear. Its contents are subject to change.</p>
              </div>
              <div className="mt-3 d-flex justify-content-end">
              <Form>
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label="Categories"
                  onChange={(e) => setChecked(e.target.checked)}
                />
              </Form>
              </div>
            </div>  


        {checked ? 
              <div className="category-section mt-5">
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
            :
            <div>
            <ul class="masonry masonry-breakout-large mt-5">  
                {
                  data.default.nodes.map(node => (
                    <li key={node.slug}>

                      <Link to={`/${node.slug}`}>
                        <div className="">
                          <h6>{node.frontmatter.title}</h6>
                          <div className="text-muted small mt-3">
                            <div>{node.parent.changeTime}</div>
                          </div>  
                        </div>  
                      </Link>  
                    </li>
                  ))
                }
            </ul>
          </div>
        }





           



             
          </div>
        </div>
      </section>
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