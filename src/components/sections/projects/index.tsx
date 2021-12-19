import * as React from "react"
import { Layout } from "../layout"

export const Projects: React.FunctionComponent<{
  heading: string
  professionalProjects: string[]
  publicProjects: string[]
}> = (props) => {
  return (
    <Layout heading={props.heading}>
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
    </Layout>
  )
}
