import React from "react"
import { Link } from "gatsby"

export default function Footer({ title }) { 

  return (
    <> 

<footer id="footer"> 


<div className="row small text-muted"> 
    <div className="col-md-6">
    <p>&copy; 2004-2022 <a href="mailto:zinzy@pm.me" rel="me">Zinzy Waleson</a></p>
    <ul className="list-inline">
      <li className="list-inline-item"><Link to="#top">Back to top</Link></li>
      <li className="list-inline-item"><a href="mailto:zinzy@pm.me">Email</a></li>
      <li className="list-inline-item"><a href="https://www.linkedin.com/in/zinzy/" target="_blank" rel="noopener noreferrer me">LinkedIn</a></li>
      <li className="list-inline-item"><a href="https://github.com/zinzy" target="_blank" rel="noopener noreferrer me">Github</a></li> 
    </ul></div>
    <div className="col-md-6 text-md-end">

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


   
</footer>  
 
    </>
  )
} 