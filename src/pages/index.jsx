import * as React from "react" 
import { graphql } from 'gatsby' 
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
  

// markup
const IndexPage = ({data}) => {
  return (
    <Layout>
      <title>Home Page</title>
 
 
      <section className=""> 

      <div className="row">
        <div className="col-lg-10 offset-lg-1 col-xl-10 offset-xl-1"> 
          <div className="mt-3 mt-lg-5">
            <div className="row d-flex align-items-center">
              <div className="col-md-8 col-lg-7">
                  <h2>Hey, I'm Zinzy. I make digital products and resonant queer communities.</h2>
                  <p className="mt-3 mb-0 lead">I'm a designer, facilitator, and linguist living and working in Amsterdam, currently managing product and design at <a href="/Leeruniek">Leeruniek</a>. Moonlighting as a facilitator, I'm on the leadership team of <a href="/Vine-and-Fig">Vine & Fig</a>, an international community for queer Catholics. When not on hiatus, I host <a href="/Queer-Salon">Queer Salon</a> in Amsterdam.</p>
              </div>
              <div className="d-none d-md-block col-md-3 offset-md-1 col-lg-4">
                <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1635344340/me/zinzy-1_zarupx.jpg" alt="" />
              </div>
            </div>

            <div className="mt-10">
              <div className="row">
                <div className="col-lg-4">
                  <h3>The garden</h3>
                  <p>This site contains a collection of notes, loosely-structured, imperfect notes, maintained in public, evolving over time.</p>
 
                </div>
                <div className="col-lg-8">


            <ul class="masonry mt-5">  
                {
                  data.allMdx.nodes.map(node => (
                    <li key={node.slug}>
                      <a href={`/${node.slug}`}>
                        <div className="">
                          <div className="font-weight-bold">{node.frontmatter.title}</div> 
                          {/* <div className="">{node.frontmatter.excerpt}</div>  */}
                          <div className="text-muted small mt-3">
                            <div>{node.parent.changeTime}</div>
                          </div>  
                        </div>  
                      </a>
                    </li>
                  ))
                }
            </ul>
                </div>
              </div>
 
            </div>

            {/* {
              data.allMdx.nodes.map(node => ( 
                <article className="h-entry" key={node.slug}>
                  <header>
                    <h3 className="h6 p-name">{node.frontmatter.title}</h3>
                    <p className="text-muted">{node.frontmatter.excerpt}</p>  
                  </header>
                  <div className="e-content">
                    <MDXProvider>
                      <MDXRenderer>{node.body}</MDXRenderer>
                    </MDXProvider>
                  </div> 
                </article>  
              ))
            } */}
            </div>

        </div>
      </div>
  
      </section> 
 
    </Layout>
  )
}

export const query = graphql`
query FrontPageIndex {
  allMdx(
    filter: {fileAbsolutePath: {regex: "/notes/"}, frontmatter: {slug: {ne: "hello"}}},
    limit: 4
  ) {
    nodes {
      body
      id
      excerpt
      frontmatter {
        title
        growthStage
        slug
        excerpt
      }
      slug
      parent {
        ... on File {
          changeTime(fromNow: true)
          modifiedTime
        }
      }
    }
  }
}
`

export default IndexPage