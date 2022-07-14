import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout title={"404: Not Found"}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
    </Layout>
  )
}

export default NotFoundPage
