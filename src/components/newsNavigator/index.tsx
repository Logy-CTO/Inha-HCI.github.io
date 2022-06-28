import React from "react"
import { Link } from "gatsby"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import * as NewsNavigatorStyle from "./newsNavigator.module.css"

interface NewsNavigatorProps {
  cur: number
  end: number
}

const NewsNavigator = ({ cur, end }: NewsNavigatorProps) => {
  console.log(cur, end)
  return (
    <div className={NewsNavigatorStyle.NewsNavigatorWrapper}>
      <div className={NewsNavigatorStyle.innerWrapper}>
        <Link
          className={NewsNavigatorStyle.prev}
          style={cur <= 0 ? { display: "none" } : undefined}
          to={`/news/${cur === 1 ? "" : cur - 1}`}
        >
          <MdKeyboardArrowLeft />
          prev
        </Link>
        <Link
          className={NewsNavigatorStyle.next}
          to={`/news/${cur + 1}`}
          style={cur >= end - 1 ? { display: "none" } : undefined}
        >
          next
          <MdKeyboardArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default NewsNavigator
