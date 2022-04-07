import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { startCase, camelCase } from 'lodash'
import siteConfig from '../../gatsby-config'
import Search from '../components/search'
import {
  DefaultMenuStructure,
  MenuItemPage,
  MenuItemText,
  MenuItemNote,
  MenuItemTag,
  MenuItemExternalLink,
} from '../utils/menu-structure'

export default function Footer({ title, type, description }) {
  const menu = DefaultMenuStructure('header')
  const pageTitle =
    (siteConfig.siteMetadata.title || 'Gatsby Garden') +
    (title ? ` : ${title}` : '')

  const handleHamburgerMenuClick = e => {
    const target_id = e.currentTarget.getAttribute('data-target')
    const target = document.getElementById(target_id)

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    e.currentTarget.classList.toggle('is-active')
    target.classList.toggle('is-active')
  }

  // :TODO:
  // <meta content="{{ site.url }}{{ page.url }}" property="og:url"> - NOTE: site.url might NOT be there in the config file.

  return (
    <>

        <footer id="footer">

        <div>
        <div className="container h-card">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2"> 
              <div className="row d-flex align-items-center">
              <div className="col-md-2 portrait mb-5 mb-md-0">
                <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1635344340/me/zinzy-1_zarupx.jpg" alt="" className="u-photo" />
              </div>
              <div className="col-md-10 col-lg-7">
                <a href="https://www.zinzy.website" className="p-name">Zinzy Waleson</a> is a designer, facilitator, and linguist working and living in <span className="p-locality">Amsterdam</span>. <a rel="me" href="https://www.zinzy.website" class="u-url">zinzy.website</a> is her personal site, a place for her to link and think. You may contact Zinzy via <a href="mailto:zinzy@pm.me" rel="me" className="u-email">email</a> or <a href="https://www.linkedin.com/in/zinzy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
              </div>
              <div className="col-md-12 col-lg-3">
                <ul className=""> 
                  <li><a href="/">Home</a></li> 
                  <li><a href="/sitemap">Sitemap</a></li>
                  <li><a href="/now">Now</a></li>
                  <li><a href="/colophon">Colophon</a></li>
                  {/* <li><a href="/about">About</a></li> */} 
                  {/* <li><a href="/mentoring">Mentoring</a></li> */}
                  {/* <li><a href="/tags">Tags</a></li> */}
                  {/* <li><a href="/contact">Contact</a></li> */}
                </ul>
              </div>
            </div>
 

        <div className="indiewebring text-center">
          <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/previous">←</a>
          <span className="mx-3">Visit other IndieWeb sites</span>
          <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/next">→</a>
        </div>
            </div>
          </div>
        </div>
      </div>

 
          
        </footer>

    </>
  )
}

function MenuItem({ item, className }) {
  let itm
  if (item.type === 'page')
    itm = <MenuItemPage item={item} className={className} />
  else if (item.type === 'tag')
    itm = <MenuItemTag item={item} className={className} />
  else if (item.type === 'note')
    itm = <MenuItemNote item={item} className={className} />
  else if (item.type === 'link')
    itm = <MenuItemExternalLink item={item} className={className} />
  else if (item.type === 'text')
    itm = <MenuItemText item={item} className={className} />

  return itm
}
