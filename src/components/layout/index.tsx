import React from "react"
import "./global.css"
import "./shared.css"
import "./transitions.css"

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
      />
      {children}
    </div>
  )
}
