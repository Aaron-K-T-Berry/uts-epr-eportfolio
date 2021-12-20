import * as React from "react"

export const FlexBox: React.FunctionComponent<{}> = (props) => {
  return <div className="flex_container">
    {props.children}
  </div>
}
