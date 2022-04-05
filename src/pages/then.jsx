import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../layout/layout'
import siteConfig from '../../gatsby-config'
import NoteList from '../components/note-list'
import Search from '../components/search'
// import '../styles/index.css'
import { DefaultMenuStructure, MenuRoot } from '../utils/menu-structure'

export default function Then() {
  const data = useStaticQuery(graphql`
  query NowThenQuery {
    notes: allMdx(
      filter: {fields: {}, frontmatter: {tags: {eq: "now"}}}
      limit: 5
      sort: {fields: fields___date, order: DESC}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            title
            date
          }
          frontmatter {
            tags
          }
        }
      }
    }
  }
  
  `)

  let tagList = DefaultMenuStructure('tag-list')
  tagList.push({ // Add a link to a page that shows all tags.
    type:'page',
    item:'tags',
    title: '...',
    liClassName: 'pill'
  })

  return ( 

    <Layout title="Home" type="home">

      <h1>Then</h1>
        <p>This is an archive of all my <a href="https://nownownow.com/p/Tptv" target="_blank" rel="noopener noreferrer">Now</a> page. Now pages, once invented by the great <a href="https://sive.rs/nowff" target="_blank" rel="noopener noreferrer">Derek Sivers</a>, offer a glimpse into whatever a person is focused on at any given point in time. It's right in the middle between well-constructed long read blog posts and Twitter rants.</p>

        <div className="mt-5">
          <NoteList notes={data.notes.edges} />
        </div>
        
    </Layout>
  )
}
