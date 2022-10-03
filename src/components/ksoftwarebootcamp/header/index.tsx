import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as HeaderStyle from "./header.module.css"

const Header = () => {
  return (
    <header className={HeaderStyle.headerWrapper}>
      <div className={HeaderStyle.innerWrapper}>
        <h1 className={HeaderStyle.title}>
          K-Software
          <br />
          Empowerment
          <br />
          BootCamp
        </h1>
        <div className={HeaderStyle.menus}>
          <AnchorLink to="#prgintro">프로그램 소개</AnchorLink>
          <AnchorLink to="#projects">참여기업 프로젝트</AnchorLink>
          <AnchorLink to="#schedule">교육일정</AnchorLink>
          <AnchorLink to="#faculty">교수진</AnchorLink>
        </div>
      </div>
    </header>
  )
}

export default Header
