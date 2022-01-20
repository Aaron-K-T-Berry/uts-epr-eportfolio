import * as React from "react"
import { Link } from "../link"
import "./styles.css"

export const Footer: React.FunctionComponent<{}> = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>
          &#169; {"2021 - 2022 | Created by Aaron Berry, "}
          <Link href="https://github.com/Aaron-K-T-Berry/epr-eportfolio" text="Checkout the repo here" outbound={true} chevron={true} />
        </p>
      </div>
    </footer>
  )
}
