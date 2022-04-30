import React from "react"
import { Link } from "gatsby"

export default function Footer({ title }) { 

  return (
    <> 

<footer id="footer">

  <div className="h-card mb-5">
    <h2 className="h6"><Link to="/">Hoi, I'm <span className="p-name">Zinzy Waleson</span></Link></h2>
    <p>I'm a researcher, designer, linguist, and facilitator living and working in <span className="p-locality">Amsterdam</span>, where I build digital products and resonant queer spaces. <a rel="me" href="https://www.zinzy.website" class="u-url">Zinzy.website</a> is a digital garden: a growing collection of loosely-related notes on a wide variety of subjects, maintained in public. Send me an <a href="mailto:zinzy@pm.me">email</a>.</p>
  </div>

    {/* <div className="my-5">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
      <button class="btn" type="button" id="button-addon2">→</button>
    </div>
    </div> */}

    <div className="row"> 
      <div className="col-12 col-md-6 mb-3">
        <h3 className="h6 mb-0"><Link to="/now">1 — Now</Link></h3>
        <p className="">An infrequently updated overview of what I'm focused on right now</p>
      </div> 
      <div className="col-12 col-md-6 mb-3">
        <h3 className="h6 mb-0"><Link to="/notes">2 — Notes</Link></h3>
        <p className="">A collection of loosely-related undated posts on a wide variety of topics</p>
      </div> 
      <div className="col-12 col-md-6 mb-3">
        <h3 className="h6 mb-0"><Link to="/library">3 — Library</Link></h3>
        <p className="">What I'm reading, watching, and listening to, and what's still on my list</p>
      </div> 
      <div className="col-12 col-md-6">
        <h3 className="h6 mb-0"><Link to="/changelog">4 — Changelog</Link></h3>
        <p className="">Highlights, accomplishments, learnings, and personal milestones</p>
      </div>   
      <div className="col-12 col-md-6">
        <h3 className="h6 mb-0"><Link to="/mentoring">5 — Mentoring</Link></h3>
        <p className="">I offer remote mentoring to designers and product managers</p>
      </div>   
      <div className="col-12 col-md-6">
        <h3 className="h6 mb-0"><Link to="/playlist">6 — Playlist</Link></h3>
        <p className="">What I'm listening to now, as well as notes on my library management</p>
      </div>   
    </div>
</footer>  
 
    </>
  )
} 