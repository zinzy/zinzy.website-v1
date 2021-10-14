import React from "react" 
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (   
    <div>
      { 
      <div className="main">
        <Header/>
        <main>{children}</main> 
        <Footer/> 
      </div>
      }
    </div>
  )
}