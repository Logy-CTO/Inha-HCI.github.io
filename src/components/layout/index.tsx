import React, { useState } from "react"
import { Link } from "gatsby"
import Header from "../header"
import Footer from "../footer"
import SideBar from "../sidebar"
import * as LayoutStyle from "./layout.module.css"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [sideBarActive, setSideBarActive] = useState<boolean>(false)

  return (
    <div className="global-wrapper">
      {sideBarActive && (
        <div className={LayoutStyle.sidebar}>
          <SideBar inactiveSideBar={() => setSideBarActive(false)} />
        </div>
      )}
      <Header activeSideBar={() => setSideBarActive(true)} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
