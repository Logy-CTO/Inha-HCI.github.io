import React from "react"

interface ContentWrapperProps {
  children: React.ReactNode
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <div className="outerWrapper">
      <div className="innerWrapper">{children}</div>
    </div>
  )
}

export default ContentWrapper
