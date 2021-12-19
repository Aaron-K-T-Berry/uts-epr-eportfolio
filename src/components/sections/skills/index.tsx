import * as React from "react"
import { Terminal, TerminalLine } from "../../terminal-output"

export const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const [animationState, setAnimationState] = React.useState(
    props.skills.map((skill, index) => (index == 0 ? true : false))
  )

  return (
    <div>
      <div>
        <h2>{props.heading}</h2>
      </div>

      <div>
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
