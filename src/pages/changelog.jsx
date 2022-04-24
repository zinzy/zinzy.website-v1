import * as React from "react" 
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { FaClock, FaHandshake, FaPencilAlt, FaComment, FaHeart, FaMicrophoneAlt } from "react-icons/fa"
import { BiCoffeeTogo, BiNews, BiCodeAlt } from "react-icons/bi"
import { BsGearWideConnected,BsBookmarkFill } from "react-icons/bs";
import { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

// markup
export default function ChangelogPage({data}) {

  const [ value, setValue ] = useState(3);  

  return (
    <Layout>
      
      <div className="">
        <div className="">


        <h2>Changelog</h2> 

          <div className="my-5">
            <RangeSlider
              value={value}
              tooltip="off"
              min="1"
              max="5"
              step="1"
              variant='secondary'
              onChange={changeEvent => setValue(changeEvent.target.value)}
            />
            <div className="row small text-muted">
              <div className="col-6">Big picture</div>
              <div className="col-6 text-end">TMI</div>
            </div>
          </div>

          <ul class="list-unstyled changelog mt-10">
          {
            data.allMdx.nodes.map(node => (
              <li key={node.slug} className={node.frontmatter.detailLevel <= value ? `d-block`: `d-none`}>

              <div className="row h-entry">
 
                <div className="col-1">
                  <div className="timeline mt-1">
                    <FaClock />  
                    <div className="line"></div>
                  </div>
                </div>
                <div className="col-11">
                <div className="date dt-published mb-3 mb-lg-0 mt-1">{node.frontmatter.date}</div> 
                  <span className="badge">
                  <span>
                  {(() => { 
                    switch (node.frontmatter.category) { 
                      case 'Technical': return ( <span className="icon"><BiCodeAlt /> Updated website</span> )  
                      case 'Bookmark': return ( <span className="icon"><BsBookmarkFill /> Bookmark</span>  ) 
                      case 'Reply': return ( <span className="icon"><FaComment /> Replied to </span>  ) 
                      case 'Like': return ( <span className="icon"><FaHeart /> Like</span>  )  
                      case 'Mentor': return ( <span className="icon"><BiCoffeeTogo /> Mentoring</span>  ) 
                      case 'Writer': return ( <span className="icon"><FaPencilAlt /> Published an essay </span>  ) 
                      case 'Podcast': return ( <span className="icon"><FaMicrophoneAlt /> Spoke on </span>  ) 
                      case 'Joined': return ( <span className="icon"><FaHandshake /> Joined </span>  ) 
                      case 'Left': return ( <span className="icon"><FaHandshake /> Left</span>  ) 
                      default: return ( <span className="icon"><BiNews /> Update</span> )  
                    } 
                  })()} 
                  </span> 
                  
                  <span className="what">{node.frontmatter.what}</span>

                  </span> 
                  <div className="mt-3 mb-5"> 

                    {(() => { 
                      switch (node.frontmatter.category) { 
                        case 'Bookmark': return ( 
                          <Link className="u-bookmark-of h6" to={node.frontmatter.bookmarkOf}>
                            {node.frontmatter.title}
                          </Link>
                        ) 
                        case 'Like': return ( 
                          <Link className="u-like-of h6" to={node.frontmatter.likeOf}>
                            {node.frontmatter.title}
                          </Link>
                        ) 
                        case 'Reply': return ( 
                          <Link className="u-in-reply-to h6" to={node.frontmatter.replyTo}>
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
