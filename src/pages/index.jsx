import * as React from "react" 
import { graphql } from 'gatsby'
import Layout from "../components/layout"
  

// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>Digital home of Zinzy Nev Geene</title>

      <section>
        <p>Hello Internet</p>
        <div className="mt-5">
          <ul className="list-unstyled">
            <li><a href="mailto:zinzy@pm.me">Zinzy Nev Geene</a></li>
            <li><a href="https://www.leeruniek.nl" target="_blank" rel="noopener noreferrer">User Experience Manager</a></li>
            <li><a href="https://www.vineandfig.co" target="_blank" rel="noopener noreferrer">Queer facilitator</a></li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
