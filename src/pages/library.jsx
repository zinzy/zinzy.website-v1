import React from 'react';
import { graphql } from 'gatsby'
import Layout from "../components/layout"

// markup
const LibraryPage = ({data}) => {  
   
  const [appPosts, setAppPosts] = React.useState(data.allMdx.nodes); 
 
  const toggle = event => {
    setAppPosts(
      event.target.checked ? data.allMdx.nodes.filter(post => post.frontmatter.listingOnly == null) : data.allMdx.nodes
    );
  }; 
 

  return (
    <Layout>
      <title>Home Page</title>
      
      <div className="row">
          <div className="col-lg-8">
            <h2>Library</h2>
            <p>A collection of more or less opinionated reviews of and thoughts on the things I read, listen to, and watch.</p>
          </div>
        </div>  


        <div class="d-flex mt-5">
          <div class="flex-grow-1">



          </div>
          <div class="">
            <div class="form-check form-switch">

            <label class="form-check-label" for="flexSwitchCheckDefault">Reviews only
              <input class="form-check-input" onChange={toggle} type="checkbox"/> 
              </label> 
            </div>
          </div>
        </div> 
          

      <ul class="content-list content-list-links mt-5">
      {
        appPosts.map(node => (
          <li key={node.slug}> 
            <a href={`/${node.slug}/`} className={node.frontmatter.listingOnly == null ? `d-block` : `d-none`}>
              <div className="row">
                <div className="col-3 col-md-2">{node.frontmatter.subcategory}</div>
                <div className="col-9 col-md-7">
                  {node.frontmatter.title}
                </div>  
                <div className="d-none d-md-block col-md-3 text-end">{node.frontmatter.date}</div> 
              </div>  
            </a>
            <div className={node.frontmatter.listingOnly != null ? `d-block text-muted` : `d-none`}>
              <div className="row">
                <div className="col-3 col-md-2">{node.frontmatter.subcategory}</div>
                <div className="col-9 col-md-7">
                  {node.frontmatter.title}
                </div>  
                <div className="d-none d-md-block col-md-3 text-end">{node.frontmatter.date}</div> 
              </div>  
            </div>

          </li>
        ))
      }
      </ul>
    </Layout>
  )
} 

export const query = graphql`
query LibraryQuery {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/library/"}}
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
      }
    }
  } 
`

export default LibraryPage
