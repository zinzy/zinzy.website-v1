import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import siteConfig from '../../gatsby-config'
import DarkMode from '../components/dark-mode'

export default function Header({ title, type, description }) {
  const pageTitle =
    (siteConfig.siteMetadata.title || 'Gatsby Garden') +
    (title ? ` : ${title}` : '')
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

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      {/*
        These are included using gatsby-browser.js - if I include these like shown here, there is a horrible FOUC
      <link href="/css/style.css" rel="stylesheet" media="all" className="default" />
      <link href="/css/main.css" rel="stylesheet" media="all" className="default" />
      <link href="/css/custom.css" rel="stylesheet" media="all" className="default" />
      <link href="/css/Util.css" rel="stylesheet" media="all" className="default" />
      */}
    </Helmet>

      {/* <div className="d-flex justify-content-end"><DarkMode /></div> */}
    </>
  )
}
