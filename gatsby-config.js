module.exports = {
  siteMetadata: {
    siteUrl: "https://www.zinzy.website",
    title: "zinzy.website",
    micropub_endpoint: "https://zinzy-endpoint.herokuapp.com/micropub"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-dark-mode",
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
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-double-brackets-link`, 
            options: {
              stripBrackets: true
            }
          }, 
        ], 
      },
    },  
    {
      resolve: `gatsby-transformer-markdown-references`,
      options: {
        types: ["Mdx", "MarkdownRemark"], // or ["MarkdownRemark"] (or both)
      },
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
        name: "library",
        path: "./_garden/the-library",
      },
      __key: "library",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notes",
        path: "./_garden/notes",
      },
      __key: "notes",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "changelog",
        path: "./_garden/changelog",
      },
      __key: "changelog",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "antilibrary",
        path: "./_garden/antilibrary",
      },
      __key: "antilibrary",
    },
  ],
};
