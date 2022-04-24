import React from 'react';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { Link } from "gatsby"

// markup
const AntilibraryPage = ({data}) => {  
   
  const [appPosts, setAppPosts] = React.useState(data.allMdx.nodes); 
 
  const toggle = event => {
    setAppPosts(
      event.target.checked ? data.allMdx.nodes.filter(post => post.frontmatter.listingOnly == null) : data.allMdx.nodes
    );
  }; 
 

  return (
    <Layout> 
      
      <section>

        <div className="">
          <div className="">

      <div className="">
          <div className="">
            <h2 className="header-link-switch">
              <Link to="/library" className="text-light">Library</Link> <span className="text-light"> | </span> Antilibrary</h2>
            <p>A collection of things I want to read, watch, listen to at some point in the future.</p>
          </div>
        </div>  

      <ul class="masonry mt-5">
      {
        appPosts.map(node => (
          <li key={node.slug} className="listing-only"> 

            <div className="">
               <div className="font-weight-bold">{node.frontmatter.title}</div> 
                    <div className="text-muted small mt-3">{node.frontmatter.subcategory}</div>  
             </div> 
 
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

export const query = graphql`
query AntilibraryQuery {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/antilibrary/"}}
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

export default AntilibraryPage
