import * as React from "react"
import { Layout } from "../layout"
import { FlexBox, FlexItem } from "../../common/flex-box"
import { ProjectCard } from "../../common/card"

export const Writing: React.FunctionComponent<{
  heading: string
  headingId: string
  articles: { title: string; summary: string; imageUri?: string }[]
}> = (props) => {
  return (
    <Layout heading={props.heading} headingId={props.headingId}>
      <FlexBox>
        {props.articles.map((article) => (
          <FlexItem>
            <ProjectCard title={article.title} desc={article.summary} />
          </FlexItem>
        ))}
      </FlexBox>
    </Layout>
  )
}
