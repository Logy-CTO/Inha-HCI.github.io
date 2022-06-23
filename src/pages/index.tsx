import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ResearchTopics from "../components/researchTopics"

interface SiteIndexProps {
  location: {
    pathname: string
  }
}

const SiteIndex = ({ location }: SiteIndexProps) => {
  return (
    <Layout location={location}>
      <Seo title="Home" />
      <ResearchTopics />
    </Layout>
  )
}

export default SiteIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
