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
            </main>
          </div>
        </div>
      </div> 

      <Footer/> 
      <script async="" src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous"></script>
    </div>
  )
}