module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "zinzy.website",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-buildtime-timezone`,
    {
      resolve: "gatsby-source-lastfm",
      options: {
        api_key: '65f42e91d1664077fdd470c5ce5e7813',
        username: 'zinzynevgeene',
        limit: 10, // the maximum number of playbacks to pull in
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: { 
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-double-brackets-link`,
          }, 
        ], 
      },
    }, 
    {
      resolve: `gatsby-transformer-markdown-references`,
      options: {
        types: ["Mdx"], // or ["MarkdownRemark"] (or both)
      },
    }, 
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [ 
          `Inter\:400,500,`,
          `Fredoka+One`,
          `IM Fell French Canon SC`,
          `Work Sans` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "writing",
        path: "./_writing",
      },
      __key: "writing",
    }
  ],
};
