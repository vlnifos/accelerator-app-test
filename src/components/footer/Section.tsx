import { Divider } from "components/divider/Divider"
import classes from "./Section.module.scss"

type Props = {
  title: string
  children: React.ReactElement[] | string
}

export const Section = (props: Props) => {
  return (
    <div className={classes.section}>
      <div className={classes.title}>{props.title}</div>

      <Divider />

      <div className={classes.details}>{props.children}</div>
    </div>
  )
}
