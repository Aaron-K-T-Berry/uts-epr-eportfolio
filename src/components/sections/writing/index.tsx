import * as React from "react"
import CSS from "csstype"

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
          <span>
            <p>
              In my Free time i enjoy reading and writing about technology and
              things i am working on. I find this has been a great way to
              process the things i have been learning about and see how they can
              integrate into more of the things i have learning ver my career.
            </p>
            <p>
              In my Free time i enjoy reading and writing about technology and
              things i am working on. I find this has been a great way to
              process the things i have been learning about and see how they can
              integrate into more of the things i have learning ver my career.
            </p>
            <p>
              In my Free time i enjoy reading and writing about technology and
              things i am working on. I find this has been a great way to
              process the things i have been learning about and see how they can
              integrate into more of the things i have learning ver my career.
            </p>
          </span>
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
