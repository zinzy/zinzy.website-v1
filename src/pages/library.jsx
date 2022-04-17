import React, { useState } from 'react';
import { graphql } from 'gatsby'
import Layout from "../components/layout"

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

        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">

          <div className="row">
            <div className="col-lg-8">
              <h2 className="header-link-switch">Library <span className="text-light"> | </span> <a href="/antilibrary" className="text-light">Antilibrary</a></h2>
              <p>A collection of more or less opinionated reviews of and thoughts on the things I read, listen to, and watch.</p>
            </div>
          </div>  
 
          <div className="row mt-5">
            <div className="col-9">
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
            <div className="col-3 d-flex justify-content-end">
              <div className="form-check">
              <input class="form-check-input" onChange={toggle} type="checkbox"/>
              <label class="form-check-label" for="flexSwitchCheckDefault"> 
                Reviews only
              </label> 
            </div>
            </div>
          </div>
            



        {
          fruit == "All" ? (
            <ul class="masonry mt-5">    
            {
              appPosts.map(node => (
                <li key={node.slug} className={node.frontmatter.listingOnly == null ? ``: `listing-only`}> 
    
                  {node.frontmatter.listingOnly == null ? 
    
                    <a href={`/${node.slug}/`}>
                      <div className="">
                        <div className="font-weight-bold">{node.frontmatter.title}</div>  
                        <div className="text-muted small mt-3">{node.frontmatter.subcategory}</div>  
                      </div> 
                    </a> 
    
                  : 
                  
                  <div className="">
                    <div className="font-weight-bold">{node.frontmatter.title}</div> 
                        <div className="text-muted small mt-3">{node.frontmatter.subcategory}</div>  
                  </div> 
                  }
      
                </li>
              ))
            }
            </ul>
          )
            : 
            <ul class="masonry mt-5">    
            {
              appPosts.filter(node => node.frontmatter.category == fruit).map(node => (
                <li key={node.slug} className={node.frontmatter.listingOnly == null ? ``: `listing-only`}> 
    
                  {node.frontmatter.listingOnly == null ? 
    
                    <a href={`/${node.slug}/`}>
                      <div className="">
                        <div className="font-weight-bold">{node.frontmatter.title}</div>  
                        <div className="text-muted small mt-3">{node.frontmatter.subcategory}</div>  
                      </div> 
                    </a> 
    
                  : 
                  
                  <div className="">
                    <div className="font-weight-bold">{node.frontmatter.title}</div> 
                        <div className="text-muted small mt-3">{node.frontmatter.subcategory} · {node.frontmatter.date}</div>  
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
