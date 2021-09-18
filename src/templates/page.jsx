import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout" 

export default function PageTemplate({ data: { mdx } }) {

  const featuredImg = mdx.frontmatter.featuredImage
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
          <div className="col-lg-3">
              <img className={featuredImg != null ? `rounded img-fluid` : `d-none`} src={mdx.frontmatter.featuredImage} alt="{ mdx.frontmatter.title }" />
          </div>
          <div className="col-lg-8 offset-lg-1">
        <div>
          <header className="mb-5">
            <h2 className="h1">{mdx.frontmatter.title}</h2>
            <p className="lead">{mdx.frontmatter.excerpt}</p>
          </header>
          <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div> 
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
        date(formatString: "MMM YYYY") 
        category
        subcategory
        featuredImage
        growthStage
      }
      timeToRead
    }
  }
`