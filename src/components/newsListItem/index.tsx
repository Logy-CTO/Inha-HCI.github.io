import React from "react"
import { Link } from "gatsby"
import * as NewsListItemStyle from "./newsListItem.module.css"

interface NewsListItemProps {
  title: string
  date: string
  description: string
  featuredImage?: {
    publicURL: string
  }
  link: string
}

const NewsListItem = ({
  title,
  date,
  description,
  link,
}: NewsListItemProps) => {
  return (
    <div className={NewsListItemStyle.NewsListItemWrapper}>
      <Link to={link} className={NewsListItemStyle.link}>
        <h4 className={NewsListItemStyle.title}>{title}</h4>
        <span className={NewsListItemStyle.date}>{date}</span>
        <p className={NewsListItemStyle.description}>{description}</p>
      </Link>
    </div>
  )
}

export default NewsListItem
