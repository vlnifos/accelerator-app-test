import classes from "./Features.module.scss"
import Diagram from "assets/images/Diagram.png"
import Rocket from "assets/images/Rocket.png"
import Cubes from "assets/images/Cubes.png"
import Doc from "assets/images/Doc.png"
import Growth from "assets/images/Growth.png"

export const Features = () => {
  return (
    <div className={classes.features}>
      <Feature image={Diagram} />
      <Feature image={Rocket} />
      <Feature image={Cubes} />
      <Feature image={Doc} />
      <Feature image={Growth} />
    </div>
  )
}

type FeatureProps = {
  image: any
}
const Feature = (props: FeatureProps) => {
  return (
    <div className={classes.feature}>
      <img src={props.image} alt="" />
    </div>
  )
}
