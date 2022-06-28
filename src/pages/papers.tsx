import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Papers from "../components/papers"

const SitePapers = () => {
  return (
    <Layout title="Papers">
      <Seo title="Papers" />
      <Papers />
    </Layout>
  )
}

export default SitePapers
