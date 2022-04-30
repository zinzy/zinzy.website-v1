import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"  


export default function PageTemplate({data: { mdx } }) { 
  return (
    <> 
      <Helmet>  
      </Helmet>
      <Layout>

          <article className="page"> 
          <div className="">
            <div>
              <header className="">
                <h2 className="">{mdx.frontmatter.title}</h2>  
              </header>
              <MDXProvider>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider> 
              <footer className="">
                <div className="text-muted">
                  <div>Updated on {mdx.parent.changeTime}</div> 
                  <div>Created on <span className="dt-published">{mdx.frontmatter.date}</span></div> 
                </div>

                {mdx.inboundReferences.length > 0 ?  
                  <div className="references">
                    <h6>Pages linking here</h6>
                    <ul class="masonry masonry-page mt-3">   
                          {mdx.inboundReferences.map(ref => (
                            <li key={ref.slug}>
                              <a href={`/${ref.slug}`}>
                                <div className="">
                                  <h6 className="m-0 p-0">{ref.frontmatter.title}</h6>
                                  <div className="">{ref.frontmatter.excerpt}</div> 
                                  <div className="text-muted small mt-3">{ref.parent.changeTime}</div>  
                                </div>  
                                </a>
                            </li>
                        ))}
                    </ul>
                  </div>
                : ""} 
              </footer>

               
            </div> 
          </div>
        </article>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        tags
        title
        excerpt
        date(formatString: "MMMM D, YYYY") 
        category
        subcategory
        growthStage
      }
      timeToRead 
      slug
      parent {
        ... on File {
          changeTime(formatString: "MMMM D, YYYY") 
          ctime
          modifiedTime
        }
      }
      inboundReferences {
        ... on Mdx {
          id
          slug
          parent {
            id
            ... on File {
              changeTime(formatString: "MMMM D, YYYY") 
              ctime(formatString: "MMMM D, YYYY") 
              modifiedTime
            }
          }
          frontmatter {
            title
            excerpt
          }
        }
      }
    }
  }
`

