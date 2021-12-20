import * as React from "react"

export const SimpleCard: React.FunctionComponent<{
  title: string, className?: string
}> = (props) => {
  return (<div className={props.className}>
    <h3>{props.title}</h3>
    <div>
      {props.children}
    </div>
  </div>)
}

export const ProjectCard: React.FunctionComponent<{
  title: string, desc: string, className?: string
}> = (props) => {
  return <SimpleCard title={props.title} className={props.className}>
    <p>{props.desc}</p>
  </SimpleCard>
}
