import React, { useState } from 'react';
import { Helmet } from "react-helmet"  
import siteConfig from "../../gatsby-config"
import { Link } from 'gatsby'
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { MdOutlineLightMode, MdOutlineWbTwilight } from "react-icons/md";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'

export default function Header({ title }) { 
 
  const [checked, setChecked] = useState(false);


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {(siteConfig.siteMetadata.title || "Zinzy Waleson") +
            (title ? ` : ${title}` : "")}
        </title>

        <link rel="authorization_endpoint" href="https://indieauth.com/auth"/>
        <link rel="token_endpoint" href="https://tokens.indieauth.com/token"/>
        <link rel="micropub" href="https://www.zinzy.website/micropub"/>
 
      </Helmet>  


      {/* <header>

        <ThemeToggler>
            {({ theme, toggleTheme }) => ( 
            <Form id="theme">
              <Form.Check 
                type="switch"
                id="custom-switch"
                label=""
                checked={theme === 'dark'}
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              />
            </Form>
            )}
        </ThemeToggler>

        </header> */}

      {/* <header id="header">
        <div className="">
          <div className="row">
            <div className="col-10">
            <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/work">Work</a></li>
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
      
 
              </div>
            </div>
          </div>
        </div>

      </header> */}
    </>
  )
} 