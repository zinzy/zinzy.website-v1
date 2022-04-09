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
      
      <section>

        <div className="row">
          <div className="col-md-8 offset-md-2 col-xl-10 offset-xl-1">

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
          

      <ul class="masonry mt-5">
      {
        appPosts.map(node => (
          <li key={node.slug} className={node.frontmatter.listingOnly == null ? ``: `listing-only`}> 

            {node.frontmatter.listingOnly == null ? 

              <a href={`/${node.slug}/`}>
                <div className="">
                  <div className="font-weight-bold">{node.frontmatter.title}</div> 
                  <div className="text-muted">{node.frontmatter.subcategory}</div> 
                  <div className="text-muted small mt-3">{node.frontmatter.date}</div>  
                </div> 
              </a> 

            
             : 
             
             <div className="">
               <div className="font-weight-bold">{node.frontmatter.title}</div> 
               <div className="text-muted">{node.frontmatter.subcategory}</div> 
               <div className="text-muted small mt-3">{node.frontmatter.date}</div>  
             </div> 
             }

 
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
        parent {
          ... on File {
            changeTime(fromNow: true)
          }
        }
      }
    }
  } 
`

export default LibraryPage
