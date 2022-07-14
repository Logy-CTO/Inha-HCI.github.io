import React, { ReactNode } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as MediaStyle from "./media.module.css"

interface MediaProps {
  src: string
  label: string
  video?: boolean
}

const Media = ({ src, label, video = false }: MediaProps) => {
  return (
    <div className={MediaStyle.mediaWrapper}>
      {video ? (
        <video
          className={MediaStyle.media}
          src={src}
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        />
      ) : (
        <img
          className={`${MediaStyle.media} ${MediaStyle.image}`}
          src={src}
          alt={label}
        />
      )}
      <span className={MediaStyle.label}>{label}</span>
    </div>
  )
}

export default Media
