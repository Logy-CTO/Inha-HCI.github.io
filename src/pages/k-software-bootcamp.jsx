import React, { useEffect } from "react"
import KSoftwareBootcamp from "../components/ksoftwarebootcamp"

const SiteKSoftwareBootcamp = () => {
  useEffect(() => {
    document.querySelector("html")?.classList.add("k_software_bootcamp")
  }, [])
  return <KSoftwareBootcamp />
}

export default SiteKSoftwareBootcamp
