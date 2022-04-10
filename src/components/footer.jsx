import React from "react"

export default function Footer({ title }) { 

  return (
    <> 

<div className="bottom">
        
<footer id="footer">

<div className="row">
  <div className="col-md-8 offset-md-2 col-xl-6 offset-xl-3">
  <div className="h-card">

    <div className="d-lg-flex align-items-center">
      <div className="flex-shrink-1">
        <div className="portrait mb-5 mb-md-0">
          <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1635344340/me/zinzy-1_zarupx.jpg" alt="" className="u-photo" />
        </div> 
      </div>
      <div className="bio">
        <p className="p-note m-0 p-0"><span className="p-name">Zinzy Waleson</span> is a designer, facilitator, and linguist working and living in <span className="p-locality">Amsterdam</span>. <a rel="me" href="https://www.zinzy.website" class="u-url">zinzy.website</a> is her personal site, a place for her to link and think.</p>
      </div>
    </div>
        
      </div>
  </div> 
      </div> 
      </footer> 
   
        <div className="container-fluid bottom-nav">
            <div className="row">
              <div className="col-6">
                <div className="indiewebring">
                  <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/previous">←</a>
                  <span className="mx-3">IndieWeb</span>
                  <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/next">→</a>
                </div>
              </div>
              <div className="col-6">
                <ul className=""> 
                  {/* <li><a href="/changelog">Changelog</a></li>  */}
                  <li><a href="/Now">Now</a></li> 
                  <li><a href="/Colophon">Colophon</a></li>
                </ul>
  
              </div>
            </div>
          </div>
        </div>

 
    </>
  )
} 