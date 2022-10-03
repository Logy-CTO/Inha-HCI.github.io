import React from "react"
import * as FooterStyle from "./footer.module.css"
import FooterLogoImg from "../../../assets/images/footer_logo.png"

const Footer = () => {
  return (
    <footer className={FooterStyle.footerWrapper}>
      <div className={FooterStyle.innerWrapper}>
        <a href="https://www.inha.ac.kr">
          <img src={FooterLogoImg} className={FooterStyle.logo} />
        </a>
        <div className={FooterStyle.footerContent}>
          <span>인천광역시 미추홀구 인하로 100 (60주년 기념관 1406호)</span>
          <span>Copyright © {new Date().getFullYear()} Inha University</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
