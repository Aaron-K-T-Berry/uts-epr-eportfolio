import * as React from "react"
import { Terminal, TerminalLine } from "../../common/terminal-output"
import { TechIconList } from "../../common/tech-icon-list"
import { useOnScreen } from "../../../utility/on-screen-hook"
import * as styles from "./styles.module.css"

interface SkillsProps {
  headingId: string
}

interface Skill {
  summary: string
  extras: string[]
}

export const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.sectionWrapper}>
        <div className={styles.headingWrapper}>
          <a className={styles.headingLink} id={props.headingId}></a>
          <h2>Skills & Tools</h2>
          <h3>My Toolbox & Things I Can Do</h3>
        </div>

        {/* How i use skills and tools in projects */}
        <div>
          And these are just some of the ways i bring it all together
          <TerminalShowcase skills={data.skills} />
        </div>

        {/* Specific list of the skills and tools i use */}
        <div className={styles.detailsSkillsWrapper}>
          The skills, tools and technologies I use to bring your products to
          life:
          <TechIconList
            technologies={[
              "javascript",
              "typescript",
              "python",
              "java",
              "bash",
              "react",
              "express",
              "jest",
              "gatsby",
              "materialui",
              "aws",
              "azure",
              "digitalocean",
              "linux",
              "docker",
              "git"
            ]}
            styles={{
              listPadding: "2rem 0 2rem 0",
              iconPadding: "0 0 1rem 0",
              color: "white"
            }}
            size="large"
            displayName={true}
            spreadItems={true}
          />
        </div>

        <div>
          <LeaderShipSection />
        </div>
      </div>
    </section>
  )
}

const TerminalShowcase: React.FunctionComponent<{ skills: Skill[] }> = (
  props
) => {
  const [animationState, setAnimationState] = React.useState(
    props.skills.map((skill, index) => (index == 0 ? true : false))
  )
  const ref = React.useRef()
  const isVisible = useOnScreen(ref)

  return (
    <div ref={ref} className={styles.terminalWrapper}>
      <Terminal title="-- bash">
        {props.skills.map((skill, index) => {
          return (
            <TerminalLine
              key={`${skill}-${index}`}
              skill={skill}
              show={animationState[index]}
              isVisible={isVisible}
              onCompleteFunc={() => {
                let currentState = [...animationState]
                currentState[index + 1] = true
                setAnimationState(currentState)
              }}
              delay={1500}
            />
          )
        })}
      </Terminal>
    </div>
  )
}

const LeaderShipSection: React.FunctionComponent<{}> = () => {
  const sectionClass = styles.leadershipSection
  const subSectionClass = [sectionClass, styles.leadershipSectionItem].join(" ")

  return (
    <>
      <div className={sectionClass}>
        <span>
          <h4>Leadership</h4>
          <p>
            Some of the most successful projects I have worked on have been ones
            where i have felt like i have been able to contribute some leave of
            leadership over the project so i can have some level of ownership
            and accountability of its outputs. Some of my key leadership
            highlights include.
          </p>
        </span>
      </div>

      <div className={subSectionClass}>
        <span>
          <h5>Introducing of new technology stacks</h5>
          <p>
            During this project the organization did not currently have a
            standard pattern for building and deploying modern web applications
            to production. This stack was built with React, Material Ui and
            ExpressJs to build a modern, scalable and maintainable web
            application.
          </p>
          <p>
            After i conducted the initial proof of concept for the project i was
            able to lead a team of developers to build this application in 6
            months using feedback from end users. This stack was successfully
            deployed to production without any major defects.
          </p>
        </span>
      </div>

      <div className={subSectionClass}>
        <span>
          <h5>Continuous improvements of Airflow environments</h5>
          <p>
            With my time working on a data engineering team we maintained and
            developed on a self managed Airflow stack running on AWS ECS. During
            the development of the stack I was leading the continues improvement
            of the Airflow stack through the expanding of its unit and
            integration testing as well as creating generic Airflow operators
            and plugins to support carrying out actions on Airflow in a
            standardized way.
          </p>
          <p>
            This focus on improvement of the stacks tools and standardization
            has lead to increases ability for tenants on the platform to self
            service features whilst still maintaining quality and integration
            patterns with external systems to the Data engineering teams
            internal standards.
          </p>
        </span>
      </div>
    </>
  )
}

const data: { skills: Skill[] } = {
  skills: [
    {
      summary: "Modern full stack web development",
      extras: [
        "✅ Latest Javascript, Typescript and ReactJs standards and practices",
        "✅ Focus on testing for a maintainable and scalable codebase",
        "✅ Building custom internal and external user focused solutions",
      ],
    },
    {
      summary: "Developing scalable data engineering pipelines ",
      extras: [
        "✅ Maintaining and developing a dockerized Airflow environment",
        "✅ Developing custom Airflow operators and plugins to support  data ingestion",
        "✅ Using DBT and liquidbase for scalable data warehouse object management",
      ],
    },
    {
      summary: "Building scalable and automated devops solutions",
      extras: [
        "✅ Scalable applications and deployments with tools like docker and kubernetes",
        "✅ Implementing infrastructure as code through tools like ansible and terraform",
        "✅ Building generic and maintainable CICD infrastructure on Jenkins and Github Actions",
      ],
    },
  ],
}
