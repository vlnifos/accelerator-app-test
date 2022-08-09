import Logo from "assets/images/logo.png"
import { Button } from "components/button/Button"
import classes from "./Header.module.scss"

type Props = {
  isAuth: boolean
}

export const Header = (props: Props) => {
  return (
    <header className={classes.header}>
      <div className="container flex-row justify-between">
        {/* Logo */}
        <div className="flex-row">
          <img src={Logo} alt="img" className={classes.logo} />

          <span>AcceleratorApp</span>
        </div>

        {/* Buttons */}
        <div className={`flex-row ${classes.buttons}`}>
          <Button onClick={() => {}} type={"solo"}>
            Community
          </Button>
          <Button onClick={() => {}} type={"solo"}>
            Modules
          </Button>
          <Button onClick={() => {}} type={"solo"}>
            Company
          </Button>
          <Button onClick={() => {}} type={"solo"}>
            Pricing
          </Button>
          <Button onClick={() => {}} type={"outlined"}>
            Sign In
          </Button>
          <div className={classes["request-demo-btn"]}>
            <Button onClick={() => {}}>Request a Demo</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
