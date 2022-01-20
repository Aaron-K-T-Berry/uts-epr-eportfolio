import * as React from "react"
import {
  TechIconList,
  StylesProps as TechIconListStyles,
} from "../tech-icon-list"
import { Link } from "../link"
import icons from "./icons"
import * as styles from "./styles.module.css"

export const SimpleCard: React.FunctionComponent<{
  title: string
  titleLink?: string
  outboundLink?: boolean
  imageUrl?: string
}> = (props) => {
  return (
    <div className={styles.card}>
      {/* Card title */}
      <div className={styles.cardHeading}>
        {props.titleLink ? (
          <h3>
            <Link outbound={props.outboundLink} chevron={props.outboundLink} href={props.titleLink} text={props.title} />
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
  outboundLink?: boolean
  desc: string[]
  achievements?: string[]
  technologies?: string[]
  technologyStyles?: TechIconListStyles
  technologySize?: "small" | "medium"
  imageUrl?: string
}> = (props) => {
  return (
    <SimpleCard
      title={props.title}
      titleLink={props.titleLink}
      outboundLink={props.outboundLink}
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

      {props.technologies && (
        <TechIconList
          technologies={props.technologies}
          styles={props.technologyStyles}
          size={props.technologySize}
        />
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
  technologies?: string[]
}> = (props) => {
  return (
    <ProjectCard
      title={props.title}
      titleLink={props.url}
      outboundLink={true}
      desc={props.desc}
      achievements={props.achievements}
      technologies={props.technologies}
      technologySize="small"
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
              <SVGText svg={icons.StarIcon} text={props.starGazerCount} />
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
              <SVGText svg={icons.ForkIcon} text={props.forkCount} />
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
