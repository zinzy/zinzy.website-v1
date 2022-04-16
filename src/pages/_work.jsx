import React from 'react';
import { graphql } from 'gatsby'
import Layout from "../components/layout"

// markup
const WorkPage = ({data}) => {   
 

  return (
    <Layout> 
      
      <section>
wtf


      </section>
    </Layout>
  )
} 

export const query = graphql`
query WorkQuery {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes { 
        body
        slug
        frontmatter {
          date(formatString: "MMM YYYY")
          title 
          category
          subcategory  
          listingOnly
          slug
        }
        parent {
          ... on File {
            changeTime(fromNow: true)
          }
        }
      }
    }
  } 
`

export default WorkPage
