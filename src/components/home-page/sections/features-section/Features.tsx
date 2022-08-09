import React from "react"
import * as classes from "./Features.module.scss"
import Diagram from "images/Diagram.png"
import Rocket from "images/Rocket.png"
import Cubes from "images/Cubes.png"
import Doc from "images/Doc.png"
import Growth from "images/Growth.png"

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

export default Features
