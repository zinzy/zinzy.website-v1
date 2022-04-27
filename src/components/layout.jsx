import React from "react" 
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return ( 
    <div className="">   
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">   
            <main className="">
              <Header/>  
              <div className="">{children}</div>  
              <Footer/>    
            </main>
          </div>
        </div>
      </div> 



<div className="footer-bottom">  
    <div className="container-fluid bottom-nav">
        <div className="row">
          <div className="col-4 col-md-4">
            <div className="indiewebring">
              <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/previous">←</a>
              <span className="mx-1 mx-md-3">
                <span className="d-none d-md-inline">IndieWeb</span>
                <span className=""> 🕸  💍</span>
              </span>
              <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/next">→</a>
            </div>
          </div>
          <div className="col-8 col-md-8">
            <ul className=""> 
              <li><Link to="/">Home</Link></li>
              <li><Link to="/colophon">Colophon</Link></li>
            </ul>
          </div>
        </div>
    </div>
  </div>
 
      <script async="" src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  )
}