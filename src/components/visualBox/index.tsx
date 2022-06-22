import React from "react"
import * as VisualBoxStyle from "./visualBox.module.css"

const VisualBox = () => {
  return (
    <div className={VisualBoxStyle.visualBoxWrapper}>
      <div className={VisualBoxStyle.siteDescription}>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  )
}

export default VisualBox
