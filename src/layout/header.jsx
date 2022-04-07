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

      {/* Favicon */}
      <link rel="icon" href="https://emojicdn.elk.sh/😌" />

      {/* Micropub authorization */}
      <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
      <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />
      <link rel="micropub" href="https://www.zinzy.website/micropub" />

    </Helmet>

      {/* <div className="dark-mode-toggle"><DarkMode /></div> */}
    </>
  )
}
