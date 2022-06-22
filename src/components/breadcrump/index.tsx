import React from "react"
import * as BreadCrumpStyle from "./breadcrump.module.css"

interface BreadCrumpProps {
  title: string
}

const BreadCrump = ({ title }: BreadCrumpProps) => {
  return (
    <div className={BreadCrumpStyle.breadCrumpWrapper}>
      <h1 className={BreadCrumpStyle.title}>{title}</h1>
    </div>
  )
}

export default BreadCrump
