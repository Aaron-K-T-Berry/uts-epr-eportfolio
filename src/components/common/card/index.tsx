import * as React from "react"
import * as styles from "./styles.module.css"

export const SimpleCard: React.FunctionComponent<{
  title: string
  className?: string
}> = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div>{props.children}</div>
    </div>
  )
}

export const ProjectCard: React.FunctionComponent<{
  title: string
  desc: string
  achievements: string[]
  className?: string
}> = (props) => {
  return (
    <SimpleCard title={props.title} className={props.className}>
      <p className={styles.summary}>{props.desc}</p>
      {props.achievements && (
        <div className={styles.container}>
          <br />
          <h4>Achievements</h4>
          <ul>
            {props.achievements.map((str, index) => {
              return <li key={`achiv-${index}`}>{str}</li>
            })}
          </ul>
        </div>
      )}
    </SimpleCard>
  )
}
