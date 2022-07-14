import React from "react"
import * as BreadCrumbStyle from "./breadcrumb.module.css"

interface BreadCrumbProps {
  title: string
}

const BreadCrumb = ({ title }: BreadCrumbProps) => {
  return (
    <div className={BreadCrumbStyle.breadCrumbWrapper}>
      <h1 className={BreadCrumbStyle.title}>{title}</h1>
    </div>
  )
}

export default BreadCrumb
