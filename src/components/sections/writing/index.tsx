import * as React from "react"

import { ProjectCard } from "../../common/card"
import { GridContainer } from "../../common/grid"

import * as styles from "./styles.module.css"

interface IArticle {
  title: string
  summary: string[]
  url: string
  imageUrl: string
}

export const Writing: React.FunctionComponent<{
  heading: string
  headingId: string
  articles: IArticle[]
}> = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.headingWrapper}>
          <a className={styles.headingLink} id={props.headingId}></a>
          <h2>Writing</h2>
          <h3>I like to put projects and thoughts to paper</h3>
        </div>

        {/* Summary */}
        <div className={styles.summary}>
          <SectionSummary />
        </div>

        {/* Article grid */}
        <div className={styles.articleGrid}>
          <ArticleGrid articles={props.articles} />
        </div>
      </div>
    </section>
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
        I have been writing now for around 2 years to improve my technology
        writing and communication skills so far being published on medium.com
        and dev.to as a way to share more resources with developers learning and
        data engineering and devops.
      </p>
    </span>
  )
}

const ArticleGrid: React.FunctionComponent<{
  articles: IArticle[]
}> = (props) => {
  return (
    <div>
      {/* Section grid */}
      <div>
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
  )
}
