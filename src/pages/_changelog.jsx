import * as React from "react" 
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { FaClock, FaHandshake, FaPencilAlt } from "react-icons/fa"
import { BiCoffeeTogo, BiNews } from "react-icons/bi"
import { BsGearWideConnected } from "react-icons/bs";


// markup
export default function ChangelogPage({data}) {

  return (
    <Layout>
      <title>Home Page</title>
      
      
      
      <h2>Changelog</h2>

      <ul class="list-unstyled changelog mt-5">
      {
        data.allMdx.nodes.map(node => (
          <li key={node.slug}>
          <div className="row">

          <div className="date">{node.frontmatter.date}</div> 
                  <div className="col-1">
                    <div className="timeline">
                      <FaClock />  
                      <div className="line"></div>
                    </div>
                  </div>
                  <div className="col-11">
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
                        default: return ("Update")  
                      } 
                    })()} 
                    
                    <span className="what">{node.frontmatter.what}</span>

                    </span> 
                    <div className="mt-3 mb-5">
                    <MDXProvider>
                      <MDXRenderer>{node.body}</MDXRenderer>
                    </MDXProvider>
                    </div>
                  </div>   
          </div>  
          </li>
        ))
      }
      </ul>
  
  
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
      }
      body 
    }
  }
}
` 
