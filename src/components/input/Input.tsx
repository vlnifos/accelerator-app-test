import classes from "./Input.module.scss"

type Props = {
  value: string
  placeholder?: string
  onChange: (val: string) => void
  onSubmit?: () => void
}

export const Input = (props: Props) => {
  return (
    <input
      className={classes.input}
      type="text"
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e.target.value)}
      onSubmit={props.onSubmit}
    />
  )
}
