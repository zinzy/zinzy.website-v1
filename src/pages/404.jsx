import * as React from "react" 
import { graphql } from 'gatsby'
import Layout from "../components/layout"
  

// markup
const ErrorPage = ({data}) => {

  return (
    <Layout>
      <section>
        <h2>You've lost your way</h2> 
        <p>Whatever you were looking for is not or no longer here. Use the menu below to find your way to something entertaining. Off you go!</p>
        <a href="/" className="btn">Go back home</a>
      </section>
    </Layout>
  )
}

export default ErrorPage
