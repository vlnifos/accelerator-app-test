import classes from "./Button.module.scss"

type Props = {
  type?: "solo" | "outlined"
  children: React.ReactElement | string
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
      className={`${classes.btn} ${btnClasses[props.type || "regular"]}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
