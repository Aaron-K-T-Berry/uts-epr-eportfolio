import * as React from "react"

export const Layout: React.FunctionComponent<{
  heading: string
  headingId?: string
}> = (props) => {
  return (
    <div className="section_container">
      <div className="section_heading">
        <a id={props.headingId}></a>
        <h2>{props.heading}</h2>
      </div>
      <div className="section_body">{props.children}</div>
    </div>
  )
}
