import React from "react" 
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (   
    <div>
      { 
      <div className="main"> 
        <main>{children}</main> 
      </div>
      }
    </div>
  )
}