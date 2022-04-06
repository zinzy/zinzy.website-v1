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
      <Helmet>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={siteConfig.siteMetadata.title} property="og:site_name" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400;1,600&amp;display=swap"
          rel="stylesheet"
        />
        <meta content={title ? title : pageTitle} property="og:title" />
        {description ? (
          <meta content={description} property="og:description" />
        ) : null}

        {type === 'note' ? (
          <meta content="article" property="og:type"></meta>
        ) : (
          <meta content="website" property="og:type"></meta>
        )}

        <title>{pageTitle}</title>

        <link rel="apple-touch-icon" href="/img/favicon.png" />
        <link
          rel="icon"
          href="/img/favicon.png"
          type="image/png"
          sizes="16x16"
        />
        {/*
          These are included using gatsby-browser.js - if I include these like shown here, there is a horrible FOUC
        <link href="/css/style.css" rel="stylesheet" media="all" className="default" />
        <link href="/css/main.css" rel="stylesheet" media="all" className="default" />
        <link href="/css/custom.css" rel="stylesheet" media="all" className="default" />
        <link href="/css/Util.css" rel="stylesheet" media="all" className="default" />
        */}
      </Helmet>

        <footer id="footer">

        <div class="d-flex h-card">
          <div class="d-none">
            <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1649240297/me/FullSizeRender_copy_y5whli.jpg" alt="" className="u-photo" />
          </div>
          <div class="flex-grow-1">
            <div className="">
              <p className="m-0"><a href="https://www.zinzy.website" className="p-name">Zinzy Waleson</a> is a designer and facilitator working and living in <span className="p-locality">Amsterdam</span>. This is her personal site, a place she comes to link and think. You may contact her via <a href="mailto:zinzy@pm.me" rel="me" className="u-email">email</a>.</p>
            </div>
          </div> 
        </div>

        <ul className="mt-3"> 
          <li><a href="/">Home</a></li> 
          <li><a href="/sitemap">Sitemap</a></li>
          <li><a href="/now">Now</a></li>
          <li><a href="/colophon">Colophon</a></li>
          {/* <li><a href="/about">About</a></li> */} 
          {/* <li><a href="/mentoring">Mentoring</a></li> */}
          {/* <li><a href="/tags">Tags</a></li> */}
          {/* <li><a href="/contact">Contact</a></li> */}
        </ul>

        <div className="mt-5">
          <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/previous">←</a> 
          <span className="mx-5">🕸💍 </span>
          <a href="https://xn--sr8hvo.ws/%F0%9F%95%9C%F0%9F%91%8B%F0%9F%9A%A8/next">→</a>
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
