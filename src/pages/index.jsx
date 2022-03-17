import * as React from "react" 
import { graphql } from "gatsby"
import Layout from "../components/layout"  

  

// markup
const IndexPage = ({data}) => { 
  return (
    <Layout>  

      <header>
        <ul class="list-inline">
          <li class="list-inline-item"><h1>Zinzy Nev Geene</h1></li>
          <li class="list-inline-item">Amsterdam</li>
        </ul>

        <h2>I manage product <span className="br"></span> and design.</h2>
      </header>

      <section>
        <p>I have <mark>15 years of experience</mark> shipping products and leading design and product teams. My work has helped me hone my craft in design, research, strategy, and leadership. These days, I organize skill sets and relationships to demonstrate how <mark>caring for users is good for business</mark>.</p>
      </section>
      
      <section>
        <h3>How I work</h3>
        <div className="mt-5">
          <div className="d-md-flex align-items-center">
            <div>
            <div className="tile tile-moss mb-4 mb-md-0">🧑‍🏫</div>
            </div>
            <div className="flex-grow-1 align-items-center">
              <div>
              <h4 className="mb-1">Serving the working crowd</h4>
              <p className="m-0 p-0">I build tools that help people solve problems at work. I appreciate the complexity, challenges, and longevity of enterprise product development.</p>
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
              <h4 className="mb-1">Strategy and leadership</h4>
              <p className="m-0 p-0">My teams gain deep and sustainable insight into users. Meanwhile, I turn big dreams into snackable chunks, and mentor along the way.</p>
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
              <h4 className="mb-1">Ops and facilitation</h4>
              <p className="m-0 p-0">I give designers and researchers tools to collaborate well across the company, so that they can focus on what they do best: make an impact.</p>
              </div>
            </div> 
          </div>
       </div>
      </section>

      <section>
        <h3>My experience</h3>
        <p>At present, I serve as Design & Product Manager of <a href="https://www.leeruniek.nl" target="_blank" rel="noopener noreferrer">Leeruniek</a>, a scale-up in education technology. We cultivate better collaborative and analytical skills in teams of primary school teachers. <mark>Improving the lives of crucial workers</mark> by giving them the right tools and conversations is indeed very fulfilling.</p>
        <p>Previously, I spent five years at <a href="https://www.airtrade.com" target="_blank" rel="noopener noreferrer">Airtrade</a>, where I led research and design on a dozen enterprise and consumer platforms for KLM and other leaders in the travel industry. Before that, I ran Studio Zinzy for eight years, providing design and development services in health care, journalism, fine arts, academia, and other spaces.</p>
      </section>

      <section>
        <h3>Life is good</h3>
      <p>You may find me on the Amsterdam East side tending to the home and garden I share with <a href="https://twitter.com/anjawaleson" target="_blank" rel="noopener noreferrer">Anja</a>. I enjoy making music, learning the love language of cooking, and exploring the worlds of theology, sociolinguistics, and technology ethics. I'm a fan of Barbra Streisand, monster movies, and terrible television. Life is truly good.</p>
      </section>

      <section>
        <h3>Availability</h3>
      <p>Aside from my work at Leeruniek, I sometimes engage in consulting on matters of product and design. At present, I do not have availability for this. Feel free to reach out to me, though, about your project or any other topic. I enjoy meeting new people and their stories. You can find me on <a href="mailto:zinzy@pm.me">email</a> and <a href="https://www.linkedin.com/in/zinzy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </section>


 

      <footer className="small text-muted">
        <p>This space is built using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a>, hands, and infinite appreciation for simplicity, the <a href="https://indieweb.org/" target="_blank" rel="noopener noreferrer">IndieWeb</a>, as well as the quieter days of personal sites. It was last updated on {data.site.buildTime}.</p>
      </footer>

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
