import { Button } from "components/button/Button"
import { Divider } from "components/divider/Divider"
import { Input } from "components/input/Input"
import React from "react"
import * as classes from "./Footer.module.scss"
import { Section } from "./Section"
import { Badge } from "components/badge/Badge"

import linkedInIcon from "images/linkedIn.svg"
import facebookIcon from "images/facebook.svg"
import instagramIcon from "images/instagram.svg"
import twitterIcon from "images/twitter.svg"
import globeIcon from "images/globe.svg"
import arrowIcon from "images/arrow.svg"

export const Footer = () => {
  const [email, setEmail] = React.useState("")

  const handleSubmit = () => {
    // Submit email subscription
    setEmail("")
  }

  return (
    <footer className={classes.footer}>
      {/* Email */}
      <div className={classes.emailContainer}>
        {/* Title */}
        <div className={classes.title}>Join our growing community</div>

        {/* Email subscription */}
        <div className={classes.emailSubscription}>
          Sign up for news and updates about AcceleratorApp
        </div>

        {/* Email input */}
        <div className="flex-row">
          <Input
            value={email}
            onChange={(val) => setEmail(val)}
            placeholder="Your email"
            onSubmit={handleSubmit}
          />

          <Button type="solo" onClick={handleSubmit}>
            <img src={arrowIcon} alt="" />
          </Button>
        </div>

        <Divider />
      </div>

      {/* Info */}
      <div className={`container ${classes.infoContainer}`}>
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
            <span>Carrers</span>
            <Badge>We're hiring!</Badge>
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
        <div className={classes.documentationSection}>
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
        <div className={classes.followSection}>
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
      <div className={`container ${classes.copyright}`}>
        <Divider />

        <div className={`flex-row justify-between ${classes.copyrightBtns}`}>
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
          <div className={`flex-row ${classes.copyrightLanguage}`}>
            <span>Copyright © 2022 AcceleratorApp All Rights Reserved</span>

            <Divider direction="vertical" />

            {/* Language */}
            <Button type="solo" onClick={() => {}}>
              <div className={`flex-row`}>
                <img src={globeIcon} alt="" />
                <span className={classes.language}>English</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
