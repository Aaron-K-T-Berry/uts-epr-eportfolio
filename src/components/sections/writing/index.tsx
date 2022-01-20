import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import { ProjectCard } from "../../common/card"
import { GridContainer } from "../../common/grid"

import * as styles from "./styles.module.css"

export const Writing: React.FunctionComponent<{
  headingId: string
}> = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div>
          <span className={styles.headingLink} id={props.headingId}></span>
          <h2>Research and Writing</h2>
          <h3>I like to put projects and thoughts to paper</h3>
        </div>

        <div className={styles.summary}>
          <SectionSummary />
        </div>

        <div className={styles.articleGrid}>
          <ArticleGrid articles={data.articles} />
        </div>
      </div>

      <StaticImage
        className={styles.sectionImage}
        layout="fullWidth"
        alt="Astronaut falling from planet"
        src={"../../../images/astro-3.png"}
        formats={["auto", "webp", "avif"]}
      />
    </section>
  )
}

const SectionSummary = () => {
  return (
    <span>
      <p>
        I have found writing to be a great way to solidify my learning on some
        of the projects I have working on both my personal time as well as my
        professional work. I have been writing now for around 2 years to improve
        my technology writing and communication skills so far being published on
        medium.com and dev.to as a way to share more resources with developers
        learning and data engineering and devops, currently I am averaging 2000
        readers a month across my articles.
      </p>
    </span>
  )
}

const ArticleGrid: React.FunctionComponent<{
  articles: IArticle[]
}> = (props) => {
  return (
    <div>
      <div>
        <GridContainer>
          {props.articles.map((article, index) => {
            if (index > 0) {
              return (
                <ProjectCard
                  title={article.title}
                  desc={article.summary}
                  titleLink={article.url}
                  outboundLink={true}
                  technologies={article.technologies || undefined}
                  technologySize="small"
                />
              )
            } else {
              return (
                <div className="grid_item_focus">
                  <ProjectCard
                    title={article.title}
                    desc={article.summary}
                    titleLink={article.url}
                    outboundLink={true}
                    technologies={article.technologies || undefined}
                    technologySize="small"
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

const data = {
  heading: "Technology Writing",
  articles: [
    {
      title: "Airflow DAG and Task Markdown Docs",
      summary: [
        "I have been developing a lot of operators and pipelines on the airflow platform where the workflows may be used by other operators who may not necessarily understand the source code for that workflow. In this article I looked at how you can used inline documentation of Airflow DAGs and tasks in common formats like markdown so operators can have an easier view and understanding of how it works in the Airflow ui directly.",
        "As an ongoing theme in the writing and projects I have been looking at how you can build and operate on Airflow easier has been a key idea I have been exploring as I think it is a powerful platform that can be confusing to initially begin using for many Data Engineers.",
      ],
      url: "https://levelup.gitconnected.com/airflow-dag-and-task-markdown-docs-2c00c72152b4",
      imageUrl: "https://miro.medium.com/max/1400/1*bFZ6qSsSNTLayT0Vr1tqXw.png",
      technologies: ["airflow", "python", "markdown"],
    },
    {
      title:
        "Generating Swagger API Docs And UI Automatically For Express.js Apps",
      summary: [
        "Whilst developing a React and Express Js web application I explored some scalable ways that API documentation can be maintained in the long term. Through this project I integrated automatic swagger API doc generation onto the Express Js routes inline.",
        "Through this project developers now could maintain the API documentation inline with the routes themselves encouraging dev's to keep the api documentation up to date when they are working on the project in the future again focusing on how we can build software that is easier to scale and maintain in the future.",
      ],
      url: "https://levelup.gitconnected.com/generating-swagger-api-docs-and-ui-automatically-for-express-js-apps-2ea1436a0f59",
      imageUrl: "https://miro.medium.com/max/1400/1*7ZKm-fPKuGkr8UG-jbqfWQ.png",
      technologies: ["javascript", "express", "swagger"],
    },
    {
      title: "Creating proxmox templates with packer",
      summary: [
        "In my own time I enjoy playing with virtualization technologies like proxmox for my personal Homelab for software development. In this article I talk about how you can use a tool like Packer to automatically build and publish a KVM image onto a proxmox cluster inline with devops best practices for building and managing base images.",
        "Projects like this are great fun to explore how you can implement devops best practices and learn more about how virtualization works under the hood when running it on hardware to find the most effective way to provision things like disks and networking in a maintainable and secure way.",
      ],
      url: "https://aaron-kt-berry.medium.com/creating-proxmox-templates-with-packer-7ada62474c44",
      imageUrl: "https://miro.medium.com/max/700/1*NRt0va8zdrfVflJL6ZLN1A.jpeg",
      technologies: ["proxmox", "packer", "linux"],
    },
  ] as IArticle[],
}

interface IArticle {
  title: string
  summary: string[]
  url: string
  imageUrl: string
  technologies?: string[]
}
