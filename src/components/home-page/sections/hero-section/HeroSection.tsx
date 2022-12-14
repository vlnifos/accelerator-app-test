import React from "react"
import { Button } from "components/button/Button"
import looper from "images/looper.svg"
import video from "images/video.svg"
import playIcon from "images/play-icon.svg"
import * as classes from "./HeroSection.module.scss"

export const HeroSection = () => {
  return (
    <div className={classes.heroSectionBackground}>
      <img className={classes.looper} src={looper} alt="img" />

      <div className={`container ${classes.heroSection}`}>
        {/* Upper title */}
        <div className={classes.upperTitle}>Join in and connect</div>

        {/* Title */}
        <div className={classes.title}>To faster your innovation potential</div>

        {/* Subtitle */}
        <div className={classes.subtitle}>
          AcceleratorApp Innovation Community — Tools and community to
          facilitate innovation between all members of our community
        </div>

        {/* Schedule a Demo button */}
        <div className={classes.scheduleDemoBtn}>
          <Button onClick={() => {}}>Schedule a Demo</Button>
        </div>

        <div className={classes.watchVideo}>
          <Button onClick={() => {}}>
            <div className="flex-row">
              <img src={playIcon} alt="img" />

              <span>Watch Video</span>
            </div>
          </Button>

          <img src={video} alt="img" />
        </div>
      </div>
    </div>
  )
}
export default HeroSection
