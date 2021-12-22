import * as React from "react"

require("./nav.module.css")

export const Nav: React.FunctionComponent<NavProps> = (props) => {
  return (
    <nav>
      <h1>{props.children}</h1>

      <ul>
        {props.sections.map((section, index) => {
          const link = `#${section.id}`
          const text = section.title

          return (
            <li key={`${text}-${index}`}>
              <a href={link}>{text}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

interface NavProps {
  sections: { title: string; id: string }[]
}
