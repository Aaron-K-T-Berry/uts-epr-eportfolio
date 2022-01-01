import * as React from "react"

import { Layout } from "../layout"
import { ProjectCard } from "../../common/card"
import { GridContainer } from "../../common/grid"

import * as styles from "./styles.module.css"

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
      <div className={styles.wrapper}>
        {/* Section Summary */}
        <div className={styles.summaryWrapper}>
          <SectionSummary />
        </div>

        {/* Section grid */}
        <div className={styles.gridWrapper}>
          <GridContainer>
            {props.articles.map((article, index) => {
              if (index > 0) {
                return (
                  <ProjectCard
                    title={article.title}
                    desc={article.summary}
                    titleLink={article.url}
                  />
                )
              } else {
                return (
                  <div className="grid_item_focus">
                    <ProjectCard
                      title={article.title}
                      desc={article.summary}
                      titleLink={article.url}
                    />
                  </div>
                )
              }
            })}
          </GridContainer>
        </div>
      </div>
    </Layout>
  )
}

const SectionSummary = () => {
  return (
    <span>
      <p>
        I have found writing to be a great way to solidify my learning on some
        of the projects i have working on both my personal time as well as my
        professional work.
      </p>
      <p>
        I have been writing now for around 2 years to improve my technology writing
        and communication skills so far being published on medium.com and dev.to as
        a way to share more resources with developers learning and data engineering
        and devops.
      </p>
    </span>
  )
}
