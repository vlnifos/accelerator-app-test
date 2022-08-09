import React from "react"
import { Divider } from "components/divider/Divider"
import * as classes from "./Section.module.scss"

type Props = {
  title: string
  children: React.ReactElement[] | string
}

export const Section = (props: Props) => {
  return (
    <div>
      <div className={classes.title}>{props.title}</div>

      <Divider />

      <div className={classes.details}>{props.children}</div>
    </div>
  )
}

export default Section
