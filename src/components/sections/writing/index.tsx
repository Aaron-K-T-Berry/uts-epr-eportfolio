import * as React from "react"
import { Layout } from "../layout"

export const Writing: React.FunctionComponent<{
  heading: string
  articles: string[]
}> = (props) => {
  return (
    <Layout heading={props.heading}>
      <ul>
        {props.articles.map((article) => (
          <li key={article}>{article}</li>
        ))}
      </ul>
    </Layout>
  )
}
