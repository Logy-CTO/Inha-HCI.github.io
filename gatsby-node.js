const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const newsPost = path.resolve(`./src/templates/news-post.tsx`)
  const newsList = path.resolve(`./src/templates/news-list.tsx`)

  const result = await graphql(
    `
      {
        site {
          siteMetadata {
            newsPerPage
          }
        }
        allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
          nodes {
            fields {
              slug
            }
            id
          }
          totalCount
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes
  const totalCount = result.data.allMarkdownRemark.totalCount
  const newsPerPage = result.data.site.siteMetadata.newsPerPage

  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: post.fields.slug,
        component: newsPost,
        context: {
          id: post.id,
        },
      })
    })
  }

  for (idx = 0; idx * newsPerPage < totalCount; idx++) {
    const path = idx === 0 ? "" : idx
    createPage({
      path: `/news/${path}`,
      component: newsList,
      context: {
        skip: idx * newsPerPage,
        limit: newsPerPage,
        idx,
      },
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/HCI-Lab/index.html`,
    toPath: `/`,
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
