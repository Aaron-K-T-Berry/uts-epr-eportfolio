import * as React from "react"

import { Layout } from "../layout"
import { ProjectCard, GithubRepoCard } from "../../common/card"
import { useRepoData } from "./data"
import { GridContainer } from "../../common/grid"

import * as styles from "./styles.module.css"

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
    <Layout
      heading={props.heading}
      headingId={props.headingId}
      extraClasses={["projects"]}
    >
      {/* Professional projects */}
      <div className={styles.wrapper}>
        {/* Summary */}
        <div className={styles.summaryWrapper}>
          <ProfessionalExperienceSummary />
        </div>
        {/* Grid Project */}
        <div className={styles.gridWrapper}>
          <GridContainer>
            {props.professionalProjects.map((project, index) => {
              return (
                <div className="grid_item_focus">
                  <ProjectCard
                    title={project.title}
                    desc={project.summary}
                    achievements={project.achievements}
                  />
                </div>
              )
            })}
          </GridContainer>
        </div>
      </div>

      {/* Personal Projects */}
      <div className={styles.wrapper}>
        {/* Summary */}
        <div className={styles.summaryWrapper}>
          <PublicProjectSummary />
        </div>
        {/* Grid Project */}
        <div className={styles.gridWrapper}>
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
                  <div className="grid_item_focus">
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
                  </div>
                )
              }
            })}
          </GridContainer>
        </div>
      </div>
    </Layout>
  )
}

const ProfessionalExperienceSummary = () => {
  return (
    <span>
      <p>
        In my professional experience i have found myself focusing on delivering
        consistent best practice and innovation in the following fields of
        Software Engineering to try and maximize teams output whilst reducing
        their defects.
      </p>

      <h3>Developing Scalable and Maintainable Software</h3>
      <p>
        For any oif the software that i build i focus on assuring that the
        solution is built to scale in the future rather than just to get the job
        done this sprint. Building this scalable and maintainable software for
        the future allows teams to develop faster and with less defects by
        reducing the amount of rework needed later.
      </p>

      <h3>Automated DevOps Solutions</h3>
      <p>
        I am certified as a AWS Solution Architect and have been developing
        automated CICD solutions for the cloud. Through developing automated
        infrastructure and taking away the manual process of deploying
        environments developers can focus more on their business logic rather
        than building and debugging deployments.
      </p>
      <p></p>
    </span>
  )
}

const PublicProjectSummary = () => {
  return (
    <span>
      <h3>Open Source Projects</h3>
      <p>
        In my free time i enjoy working on may personal programming projects
        focusing mainly on virtualization and devops tooling. Where possible i
        like to share what im building and to write about it to make someone
        elses learning journey a bit easier.
      </p>
      <p>
        Where possible i like to give back to the open source community by
        contributing fixes and features for the tooling that i use day to day
        and has saved me plenty of time and headaches.
      </p>
    </span>
  )
}
