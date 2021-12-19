import * as React from "react"

import "./shared.css"

export const Layout: React.FunctionComponent<{
  heading: string
}> = (props) => {
  return (
    <div className="section_container">
      <div className="section_heading">
        <h2>{props.heading}</h2>
      </div>
      <div className="section_body">{props.children}</div>
    </div>
  )
}
