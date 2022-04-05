import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layout/layout'
import NoteList from '../components/note-list'
import Pager from '../components/pager'
import Search from '../components/search'

export default function Sitemap({ pageContext, data }) {
  return (
    <Layout>
      <div className="column is-half">
        <div className="mb-5">
        <h2>Sitemap</h2>

<p>This page contains an overview of all the things published on this website.</p>
        </div>



        {/* <Search size="small" showExcerpt={false} />       */}



        <NoteList notes={data.notes.edges} />

        <Pager context={pageContext} />

        {/* <Link to="/note-map">Map of All Notes</Link> */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    notes: allMdx(
      skip: $skip
      limit: $limit
      filter: { fields: { visibility: { eq: "public" } } }
      sort: {fields: fields___date, order: DESC}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            title
            date
            excerpt
          }
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
