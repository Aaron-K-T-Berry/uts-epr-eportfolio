import * as React from "react"
import { FlexBox, FlexItem } from "../flex-box"

import StarIcon from "./star.svg"
import * as ForkIcon from "./fork.svg"

import * as styles from "./styles.module.css"

export const SimpleCard: React.FunctionComponent<{
  title: string
  titleLink?: string
  imageUrl?: string
}> = (props) => {
  return (
    <div className={styles.card}>
      {/* Card title */}
      <div className={styles.cardHeading}>
        {props.titleLink ? (
          <h3>
            <a target="blank" href={props.titleLink} rel="noopener noreferrer">
              {props.title}
            </a>
          </h3>
        ) : (
          <h3>{props.title}</h3>
        )}
      </div>

      {/* Card image */}
      {props.imageUrl && (
        <div>
          <div
            style={{
              backgroundImage: `url(${props.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "20rem",
              width: "100%",
              padding: "1rem",
            }}
          />
        </div>
      )}

      {/* Card content */}
      <div className={styles.cardContent}>{props.children}</div>
    </div>
  )
}

export const ProjectCard: React.FunctionComponent<{
  title: string
  titleLink?: string
  desc: string[]
  achievements?: string[]
  imageUrl?: string
}> = (props) => {
  return (
    <SimpleCard
      title={props.title}
      titleLink={props.titleLink}
      imageUrl={props.imageUrl}
    >
      {/* Summary */}
      <span>
        {props.desc.map((str) => (
          <p className={styles.summary}>{str}</p>
        ))}
      </span>

      {/* Achievements */}
      {props.achievements && (
        <div className={styles.container}>
          <h4>Achievements</h4>
          <ul>
            {props.achievements.map((str, index) => {
              return <li key={`achiv-${index}`}>{str}</li>
            })}
          </ul>
        </div>
      )}

      {/* Extras */}
      <div>{props.children}</div>
    </SimpleCard>
  )
}

export const GithubRepoCard: React.FunctionComponent<{
  title: string
  desc: string[]
  url: string
  achievements?: string[]
  language?: { name: string; colour: string }
  starGazerCount?: number
  forkCount?: number
}> = (props) => {
  return (
    <ProjectCard
      title={props.title}
      titleLink={props.url}
      desc={props.desc}
      achievements={props.achievements}
    >
      <div className={styles.githubRepoStats}>
        {props.language && (
          <div>
            <a
              className={styles.langColor}
              style={{ backgroundColor: props.language.colour }}
            ></a>{" "}
            {props.language.name}
          </div>
        )}

        {props.starGazerCount > 0 && (
          <div>
            <a
              className={styles.githubIcon}
              target="blank"
              rel="noopener noreferrer"
              href={`${props.url}/stargazers`}
            >
              <SVGText svg={StarIcon} text={props.starGazerCount} />
            </a>
          </div>
        )}

        {props.forkCount > 0 && (
          <div>
            <a
              className={styles.githubIcon}
              target="blank"
              href={`${props.url}/network`}
              rel="noopener noreferrer"
            >
              <SVGText svg={ForkIcon} text={props.forkCount} />
            </a>
          </div>
        )}
      </div>
    </ProjectCard>
  )
}

const SVGText: React.FunctionComponent<{ svg: any; text: string | number }> = (
  props
) => {
  return (
    <div>
      <props.svg className={styles.svg} /> {props.text}
    </div>
  )
}
