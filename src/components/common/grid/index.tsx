import * as React from "react"

export const GridContainer: React.FunctionComponent<{}> = (props) => {
  return (
    <div
      className="grid_container"
    >
      {props.children}
    </div>
  )
}
