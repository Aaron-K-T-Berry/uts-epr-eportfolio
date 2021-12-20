import * as React from "react"
import { Layout } from "../layout"
import { FlexBox } from "../../common/flex-box"
import { ProjectCard } from "../../common/card"

const temp = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."

export const Projects: React.FunctionComponent<{
  heading: string
  professionalProjects: string[]
  publicProjects: string[]
}> = (props) => {
  return (
    <Layout heading={props.heading}>
      <FlexBox>
        {props.professionalProjects.map((project) => (
          <ProjectCard title={project} desc={temp} className="flex_item" />
        ))}
      </FlexBox>
      <FlexBox>
        {props.publicProjects.map((project) => (
          <ProjectCard title={project} desc={temp} className="flex_item" />
        ))}
      </FlexBox>
    </Layout>
  )
}
