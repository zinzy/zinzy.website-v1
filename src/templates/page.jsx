import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"  
import Tippy from '@tippyjs/react';
import { Link } from "gatsby"
import ReactTimeAgo from "react-time-ago"
import JavascriptTimeAgo from 'javascript-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

export default function PageTemplate({ data: { mdx } }) {
  TimeAgo.addDefaultLocale(en)

  // Create formatter (English).
  const timeAgo = new TimeAgo('en-US')
  
  timeAgo.format(new Date())
  // "just now"
  
  timeAgo.format(Date.now() - 60 * 1000)
  // "1 minute ago"
  
  timeAgo.format(Date.now() - 2 * 60 * 60 * 1000)
  // "2 hours ago"
  
  timeAgo.format(Date.now() - 24 * 60 * 60 * 1000)
  // "1 day ago"

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

        <div className="row">
          <div className="col-md-8 offset-md-2 col-xl-6 offset-xl-3">
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
                  <div>Updated <ReactTimeAgo date={mdx.parent.changeTime}/></div> 
                  <div>Created on <span className="dt-published">{mdx.frontmatter.startdate}</span></div> 
                </div>

                {mdx.inboundReferences.length > 0 ?  
                  <div className="references">
                    <h6>Pages linking here</h6>
                    <ul class="masonry masonry-page mt-3">   
                          {mdx.inboundReferences.map(ref => (
                            <li key={ref.slug}>
                              <a href={`/${ref.slug}`}>
                                <div className="">
                                  <div className="font-weight-bold">{ref.frontmatter.title}</div> 
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
          </div>
        </div>
 
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
              changeTime(fromNow: true)
              ctime(fromNow: true)
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

