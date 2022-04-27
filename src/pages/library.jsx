import React, { useState } from 'react';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Form from 'react-bootstrap/Form'
import { Link } from "gatsby"

// markup
const LibraryPage = ({data}) => {   
   
  const [appPosts, setAppPosts] = React.useState(data.allMdx.nodes); 
  const fruits = ["All", "Listen", "Read", "Watch"];
  const [fruit, setFruit] = useState("All");
 
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
              <h2 className="header-link-switch">Library <span className="text-light"> | </span><Link to="/antilibrary" className="text-light">Antilibrary</Link></h2>
              <p>A collection of more or less opinionated reviews of and thoughts on the things I read, listen to, and watch.</p>
            </div>
          </div>  
 
          <div className="row mt-5">
            <div className="col-8 d-none d-md-block">
              {fruits.map(f => (
                <>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="fruit"
                      value={f}
                      checked={fruit === f}
                      onChange={e => setFruit(e.currentTarget.value)}
                    />{" "}
                    {f}
                  </div>
                </>
              ))} 
            </div>
            <div className="col-md-4 d-flex justify-content-end">

            <Form>
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label="Reviews only"
                  onChange={toggle}
                />
              </Form>
            </div>
          </div>
            



        {
          fruit == "All" ? (
            <ul class="masonry masonry-breakout-large mt-5">    
            {
              appPosts.map(node => (
                <li key={node.slug} className={node.frontmatter.listingOnly == null ? ``: `listing-only`}> 
    
                  {node.frontmatter.listingOnly == null ? 


                    <Link to={`/${node.slug}`}>
                      <div className="">
                        <h6>{node.frontmatter.title}</h6>
                        <div className="text-muted small mt-3">{node.frontmatter.subcategory}</div>  
                      </div> 
                    </Link> 
    
                  : 
                  
                  <div className="">
                  <h6>{node.frontmatter.title}</h6>
                        <div className="text-muted small mt-3">{node.frontmatter.subcategory}</div>  
                  </div> 
                  }
      
                </li>
              ))
            }
            </ul>
          )
            : 
            <ul class="masonry masonry-breakout-large mt-5">    
            {
              appPosts.filter(node => node.frontmatter.category == fruit).map(node => (
                <li key={node.slug} className={node.frontmatter.listingOnly == null ? ``: `listing-only`}> 
    
                  {node.frontmatter.listingOnly == null ? 

                    <Link to={`/${node.slug}`}>
                    <div className=""> 
                      <h6>{node.frontmatter.title}</h6>
                      <div className="text-muted small mt-3">{node.frontmatter.subcategory}</div>  
                    </div> 
                    </Link> 
    
                  : 
                  
                  <div className="">
                  <h6>{node.frontmatter.title}</h6>
                        <div className="text-muted small mt-3">{node.frontmatter.subcategory}</div>  
                  </div> 
                  }
      
                </li>
              ))
            }
            </ul>
        }

 
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
      filter: {fileAbsolutePath: {regex: "/the-library/"}}
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
          thumb 
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
