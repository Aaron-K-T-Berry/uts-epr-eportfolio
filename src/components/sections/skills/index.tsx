import * as React from "react"
import { Terminal, TerminalLine } from "../../common/terminal-output"
import { TechIconList } from "../../common/tech-icon-list"
import { useOnScreen } from "../../../utility/on-screen-hook"
import { data } from "./data"
import * as styles from "./styles.module.css"
import { StaticImage } from "gatsby-plugin-image"

export const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.sectionWrapper}>
        <div className={styles.headingWrapper}>
          <a className={styles.headingLink} id={props.headingId}></a>
          <h2>Skills & Tools</h2>
          <h3>My Toolbox & Things I Can Do</h3>
        </div>

        {/* How I use skills and tools in projects */}
        <div>
          <p>
            I am always looking to expand my toolbox of skills to build
            solutions that are simple and easy for any developer to understand.
          </p>
        </div>

        <TerminalShowcase skills={data.skills} />

        {/* Specific list of the skills and tools I use */}
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
              "git",
            ]}
            styles={{
              listPadding: "2rem 0 2rem 0",
              iconPadding: "0 0 1rem 0",
              color: "white",
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
          <h3>Leadership</h3>
          <p>
            The projects I am most proud of are those where I have had a
            leadership role, and have been able to have a degree of ownership
            and accountability for the project outputs. Some of these projects,
            and my role in them include:
          </p>
        </span>
      </div>

      <div className={subSectionClass}>
        <span>
          <h4>Introduction of a new technology stacks</h4>
          <p>
            The organization I worked for did not currently have a standard
            pattern for building and deploying modern web applications to
            production. To support the loading of custom asset commentaries a
            web application stack was built with React, Material Ui and
            ExpressJs to implement modern, scalable and maintainable standards
            and tools.
          </p>
          <p>
            After I conducted the initial proof of concept for the stack I was
            able to lead a team of developers to build this application in 6
            months using feedback from end users to integrate it into their
            current business dashboards. This stack was successfully deployed to
            production without any major defects and servers on average 10,000
            request a month.
          </p>
        </span>
      </div>

      <div className={subSectionClass}>
        <span>
          <h4>Continuous improvements in Airflow environments</h4>
          <p>
            With my time working on a data engineering team we maintained and
            developed on a self managed Airflow stack running on AWS ECS. During
            the development of the stack I was leading the continuous
            improvement of the Airflow stack through the expanding of its unit
            and integration testing as well as creating generic Airflow
            operators and plugins to support carrying out actions on Airflow in
            a standardized way.
          </p>
          <p>
            This focus on improvement of the stacks tools and standardization
            increased ability for tenants on the platform to self service
            features and pipelines whilst still maintaining a standard of
            quality and integration patterns with external systems to the Data
            engineering teams internal standards in a way that can be easily
            managed by a small team into he future.
          </p>
        </span>
      </div>
    </>
  )
}

interface SkillsProps {
  headingId: string
}

export interface Skill {
  summary: string
  extras: string[]
}
