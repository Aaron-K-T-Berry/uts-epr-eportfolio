import * as React from "react"
import Typed from "typed.js"

import * as skillsStyles from "./skills.module.css"

export const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const initAnimationState = props.skills.map((skill, index) =>
    index == 0 ? true : false
  )

  const [animationState, setAnimationState] = React.useState(initAnimationState)

  return (
    <div>
      <h2>{props.heading}</h2>

      <div className={skillsStyles.terminal}>
        <div className={skillsStyles.title}>-- bash</div>
        <div className={skillsStyles.body}>
          {props.skills.map((skill, index) => {
            return (
              <Terminal
                key={`${skill}-${index}`}
                skill={skill}
                show={animationState[index]}
                onCompleteFunc={() => {
                  let currentState = [...animationState]
                  currentState[index + 1] = true
                  setAnimationState(currentState)
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

// TODO extract the whole terminal output lifecycle into its own generic component
export const Terminal: React.FunctionComponent<{
  skill: { summary: string; extras: string[] }
  show: boolean
  onCompleteFunc: any
}> = (props) => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)

  React.useEffect(() => {
    if (props.show) {
      const buildTypedOutput = () => {
        let cmd = `${props.skill.summary}`
        props.skill.extras.map((str) => {
          cmd += `^1500\n    \`${str}\``
        })
        return cmd
      }

      const options = {
        strings: [buildTypedOutput()],
        loop: false,
        onComplete: props.onCompleteFunc,
        typeSpeed: 40,
        showCursor: false,
      }

      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options)

      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy()
      }
    }
  }, [props.show])

  return (
    <div>
      <span style={{ color: "#ff00df", display: props.show ? "" : "none" }}>
        user@local:~${" "}
      </span>
      <span style={{ whiteSpace: "pre" }} ref={el} />
    </div>
  )
}

interface SkillsProps {
  heading: string
  skills: { summary: string; extras: string[] }[]
}
