import classes from "./Divider.module.scss"

type Props = {
  direction?: "vertical" | "horizontal"
}

export const Divider = (props: Props) => {
  const directionClass = {
    vertical: classes.vertical,
    horizontal: classes.horizontal,
  }

  return (
    <hr
      className={`${classes.divider} ${
        directionClass[props.direction || "horizontal"]
      }`}
    />
  )
}
