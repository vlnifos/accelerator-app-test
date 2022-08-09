import { Divider } from "components/divider/Divider"
import checkmark from "assets/images/checkmark.svg"
import classes from "./Card.module.scss"
import { Button } from "components/button/Button"

export type FeatureCardProps = {
  image: any
  title: string
  text: string
  features: string[]
  action: {
    title: string
    handler: () => void
  }
}

export const Card = (props: FeatureCardProps) => {
  const renderFeatures = () => {
    return props.features.map((x) => (
      <div className={`flex-row ${classes.feature}`} key={x}>
        <img src={checkmark} alt="" />
        <span>{x}</span>
      </div>
    ))
  }

  return (
    <div className={`${classes.card}`}>
      <div className={`flex-row ${classes.title}`}>
        <img src={props.image} alt="" />
        <span>{props.title}</span>
      </div>

      <div className={classes.text}>{props.text}</div>

      <div className={classes.divider}>
        <Divider />
      </div>

      <div className={classes["features-title"]}>Popular Features</div>

      <div>{renderFeatures()}</div>

      <div className={classes.action}>
        <Button onClick={props.action.handler} fullWidth>
          {props.action.title}
        </Button>
      </div>
    </div>
  )
}
