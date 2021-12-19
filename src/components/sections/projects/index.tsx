import * as React from "react"

import "../shared.css"

export const Projects: React.FunctionComponent<{
  heading: string
  professionalProjects: string[]
  publicProjects: string[]
}> = (props) => {
  return (
    <div className="section_container">
      <div className="section_heading">
        <h2>{props.heading}</h2>
      </div>

      <div className="section_body">
        <ul>
          {props.professionalProjects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
        <br />
        <ul>
          {props.publicProjects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
