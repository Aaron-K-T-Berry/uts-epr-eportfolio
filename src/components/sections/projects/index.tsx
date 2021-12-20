import * as React from "react"
import { Layout } from "../layout"
import { FlexBox } from "../../common/flex-box"
import { ProjectCard } from "../../common/card"


export const Projects: React.FunctionComponent<{
  heading: string
  professionalProjects: { title: string, summary: string, achievements: string[] }[]
  publicProjects: { title: string, summary: string, achievements: string[] }[]
}> = (props) => {
  return (
    <Layout heading={props.heading}>
      <FlexBox>
        {props.professionalProjects.map((project) => (
          <ProjectCard title={project.title} desc={project.summary} className="flex_item" />
        ))}
      </FlexBox>
      <FlexBox>
        {props.publicProjects.map((project) => (
          <ProjectCard title={project.title} desc={project.summary} className="flex_item" />
        ))}
      </FlexBox>
    </Layout>
  )
}
