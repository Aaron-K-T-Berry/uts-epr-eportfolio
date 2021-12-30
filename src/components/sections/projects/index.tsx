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
    <Layout heading={props.heading} headingId={props.headingId}>
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
        In my professionally experience i have worked on projects across the
        banking and financial services industry. These projects have ranged from
        frontend and external user focused to more internal roles to develop and
        refine business data in a Data engineering team.
      </p>

      <h3>Developing Scalable And Automated Solution</h3>
      <p>
        Within these projects I always focus on build applications and solutions
        that are scalable into the long term to make the easier to maintain and
        change in the future as business requirements change.
      </p>
      <p>
        To enable this i focus on testing, best practices and automation to make
        the project approachable by any develop so they are comfortable to make
        changes rather than feeling like the project is a house of cards.
      </p>

      <h3>Focus On Testing For Confidence</h3>
      <p>
        I am an advocate for the sensible testing of Javascript and Python
        projects to increase the confidence of developers in the features they
        are building.
      </p>
      <p>
        I have developed unit testing across React PWA's to capture important
        user behavior and business requirements are being met as well as writing
        testing to assure internal develop tooling works as expected when it is
        being integrated into external teams projects.
      </p>

      <h3>Automation In The Cloud</h3>
      <p>
        I am certified as a AWS Solution Architect and have been developing
        solutions for the cloud. Through developing automated infrastructure
        taking away the manual process of deploying environments developers can
        focus more on their business logic rather than debugging deployments.
      </p>
    </span>
  )
}

const PublicProjectSummary = () => {
  return (
    <span>
      <h3>Personal Projects</h3>
      <p>
        In my free time i enjoy working on may personal programming projects
        focusing mainly on virtualization and devops tooling and to maintain my
        frontend development skills.
      </p>
      <p>
        Giving back to the open source community is also important to me as i
        have used many projects in my professional career that has leveraged the
        work of others. I have enjoyed particularly working with typescript
        projects and projects looking to integrate resources into terraform as
        well as proxmox.
      </p>
    </span>
  )
}
