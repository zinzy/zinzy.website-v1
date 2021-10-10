import React from "react"
import './quote.scss';

export default function Quote() { 

  return (
    <> 


        <div className="breakout">
            <div className="breakout-content quote">
              <div className="blots">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three  d-none d-md-block"></div>
                <div className="four"></div>
              </div>
              <p className="quotation mt-5">“</p>
              <p className="mb-5">
                Don't you love New York in the fall? It makes me wanna buy school supplies. I would send you a bouquet of newly sharpened pencils if I knew your name and address.</p>
              <p className="quotation">”</p>
            </div>
        </div> 
    </>
  )
} 