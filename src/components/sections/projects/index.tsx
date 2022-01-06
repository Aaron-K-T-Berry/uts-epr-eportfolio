import * as React from "react"
import { ProjectCard, GithubRepoCard } from "../../common/card"
import { GridContainer } from "../../common/grid"
import * as styles from "./styles.module.css"
import { useRepoData } from "./data"
import { TechIconList } from "../../common/tech-icon-list"

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
        In my professional experience i have found myself focusing on delivering
        consistent best practice and innovation in the following fields of
        Software Engineering to try and maximize teams output whilst reducing
        their defects.
      </p>

      <h4>Developing Scalable and Maintainable Software</h4>
      <p>
        For any oif the software that i build i focus on assuring that the
        solution is built to scale in the future rather than just to get the job
        done this sprint. Building this scalable and maintainable software for
        the future allows teams to develop faster and with less defects by
        reducing the amount of rework needed later.
      </p>

      <h4>Automated DevOps Solutions</h4>
      <p>
        I am certified as a AWS Solution Architect and have been developing
        automated CICD solutions for the cloud. Through developing automated
        infrastructure and taking away the manual process of deploying
        environments developers can focus more on their business logic rather
        than building and debugging deployments.
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
          highlighted below.
        </p>
      </span>
    </div>
  )

  const projects = [
    <div className={subSectionClass}>
      <span>
        <h4>2019 - 2021 Software Studio</h4>
        <p>
          During the 6 classes involved in this course i was tasked with working
          in a group with 6 to 12 other students to emulate a scrum team and to
          build a software solution for the provided product spec. Each
          semesters class the teams would iterate and create their solutions
          producing all the sprint artefact expected like retrospectives and
          client feedback to continually integrate their feedback into an ideal
          product. Some of the best projects I participated in included;
        </p>
        <p>
          Building a drag and drop Quantum equation calculator which was an
          interesting challenge of working out whats the best way to abstract
          the quantum computing libraries we found and how we would visualize
          the data structures they used to build the equations into something
          the end user would be able to use. This project was presented to a
          lecture from the University of Queensland with it working well to
          allow for basic quantum equations to be calculated and demonstrated to
          others on how each of the bits in the equation is turned through each
          of the revolutions in the equation, this resulted in a perfect mark
          for the team of 12 involved in this project.
        </p>
      </span>
      <TechIconList technologies={["typescript", "express", "jest", "docker"]} size="small" />
    </div>,
    <div className={subSectionClass}>
      <span>
        <h4>2021 - Data Engineering</h4>
        <p>
          This class offered by UTS outlined how a modern data engineering
          pipeline is constructed focusing on how to build ETL pipelines using
          tools like python and apache airflow. At the time i took this class i
          was already working as a software engineer in a data engineering team
          who was building out custom software for an airflow stack. Naturally
          going into this class i had a lot of preexisting knowledge from the
          professional space but this class provided me an excellent opportunity
          in a team of 5 to build a Data Engineering software stack with Airflow
          from scratch.
        </p>
        <p>
          Whilst building out this project i learned a lot in the area of how to
          effectively manage a team whilst building out the Airflow stack
          particularly in the areas of how to effectively manage team members
          and the required tasks to be completed. How to manage async
          communication was also important for me to learn how to manage
          effectively as all the team members all had to work remotely due to
          the covid 19 lowdowns.
        </p>
        <p>
          The Airflow stack we built integrated with the twitter API to extract
          tweet data about selected topics to be monitored. This data was then
          enriched with analytics and sentiment analysis on the tweet contents
          to try and build and analytical and sentiment picture for a particular
          topic being discussed on twitter. Once assessed this solution got the
          team full marks on meeting the project specification as well as our
          demonstration of how the data can be used for marketing analysis with
          some simple dashboards using google data desk.
        </p>
      </span>
      <TechIconList technologies={["python", "airflow", "docker"]} size="small" />
    </div>,
  ]

  return (
    <>
      <Summary />
      {projects}
    </>
  )
}

const data: {
  heading: string;
  professionalExp: ProfessionalProject[]
  publicProjects: PublicProject[]
} = {
  heading: "Development Projects",
  professionalExp: [
    {
      title: "Data engineering with airflow and snowflake",
      summary: [
        "Worked as a software engineer on a data engineering team to develop custom software and data pipelines to analyse private markets asset data. The platform consisted primarily of Airflow on AWS ECS, Snowflake for a Data warehouse and other tools like DBT and Liquid base for warehouse administration.",
        "The data platform i worked on encompassed the ingesting of multiple different external providers from excel files, external vendor apis, existing databases etc ingesting all of the data into the Snowflake platform. The work on this team focused on developing solutions that could be efficiently scaled and still be effectively managed with a small team to not require as much maintenance through a focuses on testing and interfaces in the pipeline. whilst leveraging the features of the AWS platforms services where possible",
      ],
      achievements: [
        "Developing custom plugins and operators on the Airflow platform to integrate new features and tools",
        "Administering a Snowflake data warehouse scalably with many tenant business units and use cases",
        "Integrating DevOps best practices into a Data engineering stack",
        "Monitoring and logging of data engineering workflows with Datadog",
      ],
      technologies: [
        "python",
        "airflow",
        "snowflake",
        "docker",
        "aws"
      ],
    },
    {
      title: "Building react applications as tableau extensions",
      summary: [
        "Within my time on the data engineering team we had to support the use of multiple analytic platforms by the tenant users such as tableau. The team wanted to support more effective inputting of data commentary directly inside platforms like tableau and through the use of its extensions feature i developed a full stack application to allow business users to select data in their dashboards and to apply commentary on that data that could be stored in an external system.",
        "The web application was built using React for the frontend and express js for the api layer with data being pushed into a Snowflake data layer. Through this project I and the team where able to demonstrate how a modern web application stack can be introduced to a business and how through the investment into testing and automation it can be supported by a small team whilst still being able to effectively address new features and use cases.",
      ],
      achievements: [
        "10k Requests a month from internal business users",
        "Integrated a custom web app experience inside another application (tableau) in a managed workload for the data engineering team",
      ],
      technologies: [
        "typescript",
        "react",
        "materialui",
        "express",
        "jest",
        "snowflake",
        "docker",
        "aws"
      ],
    },
  ],
  publicProjects: [
    {
      title: "packer-ubuntu-proxmox-template",
      summary: [
        "Using packer i developed a template to allow the easy configuration of KVM images for ubuntu. I used this project also to write an article on how the image can be used with packer to push images to a proxmox hypervisor environment.",
      ],
      achievements: [
        "Using linux features to programmatically configure os from base ISO's",
      ],
    },
    {
      title: "jsonresume-theme-spartan-extended",
      summary: [
        "This was originally based of another project that i forked to add new features like better handling of australian date formats and too add new fields for tracking your present education and work as well as automatically calculating working periods.",
      ],
      achievements: [
        "Working with responsive CSS best practices",
        "Developing sites with handlebars",
      ],
    },
    {
      title: "proxmox-api-go",
      summary: [
        "For the proxmox-api-go project i have contributed with expanding the API developed in GO to integrate more features that are available in the proxmox API to allow for the easier provisioning of KVM and LXC images in a proxmox environment.",
      ],
      achievements: ["Learning GO development best practices"],
    },
  ],
}

interface IProjectsSectionProps {
  headingId: string
}

interface PublicProject {
  title: string
  summary: string[]
  achievements: string[]
  technologies?: string[]
}

interface ProfessionalProject {
  title: string
  summary: string[]
  achievements: string[]
  technologies?: string[]
}
