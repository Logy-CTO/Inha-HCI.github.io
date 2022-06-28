import React from "react"
import { Link } from "gatsby"
import * as SideBarStyle from "./sidebar.module.css"
import { MdClose } from "react-icons/md"

interface SideBarProps {
  inactiveSideBar: () => void
}

const SideBar = ({ inactiveSideBar }: SideBarProps) => {
  return (
    <div className={SideBarStyle.sideBarWrapper}>
      <div className={SideBarStyle.sideBarBox}>
        <MdClose size={"2rem"} onClick={() => inactiveSideBar()} />

        <div className={SideBarStyle.menuWrapper}>
          <Link to="/members">Members</Link>
          <Link to="/research">Research</Link>
          <Link to="/papers">Paper</Link>
          <Link to="/news">News</Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar
