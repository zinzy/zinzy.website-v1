import React from 'react'
import Header from './header'
import Footer from './footer'

export default function Layout({ children, title, type }) {
  return (
    <> 
    <Header title={title} type={type} />
      <main>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2"> 
            <section className="section">
              <div className="columns is-centered">{children}</div>
            </section> 
            <Footer title={title} type={type} />
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
