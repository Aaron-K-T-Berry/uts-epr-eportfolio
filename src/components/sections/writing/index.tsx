import * as React from "react"
import { Layout } from "../layout"
import { ProjectCard } from "../../common/card"
import { GridContainer } from "../../common/grid"

export const Writing: React.FunctionComponent<{
  heading: string
  headingId: string
  articles: {
    title: string
    summary: string[]
    url: string
    imageUrl: string
  }[]
}> = (props) => {
  return (
    <Layout heading={props.heading} headingId={props.headingId}>
      <GridContainer>
        {props.articles.map((article) => {
          return (
            <ProjectCard
              title={article.title}
              desc={article.summary}
              titleLink={article.url}
              imageUrl={article.imageUrl}
            />
          )
        })}
      </GridContainer>
    </Layout>
  )
}
