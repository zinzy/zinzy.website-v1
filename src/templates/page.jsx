import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout" 

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
             {/*  <footer className="my-5 py-5"> 
                 <ul className="content-list mt-3">
                <h3 className="h5">Linking here</h3>
                  {
                    mdx.inboundReferences.map(node => (
                      <li key={node.slug}>
                  <a href={node.slug}>
                    <div className="row">
                      <div className="col-3 col-md-2">
                        cd
                      </div>
                      <div className="col-9 col-md-7">{node.frontmatter.title}</div>  
                      <div className="d-none d-md-block col-md-3 text-end">{node.parent.modifiedTime}</div>  
                    </div>  
                  </a>
                </li>
                    ))
                  }
                  </ul> 
              </footer>*/} 
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

