import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as ContactStyle from "./contact.module.css"

const Contact = () => {
  const {
    site: {
      siteMetadata: { labInfomation },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          labInfomation {
            address
            tel
            email
            office
          }
        }
      }
    }
  `)
  return (
    <div className={ContactStyle.contactWrapper}>
      <div className={ContactStyle.innerWrapper}>
        <h4>Contact</h4>
        <div className={ContactStyle.content}>
          <div className={ContactStyle.info}>
            <div>
              <h6>Office address</h6>
              <span>{labInfomation.address}</span>
            </div>
            <div>
              <h6>Line</h6>
              <span>{labInfomation.tel}</span>
            </div>
            <div>
              <h6>Professor Contact</h6>
              <span>권장우 (The Professor)</span>
              <span>이메일: {labInfomation.email}</span>
              <span>연구실: {labInfomation.office}</span>
            </div>
          </div>
          <div className={ContactStyle.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1583.7143148492391!2d126.65645353270287!3d37.45060046263068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b79aa055402f5%3A0xc9f3109bcd6bd8a2!2z7J247LKc6rSR7Jet7IucIOyaqe2YhOuPmSDsnbjtlZjrjIDtlZnqtZAg7ZWY7J207YWM7YGs7IS87YSw!5e0!3m2!1sko!2skr!4v1615428174279!5m2!1sko!2skr"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
