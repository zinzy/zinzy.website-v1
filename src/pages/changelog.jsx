import * as React from "react" 
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { FaClock, FaHandshake, FaPencilAlt, FaComment } from "react-icons/fa"
import { BiCoffeeTogo, BiNews } from "react-icons/bi"
import { BsGearWideConnected,BsBookmarkFill } from "react-icons/bs";

// markup
export default function ChangelogPage({data}) {

  

  return (
    <Layout>
      
      <div className="row">
        <div className="col-md-8 offset-md-2 col-xl-6 offset-xl-3">


        <h2>Changelog</h2>

          <div className="mb-5">
 
          </div>


          <ul class="list-unstyled changelog mt-5">
          {
            data.allMdx.nodes.map(node => (
              <li key={node.slug} className="h-entry">
              <div className="row">
 
                <div className="col-1">
                  <div className="timeline">
                    <FaClock />  
                    <div className="line"></div>
                  </div>
                </div>
                <div className="col-11">
                <div className="date dt-published mb-3 mb-md-0">{node.frontmatter.date}</div> 
                  <span className="badge d-flex align-items-center">
                  <span className="icon">
                  {(() => { 
                    switch (node.frontmatter.category) { 
                      case 'Development': return ( <FaClock /> )  
                      case 'Joined': return ( <FaHandshake />  ) 
                      case 'Left': return ( <FaHandshake />  ) 
                      case 'Mentor': return ( <BiCoffeeTogo />  ) 
                      case 'Technical': return ( <BsGearWideConnected />  ) 
                      case 'Writer': return ( <FaPencilAlt />  ) 
                      case 'Bookmark': return ( <BsBookmarkFill />  ) 
                      case 'Reply': return ( <FaComment />  ) 
                      default: return ( <BiNews />  )  
                    } 
                  })()} 
                  </span>

                  {(() => { 
                    switch (node.frontmatter.category) { 
                      case 'Development': return ("Updated website")  
                      case 'Joined': return ("Joined" ) 
                      case 'Left': return ("Left") 
                      case 'Mentor': return ("Mentored") 
                      case 'Technical': return ("Updated website") 
                      case 'Writer': return ("Published") 
                      case 'Bookmark': return ("Bookmarked") 
                      case 'Reply': return ("Replied") 
                      default: return ("Update")  
                    } 
                  })()} 
                  
                  <span className="what">{node.frontmatter.what}</span>

                  </span> 
                  <div className="mt-3 mb-5"> 

                    {(() => { 
                      switch (node.frontmatter.category) { 
                        case 'Bookmark': return ( 
                          <Link className="u-bookmark-of" to={node.frontmatter.bookmarkOf}>
                            {node.frontmatter.title}
                          </Link>
                        ) 
                        case 'Reply': return ( 
                          <Link className="u-in-reply-to" to={node.frontmatter.replyTo}>
                            {node.frontmatter.title}
                          </Link>
                          ) 
                        default: return ( null )  
                      } 
                    })()} 

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
        date(formatString: "MMM D, YYYY")
        what
        replyTo
        bookmarkOf
      }
      body 
    }
  }
}
` 
