import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProfessorInfo from "../components/professorInfo"
import StudentInfo from "../components/studentInfo"

interface SiteMemberProps {
  location: {
    pathname: string
  }
}

const SiteMember = ({ location }: SiteMemberProps) => {
  return (
    <Layout location={location}>
      <Seo title="Members" />
      <ProfessorInfo />
      <hr style={{ width: "60%" }} />
      <StudentInfo />
    </Layout>
  )
}

export default SiteMember
