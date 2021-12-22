import * as React from "react"
import { Layout } from "../layout"
import { Terminal, TerminalLine } from "../../common/terminal-output"

export const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const [animationState, setAnimationState] = React.useState(
    props.skills.map((skill, index) => (index == 0 ? true : false))
  )
  return (
    <Layout heading={props.heading} headingId={props.headingId}>
      {/* TODO wrap this in a div to give it the standard padding */}
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
    </Layout>
  )
}

interface SkillsProps {
  heading: string
  headingId: string
  skills: { summary: string; extras: string[] }[]
}
