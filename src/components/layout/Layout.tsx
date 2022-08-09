import { CookieWarning } from "components/cookie-warning/CookieWarning"
import { Footer } from "components/footer/Footer"
import { Header } from "components/header/Header"
import { RoutesList } from "components/routes-list/RoutesList"
import React from "react"

export const Layout = () => {
  const [isCookieOpen, setIsCookieOpen] = React.useState(true)

  return (
    <div>
      {isCookieOpen && (
        <CookieWarning
          handleCookieAction={() => setIsCookieOpen(!isCookieOpen)}
        />
      )}

      <Header />

      <RoutesList />

      <Footer />
    </div>
  )
}

export default Layout
