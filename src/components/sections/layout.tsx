import * as React from "react"

import * as styles from "./layout.module.css"

export const Layout: React.FunctionComponent<{
  heading: string
  headingId?: string
  extraClasses?: string[]
}> = (props) => {
  return (
    <div className={["section_container", props.extraClasses].join(" ")}>
      <div className="section_heading">
        <a className={styles.section_heading_link} id={props.headingId}></a>
        <h2>{props.heading}</h2>
      </div>
      <div className="section_body">{props.children}</div>
    </div>
  )
}
