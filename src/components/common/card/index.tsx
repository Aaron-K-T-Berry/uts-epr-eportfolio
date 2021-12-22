import * as React from "react"
import { FlexBox, FlexItem } from "../flex-box"

import StarIcon from "./star.svg"
import * as ForkIcon from "./fork.svg"

import * as styles from "./styles.module.css"

export const SimpleCard: React.FunctionComponent<{
  title: string
  titleLink?: string
}> = (props) => {
  return (
    <div className={styles.card}>
      {props.titleLink ? (
        <a target="blank" href={props.titleLink}>
          <h3>{props.title}</h3>
        </a>
      ) : (
        <h3>{props.title}</h3>
      )}

      <div className={styles.cardContent}>{props.children}</div>
    </div>
  )
}

export const ProjectCard: React.FunctionComponent<{
  title: string
  titleLink?: string
  desc: string[]
  achievements?: string[]
}> = (props) => {
  return (
    <SimpleCard title={props.title} titleLink={props.titleLink}>
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
  startGazerCount?: number
  forkCount?: number
}> = (props) => {
  return (
    <ProjectCard
      title={props.title}
      titleLink={props.url}
      desc={props.desc}
      achievements={props.achievements}
    >
      <FlexBox>
        {/* Github Primary Language */}
        <FlexItem>
          {props.language && (
            <>
              <a
                className={styles.langColor}
                style={{ backgroundColor: props.language.colour }}
              ></a>{" "}
              {props.language.name}
            </>
          )}
        </FlexItem>

        {/* Github star count */}
        <FlexItem>
          {props.startGazerCount > 0 && (
            <>
              <a
                className={styles.githubIcon}
                target="blank"
                href={`${props.url}/stargazers`}
              >
                <SVGText svg={StarIcon} text={props.forkCount} />
              </a>
            </>
          )}
        </FlexItem>

        {/* Github fork count */}
        <FlexItem>
          {props.forkCount > 0 && (
            <a
              className={styles.githubIcon}
              target="blank"
              href={`${props.url}/network`}
            >
              <SVGText svg={ForkIcon} text={props.forkCount} />
            </a>
          )}
        </FlexItem>
      </FlexBox>
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
