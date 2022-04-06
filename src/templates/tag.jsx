import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layout/layout'
import NoteList from '../components/note-list'
import Pager from '../components/pager'

export default function Tag({ pageContext, data }) {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const heading = `${totalCount} #${tag} note${
    totalCount === 1 ? '' : 's'
  }`

  return (
    <Layout title={`Notes tagged with "${tag}"`} type="tag">
      <div className="column is-half">
        <h1>{heading}</h1>

        <NoteList notes={edges} />

        <Pager context={pageContext} />

        <p className="mt-5">
          <Link to="/tags" className="btn">See All tags</Link>
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($tag: String, $skip: Int!, $limit: Int!) {
    allMdx(
      skip: $skip
      limit: $limit
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fields: { visibility: { eq: "public" } }
      }
      sort: {fields: fields___date, order: DESC}
    ) {
      totalCount
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
            startdate
          }
        }
      }
    }
  }
`
