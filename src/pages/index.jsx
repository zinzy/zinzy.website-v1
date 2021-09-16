import * as React from "react" 
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx" 
 
// data
const links = [  
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = ({data}) => {
  return (
    <Layout>
      <title>Home Page</title>


{/* 
TO DO 
- Template per content type
- Slugs
- Bidirectional links
- Bidirectional previews
- Animation
- Favicon
- Contact form


*/}



      <section className="mb-3 pb-3 mb-md-4 pb-md-4"> 
        <div className="row">
          <div className="col-lg-4">
            <p>Hello Internet</p>
          </div>
          <div className="col-lg-8">
            <h2 className="h1">I'm Zinzy, a designer, linguist, and queer facilitator in Amsterdam.</h2>
          </div>
        </div>
      </section>

      <div className="border-bottom"></div>
 

      <section className="my-3 py-3 my-md-4 py-md-4"> 
        <div className="row">
          <div className="d-none d-lg-block col-lg-3">
            <p>An open collection of big and small notes</p> 
          </div>
          <div className="col-lg-8 offset-lg-1">
            <h3>Digital garden</h3> 
            <ul class="content-list content-list-links mt-3 mt-lg-5">
            {
              data.garden.nodes.map(node => (
                <li key={node.slug}>
                  <a href={node.slug}>
                    <div className="row">
                      <div className="col-1">
                        {(() => { 
                          switch (node.frontmatter.growthStage) {
                            case 'Sprout': return (<span role="img" aria-label="Category">🌱</span>) 
                            case 'Seedling': return (<span role="img" aria-label="Category">🌱</span>)  
                            case 'Budding': return (<span role="img" aria-label="Category">🪴</span>)  
                            case 'Evergreen': return (<span role="img" aria-label="Category">🌳</span>) 
                          } 
                        })()} 
                      </div>
                      <div className="col-6">{node.frontmatter.title}</div>  
                      <div className="col-5 text-end">{node.parent.modifiedTime}</div>  
                    </div>  
                  </a>
                </li>
              ))
            }
            </ul>

            <p className="mt-4 mt-lg-5 text-end"><a href="/garden">Visit the garden</a></p>

          </div>
        </div>
      </section> 

      <div className="border-bottom"></div>

      <section className="my-3 py-3 my-md-4 py-md-4"> 
        <div className="row">
          <div className="d-none d-lg-block col-lg-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> 
          </div>
          <div className="col-lg-8 offset-lg-1">
            <h3>Library</h3> 

            <ul class="content-list content-list-links mt-3 mt-lg-5">
            {
              data.library.nodes.map(node => (
                <li key={node.slug}>
                  <a href={node.slug}>
                    <div className="row">
                      <div className="col-3 col-md-2">{node.frontmatter.subcategory}</div>
                      <div className="col-9 col-md-7">{node.frontmatter.title}</div>  
                      <div className="d-none col-md-3 text-end">{node.frontmatter.date}</div> 
                    </div>  
                  </a>
                </li>
              ))
            }
            </ul>

            <p className="mt-4 mt-lg-5 text-end"><a href="/library">Visit the library</a></p>

          </div>
        </div>
      </section> 

      <div className="border-bottom"></div>
 
      <section className="my-3 py-3 my-md-4 py-md-4"> 
        <div className="row">
          <div className="d-none d-lg-block col-lg-3">
            <p>The very sweet spot between the noise and the static</p>
          </div>
          <div className="col-lg-8 offset-lg-1">
            <h3>Changelog</h3>

            <ul class="content-list mt-3 mt-lg-5">
            {
              data.changelog.nodes.map(node => (
                <li key={node.slug}>
                  <a href={node.slug}>
                    <div className="row">
                      <div className="col-1">
                        
                  {(() => { 
                    switch (node.frontmatter.category) { 
                      case 'Development': return (<span role="img" aria-label="Category">🛠️</span>)  
                      case 'Queer facilitator': return (<span role="img" aria-label="Category">🏳️‍🌈</span>)  
                      case 'Mentor': return (<span role="img" aria-label="Category">☕</span>)    
                      case 'Professional': return (<span role="img" aria-label="Category">🔥</span>)   
                      case 'Technical': return (<span role="img" aria-label="Category">🛠️</span>)   
                      case 'Writer': return (<span role="img" aria-label="Category">✍🏽</span>)   
                      default: return (<span role="img" aria-label="Category">💡</span>) 
                    } 
                    })()}   
                      </div>
                      <div className="col-11 col-md-8">{node.frontmatter.title}</div>  
                      <div className="d-none col-md-3 text-end">{node.frontmatter.date}</div> 
                    </div>  
                  </a>
                </li>
              ))
            }
            </ul>

            <p className="mt-4 mt-lg-5 text-end"><a href="/changelog">Visit the changelog</a></p>
          </div>
        </div>
      </section>

 
 
    </Layout>
  )
}

export const query = graphql`
query IndexQuery {
  changelog: allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {fileAbsolutePath: {regex: "/changelog/"}}
    limit: 3
  ) {
    nodes {
      frontmatter {
        title
        category
        date(formatString: "MMM D, YYYY")
      }
      body 
    }
  }

  essays: allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {fileAbsolutePath: {regex: "/essays/"}}
    limit: 1
  ) {
    nodes {
      frontmatter {
        title
        category
        date
      }
      slug
      parent {
        ... on File {
          modifiedTime
        }
      }
    }
  }

  garden: allMdx(
    filter: {fileAbsolutePath: {regex: "/garden/"}}
    limit: 3
  ) {
    nodes { 
      frontmatter {
        title
        category
        date(formatString: "dddd DD MMMM YYYY")
        excerpt
        growthStage
      }
      slug  
      parent {
        ... on File {
          modifiedTime(formatString: "MMM D, YYYY")
        }
      }
    }
  }

  library: allMdx(
    sort: {fields: frontmatter___title}
    filter: {fileAbsolutePath: {regex: "/the-library/"}}
    limit: 3
  ) {
    nodes {
      slug
      frontmatter {
        date(formatString: "MMM YYYY")
        title 
        category
        subcategory 
      }
      parent {
        ... on File {
          modifiedTime
        }
      }
    }
  }
} 
`

export default IndexPage
