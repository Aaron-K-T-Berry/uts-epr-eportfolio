import * as React from "react"
import { Layout } from "../layout"
import { Terminal, TerminalLine } from "../../common/terminal-output"
import { GridContainer } from "../../common/grid"
import { ProjectCard } from "../../common/card"

import * as styles from "./styles.module.css"

export const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const [animationState, setAnimationState] = React.useState(
    props.skills.map((skill, index) => (index == 0 ? true : false))
  )
  return (
    <Layout heading={props.heading} headingId={props.headingId}>
      {/* Terminal section */}
      <div className={styles.terminalWrapper}>
        <Terminal title="-- bash">
          {props.skills.map((skill, index) => {
            return (
              <TerminalLine
                key={`${skill}-${index}`}
                skill={skill}
                show={animationState[index]}
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

      {/* Detailed Skills Sections */}
      <div className={styles.detailsSkillsWrapper}>
        <GridContainer>
          <ProjectCard
            title="Technical Skills"
            desc={["Im currently working as a Software Engineer in a Data engineering and DevOps team and am currently looking to grow my skills in these areas further. In the past i have worked to develop frontend and backend solutions fro custom facing banking apps."]}
          >
            <div style={{ display: "flex", gap: "2rem" }}>
              <div>
                <h4>Programming Languages</h4>
                <ul>
                  <li>Javascript and TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </div>

              <div>
                <h4>Data Engineering</h4>
                <ul>
                  <li>Snowflake</li>
                </ul>
              </div>

              <div>
                <h4>Devops and Cloud</h4>
                <ul>
                  <li>Ansible</li>
                  <li>Terraform</li>
                  <li>AWS - Certified Solution Architect</li>
                  <li>Azure</li>
                  <li>Digital ocean</li>
                </ul>
              </div>
            </div>
          </ProjectCard>

          <ProjectCard
            title="Transferrable Skills"
            desc={[
              "I have been working effectively as a software engineering within a data engineering and devops teams to release value weekly to the business. I can provide effective support through the following areas",
            ]}
          >
            <div style={{ display: "flex", gap: "5rem" }}>
              <div>
                <h4>General Skills</h4>
                <ul>
                  <li>Providing demos to stakeholders in the business</li>
                </ul>
              </div>
              <div>
                <h4>Agile Development</h4>
                <ul>
                  <li>Writing and refining sprint stories</li>
                  <li>
                    participating in sprint reviews for continues improvements
                    of team processes
                  </li>
                </ul>
              </div>
            </div>
          </ProjectCard>
        </GridContainer>
      </div>
    </Layout>
  )
}

interface SkillsProps {
  heading: string
  headingId: string
  skills: { summary: string; extras: string[] }[]
}
