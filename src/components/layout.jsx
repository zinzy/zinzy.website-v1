import React from "react" 
import { MDXProvider } from "@mdx-js/react"
import Header from "../components/header"
import Footer from "../components/footer" 
import ImpliedReader from "../components/mdx/ImpliedReader"
import Draft from "../components/mdx/Draft"

const shortcodes = { ImpliedReader, Draft }

export default function Layout({ children }) { 
  return ( 
    <div id="top">   
      <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">   
            <main className="">
              <Header/>  
              <MDXProvider components={shortcodes}>
              {children}
              </MDXProvider>
              <Footer/>    
            </main>
          </div>
        </div>
      </div> 
      </div>
    </div>
  )
}