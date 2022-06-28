import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as StudentInfoStyle from "./studentInfo.module.css"
import StudentProfile from "../studentProfile"

interface Profile {
  id: string
  name: string
  email: string
  degree: string
  company: string
  interested: string[]
  type: string
  priority: number
  homepage: string
  github: string
}

interface Image {
  name: string
  publicURL: string
  childImageSharp: {
    fixed: {
      aspectRatio: number
    }
  }
}

const StudentInfo = () => {
  const {
    profiles: { profiles },
    images: { images },
  }: {
    profiles: { profiles: { node: Profile }[] }
    images: { images: Image[] }
  } = useStaticQuery(graphql`
    query StudentQuery {
      profiles: allProfileJson {
        profiles: edges {
          node {
            id
            name
            email
            degree
            company
            interested
            type
            priority
            homepage
            github
          }
        }
      }
      images: allFile(
        filter: { relativeDirectory: { glob: "members/students/image" } }
      ) {
        images: nodes {
          name
          publicURL
          childImageSharp {
            fixed {
              aspectRatio
            }
          }
        }
      }
    }
  `)
  const groups = [
    "Ph.D. Students",
    "Intergrated PhD Students",
    "M.S. Students",
    "Undergraduated students",
    "Alumni",
  ]

  return (
    <div className={StudentInfoStyle.StudentInfoWrapper}>
      <div className={StudentInfoStyle.innerWrapper}>
        {groups.map(group => {
          return (
            <div key={group}>
              <h3>{group}</h3>
              <div className={StudentInfoStyle.group}>
                {profiles
                  .filter(student => student.node.type === group)
                  .sort((a, b) => (a.node.priority > b.node.priority ? 1 : -1))
                  .map((student, idx) => {
                    const image = images.find(
                      img => img.name === student.node.name
                    )
                    return (
                      <StudentProfile
                        imgSrc={image!.publicURL}
                        imgRatio={image!.childImageSharp.fixed.aspectRatio}
                        email={student.node.email}
                        name={student.node.name}
                        company={student.node.company}
                        degree={student.node.degree}
                        interested={student.node.interested}
                        key={student.node.name + student.node.type}
                        homepage={student.node.homepage}
                        github={student.node.github}
                      />
                    )
                  })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StudentInfo
