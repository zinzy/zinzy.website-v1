import React from "react"
import { Link } from "gatsby"

export default function Footer({ title }) { 

  return (
    <> 

<footer id="footer"> 


<div className="row small text-muted">
  <div className="col-lg-2">
    <p>Okay good talk.</p>
  </div>
  <div className="col-lg-9 offset-lg-1">
    <div className="row">
      <div className="col-lg-6">
        <p>© 2004-2022 <a href="mailto:zinzy@pm.me" rel="me">Zinzy Waleson</a></p>
      </div>
      <div className="col-lg-6 text-lg-end">
        <div className="">
          <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/previous">←</a>
          <span className="mx-1 mx-md-3">
            <span className="d-none d-md-inline">IndieWeb</span>
            <span className=""> 🕸  💍</span>
          </span>
          <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/next">→</a>
        </div>
      </div>
    </div>
  </div>
</div>


   
</footer>  
 
    </>
  )
} 