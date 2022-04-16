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
            <div className="row">
              <div className="col-md-8 col-lg-7">
                  <h2>Hey, I'm Zinzy. I make digital products and resonant queer communities.</h2>
                  <p className="mt-3">I'm a designer, facilitator, and linguist living and working in Amsterdam, currently managing product and design at <a href="https://www.leeruniek.nl" target="_blank" rel="noopener noreferrer">Leeruniek</a>. Moonlighting as a facilitator, I'm on the leadership team of <a href="https://www.vineandfig.co" target="_blank" rel="noopener noreferrer">Vine & Fig</a>, an international community for queer Catholics. When not on hiatus, I host <a href="https://www.meetup.com/queersalon/" target="_blank" rel="noopener noreferrer">Queer Salon</a> in Amsterdam.</p>
                  <p>This website serves as my primary home on the web. In lieu of social media, I use this space to share my thoughts and work in a way that feels less performative. You can read more about why and how I make this website, feel free to visit my <a href="/Colophon">colophon</a>.</p>
              </div>
              <div className="d-none d-md-block col-md-3 offset-md-1 col-lg-4">
                <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1635344340/me/zinzy-1_zarupx.jpg" alt="" />
              </div>
            </div>

            <div className="mt-5">

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
query IndexQuery { 
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {title: {eq: "Hello"}}}
    limit: 1
  ) {
    nodes {
      frontmatter {
        title
        category
        date(formatString: "MMMM D, YYYY")
        slug
      }
      slug
      parent {
        ... on File {
          changeTime(fromNow: true)
        }
      }
      body
    }
  }
 
} 
`

export default IndexPage