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
        <div className="col-md-8 offset-md-2 col-xl-6 offset-xl-3"> 

          <h2>Hey, I'm Zinzy Waleson. I make digital products and resonant queer communities. I live and work in Amsterdam, currently managing product and design at Leeruniek.</h2>

          <section className="mt-10">
          <div>  
                {
                  data.allMdx.nodes.map(node => (
                    <div key={node.slug}>
                      <h3><a href={`/${node.slug}`}>{node.frontmatter.title}</a></h3>
                      <div className="text-muted small mb-2">{node.frontmatter.date}</div>
                      <p>{node.frontmatter.excerpt}</p>
                       <a href={`/${node.slug}`} className="btn">Continue reading →</a>
                    </div>
                  ))
                }
            </div> 
          </section>


          {/* <section className="mt-10">
            <h3>What I do</h3>
            <p>I've come to specialize in enterprise products, which means I make tools for people at work. I combine my skills in research, design, strategy, and leadership to help companies embrace design thinking. I've been doing this work for fifteen years.</p>
            <a href="/work" className="btn">About my work →</a>
          </section> */}

          <section className="mt-10">
            <h3>About this website</h3>
            <p>This is my home on the Internet. In lieu of social media, I use this space to share my thoughts and work in a way that feels less performative. I maintain a growing collection of loose <a href="/notes">notes</a>, some more refined than others. I also maintain a  <a href="/library">library</a> of things I read, watch, and hear. You can read more about why and how I make this website, feel free to visit my <a href="/Colophon">colophon</a>.</p>

          </section> 
        </div>
      </div>
  
      </section> 
 
    </Layout>
  )
}

export const query = graphql`
query FrontPageIndex {
  allMdx(limit: 1, filter: {frontmatter: {title: {eq: "Weeknotes #3"}}}) {
    nodes {
      id
      frontmatter {
        title
        excerpt
        date(fromNow: true)
      }
      slug
      parent {
        ... on File {
          changeTime(fromNow: true)
          modifiedTime
        }
      }
      body
      excerpt
    }
  }
}
`

export default IndexPage