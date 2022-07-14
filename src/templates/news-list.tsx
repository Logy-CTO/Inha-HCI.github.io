import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NewsList from "../components/newsList"
import NewsNavigator from "../components/newsNavigator"

interface NewsListTemplateProps {
  data: {
    site: {
      siteMetadata: {
        newsPerPage: number
      }
    }
    allMarkdownRemark: {
      nodes: {
        excerpt: string
        fields: {
          slug: string
        }
        frontmatter: {
          date: string
          title: string
          description: string
          featuredImage: {
            publicURL: string
          }
        }
      }[]
      totalCount: number
    }
  }
  location: {
    pathname: string
  }
}

const NewsListTemplate = ({ data, location }: NewsListTemplateProps) => {
  const curIdx =
    location.pathname === "/news" || location.pathname === "/news/"
      ? 0
      : parseInt(location.pathname.substring(6))

  const end = Math.trunc(
    data.allMarkdownRemark.totalCount / data.site.siteMetadata.newsPerPage
  )

  return (
    <Layout title={"News"}>
      <Seo title="News" />
      <NewsList list={data.allMarkdownRemark.nodes} />
      {end !== 0 && <NewsNavigator cur={curIdx} end={end} />}
    </Layout>
  )
}

export default NewsListTemplate

export const pageQuery = graphql`
  query PostListQuery($skip: Int, $limit: Int) {
    site {
      siteMetadata {
        newsPerPage
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        excerpt(truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            publicURL
          }
        }
      }
      totalCount
    }
  }
`
