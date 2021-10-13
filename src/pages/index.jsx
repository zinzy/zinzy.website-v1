import * as React from "react" 
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

  

// markup
const IndexPage = ({data}) => {
  return (
    <Layout> 

      <p>Hello, I'm Zinzy, a designer with 13 years of skin in the game. I deploy my multidisciplinary skillset in leadership, design thinking, and operations to help teams do better. I'm specialized in building tools that help people solve problems at work. At the moment I lead product and design at edtech startup <a href="https://www.leeruniek.nl" target="_blank" rel="noopener noreferrer">Leeruniek</a>. Literally couldn't wish for better colleagues.</p>
      <p>Outside of work I build resonant queer spaces. I'm on the leadership team of <a href="https://www.vineandfig.co" target="_blank" rel="noopener noreferrer">Vine & Fig</a>, an international organization for queer Catholics. Every last Sunday of the month I host <a href="https://www.queersalon.us" target="_blank" rel="noopener noreferrer">Queer Salon</a> in Amsterdam.</p>
      <p>You may find me on the Amsterdam East side tending to the home and garden I share with <a href="https://twitter.com/anjawaleson" target="_blank" rel="noopener noreferrer">Anja</a>. I enjoy writing and making music, learning the love language of cooking, and discovering new wonders in the world of theology, sociolinguistics, and intersectionality. Above all, I'm a fan of Barbra Streisand, garbage television, and mediocre cinema.</p>
      <p>If you'd like to reach out to me, you can do so via <a href="mailto:zinzy@pm.me">email</a>.</p>
      <p>This here is my personal site: a collection of soft stances, lived experiences, and critical notes on the things I hold dear. It's built as a scavenger hunt of sorts, mildly awkward on purpose. Its contents are subject to change. A good place to start is my <a href="/Now">[[Now]]</a> page.</p>
      
      {/* <ul>
      {
        data.allMdx.nodes.map(node => (
          <li key={node.slug}>
            <a href={node.slug}>{node.frontmatter.title}</a>
          </li>
        ))
      }
      </ul> */}
    </Layout>
  )
}


export const indexPage = graphql`
  query blogIndex {
    allMdx(
      sort: {fields: frontmatter___title}
      filter: {fileAbsolutePath: {regex: "/_writing/"}}
    ) {
      nodes { 
        body
        id
        frontmatter {
          title 
        }
        slug  
      }
    }
  }
`

export default IndexPage
