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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [ 
          `Inter` // you can also specify font weights and styles
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
        name: "library",
        path: "./_notes/library",
      },
      __key: "library",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "garden",
        path: "./_notes/garden",
      },
      __key: "garden",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "changelog",
        path: "./_notes/changelog",
      },
      __key: "changelog",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "essays",
        path: "./_notes/essays",
      },
      __key: "essays",
    }
  ],
};
