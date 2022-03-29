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
          {(siteConfig.siteMetadata.title || "Zinzy Waleson | Design & Product Manager") +
            (title ? ` : ${title}` : "")}
        </title>
      </Helmet> 

      <header id="header">
        <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1633782178/me/memoji_u5mrct.png" className="memoji" alt="" />
        <h1><Link to="/">Zinzy Waleson</Link></h1>

      {data.site.buildTime}
      </header>
 
    </>
  )
}  