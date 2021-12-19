require("./nav.module.css")
import * as React from "react"

export const Nav: React.FunctionComponent<NavProps> = (props) => {
  return (
    <nav>
      <h1>{props.children}</h1>

      <ul>
        {props.sections.map((section) => {
          const link = `#${section.toLowerCase()}`
          const text = section

          return (
            <li>
              <a href={link}>{text}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

interface NavProps {
  sections: string[]
}
