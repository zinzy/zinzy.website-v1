import React from "react" 
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return ( 
    <div className="">   
      <div className="container">
        <div className="row">
          <div className="col-12">   
            <main className="">
              <Header/>  
              <div className="">{children}</div> 
              <Footer/>    
            </main>
          </div>
        </div>
      </div> 
      <div className="bottom">

 
      <div className="container-fluid">
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
      <script async="" src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous"></script>
    </div>
  )
}