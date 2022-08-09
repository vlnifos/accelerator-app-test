import { Button } from "components/button/Button"
import { Divider } from "components/divider/Divider"
import { Input } from "components/input/Input"
import React from "react"
import classes from "./Footer.module.scss"
import { Section } from "./Section"

import linkedInIcon from "assets/images/linkedIn.svg"
import facebookIcon from "assets/images/facebook.svg"
import instagramIcon from "assets/images/instagram.svg"
import twitterIcon from "assets/images/twitter.svg"
import globeIcon from "assets/images/globe.svg"

export const Footer = () => {
  const [email, setEmail] = React.useState("")

  const handleSubmit = () => {
    // Submit email subscription
    setEmail("")
  }

  return (
    <footer className={classes.footer}>
      {/* Email */}
      <div className={classes["email-container"]}>
        {/* Title */}
        <div className={classes.title}>Join our growing community</div>

        {/* Email subscription */}
        <div className={classes["email-subscription"]}>
          Sign up for news and updates about AcceleratorApp
        </div>

        {/* Email input */}
        <Input
          value={email}
          onChange={(val) => setEmail(val)}
          placeholder="Your email"
          onSubmit={handleSubmit}
        />

        <Divider />
      </div>

      {/* Info */}
      <div className={`container ${classes["info-container"]}`}>
        {/* Community section */}
        <Section title="Community">
          <Button type="solo" onClick={() => {}}>
            Incubator/Accelerator
          </Button>
          <Button type="solo" onClick={() => {}}>
            Corporations
          </Button>
          <Button type="solo" onClick={() => {}}>
            Startups
          </Button>
          <Button type="solo" onClick={() => {}}>
            Investor
          </Button>
          <Button type="solo" onClick={() => {}}>
            Open Challenges
          </Button>
        </Section>

        {/* Modules section */}
        <Section title="Modules">
          <Button type="solo" onClick={() => {}}>
            Coaching Module
          </Button>
          <Button type="solo" onClick={() => {}}>
            Data Module
          </Button>
          <Button type="solo" onClick={() => {}}>
            Ecosystem Module
          </Button>
          <Button type="solo" onClick={() => {}}>
            LMS Module
          </Button>
          <Button type="solo" onClick={() => {}}>
            Events
          </Button>
          <Button type="solo" onClick={() => {}}>
            Application Proccessing
          </Button>
        </Section>

        {/* Company section */}
        <Section title="Company">
          <Button type="solo" onClick={() => {}}>
            About Us
          </Button>
          <Button type="solo" onClick={() => {}}>
            Carrers (TODO: BADGE)
          </Button>
          <Button type="solo" onClick={() => {}}>
            Blog
          </Button>
          <Button type="solo" onClick={() => {}}>
            Pricing
          </Button>
          <Button type="solo" onClick={() => {}}>
            Contact Us
          </Button>
        </Section>

        {/* Documentation section */}
        <div className={classes["documentation-section"]}>
          <Section title="Documentation">
            <Button type="solo" onClick={() => {}}>
              Documentation
            </Button>
            <Button type="solo" onClick={() => {}}>
              Release Log
            </Button>
            <Button type="solo" onClick={() => {}}>
              FAQ
            </Button>
            <Button type="solo" onClick={() => {}}>
              Legal
            </Button>
          </Section>
        </div>

        {/* Follow section */}
        <div className={classes["follow-section"]}>
          <Section title="Follow">
            <Button type="outlined" onClick={() => {}}>
              <img src={linkedInIcon} alt="" />
            </Button>
            <Button type="outlined" onClick={() => {}}>
              <img src={facebookIcon} alt="" />
            </Button>
            <Button type="outlined" onClick={() => {}}>
              <img src={instagramIcon} alt="" />
            </Button>
            <Button type="outlined" onClick={() => {}}>
              <img src={twitterIcon} alt="" />
            </Button>
          </Section>
        </div>
      </div>

      {/* Copyright */}
      <div className="container">
        <Divider />

        <div
          className={`flex-row justify-between ${classes["copyright-btns"]}`}
        >
          {/* Buttons */}
          <div className={`flex-row`}>
            <Button type="solo" onClick={() => {}}>
              Privacy
            </Button>

            <Button type="solo" onClick={() => {}}>
              Cookies
            </Button>

            <Button type="solo" onClick={() => {}}>
              Terms Of Use
            </Button>

            <Button type="solo" onClick={() => {}}>
              DPA
            </Button>

            <Button type="solo" onClick={() => {}}>
              Subproccesors
            </Button>
          </div>

          {/* Copyright & Language */}
          <div className={`flex-row ${classes["copyright-language"]}`}>
            <span>Copyright © 2022 AcceleratorApp All Rights Reserved</span>

            <Divider direction="vertical" />

            {/* Language */}
            <Button type="solo" onClick={() => {}}>
              <div className={`flex-row`}>
                <img src={globeIcon} alt="" />
                <span>English</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
