import { Features } from "./Features"
import classes from "./FeaturesSection.module.scss"

export const FeaturesSection = () => {
  return (
    <div className={`container`}>
      <div className={classes["features-list"]}>
        <Features />
      </div>

      <div>
        <div className={classes["upper-title"]}>Community</div>
        <div className={classes["title"]}>Lorem ipsum dolor sit amet</div>
        <div className={classes["subtitle"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  )
}
