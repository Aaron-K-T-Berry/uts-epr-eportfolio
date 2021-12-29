import * as React from "react"

import { Layout } from "../layout"
import { ProjectCard, GithubRepoCard } from "../../common/card"
import { useRepoData } from "./data"
import { GridContainer } from "../../common/grid"

export const Projects: React.FunctionComponent<{
  heading: string
  headingId: string
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
    <Layout heading={props.heading} headingId={props.headingId}>
      <br />
      <GridContainer>
        {props.professionalProjects.map((project, index) => {
          if (index > 0) {
            return (
              <ProjectCard
                title={project.title}
                desc={project.summary}
                achievements={project.achievements}
              />
            )
          } else {
            return (
              <div className="grid_item_focus">
                <ProjectCard
                  title={project.title}
                  desc={project.summary}
                  achievements={project.achievements}
                />
              </div>
            )
          }
        })}
      </GridContainer>
      <br />
      <br />
      <GridContainer>
        {props.publicProjects.map((project, index) => {
          const currentRepoData = filteredRepos.filter(
            (repo) => project.title === repo.name
          )[0]

          if (index > 0) {
            return (
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
            )
          } else {
            return (
              // <div className="grid_item_focus">
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
              // </div>
            )
          }
        })}
      </GridContainer>
    </Layout>
  )
}
