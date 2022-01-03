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
              <li>Queer Catholic facilitator</li>
              <li>Last updated on {data.site.buildTime}</li>
            </ul>
      </header> 

      <section>
        <h2>Welcome</h2>
        <p>I'm a designer with 15 years of experience shipping products and leading design as well as product teams. I am specialized in making tools for people at work. My work is focused on organizing skill sets and relationships to demonstrate how caring for users is good for business.</p>
        <p>At present, I serve as Design & Product Manager of <a href="https://www.leeruniek.nl" target="_blank" rel="noopener noreferrer">Leeruniek</a>, a scale-up in education technology. Previously, I spent five years in travel technology at <a href="https://www.airtrade.com" target="_blank" rel="noopener noreferrer">Airtrade</a>, where I led research and design on enterprise and consumer platforms. Before that, I ran Studio Zinzy for eight years, offering design and development across academia, journalism, health care, and other industries.</p>
        <p>Unprofessionally, I create resonant queer spaces. I'm on the leadership team of <a href="https://www.vineandfig.co" target="_blank" rel="noopener noreferrer">Vine & Fig</a>, an international organization for LGBTQIA+ Catholics. Every last Sunday of the month when Covid doesn't restrict intimate gatherings, I host <a href="https://www.queersalon.us" target="_blank" rel="noopener noreferrer">Queer Salon</a> in Amsterdam. I take pleasure in cultivating environments that are intersectional, curious, and kind.</p>
        <p>You may find me on the Amsterdam East side tending to the home and garden I share with <a href="https://twitter.com/anjawaleson" target="_blank" rel="noopener noreferrer">Anja</a>. I enjoy making music, learning the love language of cooking, and exploring the worlds of theology, sociolinguistics, and psychology. I'm a fan of Barbra Streisand, monster movies, and audio books.</p>
        <p>Life is truly good.</p>
      </section>

      <section className="border-bottom small text-muted">
        <ul className="list-inline">
          <li className="list-inline-item">Available on:</li>
          <li className="list-inline-item"><a href="mailto:zinzy@pm.me" rel="me">Email</a></li>
          <li className="list-inline-item"><a href="https://www.linkedin.com/in/zinzy/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </section> 

      <section>
        <h2>My work</h2>
        <div className="mt-5 ">
          <div className="d-md-flex align-items-center">
            <div>
            <div className="tile tile-yellow mb-4 mb-md-0">🧑‍🏫</div>
            </div>
            <div className="flex-grow-1 align-items-center">
              <div>
              <h3 className="h6 mb-1">Rooting for teachers</h3>
              <p className="m-0 p-0">I build tools that help people solve problems at work. At Leeruniek, we cultivate collaborative skills in learning analytics in Dutch primary schools so that pupils can thrive.</p>
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
              <p className="m-0 p-0">My team works to gain a deep understanding of users, and aligns with business and technology to define challenges. I turn big dreams into snackable chunks, and mentor along the way.</p>
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
        <h2>My volunteering</h2>
        <div className="mt-5 ">
          <div className="d-md-flex align-items-center">
            <div>
            <div className="tile tile-green mb-4 mb-md-0">🪴</div>
            </div>
            <div className="flex-grow-1 align-items-center">
              <div>
              <h3 className="h6 mb-1">Cultivating communities</h3>
              <p className="m-0 p-0">I bring people together on the Internet and in Amsterdam to create intersectional communities that help people connect, recharge, and learn from one another.</p>
              </div>
            </div> 
          </div>
       </div>
        <div className="mt-5 ">
          <div className="d-md-flex align-items-center">
            <div>
            <div className="tile tile-brown mb-4 mb-md-0">🍩</div>
            </div>
            <div className="flex-grow-1 align-items-center">
              <div>
              <h3 className="h6 mb-1">Facilitating gatherings</h3>
              <p className="m-0 p-0">I host Reading Clubs, prayer sessions, panel discussions, holiday marathons, and conversations that thrive on lived experiences, vulnerability, and generous assumptions.</p>
              </div>
            </div> 
          </div>
       </div>
        <div className="mt-5 ">
          <div className="d-md-flex align-items-center">
            <div>
            <div className="tile tile-yellow mb-4 mb-md-0">📣</div>
            </div>
            <div className="flex-grow-1 align-items-center">
              <div>
              <h3 className="h6 mb-1">Writing and speaking</h3>
              <p className="m-0 p-0">I write Scripture reflections, poetry, and essays, produce podcasts series, and speak about what it means to be a queer Afropean Catholic embracing the uncomfortable.</p>
              </div>
            </div> 
          </div>
       </div>
      </section>  

      <section>
        <h2>Availability</h2>
        <p>At the time of writing, I am not available for design or research efforts. I do, however, have  limited availability to take on projects that require design, research or product consulting. Shoot me an <a href="mailto:zinzy@pm.me">email</a> to tell me about your project.</p>
      </section>

      <footer className="small text-muted">
        <p>This one-pager is built using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a>, hands, and infinite appreciation for simplicity, the <a href="https://indieweb.org/" target="_blank" rel="noopener noreferrer">IndieWeb</a>, as well as the quieter days of personal sites.</p>
      </footer>


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
