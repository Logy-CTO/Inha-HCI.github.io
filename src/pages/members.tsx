import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProfessorInfo from "../components/professorInfo"

interface SiteProfessorProps {
  location: {
    pathname: string
  }
}

const SiteProfessor = ({ location }: SiteProfessorProps) => {
  return (
    <Layout location={location}>
      <Seo title="Members" />
      <ProfessorInfo />
    </Layout>
  )
}

export default SiteProfessor

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
