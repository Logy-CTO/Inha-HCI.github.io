import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ResearchInfo from "../components/researchTopics"
import Projects from "../components/projects"

const SiteResearch = () => {
  return (
    <Layout title="Research">
      <Seo title="Research" />
      <ResearchInfo />
      <Projects />
    </Layout>
  )
}

export default SiteResearch
