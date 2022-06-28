import React, { useState } from "react"
import Header from "../header"
import Footer from "../footer"
import SideBar from "../sidebar"
import * as LayoutStyle from "./layout.module.css"

interface LayoutProps {
  location: any
  children: React.ReactNode
}

const Layout = ({ location, children }: LayoutProps) => {
  const [sideBarActive, setSideBarActive] = useState<boolean>(false)
  return (
    <div className="global-wrapper">
      {sideBarActive && (
        <div className={LayoutStyle.sidebar}>
          <SideBar inactiveSideBar={() => setSideBarActive(false)} />
        </div>
      )}
      <Header
        activeSideBar={() => setSideBarActive(true)}
        location={location}
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
