import classes from "./Badge.module.scss"

type Props = {
  children: string | React.ReactElement | React.ReactElement[]
}

export const Badge = (props: Props) => {
  return <span className={classes.badge}>{props.children}</span>
}
