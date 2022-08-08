import { Button } from "components/button/Button"
import classes from "./CookieWarning.module.scss"

type Props = {
  handleCookieAction: () => void
}

export const CookieWarning = (props: Props) => {
  return (
    <div className={classes["cookie-warning"]}>
      <div className="container flex-row justify-between">
        <div className="flex-row">
          <span>
            By using this site on the AcceleratorApp network, you agree with our
            use of cookies.
          </span>
        </div>

        {/* Buttons */}
        <div className="flex-row">
          <Button onClick={props.handleCookieAction}>Accept cookies</Button>

          <Button type={"outlined"} onClick={() => {}}>
            Want to know more?
          </Button>

          <Button type={"solo"} onClick={() => {}}>
            Read our Cookie Policy
          </Button>
        </div>
      </div>
    </div>
  )
}
