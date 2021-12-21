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
  achievements?: string[]
  language?: { name: string; colour: string }
}> = (props) => {
  return (
    <ProjectCard
      title={props.title}
      desc={props.desc}
      achievements={props.achievements}
    >
      <FlexBox>
        {true && (
          <FlexItem>
            <a
              className={styles.langColor}
              style={{ backgroundColor: "#555555" }}
            ></a>{" "}
            python
          </FlexItem>
        )}
        {true && (
          <FlexItem>
            <a
              className={styles.githubIcon}
              // target="blank"
              // href={`https://github.com/${user}/${repo}/stargazers`}
            >
              <StarIcon className="svg" /> 35
            </a>
          </FlexItem>
        )}
        {true && (
          <FlexItem>
            <a
              className={styles.githubIcon}
              // target="blank"
              // href={`https://github.com/${user}/${repo}/network`}
            >
              <ForkIcon className="svg" /> 20
            </a>
          </FlexItem>
        )}
      </FlexBox>
    </ProjectCard>
  )
}
