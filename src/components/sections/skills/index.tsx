import * as React from "react"
import { Terminal, TerminalLine } from "../../common/terminal-output"

import * as styles from "./styles.module.css"

interface SkillsProps {
  headingId: string
  skills: { summary: string; extras: string[] }[]
}

export const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const [animationState, setAnimationState] = React.useState(
    props.skills.map((skill, index) => (index == 0 ? true : false))
  )
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
        </div>

        {/* Specific list of the skills and tools i use */}
        <div className={styles.detailsSkillsWrapper}>
          The skills, tools and technologies I use to bring your products to
          life:
          {/* Detailed Skills Sections */}
          <DetailedTools />
        </div>

        {/* Leadership skills section */}
        <div>
          <span>
            <h4>Leadership</h4>
            <p>TODO add some content about the leadership stuff i have done.</p>
          </span>
        </div>
      </div>
    </section>
  )
}

const DetailedTools = () => {
  const ToolsList = [
    { text: "Javascript", icon: "devicon-javascript-plain" },
    { text: "Typescript", icon: "devicon-typescript-plain" },
    { text: "Python", icon: "devicon-python-plain" },
    { text: "Java", icon: "devicon-java-plain" },
    { text: "Bash", icon: "devicon-bash-plain" },

    { text: "React", icon: "devicon-react-original" },
    { text: "ExpressJs", icon: "devicon-express-original" },
    { text: "Jest", icon: "devicon-jest-plain" },
    { text: "Gatsby", icon: "devicon-gatsby-plain" },
    { text: "Material Ui", icon: "devicon-materialui-plain" },

    { text: "AWS", icon: "devicon-amazonwebservices-original" },
    { text: "Digital Ocean", icon: "devicon-digitalocean-plain" },

    { text: "Linux", icon: "devicon-linux-plain" },
    { text: "Docker", icon: "devicon-docker-plain" },
    { text: "Git", icon: "devicon-git-plain" },
  ]

  return (
    <div className={styles.iconsList}>
      {ToolsList.map((tool) => {
        return (
          <div className={styles.icon}>
            <i className={tool.icon}></i>
            <p>{tool.text}</p>
          </div>
        )
      })}
    </div>
  )
}
