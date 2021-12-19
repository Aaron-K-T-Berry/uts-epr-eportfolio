import React from "react"

import * as layoutBodyStyles from "./layout-body.module.css"

export const LayoutBody: React.FunctionComponent = ({ children }) => {
  return <div className={layoutBodyStyles.page}>{children}</div>
}
