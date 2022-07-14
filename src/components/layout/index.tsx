import React, { useState } from "react"
import Header from "../header"
import Footer from "../footer"
import SideBar from "../sidebar"
import * as LayoutStyle from "./layout.module.css"

interface LayoutProps {
  title: string
  children: React.ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  const [sideBarActive, setSideBarActive] = useState<boolean>(false)
  return (
    <div className="global-wrapper">
      {sideBarActive && (
        <div className={LayoutStyle.sidebar}>
          <SideBar inactiveSideBar={() => setSideBarActive(false)} />
        </div>
      )}
      <Header activeSideBar={() => setSideBarActive(true)} title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
