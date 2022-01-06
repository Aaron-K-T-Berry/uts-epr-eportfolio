import * as React from "react"
import { ProjectCard, GithubRepoCard } from "../../common/card"
import { GridContainer } from "../../common/grid"
import { TechIconList } from "../../common/tech-icon-list"
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
          <a className={styles.headingLink} id={props.headingId}></a>
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

        <div className={styles.acaProjSummary}>
          <AcademicProjectsSummary />
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

const AcademicProjectsSummary = () => {
  const sectionClass = styles.academicSection
  const sectionHeading = [sectionClass, styles.academicSectionHeading].join(" ")
  const subSectionClass = [sectionClass, styles.academicSectionItem].join(" ")

  const Summary = () => (
    <div className={sectionHeading}>
      <span>
        <h3>Academic Experience and Projects</h3>
        <p>
          I am currently studying at the University of Technology Sydney
          completing a Bachelors of Engineering Majoring in Software Engineering
          expecting to finish my degree in mid 2024. The program is thankfully
          very practical providing me an opportunity to build many cool projects
          highlighted below;
        </p>
      </span>
    </div>
  )

  const projects = [
    <div className={subSectionClass}>
      <span>
        <h4>2019 - 2021 Software Studio</h4>
        <p>
          During the 6 classes involved in this course I was tasked with working
          in a group with 6 to 12 other students to emulate a scrum team and to
          build a software solution for the provided product specification. Each
          semesters class the teams would iterate and create their solutions
          producing all the sprint artefact expected like retrospectives and
          client feedback to continually integrate their feedback into an ideal
          product. Some of the best projects I participated in included;
        </p>
        <p>
          Building a drag and drop quantum equation calculator which was an
          interesting challenge of working out whats the best way to abstract
          the open source quantum computing libraries we found and how we would
          visualize the data structures they used to build the equations into
          something the end user would be able to use. This project was
          presented to a lecturer from the University of Queensland with it
          working well to allow for basic quantum equations to be calculated and
          demonstrated to others showing how the bits in the equation are turned
          through each of the revolutions in the equation. This resulted in a
          perfect mark for the team of 12 involved in this project and the
          solution we built.
        </p>
      </span>
      {/* TODO find an image for firebase */}
      {/* TODO find an image for lambda */}
      <TechIconList
        technologies={["typescript", "react", "express", "jest", "docker"]}
        size="small"
      />
    </div>,
    <div className={subSectionClass}>
      <span>
        <h4>2021 - Data Engineering</h4>
        <p>
          This class offered by UTS outlined how a modern data engineering
          pipeline is constructed focusing on how to build ETL pipelines using
          tools like Python and Apache Airflow. At the time I took this class I
          was already working as a software engineer in a data engineering team
          who was building out custom software for an Airflow stack. Naturally
          going into this class I had a lot of pre-existing knowledge from the
          professional space but this class provided me an excellent opportunity
          in a team of 5 to build an ETL stack with Airflow from scratch to see
          how I could improve the setup within the course restrictions.
        </p>
        <p>
          Whilst building out this project I learned a lot in the area of how to
          effectively manage a team whilst building software particularly in the
          areas of how to effectively manage team members and the required tasks
          to be completed. How to manage async communication was also important
          for me to manage effectively as all the team members all had to work
          remotely due to the COVID-19 lockdowns over the 2021 year.
        </p>
        <p>
          The Airflow stack we built integrated with the Twitter API to extract
          tweet data about selected topics to be monitored. This data was then
          enriched with analytics and sentiment analysis on the tweet contents
          to try and build an analytical and sentiment picture for a particular
          topic being discussed on Twitter. Once assessed on this built solution
          the team achieved full marks on meeting the project specification as
          well as our demonstration of how the data can be used for marketing
          analysis with some simple dashboards using Google data studio.
        </p>
      </span>
      {/* TODO find icon for mysql */}
      {/* TODO find icon for google */}
      <TechIconList
        technologies={["python", "airflow", "docker", "twitter"]}
        size="small"
      />
    </div>,
  ]

  return (
    <>
      <Summary />
      {projects}
    </>
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
