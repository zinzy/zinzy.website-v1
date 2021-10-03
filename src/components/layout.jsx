import React from "react" 
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (   
    <div>
      { 
      <div>
        <div className="p-2 pt-3 p-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <main>{children}</main> 
            </div>
          </div> 
        </div> 
        </div>
        <Footer/> 
      </div>
      }
    </div>
  )
}