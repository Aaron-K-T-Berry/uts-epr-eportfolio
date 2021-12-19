import * as React from "react"
import Typed from "typed.js"

import * as terminalStyles from "./terminal.module.css"

export const Terminal: React.FunctionComponent<{ title: string }> = (props) => {
  return (
    <div className={terminalStyles.terminal}>
      <div className={terminalStyles.title}>{props.title}</div>
      <div className={terminalStyles.body}>{props.children}</div>
    </div>
  )
}

export const TerminalLine: React.FunctionComponent<{
  skill: { summary: string; extras: string[] }
  show: boolean
  onCompleteFunc: any
  delay: number
}> = (props) => {
  // Create reference to store the DOM element containing the animation
  const targetEl = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)

  React.useEffect(() => {
    if (props.show) {
      const options = {
        strings: [
          buildTypedOutput(
            props.skill.summary,
            props.skill.extras,
            props.delay
          ),
        ],
        loop: false,
        onComplete: props.onCompleteFunc,
        typeSpeed: 40,
        showCursor: false,
      }

      // elRef refers to the <span> rendered below
      typed.current = new Typed(targetEl.current, options)

      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy()
      }
    }
  }, [props.show])

  return (
    <div>
      <span style={{ color: "#ff00df", display: showPromptText(props.show) }}>
        user@local:~${" "}
      </span>
      <span style={{ whiteSpace: "pre" }} ref={targetEl} />
    </div>
  )
}

const showPromptText = (show: boolean) => (show ? "" : "none")

const buildTypedOutput = (summary: string, extras: string[], delay: number) => {
  let cmd = `${summary}`
  extras.map((str) => {
    cmd += `^${delay}\n    \`${str}\``
  })
  return cmd
}
