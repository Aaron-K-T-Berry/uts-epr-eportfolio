import * as React from "react"
import "./styles.css"

export const Footer: React.FunctionComponent<{}> = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>
          &#169; {"2021 - 2022 | Created by Aaron Berry, Checkout the repo "}
          <a
            href="https://github.com/Aaron-K-T-Berry/epr-eportfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </div>
    </footer>
  )
}
