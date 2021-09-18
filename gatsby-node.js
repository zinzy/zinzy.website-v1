const path = require("path")

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


exports.onCreateNode = ({ actions: { createNodeField }, node }) => {
  const type = node.internal.type;
  if (type === 'mdx') {
    createNodeField({
      node,
      name: `lastModified`,
      value: `parent.mtime`
    })
  }
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
        name: `lastModified`,
        value: `parent.mtime`
      },
      {
        node,
        name: "slug",
        value: slug.replace(/^\/[0-9a-z]+\//, '/'),
      }
    ) 
  }
}