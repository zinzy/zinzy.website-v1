import React from 'react';
import ChangelogItem from "./ChangelogItem"
import { Link, graphql } from 'gatsby'

export default function Changelog({data}) {
    return (
        <Changelog>
            {data.allMdx.nodes.map((node, i) => (
                <ChangelogItem
                    key={i}
                    slug={node.slug}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                />
            ))}
        </Changelog>
    );
}

export const query = graphql`
query Changelog {
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {fileAbsolutePath: {regex: "/changelog/"}}
  ) {
    nodes {
      frontmatter {
        title
        category
        detailLevel
        date(formatString: "MMM D, YYYY")
        what
        replyTo
        bookmarkOf
        likeOf
      }
      body 
    }
  }
}
` 