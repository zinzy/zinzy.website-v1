import React from "react"
import { Link } from "gatsby"

export default function Footer({ title }) { 

  return (
    <> 

      <div className="row">
        <div className="col-lg-4">
          Zinzy Nev Geene &copy; 2021
        </div>
        <div className="col-lg-4">
          <p>Okay good talk</p>
        </div>
        <div className="col-lg-4 text-end">
          <p><Link to="/imprint">Imprint</Link></p>
        </div>
      </div>

    </>
  )
} 