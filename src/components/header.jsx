import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"  
import siteConfig from "../../gatsby-config"

export default function Header({title,data}) { 

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
        <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1633782178/me/memoji_u5mrct.png" className="memoji" alt="" />
        <h1><Link to="/">Zinzy Nev Geene</Link></h1>
        <p className="m-0">Design manager, linguist, queer facilitator</p>

      {data.site.buildTime}
      </header>
 
    </>
  )
}  