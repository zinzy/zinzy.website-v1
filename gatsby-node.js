const path = require(`path`)
//const makeSlug = require("./src/utils/make-slug")
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `Mdx`) {
  	const { createNodeField } = actions
    const title = node.frontmatter.title ? node.frontmatter.title : createFilePath({ node, getNode, basePath: `_garden` }).replace(/^\/(.+)\/$/, '$1')
    //const slug = node.slug ? makeSlug(node.slug) : makeSlug(title)
    const fileNode = getNode(node.parent)
    const date = node.frontmatter.date ? node.frontmatter.date : fileNode.mtime

    createNodeField({
      node,
      name: `slug`,
      value: `/${slug}.toLowerCase()`
    })
    createNodeField({
      node,
      name: `date`,
      value: date
    })
    createNodeField({
      node,
      name: `title`,
      value: title.replace(/\//g,'')
    })

    // :TODO: Add tags. Ideally, every supported frontmatter should be added as a field.
  }
}


exports.createPages = async ({ graphql, actions, reporter }) => {
  // destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug 
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // create blog post pages
  const posts = result.data.allMdx.edges

  // call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/page.jsx`),
      // you can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    """
    Markdown Node
    """
    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter
    }

    """
    Markdown Frontmatter
    """
    type Frontmatter @infer {
      title: String
      date: Date @dateformat
      tags: [String]
      aliases: [String]
      slug: String
      subcategory: String
      listingOnly: Boolean
      featuredImage: String
      parent: Node!
    }
  `
  createTypes(typeDefs);
};


exports.onCreateNode = ({ actions: { createNodeField }, node }) => {
  const type = node.internal.type;
  if (type === 'mdx') {
    createNodeField(
      {
        node,
        name: `changeTime`,
        value: `parent.changeTime`
      },
      {
        node,
        name: "slug",
        value: slug.replace(/^\/[0-9a-z]+\//, '/'),
      }
    ) 
  }
}