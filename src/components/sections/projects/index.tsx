import * as React from "react"
import { ProjectCard, GithubRepoCard } from "../../common/card"
import { GridContainer } from "../../common/grid"
import { useRepoData, data } from "./data"
import * as styles from "./styles.module.css"

export const Projects: React.FunctionComponent<IProjectsSectionProps> = (
  props
) => {
  const repoData = useRepoData()

  // Filter out just the relevant repo data we care about based on the inputs
  const providedRepoKeys = data.publicProjects.map((repo) => repo.title)
  const filteredRepos = repoData.filter((repo) =>
    providedRepoKeys.includes(repo.name)
  )

  return (
    <section className={styles.projectsSection}>
      <div className={styles.wrapper}>
        <div>
          <span className={styles.headingLink} id={props.headingId}></span>
          <h2>Projects</h2>
          <h3>Selection of some of my professional projects and experience</h3>
        </div>

        <div className={styles.profExpSummary}>
          <ProfessionalExperienceSummary />
        </div>

        <div className={styles.profProjGrid}>
          <ProfessionalProjectsGrid
            professionalProjects={data.professionalExp}
          />
        </div>

        <div className={styles.pubProjSummary}>
          <PublicProjectSummary />
        </div>

        <div className={styles.pubProjGrid}>
          <PublicProjectGrid
            publicProjects={data.publicProjects}
            filteredRepos={filteredRepos}
          />
        </div>
      </div>
    </section>
  )
}

const ProfessionalExperienceSummary = () => {
  return (
    <span>
      <p>
        In my professional experience I have found myself focusing on delivering
        consistent best practice and innovation in the following fields of
        software Engineering to try and maximize teams output whilst reducing
        the amount of maintenance required day to day.
      </p>

      <h4>Developing scalable and maintainable software</h4>
      <p>
        For any of the software that I build I focus on assuring that the
        solution is built to scale in the future rather than just to get the job
        done this sprint. Building this scalable and maintainable software for
        the future allows teams to develop faster and with less defects by
        reducing the amount of rework needed later as well forcing teams to
        address the key issues in their applications sooner rather than on zero
        day.
      </p>

      <h4>Automated DevOps solutions</h4>
      <p>
        I am certified as a <b>AWS Solution Architect</b> and have been
        developing automated CICD solutions for the cloud. Through developing
        automated infrastructure and taking away the manual process of deploying
        environments developers can focus more on their business logic rather
        than building and debugging deployments. This focus also provides an
        opportunity to standardize and reduce that maintenance needed for
        software through consistent CICD patterns.
      </p>
    </span>
  )
}

const ProfessionalProjectsGrid: React.FunctionComponent<{
  professionalProjects: ProfessionalProject[]
}> = (props) => {
  return (
    <GridContainer>
      {props.professionalProjects.map((project, index) => {
        return (
          <div className="grid_item_focus">
            <ProjectCard
              title={project.title}
              desc={project.summary}
              achievements={project.achievements}
              technologies={project.technologies}
            />
          </div>
        )
      })}
    </GridContainer>
  )
}

const PublicProjectSummary = () => {
  return (
    <span>
      <h3>Open Source Projects</h3>
      <p>
        In my free time I enjoy working on may personal programming projects
        focusing mainly on virtualization and devops tooling. Where possible I
        like to share what im building and to{" "}
        <a href="#writing">write about it</a> to make someone elses learning
        journey a bit easier. Where possible I like to give back to the open
        source community by contributing fixes and features for the tooling that
        I use day to day and has saved me plenty of time and headaches.
      </p>
    </span>
  )
}

const PublicProjectGrid: React.FunctionComponent<{
  publicProjects: PublicProject[]
  filteredRepos: any[]
}> = (props) => {
  return (
    <GridContainer>
      {props.publicProjects.map((project, index) => {
        const currentRepoData = props.filteredRepos.filter(
          (repo) => project.title === repo.name
        )[0]

        if (index > 0) {
          return (
            <GithubRepoCard
              title={project.title}
              desc={project.summary}
              url={currentRepoData?.url}
              starGazerCount={currentRepoData?.stargazerCount}
              forkCount={currentRepoData?.forkCount}
              language={{
                name: currentRepoData?.primaryLanguage?.name,
                colour: currentRepoData?.primaryLanguage?.color,
              }}
              technologies={project.technologies}
            />
          )
        } else {
          return (
            <div className="grid_item_focus">
              <GithubRepoCard
                title={project.title}
                desc={project.summary}
                url={currentRepoData?.url}
                starGazerCount={currentRepoData?.stargazerCount}
                forkCount={currentRepoData?.forkCount}
                language={{
                  name: currentRepoData?.primaryLanguage?.name,
                  colour: currentRepoData?.primaryLanguage?.color,
                }}
                technologies={project.technologies}
              />
            </div>
          )
        }
      })}
    </GridContainer>
  )
}

interface IProjectsSectionProps {
  headingId: string
}

export interface PublicProject {
  title: string
  summary: string[]
  achievements: string[]
  technologies?: string[]
}

export interface ProfessionalProject {
  title: string
  summary: string[]
  achievements: string[]
  technologies?: string[]
}
