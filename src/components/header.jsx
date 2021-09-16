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
        <div className="row">
          <div className="col-lg-4">
            <h1><Link to="/">Zinzy Nev Geene</Link></h1>
          </div>
          <div className="col-lg-8">
            <nav>
              <ul className="list-inline">
                <li className="list-inline-item"><Link to="/profile">Profile</Link></li>
                <li className="list-inline-item"><Link to="/garden">Digital garden</Link></li> 
                <li className="list-inline-item"><Link to="/library">Library</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>







    </>
  )
} 