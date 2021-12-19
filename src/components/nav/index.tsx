require("./nav.module.css")

import * as React from "react"

// TODO dynamically create links to sections of the page
export const Nav: React.FunctionComponent<NavProps> = (props) => {
  return (
    <nav>
      {props.children}

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
