import * as React from "react"
import { Terminal, TerminalLine } from "../../terminal-output"

import "../shared.css"
import * as skillsStyles from "./index.module.css"

export const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const [animationState, setAnimationState] = React.useState(
    props.skills.map((skill, index) => (index == 0 ? true : false))
  )

  return (
    <div className="section_container">
      <div className="section_heading">
        <h2>{props.heading}</h2>
      </div>

      <div className="section_body">
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
  )
}

interface SkillsProps {
  heading: string
  skills: { summary: string; extras: string[] }[]
}
