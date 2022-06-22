import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as FooterStyle from "./footer.module.css"
import FooterLogoImg from "../../images/footer_logo.png"

interface FooterProps {
  site: {
    siteMetadata: {
      labInfomation: {
        address: string
        tel: string
      }
    }
  }
}

const Footer = () => {
  const data = useStaticQuery<FooterProps>(graphql`
    query {
      site {
        siteMetadata {
          labInfomation {
            address
            tel
          }
        }
      }
    }
  `)

  return (
    <footer className={FooterStyle.footerWrapper}>
      <div className={FooterStyle.innerWrapper}>
        <img src={FooterLogoImg} className={FooterStyle.logo} />
        <span>
          Copyright © {new Date().getFullYear()} HCI Laboratory, Inha University
        </span>
      </div>
    </footer>
  )
}

export default Footer
