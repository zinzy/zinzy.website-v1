import React from "react" 
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return ( 
    <div className="">  
    {children} 
      <div className="container">
        <div className="row">
          <div className="col-xl-12">   
            <main className="">
              {/* <Header/>   */}
              <main className="my-4 py-4"> </main>
              {/* <Footer/>  */} 
            </main>
          </div>
        </div>
      </div> 
    </div>
  )
}