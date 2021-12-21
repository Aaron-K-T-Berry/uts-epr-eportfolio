import * as React from "react"
import { FlexBox, FlexItem } from "../flex-box"

import StarIcon from "./star.svg"
import * as ForkIcon from "./fork.svg"

import * as styles from "./styles.module.css"

export const SimpleCard: React.FunctionComponent<{
  title: string
}> = (props) => {
  return (
    <div className={styles.card}>
      <h3>{props.title}</h3>
      <div>{props.children}</div>
    </div>
  )
}

export const ProjectCard: React.FunctionComponent<{
  title: string
  desc: string
  achievements?: string[]
}> = (props) => {
  return (
    <SimpleCard title={props.title}>
      {/* Summary */}
      <p className={styles.summary}>{props.desc}</p>

      {/* Achievements */}
      {props.achievements && (
        <div className={styles.container}>
          <br />
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
  desc: string
  url: string
  achievements?: string[]
  language?: { name: string; colour: string }
  startGazerCount?: number
  forkCount?: number
}> = (props) => {
  return (
    <ProjectCard
      title={props.title}
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
                <StarIcon className="svg" /> {props.startGazerCount}
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
              <ForkIcon className="svg" /> {props.forkCount}
            </a>
          )}
        </FlexItem>
      </FlexBox>
    </ProjectCard>
  )
}
