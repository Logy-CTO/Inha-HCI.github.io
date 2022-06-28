import React from "react"
import * as NewsListStyle from "./newsList.module.css"
import NewsListItem from "../newsListItem"

interface NewsListProps {
  list: {
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      description: string
      title: string
      featuredImage?: {
        publicURL: string
      }
    }
  }[]
}

const NewsList = ({ list }: NewsListProps) => {
  return (
    <div className={NewsListStyle.NewsListWrapper}>
      <div className={NewsListStyle.innerWrapper}>
        <div className={NewsListStyle.list}>
          {list.map(news => {
            return (
              <NewsListItem
                title={news.frontmatter.title}
                date={news.frontmatter.date}
                description={news.frontmatter.description || news.excerpt}
                featuredImage={news.frontmatter.featuredImage}
                link={news.fields.slug}
                key={news.frontmatter.title}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NewsList
