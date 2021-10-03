import React from "react"
import { Link } from "gatsby"

export default function Footer({ title }) { 

  return (
    <> 

      <footer className=" ">
        <div className="p-2 pt-3 p-lg-0">
        <div className="container">
          <div className="row">
          <div className="col-xl-6 offset-xl-3">
            <h1 className="h2 text-center text-md-start">Hello there, Internet.<br/> I'm Zinzy Nev Geene.</h1>
            <p>I am a <a href="https://www.leeruniek.nl" target="_blank" rel="noopener noreferrer">User Experience Manager</a>, linguist, and <a href="https://www.vineandfig.co" target="_blank" rel="noopener noreferrer">queer facilitator</a> in Amsterdam. I am specialized in making tools that people use to solve problems at work. In addition, I build resonant spaces for LGBTQIA+ communities. If you'd like to get in touch with me, you may do so via <a href="mailto:zinzy@pm.me">email</a>.</p>
            <p>This here is my personal website, a place for soft stances, lived experiences, and critical notes on the things I hold dear. I come here on Sunday to write about my week. There is no archive. </p>
            <p>I love silly archives, making music, and learning the love language of cooking. You can find me in Amsterdam East tending to the garden and home I share with the woman as God had intended her, <a href="https://www.twitter.com/anjawaleson" target="_blank" rel="noopener noreferrer">Anja</a>.</p>
            <p>Life is good.</p>
          </div>
        </div> 
        </div>
        </div>
     </footer>
    </>
  )
} 