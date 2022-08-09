import React from "react"
import { Button } from "components/button/Button"
import * as classes from "./CookieWarning.module.scss"

type Props = {
  handleCookieAction: () => void
}

export const CookieWarning = (props: Props) => {
  return (
    <div className={classes.cookieWarning}>
      <div className={`flex-row justify-between ${classes.cookieContainer}`}>
        <div className={`flex-row`}>
          <span>
            By using this site on the AcceleratorApp network, you agree with our
            use of cookies.
          </span>
        </div>

        {/* Buttons */}
        <div className={`flex-row ${classes.btns}`}>
          <div className="flex-row">
            <Button onClick={props.handleCookieAction}>Accept cookies</Button>

            <div className={classes.moreBtn}>
              <Button type={"outlined"} onClick={() => {}}>
                Want to know more?
              </Button>
            </div>
          </div>

          <div className={classes.policyBtn}>
            <Button type={"solo"} onClick={() => {}}>
              Read our Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieWarning
