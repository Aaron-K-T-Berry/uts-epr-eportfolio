import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./hero.module.css"

interface AboutMeProps {
  heading: string
  headingId: string
  body: string[]
}

export const AboutMe: React.FunctionComponent<AboutMeProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.aboutMeWrapper}>
        <div className={styles.bioWrapper}>
          <a className={styles.headingLink} id={props.headingId}></a>
          <div className="section_heading">
            <h2>{props.heading}</h2>
          </div>
          <div>
            <span>
              {props.body.map((line) => (
                <p>{line}</p>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <StaticImage
          className={styles.heroImg}
          layout="fullWidth"
          alt="Astronaut boy working on laptop"
          src={"../../../images/astro.jpg"}
          formats={["auto", "webp", "avif"]}
        />
      </div>
    </div>
  )
}
