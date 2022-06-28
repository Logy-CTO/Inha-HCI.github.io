import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Papers from "../components/papers"

interface SitePapersProps {
  location: {
    pathname: string
  }
}

const SitePapers = ({ location }: SitePapersProps) => {
  return (
    <Layout location={location}>
      <Seo title="Papers" />
      <Papers />
    </Layout>
  )
}

export default SitePapers
