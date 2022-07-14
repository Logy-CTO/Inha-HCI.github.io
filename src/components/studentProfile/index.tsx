import React from "react"
import { MdOutlineMail, MdPermIdentity } from "react-icons/md"
import { ImGithub } from "react-icons/im"
import { HiPencilAlt } from "react-icons/hi"
import * as StudentProfileStyle from "./studentProfile.module.css"

interface StudentProfileProps {
  imgSrc: string
  imgRatio: number
  name: string
  email?: string
  interested?: string[]
  degree?: string
  company?: string
  homepage?: string
  github?: string
}

const StudentProfile = ({
  imgSrc,
  imgRatio,
  name,
  email,
  interested,
  degree,
  company,
  homepage,
  github,
}: StudentProfileProps) => {
  return (
    <div className={StudentProfileStyle.profileWrapper}>
      <img
        src={imgSrc}
        alt={name}
        className={
          `${StudentProfileStyle.image} ` +
          (imgRatio > 0.9 ? `${StudentProfileStyle.imageContain}` : "")
        }
      />
      <div className={StudentProfileStyle.profile}>
        <span className={StudentProfileStyle.name}>{name}</span>
        <div className={StudentProfileStyle.interested}>
          {interested && <span>{interested.join(", ")}</span>}
        </div>
        {degree && <span>{degree}</span>}
        {company && <span>{company}</span>}
        <div className={StudentProfileStyle.linkGroup}>
          {email && (
            <a className={StudentProfileStyle.link} href={`mailto:${email}`}>
              <MdOutlineMail />
            </a>
          )}
          {homepage && (
            <a className={StudentProfileStyle.link} href={homepage}>
              <HiPencilAlt />
            </a>
          )}
          {github && (
            <a className={StudentProfileStyle.link} href={github}>
              <ImGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default StudentProfile
