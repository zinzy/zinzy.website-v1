import * as React from "react" 
import { graphql } from 'gatsby' 
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
  

// markup
const IndexPage = ({data}) => {
  return (
    <Layout>
      <title>Home Page</title>
 
 
      <section className=""> 

      <div className="row">
          <div className="col-xl-10 offset-xl-1">

            <section>
            <div className="row d-flex align-items-center">
              <div className="col-lg-8">
              <h2 className="font-weight-normal">Hoi, I'm Zinzy Waleson, a designer and facilitator from Amsterdam.</h2>
              <p className="lead mt-4 mb-0">I combine my skills in design, research, strategy, and leadership to build digital products. Currently, I manage product and design at <a href="/leeruniek">Leeruniek</a>, where I work to be a catalyst for better design thinking.</p>
              </div>
              <div className="d-none d-lg-block col-3 offset-1">
                <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1649240297/me/FullSizeRender_copy_y5whli.jpg" alt="" />
              </div>
            </div>
            </section>

            <section className="mt-10">
              <div className="row"> 
                <div className="col-lg-4 mb-5 mb-lg-0"> 
                 <h3 className="h4">About my work</h3>
                 <p>I make digital products that help people solve problems at work. At Leeruniek, we cultivate collaborative skills in learning analytics in Dutch primary schools. I organize relationships and skillsets to demonstrate how caring for users is good for business.</p>
                 <a href="/work" className="btn mt-lg-5">How I work  →</a>
                </div>
                <div className="col-lg-7 offset-lg-1">

                <div className="">
                  <div className="d-md-flex align-items-center">
                    <div>
                    <div className="tile tile-yellow mb-4 mb-md-0">🧑‍🏫</div>
                    </div>
                    <div className="flex-grow-1 align-items-center">
                      <div>
                      <h3 className="h6 mb-1">Enterprise products</h3>
                      <p className="m-0 p-0">Having gained experience with consumer and enterprise products, I now focus on making tools for professionals. I enjoy the complexity and challenges involved in this work.</p>
                      </div>
                    </div> 
                  </div>
              </div>
                <div className="mt-4">
                  <div className="d-md-flex align-items-center">
                    <div>
                    <div className="tile tile-red mb-4 mb-md-0">🎯</div>
                    </div>
                    <div className="flex-grow-1 align-items-center">
                      <div>
                      <h3 className="h6 mb-1">Strategy and management</h3>
                      <p className="m-0 p-0">My team and I work to gain a deep understanding of users, and align with business and technology to define our biggest challenges. I turn big dreams into snackable chunks.</p>
                      </div>
                    </div> 
                  </div>
              </div>
                <div className="mt-4">
                  <div className="d-md-flex align-items-center">
                    <div>
                    <div className="tile tile-blue mb-4 mb-md-0">💈</div>
                    </div>
                    <div className="flex-grow-1 align-items-center">
                      <div>
                      <h3 className="h6 mb-1">DesignOps and facilitation</h3>
                      <p className="m-0 p-0">I give designers and researchers methods and tools to collaborate well across the company, so that they can focus on what they do best: make an impact.</p>
                      </div>
                    </div> 
                  </div>
              </div>
                </div>
              </div> 

        
            </section>
 
           <section className="mt-10">
           <div className="row">
              <div className="col-lg-8">
                <h2>This is my digital garden</h2>
            <p>This is my home on the Internet. In lieu of social media, I use this space to share my thoughts and work in a way that feels less performative. I maintain a growing collection of loose <a href="/notes">notes</a>, some more refined than others. I also have a  <a href="/library">library</a> of things I read, watch, and hear. You can learn more about why and how I make this website. Feel free to visit my <a href="/colophon">colophon</a>.</p>
              </div>
            </div>
           </section>



            {/* {
                  data.allMdx.nodes.map(node => (
                    <div key={node.slug}>
                      <h3><a href={`/${node.slug}`}>{node.frontmatter.title}</a></h3>
                      <div className="text-muted small mb-2">{node.frontmatter.date}</div>
                      <p>{node.frontmatter.excerpt}</p>
                       <a href={`/${node.slug}`} className="btn">Continue reading →</a>
                    </div>
                  ))
                } */}



      </div>
      </div>
      </section> 
 
    </Layout>
  )
}

export const query = graphql`
query FrontPageIndex {
  allMdx(limit: 1, filter: {frontmatter: {title: {eq: "Weeknotes #3"}}}) {
    nodes {
      id
      frontmatter {
        title
        excerpt
        date(fromNow: true)
      }
      slug
      parent {
        ... on File {
          changeTime(fromNow: true)
          modifiedTime
        }
      }
      body
      excerpt
    }
  }
}
`

export default IndexPage