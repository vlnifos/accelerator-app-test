import React from "react"
import "../../index.scss"
import { CookieWarning } from "components/cookie-warning/CookieWarning"
import { Footer } from "components/footer/Footer"
import { Header } from "components/header/Header"

type Props = {
  children: any
}

export const Layout = (props: Props) => {
  const [isCookieOpen, setIsCookieOpen] = React.useState(true)

  return (
    <div>
      {isCookieOpen && (
        <CookieWarning
          handleCookieAction={() => setIsCookieOpen(!isCookieOpen)}
        />
      )}

      <Header />

      {props.children}

      <Footer />
    </div>
  )
}

export default Layout
