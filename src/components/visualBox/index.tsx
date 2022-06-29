import React from "react"
import * as VisualBoxStyle from "./visualBox.module.css"

const VisualBox = () => {
  return (
    <div className={VisualBoxStyle.visualBoxWrapper}>
      <div className={VisualBoxStyle.siteDescription}>
        <h1>HCI Lab #Inha univ.</h1>
        <p>Human–Computer Interaction Lab</p>
      </div>
    </div>
  )
}

export default VisualBox
