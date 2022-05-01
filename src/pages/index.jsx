import * as React from "react" 
import { graphql } from 'gatsby' 
import Layout from "../components/layout"
import Bookmark from "../components/icons/Bookmark"
import Like from "../components/icons/Like"
import Note from "../components/icons/Note"
import Reply from "../components/icons/Reply"
import RSVP from "../components/icons/RSVP"
import { Link } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
  

// markup
const IndexPage = ({data}) => {
  return (
    <Layout>
      <title>Home Page</title>


      <section className="row">
        <div className="col-md-2">
          <h2 className="mb-5">Hoi</h2>
        </div>
        <div className="col-md-9 offset-md-1 h-card">
          <p>I'm <span className="p-name">Zinzy Waleson</span>, a designer and facilitator from <span className="p-locality">Amsterdam</span>. I build digital products and resonant queer spaces. <a rel="me" href="https://www.zinzy.website" class="u-url">Zinzy.website</a> is a digital garden: a growing collection of loosely-related notes on a wide variety of subjects, maintained in public.</p>
        </div>
      </section>

      <section className="row mt-10">
        <div className="col-md-2">
          <h2 className="mb-5">Changelog</h2>
        </div>
        <div className="col-md-9 offset-md-1 h-card">
          <ul className="changelog list-unstyled">
          {
            data.changelog.nodes.map(node => (
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
                  <div className="col-10 col-md-11 pb-4 mt-1"> 
                    <div>{node.frontmatter.rsvp ? <span>RSVP'd {node.frontmatter.rsvp} to <a href={node.frontmatter.replyTo} target="_blank">{node.frontmatter.title}</a></span> : ''}</div>
                    <div>{node.frontmatter.bookmarkOf ? <span>Bookmarked <a href={node.frontmatter.bookmarkOf} target="_blank">{node.frontmatter.title}</a></span> : ''}</div>
                    <div>{node.frontmatter.likeOf ? <span>Liked <a href={node.frontmatter.likeOf} target="_blank">{node.frontmatter.title}</a></span> : ''}</div>
                    <div>{node.frontmatter.replyTo && node.frontmatter.rsvp == null ? <span>Replied to <a href={node.frontmatter.replyTo} target="_blank">{node.frontmatter.title}</a></span> : ''}</div>

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

          <Link to="/changelog" className="btn">See changelog</Link>
        </div>
      </section>
 


      <section className="row mt-10">
        <div className="col-md-2">
          <h2 className="mb-5">Notes</h2>
        </div>
        <div className="col-md-9 offset-md-1 h-card">
          <p className="d-inline">I keep notes so that I can link and think. They contain soft stances, lived experiences, and critical notes on the things I hold dear. Its contents are subject to change. Try </p>

          <ul className="front_nodes">
          {
            data.notes.nodes.map(node => (
              <li key={node.slug}><Link to={`/${node.slug}`}>{node.frontmatter.title}</Link></li>
            ))
          }
          </ul>

        <div className="mt-5"><Link to="/notes" className="btn">See notes</Link></div>
        </div>
      </section>


      <section className="row mt-10">
        <div className="col-md-2">
          <h2 className="mb-5">Library</h2>
        </div>
        <div className="col-md-9 offset-md-1 h-card">
          <p className="d-inline">I keep a list of things I listen to, watch, or read, and sometimes share some thoughts on how I interpreted or appreciate a story. Try </p>

          <ul className="front_nodes">
          {
            data.library.nodes.map(node => (
              <li key={node.slug}><Link to={`/${node.slug}`}>{node.frontmatter.title}</Link></li>
            ))
          }
          </ul>

          <div className="mt-5"><Link to="/library" className="btn">Visit my library</Link></div>
        </div>
      </section>


      <section className="row mt-10">
        <div className="col-md-2">
          <h2>Information</h2>
        </div>
        <div className="col-md-9 offset-md-1 h-card">
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled mb-0"> 
                    <li><Link to="/now">Now</Link></li>
                    <li><Link to="/mentoring">Mentoring</Link></li>
                    <li><Link to="/how-i-work">How I work</Link></li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li><Link to="/colophon">Colophon</Link></li>
                    <li><Link to="/colophon">Changelog</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/playlist">Playlist</Link></li>
                  </ul>
                </div>
              </div> 
        </div>
      </section>
 
    </Layout>
  )
}

export const query = graphql`
query FrontPage {
  notes:allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {fileAbsolutePath: {regex: "/notes/"}}
    limit: 3
  ) {
    nodes { 
      body
      slug
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title 
        category
        subcategory  
        listingOnly
        slug
      }
      parent {
        ... on File {
          changeTime(fromNow: true)
        }
      }
    }
  }
  changelog:allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {fileAbsolutePath: {regex: "/changelog/"}} 
    limit: 3
  ) {
    nodes { 
      body
      slug
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title 
        category
        subcategory  
        listingOnly
        slug
        what
        rsvp
        bookmarkOf
        likeOf
        replyTo
      }
      parent {
        ... on File {
          changeTime(fromNow: true)
        }
      }
    }
  }
  library:allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {fileAbsolutePath: {regex: "/the-library/"}} 
    limit: 3
  ) {
    nodes { 
      body
      slug
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title 
        category
        subcategory  
        listingOnly
        slug
        what
        rsvp
        bookmarkOf
        likeOf
        replyTo
      }
      parent {
        ... on File {
          changeTime(fromNow: true)
        }
      }
    }
  }
}
`

export default IndexPage