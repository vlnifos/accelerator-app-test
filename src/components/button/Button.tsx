import React from "react"
import * as classes from "./Button.module.scss"
import cx from "classnames"

type Props = {
  type?: "solo" | "outlined"
  fullWidth?: boolean
  children: React.ReactElement | React.ReactElement[] | string
  onClick: () => void
}

export const Button = (props: Props) => {
  const btnClasses = {
    regular: classes.btnRegular,
    solo: classes.btnSolo,
    outlined: classes.btnOutlined,
  }

  return (
    <button
      className={cx(classes.btn, btnClasses[props.type || "regular"], {
        [classes.btnFullWidth]: props.fullWidth,
      })}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
