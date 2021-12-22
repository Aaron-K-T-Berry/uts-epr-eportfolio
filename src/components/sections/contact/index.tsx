import * as React from "react"
import { Layout } from "../layout"

export const Contact: React.FunctionComponent<{
  heading: string
  headingId: string
}> = (props) => {
  return (
    <Layout heading={props.heading} headingId={props.headingId}>
      TODO placeholder content
    </Layout>
  )
}
