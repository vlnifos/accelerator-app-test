import classes from "./Button.module.scss"
import cx from "classnames"

type Props = {
  type?: "solo" | "outlined"
  fullWidth?: boolean
  children: React.ReactElement | React.ReactElement[] | string
  onClick: () => void
}

export const Button = (props: Props) => {
  const btnClasses = {
    regular: classes["btn-regular"],
    solo: classes["btn-solo"],
    outlined: classes["btn-outlined"],
  }

  return (
    <button
      className={cx(classes.btn, btnClasses[props.type || "regular"], {
        [classes["btn-full-width"]]: props.fullWidth,
      })}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
