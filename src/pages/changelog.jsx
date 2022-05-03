import * as React from "react" 
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import Bookmark from "../components/icons/Bookmark"
import Like from "../components/icons/Like"
import Note from "../components/icons/Note"
import Reply from "../components/icons/Reply"
import RSVP from "../components/icons/RSVP"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { FaClock, FaHandshake, FaPencilAlt, FaComment, FaHeart, FaMicrophoneAlt } from "react-icons/fa"
import { BiCalendarEvent, BiCoffeeTogo, BiNews, BiCodeAlt } from "react-icons/bi"
import { BsArrowLeft } from "react-icons/bs";
import { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

// markup
export default function ChangelogPage({data}) { 

  return (
    <Layout>

      <div className="row">
        <div className="col-md-2 mb-5">
          <Link to="/"><BsArrowLeft/></Link>
        </div>
        <div className="col-md-9 offset-md-1">

          <h2>Changelog</h2>

        <ul className="changelog list-unstyled mt-10">
          {
            data.allMdx.nodes.map(node => (
              <li>
                <article key={node.slug} className="h-entry">

                <div className="row h-entry">
 
                  <div className="col-2 col-md-1">
                    <div className="timeline">
                      {node.frontmatter.rsvp ? <RSVP/> : '' }
                      {node.frontmatter.bookmarkOf ? <Bookmark/> : '' }
                      {node.frontmatter.likeOf ? <Like/> : '' }
                      {node.frontmatter.replyTo && node.frontmatter.rsvp == null ? <Reply/> : '' }
                      {node.frontmatter.replyTo == null && node.frontmatter.bookmarkOf == null && node.frontmatter.likeOf == null && node.frontmatter.rsvp == null ? <Note/> : '' }
                      <div className="line"></div>
                    </div>
                  </div>
                  <div className="col-10 col-md-11 pb-4"> 
                    <div>{node.frontmatter.rsvp ? <span>RSVP'd <span className="p-rsvp">{node.frontmatter.rsvp}</span> to <a href={node.frontmatter.replyTo} target="_blank" className="u-in-reply-to">{node.frontmatter.title}</a></span> : ''}</div>
                    <div>{node.frontmatter.bookmarkOf ? <span>Bookmarked <a href={node.frontmatter.bookmarkOf} target="_blank" className="u-bookmark-of">{node.frontmatter.title}</a></span> : ''}</div>
                    <div>{node.frontmatter.likeOf ? <span>Liked <a href={node.frontmatter.likeOf} target="_blank" className="u-like-of">{node.frontmatter.title}</a></span> : ''}</div>
                    <div>{node.frontmatter.replyTo && node.frontmatter.rsvp == null ? <span>Replied to <a href={node.frontmatter.replyTo} target="_blank" className="u-in-reply-to">{node.frontmatter.title}</a></span> : ''}</div>

                  <div className="dt-published small text-muted">{node.frontmatter.date}</div> 
 
                    <div className="mt-3"> 
                      <div className="p-content">
                        <MDXProvider>
                          <MDXRenderer>
                              {node.body}
                          </MDXRenderer>
                        </MDXProvider>
                      </div>

                    </div>
                  </div>   
                  </div>    
              </article>
              </li>
            ))
          }
          </ul>
        </div>
      </div>


    
    </Layout>
  )
}



export const query = graphql`
query ChangelogQuery {
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
