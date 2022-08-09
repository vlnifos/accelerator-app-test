import Logo from "images/logo.png"
import classNames from "classnames"
import { Button } from "components/button/Button"
import React, { useEffect } from "react"
import * as classes from "./Header.module.scss"
import hamburgerIcon from "images/hamburger.svg"

export const Header = () => {
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolled(window.pageYOffset > 1)
      )
    }
  }, [])

  return (
    <header
      className={classNames(classes.header, {
        [classes["non-transparent"]]: scrolled,
      })}
    >
      <div className="container flex-row justify-between">
        {/* Logo */}
        <div className={`flex-row ${classes.logo}`}>
          <img src={Logo} alt="img" />

          <span>AcceleratorApp</span>
        </div>

        {/* Hamburger menu */}
        <div className={classes["hamburger-menu"]}>
          <Button type="solo" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={hamburgerIcon} alt="" />
          </Button>
        </div>

        {/* Buttons */}
        <div
          className={classNames("flex-row", classes.buttons, {
            [classes["menu-visible"]]: menuOpen,
          })}
        >
          <Button onClick={() => {}} type={"solo"}>
            Community
          </Button>
          <Button onClick={() => {}} type={"solo"}>
            Modules
          </Button>
          <Button onClick={() => {}} type={"solo"}>
            Company
          </Button>
          <Button onClick={() => {}} type={"solo"}>
            Pricing
          </Button>
          <Button onClick={() => {}} type={"outlined"}>
            Sign In
          </Button>
          <div className={classes["request-demo-btn"]}>
            <Button onClick={() => {}}>Request a Demo</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
