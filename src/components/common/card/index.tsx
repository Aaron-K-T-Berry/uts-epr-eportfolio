import * as React from "react"

export const ProjectCard: React.FunctionComponent<{ title: string, desc: string, className?: string }> = (props) => {
  return <div className={props.className}>
    <h3>{props.title}</h3>
    <p>{props.desc}</p>
  </div>
}
