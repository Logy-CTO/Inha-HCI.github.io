import React from "react"
import * as NewsListStyle from "./newsList.module.css"
import NewsListItem from "../newsListItem"
import ContentWrapper from "../contentWrapper"

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
    <ContentWrapper>
      <div className={NewsListStyle.list}>
        {list.map(news => {
          console.log(news.fields.slug)
          return (
            <NewsListItem
              title={news.frontmatter.title}
              date={news.frontmatter.date}
              description={news.frontmatter.description || news.excerpt}
              featuredImage={news.frontmatter.featuredImage}
              link={"/news" + news.fields.slug}
              key={news.frontmatter.title}
            />
          )
        })}
      </div>
    </ContentWrapper>
  )
}

export default NewsList
