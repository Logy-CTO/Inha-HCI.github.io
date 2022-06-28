import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ResearchInfo from "../components/researchTopics"
import Projects from "../components/projects"

interface SiteResearchProps {
  location: {
    pathname: string
  }
}

const SiteResearch = ({ location }: SiteResearchProps) => {
  return (
    <Layout location={location}>
      <Seo title="Research" />
      <ResearchInfo />
      <Projects />
    </Layout>
  )
}

export default SiteResearch
