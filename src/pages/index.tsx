import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ResearchTopics from "../components/researchTopics"
import Contact from "../components/contact"

const SiteIndex = () => {
  return (
    <Layout title="Home">
      <Seo title="Home" />
      <ResearchTopics />
      <Contact />
    </Layout>
  )
}

export default SiteIndex
