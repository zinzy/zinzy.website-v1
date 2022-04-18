import React from "react"

export default function Footer({ title }) { 

  return (
    <> 

<footer id="footer">
  <div className="footer-main">
    <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1 col-xl-6 offset-xl-3">
        <div className="h-card">
          <div className="d-md-flex align-items-center">
            <div className="flex-shrink-1">
              <div className="portrait mb-5 mb-md-0">
                <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1635344340/me/zinzy-1_zarupx.jpg" alt="" className="u-photo" />
              </div> 
            </div>
            <div className="bio">
              <p className="p-note m-0 p-0"><span className="p-name">Zinzy Waleson</span> is a designer, facilitator, and linguist working and living in <span className="p-locality">Amsterdam</span>. <a rel="me" href="https://www.zinzy.website" class="u-url">zinzy.website</a> is her personal site, a place for her to link and think. You are invited to send her an <a href="mailto:zinzy@pm.me">email</a> or connect with her on <a href="https://www.linkedin.com/in/zinzy" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
            </div>
          </div>
          
        </div>
      </div> 
    </div> 
    </div>
  </div>
  <div className="footer-bottom">  
    <div className="container-fluid bottom-nav">
        <div className="row">
          <div className="col-4">
            <div className="indiewebring">
              <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/previous">←</a>
              <span className="mx-3">
                <span className="d-none d-md-inline">IndieWeb</span>
                <span className="d-md-none">🕸️</span>
              </span>
              <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/next">→</a>
            </div>
          </div>
          <div className="col-8">
            <ul className=""> 
              {/* <li><a href="/changelog">Changelog</a></li>  */}
              <li><a href="/playlist">Playlist</a></li> 
              <li><a href="/changelog">Changelog</a></li>
              <li><a href="/colophon">Colophon</a></li>
            </ul>
          </div>
        </div>
    </div>
  </div>
</footer> 
 
    </>
  )
} 