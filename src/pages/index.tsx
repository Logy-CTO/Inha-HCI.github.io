import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

interface SiteIndexProps {
  location: {
    pathname: string
  }
}

const SiteIndex = ({ location }: SiteIndexProps) => {
  return (
    <Layout location={location}>
      <Seo title="Home" />
      Home
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
