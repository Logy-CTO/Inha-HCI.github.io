import React from "react"
import { Link } from "gatsby"
import { MdMenu } from "react-icons/md"
import * as HeaderStyle from "./header.module.css"
import LogoImg from "../../assets/images/logo.png"
import VisualBox from "../visualBox"
import BreadCrumb from "../breadcrumb"

interface HeaderProps {
  activeSideBar: () => void
  location: {
    pathname: string
  }
}

const Header = ({ activeSideBar, location }: HeaderProps) => {
  const isRootPath = location.pathname === "/"
  return (
    <div className={isRootPath ? HeaderStyle.IndexWrapper : undefined}>
      <header className={HeaderStyle.headerWrapper}>
        <div className={HeaderStyle.innerWrapper}>
          <Link to="/">
            <img src={LogoImg} className={HeaderStyle.logo} />
          </Link>
          <div className={HeaderStyle.menus}>
            <Link to="/members">Members</Link>
            <Link to="/research">Research</Link>
            <Link to="/papers">Paper</Link>
            <Link to="/news">News</Link>
          </div>
          <div className={HeaderStyle.sidebarButton}>
            <MdMenu size={"2rem"} onClick={() => activeSideBar()} />
          </div>
        </div>
      </header>
      {isRootPath ? (
        <VisualBox />
      ) : (
        <BreadCrumb title={location.pathname.substring(1)} />
      )}
    </div>
  )
}

export default Header
