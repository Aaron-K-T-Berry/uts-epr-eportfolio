import * as React from "react"
import { Layout } from "../layout"
import { FlexBox } from "../../common/flex-box"
import { ProjectCard } from "../../common/card"


export const Writing: React.FunctionComponent<{
  heading: string
  articles: { title: string; summary: string; imageUri?: string }[]
}> = (props) => {
  return (
    <Layout heading={props.heading}>
      <FlexBox>
        {props.articles.map((article) => (
          <ProjectCard title={article.title} desc={article.summary} className="flex_item" />
        ))}
      </FlexBox>
    </Layout>
  )
}
