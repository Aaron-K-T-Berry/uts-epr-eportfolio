import * as React from "react"

import { Layout } from "../layout"
import { FlexBox, FlexItem } from "../../common/flex-box"
import { ProjectCard, GithubRepoCard } from "../../common/card"
import { useRepoData } from "./data"

export const Projects: React.FunctionComponent<{
  heading: string
  professionalProjects: {
    title: string
    summary: string[]
    achievements: string[]
  }[]
  publicProjects: { title: string; summary: string[]; achievements: string[] }[]
}> = (props) => {
  const repoData = useRepoData()

  // Filter out just the relevant repo data we care about based on the inputs
  const providedRepoKeys = props.publicProjects.map((repo) => repo.title)
  const filteredRepos = repoData.filter((repo) =>
    providedRepoKeys.includes(repo.name)
  )

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
        {props.publicProjects.map((project) => {
          const currentRepoData = filteredRepos.filter(
            (repo) => project.title === repo.name
          )[0]

          return (
            <FlexItem>
              <GithubRepoCard
                title={project.title}
                desc={project.summary}
                url={currentRepoData?.url}
                startGazerCount={currentRepoData?.stargazerCount}
                forkCount={currentRepoData?.forkCount}
                language={{
                  name: currentRepoData?.primaryLanguage?.name,
                  colour: currentRepoData?.primaryLanguage?.color,
                }}
              />
            </FlexItem>
          )
        })}
      </FlexBox>
    </Layout>
  )
}
