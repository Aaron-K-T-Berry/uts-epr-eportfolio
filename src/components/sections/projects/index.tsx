import * as React from "react"
import RepoCards from "react-gh-repo-cards"

export const Projects: React.FunctionComponent<{
  heading: string
  professionalProjects: string[]
  publicProjects: string[]
}> = (props) => {
  return (
    <div>
      <h2>{props.heading}</h2>
      <ul>
        {props.professionalProjects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <ul>
        {props.publicProjects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

    </div>
  )
}
