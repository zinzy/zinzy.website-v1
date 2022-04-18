import React from "react"
import { Helmet } from "react-helmet"  
import siteConfig from "../../gatsby-config"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { MdOutlineLightMode, MdOutlineWbTwilight } from "react-icons/md";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'

export default function Header({ title }) { 

  return (
    <>
      <Helmet>
        <link rel="authorization_endpoint" href="https://endpoint-for-zinzy.herokuapp.com/auth" />
        <link rel="token_endpoint" href="https://endpoint-for-zinzy.herokuapp.com/token" />
        <link rel="micropub" href="https://endpoint-for-zinzy.herokuapp.com/micropub" />

        <meta charSet="utf-8" />
        <title>
          {(siteConfig.siteMetadata.title || "Zinzy Waleson") +
            (title ? ` : ${title}` : "")}
        </title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Source+Serif+Pro:ital@0;1&display=swap" rel="stylesheet" />
        
      </Helmet> 

      <header id="header">
        <div className="">
          <div className="row">
            <div className="col-10">
            <ul>
                    <li><a href="/">Home</a></li>
                    {/* <li><a href="/work">Work</a></li> */}
                    <li><a href="/notes">Notes</a></li>
                    <li><a href="/library">Library</a></li>
                    <li><a href="/now">Now</a></li>
                  </ul>
            </div>
            <div className="col-2 text-end">
              <div className="theme-toggler">


              <Form>
                {({ theme, toggleTheme }) => (
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label="Reviews only"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                />
                )}
              </Form>
      

            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                <label>
                    <input
                    type="checkbox"
                    onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                    checked={theme === 'dark'}
                    />{' '}
                    {theme === 'dark' ? <MdOutlineLightMode />  : <MdOutlineWbTwilight /> }
                </label>
                )}
            </ThemeToggler>

              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  )
} 