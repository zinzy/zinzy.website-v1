import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout" 
const makeSlug = require("../utils/make-slug")
const moment = require('moment')  

export default function PageTemplate({ data: { mdx } }) {

  const featuredImg = mdx.frontmatter.featuredImage 
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
              <header className="mb-5">
                <h2 className="h1">{mdx.frontmatter.title}</h2>
              </header>
              <MDXProvider>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider> 
 
              {/* <footer className={mdx.inboundReferences != null ? `my-5 py-5` : `d-none`}>
                <p className="text-muted m-0">Linking here</p>
                <ul className="content-list mt-2">
                  {
                    mdx.inboundReferences.map(node => (
                      <li key={node.slug}>
                        <a href={node.slug}>
                        {node.frontmatter.title}  
                        </a>
                      </li>
                    ))
                  }
                  </ul>
              </footer> */}
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
        title
      }
      timeToRead
      inboundReferences {
        ... on Mdx {
          frontmatter {
            title
          }
          slug
        }
      }
      outboundReferences {
        ... on Mdx {
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`

