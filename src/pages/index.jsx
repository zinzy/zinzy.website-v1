import * as React from "react" 
import { graphql } from "gatsby"
import Layout from "../components/layout"  

  

// markup
const IndexPage = ({data}) => { 
  return (
    <Layout>  
      <header id="header">
            <h1 className="mb-1 p-0">Zinzy Nev Geene</h1> 
            <ul className="list-unstyled">
              <li>Design & Product Manager</li>
              <li>Queer facilitator</li>
            </ul>
      </header> 

      <section>
        <h2>About</h2>
        <p>I'm a designer with 14 years of experience shipping products and projects in a variety of industries. At the moment I manage product and design at education technology startup <a href="https://www.leeruniek.nl" target="_blank" rel="noopener noreferrer">Leeruniek</a>. I couldn't wish for better colleagues if I wanted to.</p>
        <p>Outside of work I create resonant queer spaces. I'm on the leadership team of <a href="https://www.vineandfig.co" target="_blank" rel="noopener noreferrer">Vine & Fig</a>, an international organization for queer Catholics. Every last Sunday of the month I host <a href="https://www.queersalon.us" target="_blank" rel="noopener noreferrer">Queer Salon</a> in Amsterdam.</p>
        {/* <p>It makes me proud to contribute to a global queer community that is inclusive, intersectional, and not scared of vulnerability.</p> */}
        <p>You may find me on the Amsterdam East side tending to the home and garden I share with <a href="https://twitter.com/anjawaleson" target="_blank" rel="noopener noreferrer">Anja</a>. I enjoy making music, learning the love language of cooking, and exploring the worlds of theology, sociolinguistics, and psychology. I'm a fan of Barbra Streisand, garbage television, and mediocre cinema.</p>
        <p>Life is quite good.</p>
      </section>

      <section className="border-bottom small text-muted">
        <ul className="list-inline">
          <li className="list-inline-item">Available on:</li>
          <li className="list-inline-item"><a href="mailto:zinzy@pm.me">Email</a></li>
          <li className="list-inline-item"><a href="https://www.linkedin.com/in/zinzy/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </section>

      <section>
        <h2>My work</h2>
        <div className="mt-5 ">
          <div className="d-md-flex align-items-center">
            <div>
            <div className="tile tile-green mb-4 mb-md-0">🧑‍🏫</div>
            </div>
            <div className="flex-grow-1 align-items-center">
              <div>
              <h3 className="h6 mb-1">Serving teachers</h3>
              <p className="m-0 p-0">I build tools that help people solve problems at work. At Leeruniek, we cultivate collaborative skills in learning analytics in Dutch primary schools.</p>
              </div>
            </div> 
          </div>
       </div>
        <div className="mt-5 ">
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
        <div className="mt-5 ">
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
      </section>


      <section>
        <h2>Now</h2>
        <p>I maintain a short list of things I'm focused on right now. If there's any topic that interests you, feel free to reach out and tell me about it.</p>
        <ul>
          <li>Transitioning to a pescetarian diet</li>
          <li>Reading the entire Bible front to back</li>
          <li>Taking delight in the leaves turning red</li>
          <li>Adjusting to no longer working from home</li>
        </ul>
      </section>


      <section>
      <p className="text-muted small">Last updated on {data.site.buildTime}</p>
      </section>

{/* 
      <p>Hello, I'm Zinzy, a designer with 13 years of skin in the game. I deploy my multidisciplinary skillset in leadership, design thinking, and operations to help teams do better. I'm specialized in building tools that help people solve problems at work. At the moment I lead product and design at edtech startup <a href="https://www.leeruniek.nl" target="_blank" rel="noopener noreferrer">Leeruniek</a>. Literally couldn't wish for better colleagues.</p>
      <p>Outside of work I build resonant queer spaces. I'm on the leadership team of <a href="https://www.vineandfig.co" target="_blank" rel="noopener noreferrer">Vine & Fig</a>, an international organization for queer Catholics. Every last Sunday of the month I host <a href="https://www.queersalon.us" target="_blank" rel="noopener noreferrer">Queer Salon</a> in Amsterdam.</p>
      <p>You may find me on the Amsterdam East side tending to the home and garden I share with <a href="https://twitter.com/anjawaleson" target="_blank" rel="noopener noreferrer">Anja</a>. I enjoy writing and making music, learning the love language of cooking, and discovering new wonders in the world of theology, sociolinguistics, and intersectionality. Above all, I'm a fan of Barbra Streisand, garbage television, and mediocre cinema.</p>
      <p>If you'd like to reach out to me, you can do so via <a href="mailto:zinzy@pm.me">email</a>.</p>
       <p>This here is my personal site: a collection of soft stances, lived experiences, and critical notes on the things I hold dear. It's built as a scavenger hunt of sorts, mildly awkward on purpose. Its contents are subject to change. A good place to start is my <a href="/Now">[[Now]]</a> page.</p> */}
      
      {/* <ul>
      {
        data.allMdx.nodes.map(node => (
          <li key={node.slug}>
            <a href={node.slug}>{node.frontmatter.title}</a>
          </li>
        ))
      }
      </ul> */}
    </Layout>
  )
}


export const indexPage = graphql`
  query indexPage {
    allMdx(
      sort: {fields: frontmatter___title}
      filter: {fileAbsolutePath: {regex: "/_writing/"}}
    ) {
      nodes { 
        body
        id
        frontmatter {
          title 
        }
        slug  
      }
    } 
    site {
      buildTime(formatString: "MMMM DD, YYYY")
    }
  }
`

export default IndexPage
