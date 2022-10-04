import React, { useEffect } from "react"
import KSoftwareBootcamp from "../components/ksoftwarebootcamp"
import Header from "../components/ksoftwarebootcamp/header"
import Footer from "../components/ksoftwarebootcamp/footer"

const SiteKSoftwareBootcamp = () => {
  useEffect(() => {
    document.querySelector("html")?.classList.add("k_software_bootcamp")
  }, [])
  return (
    <>
      <Header />
      <KSoftwareBootcamp />
      <Footer />
    </>
  )
}

export default SiteKSoftwareBootcamp
