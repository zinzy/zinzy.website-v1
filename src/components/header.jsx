import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"  
import siteConfig from "../../gatsby-config"

export default function Header({ title }) { 

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {(siteConfig.siteMetadata.title || "Zinzy Nev Geene") +
            (title ? ` : ${title}` : "")}
        </title>
      </Helmet> 

      <header id="header">
        <h1><Link to="/">Zinzy Nev Geene</Link></h1>
        <p className="m-0">Design manager, linguist, queer facilitator</p>
      </header>







    </>
  )
} 