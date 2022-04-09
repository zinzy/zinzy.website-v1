import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"  
import Tippy from '@tippyjs/react';
import { Link } from "gatsby"

export default function PageTemplate({ data: { mdx } }) {

  // const featuredImg = mdx.frontmatter.featuredImage 
  // const linkingHere = mdx.inboundReferences.nodes;

  // console.log('refs', linkingHere)

  return (
    <> 
      <Helmet> 
        {/* <meta
          name="twitter:image"
          content={`https://pbs.twimg.com/profile_images/1227765372608057344/daNn331w_400x400.jpg`}
        /> */}
      </Helmet>
      <Layout>

        <article className="page">
          {/* <div className="col-lg-3">
              <img className={featuredImg != null ? `rounded img-fluid` : `d-none`} src={mdx.frontmatter.featuredImage} alt="{ mdx.frontmatter.title }" />
          </div> */}
          <div className="">
            <div>
              <header className="">
                <h2 className="h1">{mdx.frontmatter.title}</h2> 
                <p className="text-muted">{mdx.frontmatter.excerpt}</p>
              </header>
              <MDXProvider>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider> 
              <footer className="">
                <div className="text-muted">
                  <div>Updated {mdx.parent.changeTime}</div> 
                  <div>Created on <span className="dt-published">{mdx.frontmatter.startdate}</span></div> 
                </div>  
                <ul className="content-list">
                {mdx.inboundReferences.length > 0 ? <p>Referenced in:</p> : ""}
                  {mdx.inboundReferences.map(ref => (
                    <li>
                      <Link to={`/notes/${ref.slug}`}>{ref.frontmatter.title}</Link>
                    </li>
                  ))}
                </ul>
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
        startdate(formatString: "MMMM D, YYYY") 
        category
        subcategory
        featuredImage
        growthStage
      }
      timeToRead 
      slug
      parent {
        ... on File {
          changeTime(fromNow: true)
        }
      }
      inboundReferences {
        ... on Mdx {
          id
          parent {
            id
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

