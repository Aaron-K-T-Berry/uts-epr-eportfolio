import * as React from "react"
import { Layout } from "../layout"
import { FlexBox, FlexItem } from "../../common/flex-box"
import { ProjectCard, GithubRepoCard } from "../../common/card"

export const Projects: React.FunctionComponent<{
  heading: string
  professionalProjects: {
    title: string
    summary: string
    achievements: string[]
  }[]
  publicProjects: { title: string; summary: string; achievements: string[] }[]
}> = (props) => {
  return (
    <Layout heading={props.heading}>
      <FlexBox>
        {props.professionalProjects.map((project) => (
          <FlexItem>
            <ProjectCard
              title={project.title}
              desc={project.summary}
              achievements={project.achievements}
            />
          </FlexItem>
        ))}
      </FlexBox>
      <FlexBox>
        {props.publicProjects.map((project) => (
          <FlexItem>
            <GithubRepoCard title={project.title} desc={project.summary} />
          </FlexItem>
        ))}
      </FlexBox>
    </Layout>
  )
}
