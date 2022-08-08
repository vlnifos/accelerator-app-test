import { Button } from "components/button/Button"
import looper from "assets/images/looper.svg"
import video from "assets/images/video.svg"
import playIcon from "assets/images/play-icon.svg"
import classes from "./HeroSection.module.scss"

export const HeroSection = () => {
  return (
    <div className={classes["hero-section-background"]}>
      <img className={classes.looper} src={looper} alt="img" />

      <div className={`container ${classes["hero-section"]}`}>
        {/* Upper title */}
        <div className={classes["upper-title"]}>Join in and connect</div>

        {/* Title */}
        <div className={classes["title"]}>
          To faster your innovation potential
        </div>

        {/* Subtitle */}
        <div className={classes["subtitle"]}>
          AcceleratorApp Innovation Community — Tools and community to
          facilitate innovation between all members of our community
        </div>

        <div className={classes["watch-video"]}>
          <Button onClick={() => {}}>
            <div className="flex-row">
              <img src={playIcon} alt="img" />

              <span>Watch Video</span>
            </div>
          </Button>

          <img src={video} alt="img" />
        </div>

        {/* Schedule a Demo button */}
        <Button onClick={() => {}}>Schedule a Demo</Button>
      </div>
    </div>
  )
}
