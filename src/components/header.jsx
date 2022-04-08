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
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-md-4">
            <h1 className="p-name">
              <a rel="me" href="/" class="u-url">Zinzy Waleson</a>
            </h1>
            </div>
            <div className="col-6 col-md-8">
            <ul className=""> 
              {/* <li><a href="/notes">About</a></li>  */}
              <li><a href="/notes">Notes</a></li> 
              <li><a href="/library">Library</a></li>
            </ul>

            </div>
          </div>
        </div>
      </header>


      {/* <header id="header">
        <div className="row">
          <div className="col-6 col-lg-4">
            <h1><Link to="/">Zinzy Nev Geene</Link></h1>
          </div>
          <div className="col-6 col-lg-8">
            <nav>
              <ul className="list-inline">
                <li className="list-inline-item"><Link to="/profile">Profile</Link></li>
                <li className="list-inline-item"><Link to="/notes">Digital notes</Link></li> 
                <li className="list-inline-item"><Link to="/library">Library</Link></li>
                <li className="list-inline-item"><Link to="/changelog">Changelog</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header> */}







    </>
  )
} 